import React, { useRef, useState, useMemo } from 'react';
import { motion } from 'framer-motion';

function ProjectCard3D({ project }) {
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
                <div className="mt-auto flex items-center justify-between">
                    <button onClick={() => window.open(project.url, '_blank')} className="bg-gradient-to-r from-secondary-container to-tertiary-container text-surface px-8 py-3 rounded-xl font-label-caps text-label-caps hover:scale-105 transition-transform">
                        View Case Study
                    </button>
                    <div className="flex gap-4">
                        <a className="text-on-surface-variant hover:text-primary transition-colors" href={project.url} target="_blank" rel="noreferrer"><span className="material-symbols-outlined">open_in_new</span></a>
                        <a className="text-on-surface-variant hover:text-primary transition-colors" href={project.url} target="_blank" rel="noreferrer"><span className="material-symbols-outlined">code</span></a>
                    </div>
                </div>
            </div>
        </article>
    );
}

const projectsData = [
    {
        id: 1,
        title: "Project Aegis: Zero-Trust Ecosystem",
        category: "Cybersecurity",
        problem: "Vulnerable legacy perimeter security in distributed enterprise environments.",
        solution: "A decentralized identity-first architecture with real-time micro-segmentation.",
        tech: ["Rust", "Kubernetes", "gRPC"],
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD6bTUs9WZqtlY69vT4M-_9M5X-d4BixaTEyhtlqXJB17sylLVfdrW6Cr3iTTlfDnEbkZl0et3Wbqiq9cMVDRkyCyjG7DewWyfck6LcFRGjld_TWY40VXMmnwT1YnhSRgBh5fHbaISuUfZfnkxN5VGQl91bULWamDCUOx0Pgfa9jCSXWD94fvYnsVzNOJx4jdE6wtGf73u674xlB3bylzYA6cmVpShDyDZqZ_wgei6gl-fjT5xm4qM5Im9EvHFUyguO0LoeccAQ5rKb",
        url: "https://github.com"
    },
    {
        id: 2,
        title: "Helix Engine: Event-Driven Core",
        category: "Software Engineering",
        problem: "High-latency data processing pipelines causing bottlenecks in financial tech stacks.",
        solution: "Ultra-low latency Go-based engine utilizing lock-free data structures.",
        tech: ["Go", "Redis", "AWS"],
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDKoYCtkSEAKbPGHzx3XOgPT6O4CmfhTaDdpqYK6DMl1ovc5ESSkVHP__buxEAMJcN_vt6vayQFn4vVIaj_P5T0MrO254DMOEbJEQQLW9tvfP6lQKuoPUHuQctsMGtLkCcjjNtJAv3boI0IkQnzPNAYqxDYJ2KuRMQHYKl1xcdlNLkqHBvFgSdLnbT3pIQ7kQkRpzkvyqwiCCepWZiAysTLbhol_2KTIzsTt1PAPB4lXcpjd4Um_55Nf3FadCAENlZHu126iMEeRKc_",
        url: "https://github.com"
    },
    {
        id: 3,
        title: "Sentinel: Threat Intelligence Platform",
        category: "Research",
        problem: "Overwhelming noise in security logs hiding sophisticated state-sponsored attacks.",
        solution: "ML-powered anomaly detection model filtering 99.9% of telemetry noise.",
        tech: ["Python", "PyTorch", "Docker"],
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAL3na5cFWxQ2_dC1cY2GQt7zl211peYslmvY7J52rwm2swhHb6H4yiWzVeN55SXqatF1eh0mQK2rakR68voQS4_DcQG1T4A2Qd3Yhw-czhnoqk6iVvcVBVoARWGHx5-Cq3I7l3N8mt_JBwzAxNZnQJkzA6dwHb6oQy0tGAlCNdlHI2XjG8yQaERMyXLCbNT1vZcZmYH8g4aY9ynVD984AlKgW5nQgdJhEJT_Y7q9sQ_hhmXCqZAwt4ROtreaMBMDQcJEXUuLN5SOEN",
        url: "https://github.com"
    },
    {
        id: 4,
        title: "Atlas: Infrastructure Orchestrator",
        category: "ICT Management",
        problem: "Fractured IT asset management across multi-cloud and on-premise hardware.",
        solution: "Single-pane-of-glass dashboard for global infrastructure visibility.",
        tech: ["React", "Terraform", "PostgreSQL"],
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDUGn3CrtpUzBq8gicITi5co4LLO_1JHsFYzO7aw4cIrlr7I-vQmrI4wXsqqooiLlYA2XOsstVQmf7S5OEFARx_BQhCu3KyvaW_F_m96OdtJJa1_-NUkXQhbkqAeGV79bfvk45Sp6k9689s3Lj4d-77cAj6vlebUGGHsi4xx_B5GklcEzeXkdnfWrpUNctELaSyqavQlP4kE4bAb5j2F5SncEH-qm6ZGYSJYatK2ow4TGsXRR0_KVi388f5INx2rZxEfDz0ET3pgsyG",
        url: "https://github.com"
    }
];

export default function ProjectsShowcase() {
    const [activeFilter, setActiveFilter] = useState('All');
    
    const filteredProjects = useMemo(() => {
        if (activeFilter === 'All') return projectsData;
        return projectsData.filter(p => p.category === activeFilter);
    }, [activeFilter]);

    const filters = [
        { name: "All", icon: "widgets" },
        { name: "Cybersecurity", icon: "shield" },
        { name: "Software Engineering", icon: "terminal" },
        { name: "ICT Management", icon: "lan" },
        { name: "Research", icon: "science" },
        { name: "Open Source", icon: "code_blocks" }
    ];

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
                        <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-secondary mb-6 leading-none">
                            Engineering<br/><span className="text-primary italic">Excellence</span>
                        </h1>
                        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-12">
                            Architecting secure, scalable digital ecosystems where precision meets innovation. A collection of high-stakes technical ventures.
                        </p>
                    </motion.div>

                    {/* Horizontal Filter Bar */}
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:hidden flex flex-wrap gap-4 items-center bg-surface-container-high/50 p-2 rounded-2xl border border-white/5 backdrop-blur-md w-fit"
                    >
                        {filters.map(filter => (
                            <button 
                                key={filter.name}
                                onClick={() => setActiveFilter(filter.name)}
                                className={`px-6 py-2 rounded-xl font-label-caps text-label-caps transition-all ${activeFilter === filter.name ? 'bg-primary text-on-primary' : 'text-on-surface-variant hover:bg-white/5'}`}
                            >
                                {filter.name}
                            </button>
                        ))}
                    </motion.div>
                </section>

                {/* Project Grid */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
                    {filteredProjects.map((project, i) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 * i }}
                        >
                            <ProjectCard3D project={project} />
                        </motion.div>
                    ))}
                </section>
            </main>
        </div>
    );
}
