"use client";

import React, { useEffect, useRef, memo } from "react";
import { TrendingUp } from "lucide-react";

function MarketTickerComponent() {
    const container = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Prevent duplicate injections during React strict mode double-invocations
        if (!container.current || container.current.querySelector('script')) return;

        const script = document.createElement("script");
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js";
        script.type = "text/javascript";
        script.async = true;
        script.innerHTML = JSON.stringify({
            colorTheme: "dark",
            dateRange: "1D",
            showChart: true,
            locale: "en",
            largeChartUrl: "",
            isTransparent: true,
            showSymbolLogo: true,
            showFloatingTooltip: false,
            width: "100%",
            height: "400",
            tabs: [
                {
                    title: "Forex",
                    symbols: [
                        { s: "FX:EURUSD", d: "EUR to USD" },
                        { s: "FX:GBPUSD", d: "GBP to USD" },
                        { s: "FX:USDJPY", d: "USD to JPY" },
                        { s: "FX:USDCHF", d: "USD to CHF" },
                        { s: "FX:AUDUSD", d: "AUD to USD" },
                        { s: "FX:USDCAD", d: "USD to CAD" }
                    ]
                },
                {
                    title: "Metals & Crypto",
                    symbols: [
                        { s: "OANDA:XAUUSD", d: "Gold to USD" },
                        { s: "BINANCE:BTCUSDT", d: "Bitcoin" },
                        { s: "BINANCE:ETHUSDT", d: "Ethereum" }
                    ]
                }
            ]
        });

        container.current.appendChild(script);
    }, []);

    return (
        <div className="relative overflow-hidden rounded-2xl bg-slate-900/60 p-1 shadow-2xl backdrop-blur-xl border border-white/10 h-full flex flex-col">
            <div className="px-5 pt-5 pb-3 flex items-center gap-3">
                <div className="p-2.5 bg-emerald-500/20 rounded-xl text-emerald-400">
                    <TrendingUp size={20} />
                </div>
                <h2 className="text-lg font-bold text-white">Market Overview</h2>
            </div>
            <div className="flex-1 w-full relative">
                <div ref={container} className="tradingview-widget-container h-full w-full">
                    <div className="tradingview-widget-container__widget h-full w-full"></div>
                </div>
            </div>
        </div>
    );
}

export const MarketTicker = memo(MarketTickerComponent);
export default MarketTicker;
