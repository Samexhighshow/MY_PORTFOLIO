import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import MagneticButton from '../components/animations/MagneticButton';
import DecryptText from '../components/animations/DecryptText';
import { useNavigate } from 'react-router-dom';
import { useProfileData } from '../hooks/useProfileData';

export default function Experience() {
    const navigate = useNavigate();
    const containerRef = useRef(null);
    const { profile, loading, error } = useProfileData();
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });

    const timelineY = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const skillsY = useTransform(scrollYProgress, [0, 1], [100, -50]);

    if (loading) {
        return (
            <div className="pt-32 pb-stack-xl flex justify-center items-center h-screen">
                <div className="w-12 h-12 border-4 border-white/10 border-t-primary rounded-full animate-spin"></div>
            </div>
        );
    }

    if (error || !profile) {
        return (
            <div className="pt-32 pb-stack-xl flex justify-center items-center h-screen text-red-500">
                Failed to load profile data: {error}
            </div>
        );
    }

    const { personal, education, learning_journey, engineering_philosophy, skills } = profile;

    return (
        <main ref={containerRef} className="relative pt-[120px] overflow-hidden">
            <div className="absolute inset-0 -z-10 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/10 blur-[120px]"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-tertiary-container/10 blur-[120px]"></div>
            </div>

            {/* Header Section */}
            <section className="px-margin-mobile md:px-stack-lg max-w-container-max mx-auto mb-24 mt-12 relative z-10">
                <div className="text-center mb-16 max-w-3xl mx-auto reveal active">
                    <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-4 tracking-tighter">
                        <DecryptText text="My Professional" className="text-on-surface" /> <span className="text-primary"><DecryptText text="Story" /></span>
                    </h1>
                    <p className="font-body-lg text-body-lg text-on-surface-variant opacity-90 leading-relaxed">
                        {personal.biography}
                    </p>
                </div>
            </section>

            {/* Education Section */}
            <section className="px-margin-mobile md:px-stack-lg max-w-container-max mx-auto mb-24 relative z-10">
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 md:p-16 rounded-2xl relative overflow-hidden group hover:border-primary/30 transition-colors">
                    <div className="absolute -inset-[100%] bg-gradient-to-r from-transparent via-primary/5 to-transparent rotate-45 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-[2s]"></div>
                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                        <div className="md:col-span-9">
                            <h2 className="font-label-caps text-label-caps text-secondary-fixed mb-4 tracking-widest flex items-center gap-2"><span className="material-symbols-outlined text-[16px]">school</span> ACADEMIC FOUNDATION</h2>
                            <h3 className="font-display-lg text-headline-md text-white mb-2">{education.institution}</h3>
                            <p className="font-body-lg text-primary-fixed-dim font-bold mb-4">{education.degree} <span className="text-on-surface-variant font-normal">({education.status})</span></p>
                            <div className="flex flex-wrap gap-2 mt-4">
                                {education.coursework.map(course => (
                                    <span key={course} className="px-3 py-1 bg-surface-container-highest text-secondary-fixed text-[11px] font-mono-code rounded-md border border-white/10">
                                        {course}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="md:col-span-3 hidden md:flex justify-end opacity-20 group-hover:opacity-40 transition-opacity">
                            <span className="material-symbols-outlined text-[120px] text-white">security</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Learning Journey Timeline */}
            <section className="px-margin-mobile md:px-stack-lg max-w-container-max mx-auto mb-24 relative">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
                    <div className="md:col-span-4 sticky top-[120px] h-fit">
                        <h2 className="font-display-lg text-headline-md text-secondary mb-4">Learning <br/>Journey</h2>
                        <p className="font-body-sm text-body-sm text-outline mb-8">My continuous evolution from visual design to full-stack secure infrastructure.</p>
                        <div className="h-[1px] w-24 bg-secondary-fixed/50"></div>
                    </div>
                    
                    <div className="md:col-span-8 relative">
                        <div className="absolute left-0 md:left-0 top-0 bottom-0 w-[1px] bg-white/10"></div>
                        
                        {learning_journey.map((item, index) => (
                            <motion.div 
                                key={index}
                                className="relative pl-10 pb-stack-lg group"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                <div className="absolute left-[-5px] top-1 w-[11px] h-[11px] rounded-full bg-secondary-fixed/40 shadow-[0_0_15px_rgba(0,251,251,0.3)] group-hover:bg-secondary-fixed group-hover:scale-150 transition-all duration-300"></div>
                                <span className="font-mono-code text-label-caps text-secondary-fixed mb-2 block">{item.phase}</span>
                                <h3 className="font-display-lg text-headline-md text-white">{item.title}</h3>
                                <p className="font-body-lg text-body-lg text-on-surface-variant mb-6 leading-relaxed mt-2">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Engineering Philosophy */}
            <section className="px-margin-mobile md:px-stack-lg max-w-container-max mx-auto mb-24 relative">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="font-display-lg text-headline-md text-white mb-4">Engineering Philosophy</h2>
                    <p className="font-body-lg text-on-surface-variant">The core principles that guide my architecture and code.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {engineering_philosophy.map((item, index) => (
                        <motion.div 
                            key={index}
                            className="bg-white/5 border border-white/10 p-6 rounded-xl hover:border-primary/50 transition-colors group"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <span className="material-symbols-outlined text-primary mb-4 block text-3xl">psychology</span>
                            <h3 className="font-label-caps text-label-caps text-white mb-2">{item.principle}</h3>
                            <p className="font-body-sm text-on-surface-variant leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Technical Skills Grid */}
            <section className="px-margin-mobile md:px-stack-lg max-w-container-max mx-auto mb-24 relative z-10 border-t border-white/5 pt-16">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="font-display-lg text-headline-md text-white mb-4">
                        <DecryptText text="Skill" /> <span className="text-tertiary-fixed"><DecryptText text="Classification" /></span>
                    </h2>
                    <p className="font-body-lg text-on-surface-variant">Categorized technical capabilities and areas of continuous learning.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
                    
                    {/* Confident */}
                    <motion.div 
                        className="p-stack-md border border-white/10 backdrop-blur-xl bg-surface-container/50 rounded-xl relative group overflow-hidden tech-border"
                    >
                        <div className="flex items-center gap-3 mb-6 relative z-10">
                            <span className="material-symbols-outlined text-tertiary-fixed text-headline-md" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                            <h3 className="font-label-caps text-label-caps text-secondary tracking-widest">CONFIDENT</h3>
                        </div>
                        <div className="flex flex-wrap gap-2 relative z-10">
                            {skills.confident.map((item, i) => (
                                <span key={i} className="px-3 py-2 bg-white/5 text-on-surface-variant text-body-sm font-medium rounded-md border border-white/5 hover:border-tertiary-fixed hover:text-tertiary-fixed hover:bg-tertiary-fixed/10 transition-all cursor-default flex-grow text-center flex items-center justify-center gap-2 shadow-[0_4px_10px_rgba(0,0,0,0.1)]">
                                    <span className="material-symbols-outlined text-[16px]">{item.icon}</span> {item.name}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Learning */}
                    <motion.div 
                        className="p-stack-md border border-primary/20 backdrop-blur-xl bg-surface-container/50 rounded-xl relative group overflow-hidden shadow-[0_0_30px_rgba(0,251,251,0.05)]"
                    >
                        <div className="flex items-center gap-3 mb-6 relative z-10">
                            <span className="material-symbols-outlined text-primary text-headline-md" style={{ fontVariationSettings: "'FILL' 1" }}>school</span>
                            <h3 className="font-label-caps text-label-caps text-primary tracking-widest">CURRENTLY LEARNING</h3>
                        </div>
                        <div className="flex flex-wrap gap-2 relative z-10">
                            {skills.learning.map((item, i) => (
                                <span key={i} className="px-3 py-2 bg-primary/5 text-on-surface-variant text-body-sm font-medium rounded-md border border-primary/20 hover:border-primary hover:text-primary transition-all cursor-default flex-grow text-center flex items-center justify-center gap-2">
                                    <span className="material-symbols-outlined text-[16px]">{item.icon}</span> {item.name}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Future */}
                    <motion.div 
                        className="p-stack-md border border-white/10 backdrop-blur-xl bg-surface-container/50 rounded-xl relative group overflow-hidden"
                    >
                        <div className="flex items-center gap-3 mb-6 relative z-10">
                            <span className="material-symbols-outlined text-outline-variant text-headline-md" style={{ fontVariationSettings: "'FILL' 1" }}>visibility</span>
                            <h3 className="font-label-caps text-label-caps text-outline-variant tracking-widest">FUTURE SPECIALIZATION</h3>
                        </div>
                        <div className="flex flex-wrap gap-2 relative z-10">
                            {skills.future.map((item, i) => (
                                <span key={i} className="px-3 py-2 bg-white/5 text-outline-variant text-body-sm font-medium rounded-md border border-white/5 hover:text-white transition-all cursor-default flex-grow text-center flex items-center justify-center gap-2 opacity-60 hover:opacity-100">
                                    <span className="material-symbols-outlined text-[16px]">{item.icon}</span> {item.name}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </section>

            {/* Future Horizons Placeholders */}
            <section className="px-margin-mobile md:px-stack-lg max-w-container-max mx-auto mb-24 relative z-10 border-t border-white/5 pt-16">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="font-display-lg text-headline-md text-white mb-4">Future Horizons</h2>
                    <p className="font-body-lg text-on-surface-variant">Infrastructure prepared for upcoming milestones in research, community contribution, and recognition.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Research & Publications */}
                    <div className="bg-surface-container/30 border border-white/10 rounded-2xl p-8 text-center relative overflow-hidden group">
                        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:20px_20px]"></div>
                        <span className="material-symbols-outlined text-[40px] text-white/10 mb-4 relative z-10 group-hover:text-tertiary-fixed transition-colors">library_books</span>
                        <h3 className="font-label-caps text-label-caps text-white mb-2 relative z-10 tracking-widest">RESEARCH & PUB</h3>
                        <p className="font-mono-code text-[11px] text-on-surface-variant relative z-10 uppercase mt-4">System Standby. Preparing structure for future academic papers and cybersecurity research articles.</p>
                    </div>
                    {/* Open Source */}
                    <div className="bg-surface-container/30 border border-white/10 rounded-2xl p-8 text-center relative overflow-hidden group">
                        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:20px_20px]"></div>
                        <span className="material-symbols-outlined text-[40px] text-white/10 mb-4 relative z-10 group-hover:text-primary transition-colors">code_blocks</span>
                        <h3 className="font-label-caps text-label-caps text-white mb-2 relative z-10 tracking-widest">OPEN SOURCE</h3>
                        <p className="font-mono-code text-[11px] text-on-surface-variant relative z-10 uppercase mt-4">System Standby. Future space for GitHub contributions, community tools, and security libraries.</p>
                    </div>
                    {/* Awards & Recognition */}
                    <div className="bg-surface-container/30 border border-white/10 rounded-2xl p-8 text-center relative overflow-hidden group">
                        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:20px_20px]"></div>
                        <span className="material-symbols-outlined text-[40px] text-white/10 mb-4 relative z-10 group-hover:text-secondary-fixed transition-colors">military_tech</span>
                        <h3 className="font-label-caps text-label-caps text-white mb-2 relative z-10 tracking-widest">AWARDS & RECOGNITION</h3>
                        <p className="font-mono-code text-[11px] text-on-surface-variant relative z-10 uppercase mt-4">System Standby. Awaiting professional milestones, hackathon victories, and academic honors.</p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="px-margin-mobile md:px-stack-lg max-w-container-max mx-auto mb-24">
                <div className="relative border border-white/10 backdrop-blur-xl p-12 md:p-16 rounded-xl flex flex-col items-center text-center overflow-hidden">
                    <h2 className="font-display-lg text-headline-md mb-6 relative z-10">Ready to secure your digital infrastructure?</h2>
                    <div className="flex gap-4 relative z-10">
                        <MagneticButton onClick={() => window.open('/resume.pdf', '_blank')} className="px-8 py-3 bg-secondary-fixed text-on-secondary-fixed font-label-caps text-label-caps rounded-full shadow-[0_0_20px_rgba(0,251,251,0.4)]">
                            DOWNLOAD CV
                        </MagneticButton>
                        <MagneticButton onClick={() => navigate('/contact')} className="px-8 py-3 border border-secondary-fixed text-secondary-fixed font-label-caps text-label-caps rounded-full bg-transparent hover:bg-secondary-fixed/5">
                            CONTACT ME
                        </MagneticButton>
                    </div>
                </div>
            </section>
        </main>
    );
}
