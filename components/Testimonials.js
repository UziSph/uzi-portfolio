"use client";

import { motion } from "framer-motion";

const testimonials = [
    {
        quote:
            "Uzi completely transformed our game. The builds were stunning and the scripting was flawless. Highly recommend!",
        name: "Alex R.",
        role: "Game Owner",
        avatar: "A",
    },
    {
        quote:
            "Best developer I've worked with on Roblox. Always on time, great communication, and the quality speaks for itself.",
        name: "Sarah K.",
        role: "Studio Lead",
        avatar: "S",
    },
    {
        quote:
            "The UI designs Uzi delivered were next-level. Our players immediately noticed the upgrade. Will definitely hire again.",
        name: "Marcus T.",
        role: "Creative Director",
        avatar: "M",
    },
];

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export default function Testimonials() {
    return (
        <section className="py-24 bg-surface border-y border-border">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent mb-3 bg-accent/10 px-3 py-1 rounded-full">
                        Testimonials
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                        What clients say
                    </h2>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-60px" }}
                    className="grid md:grid-cols-3 gap-6"
                >
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            variants={item}
                            className="p-6 rounded-2xl border border-border bg-white"
                        >
                            {/* Stars */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, j) => (
                                    <svg key={j} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-sm text-muted leading-relaxed mb-6">
                                &ldquo;{t.quote}&rdquo;
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="w-9 h-9 rounded-full bg-accent/10 text-accent font-bold text-sm flex items-center justify-center">
                                    {t.avatar}
                                </div>
                                <div>
                                    <p className="text-sm font-semibold">{t.name}</p>
                                    <p className="text-xs text-muted">{t.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
