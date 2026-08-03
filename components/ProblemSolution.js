"use client";

import { motion } from "framer-motion";

export default function ProblemSolution() {
    return (
        <section className="py-24">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    {/* Problem */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <span className="inline-block text-xs font-semibold tracking-widest uppercase text-red-500 mb-3 bg-red-50 px-3 py-1 rounded-full">
                            The Problem
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                            Great ideas, but no way to build them.
                        </h2>
                        <p className="text-muted leading-relaxed">
                            You have an amazing concept for a Roblox game — but finding a
                            reliable developer who delivers quality work on time is
                            frustrating. Missed deadlines, poor communication, and
                            subpar results waste your time and money.
                        </p>
                    </motion.div>

                    {/* Solution */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent mb-3 bg-accent/10 px-3 py-1 rounded-full">
                            The Solution
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                            A developer who actually <span className="text-accent">delivers.</span>
                        </h2>
                        <p className="text-muted leading-relaxed">
                            I bring your vision to life with clean builds, efficient
                            scripting, and pixel-perfect UI — delivered on time with
                            transparent communication every step of the way. No
                            surprises, just results.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
