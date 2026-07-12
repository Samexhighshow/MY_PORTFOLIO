import React from 'react';
import { motion } from 'framer-motion';
import DecryptText from '../components/animations/DecryptText';
import MagneticButton from '../components/animations/MagneticButton';
import { useNavigate } from 'react-router-dom';

const servicesData = [
    {
        title: "Educational Technology Solutions",
        icon: "school",
        description: "End-to-end digital transformation for schools and universities. From customized Student Management Systems to intuitive Computer-Based Test (CBT) platforms that streamline administration.",
        tags: ["CBT Platforms", "Student Portals", "E-Learning", "School Websites"]
    },
    {
        title: "Full Stack Web Development",
        icon: "code",
        description: "Secure, scalable, and responsive web applications built with modern architectures like React, PHP, and MySQL. Delivering everything from dynamic landing pages to complex SaaS dashboards.",
        tags: ["React.js", "PHP & MySQL", "REST APIs", "UI/UX Implementation"]
    },
    {
        title: "ICT Consulting & Management",
        icon: "router",
        description: "Strategic planning, deployment, and management of robust IT infrastructure. Ensuring absolute business continuity, network security, and efficient hardware/software lifecycles.",
        tags: ["Network Setup", "Troubleshooting", "Tech Strategy", "Maintenance"]
    },
    {
        title: "Technical Writing & Documentation",
        icon: "description",
        description: "Clear, comprehensive, and professional documentation for software projects, APIs, and business processes to ensure seamless knowledge transfer and overall project success.",
        tags: ["API Docs", "User Guides", "Software Specs", "Project Planning"]
    }
];

export default function Services() {
    const navigate = useNavigate();

    return (
        <main className="pt-32 pb-stack-xl max-w-container-max mx-auto px-margin-mobile md:px-stack-lg relative z-10">
            {/* Header Section */}
            <section className="mb-stack-xl text-center max-w-3xl mx-auto">
                <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-4 tracking-tighter">
                    <DecryptText text="Professional" className="text-on-surface" /> <span className="text-primary"><DecryptText text="Services" /></span>
                </h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant opacity-90 leading-relaxed">
                    Delivering secure, scalable, and innovative solutions tailored to your unique operational needs. Bridging the gap between complex technology and intuitive user experiences.
                </p>
            </section>

            {/* Services Grid */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-stack-md mb-stack-2xl">
                {servicesData.map((service, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-2xl relative overflow-hidden group hover:border-secondary-fixed/50 transition-colors"
                    >
                        <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-30 transition-opacity">
                            <span className="material-symbols-outlined text-[80px] text-secondary-fixed">{service.icon}</span>
                        </div>
                        <div className="relative z-10">
                            <span className="material-symbols-outlined text-secondary-fixed mb-4 text-[32px]">{service.icon}</span>
                            <h2 className="font-display-lg text-headline-md text-white mb-4">{service.title}</h2>
                            <p className="font-body-md text-on-surface-variant mb-8 leading-relaxed">
                                {service.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {service.tags.map((tag, i) => (
                                    <span key={i} className="px-3 py-1 bg-surface-container-highest/30 text-secondary-fixed text-label-caps font-label-caps tracking-widest rounded-md border border-white/5">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </section>

            {/* CTA */}
            <section className="text-center">
                <div className="bg-gradient-to-r from-secondary-container/20 to-tertiary-fixed/20 border border-white/10 p-12 rounded-2xl relative overflow-hidden">
                    <h2 className="font-display-lg text-headline-md text-white mb-4 relative z-10">Have a unique project in mind?</h2>
                    <p className="font-body-md text-on-surface-variant mb-8 max-w-xl mx-auto relative z-10">
                        Whether you need a custom student management system or a secure enterprise application, let's discuss how we can bring your vision to life.
                    </p>
                    <MagneticButton 
                        onClick={() => navigate('/contact')} 
                        className="relative z-10 px-8 py-4 bg-secondary-fixed text-on-secondary-fixed font-label-caps tracking-widest rounded-full shadow-[0_0_20px_rgba(0,251,251,0.3)] hover:shadow-[0_0_30px_rgba(0,251,251,0.5)] transition-shadow inline-block"
                    >
                        REQUEST A CONSULTATION
                    </MagneticButton>
                </div>
            </section>
        </main>
    );
}
