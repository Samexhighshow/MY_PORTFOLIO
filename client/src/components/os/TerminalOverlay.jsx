import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useProfileData } from '../../hooks/useProfileData';

export default function TerminalOverlay() {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState('');
    const [history, setHistory] = useState([
        { type: 'system', text: 'MAXIMUS OS Terminal v2.1.0' },
        { type: 'system', text: 'Type "help" for a list of available commands.' }
    ]);
    const navigate = useNavigate();
    const { profile } = useProfileData();
    const inputRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === '`' || e.key === '~') {
                e.preventDefault();
                setIsOpen(prev => !prev);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    useEffect(() => {
        if (isOpen) {
            setTimeout(() => inputRef.current?.focus(), 100);
        }
    }, [isOpen]);

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    }, [history, isOpen]);

    const handleCommand = (cmd) => {
        const trimmedCmd = cmd.trim().toLowerCase();
        if (!trimmedCmd) return;

        setHistory(prev => [...prev, { type: 'user', text: `guest@maximus-os:~$ ${trimmedCmd}` }]);

        let response = [];
        switch (trimmedCmd) {
            case 'help':
                response = [
                    'Available commands:',
                    '  about         - Display biography',
                    '  education     - Display academic foundation',
                    '  skills        - List technical capabilities',
                    '  experience    - Navigate to Experience page',
                    '  projects      - Navigate to Projects page',
                    '  blog          - Navigate to Blog',
                    '  contact       - Navigate to Contact page',
                    '  clear         - Clear terminal history',
                    '  exit          - Close terminal overlay'
                ];
                break;
            case 'about':
                response = [profile?.personal?.biography || 'Biography data unavailable.'];
                break;
            case 'education':
                response = [
                    profile?.education?.institution || 'Unknown Institution',
                    profile?.education?.degree || 'Unknown Degree',
                    'Status: ' + (profile?.education?.status || 'Unknown')
                ];
                break;
            case 'skills':
                response = [
                    'Confident:',
                    ...(profile?.skills?.confident?.map(s => `  - ${s.name}`) || []),
                    'Learning:',
                    ...(profile?.skills?.learning?.map(s => `  - ${s.name}`) || [])
                ];
                break;
            case 'experience':
                response = ['Navigating to Experience...'];
                setTimeout(() => { navigate('/experience'); setIsOpen(false); }, 500);
                break;
            case 'projects':
                response = ['Navigating to Projects...'];
                setTimeout(() => { navigate('/projects'); setIsOpen(false); }, 500);
                break;
            case 'blog':
                response = ['Navigating to Blog...'];
                setTimeout(() => { navigate('/blog'); setIsOpen(false); }, 500);
                break;
            case 'contact':
                response = ['Navigating to Contact...'];
                setTimeout(() => { navigate('/contact'); setIsOpen(false); }, 500);
                break;
            case 'clear':
                setHistory([{ type: 'system', text: 'MAXIMUS OS Terminal v2.1.0' }]);
                return;
            case 'exit':
                setIsOpen(false);
                return;
            default:
                response = [`Command not found: ${trimmedCmd}. Type "help" for a list of commands.`];
        }

        setHistory(prev => [
            ...prev,
            ...response.map(text => ({ type: 'output', text }))
        ]);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleCommand(input);
            setInput('');
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div 
                    initial={{ y: '-100%' }}
                    animate={{ y: 0 }}
                    exit={{ y: '-100%' }}
                    transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
                    className="fixed top-0 left-0 right-0 h-[50vh] bg-background/95 backdrop-blur-3xl border-b border-primary/30 z-[110] shadow-[0_20px_50px_rgba(0,0,0,0.5)] font-mono-code text-[14px]"
                >
                    <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
                    <div className="flex flex-col h-full p-6">
                        <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-4">
                            <span className="text-secondary-fixed text-[12px] uppercase tracking-widest flex items-center gap-2">
                                <span className="material-symbols-outlined text-[16px]">terminal</span> TERMINAL MODE
                            </span>
                            <button onClick={() => setIsOpen(false)} className="text-outline hover:text-white transition-colors text-[12px]">
                                [ESC / ` to close]
                            </button>
                        </div>
                        
                        <div ref={containerRef} className="flex-grow overflow-y-auto space-y-2 mb-4 custom-scrollbar">
                            {history.map((line, idx) => (
                                <div key={idx} className={`${line.type === 'user' ? 'text-secondary-fixed' : line.type === 'system' ? 'text-primary' : 'text-on-surface-variant'}`}>
                                    {line.text}
                                </div>
                            ))}
                        </div>
                        
                        <div className="flex items-center gap-2 text-secondary-fixed">
                            <span>guest@maximus-os:~$</span>
                            <input 
                                ref={inputRef}
                                type="text"
                                className="flex-grow bg-transparent border-none outline-none text-white focus:ring-0 p-0"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={handleKeyDown}
                                autoFocus
                                spellCheck="false"
                            />
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
