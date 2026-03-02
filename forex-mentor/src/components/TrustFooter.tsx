import React from "react";
import Link from "next/link";
import { Send, MessageCircle, Instagram, Youtube, Twitter } from "lucide-react";

export const TrustFooter = () => {
    return (
        <footer className="bg-[#05101C] pt-16 pb-8 border-t border-brandSlate/10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

                {/* Top Footer Section */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

                    <div className="md:col-span-1">
                        <Link href="/" className="text-2xl font-bold tracking-tighter text-white flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 rounded bg-brandEmerald flex items-center justify-center">
                                <span className="text-brandDark font-extrabold text-xl">M</span>
                            </div>
                            Mentor<span className="text-brandEmerald">FX</span>
                        </Link>
                        <p className="text-brandSlate text-sm leading-relaxed mb-6">
                            Empowering retail traders with institutional insights. Transition from guessing to knowing.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-brandSlate/10 flex items-center justify-center text-white hover:bg-brandEmerald hover:text-brandDark transition-colors">
                                <Instagram size={18} />
                            </a>
                            <a href="https://www.youtube.com/@KellyBillaFX" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-brandSlate/10 flex items-center justify-center text-white hover:bg-brandEmerald hover:text-brandDark transition-colors">
                                <Youtube size={18} />
                            </a>
                            <a href="https://x.com/delmond147" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-brandSlate/10 flex items-center justify-center text-white hover:bg-brandEmerald hover:text-brandDark transition-colors">
                                <Twitter size={18} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Navigation</h4>
                        <ul className="space-y-3">
                            <li><Link href="#strategy" className="text-brandSlate text-sm hover:text-brandEmerald transition-colors">The Strategy</Link></li>
                            <li><Link href="#mentorship" className="text-brandSlate text-sm hover:text-brandEmerald transition-colors">Mentorship Tiers</Link></li>
                            <li><Link href="#results" className="text-brandSlate text-sm hover:text-brandEmerald transition-colors">Success Stories</Link></li>
                            <li><Link href="#" className="text-brandSlate text-sm hover:text-brandEmerald transition-colors">Student Portal Login</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Support</h4>
                        <ul className="space-y-3">
                            <li><Link href="#" className="text-brandSlate text-sm hover:text-brandEmerald transition-colors">FAQ</Link></li>
                            <li><Link href="#" className="text-brandSlate text-sm hover:text-brandEmerald transition-colors">Contact Us</Link></li>
                            <li><Link href="#" className="text-brandSlate text-sm hover:text-brandEmerald transition-colors">Terms of Service</Link></li>
                            <li><Link href="#" className="text-brandSlate text-sm hover:text-brandEmerald transition-colors">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Connect</h4>
                        <ul className="space-y-4">
                            <li>
                                <a href="https://wa.me/237680749528" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-brandSlate text-sm hover:text-white transition-colors">
                                    <MessageCircle size={18} className="text-brandEmerald" />
                                    WhatsApp Support
                                </a>
                            </li>
                            <li>
                                <a href="https://t.me/TGKFX247" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-brandSlate text-sm hover:text-white transition-colors">
                                    <Send size={18} className="stroke-[#0088cc]" />
                                    Telegram Group
                                </a>
                            </li>
                            <li>
                                <a href="mailto:dnyingchuo@gmail.com" className="flex items-center gap-3 text-brandSlate text-sm hover:text-white transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brandSlate"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                                    Email Us
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Divider */}
                <div className="w-full h-px bg-brandSlate/10 mb-8"></div>

                {/* Risk Disclosure */}
                <div className="max-w-4xl mx-auto text-center mb-8">
                    <p className="text-[10px] sm:text-xs text-brandSlate/60 leading-relaxed uppercase font-mono text-justify">
                        <strong>Risk Disclosure:</strong> Trading foreign exchange on margin carries a high level of risk, and may not be suitable for all investors. Past performance is not indicative of future results. The high degree of leverage can work against you as well as for you. Before deciding to invest in foreign exchange you should carefully consider your investment objectives, level of experience, and risk appetite. The possibility exists that you could sustain a loss of some or all of your initial investment and therefore you should not invest money that you cannot afford to lose. You should be aware of all the risks associated with foreign exchange trading, and seek advice from an independent financial advisor if you have any doubts. MentorFX is an educational platform and all material provided is for educational purposes only. It should not be construed as investment advice.
                    </p>
                </div>

                <div className="text-center text-sm text-brandSlate/80">
                    <p>&copy; {new Date().getFullYear()} MentorFX. All rights reserved.</p>
                </div>

            </div>
        </footer>
    );
};
