"use client";
import React, { useState, useCallback, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { makeFadeUp, staggerParent } from '../../lib/motionVariants';
import Link from 'next/link';

// Data model
interface ModuleItem { text: string }
interface ModuleBlock { title: string; items: string[] }
interface ProgramDef {
  id: string;
  name: string;
  duration: string;
  blurb: string;
  idealFor: string;
  colorFrom: string; // gradient start
  colorTo: string;   // gradient end
  modules: ModuleBlock[];
}

const programs: ProgramDef[] = [
  {
    id: 'pharmacovigilance',
    name: 'Diploma in Pharmacovigilance',
    duration: '2 Months • 4 Classes/Week',
    blurb: 'Become an expert in drug safety and risk management—from foundational concepts to advanced regulatory operations.',
    idealFor: 'Life science & pharmacy grads, entry drug safety aspirants',
    colorFrom: 'from-indigo-500',
    colorTo: 'to-violet-600',
    modules: [
      {
        title: 'Unit I: Intro & ADR Fundamentals',
        items: [
          'Definitions, classifications & detection',
          'Causality / seriousness / severity assessment',
          'History & global PV landscape',
          'WHO programme & terminology foundations'
        ]
      },
      {
        title: 'Unit II: Standing Up a PV System',
        items: [
          'PV centre setup & roles',
            'SOP architecture & governance',
            'Passive vs active surveillance methods',
            'Observational designs & vaccine safety'
        ]
      },
      {
        title: 'Unit III: Case Processing & Signals',
        items: [
          'Spontaneous & regulatory reporting flows',
          'Signal detection lifecycle',
          'Risk prioritisation & mitigation frameworks',
          'Drug & disease coding schemas'
        ]
      },
      {
        title: 'Unit IV: Coding & Communication',
        items: [
          'MedDRA / SMQs deep dive',
          'WHO drug & Eudra dictionaries',
          'Regulatory / media communication patterns',
          'Intro to Argus & safety systems'
        ]
      },
      {
        title: 'Unit V: Informatics & Analytics',
        items: [
          'Labelling & IB updates',
          'CTCAE usage & event verbatim hygiene',
          'Safety signal statistical methods',
          'Pharmacogenomics overview'
        ]
      }
    ]
  },
  {
    id: 'clinical-data-management',
    name: 'Certification in Clinical Data Management',
    duration: '2 Months • 4 Classes/Week',
    blurb: 'End‑to‑end trial data lifecycle mastery: design, capture, cleaning, reconciliation and database lock.',
    idealFor: 'Freshers & professionals with <2 years in data or life sciences',
    colorFrom: 'from-cyan-500',
    colorTo: 'to-blue-600',
    modules: [
      {
        title: 'Study Start-Up',
        items: [
          'Protocol → eCRF spec mapping',
          'Visit matrix & DB architecture',
          'UAT cycles & go-live criteria',
          'Data Management Plan fundamentals'
        ]
      },
      {
        title: 'Conduct & Cleaning',
        items: [
          'CRF tracking & data entry QC',
          'Validation logic & discrepancy management',
          'Lab data integration & reconciliation',
          'AE / SAE capture & coding basics'
        ]
      },
      {
        title: 'Closeout & Lock',
        items: [
          'SAE & IxRS reconciliation',
          'Listing reviews & QC status reports',
          'Freeze / lock workflows',
          'Archive & submission packaging'
        ]
      },
      {
        title: 'Compliance & Cert Prep',
        items: [
          'ICH GCP / 21 CFR Part 11 essentials',
          'Resourcing & infrastructure readiness',
          'Ethical data stewardship',
          'SCDM CCDA / CCDM orientation'
        ]
      }
    ]
  },
  {
    id: 'sas-beginner',
    name: 'Clinical SAS Programming (Beginner)',
    duration: '4 Months • 4 Classes/Week',
    blurb: 'From zero to clinical programming contributor—base SAS, trial data domains & reporting foundations.',
    idealFor: 'Beginners, statisticians transitioning, analytic grads',
    colorFrom: 'from-fuchsia-500',
    colorTo: 'to-pink-600',
    modules: [
      {
        title: 'Drug Dev Foundations',
        items: [
          'Trial phases & design patterns',
          'Ethics: ICH GCP / 21 CFR 11 / E9',
          'Core trial docs: Protocol, CRF, SAP',
          'Safety / efficacy data modules'
        ]
      },
      {
        title: 'Base SAS Core',
        items: [
          'DATA step processing & PDV',
          'Data access, joins & transformations',
          'PROC suite (SORT, FREQ, MEANS, REPORT)',
          'Macro language & parameterisation'
        ]
      },
      {
        title: 'Analytics & Outputs',
        items: [
          'ODS templating fundamentals',
          'Visualization (GCHART / GPLOT)',
          'SQL procedures & optimization',
          'Error handling & log diagnostics'
        ]
      }
    ]
  },
  {
    id: 'sas-advanced',
    name: 'Advanced CDISC & TLF Programming',
    duration: '2 Months • 4 Classes/Week',
    blurb: 'Specialise in CDISC implementation & high‑quality statistical deliverables for submissions.',
    idealFor: 'Experienced SAS programmers & clinical analysts',
    colorFrom: 'from-emerald-500',
    colorTo: 'to-teal-600',
    modules: [
      {
        title: 'Drug Dev Review',
        items: [
          'Study design recall & SAP mapping',
          'Baseline / exposure concepts',
          'Standards refresh: SDTM vs ADaM',
          'Controlled terminology strategy'
        ]
      },
      {
        title: 'TLFs & Validation',
        items: [
          'Demography & disposition tables',
          'Safety listings & AE reconciliation',
          'Graph sets (KM, box, change from baseline)',
          'QC & dual programmer workflows'
        ]
      }
    ]
  }
];

const fade = makeFadeUp(28, 0.55);

const accordionVariants = {
  collapsed: { height: 0, opacity: 0, transition: { duration: 0.35, ease: 'easeOut' } },
  expanded: { height: 'auto', opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } }
};

export default function ProgramsClient() {
  const [open, setOpen] = useState<string | null>(null);
  const [query, setQuery] = useState('');
  const [toast, setToast] = useState<string | null>(null);
  const articleRefs = useRef<Record<string, HTMLElement | null>>({});
  const toggle = useCallback((id: string) => {
    setOpen(p => {
      const next = p === id ? null : id;
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('analytics:interaction', { detail: { type: 'program_toggle', program: id, expanded: next === id, ts: Date.now() } }));
      }
      return next;
    });
  }, []);

  const dispatchAnalytics = (type: string, detail: Record<string, unknown>) => {
    window.dispatchEvent(new CustomEvent('analytics:interaction', { detail: { type, ts: Date.now(), ...detail } }));
  };

  const showToast = useCallback((msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(prev => (prev === msg ? null : prev)), 2500);
  }, []);

  // Deep link on mount & hash change
  useEffect(() => {
    const applyHash = (hash?: string) => {
      const clean = (hash || window.location.hash || '').replace('#', '');
      if (!clean) return;
      const exists = programs.some(p => p.id === clean);
      if (exists) {
        setOpen(clean);
        // Scroll after next paint for expansion animation start
        requestAnimationFrame(() => {
          const el = articleRefs.current[clean];
            if (el) {
              el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
      }
    };
    applyHash();
    const onHash = () => applyHash();
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return programs;
    return programs
      .map(p => {
        // match on program or modules
        const programMatch = p.name.toLowerCase().includes(q) || p.blurb.toLowerCase().includes(q);
        const filteredModules = p.modules.filter(m => m.title.toLowerCase().includes(q) || m.items.some(it => it.toLowerCase().includes(q)));
        if (programMatch || filteredModules.length) {
          return { ...p, modules: filteredModules.length ? filteredModules : p.modules };
        }
        return null;
      })
      .filter(Boolean) as typeof programs;
  }, [query]);

  return (
    <main className="relative bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100">
      {/* Hero */}
      <section className="relative overflow-hidden py-28 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 opacity-95" />
        <div className="absolute inset-0 mix-blend-overlay bg-[radial-gradient(circle_at_25%_30%,rgba(255,255,255,0.25),transparent_60%),radial-gradient(circle_at_75%_70%,rgba(255,255,255,0.2),transparent_55%)]" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <motion.h1 initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }} className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">Clinical Research Programs</motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, ease: 'easeOut', delay: 0.15 }} className="mt-6 max-w-3xl mx-auto text-indigo-100 text-lg md:text-xl leading-relaxed">Industry-aligned, mentor‑driven learning paths to accelerate your entry and growth in pharmacovigilance, data management & clinical programming.</motion.p>
        </div>
      </section>

      {/* Programs */}
      <section className="relative max-w-6xl mx-auto px-6 py-24">
        <header className="text-center max-w-4xl mx-auto">
          <motion.h2 initial="hidden" whileInView="show" viewport={{ once: true }} variants={fade} className="text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">Programs Overview</motion.h2>
          <motion.p variants={fade} custom={0.1} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-6 text-slate-600 dark:text-slate-300 leading-relaxed">Select a program to inspect major curriculum blocks. Detailed syllabi & live project pathways provided post‑enrolment.</motion.p>
        </header>
        <div className="mt-10 max-w-xl mx-auto">
          <label htmlFor="program-search" className="sr-only">Search programs</label>
          <div className="relative">
            <input
              id="program-search"
              type="text"
              value={query}
              onChange={e => { setQuery(e.target.value); setOpen(null); }}
              placeholder="Search program or module (e.g. MedDRA, UAT, CDISC)"
              className="w-full rounded-full px-5 py-3 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-sm md:text-base focus:outline-none focus:ring-4 focus:ring-indigo-300/40 shadow-sm"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 text-sm"
                aria-label="Clear search"
              >✕</button>
            )}
          </div>
          <div className="mt-2 text-xs text-slate-500 dark:text-slate-400 text-center">{filtered.length} program{filtered.length !== 1 && 's'} match{filtered.length !== 1 && 'es'}</div>
        </div>

        <div className="mt-16 space-y-14">
          {filtered.map(program => {
            const expanded = open === program.id;
            return (
              <motion.article
                key={program.id}
                ref={el => { articleRefs.current[program.id] = el; }}
                id={program.id}
                layout
                className="relative scroll-mt-24 rounded-3xl border border-slate-200/70 dark:border-slate-700/60 bg-white/70 dark:bg-slate-900/60 backdrop-blur-xl shadow-[0_8px_40px_-12px_rgba(0,0,0,0.25)] p-0 overflow-hidden"
              >
                <div className={`relative px-6 md:px-10 pt-8 pb-6 md:pt-10 md:pb-8 bg-gradient-to-br ${program.colorFrom} ${program.colorTo} text-white`}> 
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-semibold tracking-tight drop-shadow-sm">{program.name}</h3>
                      <p className="mt-3 max-w-2xl text-indigo-50/95 text-sm md:text-base leading-relaxed">{program.blurb}</p>
                      <span className="inline-flex mt-4 text-xs md:text-sm font-medium px-4 py-2 rounded-full bg-white/15 ring-1 ring-white/30 backdrop-blur-sm">{program.duration}</span>
                    </div>
                    <div className="flex flex-col items-start gap-3 md:items-end shrink-0">
                      <button onClick={() => toggle(program.id)} aria-expanded={expanded} aria-controls={`${program.id}-modules`} className="group inline-flex items-center gap-2 rounded-full bg-white text-indigo-700 font-semibold px-6 py-3 text-sm md:text-base shadow-md shadow-indigo-900/20 hover:shadow-lg transition focus:outline-none focus-visible:ring-4 ring-indigo-300/50">
                        <span>{expanded ? 'Hide Curriculum' : 'View Curriculum'}</span>
                        <span className={`transition-transform ${expanded ? 'rotate-180' : ''}`}>⌄</span>
                      </button>
                      <Link href="/contact" onClick={() => dispatchAnalytics('program_apply_click', { program: program.id })} className="inline-flex items-center gap-2 rounded-full border-2 border-white/80 text-white font-semibold px-6 py-3 text-sm md:text-base hover:bg-white hover:text-indigo-700 transition focus:outline-none focus-visible:ring-4 ring-white/50">Enroll Now →</Link>
                    </div>
                  </div>
                </div>
                <AnimatePresence initial={false}>
                  {expanded && (
                    <motion.div
                      id={`${program.id}-modules`}
                      key="content"
                      initial="collapsed"
                      animate="expanded"
                      exit="collapsed"
                      variants={accordionVariants}
                      className="px-6 md:px-10 pt-6 pb-10 bg-gradient-to-b from-white/90 to-white dark:from-slate-950/80 dark:to-slate-950/95"
                    >
                      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {program.modules.map(m => (
                          <div key={m.title} className="group rounded-2xl border border-slate-200/70 dark:border-slate-700/60 bg-white dark:bg-slate-900 p-5 shadow-sm hover:shadow-md transition">
                            <h4 className="font-semibold text-sm md:text-base text-indigo-600 dark:text-indigo-300 mb-3 tracking-wide">{m.title}</h4>
                            <ul className="space-y-2 text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed list-disc pl-4">
                              {m.items.map(item => <li key={item}>{item}</li>)}
                            </ul>
                          </div>
                        ))}
                      </div>
                      <div className="mt-10 text-center text-xs md:text-sm text-slate-500 dark:text-slate-400">Detailed weekly breakdown & project briefs supplied after onboarding.</div>
                    </motion.div>
                  )}
                </AnimatePresence>
                <div className="px-6 md:px-10 py-5 border-t border-slate-200/70 dark:border-slate-700/60 bg-slate-50/70 dark:bg-slate-900/60 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
                  <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400"><strong className="font-semibold text-slate-800 dark:text-slate-200">Ideal For:</strong> {program.idealFor}</p>
                  <div className="flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        const url = `${window.location.origin}/services#${program.id}`;
                        navigator.clipboard?.writeText(url).then(() => {
                          showToast('Link copied');
                          dispatchAnalytics('program_share', { program: program.id });
                        });
                      }}
                      className="text-xs md:text-sm font-medium px-4 py-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-500 focus:outline-none focus-visible:ring-4 ring-indigo-300/50"
                    >
                      Share
                    </button>
                    <Link href="/contact" onClick={() => dispatchAnalytics('program_apply_secondary', { program: program.id })} className="text-xs md:text-sm font-medium px-4 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white hover:opacity-90 focus:outline-none focus-visible:ring-4 ring-indigo-300/50">Apply</Link>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* Features */}
      <section className="relative bg-gradient-to-b from-slate-100 to-slate-50 dark:from-slate-900 dark:to-slate-950 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">Why Choose Our Pathways?</h2>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: '📚', title: 'Comprehensive', text: 'Structured sequencing from fundamentals to applied execution.' },
              { icon: '🧪', title: 'Hands-On', text: 'Case studies, data artifacts & tool exposure—no passive slides.' },
              { icon: '🧭', title: 'Mentored', text: 'Active practitioner feedback loops accelerate calibration.' },
              { icon: '🎯', title: 'Outcome-Focused', text: 'Portfolio & employability signals embedded from day one.' }
            ].map(f => (
              <div key={f.title} className="group relative rounded-2xl p-6 bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-700/60 shadow-sm hover:shadow-lg transition">
                <div className="text-4xl mb-4" aria-hidden>{f.icon}</div>
                <h3 className="font-semibold text-indigo-600 dark:text-indigo-300 mb-2 text-sm md:text-base tracking-wide uppercase">{f.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-xs md:text-sm leading-relaxed">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="relative rounded-3xl overflow-hidden p-[1px] bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 shadow-xl shadow-indigo-800/30">
            <div className="rounded-3xl bg-slate-900/90 px-8 py-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">Ready to Begin?</h2>
              <p className="mt-6 text-slate-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">Your trajectory compounds fastest when you start now. Secure a seat—cohorts are intentionally capped for depth and feedback quality.</p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="rounded-full bg-white text-indigo-700 font-semibold px-10 py-4 text-sm md:text-base shadow-lg shadow-indigo-500/30 hover:shadow-indigo-600/40 hover:-translate-y-1 transition">Apply Now</Link>
                <Link href="/about" className="rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold px-10 py-4 text-sm md:text-base shadow-lg shadow-indigo-700/30 hover:opacity-90 hover:-translate-y-1 transition">Learn More</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Toast */}
      <div aria-live="polite" className="pointer-events-none fixed inset-0 flex flex-col items-center mt-6 space-y-2 z-[200]">
        {toast && (
          <div className="animate-fade-in-up rounded-full bg-slate-900/90 text-white px-5 py-2 text-sm shadow-lg backdrop-blur border border-slate-700/60">
            {toast}
          </div>
        )}
      </div>
    </main>
  );
}
