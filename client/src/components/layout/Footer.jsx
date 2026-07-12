import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-transparent backdrop-blur-lg border-t border-white/10 relative z-10 px-margin-mobile md:px-stack-lg">
            <div className="max-w-container-max mx-auto py-stack-xl grid grid-cols-1 md:grid-cols-4 gap-gutter">
                <div className="md:col-span-2 space-y-6">
                    <div className="font-headline-md text-[32px] font-extrabold tracking-[0.15em] relative inline-block">
                        <span className="bg-gradient-to-r from-secondary-container via-primary-fixed-dim to-tertiary-fixed-dim text-transparent bg-clip-text drop-shadow-[0_0_8px_var(--cyan-glow)] uppercase cyber-glitch" data-text="MAXIMUS">
                            MAXIMUS
                        </span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant max-w-sm">
                        Designing digital fortresses and engineering the future of enterprise technology. Let's build something secure.
                    </p>
                </div>
                <div>
                    <h5 className="font-label-caps text-label-caps text-secondary mb-6">Navigation</h5>
                    <ul className="space-y-4">
                        <li><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-secondary transition-colors" href="#">Architecture</a></li>
                        <li><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-secondary transition-colors" href="#">Operations</a></li>
                        <li><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-secondary transition-colors" href="#">Security</a></li>
                    </ul>
                </div>
                <div>
                    <h5 className="font-label-caps text-label-caps text-secondary mb-6">Legal</h5>
                    <ul className="space-y-4">
                        <li><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-secondary transition-colors" href="#">Compliance</a></li>
                        <li><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-secondary transition-colors" href="#">Privacy</a></li>
                        <li><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-secondary transition-colors" href="#">Terms</a></li>
                    </ul>
                </div>
            </div>
            <div className="max-w-container-max mx-auto pt-8 pb-8 md:pb-24 border-t border-outline-variant/10 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
                <div className="font-body-sm text-body-sm text-on-surface-variant">© {new Date().getFullYear()} MAXIMUS. Securely Encrypted.</div>
                <div className="flex gap-6">
                    <span className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors cursor-pointer">hub</span>
                    <span className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors cursor-pointer">terminal</span>
                    <span className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors cursor-pointer">alternate_email</span>
                </div>
            </div>
        </footer>
    );
}
