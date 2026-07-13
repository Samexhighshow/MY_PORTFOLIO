export const projectsData = [
    {
        id: 1,
        title: "Enterprise Student Management System",
        category: "EdTech & Full Stack",
        overview: "A comprehensive digital infrastructure designed to manage student records, automate grading, track attendance, and facilitate communication between administrators, teachers, and students.",
        businessProblem: "Traditional schools rely on fragmented manual systems for grading, attendance, and record-keeping. This leads to severe data loss, administrative bottlenecks, and poor communication between educators and parents.",
        goals: [
            "Digitize and secure all student records.",
            "Automate the complex grading calculation process.",
            "Provide real-time visibility into student performance for parents."
        ],
        planning: "Initial phases involved extensive interviews with school administrators to map out their exact paper-based workflows. The core challenge was designing a system that adapted to their existing grading rules rather than forcing them to adapt to the software.",
        systemArchitecture: "A monolithic, role-based architecture. The backend operates on PHP processing RESTful requests, strictly validating user roles before executing CRUD operations against a normalized MySQL database.",
        technologiesSelected: [
            { name: "React.js", reason: "Chosen for the frontend to provide a highly interactive, fast SPA experience for administrators managing heavy data tables." },
            { name: "PHP", reason: "Selected for its rapid development cycle and ubiquitous hosting support, crucial for budget-conscious schools." },
            { name: "MySQL", reason: "Mandatory for complex relational data (Students -> Classes -> Grades -> Subjects)." },
            { name: "JWT", reason: "Implemented for stateless, secure session management across different user roles." }
        ],
        designDecisions: "Decided to heavily normalize the database to ensure data integrity over read speed, as grade manipulation is highly sensitive. Used a custom hook architecture in React to handle complex multi-step forms.",
        challenges: "Designing a database schema that efficiently handles thousands of concurrent student records without slowing down complex end-of-term grading queries.",
        tradeOffs: "Chose to calculate final grades on the server-side during request time rather than caching them in the database. This increased API response time slightly but guaranteed that grades were never out of sync with raw data.",
        lessons: "Learned advanced MySQL indexing techniques and how to structure deeply nested relational data for rapid API retrieval. Gained immense appreciation for data validation and sanitation.",
        outcome: "Successfully digitized administrative workflows, completely eliminating paper-based report cards and providing real-time visibility into student performance.",
        futureImprovements: "Migrating the monolithic PHP backend to a Node.js microservices architecture to handle real-time WebSockets for instant messaging between teachers and parents.",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
        url: "#",
        github: "#"
    },
    {
        id: 2,
        title: "Brilliant Pathways International Schools",
        category: "Web Development",
        overview: "A modern, highly-responsive official web presence built for an international educational institution to showcase their facilities, curriculum, and admissions process.",
        businessProblem: "The school lacked a premium digital footprint, relying heavily on word-of-mouth. This made it difficult for prospective parents (especially international ones) to find reliable information or apply online.",
        goals: [
            "Establish a premium digital brand identity.",
            "Digitize the admissions and inquiry process.",
            "Provide a dynamic portal for news and event announcements."
        ],
        planning: "Focused heavily on UI/UX research to ensure the site felt trustworthy and modern. Wireframing prioritized mobile users, as analytics showed 80% of parent traffic came from phones.",
        systemArchitecture: "A decoupled architecture using a fast, static-generated frontend powered by React, communicating with a lightweight custom PHP CMS for content updates.",
        technologiesSelected: [
            { name: "React.js", reason: "Enabled a fast, app-like navigation experience." },
            { name: "Framer Motion", reason: "Used to add premium, subtle micro-animations that elevate the brand's perceived value." },
            { name: "TailwindCSS", reason: "Allowed rapid iteration of the complex, responsive grid layouts." }
        ],
        designDecisions: "Opted for a 'glassmorphism' design aesthetic to make the site feel futuristic yet approachable. Used lazy-loading for all heavy assets (campus videos, high-res images).",
        challenges: "Ensuring the website loaded instantly across varying network speeds, typical for prospective parents browsing on mobile devices.",
        tradeOffs: "Sacrificed some complex 3D animations in favor of faster initial page load speeds and better Core Web Vitals for SEO ranking.",
        lessons: "Mastered advanced asset optimization, lazy loading techniques, and efficient caching strategies.",
        outcome: "Established a dominant digital presence leading to a 40% increase in online enrollment inquiries within the first quarter.",
        futureImprovements: "Integrating a fully automated online payment gateway for application fees and tuition deposits directly through the site.",
        image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800",
        url: "#",
        github: "#"
    },
    {
        id: 3,
        title: "NewsPort Digital",
        category: "Web Development",
        overview: "A scalable digital journalism platform designed to handle high-traffic news delivery with categorizations, live updates, and secure author dashboards.",
        businessProblem: "Existing off-the-shelf CMS solutions like WordPress were too bloated, prone to security vulnerabilities, and slow for delivering breaking news efficiently.",
        goals: [
            "Build a lightweight, highly secure custom CMS.",
            "Optimize for sub-second page loads to retain readers.",
            "Provide a seamless writing experience for journalists."
        ],
        planning: "Started by analyzing the bottlenecks in traditional CMS platforms. Mapped out a streamlined database schema focused purely on content delivery, stripping away unnecessary plugins and overhead.",
        systemArchitecture: "A traditional MVC (Model-View-Controller) architecture built with pure PHP. Content is heavily cached at the application level before being served to the frontend.",
        technologiesSelected: [
            { name: "PHP (Custom MVC)", reason: "Avoided bloated frameworks to maintain absolute control over the request lifecycle and security." },
            { name: "MySQL", reason: "Structured for heavy read operations with targeted indexing." },
            { name: "Vanilla JS", reason: "Used instead of heavy frontend frameworks to keep the payload size as close to zero as possible." }
        ],
        designDecisions: "Decided to generate static HTML files for high-traffic articles upon publication, completely bypassing the database for anonymous readers.",
        challenges: "Sanitizing user input from the custom rich text editor to prevent Stored XSS attacks while maintaining complex HTML formatting for articles.",
        tradeOffs: "Traded the vast plugin ecosystem of WordPress for absolute control, speed, and security. This meant building features like SEO meta-tag generation from scratch.",
        lessons: "Deepened my understanding of web security, input sanitization, parameterized database queries, and the realities of high-traffic content delivery.",
        outcome: "Delivered a lightning-fast platform capable of handling thousands of concurrent readers during breaking news events with zero database bottlenecks.",
        futureImprovements: "Implementing an AI-driven recommendation engine to suggest related articles based on reading behavior.",
        image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=800",
        url: "#",
        github: "#"
    },
    {
        id: 4,
        title: "MAXIMUS OS: Interactive Portfolio",
        category: "Software Engineering",
        overview: "A highly immersive, interactive portfolio designed to mimic a futuristic operating system, combining cutting-edge frontend engineering with cyberpunk aesthetics.",
        businessProblem: "Traditional developer portfolios fail to demonstrate true engineering capability, often feeling like static PDF brochures rather than living, dynamic software.",
        goals: [
            "Instantly communicate elite technical proficiency.",
            "Create a memorable, immersive user experience.",
            "Build a scalable platform that grows alongside my career."
        ],
        planning: "The conceptual phase involved studying OS interfaces, cyberpunk aesthetics, and hardware boot sequences. The architecture was planned to be modular so new 'applications' (pages) could be added seamlessly.",
        systemArchitecture: "A modern React SPA (Single Page Application) utilizing Vite for rapid development. State is managed via Context for global themes, while routing is handled dynamically to support direct linking to case studies.",
        technologiesSelected: [
            { name: "React & Vite", reason: "For a blazing fast, component-driven architecture." },
            { name: "Framer Motion", reason: "To handle the complex layout animations, stagger effects, and page transitions." },
            { name: "Lenis", reason: "To hijack native scrolling and provide a buttery-smooth, premium scrolling experience." }
        ],
        designDecisions: "Chose a dark, terminal-inspired aesthetic with deep navy and cyan accents. Decided to build a custom cursor to force the user to interact with the UI differently than standard websites.",
        challenges: "Managing complex global state (like the Konami Code theme trigger) and ensuring that heavy canvas animations (particles, shaders) did not cause frame drops on low-end mobile devices.",
        tradeOffs: "Decided to disable the heavy WebGL shader backgrounds on mobile devices to preserve battery life and maintain 60FPS scrolling performance.",
        lessons: "Significantly refined my skills in React performance optimization, managing `requestAnimationFrame`, and advanced CSS styling architecture.",
        outcome: "Created a unique digital footprint that instantly communicates technical proficiency, design aesthetics, and a deep passion for technology to visitors.",
        futureImprovements: "Integrating a fully functional simulated terminal that accepts UNIX-like commands to navigate the site, fetch GitHub stats, and run Easter egg scripts.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
        url: "#",
        github: "#"
    }
];
