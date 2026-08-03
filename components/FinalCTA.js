"use client";

import { motion } from "framer-motion";

export default function FinalCTA() {
    return (
        <section id="cta" className="py-24">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="relative text-center rounded-3xl bg-gradient-to-br from-accent via-purple-600 to-accent-dark px-8 py-20 overflow-hidden"
                >
                    {/* Decorative circles */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl pointer-events-none" />

                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
                            Ready to build something amazing?
                        </h2>
                        <p className="text-white/70 max-w-md mx-auto mb-8 text-lg">
                            Let&apos;s turn your idea into a Roblox experience players will love.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <a
                                href="#"
                                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white text-accent font-semibold hover:bg-white/90 transition-colors shadow-lg"
                            >
                                Get in Touch
                            </a>
                            <a
                                href="#pricing"
                                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-white/30 text-white font-medium hover:bg-white/10 transition-colors"
                            >
                                View Pricing
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
