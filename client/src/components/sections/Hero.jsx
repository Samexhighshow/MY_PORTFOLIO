import React from 'react';
import ShaderBackground from '../animations/ShaderBackground';
import ThreeJSNode from '../animations/ThreeJSNode';
import Typewriter from '../animations/Typewriter';
import MagneticButton from '../animations/MagneticButton';
import { useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
    const navigate = useNavigate();
    const { scrollY } = useScroll();
    
    // Parallax values
    const bgY = useTransform(scrollY, [0, 1000], [0, 300]);
    const textY = useTransform(scrollY, [0, 1000], [0, -100]);
    const shapeY = useTransform(scrollY, [0, 1000], [0, 150]);
    return (
        <section className="relative h-screen min-h-[800px] flex items-center overflow-hidden">
            <motion.div style={{ y: bgY }} className="absolute inset-0 w-full h-full">
                <ShaderBackground />
            </motion.div>
            
            <div className="relative z-20 w-full max-w-container-max mx-auto px-margin-mobile md:px-stack-lg grid grid-cols-1 lg:grid-cols-2 gap-stack-lg items-center">
                <motion.div style={{ y: textY }} className="space-y-8">
                    <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full">
                        <span className="font-label-caps text-label-caps text-secondary-fixed text-sm">
                            <Typewriter 
                                roles={['Cybersecurity Professional', 'Software Engineer', 'ICT Manager']} 
                            />
                        </span>
                    </div>
                    <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg leading-none cyber-glitch" data-text="Designing, Securing, and Managing Enterprise Digital Solutions.">
                        Designing, Securing, and Managing <span className="text-primary">Enterprise</span> Digital Solutions.
                    </h1>
                    <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
                        Bridging the gap between robust security and high-performance engineering. Specialized in building resilient ICT ecosystems for the modern enterprise.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <MagneticButton onClick={() => navigate('/projects')} className="font-label-caps text-label-caps text-on-surface px-10 py-4 rounded-full flex items-center justify-center gap-2 group">
                            View Projects 
                            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </MagneticButton>
                        <button onClick={() => navigate('/experience')} className="ghost-button font-label-caps text-label-caps text-secondary px-10 py-4 rounded-full">
                            About Me
                        </button>
                    </div>
                </motion.div>
                
                <motion.div style={{ y: shapeY }} className="hidden lg:block relative h-[600px] w-full">
                    <ThreeJSNode />
                    <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/20 blur-[120px] rounded-full"></div>
                </motion.div>
            </div>
        </section>
    );
}
