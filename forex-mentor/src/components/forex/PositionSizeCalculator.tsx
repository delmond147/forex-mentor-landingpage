"use client";

import React, { useState, useEffect } from "react";
import { Calculator } from "lucide-react";

const PIP_VALUES_USD: Record<string, number> = {
    "EUR/USD": 10,
    "GBP/USD": 10,
    "AUD/USD": 10,
    "NZD/USD": 10,
    "USD/JPY": 6.8, // Approximate
    "USD/CAD": 7.4, // Approximate
    "USD/CHF": 11.2, // Approximate
    "XAU/USD": 10, // Gold
};

const USD_TO_XAF = 600; // Approximate exchange rate

export default function PositionSizeCalculator() {
    const [balance, setBalance] = useState<number | "">(1000);
    const [riskPercent, setRiskPercent] = useState<number>(1);
    const [stopLoss, setStopLoss] = useState<number | "">(20);
    const [pair, setPair] = useState<string>("EUR/USD");
    const [currency, setCurrency] = useState<"USD" | "XAF">("USD");

    const [lotSize, setLotSize] = useState<number>(0);
    const [riskAmount, setRiskAmount] = useState<number>(0);

    useEffect(() => {
        if (balance === "" || stopLoss === "" || stopLoss <= 0) {
            setLotSize(0);
            setRiskAmount(0);
            return;
        }

        // Calculate risk amount in account currency
        const amountRisked = balance * (riskPercent / 100);
        setRiskAmount(amountRisked);

        // Get base pip value in USD
        const pipValueUSD = PIP_VALUES_USD[pair] || 10;

        // Convert pip value to account currency if necessary
        const targetPipValue =
            currency === "XAF" ? pipValueUSD * USD_TO_XAF : pipValueUSD;

        // Calculate Lot Size: Risk Amount / (Stop Loss * Pip Value)
        const calculatedLotSize = amountRisked / (stopLoss * targetPipValue);

        // Cap lot size to reasonable precision
        setLotSize(parseFloat(calculatedLotSize.toFixed(2)));
    }, [balance, riskPercent, stopLoss, pair, currency]);

    return (
        <div className="relative overflow-hidden rounded-2xl bg-white/5 p-6 shadow-2xl backdrop-blur-xl border border-white/10 sm:p-8">
            {/* Glow effect */}
            <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-emerald-500/20 blur-[80px]"></div>

            <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-emerald-500/20 rounded-xl text-emerald-400">
                        <Calculator size={24} />
                    </div>
                    <h2 className="text-xl font-bold text-white">Position Size Calculator</h2>
                </div>

                <div className="space-y-5">
                    {/* Account Settings Row */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-300">Currency</label>
                            <select
                                value={currency}
                                onChange={(e) => setCurrency(e.target.value as "USD" | "XAF")}
                                className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all appearance-none"
                            >
                                <option value="USD">USD ($)</option>
                                <option value="XAF">XAF (CFA)</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-300">Pair</label>
                            <select
                                value={pair}
                                onChange={(e) => setPair(e.target.value)}
                                className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all appearance-none"
                            >
                                {Object.keys(PIP_VALUES_USD).map((p) => (
                                    <option key={p} value={p}>{p}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-300">
                            Account Balance ({currency})
                        </label>
                        <input
                            type="number"
                            value={balance}
                            onChange={(e) => setBalance(e.target.value === "" ? "" : Number(e.target.value))}
                            placeholder="e.g. 1000"
                            className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all"
                        />
                    </div>

                    <div className="space-y-2">
                        <div className="flex justify-between items-center">
                            <label className="text-sm font-medium text-slate-300">
                                Risk Percentage: <span className="text-emerald-400 font-bold">{riskPercent}%</span>
                            </label>
                            <span className="text-xs text-slate-400">
                                Risking {currency === 'USD' ? '$' : ''}{riskAmount.toLocaleString(undefined, { maximumFractionDigits: 2 })} {currency === 'XAF' ? 'XAF' : ''}
                            </span>
                        </div>
                        <input
                            type="range"
                            min="0.1"
                            max="5"
                            step="0.1"
                            value={riskPercent}
                            onChange={(e) => setRiskPercent(Number(e.target.value))}
                            className="w-full accent-emerald-500"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-300">Stop Loss (Pips)</label>
                        <input
                            type="number"
                            value={stopLoss}
                            onChange={(e) => setStopLoss(e.target.value === "" ? "" : Number(e.target.value))}
                            placeholder="e.g. 20"
                            className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all"
                        />
                    </div>

                    {/* Results Area */}
                    <div className="mt-6 p-5 bg-gradient-to-br from-emerald-500/20 to-emerald-900/20 border border-emerald-500/30 rounded-xl space-y-1 text-center">
                        <p className="text-sm text-emerald-200/80 uppercase tracking-wide font-semibold">Recommended Lot Size</p>
                        <p className="text-4xl font-black text-white drop-shadow-md">
                            {lotSize > 0 ? lotSize : "0.00"}
                            <span className="text-lg text-emerald-400 ml-2 font-medium">Lots</span>
                        </p>
                    </div>

                    {/* Call to Action */}
                    <div className="pt-4 text-center border-t border-white/5">
                        <p className="text-sm text-slate-400">
                            Confused by the math? Let me teach you my mechanical risk management system.{" "}
                            <a href="#join" className="text-emerald-400 hover:text-emerald-300 font-semibold underline decoration-emerald-500/30 underline-offset-4 transition-colors">
                                [Join Now]
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
