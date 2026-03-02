"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
    {
        name: "David M.",
        rating: 5,
        text: "\"I've never had such a great experience with a trading community. The daily setups are professional and always on time. I highly recommend!\"",
        avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    },
    {
        name: "Alisha Magilu",
        rating: 5,
        text: "\"Passing my $100k FTMO took less than 5 weeks using the SMC strategies taught here. I love how easy it is to follow the daily markups!\"",
        avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    },
    {
        name: "Jamie Smith",
        rating: 5,
        text: "\"I've tried other signals and none compare to the quality and care I received in this mentorship. Highly recommended!\"",
        avatarUrl: "https://i.pravatar.cc/150?img=32",
    },
    {
        name: "Marcus T.",
        rating: 5,
        text: "\"The 1-on-1 sessions completely changed how I view liquidity and market structure. Worth every single penny.\"",
        avatarUrl: "https://i.pravatar.cc/150?img=11",
    }
];

export const SocialConnect = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = 350;
            if (direction === 'left') {
                current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };

    return (
        <section id="results" className="py-24 bg-brandLight relative border-t border-gray-100 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

                {/* Header matching the reference UI */}
                <div className="flex flex-col md:flex-row items-end justify-between mb-12">
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="flex text-brandEmerald">
                                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                            </div>
                            <span className="text-sm font-semibold text-brandText border-b border-brandText cursor-pointer">
                                4,893 reviews on
                            </span>
                            <span className="flex items-center gap-1 text-sm font-bold text-brandEmerald ml-1">
                                <Star size={14} fill="currentColor" /> Trustpilot
                            </span>
                        </div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-extrabold text-brandText tracking-tight"
                        >
                            Hear from our students
                        </motion.h2>
                    </div>

                    {/* Desktop Navigation Arrows */}
                    <div className="hidden md:flex items-center gap-3">
                        <button onClick={() => scroll('left')} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors text-brandText">
                            <ChevronLeft size={20} />
                        </button>
                        <button onClick={() => scroll('right')} className="w-10 h-10 rounded-full bg-brandText text-white flex items-center justify-center hover:bg-gray-800 transition-colors">
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>

                {/* Horizontal Scrolling Card Container */}
                <div
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="min-w-[300px] md:min-w-[350px] flex-shrink-0 snap-start bg-gray-50/80 rounded-3xl p-8 flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex items-center gap-4 mb-6">
                                    <img
                                        src={testimonial.avatarUrl}
                                        alt={testimonial.name}
                                        className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                                    />
                                    <div>
                                        <h4 className="font-bold text-brandText text-sm">{testimonial.name}</h4>
                                    </div>
                                </div>
                                <p className="text-brandText text-lg font-medium leading-relaxed">
                                    {testimonial.text}
                                </p>
                            </div>
                            <div className="mt-8 text-xs font-bold text-gray-400">
                                {index + 1}/{testimonials.length}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Mobile Navigation Arrows */}
                <div className="flex md:hidden justify-center items-center gap-4 mt-4">
                    <button onClick={() => scroll('left')} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center active:bg-gray-50 text-brandText">
                        <ChevronLeft size={20} />
                    </button>
                    <button onClick={() => scroll('right')} className="w-10 h-10 rounded-full bg-brandText text-white flex items-center justify-center active:bg-gray-800">
                        <ChevronRight size={20} />
                    </button>
                </div>

            </div>
        </section>
    );
};
