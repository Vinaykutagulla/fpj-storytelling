"use client";
import React, { useState } from 'react';
import SectionTitle from './SectionTitleProxy';

// SectionTitleProxy will re-export the SectionTitle logic via a lightweight proxy to avoid duplication.

export default function EarningsCalculator() {
  const [referrals, setReferrals] = useState<number>(5);
  const payout = referrals * 1500;
  const formatted = new Intl.NumberFormat('en-IN').format(payout);
  return (
    <section id="calculator" className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-xl mx-auto px-6">
        <SectionTitle title="Earnings Calculator" subtitle="Project potential monthly earnings" />
        <div className="mt-10 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 shadow-sm">
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Number of successful referrals</label>
          <input
            type="number"
            min={0}
            value={referrals}
            onChange={e => setReferrals(Math.max(0, Number(e.target.value) || 0))}
            className="w-full rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 px-4 py-2 text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="mt-6 text-center">
            <p className="text-sm uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-2">Potential Earnings</p>
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">₹{formatted}</div>
            <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">Assuming ₹1,500 per successful enrollment.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
