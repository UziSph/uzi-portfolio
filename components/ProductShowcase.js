"use client";

import { motion } from "framer-motion";

export default function ProductShowcase() {
    return (
        <section className="py-24">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Text side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent mb-3 bg-accent/10 px-3 py-1 rounded-full">
                            Showcase
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                            Quality you can <span className="text-accent">see.</span>
                        </h2>
                        <p className="text-muted leading-relaxed mb-6">
                            Every project is crafted with attention to detail — from
                            optimized scripts to polished visuals. Here&apos;s a glimpse of
                            the standard you can expect.
                        </p>
                        <ul className="space-y-3">
                            {[
                                "Pixel-perfect builds & environments",
                                "Optimized, lag-free scripting",
                                "Modern UI that players love",
                                "Regular progress updates",
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-sm text-muted">
                                    <span className="w-5 h-5 rounded-full bg-accent/10 text-accent flex items-center justify-center flex-shrink-0">
                                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                        </svg>
                                    </span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Visual side */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                        className="relative"
                    >
                        <div className="rounded-2xl border border-border bg-gradient-to-br from-accent/5 via-purple-50 to-background overflow-hidden shadow-xl">
                            <div className="aspect-[16/10] flex items-center justify-center p-12">
                                <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
                                    {[
                                        { label: "Projects", value: "50+", color: "bg-accent/10 text-accent" },
                                        { label: "Clients", value: "30+", color: "bg-cyan-50 text-cyan-600" },
                                        { label: "5★ Reviews", value: "98%", color: "bg-green-50 text-green-600" },
                                        { label: "On-Time", value: "100%", color: "bg-amber-50 text-amber-600" },
                                    ].map((stat, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                                            className="bg-white rounded-xl p-4 shadow-sm border border-border text-center"
                                        >
                                            <p className={`text-2xl font-bold ${stat.color.split(" ")[1]}`}>{stat.value}</p>
                                            <p className="text-xs text-muted mt-1">{stat.label}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
