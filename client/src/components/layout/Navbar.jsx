import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { useSound } from '../../context/SoundContext';

export default function Navbar() {
    const { theme, toggleTheme } = useTheme();
    const { isMuted, toggleMute, playHover, playClick } = useSound();

    return (
        <nav className="fixed top-0 w-full z-50 border-b border-white/10 backdrop-blur-md bg-transparent h-20 transition-all duration-500">
            <div className="flex justify-between items-center w-full px-margin-mobile md:px-stack-lg max-w-container-max mx-auto h-full">
                {/* Brand Logo */}
                <Link to="/" className="font-headline-md text-[28px] md:text-[32px] font-extrabold tracking-[0.15em] relative group cursor-pointer select-none no-underline z-10">
                    <span className="bg-gradient-to-r from-secondary-container via-primary-fixed-dim to-tertiary-fixed-dim text-transparent bg-clip-text drop-shadow-[0_0_8px_rgba(0,251,251,0.5)] transition-all duration-500 group-hover:drop-shadow-[0_0_15px_rgba(208,188,255,0.8)] uppercase cyber-glitch" data-text="MAXIMUS">
                        MAXIMUS
                    </span>
                    <div className="absolute -inset-2 bg-gradient-to-r from-secondary-container via-primary to-tertiary-fixed blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-full pointer-events-none"></div>
                </Link>
                
                {/* Utility Controls */}
                <div className="flex items-center space-x-4 md:space-x-6">
                    <Link to="/contact" className="hidden md:block font-label-caps text-label-caps bg-primary text-on-primary px-6 py-2.5 rounded-full hover:scale-95 transition-transform">
                        Contact Me
                    </Link>
                    <button 
                        onClick={() => { toggleMute(); playClick(); }}
                        onMouseEnter={playHover}
                        className="p-2 rounded-full bg-white/5 border border-white/10 text-on-surface hover:bg-white/10 transition-colors"
                        title={isMuted ? "Unmute sound effects" : "Mute sound effects"}
                    >
                        <span className="material-symbols-outlined text-[20px]">
                            {isMuted ? 'volume_off' : 'volume_up'}
                        </span>
                    </button>
                    <span 
                        className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary transition-colors" 
                        onClick={toggleTheme}
                    >
                        {theme === 'dark' ? 'light_mode' : 'dark_mode'}
                    </span>
                </div>
            </div>
        </nav>
    );
}
