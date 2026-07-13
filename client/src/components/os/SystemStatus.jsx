import React, { useState, useEffect } from 'react';
import { useProfileData } from '../../hooks/useProfileData';

export default function SystemStatus() {
    const { loading, error } = useProfileData();
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const formatTime = (date) => {
        return date.toLocaleTimeString('en-US', { hour12: false });
    };

    return (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[60] flex items-center gap-4 bg-surface/80 backdrop-blur-xl border border-white/20 px-5 py-2 rounded-full shadow-2xl pointer-events-none hidden lg:flex">
            
            {/* Version */}
            <div className="flex items-center gap-2 border-r border-white/10 pr-4">
                <span className="material-symbols-outlined text-[14px] text-outline">memory</span>
                <span className="font-mono-code text-[10px] text-outline uppercase">OS v2.1.0</span>
            </div>

            {/* Time */}
            <div className="flex items-center gap-2 border-r border-white/10 pr-4">
                <span className="material-symbols-outlined text-[14px] text-outline">schedule</span>
                <span className="font-mono-code text-[10px] text-outline">{formatTime(time)}</span>
            </div>

            {/* API Status */}
            <div className="flex items-center gap-2 border-r border-white/10 pr-4">
                <span className="material-symbols-outlined text-[14px] text-outline">dns</span>
                <div className="flex items-center gap-1">
                    <div className={`w-2 h-2 rounded-full ${loading ? 'bg-yellow-500 animate-pulse' : error ? 'bg-red-500' : 'bg-green-500'}`}></div>
                    <span className="font-mono-code text-[10px] text-outline uppercase">{loading ? 'SYNCING' : error ? 'API ERROR' : 'API ONLINE'}</span>
                </div>
            </div>

            {/* System Status */}
            <div className="flex items-center gap-2 pr-2">
                <span className="material-symbols-outlined text-[14px] text-secondary-fixed">shield</span>
                <span className="font-mono-code text-[10px] text-secondary-fixed uppercase">SECURE</span>
            </div>

        </div>
    );
}
