import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import MagneticButton from '../components/animations/MagneticButton';
import DecryptText from '../components/animations/DecryptText';
import ParticleNetwork from '../components/animations/ParticleNetwork';
import { useNavigate } from 'react-router-dom';

const timelineData = [
    {
        id: 1,
        date: "JAN 2022 — PRESENT",
        title: "Cybersecurity Consultant",
        company: "GLOBAL TECH GROUP • CYBER DIVISION",
        description: "Leading end-to-end security architecture for cloud-native enterprise deployments. Orchestrating red-team operations and automated threat response systems across distributed serverless environments.",
        skills: ["SIEM", "AWS SECURITY", "ZEROTRUST", "TERRAFORM"]
    },
    {
        id: 2,
        date: "MAR 2019 — DEC 2021",
        title: "Senior Software Engineer",
        company: "APOLLO FINTECH SOLUTIONS",
        description: "Developed high-frequency ledger systems using Rust and Go. Optimized transaction throughput by 40% through low-level memory management and asynchronous I/O patterns.",
        skills: ["RUST", "GOLANG", "KUBERNETES", "GCP"]
    },
    {
        id: 3,
        date: "JUN 2016 — FEB 2019",
        title: "ICT Manager",
        company: "VANTAGE ENTERPRISE SYSTEMS",
        description: "Managed a hybrid infrastructure across 12 regional offices. Implemented ITIL-aligned service management frameworks and migrated legacy on-prem systems to a resilient hybrid-cloud architecture.",
        skills: ["ITIL V4", "AZURE AD", "ISO 27001", "VMWARE"]
    }
];

const skillsData = [
    {
        category: "CYBERSECURITY",
        icon: "shield",
        items: [
            { name: "Pen Testing", level: 100 },
            { name: "SIEM / SOC Ops", level: 80 },
            { name: "Identity Mgmt", level: 80 },
            { name: "Network Security", level: 100 }
        ]
    },
    {
        category: "SOFTWARE ENG",
        icon: "terminal",
        items: [
            { name: "Distributed Systems", level: 100 },
            { name: "Microservices", level: 100 },
            { name: "Kubernetes", level: 100 },
            { name: "CI/CD Pipelines", level: 80 }
        ]
    },
    {
        category: "ICT MANAGEMENT",
        icon: "settings_suggest",
        items: [
            { name: "Infrastructure Strategy", level: 100 },
            { name: "Cloud Architecture", level: 100 },
            { name: "ITIL Governance", level: 80 },
            { name: "Business Continuity", level: 100 }
        ]
    },
    {
        category: "LANGUAGES",
        icon: "code_blocks",
        items: [
            { name: "Rust / Go", level: 100 },
            { name: "TypeScript / Node", level: 100 },
            { name: "Python (Security Scripting)", level: 80 },
            { name: "C++ / Systems Programming", level: 80 }
        ]
    }
];

export default function Experience() {
    const navigate = useNavigate();
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });

    // Different scroll speeds for timeline and skills
    const timelineY = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const skillsY = useTransform(scrollYProgress, [0, 1], [100, -50]);
    
    return (
        <main ref={containerRef} className="relative pt-[120px] overflow-hidden">
            <div className="absolute inset-0 z-0">
                <ParticleNetwork />
            </div>

            {/* Header Section */}
            <section className="px-margin-mobile md:px-stack-lg max-w-container-max mx-auto mb-stack-xl relative z-10">
                <div className="text-center mb-stack-xl max-w-2xl mx-auto reveal active">
                    <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-4 tracking-tighter">
                        <DecryptText text="Professional" className="text-on-surface" /> <span className="text-primary"><DecryptText text="Trajectory" /></span>
                    </h1>
                    <p className="font-body-lg text-body-lg text-on-surface-variant opacity-80">
                        Engineering secure infrastructure and high-performance software at the intersection of innovation and enterprise resilience.
                    </p>
                </div>
            </section>

            {/* Experience Timeline Section */}
            <section className="px-margin-mobile md:px-stack-lg max-w-container-max mx-auto mb-stack-xl relative">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
                    <div className="md:col-span-4 sticky top-[120px] h-fit">
                        <h2 className="font-display-lg text-headline-md text-secondary mb-4">Professional <br/>Trajectory</h2>
                        <p className="font-body-sm text-body-sm text-outline mb-8">A decade of engineering leadership across global fintech, security, and infrastructure sectors.</p>
                        <div className="h-[1px] w-24 bg-secondary-fixed/50"></div>
                    </div>
                    
                    <motion.div style={{ y: timelineY }} className="md:col-span-8 relative">
                        {/* Vertical Timeline Line */}
                        <div className="absolute left-0 md:left-0 top-0 bottom-0 w-[1px] bg-white/10"></div>
                        
                        {timelineData.map((item, index) => (
                            <motion.div 
                                key={item.id}
                                className="relative pl-10 pb-stack-lg group"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                <div className="absolute left-[-5px] top-1 w-[11px] h-[11px] rounded-full bg-secondary-fixed/40 shadow-[0_0_15px_rgba(0,251,251,0.3)] group-hover:bg-secondary-fixed group-hover:scale-150 transition-all duration-300"></div>
                                <span className="font-mono-code text-label-caps text-secondary-fixed mb-2 block">{item.date}</span>
                                <h3 className="font-display-lg text-headline-md text-white">{item.title}</h3>
                                <p className="font-label-caps text-label-caps text-outline mb-4">{item.company}</p>
                                <p className="font-body-lg text-body-lg text-on-surface-variant mb-6 leading-relaxed">{item.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {item.skills.map(skill => (
                                        <span key={skill} className="px-3 py-1 bg-surface-container-highest text-secondary-fixed text-label-caps font-label-caps rounded-full border border-white/10 backdrop-blur-md">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Technical Skills Grid */}
            <section className="py-stack-2xl relative z-10 px-margin-mobile md:px-stack-lg max-w-container-max mx-auto">
                <h2 className="font-display-lg text-display-lg text-center mb-stack-lg tracking-tighter">
                    <DecryptText text="Core" /> <span className="text-tertiary-fixed"><DecryptText text="Specializations" /></span>
                </h2>
                <motion.div style={{ y: skillsY }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
                    {skillsData.map((skillGroup, idx) => (
                        <motion.div 
                            key={idx}
                            className="p-gutter border border-white/10 backdrop-blur-xl bg-surface-container/50 rounded-xl relative group overflow-hidden tech-border"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                        >
                            <div className="absolute inset-0 bg-tertiary-container/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="flex items-center gap-3 mb-6 relative z-10">
                                <span className="material-symbols-outlined text-tertiary-fixed text-headline-md" style={{ fontVariationSettings: "'FILL' 1" }}>{skillGroup.icon}</span>
                                <h3 className="font-label-caps text-label-caps text-secondary">{skillGroup.category}</h3>
                            </div>
                            <div className="space-y-4 relative z-10">
                                {skillGroup.items.map((item, i) => (
                                    <div key={i} className="flex justify-between items-center group/skill cursor-default">
                                        <span className="font-body-sm text-on-surface-variant">{item.name}</span>
                                        <span className={`w-2 h-2 rounded-full ${item.level === 100 ? 'bg-tertiary-fixed shadow-[0_0_8px_#d0bcff]' : 'bg-tertiary-fixed/30'}`}></span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* CTA Section */}
            <section className="px-margin-mobile md:px-stack-lg max-w-container-max mx-auto mb-stack-xl">
                <div className="relative border border-white/10 backdrop-blur-xl p-stack-lg rounded-xl flex flex-col items-center text-center overflow-hidden">
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
