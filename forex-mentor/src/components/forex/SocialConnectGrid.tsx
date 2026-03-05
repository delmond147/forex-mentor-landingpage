"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, Send, Youtube, Instagram } from "lucide-react";

export default function SocialConnectGrid() {
    const handleWhatsAppClick = () => {
        // Replace with actual phone number later
        const phoneNumber = "1234567890";
        const message = "Hi, I am interested in your Forex Mentorship.";
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    };

    const cards = [
        {
            id: "telegram",
            title: "Telegram Signal Room",
            subtitle: "Join the VIP Channel",
            icon: <Send size={28} className="text-blue-400" />,
            bg: "bg-blue-500/10 hover:bg-blue-500/20",
            border: "border-blue-500/20 hover:border-blue-500/40",
            glow: "group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]",
            action: () => window.open("https://t.me/yourchannel", "_blank"),
        },
        {
            id: "whatsapp",
            title: "Direct Access",
            subtitle: "Chat with the Mentor",
            icon: <MessageCircle size={28} className="text-emerald-400" />,
            bg: "bg-emerald-500/10 hover:bg-emerald-500/20",
            border: "border-emerald-500/20 hover:border-emerald-500/40",
            glow: "group-hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]",
            action: handleWhatsAppClick,
        },
        {
            id: "youtube",
            title: "Free Strategies",
            subtitle: "Watch Market Breakdowns",
            icon: <Youtube size={28} className="text-red-400" />,
            bg: "bg-red-500/10 hover:bg-red-500/20",
            border: "border-red-500/20 hover:border-red-500/40",
            glow: "group-hover:shadow-[0_0_30px_rgba(239,68,68,0.3)]",
            action: () => window.open("https://youtube.com/c/yourchannel", "_blank"),
        },
        {
            id: "instagram",
            title: "Daily Updates",
            subtitle: "Behind the Scenes",
            icon: <Instagram size={28} className="text-pink-400" />,
            bg: "bg-pink-500/10 hover:bg-pink-500/20",
            border: "border-pink-500/20 hover:border-pink-500/40",
            glow: "group-hover:shadow-[0_0_30px_rgba(236,72,153,0.3)]",
            action: () => window.open("https://instagram.com/yourprofile", "_blank"),
        },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full">
            {cards.map((card) => (
                <motion.div
                    key={card.id}
                    whileHover={{ scale: 1.03, y: -5 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={card.action}
                    className={`group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 ${card.bg} border ${card.border} backdrop-blur-sm p-6 flex flex-col items-center justify-center text-center h-full min-h-[160px] ${card.glow}`}
                >
                    {/* Subtle noise texture or gradient could go here */}
                    <div className="mb-4 p-4 rounded-full bg-slate-900/50 relative">
                        <div className="absolute inset-0 rounded-full blur-md opacity-50 group-hover:opacity-100 transition-opacity bg-current"></div>
                        <div className="relative z-10">{card.icon}</div>
                    </div>
                    <h3 className="font-bold text-white mb-1 group-hover:text-white transition-colors">{card.title}</h3>
                    <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">{card.subtitle}</p>
                </motion.div>
            ))}
        </div>
    );
}
