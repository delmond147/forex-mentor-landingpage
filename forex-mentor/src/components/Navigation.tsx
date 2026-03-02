import React from 'react';
import Link from 'next/link';
import { Send, MessageCircle } from 'lucide-react';

export const Navigation = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-brandDark/80 backdrop-blur-md border-b border-brandSlate/20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo / Brand Name */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-2xl font-bold tracking-tighter text-white flex items-center gap-2">
                            <div className="w-8 h-8 rounded bg-brandEmerald flex items-center justify-center">
                                <span className="text-brandDark font-extrabold text-xl">M</span>
                            </div>
                            Mentor<span className="text-brandEmerald">FX</span>
                        </Link>
                    </div>

                    {/* Desktop Navigation Links */}
                    <nav className="hidden md:flex space-x-8">
                        <Link href="#strategy" className="text-sm font-medium text-brandSlate hover:text-white transition-colors">
                            Strategy
                        </Link>
                        <Link href="#mentorship" className="text-sm font-medium text-brandSlate hover:text-white transition-colors">
                            Mentorship
                        </Link>
                        <Link href="#results" className="text-sm font-medium text-brandSlate hover:text-white transition-colors">
                            Results
                        </Link>
                    </nav>

                    {/* Connect CTAs */}
                    <div className="flex items-center gap-4">
                        <a
                            href="https://t.me/TGKFX247"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-brandSlate/10 hover:bg-brandSlate/20 text-white transition-colors"
                            aria-label="Telegram"
                        >
                            <Send size={18} />
                        </a>
                        <a
                            href="https://wa.me/237680749528"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-brandEmerald hover:bg-emerald-400 text-brandDark font-semibold transition-colors"
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
