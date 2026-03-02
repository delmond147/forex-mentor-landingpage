"use client";

import React from "react";
import { motion } from "framer-motion";
import { Youtube, Instagram, Play } from "lucide-react";

// TikTok icon is not in lucide-react standard set easily recognizable,
// using a custom SVG for Tiktok
const TikTokIcon = ({ className, size = 24 }: { className?: string, size?: number }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
);

export const SocialConnect = () => {
    return (
        <section id="results" className="py-24 bg-[#0A192F] relative border-t border-brandSlate/10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-white mb-6"
                    >
                        Verified Success Stories
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-brandSlate text-lg"
                    >
                        Join thousands of traders consistently pulling profits from the market. Watch the weekly breakdowns and student interviews.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Main YouTube/Video Feature */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-2 rounded-2xl border border-brandSlate/20 overflow-hidden bg-[#0F2942]/60 group relative aspect-video"
                    >
                        {/* Dark Overlay with Play Button */}
                        <div className="absolute inset-0 bg-brandDark/50 group-hover:bg-brandDark/30 transition-all flex items-center justify-center z-10 cursor-pointer">
                            <div className="w-20 h-20 rounded-full bg-brandEmerald/20 backdrop-blur border border-brandEmerald border-opacity-50 flex items-center justify-center text-brandEmerald group-hover:scale-110 group-hover:bg-brandEmerald group-hover:text-brandDark transition-all duration-300">
                                <Play fill="currentColor" size={32} className="ml-2" />
                            </div>
                        </div>

                        {/* Fake Video Thumbnail Graphic */}
                        <div className="w-full h-full bg-slate-800 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

                        {/* Title Overlay */}
                        <div className="absolute top-0 left-0 w-full p-6 bg-gradient-to-b from-brandDark/80 to-transparent z-10 pointer-events-none">
                            <h3 className="text-xl font-bold text-white">How My Student Past $100K FTMO in 3 Days (SMC Breakdown)</h3>
                            <p className="text-brandSlate text-sm flex items-center gap-2 mt-2">
                                <Youtube size={16} className="text-red-500" /> YouTube • 45K Views
                            </p>
                        </div>
                    </motion.div>

                    {/* Side Social Cards */}
                    <div className="flex flex-col gap-8 h-full">
                        <motion.a
                            href="https://instagram.com"
                            target="_blank"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.02 }}
                            className="flex-1 rounded-2xl border border-brandSlate/20 bg-gradient-to-br from-[#0F2942]/80 to-[#0A192F] p-8 flex flex-col justify-between group"
                        >
                            <div className="flex justify-between items-start">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 flex items-center justify-center text-white">
                                    <Instagram size={24} />
                                </div>
                                <div className="bg-white/10 px-3 py-1 rounded-full text-xs font-medium text-white">
                                    Follow
                                </div>
                            </div>
                            <div>
                                <h4 className="text-2xl font-bold text-white">125K+</h4>
                                <p className="text-brandSlate">Instagram Followers</p>
                                <p className="text-sm text-brandSlate/80 mt-2 line-clamp-2">Daily trade setups, lifestyle motivation, and live Q&A sessions.</p>
                            </div>
                        </motion.a>

                        <motion.a
                            href="https://tiktok.com"
                            target="_blank"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            whileHover={{ scale: 1.02 }}
                            className="flex-1 rounded-2xl border border-brandSlate/20 bg-gradient-to-br from-[#0F2942]/80 to-[#0A192F] p-8 flex flex-col justify-between group"
                        >
                            <div className="flex justify-between items-start">
                                <div className="w-12 h-12 rounded-full bg-black border border-brandSlate/30 flex items-center justify-center text-white shadow-[2px_2px_0px_0px_#25F4EE,-2px_-2px_0px_0px_#FE2C55]">
                                    <TikTokIcon size={24} />
                                </div>
                                <div className="bg-white/10 px-3 py-1 rounded-full text-xs font-medium text-white">
                                    Follow
                                </div>
                            </div>
                            <div>
                                <h4 className="text-2xl font-bold text-white">250K+</h4>
                                <p className="text-brandSlate">TikTok community</p>
                                <p className="text-sm text-brandSlate/80 mt-2 line-clamp-2">Short-form SMC concepts, rapid-fire chart breakdowns.</p>
                            </div>
                        </motion.a>
                    </div>

                </div>
            </div>
        </section>
    );
};
