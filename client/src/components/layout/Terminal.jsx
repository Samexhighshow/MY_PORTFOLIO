import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Terminal() {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState('');
    const [history, setHistory] = useState([
        { type: 'system', text: 'MAXIMUS OS v2.4.1 - Terminal Access Granted.' },
        { type: 'system', text: 'Type "help" for a list of available commands.' }
    ]);
    const inputRef = useRef(null);
    const bottomRef = useRef(null);
    const navigate = useNavigate();

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
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
        if (bottomRef.current) {
            bottomRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [isOpen, history]);

    const handleCommand = (e) => {
        if (e.key === 'Enter') {
            const cmd = input.trim().toLowerCase();
            const newHistory = [...history, { type: 'user', text: `root@maximus:~$ ${input}` }];
            
            switch(cmd) {
                case 'help':
                    newHistory.push({ type: 'system', text: 'Commands: whoami, projects, experience, contact, clear, exit' });
                    break;
                case 'whoami':
                    newHistory.push({ type: 'system', text: 'MAXIMUS - Cybersecurity Architect & Enterprise Engineer.' });
                    navigate('/experience');
                    break;
                case 'projects':
                    newHistory.push({ type: 'system', text: 'Initializing project archive...' });
                    navigate('/projects');
                    break;
                case 'experience':
                    newHistory.push({ type: 'system', text: 'Accessing professional records...' });
                    navigate('/experience');
                    break;
                case 'contact':
                    newHistory.push({ type: 'system', text: 'Opening encrypted channel...' });
                    navigate('/contact');
                    break;
                case 'clear':
                    setHistory([]);
                    setInput('');
                    return;
                case 'exit':
                    setIsOpen(false);
                    break;
                case '':
                    break;
                default:
                    newHistory.push({ type: 'error', text: `Command not found: ${cmd}. Type "help".` });
            }
            
            setHistory(newHistory);
            setInput('');
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div 
                    initial={{ y: '-100%', opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: '-100%', opacity: 0 }}
                    transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                    className="fixed top-0 left-0 w-full h-[50vh] bg-surface-container-highest/95 backdrop-blur-xl border-b border-secondary-fixed/30 z-[10000] p-6 font-mono text-sm overflow-y-auto shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
                >
                    <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-2">
                        <span className="text-secondary-fixed font-bold tracking-widest">ROOT TERMINAL</span>
                        <button onClick={() => setIsOpen(false)} className="text-on-surface-variant hover:text-error transition-colors material-symbols-outlined text-sm">close</button>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                        {history.map((line, i) => (
                            <div key={i} className={`${line.type === 'error' ? 'text-error' : line.type === 'user' ? 'text-on-surface' : 'text-secondary'}`}>
                                {line.text}
                            </div>
                        ))}
                        <div ref={bottomRef} />
                    </div>
                    
                    <div className="flex items-center text-on-surface">
                        <span className="text-primary-fixed mr-2">root@maximus:~$</span>
                        <input
                            ref={inputRef}
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleCommand}
                            className="bg-transparent outline-none border-none flex-grow text-on-surface placeholder:text-on-surface-variant/50"
                            autoComplete="off"
                            spellCheck="false"
                        />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
