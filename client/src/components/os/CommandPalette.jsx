import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const commandsList = [
    { id: 'home', title: 'Navigate to Home', action: '/', icon: 'home', type: 'navigation' },
    { id: 'projects', title: 'Navigate to Projects', action: '/projects', icon: 'code_blocks', type: 'navigation' },
    { id: 'experience', title: 'Navigate to Experience', action: '/experience', icon: 'work', type: 'navigation' },
    { id: 'services', title: 'Navigate to Services', action: '/services', icon: 'design_services', type: 'navigation' },
    { id: 'cybersecurity', title: 'Navigate to Cybersecurity', action: '/cybersecurity', icon: 'security', type: 'navigation' },
    { id: 'blog', title: 'Navigate to Blog', action: '/blog', icon: 'article', type: 'navigation' },
    { id: 'contact', title: 'Navigate to Contact', action: '/contact', icon: 'mail', type: 'navigation' },
    { id: 'resume', title: 'Open Resume', action: 'resume', icon: 'description', type: 'action' },
    { id: 'github', title: 'Open GitHub', action: 'github', icon: 'terminal', type: 'action' },
    { id: 'theme', title: 'Toggle Theme', action: 'theme', icon: 'dark_mode', type: 'action' }
];

export default function CommandPalette() {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState('');
    const [selectedIndex, setSelectedIndex] = useState(0);
    const navigate = useNavigate();
    const inputRef = useRef(null);

    const filteredCommands = commandsList.filter(cmd => 
        cmd.title.toLowerCase().includes(query.toLowerCase()) || 
        cmd.id.toLowerCase().includes(query.toLowerCase())
    );

    useEffect(() => {
        const handleKeyDown = (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                setIsOpen(prev => !prev);
            }
            if (e.key === 'Escape') setIsOpen(false);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    useEffect(() => {
        if (isOpen) {
            setTimeout(() => inputRef.current?.focus(), 100);
            setQuery('');
            setSelectedIndex(0);
        }
    }, [isOpen]);

    const executeCommand = (cmd) => {
        if (cmd.type === 'navigation') {
            navigate(cmd.action);
        } else if (cmd.action === 'resume') {
            window.open('/resume.pdf', '_blank');
        } else if (cmd.action === 'github') {
            window.open('https://github.com', '_blank');
        } else if (cmd.action === 'theme') {
            // Future theme toggle logic
            alert("Theme toggle initialized.");
        }
        setIsOpen(false);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            setSelectedIndex(prev => (prev + 1) % filteredCommands.length);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            setSelectedIndex(prev => (prev - 1 + filteredCommands.length) % filteredCommands.length);
        } else if (e.key === 'Enter' && filteredCommands[selectedIndex]) {
            e.preventDefault();
            executeCommand(filteredCommands[selectedIndex]);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[10vh] px-4">
                    <motion.div 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        exit={{ opacity: 0 }} 
                        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
                        onClick={() => setIsOpen(false)}
                    />
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95, y: -20 }} 
                        animate={{ opacity: 1, scale: 1, y: 0 }} 
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        transition={{ duration: 0.15 }}
                        className="relative w-full max-w-2xl bg-surface/90 border border-white/20 shadow-2xl rounded-xl overflow-hidden backdrop-blur-xl"
                    >
                        <div className="flex items-center px-4 py-3 border-b border-white/10 gap-3">
                            <span className="material-symbols-outlined text-outline">search</span>
                            <input 
                                ref={inputRef}
                                type="text"
                                className="w-full bg-transparent border-none outline-none text-white font-body-lg text-[16px] placeholder:text-outline"
                                placeholder="Type a command or search..."
                                value={query}
                                onChange={(e) => { setQuery(e.target.value); setSelectedIndex(0); }}
                                onKeyDown={handleKeyDown}
                            />
                            <div className="flex gap-1">
                                <kbd className="bg-white/10 px-2 py-1 rounded text-[10px] font-mono-code text-outline uppercase border border-white/5">ESC</kbd>
                            </div>
                        </div>
                        
                        <div className="max-h-[60vh] overflow-y-auto p-2">
                            {filteredCommands.length === 0 ? (
                                <div className="p-8 text-center text-outline font-body-sm">
                                    No commands found for "{query}"
                                </div>
                            ) : (
                                filteredCommands.map((cmd, idx) => (
                                    <div 
                                        key={cmd.id}
                                        onClick={() => executeCommand(cmd)}
                                        onMouseEnter={() => setSelectedIndex(idx)}
                                        className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-colors ${idx === selectedIndex ? 'bg-primary/20 text-primary' : 'text-on-surface hover:bg-white/5'}`}
                                    >
                                        <span className="material-symbols-outlined text-[20px]">{cmd.icon}</span>
                                        <span className="font-body-md flex-grow">{cmd.title}</span>
                                        <span className="text-[10px] font-mono-code uppercase opacity-50">{cmd.type}</span>
                                    </div>
                                ))
                            )}
                        </div>
                        <div className="bg-surface-container-low px-4 py-2 border-t border-white/10 flex items-center justify-between text-[10px] font-mono-code text-outline">
                            <div className="flex gap-4">
                                <span className="flex items-center gap-1"><kbd className="bg-white/10 px-1 rounded border border-white/5">↑↓</kbd> to navigate</span>
                                <span className="flex items-center gap-1"><kbd className="bg-white/10 px-1 rounded border border-white/5">↵</kbd> to select</span>
                            </div>
                            <span>MAXIMUS OS COMMAND PALETTE</span>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
