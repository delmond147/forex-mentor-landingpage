"use client";

import React, { useState, useEffect } from "react";
import { Send, Bell, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

type Signal = {
    pair: string;
    action: "BUY" | "SELL";
    entry: string;
    tp: string;
    sl: string;
    time: string;
    isProfitable: boolean;
};

export default function TelegramWebhookPreview() {
    const [signal, setSignal] = useState<Signal | null>(null);
    const [loading, setLoading] = useState(true);

    // In a real scenario, this would fetch from /api/telegram/latest
    useEffect(() => {
        const fetchLatestSignal = () => {
            // Simulating a webhook / api call delay
            setTimeout(() => {
                setSignal({
                    pair: "XAU/USD",
                    action: "BUY",
                    entry: "2035.50",
                    tp: "2045.00",
                    sl: "2025.00",
                    time: "10 mins ago",
                    isProfitable: true,
                });
                setLoading(false);
            }, 2000);
        };

        fetchLatestSignal();
    }, []);

    return (
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-900/20 to-slate-900/80 p-6 shadow-2xl backdrop-blur-xl border border-blue-500/20 flex flex-col h-full">
            <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-blue-500/20 rounded-xl text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                        <Send size={20} />
                    </div>
                    <div>
                        <h2 className="text-lg font-bold text-white flex items-center gap-2">
                            Latest Telegram Signal
                            <span className="flex h-2 w-2 relative">
                                <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                            </span>
                        </h2>
                        <p className="text-xs text-blue-200/60">Live feed from VIP Room</p>
                    </div>
                </div>
                <button className="text-slate-400 hover:text-white transition-colors p-1" title="Join Telegram">
                    <ExternalLink size={18} />
                </button>
            </div>

            <div className="flex-1 flex flex-col justify-center">
                {loading ? (
                    <div className="animate-pulse space-y-4">
                        <div className="h-10 bg-slate-800/50 rounded-lg w-full"></div>
                        <div className="grid grid-cols-3 gap-2">
                            <div className="h-16 bg-slate-800/50 rounded-lg"></div>
                            <div className="h-16 bg-slate-800/50 rounded-lg"></div>
                            <div className="h-16 bg-slate-800/50 rounded-lg"></div>
                        </div>
                    </div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-slate-900/50 rounded-xl p-4 border border-slate-700 space-y-4"
                    >
                        <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                            <div className="flex items-center gap-3">
                                <span className={`px-2.5 py-1 rounded text-xs font-bold tracking-wide ${signal?.action === 'BUY' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-red-500/20 text-red-400'}`}>
                                    {signal?.action}
                                </span>
                                <span className="font-bold text-white text-xl">{signal?.pair}</span>
                            </div>
                            <span className="text-xs text-slate-400 flex items-center gap-1 bg-slate-800/80 px-2 py-1 rounded-md">
                                <Bell size={12} /> {signal?.time}
                            </span>
                        </div>

                        <div className="grid grid-cols-3 gap-3 text-sm text-center">
                            <div className="bg-slate-800/80 rounded-lg p-2.5 border border-slate-700">
                                <div className="text-[10px] text-slate-400 uppercase tracking-wider mb-1 font-semibold">Entry</div>
                                <div className="text-white font-bold">{signal?.entry}</div>
                            </div>
                            <div className="bg-emerald-900/20 rounded-lg p-2.5 border border-emerald-500/20 shadow-[inset_0_0_15px_rgba(16,185,129,0.05)]">
                                <div className="text-[10px] text-emerald-500/80 uppercase tracking-wider mb-1 font-semibold">Take Profit</div>
                                <div className="text-emerald-400 font-bold">{signal?.tp}</div>
                            </div>
                            <div className="bg-red-900/20 rounded-lg p-2.5 border border-red-500/20 shadow-[inset_0_0_15px_rgba(239,68,68,0.05)]">
                                <div className="text-[10px] text-red-500/80 uppercase tracking-wider mb-1 font-semibold">Stop Loss</div>
                                <div className="text-red-400 font-bold">{signal?.sl}</div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </div>

            <div className="mt-5 text-center border-t border-slate-800/50 pt-4">
                <a href="#join" className="text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors flex items-center justify-center gap-2">
                    Unlock 5+ signals daily in VIP <span className="text-lg">→</span>
                </a>
            </div>
        </div>
    );
}
