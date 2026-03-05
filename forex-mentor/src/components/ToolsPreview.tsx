import React from "react";
import PositionSizeCalculator from "./forex/PositionSizeCalculator";
import MarketTicker from "./forex/MarketTicker";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const ToolsPreview = () => {
    return (
        <section id="tools" className="relative py-24 sm:py-32 bg-[#020617] overflow-hidden">
            {/* Background abstract shapes */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-brandEmerald/10 rounded-full blur-[120px] pointer-events-none transform translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-brandBlue/10 rounded-full blur-[120px] pointer-events-none transform -translate-x-1/2 translate-y-1/2" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-6">
                        Pro Trading <span className="text-brandEmerald">Tools</span>
                    </h2>
                    <p className="text-lg text-slate-400">
                        Access our free suite of professional trading tools to manage risk and stay ahead of the markets.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Left: Calculator Preview */}
                    <div className="w-full relative group">
                        {/* Decorative border glow */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-brandEmerald to-brandBlue rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative bg-[#0f172a] rounded-2xl overflow-hidden ring-1 ring-white/10 h-full">
                            {/* Darker background for the calculator to sit in */}
                            <div className="p-1 sm:p-2 bg-slate-900/50 h-[500px]">
                                <PositionSizeCalculator />
                            </div>
                        </div>
                    </div>

                    {/* Right: Market Ticker Preview & CTA */}
                    <div className="w-full space-y-8 flex flex-col h-full">
                        <div className="relative group flex-1 min-h-[300px]">
                            <div className="absolute -inset-1 bg-gradient-to-r from-brandBlue to-brandEmerald rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative bg-[#0f172a] rounded-2xl overflow-hidden ring-1 ring-white/10 h-full">
                                <div className="h-full">
                                    <MarketTicker />
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-900/50 backdrop-blur-md rounded-2xl p-8 border border-white/5 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-brandBlue/10 rounded-full blur-3xl"></div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Want more tools?</h3>
                                <p className="text-sm text-slate-400">View the Economic Calendar, Live Signals, and our full Social Hub on the dedicated tools dashboard.</p>
                            </div>
                            <Link
                                href="/tools"
                                className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-brandDark font-bold hover:bg-slate-100 transition-colors shadow-lg shadow-white/10"
                            >
                                View All Tools <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
