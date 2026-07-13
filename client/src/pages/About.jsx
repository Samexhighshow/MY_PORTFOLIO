import React, { useState } from 'react';
import { motion } from 'framer-motion';
import DecryptText from '../components/animations/DecryptText';
import { useProfileData } from '../hooks/useProfileData';

export default function About() {
    const { profile, loading } = useProfileData();
    const [activeTab, setActiveTab] = useState('story');

    if (loading || !profile) {
        return (
            <div className="pt-32 pb-stack-xl flex justify-center items-center h-screen">
                <div className="w-12 h-12 border-4 border-white/10 border-t-primary rounded-full animate-spin"></div>
            </div>
        );
    }

    const { personal, now, reading_list, favorite_tech, values, hobbies, faq, changelog } = profile;

    return (
        <main className="pt-[120px] pb-stack-xl max-w-container-max mx-auto px-margin-mobile md:px-stack-lg relative z-10 overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 -z-10 pointer-events-none">
                <div className="absolute top-[10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[120px]"></div>
                <div className="absolute bottom-[20%] left-[-10%] w-[30%] h-[30%] rounded-full bg-secondary-fixed/5 blur-[120px]"></div>
            </div>

            {/* Header Section */}
            <section className="mb-24 text-center max-w-4xl mx-auto">
                <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-6 tracking-tighter">
                    <DecryptText text="The Man Behind" className="text-on-surface" /> <span className="text-primary"><DecryptText text="The Machine" /></span>
                </h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant opacity-90 leading-relaxed">
                    {personal.tagline}
                </p>
            </section>

            {/* Navigation Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-16 border-b border-white/10 pb-6 sticky top-[80px] z-20 bg-background/80 backdrop-blur-md pt-4">
                {[
                    { id: 'story', label: 'My Story' },
                    { id: 'now', label: 'Now' },
                    { id: 'tech', label: 'Engineering' },
                    { id: 'library', label: 'Library' },
                    { id: 'faq', label: 'FAQ & Changelog' }
                ].map(tab => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`px-6 py-2 rounded-full font-label-caps text-label-caps tracking-widest transition-all ${
                            activeTab === tab.id 
                            ? 'bg-primary/10 text-primary border border-primary/30 shadow-[0_0_15px_rgba(0,251,251,0.2)]' 
                            : 'bg-white/5 text-on-surface-variant border border-white/5 hover:bg-white/10 hover:text-white'
                        }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Content Area */}
            <div className="min-h-[500px]">
                {/* STORY TAB */}
                {activeTab === 'story' && (
                    <motion.section 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-3xl mx-auto space-y-12"
                    >
                        <div className="flex items-center gap-6 mb-8">
                            <div className="w-24 h-24 rounded-full overflow-hidden border border-white/20 shrink-0">
                                <img src="/profile.jpg" alt="Ishola Samuel" className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <h2 className="font-display-lg text-headline-md text-white mb-2">{personal.name}</h2>
                                <p className="font-mono-code text-primary text-sm uppercase tracking-widest">{personal.title}</p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            {personal.story.map((paragraph, idx) => (
                                <p key={idx} className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                                    {paragraph}
                                </p>
                            ))}
                        </div>

                        <div className="pt-12 mt-12 border-t border-white/10">
                            <h3 className="font-display-lg text-headline-md text-white mb-8 flex items-center gap-3">
                                <span className="material-symbols-outlined text-secondary-fixed">psychology</span> Core Values
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {values.map((val, idx) => (
                                    <div key={idx} className="p-6 bg-surface-container/30 border border-white/5 rounded-xl hover:border-white/10 transition-colors">
                                        <h4 className="font-label-caps text-label-caps text-secondary-fixed tracking-widest mb-3">{val.title}</h4>
                                        <p className="font-body-sm text-on-surface-variant leading-relaxed">{val.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.section>
                )}

                {/* NOW TAB */}
                {activeTab === 'now' && (
                    <motion.section 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12"
                    >
                        <div className="lg:col-span-7">
                            <h2 className="font-display-lg text-headline-md text-white mb-8 flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary">update</span> What I'm doing now
                            </h2>
                            <div className="space-y-4">
                                {now.map((item, idx) => (
                                    <div key={idx} className="flex gap-4 p-4 bg-white/5 border border-white/5 rounded-lg items-start">
                                        <span className="material-symbols-outlined text-primary text-[20px] mt-1 shrink-0">radio_button_checked</span>
                                        <p className="font-body-md text-on-surface-variant leading-relaxed">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        <div className="lg:col-span-5 space-y-12">
                            <div>
                                <h2 className="font-display-lg text-2xl text-white mb-6 flex items-center gap-3">
                                    <span className="material-symbols-outlined text-tertiary-fixed">explore</span> Interests & Hobbies
                                </h2>
                                <div className="space-y-3">
                                    {hobbies.map((hobby, idx) => (
                                        <div key={idx} className="flex items-center gap-3 text-on-surface-variant font-body-sm">
                                            <span className="w-1.5 h-1.5 bg-tertiary-fixed rounded-full"></span>
                                            {hobby}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.section>
                )}

                {/* ENGINEERING TAB */}
                {activeTab === 'tech' && (
                    <motion.section 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="text-center mb-16">
                            <h2 className="font-display-lg text-headline-md text-white mb-4">Engineering Decisions</h2>
                            <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto">
                                The tools I genuinely enjoy working with, and the rationale behind choosing them for production systems.
                            </p>
                        </div>

                        <div className="space-y-8">
                            {favorite_tech.map((tech, idx) => (
                                <div key={idx} className="bg-surface-container/30 border border-white/5 p-8 rounded-2xl relative overflow-hidden group">
                                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-secondary-fixed/50 group-hover:bg-secondary-fixed transition-colors"></div>
                                    <h3 className="font-display-lg text-2xl text-white mb-3">{tech.name}</h3>
                                    <p className="font-body-lg text-on-surface-variant leading-relaxed pl-4 border-l border-white/10 italic">
                                        "{tech.reason}"
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.section>
                )}

                {/* LIBRARY TAB */}
                {activeTab === 'library' && (
                    <motion.section 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-3xl mx-auto"
                    >
                        <h2 className="font-display-lg text-headline-md text-white mb-8 flex items-center gap-3">
                            <span className="material-symbols-outlined text-outline-variant">menu_book</span> Currently Reading
                        </h2>
                        <div className="space-y-4">
                            {reading_list.map((book, idx) => (
                                <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between p-6 bg-white/5 border border-white/5 rounded-xl gap-4 hover:border-white/10 transition-colors">
                                    <div>
                                        <h4 className="font-display-lg text-xl text-white mb-1">{book.title}</h4>
                                        <p className="font-mono-code text-[12px] text-on-surface-variant">by {book.author}</p>
                                    </div>
                                    <span className={`px-4 py-1 text-[11px] font-label-caps tracking-widest rounded-full border ${
                                        book.status === 'Reading' ? 'bg-primary/10 text-primary border-primary/30' : 'bg-surface-container text-outline-variant border-white/10'
                                    }`}>
                                        {book.status.toUpperCase()}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </motion.section>
                )}

                {/* FAQ & CHANGELOG TAB */}
                {activeTab === 'faq' && (
                    <motion.section 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16"
                    >
                        <div>
                            <h2 className="font-display-lg text-headline-md text-white mb-8">Frequently Asked</h2>
                            <div className="space-y-6">
                                {faq.map((item, idx) => (
                                    <div key={idx} className="border-b border-white/10 pb-6">
                                        <h4 className="font-label-caps text-sm text-secondary-fixed mb-3 tracking-wide">{item.question}</h4>
                                        <p className="font-body-md text-on-surface-variant leading-relaxed">{item.answer}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h2 className="font-display-lg text-headline-md text-white mb-8">OS Changelog</h2>
                            <div className="relative border-l border-white/10 ml-4 space-y-10 pb-10">
                                {changelog.map((log, idx) => (
                                    <div key={idx} className="relative pl-8">
                                        <div className="absolute left-[-5px] top-1.5 w-[9px] h-[9px] rounded-full bg-primary/50 ring-4 ring-background"></div>
                                        <div className="flex items-center gap-4 mb-3">
                                            <span className="font-mono-code font-bold text-primary text-sm">v{log.version}</span>
                                            <span className="font-mono-code text-[11px] text-outline-variant">{log.date}</span>
                                        </div>
                                        <ul className="space-y-2">
                                            {log.changes.map((change, i) => (
                                                <li key={i} className="font-body-sm text-on-surface-variant flex items-start gap-2">
                                                    <span className="text-white/30 mt-0.5">-</span> {change}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.section>
                )}
            </div>
        </main>
    );
}
