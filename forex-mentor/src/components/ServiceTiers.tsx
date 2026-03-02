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
        paymentLink: "https://dusupay.com/pay/your-link-here", // REPLACE with your DusuPay or Campay link
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
        paymentLink: "https://dusupay.com/pay/your-link-here", // REPLACE with your DusuPay or Campay link
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
        paymentLink: "https://dusupay.com/pay/your-link-here", // REPLACE with your DusuPay or Campay link
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
            <section id="mentorship" className="py-24 bg-brandDark relative overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brandSlate/20 to-transparent"></div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-bold text-white mb-6"
                        >
                            Mentorship Programs
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-brandSlate text-lg"
                        >
                            Choose the path that fits your current trading journey. Scale from retail to institutional consistency.
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
                                whileHover={{ scale: 1.05 }}
                                className={`relative rounded-2xl border ${tier.popular
                                    ? "border-brandEmerald bg-[#0F2942]/90 shadow-[0_0_30px_rgba(16,185,129,0.15)]"
                                    : "border-brandSlate/20 bg-[#0F2942]/40"
                                    } p-8 backdrop-blur-xl flex flex-col`}
                            >
                                {tier.popular && (
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brandEmerald text-brandDark px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                                        <Star size={14} fill="currentColor" />
                                        Most Popular
                                    </div>
                                )}

                                <div className="mb-8">
                                    <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                                    <div className="text-4xl font-extrabold text-white mb-4">{tier.price}</div>
                                    <p className="text-brandSlate text-sm h-10">{tier.description}</p>
                                </div>

                                <div className="flex-grow">
                                    <ul className="space-y-4 mb-8">
                                        {tier.features.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-3 text-brandSlate text-sm">
                                                <div className="mt-0.5 min-w-4 flex items-center justify-center">
                                                    <Check size={16} className="text-brandEmerald" />
                                                </div>
                                                <span className="leading-tight">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <button
                                    onClick={() => handleSelectTier(tier.name, tier.price)}
                                    className={`w-full py-3 px-4 rounded-lg font-bold transition-all text-center block ${tier.popular
                                        ? "bg-brandEmerald hover:bg-emerald-400 text-brandDark"
                                        : "bg-brandSlate/10 hover:bg-brandSlate/20 text-white border border-brandSlate/20"
                                        }`}>
                                    {tier.buttonText}
                                </button>
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
