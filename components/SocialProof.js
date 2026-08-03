"use client";

import { motion } from "framer-motion";

const logos = [
    "Game Studio Alpha",
    "PixelForge",
    "BlockCraft Co.",
    "NovaPlay",
    "AstroGames",
];

export default function SocialProof() {
    return (
        <section className="py-12 border-y border-border bg-surface">
            <div className="max-w-6xl mx-auto px-6">
                <p className="text-xs text-center text-muted-foreground font-medium tracking-widest uppercase mb-6">
                    Trusted by creators & studios
                </p>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-wrap items-center justify-center gap-8 md:gap-14"
                >
                    {logos.map((name, i) => (
                        <span
                            key={i}
                            className="text-sm font-semibold text-muted-foreground/60 tracking-wide"
                        >
                            {name}
                        </span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
