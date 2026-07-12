import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

export default function About() {
    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

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
                        <div className="relative group">
                            <div className="absolute -inset-2 bg-gradient-to-r from-primary to-secondary-container blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                            <div className="aspect-[4/5] glass-card rounded-xl overflow-hidden relative border-white/10">
                                <img 
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 hover:scale-100" 
                                    alt="Tech Architect Portrait"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0pZrcys4-GPDSZOnaMUPwK9aBeryolVhMeEKbX0llRLetoM3UliYhbaWYGt34kVUDKFFLKw40Mc5hS41WfnxQbh4XGtcvXWrFsM3XLtU_KMeIEli99uM_o6ZgyFj4_z3jAcqqr0YzxZd-EddmnpRirkP7yZr1EZxSQazJGz18o0u45s6ysRzwAGti0lkX1YuYIxGyMW2OlfeRso1PsNtSjsddoc2YN8BIp9SFSzY3aUvRwRqcDdmY2dbUhbdBgUYAkXXT3tFnTAxK"
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
                        <h2 className="font-headline-md text-headline-md text-primary">Strategic Architect of Digital Trust</h2>
                        <p className="font-body-lg text-body-lg text-on-surface-variant">
                            With a decade of experience navigating the complex intersection of security and scalability, I help organizations build systems that aren't just powerful, but impenetrable. My philosophy centers on "Secure by Design"—ensuring that every line of code and every strategic decision reinforces the enterprise's digital core.
                        </p>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-gutter pt-8">
                            <div className="glass-card p-6 rounded-xl border-white/10 text-center">
                                <div className="font-display-lg text-headline-md text-secondary-fixed mb-2">10+</div>
                                <div className="font-label-caps text-label-caps text-on-surface-variant">Years Experience</div>
                            </div>
                            <div className="glass-card p-6 rounded-xl border-white/10 text-center">
                                <div className="font-display-lg text-headline-md text-secondary-fixed mb-2">50+</div>
                                <div className="font-label-caps text-label-caps text-on-surface-variant">Projects Delivered</div>
                            </div>
                            <div className="glass-card p-6 rounded-xl border-white/10 text-center">
                                <div className="font-display-lg text-headline-md text-secondary-fixed mb-2">15+</div>
                                <div className="font-label-caps text-label-caps text-on-surface-variant">Certifications</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
