import React from 'react';

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
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(67,91,159,0.08)_0%,transparent_60%)] pointer-events-none -z-10"></div>
            
            <div className="relative z-20 w-full max-w-container-max mx-auto px-margin-mobile md:px-stack-lg grid grid-cols-1 lg:grid-cols-2 gap-stack-lg items-center">
                <motion.div style={{ y: textY }} className="space-y-8">
                    <div className="inline-block px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full mb-4">
                        <span className="font-label-caps text-label-caps text-secondary-fixed text-sm md:text-base tracking-widest">
                            <Typewriter 
                                roles={[
                                    'Cyber Security Student', 
                                    'Full Stack Web Developer', 
                                    'ICT Manager',
                                    'EdTech Consultant',
                                    'Technical Writer',
                                    'Digital Solutions Builder'
                                ]} 
                            />
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
                        Designing, Securing, and Managing <span className="text-primary">Enterprise</span> Digital Solutions.
                    </h1>
                    <p className="text-lg md:text-xl text-on-surface-variant max-w-xl leading-relaxed">
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
