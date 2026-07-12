import React, { useState, useEffect } from 'react';

export default function Typewriter({ roles = [], typingSpeed = 100, deletingSpeed = 50, pauseTime = 2000 }) {
    const [currentRoleIdx, setCurrentRoleIdx] = useState(0);
    const [currentCharIdx, setCurrentCharIdx] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');

    useEffect(() => {
        if (!roles || roles.length === 0) return;

        const currentRole = roles[currentRoleIdx];

        const timeout = setTimeout(() => {
            if (isDeleting) {
                setText(currentRole.substring(0, currentCharIdx - 1));
                setCurrentCharIdx(prev => prev - 1);
            } else {
                setText(currentRole.substring(0, currentCharIdx + 1));
                setCurrentCharIdx(prev => prev + 1);
            }

            if (!isDeleting && currentCharIdx === currentRole.length) {
                setIsDeleting(true);
            } else if (isDeleting && currentCharIdx === 0) {
                setIsDeleting(false);
                setCurrentRoleIdx((prev) => (prev + 1) % roles.length);
            }
        }, isDeleting ? deletingSpeed : typingSpeed);

        if (!isDeleting && currentCharIdx === currentRole.length) {
            clearTimeout(timeout);
            setTimeout(() => setIsDeleting(true), pauseTime);
        }

        if (isDeleting && currentCharIdx === 0) {
            clearTimeout(timeout);
            setTimeout(() => {
                setIsDeleting(false);
                setCurrentRoleIdx((prev) => (prev + 1) % roles.length);
            }, 500);
        }

        return () => clearTimeout(timeout);
    }, [currentCharIdx, isDeleting, roles, currentRoleIdx, typingSpeed, deletingSpeed, pauseTime]);

    return (
        <span className="typewriter">{text}</span>
    );
}
