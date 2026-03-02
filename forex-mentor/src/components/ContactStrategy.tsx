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
            <section className="py-24 bg-white relative border-t border-gray-100">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        {/* Left: Copy */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <h2 className="text-4xl md:text-5xl font-extrabold text-brandText leading-tight tracking-tight">
                                Ready to Stop <br />
                                <span className="text-brandBlue">
                                    Donating to the Market?
                                </span>
                            </h2>
                            <p className="text-brandSlate text-lg max-w-md leading-relaxed">
                                Book a free 15-minute discovery call to see if our strategies align with your trading goals. No hard selling, just pure value.
                            </p>

                            <div className="flex flex-col gap-4 pt-6">
                                <div className="flex items-center gap-5 bg-gray-50/80 p-5 rounded-2xl border border-gray-100 w-fit shadow-sm">
                                    <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-brandBlue">
                                        <Calendar size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-brandText font-bold text-lg">Strategy Audit</h4>
                                        <p className="text-sm text-brandSlate">15 Min Zoom Call</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-5 bg-gray-50/80 p-5 rounded-2xl border border-gray-100 w-fit shadow-sm">
                                    <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center text-brandEmerald">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-brandText font-bold text-lg">Action Plan</h4>
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
                            className="bg-white rounded-3xl border border-gray-200 p-8 sm:p-10 shadow-xl shadow-slate-200/50 relative overflow-hidden"
                        >
                            {/* Form Edge Banner */}
                            <div className="absolute top-0 left-0 w-full h-1.5 bg-brandBlue opacity-90"></div>

                            <h3 className="text-2xl font-bold text-brandText mb-8">Book Your Call</h3>

                            {submitted ? (
                                <div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
                                    <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-brandBlue mb-4 border border-blue-100">
                                        <Calendar size={32} />
                                    </div>
                                    <h4 className="text-2xl font-extrabold text-brandText">Application Received!</h4>
                                    <p className="text-brandSlate max-w-xs">Our team will be in touch strictly via email to schedule your call within 24 hours.</p>
                                </div>
                            ) : (
                                <form className="space-y-5" onSubmit={handleSubmit}>
                                    <div className="grid grid-cols-2 gap-5">
                                        <div className="space-y-1.5">
                                            <label className="text-xs text-brandSlate font-bold uppercase tracking-wider">First Name</label>
                                            <input required type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-brandText focus:outline-none focus:ring-2 focus:ring-brandBlue/20 focus:border-brandBlue focus:bg-white transition-all" placeholder="John" />
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-xs text-brandSlate font-bold uppercase tracking-wider">Last Name</label>
                                            <input required type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-brandText focus:outline-none focus:ring-2 focus:ring-brandBlue/20 focus:border-brandBlue focus:bg-white transition-all" placeholder="Doe" />
                                        </div>
                                    </div>

                                    <div className="space-y-1.5">
                                        <label className="text-xs text-brandSlate font-bold uppercase tracking-wider">Email Address</label>
                                        <input required type="email" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-brandText focus:outline-none focus:ring-2 focus:ring-brandBlue/20 focus:border-brandBlue focus:bg-white transition-all" placeholder="john@example.com" />
                                    </div>

                                    <div className="space-y-1.5">
                                        <label className="text-xs text-brandSlate font-bold uppercase tracking-wider">Current Trading Capital?</label>
                                        <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-brandText focus:outline-none focus:ring-2 focus:ring-brandBlue/20 focus:border-brandBlue focus:bg-white transition-all cursor-pointer appearance-none">
                                            <option>&lt; $1,000</option>
                                            <option>$1K - $10K</option>
                                            <option>$10K - $100K</option>
                                            <option>Prop Firm Funded ($100K+)</option>
                                        </select>
                                    </div>

                                    <button type="submit" className="w-full mt-6 bg-brandBlue hover:bg-blue-600 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md shadow-blue-500/20 hover:-translate-y-0.5">
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
                className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_8px_30px_rgb(37,211,102,0.3)] hover:scale-110 transition-transform"
                aria-label="Chat on WhatsApp"
            >
                <MessageCircle size={32} className="relative z-10" fill="currentColor" />
            </a>
        </>
    );
};
