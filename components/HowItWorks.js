"use client";

import { motion } from "framer-motion";

const steps = [
    {
        num: "01",
        title: "Share Your Vision",
        desc: "Tell me about your project — the concept, style, features, and timeline you have in mind.",
    },
    {
        num: "02",
        title: "I Build It",
        desc: "I get to work with regular progress updates, screenshots, and feedback checkpoints along the way.",
    },
    {
        num: "03",
        title: "Launch & Enjoy",
        desc: "Once reviewed and polished, your Roblox experience is ready to go live and wow players.",
    },
];

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export default function HowItWorks() {
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
                        Process
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                        How it works
                    </h2>
                    <p className="text-muted max-w-lg mx-auto">
                        Three simple steps from idea to a polished Roblox experience.
                    </p>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-60px" }}
                    className="grid md:grid-cols-3 gap-8"
                >
                    {steps.map((s, i) => (
                        <motion.div key={i} variants={item} className="relative text-center md:text-left">
                            <span className="text-5xl font-extrabold text-accent/10 mb-2 block">
                                {s.num}
                            </span>
                            <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                            <p className="text-sm text-muted leading-relaxed">{s.desc}</p>
                            {i < steps.length - 1 && (
                                <div className="hidden md:block absolute top-8 right-0 translate-x-1/2 w-8 text-border">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                    </svg>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
