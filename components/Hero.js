"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
            {/* Subtle gradient blob */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-br from-accent/10 via-purple-200/20 to-transparent rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Text */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent mb-4 bg-accent/10 px-3 py-1 rounded-full">
                            Roblox Development
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
                            Build your dream
                            <br />
                            <span className="text-accent">Roblox experience.</span>
                        </h1>
                        <p className="text-lg text-muted max-w-md mb-8 leading-relaxed">
                            From stunning builds to polished scripts — I create immersive
                            Roblox games that players love. Let&apos;s bring your vision to life.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a
                                href="#pricing"
                                className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-accent text-white font-medium hover:bg-accent-dark transition-colors shadow-lg shadow-accent/25"
                            >
                                View Pricing
                            </a>
                            <a
                                href="#features"
                                className="inline-flex items-center justify-center px-7 py-3 rounded-full border border-border text-foreground font-medium hover:bg-surface-hover transition-colors"
                            >
                                Learn More
                            </a>
                        </div>
                    </motion.div>

                    {/* Mockup / Illustration */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="relative hidden md:block"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-accent/10 border border-border bg-white">
                            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-surface">
                                <span className="w-3 h-3 rounded-full bg-red-400" />
                                <span className="w-3 h-3 rounded-full bg-yellow-400" />
                                <span className="w-3 h-3 rounded-full bg-green-400" />
                                <span className="ml-3 text-xs text-muted">Roblox Studio</span>
                            </div>
                            <div className="aspect-[4/3] bg-gradient-to-br from-accent/5 via-purple-50 to-cyan-50 flex items-center justify-center">
                                <div className="text-center p-8">
                                    <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-accent/10 flex items-center justify-center">
                                        <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V18m0 3.75l-2.25-1.313M12 18l2.25-1.313M12 18l-2.25-1.313M12 18V15m0 0l2.25 1.313M12 15l-2.25 1.313" />
                                        </svg>
                                    </div>
                                    <p className="text-sm font-semibold text-foreground">Your Project Preview</p>
                                    <p className="text-xs text-muted mt-1">Immersive worlds await</p>
                                </div>
                            </div>
                        </div>
                        {/* Floating badge */}
                        <motion.div
                            animate={{ y: [0, -8, 0] }}
                            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                            className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg border border-border px-4 py-2"
                        >
                            <span className="text-xs font-semibold text-accent">50+ Projects</span>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
