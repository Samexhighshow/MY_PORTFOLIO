import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

export default function Services() {
    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    return (
        <section className="py-stack-xl bg-surface-container-lowest/50 relative overflow-hidden px-margin-mobile md:px-stack-lg" ref={ref}>
            <div className="max-w-container-max mx-auto relative z-10">
                <motion.div 
                    className="text-center mb-stack-lg"
                    initial="hidden"
                    animate={controls}
                    variants={itemVariants}
                >
                    <span className="font-label-caps text-label-caps text-secondary-container tracking-widest uppercase">Expertise</span>
                    <h2 className="font-headline-md text-headline-md mt-4">Core Specializations</h2>
                </motion.div>
                
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-3 gap-gutter"
                    initial="hidden"
                    animate={controls}
                    variants={containerVariants}
                >
                    {/* Cybersecurity */}
                    <motion.div variants={itemVariants} className="glass-card p-10 rounded-xl flex flex-col items-center text-center space-y-6 group">
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined text-primary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>security</span>
                        </div>
                        <h3 className="font-headline-md text-2xl text-secondary">Cybersecurity</h3>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">Advanced threat modeling, penetration testing, and zero-trust architecture implementation for high-risk environments.</p>
                        <div className="flex flex-wrap justify-center gap-2">
                            <span className="px-2 py-1 bg-white/5 border border-white/10 rounded font-label-caps text-[10px]">OSCP</span>
                            <span className="px-2 py-1 bg-white/5 border border-white/10 rounded font-label-caps text-[10px]">CISSP</span>
                            <span className="px-2 py-1 bg-white/5 border border-white/10 rounded font-label-caps text-[10px]">SIEM</span>
                        </div>
                    </motion.div>
                    
                    {/* Software Engineering */}
                    <motion.div variants={itemVariants} className="glass-card p-10 rounded-xl flex flex-col items-center text-center space-y-6 group">
                        <div className="w-16 h-16 rounded-full bg-secondary-container/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined text-secondary-container text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>code</span>
                        </div>
                        <h3 className="font-headline-md text-2xl text-secondary">Software Engineering</h3>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">Full-stack development of distributed systems using modern paradigms and high-performance tech stacks.</p>
                        <div className="flex flex-wrap justify-center gap-2">
                            <span className="px-2 py-1 bg-white/5 border border-white/10 rounded font-label-caps text-[10px]">GO</span>
                            <span className="px-2 py-1 bg-white/5 border border-white/10 rounded font-label-caps text-[10px]">RUST</span>
                            <span className="px-2 py-1 bg-white/5 border border-white/10 rounded font-label-caps text-[10px]">KUBERNETES</span>
                        </div>
                    </motion.div>
                    
                    {/* ICT Management */}
                    <motion.div variants={itemVariants} className="glass-card p-10 rounded-xl flex flex-col items-center text-center space-y-6 group">
                        <div className="w-16 h-16 rounded-full bg-tertiary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined text-tertiary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>strategy</span>
                        </div>
                        <h3 className="font-headline-md text-2xl text-secondary">ICT Management</h3>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">Strategic roadmapping and infrastructure governance, aligning technical execution with business objectives.</p>
                        <div className="flex flex-wrap justify-center gap-2">
                            <span className="px-2 py-1 bg-white/5 border border-white/10 rounded font-label-caps text-[10px]">ITIL V4</span>
                            <span className="px-2 py-1 bg-white/5 border border-white/10 rounded font-label-caps text-[10px]">TOGAF</span>
                            <span className="px-2 py-1 bg-white/5 border border-white/10 rounded font-label-caps text-[10px]">ISO 27001</span>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
