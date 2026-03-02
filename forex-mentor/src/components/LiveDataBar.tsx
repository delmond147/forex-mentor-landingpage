"use client";

import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, TrendingDown } from "lucide-react";

const marketData = [
    { pair: "EUR/USD", price: "1.0854", change: "+0.12%", up: true },
    { pair: "GBP/USD", price: "1.2632", change: "-0.08%", up: false },
    { pair: "USD/JPY", price: "150.45", change: "+0.34%", up: true },
    { pair: "XAU/USD", price: "2034.10", change: "+0.55%", up: true },
    { pair: "AUD/USD", price: "0.6541", change: "-0.21%", up: false },
    { pair: "USD/CHF", price: "0.8820", change: "-0.05%", up: false },
    // Duplicate for seamless loop
    { pair: "EUR/USD", price: "1.0854", change: "+0.12%", up: true },
    { pair: "GBP/USD", price: "1.2632", change: "-0.08%", up: false },
    { pair: "USD/JPY", price: "150.45", change: "+0.34%", up: true },
    { pair: "XAU/USD", price: "2034.10", change: "+0.55%", up: true },
    { pair: "AUD/USD", price: "0.6541", change: "-0.21%", up: false },
    { pair: "USD/CHF", price: "0.8820", change: "-0.05%", up: false },
];

export const LiveDataBar = () => {
    return (
        <div className="w-full bg-white border-y border-gray-100 overflow-hidden py-3 shadow-sm relative z-20">
            <div className="relative flex max-w-[100vw] overflow-hidden">
                {/* Gradient overlays for smooth edges */}
                <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

                <motion.div
                    className="flex whitespace-nowrap min-w-full"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 20, // Adjust speed
                    }}
                >
                    {marketData.map((data, index) => (
                        <div
                            key={`${data.pair}-${index}`}
                            className="flex items-center space-x-3 px-6 md:px-10 border-r border-gray-100 last:border-none"
                        >
                            <span className="font-semibold text-brandText">{data.pair}</span>
                            <span className="text-gray-500 font-mono tracking-tight">{data.price}</span>
                            <span
                                className={`flex items-center text-sm font-bold ${data.up ? 'text-brandEmerald' : 'text-red-500'
                                    }`}
                            >
                                {data.up ? <TrendingUp size={14} className="mr-1" /> : <TrendingDown size={14} className="mr-1" />}
                                {data.change}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};
