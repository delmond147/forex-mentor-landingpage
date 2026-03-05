"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LiveStatusIndicator() {
    const [isVisible, setIsVisible] = useState(false);

    // Simulate it sliding in after a short delay
    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 1500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 50, x: 20 }}
                    animate={{ opacity: 1, y: 0, x: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-slate-900/90 backdrop-blur-md border border-slate-700 p-3 rounded-full shadow-2xl cursor-pointer hover:bg-slate-800 transition-colors"
                >
                    <div className="relative flex h-3 w-3 items-center justify-center">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </div>

                    <div className="flex flex-col pr-2">
                        <span className="text-xs text-slate-400 font-medium leading-tight">Mentor Status</span>
                        <span className="text-sm text-white font-bold leading-tight flex items-center gap-1">
                            Active / In a Trade
                        </span>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
