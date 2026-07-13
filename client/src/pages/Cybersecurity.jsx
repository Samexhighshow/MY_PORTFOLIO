import React from 'react';
import { motion } from 'framer-motion';
import DecryptText from '../components/animations/DecryptText';
import { useProfileData } from '../hooks/useProfileData';

export default function Cybersecurity() {
    const { profile, loading, error } = useProfileData();

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

    const { cybersecurity_growth } = profile;
    const { active_labs } = cybersecurity_growth;

    // Hardcoded roadmap for now, can be moved to API later
    const certificationsRoadmap = [
        {
            title: "CompTIA Security+",
            status: "In Progress",
            target: "Q3 2026",
            desc: "Foundational security concepts, threats, vulnerabilities, and mitigation strategies."
        },
        {
            title: "CEH (Certified Ethical Hacker)",
            status: "Planned",
            target: "Q1 2027",
            desc: "Advanced ethical hacking methodologies and penetration testing techniques."
        },
        {
            title: "Cisco CyberOps Associate",
            status: "Planned",
            target: "Q3 2027",
            desc: "Security operations center (SOC) skills, incident analysis, and response."
        }
    ];

    return (
        <main className="pt-32 pb-stack-xl max-w-container-max mx-auto px-margin-mobile md:px-stack-lg relative z-10">
            {/* Header Section */}
            <section className="mb-24 text-center max-w-3xl mx-auto">
                <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-4 tracking-tighter">
                    <DecryptText text="Cyber Security" className="text-on-surface" /> <span className="text-primary"><DecryptText text="Command" /></span>
                </h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant opacity-90 leading-relaxed">
                    A deep dive into my active security research, practical laboratory environments, and continuous certification roadmap as a B.Sc. Cyber Security Science student.
                </p>
            </section>

            {/* Current Labs & Tooling */}
            <section className="mb-24">
                <div className="flex items-center gap-4 mb-16 border-b border-white/5 pb-4">
                    <span className="material-symbols-outlined text-3xl text-secondary-fixed">science</span>
                    <h2 className="font-display-lg text-headline-md text-white">Active Labs & Tooling</h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                    {active_labs.map((tool, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 hover:border-secondary-fixed transition-all group shadow-lg"
                        >
                            <span className="material-symbols-outlined text-[40px] text-on-surface-variant group-hover:text-secondary-fixed mb-4 transition-colors">
                                {tool.icon}
                            </span>
                            <h3 className="font-label-caps text-label-caps text-white mb-2">{tool.name}</h3>
                            <p className="font-mono-code text-[10px] text-secondary-fixed uppercase">{tool.type}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Certifications Roadmap */}
            <section className="mb-24">
                <div className="flex items-center gap-4 mb-16 border-b border-white/5 pb-4">
                    <span className="material-symbols-outlined text-3xl text-primary">verified</span>
                    <h2 className="font-display-lg text-headline-md text-white">Certification Roadmap</h2>
                </div>
                <div className="bg-surface-container/30 border border-primary/20 rounded-xl p-6 mb-8 text-center text-on-surface-variant font-mono-code text-[12px] uppercase tracking-widest">
                    Professional certifications are part of my continuous learning journey and will be added here as they are completed.
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {certificationsRoadmap.map((cert, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="bg-surface-container/50 border border-white/10 rounded-2xl p-8 relative overflow-hidden group hover:border-primary/50 transition-colors shadow-xl"
                        >
                            <div className="absolute top-0 right-0 px-4 py-2 bg-primary/10 border-b border-l border-primary/20 rounded-bl-2xl backdrop-blur-md">
                                <span className="font-mono-code text-[10px] text-primary uppercase font-bold tracking-widest">{cert.status} • {cert.target}</span>
                            </div>
                            <h3 className="font-display-lg text-2xl text-white mb-4 pr-16 mt-6">{cert.title}</h3>
                            <p className="font-body-sm text-on-surface-variant leading-relaxed mb-8">
                                {cert.desc}
                            </p>
                            
                            <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                                {cert.status === 'In Progress' && (
                                    <motion.div 
                                        initial={{ width: 0 }}
                                        whileInView={{ width: '40%' }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1.5, ease: "easeOut" }}
                                        className="h-full bg-primary"
                                    />
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </main>
    );
}
