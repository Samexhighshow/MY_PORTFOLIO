import React, { useState, useEffect } from 'react';

export default function SystemStatus() {
    const [time, setTime] = useState(new Date());
    const [uptime, setUptime] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
            setUptime(prev => prev + 1);
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const formatUptime = (seconds) => {
        const h = Math.floor(seconds / 3600).toString().padStart(2, '0');
        const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
        const s = (seconds % 60).toString().padStart(2, '0');
        return `${h}:${m}:${s}`;
    };

    return (
        <div className="fixed bottom-4 left-4 z-50 pointer-events-none hidden md:flex flex-col gap-1 bg-surface/10 backdrop-blur-md border border-white/10 p-3 rounded-lg shadow-lg">
            <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-secondary-fixed animate-pulse shadow-[0_0_8px_var(--cyan-glow)]"></div>
                <span className="font-label-caps text-[10px] tracking-widest text-secondary-fixed">SYSTEM SECURE</span>
            </div>
            <div className="font-mono text-xs text-on-surface-variant flex gap-4">
                <span>SYS.T: {time.toLocaleTimeString('en-US', { hour12: false })}</span>
                <span>UPT: {formatUptime(uptime)}</span>
            </div>
        </div>
    );
}
