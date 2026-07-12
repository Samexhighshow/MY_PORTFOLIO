import React, { createContext, useContext, useState, useCallback, useRef } from 'react';

const SoundContext = createContext();

export const useSound = () => useContext(SoundContext);

export function SoundProvider({ children }) {
    const [isMuted, setIsMuted] = useState(true); // Default muted for browsers
    const audioCtxRef = useRef(null);

    const initAudio = () => {
        if (!audioCtxRef.current) {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            audioCtxRef.current = new AudioContext();
        }
    };

    const toggleMute = () => {
        if (isMuted) initAudio();
        setIsMuted(!isMuted);
    };

    const playHover = useCallback(() => {
        if (isMuted || !audioCtxRef.current) return;
        
        const ctx = audioCtxRef.current;
        const osc = ctx.createOscillator();
        const gainNode = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(800, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.1);

        gainNode.gain.setValueAtTime(0, ctx.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.05, ctx.currentTime + 0.02);
        gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);

        osc.connect(gainNode);
        gainNode.connect(ctx.destination);

        osc.start();
        osc.stop(ctx.currentTime + 0.1);
    }, [isMuted]);

    const playClick = useCallback(() => {
        if (isMuted || !audioCtxRef.current) return;

        const ctx = audioCtxRef.current;
        const osc = ctx.createOscillator();
        const gainNode = ctx.createGain();

        osc.type = 'square';
        osc.frequency.setValueAtTime(150, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(40, ctx.currentTime + 0.15);

        gainNode.gain.setValueAtTime(0, ctx.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.1, ctx.currentTime + 0.02);
        gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);

        osc.connect(gainNode);
        gainNode.connect(ctx.destination);

        osc.start();
        osc.stop(ctx.currentTime + 0.15);
    }, [isMuted]);

    return (
        <SoundContext.Provider value={{ isMuted, toggleMute, playHover, playClick }}>
            {children}
        </SoundContext.Provider>
    );
}
