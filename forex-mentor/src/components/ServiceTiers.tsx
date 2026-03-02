"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { PaymentModal } from "./PaymentModal";

const tiers = [
    {
        name: "Basic Course",
        price: "$100",
        description: "Master the fundamentals of Institutional trading.",
        features: [
            "Access to Video Library (50+ Hours)",
            "Basic Market Structure & Liquidity",
            "PDF Workbooks & Trading Plan",
            "Private Discord Access (General)"
        ],
        buttonText: "Start Learning",
        popular: false,
        imgColor: "bg-blue-100",
    },
    {
        name: "Pro Mentorship",
        price: "$300",
        description: "Advanced SMC concepts and daily trade breakdowns.",
        features: [
            "Everything in Basic Course",
            "Daily Market Markups (London/NY)",
            "Weekly Live Q&A Calls",
            "Prop Firm Passing Strategy",
            "VIP Discord Access"
        ],
        buttonText: "Join Pro Group",
        popular: true,
        imgColor: "bg-indigo-100",
    },
    {
        name: "Elite 1-on-1",
        price: "$699",
        description: "Direct mentorship to build your institutional edge.",
        features: [
            "Everything in Pro Mentorship",
            "Bi-Weekly 1-on-1 Zoom Calls",
            "Custom Trading Plan Review",
            "Direct WhatsApp Access (24/7)",
            "Live Trading Sessions together"
        ],
        buttonText: "Apply for Elite",
        popular: false,
        imgColor: "bg-emerald-100",
    },
];

export const ServiceTiers = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTier, setSelectedTier] = useState({ name: "", price: "" });

    const handleSelectTier = (name: string, price: string) => {
        setSelectedTier({ name, price });
        setIsModalOpen(true);
    };

    return (
        <>
            <section id="mentorship" className="py-24 bg-brandLight relative overflow-hidden">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">

                    <div className="mb-12">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-extrabold text-brandText mb-4 tracking-tight"
                        >
                            Mentorship Programs
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-brandSlate text-lg max-w-2xl"
                        >
                            Find trusted local experts just around the corner, ready to scale you from retail to institutional consistency.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {tiers.map((tier, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15, duration: 0.5 }}
                                whileHover={{ y: -5 }}
                                className={`relative rounded-3xl bg-white shadow-xl shadow-slate-200/50 flex flex-col overflow-hidden border border-gray-100 ${tier.popular ? 'ring-2 ring-brandBlue ring-offset-4 ring-offset-white' : ''
                                    }`}
                            >
                                {/* Decorative "Image" Header mimicking the reference image style */}
                                <div className={`h-40 w-full ${tier.imgColor} rounded-t-3xl p-6 relative overflow-hidden`}>
                                    {tier.popular && (
                                        <div className="absolute top-4 right-4 bg-white text-brandText px-3 py-1 rounded-full text-xs font-bold shadow-sm flex items-center gap-1 z-10">
                                            <Star size={12} className="text-brandBlue fill-brandBlue" /> Best Value
                                        </div>
                                    )}
                                    {/* Abstract background shapes inside the card header */}
                                    <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/20 rounded-full blur-xl"></div>
                                    <div className="absolute top-4 -left-4 w-20 h-20 bg-white/30 rounded-full blur-lg"></div>
                                </div>

                                <div className="p-6 flex-grow flex flex-col">
                                    <h3 className="text-xl font-bold text-brandText mb-1">{tier.name}</h3>
                                    <p className="text-brandSlate text-sm mb-6 h-10 line-clamp-2">{tier.description}</p>

                                    <div className="flex items-end gap-1 mb-6">
                                        <span className="text-sm font-semibold text-brandSlate mb-1">starting at</span>
                                        <span className="text-3xl font-extrabold text-brandBlue tracking-tight">{tier.price}</span>
                                    </div>

                                    <div className="flex-grow">
                                        <ul className="space-y-3 mb-8">
                                            {tier.features.map((feature, i) => (
                                                <li key={i} className="flex items-start gap-2 text-brandText text-sm font-medium">
                                                    <div className="mt-0.5 min-w-4 flex items-center justify-center">
                                                        <Check size={14} className="text-brandBlue" />
                                                    </div>
                                                    <span className="leading-snug">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <button
                                        onClick={() => handleSelectTier(tier.name, tier.price)}
                                        className={`w-full py-3.5 px-4 rounded-xl font-bold transition-all text-center block shadow-sm ${tier.popular
                                            ? "bg-brandBlue hover:bg-blue-600 text-white shadow-blue-500/20"
                                            : "bg-blue-50 hover:bg-blue-100 text-brandBlue"
                                            }`}>
                                        {tier.buttonText}
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <PaymentModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                tierName={selectedTier.name}
                tierPrice={selectedTier.price}
            />
        </>
    );
};
