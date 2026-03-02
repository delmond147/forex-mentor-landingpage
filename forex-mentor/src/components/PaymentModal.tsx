"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CreditCard, Bitcoin, Smartphone } from "lucide-react";

interface PaymentOption {
    id: string;
    name: string;
    icon: React.ReactNode;
    description: string;
    link: string;
    color: string;
}

interface PaymentModalProps {
    isOpen: boolean;
    onClose: () => void;
    tierName: string;
    tierPrice: string;
}

export const PaymentModal = ({ isOpen, onClose, tierName, tierPrice }: PaymentModalProps) => {
    // Prevent scrolling when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    const paymentOptions: PaymentOption[] = [
        {
            id: "mobile-money",
            name: "Direct Mobile Money",
            icon: <Smartphone size={24} />,
            description: "Pay directly via MTN MoMo or Orange Money (Cameroon)",
            link: "https://wa.me/237680749528?text=Hello%20Kelly,%20I%20want%20to%20pay%20for%20the%20" + encodeURIComponent(tierName) + "%20via%20Mobile%20Money.",
            color: "bg-orange-500/10 text-orange-400 border-orange-500/30 hover:bg-orange-500/20",
        },
        {
            id: "dusupay",
            name: "DusuPay (Cards & Global MoMo)",
            icon: <CreditCard size={24} />,
            description: "Accepts Visa, Mastercard, and pan-African Mobile Money",
            link: "https://dusupay.com/pay/your-link-here", // REPLACE with actual DusuPay link for this tier
            color: "bg-blue-500/10 text-blue-400 border-blue-500/30 hover:bg-blue-500/20",
        },
        {
            id: "nowpayments",
            name: "NOWPayments (Crypto)",
            icon: <Bitcoin size={24} />,
            description: "Pay securely using USDT, BTC, ETH, and other cryptocurrencies",
            link: "https://nowpayments.io/pay/your-link-here", // REPLACE with actual NOWPayments link for this tier
            color: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30 hover:bg-emerald-500/20",
        }
    ];

    return (
        <AnimatePresence>
            {isOpen && (
                <React.Fragment>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-50 bg-brandDark/80 backdrop-blur-sm"
                    />

                    {/* Modal Container */}
                    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="bg-[#0F2942] border border-brandSlate/20 shadow-2xl rounded-2xl w-full max-w-lg overflow-hidden pointer-events-auto relative"
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between p-6 border-b border-brandSlate/10">
                                <div>
                                    <h3 className="text-xl font-bold text-white">Select Payment Method</h3>
                                    <p className="text-sm text-brandSlate mt-1">
                                        Completing enrollment for <strong className="text-white">{tierName}</strong> ({tierPrice})
                                    </p>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="w-8 h-8 rounded-full bg-brandSlate/10 hover:bg-brandSlate/20 flex items-center justify-center text-brandSlate hover:text-white transition-colors"
                                >
                                    <X size={18} />
                                </button>
                            </div>

                            {/* Body */}
                            <div className="p-6 space-y-4">
                                {paymentOptions.map((option) => (
                                    <a
                                        key={option.id}
                                        href={option.link}
                                        target={option.id === "mobile-money" ? "_blank" : "_self"}
                                        rel="noopener noreferrer"
                                        className={`flex items-center gap-4 p-4 rounded-xl border transition-all ${option.color} group`}
                                    >
                                        <div className="w-12 h-12 rounded-full bg-current/10 flex items-center justify-center">
                                            {option.icon}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white">{option.name}</h4>
                                            <p className="text-xs sm:text-sm text-brandSlate mt-0.5">{option.description}</p>
                                        </div>
                                    </a>
                                ))}
                            </div>

                            {/* Footer Note */}
                            <div className="p-4 bg-brandDark/50 border-t border-brandSlate/10 text-center">
                                <p className="text-xs text-brandSlate/60">
                                    Payments are secure and encrypted. Direct Mobile Money option will route you to WhatsApp to finalize the manual transfer with our team.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </React.Fragment>
            )}
        </AnimatePresence>
    );
};
