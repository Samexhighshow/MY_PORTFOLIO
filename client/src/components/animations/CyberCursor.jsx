import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CyberCursor() {
    const [isVisible, setIsVisible] = useState(false);
    
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);
    
    // Smooth trailing effect
    const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
            if (!isVisible) setIsVisible(true);
        };
        
        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseEnter = () => setIsVisible(true);

        window.addEventListener('mousemove', moveCursor);
        document.body.addEventListener('mouseleave', handleMouseLeave);
        document.body.addEventListener('mouseenter', handleMouseEnter);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            document.body.removeEventListener('mouseleave', handleMouseLeave);
            document.body.removeEventListener('mouseenter', handleMouseEnter);
        };
    }, [cursorX, cursorY, isVisible]);

    if (!isVisible) return null;

    return (
        <motion.div
            className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] flex items-center justify-center mix-blend-screen"
            style={{
                x: cursorXSpring,
                y: cursorYSpring,
                translateX: '-50%',
                translateY: '-50%',
            }}
        >
            <div className="w-1 h-1 bg-secondary-container rounded-full"></div>
            <div className="absolute w-full h-full border border-secondary-container/50 rounded-full animate-ping opacity-20"></div>
            <div className="absolute w-full h-full border border-secondary-container/30 rounded-full scale-150"></div>
            {/* Crosshairs */}
            <div className="absolute w-full h-[1px] bg-secondary-container/30"></div>
            <div className="absolute h-full w-[1px] bg-secondary-container/30"></div>
        </motion.div>
    );
}
