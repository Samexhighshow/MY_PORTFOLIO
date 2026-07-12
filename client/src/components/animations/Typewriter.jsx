import React, { useState, useEffect } from 'react';

export default function Typewriter({ roles = [], typingSpeed = 100, deletingSpeed = 50, pauseTime = 2000 }) {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);

    useEffect(() => {
        if (!roles || roles.length === 0) return;

        const i = loopNum % roles.length;
        const fullText = roles[i];

        let typeSpeed = isDeleting ? deletingSpeed : typingSpeed;

        if (!isDeleting && text === fullText) {
            typeSpeed = pauseTime;
        }

        const timer = setTimeout(() => {
            if (!isDeleting && text === fullText) {
                setIsDeleting(true);
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            } else {
                setText(fullText.substring(0, text.length + (isDeleting ? -1 : 1)));
            }
        }, typeSpeed);

        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, roles, typingSpeed, deletingSpeed, pauseTime]);

    return (
        <span className="typewriter">{text}</span>
    );
}
