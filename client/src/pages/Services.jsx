import React from 'react';
import { motion } from 'framer-motion';
import DecryptText from '../components/animations/DecryptText';
import MagneticButton from '../components/animations/MagneticButton';
import { useNavigate } from 'react-router-dom';
import { useProfileData } from '../hooks/useProfileData';

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
    const { profile, loading } = useProfileData();

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

            {/* Testimonials Section */}
            <section className="mb-stack-2xl relative z-10">
                <div className="text-center mb-stack-lg max-w-3xl mx-auto">
                    <h2 className="font-display-lg text-headline-md text-white mb-4">Client Testimonials</h2>
                    <p className="font-body-lg text-on-surface-variant">Feedback from collaborations and successful deployments.</p>
                </div>
                
                {loading ? (
                    <div className="flex justify-center p-8"><div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div></div>
                ) : profile?.testimonials && profile.testimonials.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {profile.testimonials.map((testimonial, idx) => (
                            <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-2xl relative">
                                <span className="material-symbols-outlined absolute top-6 right-6 text-[40px] text-white/10">format_quote</span>
                                <p className="font-body-md text-on-surface-variant mb-6 relative z-10">"{testimonial.quote}"</p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center font-display-lg text-white">
                                        {testimonial.author.charAt(0)}
                                    </div>
                                    <div>
                                        <p className="font-label-caps text-label-caps text-white">{testimonial.author}</p>
                                        <p className="font-mono-code text-[10px] text-secondary-fixed">{testimonial.position}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    /* Placeholder for future testimonials */
                    <div className="bg-surface-container/30 border border-white/10 rounded-2xl p-12 text-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:30px_30px]"></div>
                        <span className="material-symbols-outlined text-[60px] text-white/10 mb-4 relative z-10">format_quote</span>
                        <h3 className="font-label-caps text-label-caps text-secondary-fixed mb-2 tracking-widest relative z-10">SYSTEM STANDBY</h3>
                        <p className="font-mono-code text-[12px] text-on-surface-variant max-w-lg mx-auto relative z-10 uppercase">
                            Testimonial modules are initialized and awaiting data. Reviews from future clients, colleagues, and organizations will be routed here upon project completion.
                        </p>
                    </div>
                )}
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
