"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";

const links = [
    { href: "#portfolio", label: "Work" },
    { href: "#experience", label: "Experience" },
    { href: "#pricing", label: "Pricing" },
    { href: "#faq", label: "FAQ" },
    { href: "#socials", label: "Contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${scrolled
                ? "bg-[var(--color-surface)]/80 backdrop-blur-xl border-b border-[var(--color-border)] shadow-[0_4px_30px_rgba(0,0,0,0.03)]"
                : "bg-transparent py-2"
                }`}
        >
            <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
                {/* Logo */}
                <motion.a
                    href="#"
                    className="flex flex-shrink-0 items-center gap-3 overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >

                    <span className="text-xl font-bold tracking-tight hidden sm:block">
                        Uzi
                    </span>
                </motion.a>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-6">
                    {links.map((l) => (
                        <motion.a
                            key={l.href}
                            href={l.href}
                            whileHover={{ y: -2 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            className="text-sm font-medium opacity-70 hover:opacity-100 transition-opacity"
                        >
                            {l.label}
                        </motion.a>
                    ))}

                    {mounted && (
                        <motion.button
                            whileHover={{ scale: 1.1, rotate: 15 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            className="ml-4 p-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] hover:bg-[var(--color-border)]/50 transition-colors shadow-sm"
                            aria-label="Toggle theme"
                        >
                            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
                        </motion.button>
                    )}
                </div>

                {/* Mobile toggle */}
                <div className="md:hidden flex items-center gap-4">
                    {mounted && (
                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            className="p-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] shadow-sm"
                        >
                            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
                        </motion.button>
                    )}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="p-1"
                    >
                        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="md:hidden bg-[var(--color-surface)]/95 backdrop-blur-xl border-b border-[var(--color-border)] overflow-hidden"
                    >
                        <div className="px-6 py-4 flex flex-col gap-4">
                            {links.map((l) => (
                                <a
                                    key={l.href}
                                    href={l.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="font-medium opacity-70 hover:opacity-100 transition-opacity py-2 border-b border-[var(--color-border)]/50"
                                >
                                    {l.label}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
