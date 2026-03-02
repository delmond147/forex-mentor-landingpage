"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
    {
        name: "David M.",
        text: "\"I've never had such a great experience with a trading community. The daily setups are professional and always on time. I highly recommend!\"",
        avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    },
    {
        name: "Alisha Magilu",
        text: "\"Passing my $100k FTMO took less than 5 weeks using the SMC strategies taught here. I love how easy it is to follow the daily markups!\"",
        avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    },
    {
        name: "Jamie Smith",
        text: "\"I've tried other signals and none compare to the quality and care I received in this mentorship. Highly recommended!\"",
        avatarUrl: "https://i.pravatar.cc/150?img=32",
    },
    {
        name: "Marcus T.",
        text: "\"The 1-on-1 sessions completely changed how I view liquidity and market structure. Worth every single penny.\"",
        avatarUrl: "https://i.pravatar.cc/150?img=11",
    }
];

export const SocialConnect = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section id="results" className="py-24 bg-brandLight relative border-t border-gray-100 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

                {/* Header matching the reference UI */}
                <div className="flex items-center justify-between mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-extrabold text-brandText tracking-tight"
                    >
                        Hear from our students
                    </motion.h2>

                    {/* Navigation Arrows */}
                    <div className="flex items-center gap-3">
                        <button onClick={prevSlide} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors text-brandText active:scale-95">
                            <ChevronLeft size={20} />
                        </button>
                        <button onClick={nextSlide} className="w-10 h-10 rounded-full bg-brandText text-white flex items-center justify-center hover:bg-gray-800 transition-colors active:scale-95 shadow-md shadow-gray-900/10">
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>

                {/* Single Wide Card Layout */}
                <div className="w-full bg-gray-50/50 rounded-[2.5rem] border border-gray-100 p-8 sm:p-12 md:p-16 min-h-[300px] flex flex-col justify-between relative shadow-sm">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="flex-grow flex flex-col"
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <Image
                                    src={testimonials[currentIndex].avatarUrl}
                                    alt={testimonials[currentIndex].name}
                                    width={56}
                                    height={56}
                                    unoptimized
                                    className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm"
                                />
                                <div>
                                    <h4 className="font-extrabold text-brandText text-base">{testimonials[currentIndex].name}</h4>
                                </div>
                            </div>
                            <p className="text-brandText text-xl sm:text-2xl pt-4 font-medium leading-relaxed max-w-5xl">
                                {testimonials[currentIndex].text}
                            </p>
                        </motion.div>
                    </AnimatePresence>

                    {/* Pagination Indicator inside the card */}
                    <div className="mt-12 text-sm font-bold text-gray-400">
                        {currentIndex + 1}/{testimonials.length}
                    </div>
                </div>
            </div>
        </section>
    );
};
