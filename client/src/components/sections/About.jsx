import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import { useProfileData } from '../../hooks/useProfileData';

export default function About() {
    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
    const { profile, loading } = useProfileData();
    const [isColored, setIsColored] = useState(false);

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    const variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <section className="py-stack-xl relative px-margin-mobile md:px-stack-lg" ref={ref}>
            <div className="max-w-container-max mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
                    <motion.div 
                        className="lg:col-span-5"
                        initial="hidden"
                        animate={controls}
                        variants={variants}
                    >
                        <div className="relative group cursor-pointer" onClick={() => setIsColored(!isColored)}>
                            <div className="absolute -inset-2 bg-gradient-to-r from-primary to-secondary-container blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                            <div className="aspect-[4/5] glass-card rounded-xl overflow-hidden relative border-white/10">
                                <img 
                                    className={`w-full h-full object-cover transition-all duration-700 ${isColored ? 'grayscale-0 scale-100' : 'grayscale hover:grayscale-0 scale-105 hover:scale-100'}`} 
                                    alt="Ishola Samuel Portrait"
                                    src="/profile.jpg"
                                />
                            </div>
                        </div>
                    </motion.div>
                    
                    <motion.div 
                        className="lg:col-span-7 lg:pl-12 space-y-8"
                        initial="hidden"
                        animate={controls}
                        variants={variants}
                    >
                        <h2 className="font-headline-md text-headline-md text-primary">
                            {loading ? 'Loading...' : profile?.personal?.title || 'Cyber Security Student & Full Stack Engineer'}
                        </h2>
                        <p className="font-body-lg text-body-lg text-on-surface-variant">
                            {loading ? 'Initializing profile...' : profile?.personal?.biography || 'Profile unavailable.'}
                        </p>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-gutter pt-8">
                            <div className="glass-card p-6 rounded-xl border-white/10 text-center">
                                <div className="font-display-lg text-headline-md text-secondary-fixed mb-2">5+</div>
                                <div className="font-label-caps text-label-caps text-on-surface-variant">Years Dev Experience</div>
                            </div>
                            <div className="glass-card p-6 rounded-xl border-white/10 text-center">
                                <div className="font-display-lg text-headline-md text-secondary-fixed mb-2">Active</div>
                                <div className="font-label-caps text-label-caps text-on-surface-variant">Security Researcher</div>
                            </div>
                            <div className="glass-card p-6 rounded-xl border-white/10 text-center">
                                <div className="font-display-lg text-headline-md text-secondary-fixed mb-2">Full</div>
                                <div className="font-label-caps text-label-caps text-on-surface-variant">Stack Architect</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
