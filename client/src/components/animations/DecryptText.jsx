import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+';

export default function DecryptText({ text, className = '' }) {
    const [displayText, setDisplayText] = useState(text.replace(/[a-zA-Z0-9]/g, '-'));
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    useEffect(() => {
        if (!isInView) return;

        let iteration = 0;
        let interval = null;

        const maxIterations = text.length;

        interval = setInterval(() => {
            setDisplayText((prev) => {
                return text
                    .split('')
                    .map((char, index) => {
                        if (index < iteration) {
                            return text[index];
                        }
                        if (char === ' ') return ' ';
                        return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
                    })
                    .join('');
            });

            if (iteration >= maxIterations) {
                clearInterval(interval);
            }

            iteration += 1 / 3; // Slows down the reveal (3 frames per letter)
        }, 30);

        return () => clearInterval(interval);
    }, [isInView, text]);

    return (
        <span ref={ref} className={className}>
            {displayText}
        </span>
    );
}
