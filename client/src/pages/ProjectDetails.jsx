import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import MagneticButton from '../components/animations/MagneticButton';
import DecryptText from '../components/animations/DecryptText';
import { projectsData } from '../data/projects';

export default function ProjectDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [project, setProject] = useState(null);

    useEffect(() => {
        const foundProject = projectsData.find(p => p.id === parseInt(id));
        if (foundProject) {
            setProject(foundProject);
        } else {
            navigate('/projects'); // Redirect if not found
        }
    }, [id, navigate]);

    if (!project) return null;

    return (
        <main className="w-full relative min-h-screen pt-[120px] pb-stack-xl">
            {/* Background elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(67,91,159,0.1)_0%,transparent_70%)] pointer-events-none -z-10"></div>
            
            <div className="max-w-6xl mx-auto px-margin-mobile md:px-stack-lg">
                {/* Back Button */}
                <motion.button 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    onClick={() => navigate('/projects')}
                    className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors mb-8 font-label-caps tracking-widest text-sm"
                >
                    <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                    BACK TO ARCHIVE
                </motion.button>

                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative w-full bg-surface border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col mb-16"
                >
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
                            <h1 className="font-display-lg text-4xl md:text-5xl lg:text-6xl text-white mb-2 tracking-tighter max-w-4xl">
                                {project.title}
                            </h1>
                            <p className="text-xl text-primary-fixed-dim font-bold mt-4">
                                <DecryptText text="Engineering Case Study" />
                            </p>
                        </div>
                    </div>

                    {/* Content Grid */}
                    <div className="p-8 md:p-12">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                            
                            {/* Main Narrative Column (8/12) */}
                            <div className="lg:col-span-8 space-y-16">
                                
                                {/* Overview & Business Problem */}
                                <section className="space-y-8">
                                    <div>
                                        <h3 className="flex items-center gap-3 text-white font-display-lg text-2xl mb-4">
                                            <span className="material-symbols-outlined text-secondary-fixed">overview</span> Executive Summary
                                        </h3>
                                        <p className="font-body-lg text-on-surface-variant leading-relaxed text-lg">
                                            {project.overview}
                                        </p>
                                    </div>
                                    
                                    <div className="bg-error/5 p-8 rounded-2xl border border-error/10 relative overflow-hidden">
                                        <div className="absolute top-0 right-0 p-8 opacity-5">
                                            <span className="material-symbols-outlined text-[80px] text-error">warning</span>
                                        </div>
                                        <h3 className="flex items-center gap-2 text-error font-label-caps text-label-caps tracking-widest mb-4 relative z-10">
                                            THE BUSINESS PROBLEM
                                        </h3>
                                        <p className="font-body-md text-on-surface leading-relaxed relative z-10">
                                            {project.businessProblem}
                                        </p>
                                    </div>
                                </section>

                                {/* System Architecture & Planning */}
                                <section className="space-y-8">
                                    <h3 className="flex items-center gap-3 text-white font-display-lg text-2xl border-b border-white/10 pb-4">
                                        <span className="material-symbols-outlined text-primary">architecture</span> Architecture & Planning
                                    </h3>
                                    
                                    <div>
                                        <h4 className="font-label-caps text-secondary-fixed mb-2 tracking-widest">INITIAL PLANNING</h4>
                                        <p className="font-body-md text-on-surface-variant leading-relaxed">
                                            {project.planning}
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="font-label-caps text-secondary-fixed mb-2 tracking-widest">SYSTEM ARCHITECTURE</h4>
                                        <p className="font-body-md text-on-surface-variant leading-relaxed">
                                            {project.systemArchitecture}
                                        </p>
                                    </div>
                                </section>

                                {/* Design Decisions & Trade-offs */}
                                <section className="space-y-8 bg-surface-container/30 p-8 rounded-2xl border border-white/5">
                                    <h3 className="flex items-center gap-3 text-white font-display-lg text-2xl mb-4">
                                        <span className="material-symbols-outlined text-tertiary-fixed">balance</span> Engineering Decisions
                                    </h3>
                                    
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div>
                                            <h4 className="font-label-caps text-white mb-2 tracking-widest flex items-center gap-2">
                                                <span className="material-symbols-outlined text-[16px] text-tertiary-fixed">design_services</span> Design Decisions
                                            </h4>
                                            <p className="font-body-sm text-on-surface-variant leading-relaxed">
                                                {project.designDecisions}
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="font-label-caps text-white mb-2 tracking-widest flex items-center gap-2">
                                                <span className="material-symbols-outlined text-[16px] text-error">compare_arrows</span> Trade-Offs
                                            </h4>
                                            <p className="font-body-sm text-on-surface-variant leading-relaxed">
                                                {project.tradeOffs}
                                            </p>
                                        </div>
                                    </div>
                                </section>

                                {/* Challenges & Lessons */}
                                <section className="space-y-8">
                                    <h3 className="flex items-center gap-3 text-white font-display-lg text-2xl border-b border-white/10 pb-4">
                                        <span className="material-symbols-outlined text-primary">psychology</span> Challenges & Lessons
                                    </h3>
                                    
                                    <div>
                                        <h4 className="font-label-caps text-error mb-2 tracking-widest">OBSTACLES ENCOUNTERED</h4>
                                        <p className="font-body-md text-on-surface-variant leading-relaxed">
                                            {project.challenges}
                                        </p>
                                    </div>

                                    <div className="bg-primary/5 p-6 rounded-xl border border-primary/20">
                                        <h4 className="font-label-caps text-primary mb-2 tracking-widest">LESSONS LEARNED</h4>
                                        <p className="font-body-md text-on-surface-variant leading-relaxed">
                                            {project.lessons}
                                        </p>
                                    </div>
                                </section>

                                {/* Outcome */}
                                <section className="bg-gradient-to-r from-secondary-fixed/10 to-primary/5 p-8 rounded-2xl border border-secondary-fixed/20 relative overflow-hidden">
                                    <h3 className="flex items-center gap-2 text-white font-label-caps text-label-caps tracking-widest mb-4 relative z-10">
                                        <span className="material-symbols-outlined text-[18px] text-secondary-fixed">emoji_events</span> FINAL OUTCOME
                                    </h3>
                                    <p className="font-body-lg text-white leading-relaxed relative z-10">
                                        {project.outcome}
                                    </p>
                                </section>

                            </div>

                            {/* Sidebar Column (4/12) */}
                            <div className="lg:col-span-4 space-y-8">
                                
                                {/* Goals */}
                                <section className="bg-surface-container/50 p-6 rounded-xl border border-white/5">
                                    <h3 className="text-secondary font-label-caps text-label-caps tracking-widest mb-4 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-[18px]">target</span> PROJECT GOALS
                                    </h3>
                                    <ul className="space-y-3">
                                        {project.goals?.map((goal, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <span className="material-symbols-outlined text-secondary-fixed text-[18px] mt-0.5">check</span>
                                                <span className="font-body-sm text-on-surface-variant">{goal}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </section>

                                {/* Tech Stack Details */}
                                <section className="bg-surface-container/50 p-6 rounded-xl border border-white/5">
                                    <h3 className="text-primary font-label-caps text-label-caps tracking-widest mb-4 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-[18px]">terminal</span> TECH STACK
                                    </h3>
                                    <div className="space-y-4">
                                        {project.technologiesSelected?.map((tech, idx) => (
                                            <div key={idx} className="border-l-2 border-white/10 pl-3">
                                                <h4 className="font-mono-code text-white text-sm mb-1">{tech.name}</h4>
                                                <p className="font-body-sm text-on-surface-variant text-[13px]">{tech.reason}</p>
                                            </div>
                                        ))}
                                    </div>
                                </section>

                                {/* Future Improvements */}
                                <section className="bg-surface-container/50 p-6 rounded-xl border border-white/5">
                                    <h3 className="text-tertiary-fixed font-label-caps text-label-caps tracking-widest mb-4 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-[18px]">trending_up</span> FUTURE ITERATIONS
                                    </h3>
                                    <p className="font-body-sm text-on-surface-variant leading-relaxed">
                                        {project.futureImprovements}
                                    </p>
                                </section>

                                {/* Action Buttons */}
                                <div className="pt-4 flex flex-col gap-4 sticky top-[100px]">
                                    {project.url && project.url !== '#' && (
                                        <MagneticButton onClick={() => window.open(project.url, '_blank')} className="w-full py-4 bg-primary text-background font-label-caps tracking-widest rounded-xl flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors">
                                            <span>LIVE DEMO</span>
                                            <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                                        </MagneticButton>
                                    )}
                                    {project.github && project.github !== '#' && (
                                        <button onClick={() => window.open(project.github, '_blank')} className="w-full py-4 bg-white/5 hover:bg-white/10 text-white font-label-caps tracking-widest rounded-xl border border-white/10 transition-colors flex items-center justify-center gap-2">
                                            <span>GITHUB REPO</span>
                                            <span className="material-symbols-outlined text-[18px]">code</span>
                                        </button>
                                    )}
                                </div>
                            </div>

                        </div>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
