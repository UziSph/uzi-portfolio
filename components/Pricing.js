"use client";

import { motion } from "framer-motion";
import { Gamepad2, FileCode2, Package } from "lucide-react";

export default function Pricing() {
    return (
        <section id="pricing" className="py-16">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-8"
                >
                    <h2 className="text-xl font-bold tracking-tight border-b border-[var(--color-border)] pb-4">
                        Pricing:
                    </h2>
                </motion.div>

                <div className="grid gap-3">
                    {/* Entire game */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                        className="flex flex-col sm:flex-row sm:items-center gap-5 p-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] hover:bg-[var(--color-border)]/20 transition-colors"
                    >
                        <div className="hidden sm:flex w-12 h-12 rounded-lg bg-[var(--color-border)]/50 items-center justify-center flex-shrink-0">
                            <Gamepad2 className="w-6 h-6 opacity-80" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-base mb-1">An entire game <span className="text-muted-foreground font-normal ml-1">[TAX covered]</span></h3>
                            <p className="text-sm text-muted-foreground">12k to 35k based on the quality of the game.</p>
                        </div>
                    </motion.div>

                    {/* Scripting tasks */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="flex flex-col sm:flex-row sm:items-center gap-5 p-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] hover:bg-[var(--color-border)]/20 transition-colors"
                    >
                        <div className="hidden sm:flex w-12 h-12 rounded-lg bg-[var(--color-border)]/50 items-center justify-center flex-shrink-0">
                            <FileCode2 className="w-6 h-6 opacity-80" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-base mb-1">Scripting tasks <span className="text-muted-foreground font-normal ml-1">[TAX covered]</span></h3>
                            <p className="text-sm text-muted-foreground">500 to 7k robux based on task size.</p>
                        </div>
                    </motion.div>

                    {/* UI tasks */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        className="flex flex-col sm:flex-row sm:items-center gap-5 p-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] hover:bg-[var(--color-border)]/20 transition-colors"
                    >
                        <div className="hidden sm:flex w-12 h-12 rounded-lg bg-[var(--color-border)]/50 items-center justify-center flex-shrink-0">
                            <Package className="w-6 h-6 opacity-80" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-base mb-1">UI tasks <span className="text-muted-foreground font-normal ml-1">[TAX covered]</span></h3>
                            <p className="text-sm text-muted-foreground">500 to 5k robux based on quality and total time to make.</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
