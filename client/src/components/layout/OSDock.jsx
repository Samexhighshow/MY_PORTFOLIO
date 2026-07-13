import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const ALL_APPS = [
    { name: 'Home', path: '/', icon: 'home' },
    { name: 'About', path: '/about', icon: 'person' },
    { name: 'Projects', path: '/projects', icon: 'folder_open' },
    { name: 'Experience', path: '/experience', icon: 'work_history' },
    { name: 'Services', path: '/services', icon: 'design_services' },
    { name: 'Cyber Command', path: '/cybersecurity', icon: 'security' },
    { name: 'Transmissions', path: '/blog', icon: 'article' },
    { name: 'CV / Resume', path: '/resume', icon: 'description' },
    { name: 'Contact', path: '/contact', icon: 'mail' }
];

// Mobile explicitly shows these 3 + the Menu button
const MOBILE_PRIMARY = ['Home', 'About', 'Projects'];

export default function OSDock() {
    const [hoveredApp, setHoveredApp] = useState(null);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const location = useLocation();

    // Close drawer when route changes
    React.useEffect(() => {
        setIsDrawerOpen(false);
    }, [location.pathname]);

    return (
        <>
            {/* Desktop Dock */}
            <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 hidden md:flex">
                <div className="flex items-end gap-3 px-5 py-3.5 bg-surface/50 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.1)] relative group/dock">
                    {/* Subtle Dock Gradient Glow */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/5 via-secondary-fixed/5 to-tertiary-fixed/5 opacity-0 group-hover/dock:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                    {/* Active Route Indicator */}
                    
                    {ALL_APPS.map((app) => {
                        const isActive = location.pathname === app.path;
                        return (
                            <NavLink 
                                key={app.name} 
                                to={app.path}
                                onMouseEnter={() => setHoveredApp(app.name)}
                                onMouseLeave={() => setHoveredApp(null)}
                                className="relative group outline-none"
                            >
                                <motion.div 
                                    className={`w-12 h-12 rounded-2xl flex items-center justify-center border transition-colors relative z-10 ${
                                        isActive 
                                        ? 'bg-primary/20 border-primary/50 text-primary shadow-[0_0_20px_rgba(0,251,251,0.3)]' 
                                        : 'bg-white/5 border-white/10 text-on-surface-variant hover:bg-white/10 hover:text-white hover:border-white/20'
                                    }`}
                                    whileHover={{ scale: 1.25, y: -12 }}
                                    transition={{ type: "spring", stiffness: 500, damping: 25 }}
                                >
                                    <span className="material-symbols-outlined text-[24px]">{app.icon}</span>
                                </motion.div>

                                {/* Tooltip */}
                                <AnimatePresence>
                                    {hoveredApp === app.name && (
                                        <motion.div 
                                            initial={{ opacity: 0, y: 15, scale: 0.9 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.9 }}
                                            className="absolute -top-14 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-black/80 backdrop-blur-md text-white text-[12px] font-label-caps tracking-widest rounded-lg border border-white/20 shadow-2xl whitespace-nowrap pointer-events-none z-50"
                                        >
                                            {app.name}
                                            {/* Tooltip Arrow */}
                                            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-black/80 border-r border-b border-white/20 transform rotate-45"></div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                                
                                {/* Active Dot */}
                                {isActive && (
                                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary shadow-[0_0_5px_rgba(0,251,251,0.8)]"></div>
                                )}
                            </NavLink>
                        );
                    })}
                </div>
            </div>

            {/* Mobile Dock */}
            <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
                <div className="flex items-center justify-around px-2 py-3 bg-surface/70 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.1)]">
                    {ALL_APPS.filter(app => MOBILE_PRIMARY.includes(app.name)).map(app => {
                        const isActive = location.pathname === app.path;
                        return (
                            <NavLink 
                                key={app.name} 
                                to={app.path}
                                className="relative flex flex-col items-center gap-1 w-16"
                            >
                                <div className={`w-11 h-11 rounded-2xl flex items-center justify-center border transition-all ${
                                    isActive 
                                    ? 'bg-primary/20 border-primary/50 text-primary shadow-[0_0_15px_rgba(0,251,251,0.2)] scale-110' 
                                    : 'bg-white/5 border-transparent text-on-surface-variant'
                                }`}>
                                    <span className="material-symbols-outlined text-[20px]">{app.icon}</span>
                                </div>
                                <span className={`text-[10px] font-label-caps tracking-wider ${isActive ? 'text-primary' : 'text-on-surface-variant'}`}>
                                    {app.name}
                                </span>
                            </NavLink>
                        );
                    })}

                    {/* Mobile Menu Toggle (App Drawer) */}
                    <button 
                        onClick={() => setIsDrawerOpen(!isDrawerOpen)}
                        className="relative flex flex-col items-center gap-1 w-16"
                    >
                        <div className={`w-11 h-11 rounded-2xl flex items-center justify-center border transition-all ${
                            isDrawerOpen 
                            ? 'bg-secondary-fixed/20 border-secondary-fixed/50 text-secondary-fixed shadow-[0_0_15px_rgba(208,188,255,0.2)] scale-110' 
                            : 'bg-white/5 border-transparent text-on-surface-variant'
                        }`}>
                            <span className="material-symbols-outlined text-[20px]">{isDrawerOpen ? 'close' : 'apps'}</span>
                        </div>
                        <span className={`text-[10px] font-label-caps tracking-wider ${isDrawerOpen ? 'text-secondary-fixed' : 'text-on-surface-variant'}`}>
                            {isDrawerOpen ? 'Close' : 'Apps'}
                        </span>
                    </button>
                </div>
            </div>

            {/* Mobile App Drawer Overlay */}
            <AnimatePresence>
                {isDrawerOpen && (
                    <motion.div 
                        initial={{ opacity: 0, y: "100%" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-40 bg-surface/95 backdrop-blur-3xl md:hidden pt-24 px-6 pb-32 overflow-y-auto"
                    >
                        <h2 className="font-display-lg text-2xl text-white mb-8 border-b border-white/10 pb-4">All Applications</h2>
                        <div className="grid grid-cols-3 gap-6">
                            {ALL_APPS.filter(app => !MOBILE_PRIMARY.includes(app.name)).map(app => (
                                <NavLink 
                                    key={app.name} 
                                    to={app.path}
                                    className="flex flex-col items-center gap-3 group"
                                >
                                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-white/10 group-hover:border-white/20 transition-all shadow-lg group-hover:-translate-y-1">
                                        <span className="material-symbols-outlined text-[28px]">{app.icon}</span>
                                    </div>
                                    <span className="text-[11px] font-label-caps tracking-widest text-on-surface-variant text-center leading-tight">
                                        {app.name}
                                    </span>
                                </NavLink>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
