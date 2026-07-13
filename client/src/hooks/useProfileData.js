import { useState, useEffect } from 'react';

const staticProfileData = {
    personal: {
        name: "ISHOLA SAMUEL",
        brand: "MAXIMUS OS",
        title: "Cyber Security Student & Full Stack Engineer",
        tagline: "Building secure, scalable, and meaningful digital solutions while continuously growing into a technology leader.",
        biography: "I am Ishola Samuel (known digitally as MAXIMUS) — a multidisciplinary technology professional deeply passionate about the intersection of software engineering, educational technology, and cybersecurity. My journey didn't start in a computer science class—it started with a genuine curiosity for how digital systems operate, leading me from design to development, and now to securing critical infrastructure.",
        story: [
            "My journey into technology began not with code, but with design. I was fascinated by how visual hierarchy and user psychology could communicate complex ideas. That foundation in Graphic & Web Design taught me a critical lesson: technology must be human-centric.",
            "As I started building what I designed, I transitioned deeply into Frontend Engineering. I fell in love with React and the challenge of managing complex state in interactive applications. But a beautiful interface is useless if the system behind it fails.",
            "This realization pushed me into Backend Architecture. I mastered PHP, MySQL, and API design, allowing me to build robust Educational Technology platforms—systems that actually impact students and administrators.",
            "Today, as a Cyber Security Science student at LAUTECH, I am focused on the ultimate frontier: protecting these digital ecosystems. I believe that security isn't a feature you add at the end; it is the fundamental blueprint of any meaningful software."
        ]
    },
    now: [
        "Studying Cyber Security Science at LAUTECH",
        "Building and expanding MAXIMUS OS",
        "Developing secure Educational Technology solutions",
        "Learning advanced React architecture and performance patterns",
        "Exploring secure software engineering principles",
        "Improving my full-stack engineering workflow"
    ],
    reading_list: [
        { title: "Clean Code", author: "Robert C. Martin", status: "Reading" },
        { title: "The Web Application Hacker's Handbook", author: "Dafydd Stuttard", status: "Reading" },
        { title: "Designing Data-Intensive Applications", author: "Martin Kleppmann", status: "Queued" },
        { title: "Computer Networking: A Top-Down Approach", author: "Kurose & Ross", status: "Reading" }
    ],
    favorite_tech: [
        { name: "React", reason: "For its declarative UI paradigm and component-driven architecture that makes complex interfaces manageable." },
        { name: "Tailwind CSS", reason: "For utility-first styling that keeps CSS maintainable and incredibly fast to iterate with." },
        { name: "PHP", reason: "A battle-tested server-side language that gets things done reliably for web applications." },
        { name: "MySQL", reason: "Rock-solid relational data integrity. It forces you to think carefully about your data structures." },
        { name: "Framer Motion", reason: "Brings applications to life with premium, physics-based micro-interactions." }
    ],
    values: [
        { title: "Integrity", desc: "Writing honest code, acknowledging trade-offs, and taking responsibility for the systems I build." },
        { title: "Continuous Learning", desc: "The technology landscape evolves daily. Stagnation is the greatest vulnerability." },
        { title: "Simplicity", desc: "Unnecessary complexity breeds bugs and security flaws. Keep it clear, modular, and maintainable." },
        { title: "Problem Solving", desc: "I don't just write code to use a framework; I write code to solve tangible human problems." }
    ],
    hobbies: [
        "Learning emerging technologies and security frameworks",
        "Exploring modern UI/UX design trends",
        "Teaching and sharing technical knowledge",
        "Researching vulnerabilities and system hardening"
    ],
    faq: [
        { question: "Are you available for freelance work?", answer: "Yes, depending on my current academic and project schedule. I take on select projects that align with my skills and interests." },
        { question: "Are you open to internships?", answer: "Absolutely. I am actively seeking internships in Cyber Security and Software Engineering to gain enterprise experience." },
        { question: "Can you build School Management Systems?", answer: "Yes. I have extensive experience building end-to-end EdTech platforms, including CBT systems and student portals." },
        { question: "Do you provide ICT consulting?", answer: "Yes, I help organizations plan, secure, and manage their digital infrastructure." },
        { question: "Do you work remotely?", answer: "Yes, I am fully equipped and accustomed to asynchronous, remote work environments." }
    ],
    changelog: [
        { version: "2.0.0", date: "July 2026", changes: ["Introduced MAXIMUS OS architectural concept", "Added standalone Project Case Studies", "Expanded Personal Storytelling & Resume System"] },
        { version: "1.5.0", date: "June 2026", changes: ["Added immersive Terminal and Boot Sequence animations", "Implemented Cyber Security Command Center"] },
        { version: "1.0.0", date: "January 2026", changes: ["Initial portfolio release", "Basic project showcase and experience timeline"] }
    ],
    education: {
        institution: "Ladoke Akintola University of Technology (LAUTECH)",
        degree: "Bachelor of Science in Cyber Security Science",
        status: "In Progress",
        coursework: [
            "Secure Software Development",
            "Networking & Architecture",
            "Digital Forensics",
            "Ethical Hacking Fundamentals",
            "Blockchain Technology Concepts",
            "Cybersecurity Research"
        ]
    },
    learning_journey: [
        { phase: "The Foundation", title: "Graphic & Web Design", desc: "Started by understanding user psychology, typography, and visual hierarchy." },
        { phase: "The Blueprint", title: "Frontend Engineering", desc: "Transitioned to building interactive interfaces with React and complex state management." },
        { phase: "The Engine", title: "Backend Architecture", desc: "Mastered server-side logic, API design, and relational database management." },
        { phase: "The Application", title: "EdTech & ICT Management", desc: "Applied engineering skills to solve real-world problems in educational infrastructure." },
        { phase: "The Shield", title: "Cyber Security Science", desc: "Currently studying at LAUTECH, learning to protect the very systems I build." }
    ],
    engineering_philosophy: [
        { principle: "Secure by Default", desc: "Security isn't a feature applied at the end; it's the foundation of the architecture." },
        { principle: "Solve Real Problems", desc: "Technology should empower people and solve tangible issues, not just look impressive." },
        { principle: "Embrace Simplicity", desc: "Unnecessary complexity breeds vulnerabilities. Keep code clear, modular, and maintainable." },
        { principle: "Prioritize User Experience", desc: "A secure system that is impossible to use will inevitably be bypassed by users." },
        { principle: "Continuous Learning", desc: "The technology landscape evolves daily. Staying relevant requires deliberate, continuous study." }
    ],
    skills: {
        confident: [
            { name: "React.js", icon: "code" }, { name: "PHP", icon: "data_object" }, { name: "MySQL", icon: "database" }, { name: "TailwindCSS", icon: "palette" }, { name: "REST APIs", icon: "api" }, { name: "Git", icon: "account_tree" }
        ],
        learning: [
            { name: "Linux Administration", icon: "terminal" }, { name: "Python for Security", icon: "terminal" }, { name: "Network Traffic Analysis", icon: "troubleshoot" }, { name: "Penetration Testing Methodology", icon: "security" }
        ],
        future: [
            { name: "Cloud Security Architecture", icon: "cloud" }, { name: "Rust for Systems", icon: "memory" }, { name: "Advanced Malware Analysis", icon: "bug_report" }, { name: "DevSecOps", icon: "lock" }
        ]
    },
    cybersecurity_growth: {
        focus_areas: ["Secure Software Development", "Network Security", "Digital Forensics"],
        active_labs: [
            { name: "Kali Linux", icon: "terminal", type: "OS / Pentesting" }, 
            { name: "Wireshark", icon: "troubleshoot", type: "Network Analysis" }, 
            { name: "Nmap", icon: "radar", type: "Network Discovery" }
        ],
        future_goals: ["Capture The Flag (CTF) Competitions", "Vulnerability Research", "Ethical Hacking Certifications"]
    },
    professional_availability: {
        status: "Available for collaboration",
        services: [
            "Full Stack Web Development",
            "Educational Technology Solutions",
            "ICT Infrastructure Consulting",
            "Technical Documentation"
        ]
    },
    testimonials: []
};

export function useProfileData() {
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Simulating network delay to keep loading animations
        const timer = setTimeout(() => {
            setProfile(staticProfileData);
            setLoading(false);
        }, 300);

        return () => clearTimeout(timer);
    }, []);

    return { profile, loading, error };
}
