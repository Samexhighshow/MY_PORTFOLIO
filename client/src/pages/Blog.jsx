import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import DecryptText from '../components/animations/DecryptText';

const staticBlogPosts = [
    {
        id: 1,
        title: "Zero-Trust Architecture: Moving Beyond the VPN",
        category: "Cybersecurity",
        date: "2026-07-11",
        excerpt: "Why traditional perimeter security is failing modern enterprise networks and how Zero-Trust principles mitigate lateral movement attacks.",
        readTime: "5 min read",
        author: "Maximus"
    },
    {
        id: 2,
        title: "Building Robust Student Management Systems",
        category: "EdTech",
        date: "2026-07-06",
        excerpt: "A deep dive into the database design and API architecture required to handle thousands of concurrent student records without locking.",
        readTime: "8 min read",
        author: "Maximus"
    },
    {
        id: 3,
        title: "Securing React Applications: Common Pitfalls",
        category: "Web Dev",
        date: "2026-06-29",
        excerpt: "An analysis of XSS vulnerabilities in modern frontend frameworks and how to securely handle JWTs in local storage vs HTTP-only cookies.",
        readTime: "6 min read",
        author: "Maximus"
    },
    {
        id: 4,
        title: "Network Administration in the Cloud Era",
        category: "ICT Mgmt",
        date: "2026-06-13",
        excerpt: "Strategies for maintaining visibility and control when your infrastructure spans across AWS, Azure, and legacy on-premise hardware.",
        readTime: "10 min read",
        author: "Maximus"
    }
];

export default function Blog() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulating network delay to keep loading animations
        const timer = setTimeout(() => {
            setPosts(staticBlogPosts);
            setLoading(false);
        }, 300);

        return () => clearTimeout(timer);
    }, []);

    return (
        <main className="pt-32 pb-stack-xl max-w-container-max mx-auto px-margin-mobile md:px-stack-lg relative z-10">
            {/* Header Section */}
            <section className="mb-24 text-center max-w-3xl mx-auto">
                <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-4 tracking-tighter">
                    <DecryptText text="Technical" className="text-on-surface" /> <span className="text-primary"><DecryptText text="Transmissions" /></span>
                </h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant opacity-90 leading-relaxed">
                    Thoughts, tutorials, and research on Cyber Security, Web Development, and EdTech infrastructure.
                </p>
            </section>

            {/* Blog Grid */}
            <section>
                {loading ? (
                    <div className="flex justify-center items-center h-64">
                        <div className="w-12 h-12 border-4 border-white/10 border-t-primary rounded-full animate-spin"></div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-md">
                        {posts.map((post, index) => (
                            <motion.div 
                                key={post.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-surface-container/30 border border-white/5 backdrop-blur-md rounded-2xl p-8 group hover:border-primary/40 transition-colors flex flex-col h-full shadow-lg"
                            >
                                <div className="flex justify-between items-center mb-6">
                                    <span className="px-4 py-1 bg-white/5 text-secondary-fixed text-label-caps font-label-caps tracking-widest rounded-full border border-white/10">
                                        {post.category}
                                    </span>
                                    <span className="font-mono-code text-[12px] text-on-surface-variant">{post.date}</span>
                                </div>
                                <h2 className="font-display-lg text-2xl text-white mb-4 group-hover:text-primary transition-colors">{post.title}</h2>
                                <p className="font-body-md text-on-surface-variant mb-8 leading-relaxed flex-grow">
                                    {post.excerpt}
                                </p>
                                <div className="flex items-center justify-between pt-6 border-t border-white/5 mt-auto">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold border border-primary/30">
                                            {post.author.charAt(0)}
                                        </div>
                                        <span className="font-label-caps text-label-caps text-on-surface tracking-widest">{post.author}</span>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <span className="font-mono-code text-[12px] text-outline-variant">{post.readTime}</span>
                                        <button className="text-secondary-fixed hover:text-white transition-colors">
                                            <span className="material-symbols-outlined">arrow_forward</span>
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </section>
        </main>
    );
}
