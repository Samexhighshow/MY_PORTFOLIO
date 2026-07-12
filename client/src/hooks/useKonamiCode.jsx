import { useState, useEffect } from 'react';

const KONAMI_CODE = [
    'ArrowUp', 'ArrowUp', 
    'ArrowDown', 'ArrowDown', 
    'ArrowLeft', 'ArrowRight', 
    'ArrowLeft', 'ArrowRight', 
    'b', 'a'
];

export default function useKonamiCode() {
    const [isRedTeam, setIsRedTeam] = useState(false);
    const [inputSequence, setInputSequence] = useState([]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            const key = e.key;
            setInputSequence(prev => {
                const newSequence = [...prev, key];
                if (newSequence.length > KONAMI_CODE.length) {
                    newSequence.shift();
                }
                
                if (newSequence.join(',') === KONAMI_CODE.join(',')) {
                    setIsRedTeam(true);
                    // Add class to body for easy CSS targeting
                    document.body.classList.add('red-team');
                }
                
                return newSequence;
            });
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return isRedTeam;
}
