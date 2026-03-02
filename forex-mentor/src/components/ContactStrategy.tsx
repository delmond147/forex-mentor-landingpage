"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Phone, Calendar, ArrowRight } from "lucide-react";

export const ContactStrategy = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Pseudo-submit logic
        setTimeout(() => setSubmitted(true), 800);
    };

    return (
        <>
            <section className="py-24 bg-brandDark relative">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        {/* Left: Copy */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                                Ready to Stop <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandEmerald to-emerald-300">
                                    Donating to the Market?
                                </span>
                            </h2>
                            <p className="text-brandSlate text-lg max-w-md leading-relaxed">
                                Book a free 15-minute discovery call to see if our strategies align with your trading goals. No hard selling, just pure value.
                            </p>

                            <div className="flex flex-col gap-4 pt-6">
                                <div className="flex items-center gap-4 bg-[#0F2942]/50 p-4 rounded-xl border border-brandSlate/10 w-fit">
                                    <div className="w-12 h-12 rounded-full bg-brandEmerald/20 flex items-center justify-center text-brandEmerald">
                                        <Calendar size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold">Strategy Audit</h4>
                                        <p className="text-sm text-brandSlate">15 Min Zoom Call</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 bg-[#0F2942]/50 p-4 rounded-xl border border-brandSlate/10 w-fit">
                                    <div className="w-12 h-12 rounded-full bg-brandEmerald/20 flex items-center justify-center text-brandEmerald">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold">Action Plan</h4>
                                        <p className="text-sm text-brandSlate">Custom Growth Map</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right: Form */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-[#0F2942] rounded-2xl border border-brandSlate/20 p-8 shadow-2xl relative overflow-hidden"
                        >
                            {/* Form glowing edge */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brandEmerald to-transparent opacity-50"></div>

                            <h3 className="text-2xl font-bold text-white mb-6">Book Your Call</h3>

                            {submitted ? (
                                <div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
                                    <div className="w-16 h-16 bg-brandEmerald/20 rounded-full flex items-center justify-center text-brandEmerald mb-4">
                                        <Calendar size={32} />
                                    </div>
                                    <h4 className="text-xl font-bold text-white">Application Received!</h4>
                                    <p className="text-brandSlate">Our team will be in touch strictly via email to schedule your call within 24 hours.</p>
                                </div>
                            ) : (
                                <form className="space-y-4" onSubmit={handleSubmit}>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-1">
                                            <label className="text-xs text-brandSlate font-medium">First Name</label>
                                            <input required type="text" className="w-full bg-[#0A192F] border border-brandSlate/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brandEmerald transition-colors" placeholder="John" />
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-xs text-brandSlate font-medium">Last Name</label>
                                            <input required type="text" className="w-full bg-[#0A192F] border border-brandSlate/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brandEmerald transition-colors" placeholder="Doe" />
                                        </div>
                                    </div>

                                    <div className="space-y-1">
                                        <label className="text-xs text-brandSlate font-medium">Email Address</label>
                                        <input required type="email" className="w-full bg-[#0A192F] border border-brandSlate/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brandEmerald transition-colors" placeholder="john@example.com" />
                                    </div>

                                    <div className="space-y-1">
                                        <label className="text-xs text-brandSlate font-medium">Current Trading Capital?</label>
                                        <select className="w-full bg-[#0A192F] border border-brandSlate/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brandEmerald transition-colors appearance-none">
                                            <option>&lt; $1,000</option>
                                            <option>$1K - $10K</option>
                                            <option>$10K - $100K</option>
                                            <option>Prop Firm Funded ($100K+)</option>
                                        </select>
                                    </div>

                                    <button type="submit" className="w-full mt-4 bg-brandEmerald hover:bg-emerald-400 text-brandDark font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-colors">
                                        Secure Your Spot
                                        <ArrowRight size={18} />
                                    </button>
                                </form>
                            )}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Floating WhatsApp Button */}
            <a
                href="https://wa.me/237680749528"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform hover:shadow-[0_0_20px_rgba(37,211,102,0.5)]"
                aria-label="Chat on WhatsApp"
            >
                <span className="absolute flex h-full w-full">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-40"></span>
                </span>
                <MessageCircle size={32} className="relative z-10" />
            </a>
        </>
    );
};
