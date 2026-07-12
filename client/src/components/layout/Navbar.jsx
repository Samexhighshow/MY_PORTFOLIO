import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const { theme, toggleTheme } = useTheme();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    // Close mobile menu when route changes
    React.useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location.pathname]);

    return (
        <nav className="fixed top-0 w-full z-50 border-b border-white/10 backdrop-blur-md bg-transparent h-20 transition-all duration-500">
            <div className="flex justify-between items-center w-full px-margin-mobile md:px-stack-lg max-w-container-max mx-auto h-full">
                <Link to="/" className="font-headline-md text-[28px] md:text-[32px] font-extrabold tracking-[0.15em] relative group cursor-pointer select-none no-underline z-10">
                    <span className="bg-gradient-to-r from-secondary-container via-primary-fixed-dim to-tertiary-fixed-dim text-transparent bg-clip-text drop-shadow-[0_0_8px_rgba(0,251,251,0.5)] transition-all duration-500 group-hover:drop-shadow-[0_0_15px_rgba(208,188,255,0.8)] uppercase">
                        MAXIMUS
                    </span>
                    <div className="absolute -inset-2 bg-gradient-to-r from-secondary-container via-primary to-tertiary-fixed blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-full pointer-events-none"></div>
                </Link>
                <div className="hidden md:flex items-center space-x-10">
                    <NavLink to="/" end className={({ isActive }) => `font-label-caps text-label-caps transition-colors duration-300 ${isActive ? 'text-primary border-b-2 border-primary pb-1' : 'text-on-surface-variant hover:text-primary'}`}>
                        Home
                    </NavLink>
                    <NavLink to="/experience" className={({ isActive }) => `font-label-caps text-label-caps transition-colors duration-300 ${isActive ? 'text-primary border-b-2 border-primary pb-1' : 'text-on-surface-variant hover:text-primary'}`}>
                        Engineering
                    </NavLink>
                    <NavLink to="/certifications" className={({ isActive }) => `font-label-caps text-label-caps transition-colors duration-300 ${isActive ? 'text-primary border-b-2 border-primary pb-1' : 'text-on-surface-variant hover:text-primary'}`}>
                        Cybersecurity
                    </NavLink>
                    <NavLink to="/projects" className={({ isActive }) => `font-label-caps text-label-caps transition-colors duration-300 ${isActive ? 'text-primary border-b-2 border-primary pb-1' : 'text-on-surface-variant hover:text-primary'}`}>
                        Projects
                    </NavLink>
                </div>
                <div className="flex items-center space-x-4 md:space-x-6">
                    <Link to="/contact" className="hidden md:block font-label-caps text-label-caps bg-primary text-on-primary px-6 py-2.5 rounded-full hover:scale-95 transition-transform">
                        Contact Me
                    </Link>
                    <span 
                        className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary transition-colors" 
                        onClick={toggleTheme}
                    >
                        {theme === 'dark' ? 'light_mode' : 'dark_mode'}
                    </span>
                    <span 
                        className="material-symbols-outlined text-on-surface-variant cursor-pointer md:hidden hover:text-primary transition-colors select-none"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? 'close' : 'menu'}
                    </span>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-20 left-0 w-full bg-surface md:hidden flex flex-col items-center py-8 gap-6 shadow-2xl z-40 border-b border-outline-variant/20"
                    >
                        <NavLink to="/" end className={({ isActive }) => `font-label-caps text-label-caps transition-colors duration-300 ${isActive ? 'text-primary' : 'text-on-surface-variant hover:text-primary'}`}>
                            Home
                        </NavLink>
                        <NavLink to="/experience" className={({ isActive }) => `font-label-caps text-label-caps transition-colors duration-300 ${isActive ? 'text-primary' : 'text-on-surface-variant hover:text-primary'}`}>
                            Engineering
                        </NavLink>
                        <NavLink to="/certifications" className={({ isActive }) => `font-label-caps text-label-caps transition-colors duration-300 ${isActive ? 'text-primary' : 'text-on-surface-variant hover:text-primary'}`}>
                            Cybersecurity
                        </NavLink>
                        <NavLink to="/projects" className={({ isActive }) => `font-label-caps text-label-caps transition-colors duration-300 ${isActive ? 'text-primary' : 'text-on-surface-variant hover:text-primary'}`}>
                            Projects
                        </NavLink>
                        <div className="w-12 h-[1px] bg-outline-variant/30 my-2"></div>
                        <Link to="/contact" className="font-label-caps text-label-caps bg-primary text-on-primary px-8 py-3 rounded-full hover:scale-95 transition-transform w-3/4 text-center">
                            Contact Me
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
