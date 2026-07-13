import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { projectsData } from '../../data/projects';

export default function Projects() {
    const controls = useAnimation();
    const navigate = useNavigate();
    const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

    // Parallax setup for cards
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });
    const card1Y = useTransform(scrollYProgress, [0, 1], [50, -100]);
    const card2Y = useTransform(scrollYProgress, [0, 1], [150, -200]);

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
        <section className="py-stack-xl px-margin-mobile md:px-stack-lg" ref={ref}>
            <div className="max-w-container-max mx-auto">
                <motion.div 
                    className="flex flex-col md:flex-row justify-between items-end mb-stack-lg gap-6"
                    initial="hidden"
                    animate={controls}
                    variants={itemVariants}
                >
                    <div>
                        <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase">Work</span>
                        <h2 className="font-headline-md text-headline-md mt-4">Selected Case Studies</h2>
                    </div>
                    <button onClick={() => navigate('/projects')} className="font-label-caps text-label-caps border-b border-primary text-primary pb-1 hover:text-secondary-container hover:border-secondary-container transition-all">View Full Archive</button>
                </motion.div>
                
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 gap-gutter"
                    initial="hidden"
                    animate={controls}
                    variants={containerVariants}
                >
                    {projectsData.slice(0, 2).map((project, idx) => (
                        <motion.div 
                            key={project.id}
                            style={{ y: idx === 0 ? card1Y : card2Y }} 
                            variants={itemVariants} 
                            className="group cursor-pointer"
                            onClick={() => navigate(`/projects/${project.id}`)}
                        >
                            <div className="relative aspect-video rounded-xl overflow-hidden glass-card tech-border border-white/10 mb-6">
                                <div 
                                    className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700" 
                                    style={{ backgroundImage: `url('${project.image}')` }}
                                ></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-center gap-4">
                                    <span className="font-label-caps text-label-caps text-primary">{project.category}</span>
                                </div>
                                <h4 className="font-headline-md text-2xl group-hover:text-primary transition-colors">{project.title}</h4>
                                <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                                    {project.overview}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
