'use client';
import React from 'react';
import { motion } from 'framer-motion';

interface JourneyPhase {
  phase: number;
  title: string;
  icon: string;
  drugTitle: string;
  drugDescription: string;
  studentTitle: string;
  studentDescription: string;
  duration: string;
  keyActivities: string[];
  color: string;
  gradient: string;
}

const phases: JourneyPhase[] = [
  {
    phase: 1,
    title: 'Foundation Building',
    icon: '🧪',
    drugTitle: 'Preclinical: Lab to Learning',
    drugDescription: 'Molecules undergo battery of laboratory tests: pharmacology assays, toxicity studies, metabolism analysis, and formulation optimization.',
    studentTitle: 'FPJ Learning Foundation',
    studentDescription: 'Students undergo battery of targeted assignments: case studies, regulatory scenarios, data analysis projects, and industry simulations.',
    duration: '3-6 Years',
    keyActivities: ['Safety profile validation', 'Efficacy signal detection', 'Optimal formulation discovery'],
    color: 'from-purple-500 to-blue-500',
    gradient: 'from-purple-50 to-blue-50'
  },
  {
    phase: 2,
    title: 'Clinical Application',
    icon: '🧬',
    drugTitle: 'Clinical: First Human Tests',
    drugDescription: 'After years of lab work, the molecule is tested in real people through Phase I–III. It\'s careful, methodical, and where validation truly matters.',
    studentTitle: 'Real-World Projects',
    studentDescription: 'Students apply skills to industry-like projects; performance and readiness are assessed through guided challenges and practical scenarios.',
    duration: '2-3 Years',
    keyActivities: ['Phase I: Safety First', 'Phase II: Efficacy Testing', 'Phase III: Confirmation'],
    color: 'from-green-500 to-teal-500',
    gradient: 'from-green-50 to-teal-50'
  },
  {
    phase: 3,
    title: 'Regulatory Mastery',
    icon: '📋',
    drugTitle: 'Regulatory: Official Approval',
    drugDescription: 'All trial data, manufacturing processes, and safety profiles are compiled into comprehensive submission dossiers for regulatory review and approval.',
    studentTitle: 'Certification Process',
    studentDescription: 'Students build complete professional portfolios demonstrating competency through structured projects and industry-recognized certifications.',
    duration: '1-2 Years',
    keyActivities: ['Dossier submission', 'Agency review', 'Market authorization'],
    color: 'from-orange-500 to-red-500',
    gradient: 'from-orange-50 to-red-50'
  },
  {
    phase: 4,
    title: 'Manufacturing Excellence',
    icon: '⚗️',
    drugTitle: 'Manufacturing: Perfect Formulation',
    drugDescription: 'Precise manufacturing transforms approved formulations into millions of high-quality doses through controlled processes and rigorous quality checks.',
    studentTitle: 'Student Formulation',
    studentDescription: 'We formulate students with right skills, refine through real projects, stabilize confidence, and pack them job-ready for the pharmaceutical market.',
    duration: 'Ongoing',
    keyActivities: ['Skills development', 'Real-time refinement', 'Confidence stabilization'],
    color: 'from-indigo-500 to-purple-500',
    gradient: 'from-indigo-50 to-purple-50'
  },
  {
    phase: 5,
    title: 'Market Launch',
    icon: '🚀',
    drugTitle: 'Launch: Reaching the Market',
    drugDescription: 'Product reaches patients worldwide through strategic market entry, distribution networks, and ongoing support for maximum impact.',
    studentTitle: 'Career Launch',
    studentDescription: 'Students reach global pharma careers through MNC referrals, placement support, and ongoing mentorship in their professional journey.',
    duration: 'Lifetime',
    keyActivities: ['MNC referrals', 'Global opportunities', 'Career acceleration'],
    color: 'from-pink-500 to-rose-500',
    gradient: 'from-pink-50 to-rose-50'
  }
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function ParallelJourneySection() {
  return (
    <section className="relative py-20 px-6 bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-indigo-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-200/20 to-cyan-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Two Parallel Journeys
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Just as pharmaceuticals undergo rigorous testing and refinement before reaching patients, our students go through the same carefully structured journey to become industry-ready pharmaceutical professionals.
          </p>
        </motion.div>

        {/* Phases */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {phases.map((phase, index) => (
            <motion.div
              key={phase.phase}
              variants={item}
              className="group"
            >
              <div className="relative">
                {/* Connection line */}
                {index < phases.length - 1 && (
                  <div className="absolute left-1/2 top-full w-1 h-8 bg-gradient-to-b from-slate-300 to-transparent dark:from-slate-600 transform -translate-x-1/2"></div>
                )}

                {/* Main card */}
                <div className={`bg-gradient-to-br ${phase.gradient} dark:from-slate-800 dark:to-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all shadow-lg hover:shadow-xl`}>
                  {/* Phase header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`text-5xl p-4 bg-gradient-to-br ${phase.color} rounded-xl text-white`}>
                      {phase.icon}
                    </div>
                    <div>
                      <div className={`text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r ${phase.color}`}>
                        PHASE {phase.phase}
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{phase.title}</h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400">{phase.duration}</p>
                    </div>
                  </div>

                  {/* Two column layout: Drug vs Student */}
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Drug Development side */}
                    <div className="space-y-4 p-6 bg-white/50 dark:bg-slate-700/30 rounded-xl backdrop-blur-sm border border-slate-200/50 dark:border-slate-600/30">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-2xl">💊</span>
                        <h4 className="text-lg font-bold text-slate-900 dark:text-white">{phase.drugTitle}</h4>
                      </div>
                      <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                        {phase.drugDescription}
                      </p>
                      <div className="space-y-2 pt-2">
                        {phase.keyActivities.map((activity, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                            <span className="w-1.5 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></span>
                            {activity}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Student journey side */}
                    <div className="space-y-4 p-6 bg-white/50 dark:bg-slate-700/30 rounded-xl backdrop-blur-sm border border-slate-200/50 dark:border-slate-600/30">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-2xl">🎓</span>
                        <h4 className="text-lg font-bold text-slate-900 dark:text-white">{phase.studentTitle}</h4>
                      </div>
                      <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                        {phase.studentDescription}
                      </p>
                      <div className="space-y-2 pt-2">
                        {phase.keyActivities.map((activity, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                            <span className="w-1.5 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></span>
                            {activity}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Parallel insight */}
                  <div className="mt-6 p-4 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 dark:from-indigo-500/20 dark:to-purple-500/20 rounded-lg border border-indigo-200/50 dark:border-indigo-500/30">
                    <p className="text-sm text-slate-700 dark:text-slate-300 italic">
                      <span className="font-semibold text-indigo-600 dark:text-indigo-400">🔗 The Parallel:</span> Just as molecules must prove their safety and efficacy through rigorous testing before reaching patients, our students prove their pharmaceutical expertise through real-world projects before entering the industry.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Final message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 p-8 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl text-white text-center shadow-2xl"
        >
          <h3 className="text-2xl font-bold mb-3">Your Journey = Our Commitment</h3>
          <p className="text-lg leading-relaxed mb-4">
            Every student at FirstPharmaJob follows the same scientific rigor as pharmaceutical development. We don't just train you—we formulate, refine, validate, and launch you into the pharmaceutical industry with confidence and competence.
          </p>
          <p className="text-indigo-100">
            ✨ <span className="font-semibold">Quality assured. Industry ready. Career guaranteed.</span> ✨
          </p>
        </motion.div>
      </div>
    </section>
  );
}
