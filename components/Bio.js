"use client";

import { motion } from "framer-motion";

export default function Bio() {
    const smoothTransition = { duration: 0.8, ease: [0.16, 1, 0.3, 1] };

    return (
        <section className="relative pt-32 pb-20 overflow-hidden">
            {/* Subtle background glow effect */}
            <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={smoothTransition}
                    className="border-b border-[var(--color-border)] pb-12 mb-12"
                >
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ ...smoothTransition, delay: 0.1 }}
                            className="w-24 h-24 md:w-32 md:h-32 shrink-0 flex items-center justify-center relative my-auto drop-shadow-[0_15px_15px_rgba(0,0,0,0.6)]"
                        >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="/Logo.png"
                                alt="Uzi Logo"
                                className="w-full h-full object-contain"
                                onError={(e) => {
                                    e.currentTarget.style.display = "none";
                                    e.currentTarget.parentElement.innerHTML = '<span class="text-3xl font-bold opacity-50 flex items-center justify-center w-full h-full bg-[var(--color-surface)] rounded-3xl border border-[var(--color-border)] shadow-xl">Uzi</span>';
                                }}
                            />
                        </motion.div>
                        <div className="flex-1">
                            <motion.h1
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ ...smoothTransition, delay: 0.2 }}
                                className="text-5xl md:text-6xl font-bold tracking-tight mb-3"
                            >
                                Uzi
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ ...smoothTransition, delay: 0.25 }}
                                className="text-xl md:text-2xl text-accent font-medium"
                            >
                                UI Designer / Scripter
                            </motion.p>
                        </div>
                    </div>

                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ ...smoothTransition, delay: 0.3 }}
                        className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-12"
                    >
                        Only does pay upon tasks, short term developing or making an entire game.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ ...smoothTransition, delay: 0.4 }}
                    >
                        <h2 className="text-sm font-semibold tracking-widest uppercase mb-4 opacity-70">
                            Info:
                        </h2>
                        <div className="grid gap-3 sm:grid-cols-2">
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                className="border border-[var(--color-border)] bg-[var(--color-surface)]/50 backdrop-blur-sm p-5 rounded-2xl cursor-default shadow-sm"
                            >
                                <p className="font-semibold text-sm">Timezone <span className="text-muted-foreground ml-2 rounded bg-[var(--color-border)]/50 px-2 py-1">GMT+1</span></p>
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                className="border border-[var(--color-border)] bg-[var(--color-surface)]/50 backdrop-blur-sm p-5 rounded-2xl cursor-default shadow-sm"
                            >
                                <p className="font-semibold text-sm">Age <span className="text-muted-foreground ml-2 rounded bg-[var(--color-border)]/50 px-2 py-1">16 to 17</span></p>
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
