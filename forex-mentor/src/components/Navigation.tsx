import React from 'react';
import Link from 'next/link';
import { Send, MessageCircle } from 'lucide-react';

export const Navigation = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo / Brand Name */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-2xl font-bold tracking-tighter text-brandText flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-brandBlue flex items-center justify-center shadow-md shadow-blue-500/30">
                                <span className="text-white font-extrabold text-xl">M</span>
                            </div>
                            Mentor<span className="text-brandBlue">FX</span>
                        </Link>
                    </div>

                    {/* Desktop Navigation Links */}
                    <nav className="hidden md:flex space-x-8">
                        <Link href="#strategy" className="text-sm font-semibold text-brandSlate hover:text-brandBlue transition-colors">
                            Strategy
                        </Link>
                        <Link href="#mentorship" className="text-sm font-semibold text-brandSlate hover:text-brandBlue transition-colors">
                            Mentorship
                        </Link>
                        <Link href="#results" className="text-sm font-semibold text-brandSlate hover:text-brandBlue transition-colors">
                            Results
                        </Link>
                    </nav>

                    {/* Connect CTAs */}
                    <div className="flex items-center gap-4">
                        <a
                            href="https://t.me/TGKFX247"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 hover:bg-blue-100 text-brandBlue transition-colors"
                            aria-label="Telegram"
                        >
                            <Send size={18} />
                        </a>
                        <a
                            href="https://wa.me/237680749528"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brandBlue hover:bg-blue-600 text-white font-semibold shadow-lg shadow-blue-500/30 transition-all hover:-translate-y-0.5"
                        >
                            <MessageCircle size={18} />
                            <span className="hidden sm:inline">Connect</span>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};
