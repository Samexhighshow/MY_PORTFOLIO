import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function Counter({ target, suffix = '+' }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let current = 0;
        const duration = 2000;
        const stepTime = Math.max(10, Math.floor(duration / target));
        
        const timer = setInterval(() => {
            current += 1;
            setCount(current);
            if (current >= target) {
                clearInterval(timer);
                setCount(target);
            }
        }, stepTime);

        return () => clearInterval(timer);
    }, [target]);

    return <span>{count}{suffix}</span>;
}

const certsData = [
    {
        title: "CISSP",
        desc: "Certified Information Systems Security Professional",
        type: "Active",
        icon: "security",
        issuer: "ISC²",
        date: "Nov 2023",
        color: "primary"
    },
    {
        title: "AWS Certified Security",
        desc: "Specialty: Enterprise Infrastructure & Identity Protection",
        type: "Expert",
        icon: "cloud_done",
        issuer: "Amazon",
        date: "Jan 2024",
        color: "tertiary"
    },
    {
        title: "OSCP",
        desc: "Offensive Security Certified Professional (PEN-200)",
        type: "Offensive",
        icon: "terminal",
        issuer: "OffSec",
        date: "Mar 2023",
        color: "secondary-container"
    },
    {
        title: "PMP",
        desc: "Project Management Professional (Enterprise Grade)",
        type: "Mgmt",
        icon: "groups",
        issuer: "PMI",
        date: "Aug 2022",
        color: "on-tertiary-container"
    },
    {
        title: "CKAD",
        desc: "Certified Kubernetes Application Developer",
        type: "Cloud",
        icon: "hub",
        issuer: "Linux Foundation",
        date: "Oct 2023",
        color: "primary-fixed-dim"
    },
    {
        title: "CCNA",
        desc: "Cisco Certified Network Associate (Enterprise Routing)",
        type: "Foundations",
        icon: "settings_input_component",
        issuer: "Cisco",
        date: "May 2022",
        color: "surface-bright"
    }
];

export default function Certifications() {
    return (
        <main className="pt-[140px] pb-stack-xl px-margin-mobile md:px-stack-lg max-w-container-max mx-auto relative overflow-hidden">
            {/* Atmospheric Background Effects */}
            <div className="absolute inset-0 pointer-events-none -z-10">
                <div className="absolute filter blur-[120px] opacity-15 rounded-full bg-[#435b9f] w-[600px] h-[600px] -top-[200px] -left-[200px]"></div>
                <div className="absolute filter blur-[120px] opacity-15 rounded-full bg-[#32007d] w-[500px] h-[500px] bottom-[10%] -right-[100px]"></div>
            </div>

            {/* Hero Section */}
            <section className="mb-stack-lg text-center md:text-left">
                <motion.h1 
                    className="font-display-lg text-display-lg-mobile md:text-display-lg text-secondary mb-4"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Credentials &amp; <span className="text-primary">Milestones</span>
                </motion.h1>
                <motion.p 
                    className="font-body-lg text-on-surface-variant max-w-2xl"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    A definitive collection of validated expertise across cybersecurity, infrastructure, and engineering. Every milestone represents a commitment to technical excellence and professional security.
                </motion.p>
            </section>

            {/* Achievements Stats Section */}
            <section className="mb-stack-xl">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-gutter">
                    {[
                        { label: "Global Certifications", value: 15 },
                        { label: "Projects Delivered", value: 50 },
                        { label: "Orgs Supported", value: 10 },
                        { label: "Tech Articles", value: 5 }
                    ].map((stat, i) => (
                        <motion.div 
                            key={i}
                            className="glass-card p-stack-md rounded-xl text-center border-t border-white/20 bg-gradient-to-b from-white/5 to-transparent"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 + (i * 0.1) }}
                        >
                            <span className="font-display-lg text-headline-md text-secondary block mb-1">
                                <Counter target={stat.value} />
                            </span>
                            <span className="font-label-caps text-label-caps text-primary tracking-widest">{stat.label}</span>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Certifications Gallery */}
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
                {certsData.map((cert, idx) => (
                    <motion.div 
                        key={idx}
                        className="glass-card group relative overflow-hidden rounded-xl p-stack-md flex flex-col justify-between h-[320px] transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)]"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: idx * 0.1 }}
                    >
                        <div className={`absolute -top-10 -right-10 w-32 h-32 bg-${cert.color}/10 rounded-full blur-2xl group-hover:bg-${cert.color}/20 transition-all`}></div>
                        <div>
                            <div className="flex items-center justify-between mb-stack-md relative z-10">
                                <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center border border-white/10">
                                    <span className="material-symbols-outlined text-secondary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>{cert.icon}</span>
                                </div>
                                <span className="font-mono-code text-body-sm text-on-surface-variant">{cert.type}</span>
                            </div>
                            <h3 className="font-display-lg text-headline-md text-secondary mb-2 group-hover:text-primary transition-colors relative z-10">{cert.title}</h3>
                            <p className="font-body-sm text-on-surface-variant relative z-10">{cert.desc}</p>
                            <div className="mt-4 flex gap-2 relative z-10">
                                <span className="px-2 py-1 rounded bg-white/5 border border-white/10 font-label-caps text-[10px] text-on-surface-variant uppercase">{cert.issuer}</span>
                                <span className="px-2 py-1 rounded bg-white/5 border border-white/10 font-label-caps text-[10px] text-on-surface-variant uppercase">{cert.date}</span>
                            </div>
                        </div>
                        <button className="w-full mt-stack-md bg-gradient-to-r from-secondary-container to-primary text-surface py-3 rounded-lg font-bold text-body-sm flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(0,221,221,0.4)] transition-shadow relative z-10">
                            Verify Certificate <span className="material-symbols-outlined text-sm">open_in_new</span>
                        </button>
                    </motion.div>
                ))}
            </section>
        </main>
    );
}
