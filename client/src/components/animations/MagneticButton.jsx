import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useSound } from '../../context/SoundContext';

export default function MagneticButton({ children, className = '', onClick, type = 'button' }) {
    const ref = useRef(null);
    const { playHover, playClick } = useSound();

    const handleMouseMove = (e) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        ref.current.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    };

    const handleMouseLeave = () => {
        if (!ref.current) return;
        ref.current.style.transform = `translate(0px, 0px)`;
    };

    const handleMouseEnter = () => {
        playHover();
    };

    const handleClick = (e) => {
        playClick();
        if (onClick) onClick(e);
    };

    return (
        <button
            ref={ref}
            type={type}
            className={`magnetic-button ${className}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
            onClick={handleClick}
        >
            {children}
        </button>
    );
}
