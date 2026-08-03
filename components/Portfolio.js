"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const images = [
    "SN.png",
    "TF.png",
    "gffgf.png",
    "set.png",
    "zez.png",
];

export default function Portfolio() {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <section id="portfolio" className="py-16">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-8"
                >
                    <h2 className="text-xl font-bold tracking-tight border-b border-[var(--color-border)] pb-4">
                        Past Work
                    </h2>
                </motion.div>

                <div className="grid sm:grid-cols-2 gap-4">
                    {images.map((img, i) => (
                        <motion.div
                            key={img}
                            onClick={() => setSelectedImage(img)}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="group relative rounded-xl overflow-hidden border border-[var(--color-border)] bg-[var(--color-surface)] aspect-video cursor-zoom-in shadow-sm hover:shadow-md transition-shadow"
                        >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={`/img/${img}`}
                                alt={`Portfolio piece ${i + 1}`}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 sm:p-8 cursor-zoom-out backdrop-blur-sm"
                    >
                        <motion.button
                            className="absolute top-6 right-6 p-2 text-white/70 hover:text-white bg-black/50 rounded-full hover:bg-black/80 transition-colors z-50"
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedImage(null);
                            }}
                        >
                            <X size={24} />
                        </motion.button>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.85 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 400, damping: 25 }}
                            className="relative max-w-7xl max-h-[90vh] w-full rounded-lg overflow-hidden flex items-center justify-center cursor-default shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={`/img/${selectedImage}`}
                                alt="Enlarged portfolio piece"
                                className="w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
