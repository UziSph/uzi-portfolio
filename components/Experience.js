"use client";

import { motion } from "framer-motion";
import { FileCode2, Layers } from "lucide-react";

export default function Experience() {
    return (
        <section id="experience" className="py-16">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-8"
                >
                    <h2 className="text-xl font-bold tracking-tight border-b border-[var(--color-border)] pb-4">
                        Experience:
                    </h2>
                </motion.div>

                <div className="grid gap-3">
                    {/* Scripting */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                        className="flex items-center gap-6 p-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] hover:bg-[var(--color-border)]/20 transition-colors"
                    >
                        <div className="w-12 h-12 rounded-lg bg-[var(--color-border)]/50 flex items-center justify-center flex-shrink-0">
                            <FileCode2 className="w-6 h-6 opacity-80" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg mb-1">Scripting</h3>
                            <p className="text-sm text-muted-foreground">4 to 5 years</p>
                        </div>
                    </motion.div>

                    {/* UI */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="flex items-center gap-6 p-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] hover:bg-[var(--color-border)]/20 transition-colors"
                    >
                        <div className="w-12 h-12 rounded-lg bg-[var(--color-border)]/50 flex items-center justify-center flex-shrink-0">
                            <Layers className="w-6 h-6 opacity-80" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg mb-1">UI</h3>
                            <p className="text-sm text-muted-foreground">1 to 2 years</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
