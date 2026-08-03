"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const DISCORD_USER_ID = "983332378246250507";

export default function Socials() {
    const [discordData, setDiscordData] = useState(null);

    useEffect(() => {
        fetch(`https://api.lanyard.rest/v1/users/${DISCORD_USER_ID}`)
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    setDiscordData(data.data);
                }
            })
            .catch((err) => console.error("Error fetching Discord status", err));
    }, []);

    const getStatusColor = (status) => {
        switch (status) {
            case "online": return "bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]";
            case "idle": return "bg-yellow-500 shadow-[0_0_8px_rgba(234,179,8,0.6)]";
            case "dnd": return "bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.6)]";
            default: return "bg-gray-500";
        }
    };

    const getStatusPulse = (status) => {
        return (status === "online" || status === "idle") ? "animate-pulse" : "";
    };

    const activity = discordData?.activities?.find(a => a.type === 0);
    const customStatus = discordData?.activities?.find(a => a.id === "custom");

    return (
        <section id="socials" className="py-24 pb-32">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-8"
                >
                    <h2 className="text-xl font-bold tracking-tight border-b border-[var(--color-border)] pb-4">
                        Socials:
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                    <a
                        href={`https://discord.com/users/${DISCORD_USER_ID}`}
                        target="_blank"
                        rel="noreferrer"
                        className="flex flex-col sm:flex-row items-start sm:items-center gap-5 p-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/50 backdrop-blur-sm hover:bg-[var(--color-surface)] hover:shadow-xl transition-all duration-300 group"
                    >
                        {/* Avatar block */}
                        <div className="relative shrink-0">
                            <div className="w-16 h-16 rounded-2xl bg-[#5865F2] flex items-center justify-center flex-shrink-0 text-white shadow-lg overflow-hidden border border-[var(--color-border)]">
                                {discordData?.discord_user?.avatar ? (
                                    // eslint-disable-next-line @next/next/no-img-element
                                    <img
                                        src={`https://cdn.discordapp.com/avatars/${DISCORD_USER_ID}/${discordData.discord_user.avatar}.png?size=128`}
                                        alt="Discord Avatar"
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03z" />
                                    </svg>
                                )}
                            </div>
                            {/* Online status indicator */}
                            <div className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-4 border-[var(--color-surface)] ${getStatusColor(discordData?.discord_status)} transition-colors duration-500`} />
                            <div className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full ${getStatusColor(discordData?.discord_status)} ${getStatusPulse(discordData?.discord_status)} opacity-50 z-[-1] pointer-events-none`} />
                        </div>

                        {/* User Details */}
                        <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-lg mb-1 group-hover:text-[#5865F2] transition-colors leading-none flex items-center gap-2">
                                Discord
                                {discordData?.discord_user?.username && (
                                    <span className="text-sm font-normal text-muted-foreground bg-[var(--color-border)]/50 px-2 py-0.5 rounded ml-2">
                                        @{discordData.discord_user.username}
                                    </span>
                                )}
                            </h3>

                            {customStatus?.state && (
                                <p className="text-sm text-[var(--color-foreground)] mt-2 flex items-center gap-1">
                                    {customStatus.emoji?.name && <span>{customStatus.emoji.name}</span>}
                                    {customStatus.state}
                                </p>
                            )}

                            {/* Rich Presence Activity */}
                            {activity && (
                                <div className="mt-3 flex items-start gap-3 bg-[var(--color-background)] rounded-lg p-3 border border-[var(--color-border)] overflow-hidden">
                                    {activity.assets?.large_image && (
                                        // eslint-disable-next-line @next/next/no-img-element
                                        <img
                                            src={`https://cdn.discordapp.com/app-assets/${activity.application_id}/${activity.assets.large_image}.png`}
                                            alt="Activity Asset"
                                            className="w-12 h-12 rounded-lg object-cover shrink-0"
                                        />
                                    )}
                                    <div className="min-w-0 flex-1">
                                        <p className="text-xs font-semibold text-[#5865F2] uppercase tracking-wider mb-1">Playing a game</p>
                                        <p className="text-sm font-medium text-[var(--color-foreground)] truncate">{activity.name}</p>
                                        {activity.details && <p className="text-xs text-muted-foreground truncate leading-tight mt-0.5">{activity.details}</p>}
                                        {activity.state && <p className="text-xs text-muted-foreground truncate leading-tight mt-0.5">{activity.state}</p>}
                                    </div>
                                </div>
                            )}

                            {!activity && !customStatus && (
                                <p className="text-sm text-muted-foreground mt-1">Available for work. Click to add.</p>
                            )}
                        </div>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
