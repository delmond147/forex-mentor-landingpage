"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, ShieldCheck, TrendingUp, BarChart3 } from "lucide-react";
import Link from "next/link";

export const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden w-full">
            {/* Background glowing orb effect */}
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brandEmerald/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-900/20 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                    {/* Left Column: Text & CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex flex-col space-y-6"
                    >
                        <div className="inline-flex items-center space-x-2 bg-brandSlate/10 rounded-full px-3 py-1 border border-brandSlate/20 w-fit">
                            <span className="flex h-2 w-2 rounded-full bg-brandEmerald animate-pulse"></span>
                            <span className="text-xs font-semibold text-brandEmerald tracking-wide uppercase">Institutional Trading Insights</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                            Trade Like the Banks. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandEmerald to-emerald-300">
                                Master the Markets.
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-brandSlate max-w-xl font-light leading-relaxed">
                            Stop trading retail patterns. Learn the proprietary
                            <strong className="text-white font-medium"> Institutional SMC Strategies </strong>
                            used by elite traders to consistently extract profits from the Forex market.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Link href="#pricing">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-brandEmerald hover:bg-emerald-400 text-brandDark font-bold rounded-lg transition-colors shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                                >
                                    Join the Inner Circle
                                    <ChevronRight size={20} />
                                </motion.button>
                            </Link>

                            <Link href="#results">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-transparent border border-brandSlate/30 hover:border-brandSlate/60 hover:bg-brandSlate/10 text-white font-semibold rounded-lg transition-all"
                                >
                                    View Success Stories
                                </motion.button>
                            </Link>
                        </div>

                        <div className="flex items-center gap-6 pt-6 text-sm text-brandSlate">
                            <div className="flex items-center gap-2">
                                <ShieldCheck size={16} className="text-brandEmerald" />
                                <span>Verified track record</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <TrendingUp size={16} className="text-brandEmerald" />
                                <span>90% Win Rate Setup</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Visualizer Widget */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, x: 20 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="w-full"
                    >
                        <div className="relative rounded-2xl bg-[#0F2942]/80 backdrop-blur-xl border border-brandSlate/20 p-6 shadow-2xl overflow-hidden min-h-[400px]">
                            {/* Fake TradingView Style Header */}
                            <div className="flex items-center justify-between border-b gap-4 border-brandSlate/10 pb-4 mb-6">
                                <div className="flex items-center gap-3">
                                    <div className="flex items-center gap-1 font-mono text-lg font-bold">
                                        <span className="text-white">EUR</span>
                                        <span className="text-brandSlate">/</span>
                                        <span className="text-white">USD</span>
                                    </div>
                                    <span className="px-2 py-0.5 rounded text-xs font-semibold bg-red-500/10 text-red-400">SELL</span>
                                    <span className="hidden sm:inline-block px-2 text-xs text-brandSlate">1M • FOREX-OANDA</span>
                                </div>
                                <div className="flex gap-2">
                                    <BarChart3 className="text-brandSlate" size={20} />
                                </div>
                            </div>

                            {/* Fake Chart Graphics */}
                            <div className="relative h-64 w-full flex items-end justify-between px-2 gap-1 opacity-80">
                                {/* Simulated candlesticks built with Tailwind bars */}
                                {[...Array(24)].map((_, i) => {
                                    const isUp = i % 3 !== 0 && i % 5 !== 0; // Pseudo-random distribution
                                    const height = 20 + Math.random() * 60; // 20% to 80%
                                    return (
                                        <motion.div
                                            key={i}
                                            className="relative w-full flex justify-center items-center"
                                            initial={{ height: "0%" }}
                                            animate={{ height: `${height}%` }}
                                            transition={{ duration: 1, delay: i * 0.05 }}
                                        >
                                            {/* Candlestick body */}
                                            <div className={`w-3 sm:w-4 ${isUp ? 'bg-brandEmerald' : 'bg-red-500'} rounded-sm z-10`}></div>
                                            {/* Candlestick wick */}
                                            <div className={`absolute w-0.5 h-[140%] ${isUp ? 'bg-brandEmerald' : 'bg-red-500'} top-[-20%] z-0`}></div>
                                        </motion.div>
                                    )
                                })}
                            </div>

                            {/* Fake SMC Annotation */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 1.5 }}
                                className="absolute top-1/2 left-1/3 bg-brandDark/90 border border-brandEmerald/50 px-3 py-1.5 rounded text-xs font-mono text-brandEmerald shadow-lg backdrop-blur-md"
                            >
                                Fair Value Gap (FVG)
                                <div className="absolute top-full left-1/2 w-px h-8 bg-brandEmerald/50 -translate-x-1/2"></div>
                                <div className="absolute top-[calc(100%+2rem)] left-1/2 w-4 h-4 rounded-full border border-brandEmerald text-brandEmerald bg-brandDark flex items-center justify-center -translate-x-1/2 -mt-2.5 text-[8px]">
                                    ×
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};
