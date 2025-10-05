import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Your Journey at FPJ – Pharmaceutical Path',
  description: 'From curiosity to career-ready professional—mapped to the pharmaceutical development lifecycle.'
};

// NOTE: This page intentionally uses utility classes instead of the original inline <style> block.
// Further refactors: extract repeated gradient tokens into design tokens if reused.

const phases = [
  {
    id: 'preclinical',
    icon: '💊',
    tag: 'PRECLINICAL DEVELOPMENT',
    title: 'From Idea to Evidence',
    subtitle: 'Building the scientific foundation',
    highlight: 'FPJ students go through a battery of tests and assessments—proving their grasp of core concepts before moving forward to the next level, just like molecules must prove safety before clinical trials.',
    bodyTop: 'Before a molecule ever reaches humans, it must prove it works and is safe in carefully controlled lab and model systems. Scientists run pharmacology, toxicity, metabolism and formulation studies. Only a small fraction of molecules survive this stage—but those that do enter clinical development with data-backed confidence.',
    bodyBottom: 'This stage reduces risk, optimizes the molecule, and sets the scientific foundation for first-in-human trials.'
  },
  {
    id: 'clinical',
    icon: '🧪',
    tag: 'CLINICAL DEVELOPMENT',
    title: 'First Human Tests',
    subtitle: 'Where hope meets science',
    highlight: 'FPJ students apply their skills to real-world projects and industry case studies—learning clinical research principles, regulatory requirements, and data analysis that pharmaceutical companies need.',
    bodyTop: 'After years of lab work, the moment of truth arrives: testing in real people. It\'s a careful, methodical process that can take a decade—and where pharmaceutical careers are truly made.',
    extra: true,
    stats: [
      { number: '1 in 4', label: 'Medicines reach patients' },
      { number: '10-15', label: 'Years of development' },
      { number: '$100M+', label: 'Investment required' }
    ],
    bodyBottom: 'But when it works, lives are saved—and careers are launched.'
  },
  {
    id: 'regulatory',
    icon: '✓',
    tag: 'REGULATORY SUBMISSION',
    title: 'Approval Pathway',
    subtitle: 'Building the case for market entry',
    highlight: 'FPJ students receive industry-recognized certification upon successful course completion—your regulatory approval that validates your pharmaceutical expertise to employers worldwide.',
    bodyTop: 'All the data from discovery through clinical trials is assembled into a massive dossier for regulators. Regulatory teams compile quality, nonclinical, and clinical modules—thousands of pages of validated, auditable information.',
    bodyBottom: 'Review can take months to years depending on priority pathways—but once approved, the medicine can finally be manufactured at scale.'
  },
  {
    id: 'manufacturing',
    icon: '🏭',
    tag: 'MANUFACTURING SCALE-UP',
    title: 'Making Millions',
    subtitle: 'When one tiny lab process must become millions of perfect doses',
    highlight: 'FPJ prepares students for the job market through professional resume building, mock interviews, and CV preparation—scaling you from student to industry-ready professional that companies are eager to hire.',
    bodyTop: 'The recipe that worked for 100 doses in a lab must now produce millions. Every step gets redesigned. Bigger equipment, stricter standards, zero room for error. One batch can supply thousands of patients—or if something goes wrong, put them at risk.',
    stats: [
      { number: '2-3', label: 'Years to full scale' },
      { number: 'Millions', label: 'Patients served globally' },
      { number: '100s', label: 'Skilled professionals employed' }
    ]
  },
  {
    id: 'launch',
    icon: '🚀',
    tag: 'COMMERCIAL LAUNCH',
    title: 'Reaching Patients',
    subtitle: 'From approval to real-world impact',
    highlight: 'FPJ students enter the pharmaceutical market through our extensive referral network—connecting certified graduates directly with hiring companies for immediate career impact.',
    bodyTop: 'After approval, coordinated commercial, medical and manufacturing efforts bring the therapy to real-world use. Market access, pricing strategy, pharmacovigilance, medical education, lifecycle management—launch is a multidisciplinary sprint.',
    bodyBottom: 'A successful launch turns a scientific achievement into sustained patient impact—and opens the door to future innovations.'
  }
];

export default function JourneyPage() {
  return (
    <div className="min-h-screen bg-[#0f0f23] text-slate-800 dark:text-slate-200">
      {/* Hero */}
      <header className="relative overflow-hidden py-28 md:py-36 text-center bg-gradient-to-tr from-indigo-800 via-violet-600 to-pink-500">
        <div className="absolute inset-0 opacity-70 [background:radial-gradient(circle_at_20%_50%,rgba(236,72,153,0.25),transparent_60%),radial-gradient(circle_at_80%_50%,rgba(124,58,237,0.25),transparent_60%)] animate-pulse" />
        <div className="relative max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-lg">Your Journey at FPJ</h1>
          <p className="mt-6 text-lg md:text-2xl font-light text-white/90 leading-snug">From curiosity to career-ready professional—mapped to the pharmaceutical development lifecycle</p>
        </div>
      </header>

      {/* Timeline vertical spine */}
      <div className="relative max-w-6xl mx-auto px-6 py-24">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500 via-pink-400 to-amber-400 hidden md:block" aria-hidden="true" />
        <ol className="space-y-40">
          {phases.map((p, idx) => (
            <li key={p.id} className="relative" id={p.id}>
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 -top-4 w-16 h-16 rounded-full bg-gradient-to-br from-violet-500 to-pink-500 shadow-[0_0_0_8px_#0f0f23] ring-2 ring-white/20 text-3xl items-center justify-center select-none" aria-hidden="true">{p.icon}</div>
              <article className="relative bg-white dark:bg-slate-900/70 backdrop-blur rounded-3xl shadow-xl shadow-black/20 border border-white/10 px-6 sm:px-10 md:px-14 py-10 md:py-14">
                <header className="mb-8">
                  <span className="inline-block text-[11px] tracking-[0.18em] font-semibold uppercase rounded-full bg-gradient-to-r from-violet-100 via-pink-100 to-amber-100 text-violet-700 px-4 py-2 shadow-inner shadow-white/40 dark:from-violet-900/30 dark:via-pink-900/20 dark:to-amber-900/20 dark:text-violet-200 mb-4">{p.tag}</span>
                  <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-slate-800 dark:text-slate-100">{p.title}</h2>
                  <p className="mt-3 text-slate-500 dark:text-slate-400 text-base md:text-lg font-medium">{p.subtitle}</p>
                </header>
                <div className="prose prose-slate dark:prose-invert max-w-none leading-relaxed">
                  <p className="text-slate-600 dark:text-slate-300 text-base md:text-lg">{p.bodyTop}</p>
                </div>
                <div className="mt-8 relative bg-gradient-to-br from-amber-100 via-rose-100 to-pink-100 dark:from-amber-900/20 dark:via-rose-900/10 dark:to-pink-900/20 border border-amber-200/60 dark:border-amber-700/30 rounded-2xl p-6 md:p-8 shadow-inner">
                  <p className="text-amber-900 dark:text-amber-200 font-medium italic text-sm md:text-base leading-relaxed">“{p.highlight}”</p>
                </div>
                {p.extra && (
                  <div className="mt-10 rounded-2xl bg-gradient-to-br from-indigo-50 via-violet-50 to-fuchsia-50 dark:from-indigo-900/20 dark:via-violet-900/20 dark:to-fuchsia-900/20 border border-indigo-200/50 dark:border-indigo-700/30 p-8">
                    <h3 className="text-2xl font-bold text-indigo-800 dark:text-indigo-200 text-center mb-2">Clinical Trials</h3>
                    <p className="text-indigo-600 dark:text-indigo-300 text-center italic mb-8">Where hope meets science</p>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="bg-white dark:bg-slate-800/60 rounded-xl p-5 shadow border border-slate-200/60 dark:border-slate-700/40">
                        <p className="text-violet-600 dark:text-violet-300 font-semibold mb-1">Phase I</p>
                        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">20–100 volunteers test initial safety envelope.</p>
                      </div>
                      <div className="bg-white dark:bg-slate-800/60 rounded-xl p-5 shadow border border-slate-200/60 dark:border-slate-700/40">
                        <p className="text-violet-600 dark:text-violet-300 font-semibold mb-1">Phase II</p>
                        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">Hundreds refine dose, monitor efficacy signals.</p>
                      </div>
                      <div className="bg-white dark:bg-slate-800/60 rounded-xl p-5 shadow border border-slate-200/60 dark:border-slate-700/40">
                        <p className="text-violet-600 dark:text-violet-300 font-semibold mb-1">Phase III</p>
                        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">Large cohorts validate comparative performance.</p>
                      </div>
                    </div>
                  </div>
                )}
                {p.stats && (
                  <div className="mt-10 grid sm:grid-cols-3 gap-6">
                    {p.stats.map(s => (
                      <div key={s.label} className="rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800/60 dark:to-slate-800/40 border border-slate-200 dark:border-slate-700 p-6 shadow-sm hover:shadow-md transition">
                        <p className="text-3xl font-extrabold bg-gradient-to-r from-violet-600 via-pink-500 to-amber-500 bg-clip-text text-transparent mb-1">{s.number}</p>
                        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{s.label}</p>
                      </div>
                    ))}
                  </div>
                )}
                {p.bodyBottom && (
                  <p className="mt-10 text-slate-600 dark:text-slate-300 text-base md:text-lg leading-relaxed text-center font-medium">{p.bodyBottom}</p>
                )}
              </article>
            </li>
          ))}
        </ol>

        {/* CTA */}
        <section className="mt-44 relative overflow-hidden rounded-3xl bg-gradient-to-tr from-indigo-800 via-violet-600 to-pink-500 p-12 md:p-20 text-center shadow-2xl">
          <div className="absolute inset-0 [background:radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:42px_42px] opacity-40 animate-[gridMove_22s_linear_infinite]" />
          <div className="relative max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-6">Ready to Start Your Journey?</h2>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-10">Join FPJ and follow the same proven path that brings life‑saving medicines to millions of patients worldwide.</p>
            <a href="/contact" className="inline-block rounded-full bg-white text-violet-700 font-semibold text-sm md:text-base px-8 py-4 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-px transition">Begin Your Transformation</a>
          </div>
        </section>

        {/* Completion */}
        <section className="mt-40 mb-20 bg-white dark:bg-slate-900/70 backdrop-blur rounded-3xl shadow-xl border border-white/10 p-12 md:p-16 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-800 dark:text-slate-100 mb-8">From Discovery to Impact</h2>
          <p className="max-w-4xl mx-auto text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">Just as a medicine is <span className="font-semibold bg-gradient-to-r from-violet-600 via-pink-500 to-amber-500 bg-clip-text text-transparent">discovered, tested, approved, scaled, and launched</span> to transform lives, FPJ ensures every student is <span className="font-semibold bg-gradient-to-r from-amber-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">trained, validated, certified, and career‑ready</span>. We do not just teach—we guide you through a proven development process aligned with real pharmaceutical standards.</p>
        </section>
      </div>
    </div>
  );
}
