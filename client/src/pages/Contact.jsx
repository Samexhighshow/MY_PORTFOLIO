import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { sendContactMessage } from '../services/api';
import MagneticButton from '../components/animations/MagneticButton';

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', type: 'Security Audit', message: '' });
    const [status, setStatus] = useState('idle');
    const [copied, setCopied] = useState(false);
    const [isAcquiringTarget, setIsAcquiringTarget] = useState(true);
    const [terminalLines, setTerminalLines] = useState([]);

    useEffect(() => {
        const lines = [
            "Initializing secure protocol...",
            "Routing connection through proxy [192.168.1.100]...",
            "Bypassing standard firewalls...",
            "Decrypting communication channel...",
            "Target locked. Connection secure."
        ];
        
        let currentLine = 0;
        const interval = setInterval(() => {
            setTerminalLines(prev => [...prev, lines[currentLine]]);
            currentLine++;
            
            if (currentLine >= lines.length) {
                clearInterval(interval);
                setTimeout(() => setIsAcquiringTarget(false), 800);
            }
        }, 500);
        
        return () => clearInterval(interval);
    }, []);

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        try {
            await sendContactMessage(formData);
            setStatus('success');
            setFormData({ name: '', email: '', type: 'Security Audit', message: '' });
            setTimeout(() => setStatus('idle'), 3000);
        } catch (error) {
            setStatus('error');
            setTimeout(() => setStatus('idle'), 3000);
        }
    };

    const copyEmail = () => {
        navigator.clipboard.writeText('contact@cybershield.dev');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    if (isAcquiringTarget) {
        return (
            <main className="pt-32 pb-stack-xl max-w-container-max mx-auto px-margin-mobile md:px-stack-lg min-h-[70vh] flex flex-col justify-center font-mono">
                <div className="space-y-4 max-w-3xl">
                    {terminalLines.map((line, i) => (
                        <motion.div 
                            key={i} 
                            initial={{ opacity: 0, x: -10 }} 
                            animate={{ opacity: 1, x: 0 }} 
                            className="text-secondary-fixed text-sm md:text-base tracking-wider"
                        >
                            <span className="text-primary-fixed mr-2">{'>'}</span>
                            {line}
                        </motion.div>
                    ))}
                    <motion.div 
                        animate={{ opacity: [1, 0] }} 
                        transition={{ repeat: Infinity, duration: 0.8 }} 
                        className="w-3 h-5 bg-secondary-fixed mt-4 inline-block"
                    ></motion.div>
                </div>
            </main>
        );
    }

    return (
        <main className="pt-32 pb-stack-xl max-w-container-max mx-auto px-margin-mobile md:px-stack-lg">
            {/* Hero Section */}
            <section className="mb-stack-lg">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
                    <motion.div 
                        className="md:col-span-8"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-stack-sm text-secondary">
                            Let's Secure the Future Together.
                        </h1>
                        <p className="text-on-surface-variant max-w-2xl font-body-lg text-body-lg">
                            Seeking high-impact security audits, specialized software development, or strategic technical leadership? Whether you're a startup or an enterprise, let's explore how we can elevate your systems.
                        </p>
                    </motion.div>
                    <motion.div 
                        className="md:col-span-4 flex items-end justify-end"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        {/* Availability Status */}
                        <div className="bg-white/5 backdrop-blur-2xl border border-white/10 p-6 rounded-xl flex items-center gap-4 w-full md:w-auto hover:bg-white/10 transition-colors">
                            <div className="relative flex h-3 w-3">
                                <span className="animate-[pulse_2s_infinite] absolute inline-flex h-full w-full rounded-full bg-secondary-fixed opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary-fixed"></span>
                            </div>
                            <div>
                                <p className="font-label-caps text-label-caps text-secondary-fixed mb-1 uppercase tracking-widest">Live Status</p>
                                <p className="font-body-sm text-body-sm text-on-surface">Available for projects Q1 2025</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
                {/* Left: Contact Cards & Map */}
                <motion.div 
                    className="lg:col-span-5 space-y-stack-md order-2 lg:order-1"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Email */}
                        <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-5 rounded-xl group relative overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all">
                            <span className="material-symbols-outlined text-primary mb-3">alternate_email</span>
                            <h3 className="font-headline-md text-body-lg text-secondary mb-1">Email</h3>
                            <p className="text-on-surface-variant text-body-sm mb-4 truncate">contact@cybershield.dev</p>
                            <button onClick={copyEmail} className={`w-full py-2 ${copied ? 'bg-secondary-fixed/20' : 'bg-white/5 hover:bg-white/10'} rounded-lg text-label-caps font-label-caps transition-all flex items-center justify-center gap-2`}>
                                <span className="material-symbols-outlined text-[16px]">{copied ? 'check' : 'content_copy'}</span>
                                <span>{copied ? 'Copied!' : 'Copy to Clipboard'}</span>
                            </button>
                        </div>
                        {/* LinkedIn */}
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="bg-white/5 backdrop-blur-xl border border-white/10 p-5 rounded-xl group block hover:bg-white/10 hover:border-white/20 transition-all">
                            <span className="material-symbols-outlined text-primary mb-3">share</span>
                            <h3 className="font-headline-md text-body-lg text-secondary mb-1">LinkedIn</h3>
                            <p className="text-on-surface-variant text-body-sm mb-4">/in/cyber-professional</p>
                            <div className="w-full py-2 bg-white/5 hover:bg-white/10 rounded-lg text-label-caps font-label-caps transition-all flex items-center justify-center gap-2">
                                <span>Connect</span>
                                <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
                            </div>
                        </a>
                        {/* WhatsApp */}
                        <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" className="bg-white/5 backdrop-blur-xl border border-white/10 p-5 rounded-xl group block hover:bg-white/10 hover:border-white/20 transition-all">
                            <span className="material-symbols-outlined text-primary mb-3">chat_bubble</span>
                            <h3 className="font-headline-md text-body-lg text-secondary mb-1">WhatsApp</h3>
                            <p className="text-on-surface-variant text-body-sm mb-4">Fastest Response</p>
                            <div className="w-full py-2 bg-white/5 hover:bg-white/10 rounded-lg text-label-caps font-label-caps transition-all flex items-center justify-center gap-2">
                                <span>Chat Now</span>
                            </div>
                        </a>
                        {/* GitHub */}
                        <a href="https://github.com" target="_blank" rel="noreferrer" className="bg-white/5 backdrop-blur-xl border border-white/10 p-5 rounded-xl group block hover:bg-white/10 hover:border-white/20 transition-all">
                            <span className="material-symbols-outlined text-primary mb-3">terminal</span>
                            <h3 className="font-headline-md text-body-lg text-secondary mb-1">GitHub</h3>
                            <p className="text-on-surface-variant text-body-sm mb-4">View Repositories</p>
                            <div className="w-full py-2 bg-white/5 hover:bg-white/10 rounded-lg text-label-caps font-label-caps transition-all flex items-center justify-center gap-2">
                                <span>Explore Code</span>
                            </div>
                        </a>
                    </div>
                    {/* Interactive Map Placeholder */}
                    <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden aspect-video relative">
                        <div className="absolute inset-0 z-0 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBuGlGkhArWK3AZNRtZLjkqgxJcnEc5urBv6wanPp8oOpX5D_QSAVhdQxbl_oqkcGZ756DQ7zg5-ARlfPzxipUtCG81GwzGXB0Y3Lzv32eKciSziWpgYaFZXNzfJ8pRlwqGswDdM9kXeeD-oTzstEiHqm8FKiD3vLEOAFKIR_o0ogTQkKzZFJcP782SVCoLK71P5Rw_I3j28XulzYmB5tAl3bn6w8cDu7XYG_7r8-sb4n0Z93MkzUDfJ9D95svyOsfbgoYtZ5VOIwkU')" }}></div>
                        <div className="absolute bottom-4 left-4 bg-surface-dim/80 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10 z-10">
                            <p className="text-label-caps font-label-caps text-secondary-fixed">Global Reach / NY HQ</p>
                        </div>
                    </div>
                </motion.div>

                {/* Right: Contact Form */}
                <motion.div 
                    className="lg:col-span-7 order-1 lg:order-2"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-2xl relative overflow-hidden group">
                        {/* Glow overlay */}
                        <div className="absolute -inset-[100%] bg-gradient-to-r from-transparent via-secondary-container/10 to-transparent rotate-45 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-[2s]"></div>
                        
                        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="group/input relative focus-within:scale-[1.01] transition-transform">
                                    <label className="block text-label-caps font-label-caps text-on-surface-variant mb-2 uppercase">Full Name</label>
                                    <input required name="name" value={formData.name} onChange={handleChange} className="w-full bg-surface-container-low border-white/10 rounded-lg px-4 py-3 text-on-surface placeholder:text-outline-variant focus:ring-0 focus:border-secondary-container/50 transition-all outline-none" placeholder="John Doe" type="text" />
                                </div>
                                <div className="group/input relative focus-within:scale-[1.01] transition-transform">
                                    <label className="block text-label-caps font-label-caps text-on-surface-variant mb-2 uppercase">Email Address</label>
                                    <input required name="email" value={formData.email} onChange={handleChange} className="w-full bg-surface-container-low border-white/10 rounded-lg px-4 py-3 text-on-surface placeholder:text-outline-variant focus:ring-0 focus:border-secondary-container/50 transition-all outline-none" placeholder="john@example.com" type="email" />
                                </div>
                            </div>
                            <div className="group/input relative focus-within:scale-[1.01] transition-transform">
                                <label className="block text-label-caps font-label-caps text-on-surface-variant mb-2 uppercase">Inquiry Type</label>
                                <div className="relative">
                                    <select name="type" value={formData.type} onChange={handleChange} className="w-full bg-surface-container-low border-white/10 rounded-lg px-4 py-3 text-on-surface appearance-none focus:ring-0 focus:border-secondary-container/50 outline-none">
                                        <option>Security Audit</option>
                                        <option>Software Development</option>
                                        <option>ICT Strategy</option>
                                        <option>Speaking/Training</option>
                                        <option>Other</option>
                                    </select>
                                    <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-outline">expand_more</span>
                                </div>
                            </div>
                            <div className="group/input relative focus-within:scale-[1.01] transition-transform">
                                <label className="block text-label-caps font-label-caps text-on-surface-variant mb-2 uppercase">Your Message</label>
                                <textarea required name="message" value={formData.message} onChange={handleChange} className="w-full bg-surface-container-low border-white/10 rounded-lg px-4 py-3 text-on-surface placeholder:text-outline-variant focus:ring-0 focus:border-secondary-container/50 transition-all outline-none resize-none" placeholder="Tell me about your project or security needs..." rows="6"></textarea>
                            </div>
                            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
                                <p className="text-body-sm text-on-surface-variant max-w-[200px]">
                                    Your data is encrypted and handled securely.
                                </p>
                                <MagneticButton 
                                    type="submit"
                                    className={`px-10 py-4 rounded-full font-bold font-headline-md tracking-tight flex items-center gap-3 bg-gradient-to-r from-secondary-container to-tertiary-fixed text-surface ${status !== 'idle' ? 'opacity-80' : ''}`}
                                >
                                    <span>
                                        {status === 'idle' && 'Send Message'}
                                        {status === 'loading' && 'Processing...'}
                                        {status === 'success' && 'Message Sent!'}
                                        {status === 'error' && 'Failed to Send'}
                                    </span>
                                    <span className="material-symbols-outlined">
                                        {status === 'success' ? 'check_circle' : 'send'}
                                    </span>
                                </MagneticButton>
                            </div>
                        </form>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
