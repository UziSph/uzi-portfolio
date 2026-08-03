"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
    {
        q: "How fast is the completion of the task?",
        a: "Depends on quality and size of the task. Most tasks can be made in 3 to 4 hours.",
    },
    {
        q: "How will the UI be made?",
        a: "The UI will be made combined with what you want in it and there will be progression reports during it's making.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

    return (
        <section id="faq" className="py-16">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-8"
                >
                    <h2 className="text-xl font-bold tracking-tight border-b border-[var(--color-border)] pb-4">
                        Questions and Answers:
                    </h2>
                </motion.div>

                <div className="grid gap-3">
                    {faqs.map((faq, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.1 }}
                            className="border border-[var(--color-border)] bg-[var(--color-surface)] rounded-xl overflow-hidden"
                        >
                            <button
                                onClick={() => toggle(i)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-[var(--color-border)]/20 transition-colors"
                            >
                                <span className="font-semibold text-base pr-4">{faq.q}</span>
                                <span className="text-xl leading-none font-light text-muted-foreground w-6 text-center">
                                    {openIndex === i ? "−" : "+"}
                                </span>
                            </button>
                            <AnimatePresence initial={false}>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                        className="overflow-hidden"
                                    >
                                        <p className="px-6 pb-6 text-sm text-muted-foreground leading-relaxed pt-2 border-t border-[var(--color-border)]/50 mx-6 mix-blend-normal">
                                            {faq.a}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
