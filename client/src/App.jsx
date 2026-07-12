import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Spotlight from './components/animations/Spotlight';
import CyberOverlay from './components/animations/CyberOverlay';
import CyberCursor from './components/animations/CyberCursor';
import PageTransition from './components/animations/PageTransition';
import SystemStatus from './components/layout/SystemStatus';
import Terminal from './components/layout/Terminal';
import Home from './pages/Home';
import ProjectsShowcase from './pages/ProjectsShowcase';
import Experience from './pages/Experience';
import Certifications from './pages/Certifications';
import Contact from './pages/Contact';

function App() {
    const location = useLocation();

    // Scroll to top on route change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

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

        return () => {
            lenis.destroy();
        };
    }, []);

    return (
        <div className="App flex flex-col min-h-screen relative bg-transparent cursor-none">
            <CyberCursor />
            <Terminal />
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
                        <Route path="/certifications" element={<PageTransition><Certifications /></PageTransition>} />
                        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
                    </Routes>
                </AnimatePresence>
            </div>
            <Footer />
        </div>
    );
}

export default App;
