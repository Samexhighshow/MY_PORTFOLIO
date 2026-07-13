import React, { useRef, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import DecryptText from '../components/animations/DecryptText';
import { projectsData } from '../data/projects';

function ProjectCard3D({ project, onSelectProject }) {
    const cardRef = useRef(null);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;

        cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    };

    const handleMouseLeave = () => {
        if (!cardRef.current) return;
        cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    };

    return (
        <article 
            ref={cardRef}
            className="glass-card rounded-2xl overflow-hidden flex flex-col group h-full transition-transform duration-300 ease-out"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ transformStyle: 'preserve-3d' }}
        >
            <div className="h-80 overflow-hidden relative">
                <div 
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
                    style={{ backgroundImage: `url('${project.image}')` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-60"></div>
                <div className="absolute top-4 left-4 flex gap-2">
                    <span className="bg-secondary-fixed/5 border border-secondary-fixed/20 px-3 py-1 rounded-full font-mono-code text-[10px] text-secondary-fixed uppercase">
                        {project.category}
                    </span>
                </div>
            </div>
            <div className="p-8 flex flex-col flex-grow bg-white/5 backdrop-blur-xl border-t border-white/10">
                <h2 className="font-headline-md text-headline-md text-secondary mb-4">{project.title}</h2>
                <div className="mb-6 space-y-3">
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                        <span className="text-error font-bold uppercase tracking-wider">Problem: </span> 
                        {project.problem}
                    </p>
                    <p className="font-body-sm text-body-sm text-on-surface">
                        <span className="text-secondary-fixed font-bold uppercase tracking-wider">Solution: </span> 
                        {project.solution}
                    </p>
                </div>
                <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((t, idx) => (
                        <span key={idx} className="bg-secondary-fixed/5 border border-secondary-fixed/20 px-3 py-1 rounded-lg font-mono-code text-mono-code text-secondary-fixed">
                            {t}
                        </span>
                    ))}
                </div>
                <div className="mt-auto flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
                    <button onClick={() => onSelectProject(project)} className="w-full sm:w-auto bg-gradient-to-r from-secondary-container to-tertiary-container text-surface px-8 py-3 rounded-xl font-label-caps text-label-caps hover:scale-105 transition-transform flex justify-center items-center">
                        View Case Study
                    </button>
                    <div className="flex gap-4 items-center justify-center sm:justify-end w-full sm:w-auto">
                        {project.url && project.url !== '#' && <a className="text-on-surface-variant hover:text-primary transition-colors flex items-center" href={project.url} target="_blank" rel="noreferrer" title="Live Demo"><span className="material-symbols-outlined text-[24px]">open_in_new</span></a>}
                        {project.github && project.github !== '#' && <a className="text-on-surface-variant hover:text-primary transition-colors flex items-center" href={project.github} target="_blank" rel="noreferrer" title="GitHub Repository"><span className="material-symbols-outlined text-[24px]">code</span></a>}
                    </div>
                </div>
            </div>
        </article>
    );
}

export default function ProjectsShowcase() {
    const navigate = useNavigate();
    const [activeFilter, setActiveFilter] = useState('All');
    
    const filteredProjects = useMemo(() => {
        if (activeFilter === 'All') return projectsData;
        return projectsData.filter(p => p.category === activeFilter || p.category.includes(activeFilter));
    }, [activeFilter]);

    const filters = [
        { name: "All", icon: "widgets" },
        { name: "Web Development", icon: "language" },
        { name: "EdTech & Full Stack", icon: "school" },
        { name: "Software Engineering", icon: "terminal" }
    ];

    const handleSelectProject = (project) => {
        navigate(`/projects/${project.id}`);
    };

    return (
        <div className="w-full max-w-container-max mx-auto px-margin-mobile md:px-stack-lg pt-32 pb-stack-xl flex flex-col lg:flex-row gap-stack-lg relative">
            {/* Side Navigation (Mobile Hidden, Project Filters on Desktop) */}
            <aside className="hidden lg:flex w-64 shrink-0 flex-col gap-stack-sm p-stack-md bg-surface-container-low/40 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl z-40 sticky top-32 h-fit">
                <div className="px-2 mb-4">
                    <h3 className="font-headline-md text-[24px] font-bold text-primary mb-1">Project Filter</h3>
                    <p className="font-label-caps text-label-caps text-on-surface-variant">Technical Domains</p>
                </div>
                <nav className="flex flex-col gap-2">
                    {filters.map(filter => (
                        <button 
                            key={filter.name}
                            onClick={() => setActiveFilter(filter.name)}
                            className={`flex items-center gap-4 p-3 rounded-xl transition-all text-left ${activeFilter === filter.name ? 'bg-primary-container text-primary-fixed-dim hover:scale-105' : 'text-on-surface-variant hover:bg-surface-variant/50'}`}
                        >
                            <span className="material-symbols-outlined" style={activeFilter === filter.name ? { fontVariationSettings: "'FILL' 1" } : {}}>{filter.icon}</span>
                            <span className="font-label-caps text-label-caps">{filter.name}</span>
                        </button>
                    ))}
                </nav>
            </aside>

            <main className="w-full flex-1 overflow-visible relative">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(67,91,159,0.15)_0%,transparent_70%)] pointer-events-none -z-10"></div>
                
                {/* Hero Section */}
                <section className="relative mb-stack-xl">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="max-w-container-max mx-auto px-margin-mobile md:px-stack-lg mb-stack-xl text-center">
                            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-4 tracking-tighter">
                                <DecryptText text="Architectural" className="text-on-surface" /> <span className="text-primary"><DecryptText text="Archive" /></span>
                            </h1>
                            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
                                Architecting secure, scalable digital ecosystems where precision meets innovation. A collection of high-stakes technical ventures.
                            </p>
                        </div>
                    </motion.div>

                    {/* Horizontal Filter Bar (Mobile) */}
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:hidden sticky top-24 z-40 w-full overflow-hidden mb-8"
                    >
                        <div className="flex overflow-x-auto no-scrollbar gap-2 items-center bg-surface-container-high/90 p-2 rounded-2xl border border-white/10 backdrop-blur-xl w-full shadow-lg">
                            {filters.map(filter => (
                                <button 
                                    key={filter.name}
                                    onClick={() => setActiveFilter(filter.name)}
                                    className={`px-5 py-2 shrink-0 rounded-xl font-label-caps text-label-caps transition-all ${activeFilter === filter.name ? 'bg-primary text-on-primary shadow-md' : 'text-on-surface-variant hover:bg-white/5'}`}
                                >
                                    {filter.name}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                </section>

                {/* Project Grid */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
                        {filteredProjects.map((project, idx) => (
                            <motion.div 
                                key={project.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                                className="h-full"
                            >
                                <ProjectCard3D project={project} onSelectProject={handleSelectProject} />
                            </motion.div>
                        ))}
                </section>
            </main>
        </div>
    );
}
