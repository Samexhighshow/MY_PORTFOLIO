import React, { useRef, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import DecryptText from '../components/animations/DecryptText';
import ProjectModal from '../components/animations/ProjectModal';

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
                <div className="mt-auto flex items-center justify-between">
                    <button onClick={() => onSelectProject(project)} className="bg-gradient-to-r from-secondary-container to-tertiary-container text-surface px-8 py-3 rounded-xl font-label-caps text-label-caps hover:scale-105 transition-transform">
                        View Case Study
                    </button>
                    <div className="flex gap-4">
                        {project.url && project.url !== '#' && <a className="text-on-surface-variant hover:text-primary transition-colors" href={project.url} target="_blank" rel="noreferrer"><span className="material-symbols-outlined">open_in_new</span></a>}
                        {project.github && project.github !== '#' && <a className="text-on-surface-variant hover:text-primary transition-colors" href={project.github} target="_blank" rel="noreferrer"><span className="material-symbols-outlined">code</span></a>}
                    </div>
                </div>
            </div>
        </article>
    );
}

const projectsData = [
    {
        id: 1,
        title: "Enterprise Student Management System",
        category: "EdTech & Full Stack",
        overview: "A comprehensive digital infrastructure designed to manage student records, automate grading, track attendance, and facilitate communication between administrators, teachers, and students.",
        problem: "Traditional schools rely on fragmented manual systems for grading, attendance, and record-keeping, leading to data loss, inefficiencies, and poor communication.",
        solution: "Engineered a centralized, role-based cloud platform with secure authentication, automated report generation, and real-time dashboard analytics.",
        features: ["Role-based Access Control (Admin, Teacher, Student)", "Automated Grading & Report Generation", "Real-time Attendance Tracking", "Secure Parent Portal", "RESTful API Integration"],
        tech: ["React.js", "PHP", "MySQL", "TailwindCSS", "JWT Auth"],
        challenges: "Designing a database schema that efficiently handles thousands of concurrent student records without slowing down complex grading queries.",
        lessons: "Learned advanced MySQL indexing techniques and how to structure deeply nested relational data for rapid API retrieval.",
        results: "Successfully digitized administrative workflows, providing real-time visibility into student performance and streamlining data entry.",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
        url: "#",
        github: "#"
    },
    {
        id: 2,
        title: "Brilliant Pathways International Schools",
        category: "Web Development",
        overview: "A modern, highly-responsive official web presence built for an international educational institution to showcase their facilities, curriculum, and admissions process.",
        problem: "The school lacked a digital footprint, making it difficult for prospective parents to find reliable information or apply online.",
        solution: "Designed and developed a premium, fast-loading website with an integrated CMS for the school administration to update news and events.",
        features: ["Dynamic Content Management", "Online Admissions Portal", "Interactive Campus Tour", "SEO Optimized Architecture", "Mobile-First Design"],
        tech: ["React.js", "Framer Motion", "PHP", "TailwindCSS"],
        challenges: "Ensuring the website loaded instantly across varying network speeds, typical for prospective parents browsing on mobile devices.",
        lessons: "Mastered advanced asset optimization, lazy loading techniques, and efficient caching strategies.",
        results: "Established a dominant digital presence leading to significantly increased online enrollment inquiries.",
        image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800",
        url: "#",
        github: "#"
    },
    {
        id: 3,
        title: "NewsPort Digital",
        category: "Web Development",
        overview: "A scalable digital journalism platform designed to handle high-traffic news delivery with categorizations, live updates, and secure author dashboards.",
        problem: "Existing off-the-shelf CMS solutions were too bloated and slow for delivering breaking news efficiently.",
        solution: "Built a custom, lightweight publishing engine with a focus on core web vitals and rapid content delivery.",
        features: ["Custom Author Dashboard", "Category Management", "Live Search", "Rich Text Editor Integration", "Analytics Tracking"],
        tech: ["PHP", "MySQL", "JavaScript", "HTML/CSS"],
        challenges: "Sanitizing user input from the rich text editor to prevent XSS attacks while maintaining complex HTML formatting.",
        lessons: "Deepened understanding of web security, input sanitization, and parameterized database queries.",
        results: "Delivered a platform capable of handling concurrent readers with zero database bottlenecks.",
        image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=800",
        url: "#",
        github: "#"
    },
    {
        id: 4,
        title: "MAXIMUS OS: Interactive Portfolio",
        category: "Software Engineering",
        overview: "A highly immersive, interactive portfolio designed to mimic a futuristic operating system, combining cutting-edge frontend engineering with cyberpunk aesthetics.",
        problem: "Traditional portfolios fail to demonstrate true engineering capability, feeling like static brochures rather than dynamic software.",
        solution: "Architected a 'living' web application with custom cursor interactions, simulated terminal sequences, dynamic soundscapes, and integrated state management.",
        features: ["Simulated Boot Sequence", "HTML5 Canvas Node Network", "Web Audio API Sound Engine", "Konami Code Easter Egg", "Smooth Page Transitions"],
        tech: ["React.js", "Framer Motion", "Lenis Scroll", "TailwindCSS"],
        challenges: "Managing complex global state and ensuring that heavy canvas animations did not cause frame drops on low-end devices.",
        lessons: "Refined skills in React performance optimization, `requestAnimationFrame`, and memoization techniques.",
        results: "Created a unique digital footprint that instantly communicates technical proficiency and design aesthetics to visitors.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
        url: "#",
        github: "#"
    }
];

export default function ProjectsShowcase() {
    const [activeFilter, setActiveFilter] = useState('All');
    const [selectedProject, setSelectedProject] = useState(null);
    
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
                        {filteredProjects.map((project, idx) => (
                            <motion.div 
                                key={project.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                                className="h-full"
                            >
                                <ProjectCard3D project={project} onSelectProject={setSelectedProject} />
                            </motion.div>
                        ))}
                </section>
            </main>
            
            {/* Project Modal */}
            <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        </div>
    );
}
