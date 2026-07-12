<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    http_response_code(405);
    echo json_encode(["message" => "Method not allowed"]);
    exit;
}

$profileData = [
    "personal" => [
        "name" => "MAXIMUS",
        "title" => "Cyber Security Student & Full Stack Engineer",
        "tagline" => "Building secure, scalable, and meaningful digital solutions while continuously growing into a technology leader.",
        "biography" => "I am a multidisciplinary technology professional deeply passionate about the intersection of software engineering, educational technology, and cybersecurity. My journey didn't start in a computer science class—it started with a genuine curiosity for how digital systems operate, leading me from design to development, and now to securing critical infrastructure."
    ],
    "education" => [
        "institution" => "Ladoke Akintola University of Technology (LAUTECH)",
        "degree" => "Bachelor of Science in Cyber Security Science",
        "status" => "In Progress",
        "coursework" => [
            "Secure Software Development",
            "Networking & Architecture",
            "Digital Forensics",
            "Ethical Hacking Fundamentals",
            "Blockchain Technology Concepts",
            "Cybersecurity Research"
        ]
    ],
    "learning_journey" => [
        ["phase" => "The Foundation", "title" => "Graphic & Web Design", "desc" => "Started by understanding user psychology, typography, and visual hierarchy."],
        ["phase" => "The Blueprint", "title" => "Frontend Engineering", "desc" => "Transitioned to building interactive interfaces with React and complex state management."],
        ["phase" => "The Engine", "title" => "Backend Architecture", "desc" => "Mastered server-side logic, API design, and relational database management."],
        ["phase" => "The Application", "title" => "EdTech & ICT Management", "desc" => "Applied engineering skills to solve real-world problems in educational infrastructure."],
        ["phase" => "The Shield", "title" => "Cyber Security Science", "desc" => "Currently studying at LAUTECH, learning to protect the very systems I build."]
    ],
    "engineering_philosophy" => [
        ["principle" => "Secure by Default", "desc" => "Security isn't a feature applied at the end; it's the foundation of the architecture."],
        ["principle" => "Solve Real Problems", "desc" => "Technology should empower people and solve tangible issues, not just look impressive."],
        ["principle" => "Embrace Simplicity", "desc" => "Unnecessary complexity breeds vulnerabilities. Keep code clear, modular, and maintainable."],
        ["principle" => "Prioritize User Experience", "desc" => "A secure system that is impossible to use will inevitably be bypassed by users."],
        ["principle" => "Continuous Learning", "desc" => "The technology landscape evolves daily. Staying relevant requires deliberate, continuous study."]
    ],
    "skills" => [
        "confident" => [
            ["name" => "React.js", "icon" => "code"], ["name" => "PHP", "icon" => "data_object"], ["name" => "MySQL", "icon" => "database"], ["name" => "TailwindCSS", "icon" => "palette"], ["name" => "REST APIs", "icon" => "api"], ["name" => "Git", "icon" => "account_tree"]
        ],
        "learning" => [
            ["name" => "Linux Administration", "icon" => "terminal"], ["name" => "Python for Security", "icon" => "terminal"], ["name" => "Network Traffic Analysis", "icon" => "troubleshoot"], ["name" => "Penetration Testing Methodology", "icon" => "security"]
        ],
        "future" => [
            ["name" => "Cloud Security Architecture", "icon" => "cloud"], ["name" => "Rust for Systems", "icon" => "memory"], ["name" => "Advanced Malware Analysis", "icon" => "bug_report"], ["name" => "DevSecOps", "icon" => "lock"]
        ]
    ],
    "cybersecurity_growth" => [
        "focus_areas" => ["Secure Software Development", "Network Security", "Digital Forensics"],
        "active_labs" => [
            ["name" => "Kali Linux", "icon" => "terminal", "type" => "OS / Pentesting"], 
            ["name" => "Wireshark", "icon" => "troubleshoot", "type" => "Network Analysis"], 
            ["name" => "Nmap", "icon" => "radar", "type" => "Network Discovery"]
        ],
        "future_goals" => ["Capture The Flag (CTF) Competitions", "Vulnerability Research", "Ethical Hacking Certifications"]
    ],
    "career_roadmap" => [
        "Build and deploy production-grade secure software",
        "Expand practical cybersecurity laboratory experience",
        "Earn foundational professional certifications (e.g., Security+)",
        "Contribute meaningfully to open-source security tools",
        "Publish technical research and documentation",
        "Evolve into a trusted Secure Software Engineer & Consultant"
    ],
    "professional_availability" => [
        "status" => "Available for collaboration",
        "services" => [
            "Full Stack Web Development",
            "Educational Technology Solutions",
            "ICT Infrastructure Consulting",
            "Technical Documentation"
        ]
    ],
    "testimonials" => [
        // Real testimonials will be loaded here later.
        // For now, this is left empty or with a placeholder indicating "system standing by".
    ]
];

http_response_code(200);
echo json_encode(["status" => "success", "data" => $profileData]);
