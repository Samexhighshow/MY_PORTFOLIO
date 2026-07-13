import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MagneticButton from './MagneticButton';
import DecryptText from './DecryptText';

export default function ProjectModal({ project, onClose }) {
    // Lock body scroll when modal is open
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    if (!project) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
                {/* Backdrop */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-background/80 backdrop-blur-sm cursor-pointer"
                />

                {/* Modal Content */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    className="relative w-full max-w-5xl max-h-[90vh] bg-surface border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
                >
                    {/* Close Button */}
                    <button 
                        onClick={onClose}
                        className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-primary transition-colors border border-white/10"
                    >
                        <span className="material-symbols-outlined">close</span>
                    </button>

                    <div className="overflow-y-auto no-scrollbar flex-grow">
                        {/* Cover Image Header */}
                        <div className="relative h-[40vh] md:h-[50vh] w-full shrink-0">
                            <div 
                                className="absolute inset-0 bg-cover bg-center"
                                style={{ backgroundImage: `url('${project.image}')` }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/80 to-transparent" />
                            <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                                <span className="px-4 py-1 bg-secondary-fixed/10 border border-secondary-fixed/30 text-secondary-fixed rounded-full text-label-caps font-label-caps tracking-widest mb-4 inline-block backdrop-blur-md">
                                    {project.category}
                                </span>
                                <h1 className="font-display-lg text-4xl md:text-6xl text-white mb-2 tracking-tighter">
                                    {project.title}
                                </h1>
                                <p className="text-xl text-primary-fixed-dim font-bold">
                                    <DecryptText text="Case Study Analysis" />
                                </p>
                            </div>
                        </div>

                        {/* Content Grid */}
                        <div className="p-8 md:p-12">
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                                {/* Main Column (2/3) */}
                                <div className="lg:col-span-2 space-y-12">
                                    <section>
                                        <h3 className="flex items-center gap-2 text-secondary font-label-caps text-label-caps tracking-widest mb-4 border-b border-white/5 pb-2">
                                            <span className="material-symbols-outlined text-[18px]">info</span> OVERVIEW
                                        </h3>
                                        <p className="font-body-lg text-on-surface-variant leading-relaxed">
                                            {project.overview}
                                        </p>
                                    </section>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <section className="bg-error/5 p-6 rounded-xl border border-error/10">
                                            <h3 className="flex items-center gap-2 text-error font-label-caps text-label-caps tracking-widest mb-3">
                                                <span className="material-symbols-outlined text-[18px]">warning</span> PROBLEM STATEMENT
                                            </h3>
                                            <p className="font-body-sm text-on-surface leading-relaxed">
                                                {project.problem}
                                            </p>
                                        </section>
                                        <section className="bg-secondary-container/10 p-6 rounded-xl border border-secondary-container/20">
                                            <h3 className="flex items-center gap-2 text-secondary-fixed font-label-caps text-label-caps tracking-widest mb-3">
                                                <span className="material-symbols-outlined text-[18px]">check_circle</span> SOLUTION
                                            </h3>
                                            <p className="font-body-sm text-on-surface leading-relaxed">
                                                {project.solution}
                                            </p>
                                        </section>
                                    </div>

                                    <section>
                                        <h3 className="flex items-center gap-2 text-primary font-label-caps text-label-caps tracking-widest mb-4 border-b border-white/5 pb-2">
                                            <span className="material-symbols-outlined text-[18px]">star</span> KEY FEATURES
                                        </h3>
                                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {project.features?.map((feature, idx) => (
                                                <li key={idx} className="flex items-start gap-3">
                                                    <span className="material-symbols-outlined text-primary text-[20px] mt-0.5">arrow_right</span>
                                                    <span className="font-body-sm text-on-surface-variant">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </section>

                                    {project.results && (
                                        <section className="bg-white/5 p-8 rounded-xl border border-white/10 relative overflow-hidden">
                                            <div className="absolute top-0 right-0 p-8 opacity-10">
                                                <span className="material-symbols-outlined text-[100px]">trending_up</span>
                                            </div>
                                            <h3 className="flex items-center gap-2 text-white font-label-caps text-label-caps tracking-widest mb-4 relative z-10">
                                                <span className="material-symbols-outlined text-[18px]">assessment</span> RESULTS & IMPACT
                                            </h3>
                                            <p className="font-body-lg text-primary-fixed-dim leading-relaxed relative z-10">
                                                {project.results}
                                            </p>
                                        </section>
                                    )}
                                </div>

                                {/* Sidebar (1/3) */}
                                <div className="space-y-8">
                                    <section className="bg-surface-container/50 p-6 rounded-xl border border-white/5">
                                        <h3 className="text-secondary font-label-caps text-label-caps tracking-widest mb-4">TECHNOLOGY STACK</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.map((t, idx) => (
                                                <span key={idx} className="px-3 py-1.5 bg-black/40 border border-white/10 rounded-md font-mono-code text-[12px] text-white">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </section>

                                    {(project.challenges || project.lessons) && (
                                        <section className="bg-surface-container/50 p-6 rounded-xl border border-white/5 space-y-6">
                                            {project.challenges && (
                                                <div>
                                                    <h3 className="text-outline-variant font-label-caps text-label-caps tracking-widest mb-2">CHALLENGES</h3>
                                                    <p className="font-body-sm text-on-surface-variant leading-relaxed">
                                                        {project.challenges}
                                                    </p>
                                                </div>
                                            )}
                                            {project.lessons && (
                                                <div>
                                                    <h3 className="text-outline-variant font-label-caps text-label-caps tracking-widest mb-2">LESSONS LEARNED</h3>
                                                    <p className="font-body-sm text-on-surface-variant leading-relaxed">
                                                        {project.lessons}
                                                    </p>
                                                </div>
                                            )}
                                        </section>
                                    )}

                                    <div className="pt-4 flex flex-col gap-4">
                                        {project.url && (
                                            <MagneticButton onClick={() => window.open(project.url, '_blank')} className="w-full py-4 bg-primary text-on-primary font-label-caps tracking-widest rounded-xl flex items-center justify-center gap-2">
                                                <span>LIVE DEMO</span>
                                                <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                                            </MagneticButton>
                                        )}
                                        {project.github && (
                                            <button onClick={() => window.open(project.github, '_blank')} className="w-full py-4 bg-white/5 hover:bg-white/10 text-white font-label-caps tracking-widest rounded-xl border border-white/10 transition-colors flex items-center justify-center gap-2">
                                                <span>GITHUB REPO</span>
                                                <span className="material-symbols-outlined text-[18px]">code</span>
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
}
