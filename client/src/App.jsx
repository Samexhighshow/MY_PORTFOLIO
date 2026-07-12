import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Spotlight from './components/animations/Spotlight';
import CyberOverlay from './components/animations/CyberOverlay';
import CyberCursor from './components/animations/CyberCursor';
import PageTransition from './components/animations/PageTransition';
import BootSequence from './components/animations/BootSequence';
import SystemStatus from './components/os/SystemStatus';
import TerminalOverlay from './components/os/TerminalOverlay';
import CommandPalette from './components/os/CommandPalette';
import useKonamiCode from './hooks/useKonamiCode';
import Home from './pages/Home';
import ProjectsShowcase from './pages/ProjectsShowcase';
import Experience from './pages/Experience';
import Services from './pages/Services';
import Cybersecurity from './pages/Cybersecurity';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
    const location = useLocation();
    useKonamiCode(); // Activates global red-team mode via document.body
    
    const [isBooting, setIsBooting] = useState(() => {
        return !sessionStorage.getItem('hasBooted');
    });
    const [lenisRef, setLenisRef] = useState(null);

    const handleBootComplete = () => {
        sessionStorage.setItem('hasBooted', 'true');
        setIsBooting(false);
    };

    // Scroll to top on route change
    useEffect(() => {
        if (lenisRef) {
            lenisRef.scrollTo(0, { immediate: true });
        }
        window.scrollTo(0, 0);
    }, [location.pathname, lenisRef]);

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            smoothTouch: false,
            touchMultiplier: 2,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
        setLenisRef(lenis);

        return () => {
            lenis.destroy();
        };
    }, []);

    return (
        <div className="App flex flex-col min-h-screen relative bg-transparent cursor-none">
            <AnimatePresence>
                {isBooting && <BootSequence onComplete={handleBootComplete} />}
            </AnimatePresence>
            
            <CyberCursor />
            <TerminalOverlay />
            <CommandPalette />
            <SystemStatus />
            <CyberOverlay />
            <Spotlight />
            <Navbar />
            <div className="flex-grow relative z-10">
                <AnimatePresence mode="wait">
                    <Routes location={location} key={location.pathname}>
                        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
                        <Route path="/projects" element={<PageTransition><ProjectsShowcase /></PageTransition>} />
                        <Route path="/experience" element={<PageTransition><Experience /></PageTransition>} />
                        <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
                        <Route path="/cybersecurity" element={<PageTransition><Cybersecurity /></PageTransition>} />
                        <Route path="/blog" element={<PageTransition><Blog /></PageTransition>} />
                        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
                        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
                    </Routes>
                </AnimatePresence>
            </div>
            <Footer />
        </div>
    );
}

export default App;
