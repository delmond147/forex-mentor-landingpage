"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Search, CheckCircle2 } from "lucide-react";

export const Hero = () => {
    // Floating animation variants
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const floatVariant: any = {
        animate: (i: number) => ({
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0],
            transition: {
                duration: 4 + i,
                repeat: Infinity,
                ease: "easeInOut",
            },
        }),
    };

    return (
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden w-full bg-brandLight">
            {/* Background Abstract Shapes (Aoxa style) */}
            <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-blue-50/80 blur-3xl pointer-events-none -z-10" />
            <div className="absolute bottom-[-10%] right-[-5%] w-[40vw] h-[40vw] rounded-full bg-emerald-50/80 blur-3xl pointer-events-none -z-10" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full max-w-7xl">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto">

                    {/* Trust Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center gap-2 mb-6 px-4 py-1.5 bg-white border border-gray-100 rounded-full shadow-sm"
                    >
                        <div className="flex items-center text-brandEmerald">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={14} fill="currentColor" />
                            ))}
                        </div>
                        <span className="text-xs sm:text-sm font-semibold text-brandText border-b border-brandText cursor-pointer">
                            4,893 reviews on
                        </span>
                        <div className="flex items-center gap-1 text-brandEmerald font-bold text-sm ml-1">
                            <Star size={14} fill="currentColor" /> Trustpilot
                        </div>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-brandText mb-6"
                    >
                        Master the markets<br />
                        <span className="text-brandBlue">with confidence</span>
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg md:text-xl text-brandSlate max-w-2xl mb-10"
                    >
                        Join the Inner Circle of verified, profitable traders. Learn the Institutional SMC strategies used by the top 1% — safe, reliable, and consistent.
                    </motion.p>

                    {/* Search / Action Box (Aoxa Style) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="w-full max-w-2xl bg-white p-2 rounded-2xl shadow-xl shadow-blue-900/5 border border-gray-100 flex flex-col sm:flex-row gap-2"
                    >
                        <div className="flex-1 flex items-center px-4 gap-3 bg-gray-50 rounded-xl py-3 sm:py-0">
                            <Search size={20} className="text-gray-400" />
                            <input
                                type="text"
                                placeholder="I want to learn..."
                                className="bg-transparent border-none outline-none w-full text-brandText placeholder:text-gray-400"
                                disabled
                            />
                        </div>
                        <a href="#mentorship" className="w-full sm:w-auto px-8 py-4 bg-brandBlue hover:bg-blue-600 text-white font-bold rounded-xl transition-all shadow-md shadow-blue-500/20 text-center flex-shrink-0">
                            Start Learning
                        </a>
                    </motion.div>

                    {/* Floating App Icons & Graphics */}
                    <div className="relative w-full h-64 md:h-80 lg:h-96 mt-16 pointer-events-none">

                        {/* Center Platform Graphic */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-80 md:h-80 bg-gradient-to-tr from-blue-100 to-indigo-50 rounded-[40px] rotate-3 shadow-inner border border-white/50 flex items-center justify-center overflow-hidden"
                        >
                            {/* Abstract Chart Bars inside center graphic */}
                            <div className="flex items-end gap-2 h-32 opacity-20">
                                <div className="w-8 h-12 bg-brandBlue rounded-t-sm"></div>
                                <div className="w-8 h-20 bg-brandBlue rounded-t-sm"></div>
                                <div className="w-8 h-16 bg-brandEmerald rounded-t-sm"></div>
                                <div className="w-8 h-28 bg-brandEmerald rounded-t-sm"></div>
                            </div>
                        </motion.div>

                        {/* Floating MT5 Icon */}
                        <motion.div
                            custom={1}
                            variants={floatVariant}
                            animate="animate"
                            className="absolute top-10 left-[10%] md:left-[20%] lg:left-[25%] flex flex-col items-center gap-2"
                        >
                            <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-2xl shadow-xl shadow-slate-200/50 flex items-center justify-center p-3 border border-gray-50">
                                {/* SVG mock of MT5 logo (blue interlocking circles/shield) */}
                                <div className="relative w-full h-full text-brandBlue">
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full drop-shadow-md">
                                        <path d="M12 2L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-3zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-2.33v8.02z" />
                                    </svg>
                                </div>
                            </div>
                            <span className="text-xs font-bold text-brandSlate bg-white/80 px-2 py-1 rounded-md backdrop-blur-sm border shadow-sm">MetaTrader 5</span>
                        </motion.div>

                        {/* Floating FTMO Icon */}
                        <motion.div
                            custom={2}
                            variants={floatVariant}
                            animate="animate"
                            className="absolute top-0 right-[5%] md:right-[15%] lg:right-[20%] flex flex-col items-center gap-2"
                        >
                            <div className="w-20 h-20 md:w-24 md:h-24 bg-brandText rounded-3xl shadow-2xl shadow-slate-900/20 flex items-center justify-center p-4 border border-gray-800 rotate-12">
                                <div className="text-white font-black text-xl tracking-tighter italic">FTMO</div>
                            </div>
                            <span className="text-xs font-bold text-brandSlate bg-white/80 px-2 py-1 rounded-md backdrop-blur-sm border shadow-sm mt-3">Prop Firms</span>
                        </motion.div>

                        {/* Floating Exness Icon */}
                        <motion.div
                            custom={3}
                            variants={floatVariant}
                            animate="animate"
                            className="absolute bottom-10 left-[5%] md:left-[15%] lg:left-[22%] flex flex-col items-center gap-2"
                        >
                            <div className="w-14 h-14 md:w-16 md:h-16 bg-[#FFEB3B] rounded-full shadow-lg shadow-yellow-500/20 flex items-center justify-center p-2 border-4 border-white -rotate-12">
                                <span className="font-extrabold text-brandText text-lg -tracking-widest">ex</span>
                            </div>
                            <span className="text-xs font-bold text-brandSlate bg-white/80 px-2 py-1 rounded-md backdrop-blur-sm border shadow-sm">Exness</span>
                        </motion.div>

                        {/* Floating Success Badge */}
                        <motion.div
                            custom={0.5}
                            variants={floatVariant}
                            animate="animate"
                            className="absolute bottom-0 right-[15%] md:right-[25%] lg:right-[30%]"
                        >
                            <div className="flex items-center gap-3 bg-white px-5 py-3 rounded-full shadow-xl shadow-emerald-500/10 border border-emerald-50">
                                <CheckCircle2 className="text-brandEmerald" size={24} />
                                <div className="flex flex-col text-left">
                                    <span className="text-brandText font-bold text-sm leading-tight">Verified</span>
                                    <span className="text-gray-400 text-xs">Payouts</span>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
};
