"use client";
import React from 'react';
import { faqItems, FAQItem } from '../faqData';

export default function FAQOnboarding() {
  const [open, setOpen] = React.useState<string | null>(faqItems[0].q);
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/40">
      <div className="mx-auto text-center max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-800 dark:text-white">Frequently Asked Questions</h2>
        <p className="mt-4 text-slate-600 dark:text-slate-300">Everything you need to know</p>
      </div>
      <div className="mt-12 max-w-4xl mx-auto px-6 divide-y divide-slate-200 dark:divide-slate-700 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 overflow-hidden">
  {faqItems.map((f: FAQItem) => {
          const active = open === f.q;
          return (
            <div key={f.q} className="group">
              <button onClick={() => setOpen(a => a === f.q ? null : f.q)} className="w-full text-left px-6 py-5 flex items-center justify-between gap-6 focus:outline-none">
                <span className="font-medium text-slate-800 dark:text-slate-100">{f.q}</span>
                <span className="text-slate-500 dark:text-slate-400 text-sm">{active ? '−' : '+'}</span>
              </button>
              {active && <div className="px-6 pb-6 -mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{f.a}</div>}
            </div>
          );
        })}
      </div>
    </section>
  );
}
