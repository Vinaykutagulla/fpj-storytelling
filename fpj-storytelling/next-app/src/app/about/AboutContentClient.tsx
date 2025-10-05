"use client";
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { makeFadeUp, staggerParent } from '../../lib/motionVariants';

const fade = makeFadeUp();

const featureItems = [
  { icon: '🎯', title: 'Real-World Learning', text: 'RLD projects mirror actual industry work—solve the same problems professionals tackle.' },
  { icon: '👨‍🏫', title: 'Active Industry Trainers', text: 'Mentorship from professionals currently working in pharma—fresh, pragmatic insights.' },
  { icon: '🤝', title: 'One-on-One Support', text: 'Individual guidance on doubts, code, documentation, and mindset.' },
  { icon: '💼', title: 'End-to-End Career Building', text: 'We stay with you from first class to first offer—and beyond.' },
  { icon: '🔄', title: 'Comprehensive Internships', text: 'Hands-on execution on real project flows builds durable confidence.' },
  { icon: '🎤', title: 'Mock Interviews & Prep', text: 'Scenario-driven mocks, portfolio shaping, and behavioral coaching.' },
  { icon: '🌐', title: 'Strong Industry Network', text: 'Referrals and warm intros accelerate your placement outcomes.' },
  { icon: '📊', title: 'Employability Focus', text: 'Every activity aligned to tangible hiring signals employers validate.' },
];

const courses = [
  { icon: '📊', title: 'Clinical Data Management' },
  { icon: '💻', title: 'Clinical SAS Programming' },
  { icon: '🔬', title: 'Pharmacovigilance' },
  { icon: '📋', title: 'Regulatory Affairs' },
];

const ladder = [
  { step: 1, title: '🎓 Entry Point: Student', text: 'Arrive with curiosity and ambition—commit to a professional transformation.' },
  { step: 2, title: '📚 Trained Professional', text: 'Structured curriculum + real artifacts. Build a coherent, reviewable portfolio.' },
  { step: 3, title: '💼 Industry-Ready Candidate', text: 'Apply in simulated / mentored environments. Close confidence + skill gaps.' },
  { step: 4, title: '✅ Placed Professional', text: 'Leverage referrals, targeted prep, and narrative framing to land offers.' },
  { step: 5, title: '⭐ Growing Expert', text: 'Keep compounding: alumni network, continued learning, peer signal boosting.' },
];

export default function AboutContentClient() {
  useEffect(() => {
    const btn = document.getElementById('scrollTopBtn');
    if (!btn) return;
    const onScroll = () => {
      if (window.scrollY > 300) btn.classList.add('opacity-100', 'pointer-events-auto', 'translate-y-0');
      else btn.classList.remove('opacity-100', 'pointer-events-auto', 'translate-y-0');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <main className="relative min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100">
      <section className="relative overflow-hidden flex items-center justify-center text-center py-28 md:py-36 bg-gradient-to-br from-indigo-500 via-indigo-600 to-violet-600 dark:from-indigo-600 dark:via-violet-700 dark:to-fuchsia-700">
        <div className="absolute inset-0 opacity-60 [mask-image:radial-gradient(circle_at_50%_50%,white,transparent_70%)]">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.12),transparent_60%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.15),transparent_60%)] animate-[pulse_12s_ease-in-out_infinite]" />
        </div>
        <div className="relative px-6 max-w-4xl">
          <motion.h1 initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }} className="text-4xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow-lg">Welcome to FirstPharmaJob</motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: 'easeOut', delay: 0.15 }} className="mt-6 text-lg md:text-xl text-indigo-50/90 leading-relaxed max-w-3xl mx-auto">Where your pharmaceutical career takes flight—we don’t just train, we build trajectories that endure.</motion.p>
        </div>
      </section>

      <section className="relative max-w-6xl mx-auto px-6 py-20">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fade} custom={0} className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">Who We Are</h2>
          <p className="mt-6 text-slate-600 dark:text-slate-300 text-base md:text-lg max-w-4xl mx-auto leading-relaxed">FirstPharmaJob (founded Jan 2025) bridges academic learning and operational industry execution—turning motivated learners into evidence-driven contributors.</p>
        </motion.div>
        <motion.div variants={staggerParent(0.12)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {courses.map((c, i) => (
            <motion.div key={c.title} variants={fade} custom={0.05 + i * 0.05} className="relative group rounded-2xl p-6 bg-gradient-to-br from-indigo-500 to-violet-600 text-white shadow-lg shadow-indigo-500/30 hover:shadow-indigo-600/40 transition-transform hover:-translate-y-2 focus-within:-translate-y-2 outline-none">
              <div className="text-4xl mb-4" aria-hidden="true">{c.icon}</div>
              <h3 className="text-sm font-semibold tracking-wide uppercase">{c.title}</h3>
              <span className="absolute inset-0 rounded-2xl ring-0 ring-indigo-300/40 focus-visible:ring-4" />
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="relative max-w-6xl mx-auto px-6 pb-10">
        <div className="grid gap-10 md:gap-12 md:grid-cols-2">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fade} custom={0.05} className="rounded-2xl p-8 bg-gradient-to-br from-slate-100 to-indigo-50 dark:from-slate-800 dark:to-slate-900 border border-slate-200/60 dark:border-slate-700/60 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-semibold mb-5 text-indigo-600 dark:text-indigo-300">🎯 Our Vision</h3>
            <p className="leading-relaxed text-slate-600 dark:text-slate-300">To be the most trusted catalyst in transforming learners into industry-ready research professionals—anchored in scientific rigor, data fluency and translational relevance.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fade} custom={0.1} className="rounded-2xl p-8 bg-gradient-to-br from-slate-100 to-indigo-50 dark:from-slate-800 dark:to-slate-900 border border-slate-200/60 dark:border-slate-700/60 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-semibold mb-5 text-indigo-600 dark:text-indigo-300">🚀 Our Mission</h3>
            <ul className="space-y-3 text-slate-600 dark:text-slate-300 text-sm md:text-base">
              <li className="pl-6 relative"><span className="absolute left-0">✓</span> Industry-aligned execution beyond theory.</li>
              <li className="pl-6 relative"><span className="absolute left-0">✓</span> Active practitioner mentorship + narrative coaching.</li>
              <li className="pl-6 relative"><span className="absolute left-0">✓</span> Portfolio & evidence packaging for decision readiness.</li>
              <li className="pl-6 relative"><span className="absolute left-0">✓</span> Structured career scaffolding—not transactional training.</li>
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="relative max-w-5xl mx-auto px-6 py-24">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center text-indigo-600 dark:text-indigo-300">Your Career Ladder</h2>
        <p className="mt-4 text-center text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Follow a compounding path—from new learner to durable expert signal.</p>
        <div className="relative mt-16 pl-8 sm:pl-12 before:absolute before:top-0 before:bottom-0 before:left-4 sm:before:left-6 before:w-px before:bg-gradient-to-b before:from-indigo-400 before:to-violet-500">
          <ol className="space-y-16">
            {ladder.map((item, i) => (
              <motion.li key={item.step} initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.55, ease: 'easeOut', delay: i * 0.05 }} className="relative">
                <div className="absolute -left-2 sm:-left-3 top-1 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 text-white flex items-center justify-center font-bold shadow-md shadow-indigo-500/40 ring-4 ring-white dark:ring-slate-900">{item.step}</div>
                <div className="ml-8 sm:ml-14 bg-white dark:bg-slate-900/60 backdrop-blur-sm border border-slate-200/60 dark:border-slate-700/60 rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow">
                  <h4 className="font-semibold text-indigo-600 dark:text-indigo-300 mb-2 text-base md:text-lg">{item.title}</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed">{item.text}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      <section className="relative max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">Why Choose FirstPharmaJob?</h2>
        <motion.div className="mt-14 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" variants={staggerParent(0.12)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
          {featureItems.map((f, i) => (
            <motion.div key={f.title} variants={fade} custom={0.05 + i * 0.05} className="group relative rounded-2xl p-6 bg-white dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-700/60 shadow-[0_4px_18px_-4px_rgba(0,0,0,0.08)] hover:shadow-[0_6px_28px_-4px_rgba(0,0,0,0.14)] transition-all">
              <span className="text-4xl mb-4 block" aria-hidden="true">{f.icon}</span>
              <h3 className="font-semibold text-indigo-600 dark:text-indigo-300 mb-2 text-sm md:text-base tracking-wide uppercase">{f.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-xs md:text-sm leading-relaxed">{f.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="relative max-w-6xl mx-auto px-6 py-24">
        <div className="rounded-3xl bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 text-white p-10 md:p-16 shadow-lg shadow-indigo-900/30">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center">What Makes Us Different?</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl bg-white/15 border border-white/25 backdrop-blur-md p-6 md:p-8 transition hover:bg-white/25">
              <h3 className="text-xl font-semibold mb-4">❌ Traditional Training Centers</h3>
              <p className="text-sm md:text-base leading-relaxed">Teach theory → Give certificate → Goodbye</p>
            </div>
            <div className="rounded-2xl bg-white/15 border border-white/25 backdrop-blur-md p-6 md:p-8 transition hover:bg-white/25">
              <h3 className="text-xl font-semibold mb-4">✅ FirstPharmaJob</h3>
              <p className="text-sm md:text-base leading-relaxed">Teach practical skills → Provide real experience → Offer internships → Conduct mock interviews → Make referrals → Support growth → Maintain community</p>
            </div>
          </div>
          <p className="mt-10 font-semibold text-center text-base md:text-lg">We are invested in your success because your success amplifies ours.</p>
        </div>
      </section>

      <section className="relative max-w-5xl mx-auto px-6 pb-32">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-indigo-600 via-indigo-700 to-violet-700 text-center p-12 md:p-20">
          <div className="absolute inset-0 opacity-40 [mask-image:radial-gradient(circle_at_center,white,transparent_70%)] animate-[spin_18s_linear_infinite] bg-[radial-gradient(circle,rgba(255,255,255,0.12)_0%,transparent_70%)]" />
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">Join the FirstPharmaJob Family</h2>
            <p className="mt-6 text-indigo-100 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">You are not just enrolling—you are joining a durable network of ambitious peers, mentors and operators shaping the future of clinical development.</p>
            <a href="/contact" className="inline-block mt-10 rounded-full bg-white text-indigo-700 font-semibold px-10 py-4 text-sm md:text-base shadow-lg shadow-indigo-500/30 hover:shadow-indigo-600/40 hover:-translate-y-1 transition">Start Your Journey Today</a>
          </div>
        </div>
      </section>

      <button id="scrollTopBtn" aria-label="Scroll to top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-5 right-5 z-50 w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 text-white shadow-lg shadow-indigo-500/40 flex items-center justify-center text-xl font-bold opacity-0 pointer-events-none translate-y-4 transition-all focus:outline-none focus-visible:ring-4 ring-indigo-300/50">↑</button>
    </main>
  );
}
