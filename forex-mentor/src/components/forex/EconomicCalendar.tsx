"use client";

import React, { useEffect, useRef, memo } from "react";
import { CalendarDays } from "lucide-react";

function EconomicCalendarComponent() {
    const container = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Prevent duplicate injections during React strict mode double-invocations
        if (!container.current || container.current.querySelector('script')) return;

        const script = document.createElement("script");
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-events.js";
        script.type = "text/javascript";
        script.async = true;
        script.innerHTML = JSON.stringify({
            colorTheme: "dark",
            isTransparent: true,
            width: "100%",
            height: "400",
            locale: "en",
            importanceFilter: "-1,0,1",
            currencyFilter: "USD,EUR,GBP,JPY,AUD,CAD,CHF,NZD"
        });

        container.current.appendChild(script);
    }, []);

    return (
        <div className="relative overflow-hidden rounded-2xl bg-slate-900/60 p-1 shadow-2xl backdrop-blur-xl border border-white/10 h-full flex flex-col">
            <div className="px-5 pt-5 pb-3 flex items-center gap-3">
                <div className="p-2.5 bg-emerald-500/20 rounded-xl text-emerald-400">
                    <CalendarDays size={20} />
                </div>
                <h2 className="text-lg font-bold text-white">Economic Calendar</h2>
            </div>
            <div className="flex-1 w-full relative">
                <div ref={container} className="tradingview-widget-container h-full w-full">
                    <div className="tradingview-widget-container__widget h-full w-full"></div>
                </div>
            </div>
        </div>
    );
}

export const EconomicCalendar = memo(EconomicCalendarComponent);
export default EconomicCalendar;
