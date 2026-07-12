import React, { useEffect, useRef } from 'react';

export default function Spotlight() {
    const spotlightRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (spotlightRef.current) {
                spotlightRef.current.style.setProperty('--x', e.clientX + 'px');
                spotlightRef.current.style.setProperty('--y', e.clientY + 'px');
            }
        };

        document.addEventListener('mousemove', handleMouseMove);
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div 
            ref={spotlightRef} 
            className="spotlight" 
            id="spotlight"
        ></div>
    );
}
