import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function BootSequence({ onComplete }) {
    const [terminalLines, setTerminalLines] = useState([]);

    useEffect(() => {
        const lines = [
            "MAXIMUS OS v2.4.1 initialized.",
            "Loading core kernel modules...",
            "Establishing secure proxy connections...",
            "Decrypting architectural archives...",
            "System boot sequence complete. Access granted."
        ];
        
        let currentLine = 0;
        const interval = setInterval(() => {
            setTerminalLines(prev => [...prev, lines[currentLine]]);
            currentLine++;
            
            if (currentLine >= lines.length) {
                clearInterval(interval);
                // Hold the final screen for 2.5 seconds before fading out
                setTimeout(() => onComplete(), 2500);
            }
        }, 600); // 600ms between each line printing
        
        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, filter: 'blur(10px)' }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[99999] bg-[#0e131f] flex flex-col justify-center items-center font-mono pointer-events-auto"
        >
            <div className="w-full max-w-3xl px-6">
                {terminalLines.map((line, i) => (
                    <motion.div 
                        key={i} 
                        initial={{ opacity: 0, x: -10 }} 
                        animate={{ opacity: 1, x: 0 }} 
                        className="text-secondary-fixed text-sm md:text-base tracking-wider mb-2"
                    >
                        <span className="text-primary-fixed mr-2">{'>'}</span>
                        {line}
                    </motion.div>
                ))}
                <motion.div 
                    animate={{ opacity: [1, 0] }} 
                    transition={{ repeat: Infinity, duration: 0.8 }} 
                    className="w-3 h-5 bg-secondary-fixed mt-2 inline-block"
                ></motion.div>
            </div>
        </motion.div>
    );
}
