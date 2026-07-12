import React from 'react';
import { useNavigate } from 'react-router-dom';
import MatrixRain from '../components/animations/MatrixRain';
import MagneticButton from '../components/animations/MagneticButton';
import DecryptText from '../components/animations/DecryptText';

export default function NotFound() {
    const navigate = useNavigate();

    return (
        <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black text-[#0f0]">
            <MatrixRain />
            
            <div className="relative z-10 text-center p-8 bg-black/60 backdrop-blur-sm border border-[#0f0]/30 rounded-2xl max-w-lg mx-auto shadow-[0_0_50px_rgba(0,255,0,0.2)]">
                <h1 className="font-mono text-6xl md:text-8xl font-bold mb-4 tracking-tighter shadow-[#0f0]">
                    <DecryptText text="404" />
                </h1>
                <h2 className="font-mono text-xl md:text-2xl mb-8 uppercase tracking-widest">
                    <DecryptText text="Signal Lost" />
                </h2>
                <p className="font-mono text-sm md:text-base text-[#0f0]/80 mb-8">
                    You have strayed too far into the mainframe. The requested node does not exist on this server.
                </p>
                <div className="flex justify-center">
                    <MagneticButton 
                        onClick={() => navigate('/')}
                        className="px-8 py-3 rounded-md font-mono font-bold tracking-widest border border-[#0f0] bg-[#0f0]/10 hover:bg-[#0f0]/30 transition-colors uppercase text-[#0f0]"
                    >
                        Return to Base
                    </MagneticButton>
                </div>
            </div>
        </div>
    );
}
