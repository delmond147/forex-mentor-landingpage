import React from "react";
import PositionSizeCalculator from "@/components/forex/PositionSizeCalculator";
import MarketTicker from "@/components/forex/MarketTicker";
import EconomicCalendar from "@/components/forex/EconomicCalendar";
import SocialConnectGrid from "@/components/forex/SocialConnectGrid";
import TelegramWebhookPreview from "@/components/forex/TelegramWebhookPreview";
import LiveStatusIndicator from "@/components/forex/LiveStatusIndicator";
import { Navigation } from "@/components/Navigation";

export const metadata = {
    title: "Forex Tools Dashboard | Mentorship",
    description: "Advanced trading tools for our members.",
};

export default function ToolsDashboard() {
    return (
        <div className="min-h-screen bg-[#020617] text-slate-50 selection:bg-emerald-500/30 overflow-x-hidden">
            {/* The existing navigation might already exist in layout, but we'll include it or a custom header */}
            <Navigation />

            {/* Dynamic Live Status floating indicator */}
            <LiveStatusIndicator />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 relative">
                {/* Abstract Background Elements */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none"></div>
                <div className="absolute bottom-40 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="mb-12 text-center relative z-10">
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
                        Pro Trading <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-200">Tools</span>
                    </h1>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                        Manage your risk, stay ahead of the news, and never miss a VIP signal. Everything you need to trade consistently.
                    </p>
                </div>

                {/* Dashboard Grid Container */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10">

                    {/* Left Column: Calculator & Social */}
                    <div className="lg:col-span-5 space-y-6 flex flex-col">
                        <PositionSizeCalculator />

                        <div className="flex flex-col gap-6 flex-1">
                            <div className="flex flex-col h-full">
                                <SocialConnectGrid />
                            </div>
                            <div className="flex flex-col h-full">
                                <TelegramWebhookPreview />
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Market Data (Trading Information) */}
                    <div className="lg:col-span-7 space-y-6 flex flex-col">
                        <div className="h-[400px]">
                            <MarketTicker />
                        </div>

                        <div className="h-[500px]">
                            <EconomicCalendar />
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
}
