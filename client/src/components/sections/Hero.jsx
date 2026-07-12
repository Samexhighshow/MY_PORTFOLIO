import React from 'react';
import ShaderBackground from '../animations/ShaderBackground';
import ThreeJSNode from '../animations/ThreeJSNode';
import Typewriter from '../animations/Typewriter';
import MagneticButton from '../animations/MagneticButton';

export default function Hero() {
    return (
        <section className="relative h-screen min-h-[800px] flex items-center overflow-hidden">
            <ShaderBackground />
            
            <div className="relative z-20 w-full max-w-container-max mx-auto px-margin-mobile md:px-stack-lg grid grid-cols-1 lg:grid-cols-2 gap-stack-lg items-center">
                <div className="space-y-8">
                    <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full">
                        <span className="font-label-caps text-label-caps text-secondary-fixed text-sm">
                            <Typewriter 
                                roles={['Cybersecurity Professional', 'Software Engineer', 'ICT Manager']} 
                            />
                        </span>
                    </div>
                    <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg leading-none">
                        Designing, Securing, and Managing <span className="text-primary">Enterprise</span> Digital Solutions.
                    </h1>
                    <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
                        Bridging the gap between robust security and high-performance engineering. Specialized in building resilient ICT ecosystems for the modern enterprise.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <MagneticButton className="font-label-caps text-label-caps text-on-surface px-10 py-4 rounded-full flex items-center justify-center gap-2 group">
                            View Projects 
                            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </MagneticButton>
                        <button className="ghost-button font-label-caps text-label-caps text-secondary px-10 py-4 rounded-full">
                            About Me
                        </button>
                    </div>
                </div>
                
                <div className="hidden lg:block relative h-[600px] w-full">
                    <ThreeJSNode />
                    <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/20 blur-[120px] rounded-full"></div>
                </div>
            </div>
        </section>
    );
}
