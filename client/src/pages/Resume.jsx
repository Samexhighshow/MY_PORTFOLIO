import React from 'react';
import { useProfileData } from '../hooks/useProfileData';
import { motion } from 'framer-motion';

export default function Resume() {
    const { profile, loading } = useProfileData();

    if (loading || !profile) {
        return (
            <div className="pt-32 pb-stack-xl flex justify-center items-center h-screen">
                <div className="w-12 h-12 border-4 border-white/10 border-t-primary rounded-full animate-spin"></div>
            </div>
        );
    }

    const { personal, education, skills, professional_availability, values } = profile;

    const handlePrint = () => {
        window.print();
    };

    return (
        <main className="pt-[120px] pb-stack-xl max-w-container-max mx-auto px-margin-mobile md:px-stack-lg relative z-10 print:pt-0 print:pb-0 print:px-0">
            
            {/* Screen-only controls */}
            <div className="flex justify-between items-center mb-8 print:hidden sticky top-[80px] z-50 bg-background/80 backdrop-blur-md p-4 rounded-xl border border-white/10">
                <h1 className="font-display-lg text-2xl text-white">Curriculum Vitae</h1>
                <button 
                    onClick={handlePrint}
                    className="flex items-center gap-2 bg-primary text-background font-label-caps tracking-widest px-6 py-2 rounded-full hover:bg-primary/80 transition-colors"
                >
                    <span className="material-symbols-outlined text-[18px]">download</span>
                    DOWNLOAD PDF
                </button>
            </div>

            {/* Resume Document (Printable Area) */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white text-black p-8 md:p-16 rounded-xl shadow-2xl max-w-[850px] mx-auto print:p-0 print:shadow-none print:max-w-none print:w-full font-sans"
            >
                {/* Header */}
                <header className="border-b-2 border-gray-300 pb-6 mb-6">
                    <h1 className="text-4xl font-extrabold uppercase tracking-tight text-gray-900 mb-2">{personal.name}</h1>
                    <p className="text-xl text-blue-700 font-semibold mb-4">{personal.title}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">mail</span> hello@maximusos.dev</span>
                        <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">link</span> maximusos.dev</span>
                        <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">location_on</span> Remote / Available</span>
                    </div>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 print:grid-cols-3">
                    
                    {/* Left Column */}
                    <div className="md:col-span-2 print:col-span-2 space-y-8">
                        
                        {/* Profile Summary */}
                        <section>
                            <h2 className="text-lg font-bold uppercase tracking-wider text-gray-900 border-b border-gray-200 pb-2 mb-3">Professional Summary</h2>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                {personal.biography}
                            </p>
                        </section>

                        {/* Experience Placeholder - In a real app we'd map over experience history */}
                        <section>
                            <h2 className="text-lg font-bold uppercase tracking-wider text-gray-900 border-b border-gray-200 pb-2 mb-3">Professional Experience</h2>
                            
                            <div className="mb-5">
                                <div className="flex justify-between items-baseline mb-1">
                                    <h3 className="font-bold text-gray-900">Lead Full Stack Developer</h3>
                                    <span className="text-xs font-semibold text-gray-500">2024 - Present</span>
                                </div>
                                <p className="text-sm text-blue-700 font-medium mb-2">MAXIMUS OS Architecture</p>
                                <ul className="list-disc pl-4 text-sm text-gray-700 space-y-1">
                                    <li>Architected and deployed enterprise-grade web applications focusing on extreme performance and robust security.</li>
                                    <li>Built custom EdTech platforms handling thousands of concurrent student records without downtime.</li>
                                    <li>Designed stateless JWT-based authentication flows and normalized MySQL databases.</li>
                                </ul>
                            </div>

                            <div className="mb-5">
                                <div className="flex justify-between items-baseline mb-1">
                                    <h3 className="font-bold text-gray-900">Independent Security Researcher</h3>
                                    <span className="text-xs font-semibold text-gray-500">2023 - Present</span>
                                </div>
                                <p className="text-sm text-blue-700 font-medium mb-2">Self-Directed / Academic</p>
                                <ul className="list-disc pl-4 text-sm text-gray-700 space-y-1">
                                    <li>Conducted vulnerability assessments on custom PHP/MySQL applications, mitigating SQLi and XSS vectors.</li>
                                    <li>Set up and operated extensive Kali Linux network analysis labs utilizing Wireshark and Nmap.</li>
                                    <li>Committed to applying "Secure by Default" architecture principles to all frontend engineering projects.</li>
                                </ul>
                            </div>
                        </section>

                        {/* Core Values */}
                        <section>
                            <h2 className="text-lg font-bold uppercase tracking-wider text-gray-900 border-b border-gray-200 pb-2 mb-3">Engineering Philosophy</h2>
                            <div className="grid grid-cols-2 gap-4">
                                {values.slice(0, 4).map((val, idx) => (
                                    <div key={idx}>
                                        <h4 className="font-bold text-sm text-gray-900">{val.title}</h4>
                                        <p className="text-xs text-gray-600 mt-1">{val.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-8">
                        
                        {/* Education */}
                        <section>
                            <h2 className="text-lg font-bold uppercase tracking-wider text-gray-900 border-b border-gray-200 pb-2 mb-3">Education</h2>
                            <div>
                                <h3 className="font-bold text-gray-900 text-sm leading-tight">{education.institution}</h3>
                                <p className="text-sm text-blue-700 mt-1 font-medium">{education.degree}</p>
                                <p className="text-xs text-gray-500 mt-1">{education.status}</p>
                                
                                <h4 className="text-xs font-bold text-gray-900 mt-3 mb-1">Key Coursework:</h4>
                                <ul className="text-xs text-gray-700 space-y-1">
                                    {education.coursework.map((course, idx) => (
                                        <li key={idx} className="flex items-start gap-1">
                                            <span className="text-blue-500">•</span> {course}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </section>

                        {/* Skills */}
                        <section>
                            <h2 className="text-lg font-bold uppercase tracking-wider text-gray-900 border-b border-gray-200 pb-2 mb-3">Technical Arsenal</h2>
                            
                            <div className="mb-4">
                                <h3 className="text-xs font-bold text-gray-900 mb-2">Proficient</h3>
                                <div className="flex flex-wrap gap-1.5">
                                    {skills.confident.map((skill, idx) => (
                                        <span key={idx} className="bg-gray-100 text-gray-800 text-[10px] font-bold px-2 py-1 rounded">
                                            {skill.name}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xs font-bold text-gray-900 mb-2">Currently Expanding</h3>
                                <div className="flex flex-wrap gap-1.5">
                                    {skills.learning.map((skill, idx) => (
                                        <span key={idx} className="bg-blue-50 text-blue-800 text-[10px] font-bold px-2 py-1 rounded">
                                            {skill.name}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* Services */}
                        <section>
                            <h2 className="text-lg font-bold uppercase tracking-wider text-gray-900 border-b border-gray-200 pb-2 mb-3">Core Offerings</h2>
                            <ul className="text-xs text-gray-700 space-y-1.5">
                                {professional_availability.services.map((service, idx) => (
                                    <li key={idx} className="flex items-start gap-2">
                                        <span className="material-symbols-outlined text-[14px] text-gray-400">check_circle</span>
                                        {service}
                                    </li>
                                ))}
                            </ul>
                        </section>

                    </div>
                </div>
            </motion.div>
        </main>
    );
}
