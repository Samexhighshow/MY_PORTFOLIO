import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import MagneticButton from '../components/animations/MagneticButton';
import DecryptText from '../components/animations/DecryptText';
import { useNavigate } from 'react-router-dom';

const timelineData = [
    {
        id: 1,
        date: "PRESENT FOCUS",
        title: "Educational Technology Consultant",
        company: "DIGITAL INNOVATION",
        description: "Specializing in the digital transformation of educational institutions. Architecting and deploying robust Student Management Systems, Computer-Based Test (CBT) platforms, and comprehensive school websites that streamline administration and enhance learning.",
        skills: ["EDTECH", "STUDENT SYSTEMS", "CBT PLATFORMS", "CONSULTING"]
    },
    {
        id: 2,
        date: "PRESENT FOCUS",
        title: "Full Stack Web Developer",
        company: "SECURE ARCHITECTURE",
        description: "Building scalable, secure web applications and RESTful APIs. Managing the complete software lifecycle from complex database design to intuitive frontend deployment using modern tech stacks and secure coding practices.",
        skills: ["REACT", "PHP/MYSQL", "REST API", "SYSTEM ARCHITECTURE"]
    },
    {
        id: 3,
        date: "PRESENT FOCUS",
        title: "ICT Manager & Technical Writer",
        company: "INFRASTRUCTURE & COMMS",
        description: "Overseeing ICT infrastructure, network administration, and system troubleshooting. Producing high-quality technical documentation, software specifications, and digital content for professional enterprise branding.",
        skills: ["ICT ADMIN", "TECH WRITING", "NETWORKING", "DIGITAL COMMS"]
    }
];

const skillsData = [
    {
        category: "FRONTEND & UI",
        icon: "web",
        items: ["React.js", "JavaScript/ES6+", "TailwindCSS", "Framer Motion", "HTML5 & CSS3"]
    },
    {
        category: "BACKEND & API",
        icon: "data_object",
        items: ["PHP", "RESTful APIs", "Node.js", "Express", "Authentication"]
    },
    {
        category: "DATABASE",
        icon: "database",
        items: ["MySQL", "PostgreSQL", "Database Design", "Query Optimization"]
    },
    {
        category: "CYBERSECURITY",
        icon: "security",
        items: ["Network Security", "Digital Forensics", "Ethical Hacking", "Kali Linux", "Wireshark", "Nmap"]
    },
    {
        category: "ICT & EDTECH",
        icon: "school",
        items: ["Student Mgmt Systems", "CBT Platforms", "Network Administration", "Infrastructure Strategy"]
    },
    {
        category: "PROFESSIONAL",
        icon: "edit_document",
        items: ["Technical Writing", "Project Documentation", "Social Media Mgmt", "Client Consultation"]
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
            <div className="absolute inset-0 -z-10 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/10 blur-[120px]"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-tertiary-container/10 blur-[120px]"></div>
            </div>

            {/* Header Section */}
            <section className="px-margin-mobile md:px-stack-lg max-w-container-max mx-auto mb-stack-xl relative z-10">
                <div className="text-center mb-stack-xl max-w-3xl mx-auto reveal active">
                    <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-4 tracking-tighter">
                        <DecryptText text="My Professional" className="text-on-surface" /> <span className="text-primary"><DecryptText text="Story" /></span>
                    </h1>
                    <p className="font-body-lg text-body-lg text-on-surface-variant opacity-90 leading-relaxed">
                        I am passionate about using technology to solve real-world problems. I build secure, scalable, and user-friendly digital solutions while continuously expanding my knowledge in cybersecurity and software engineering. I am a builder, a manager, and a secure infrastructure advocate.
                    </p>
                </div>
            </section>

            {/* Education Section */}
            <section className="px-margin-mobile md:px-stack-lg max-w-container-max mx-auto mb-stack-xl relative z-10">
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-2xl relative overflow-hidden group">
                    <div className="absolute -inset-[100%] bg-gradient-to-r from-transparent via-primary/5 to-transparent rotate-45 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-[2s]"></div>
                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                        <div className="md:col-span-9">
                            <h2 className="font-label-caps text-label-caps text-secondary-fixed mb-4 tracking-widest flex items-center gap-2"><span className="material-symbols-outlined text-[16px]">school</span> ACADEMIC FOUNDATION</h2>
                            <h3 className="font-display-lg text-headline-md text-white mb-2">Ladoke Akintola University of Technology (LAUTECH)</h3>
                            <p className="font-body-lg text-primary-fixed-dim font-bold mb-4">Bachelor of Science (B.Sc.) in Cyber Security Science</p>
                            <p className="text-on-surface-variant font-body-sm max-w-3xl leading-relaxed">
                                Currently studying Cyber Security with specialized interests in secure software development, enterprise networking, digital forensics, ethical hacking, and emerging tech. My academic journey actively reinforces my professional work, allowing me to build solutions that are not only high-performing but inherently secure from the ground up.
                            </p>
                        </div>
                        <div className="md:col-span-3 hidden md:flex justify-end opacity-20 group-hover:opacity-40 transition-opacity">
                            <span className="material-symbols-outlined text-[120px] text-white">security</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Experience Timeline Section */}
            <section className="px-margin-mobile md:px-stack-lg max-w-container-max mx-auto mb-stack-xl relative">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
                    <div className="md:col-span-4 sticky top-[120px] h-fit">
                        <h2 className="font-display-lg text-headline-md text-secondary mb-4">Professional <br/>Pillars</h2>
                        <p className="font-body-sm text-body-sm text-outline mb-8">Bridging multiple domains of technology to deliver holistic, practical, and secure solutions.</p>
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
                <motion.div style={{ y: skillsY }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
                    {skillsData.map((skillGroup, idx) => (
                        <motion.div 
                            key={idx}
                            className="p-stack-md border border-white/10 backdrop-blur-xl bg-surface-container/50 rounded-xl relative group overflow-hidden tech-border"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                        >
                            <div className="absolute inset-0 bg-tertiary-container/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="flex items-center gap-3 mb-6 relative z-10">
                                <span className="material-symbols-outlined text-tertiary-fixed text-headline-md" style={{ fontVariationSettings: "'FILL' 1" }}>{skillGroup.icon}</span>
                                <h3 className="font-label-caps text-label-caps text-secondary tracking-widest">{skillGroup.category}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2 relative z-10">
                                {skillGroup.items.map((item, i) => (
                                    <span key={i} className="px-3 py-2 bg-white/5 text-on-surface-variant text-body-sm font-medium rounded-md border border-white/5 hover:border-tertiary-fixed hover:text-tertiary-fixed hover:bg-tertiary-fixed/10 transition-all cursor-default flex-grow text-center shadow-[0_4px_10px_rgba(0,0,0,0.1)]">
                                        {item}
                                    </span>
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
