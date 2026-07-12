import React from 'react';
import ParticleNetwork from './ParticleNetwork';

export default function CyberOverlay() {
    return (
        <>
            <ParticleNetwork />
            <div className="cyber-grid"></div>
            <div className="scanline"></div>
        </>
    );
}
