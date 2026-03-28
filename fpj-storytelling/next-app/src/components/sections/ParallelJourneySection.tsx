'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface JourneyPhase {
  phase: number;
  title: string;
  icon: string;
  duration: string;
  narrative: string;
  keyPoints: { drug: string; student: string }[];
  connection: string;
}

const phases: JourneyPhase[] = [
  {
    phase: 1,
    title: 'Discovery & Selection',
    icon: '🔬',
    duration: '',
    narrative: `Molecules are discovered in labs. Students are selected from applications. Both enter a rigorous pipeline based on potential.`,
    keyPoints: [
      { drug: 'Molecules discovered in labs', student: 'Students selected from applications' },
      { drug: 'Promising candidates identified', student: 'High-potential candidates chosen' },
      { drug: 'Entry into development pipeline', student: 'Entry into training pipeline' }
    ],
    connection: 'Discovery meets selection - the beginning of both journeys.'
  },
  {
    phase: 2,
    title: 'Foundation & Testing',
    icon: '🧪',
    duration: '',
    narrative: `Molecules undergo lab testing. Students complete foundation courses. Both build core competencies before real-world application.`,
    keyPoints: [
      { drug: 'Chemical properties tested', student: 'Pharma fundamentals taught' },
      { drug: 'Safety profiles established', student: 'Core skills developed' },
      { drug: 'Lab validation completed', student: 'Coursework completed' }
    ],
    connection: 'Foundation knowledge proves readiness.'
  },
  {
    phase: 3,
    title: 'Clinical & Real Application',
    icon: '🧬',
    duration: '',
    narrative: `Molecules tested in clinical trials. Students tested in real industry projects. Performance is measured in both.`,
    keyPoints: [
      { drug: 'Clinical trials run (Phase I, II, III)', student: 'Industry projects assigned' },
      { drug: 'Efficacy and safety verified', student: 'Skills and capability verified' },
      { drug: 'Data collected systematically', student: 'Performance documented' }
    ],
    connection: 'Real testing proves real capability.'
  },
  {
    phase: 4,
    title: 'Regulatory & Certification',
    icon: '📋',
    duration: '',
    narrative: `Molecules get regulatory approval. Students receive industry certifications. Both earn official authorization to proceed.`,
    keyPoints: [
      { drug: 'Regulatory dossier approved', student: 'Certifications awarded' },
      { drug: 'Official market authorization', student: 'Official career authorization' },
      { drug: 'Compliance verified', student: 'Competency verified' }
    ],
    connection: 'Official approval opens new doors.'
  },
  {
    phase: 5,
    title: 'Manufacturing & Launch',
    icon: '⚗️',
    duration: '',
    narrative: `Molecules manufactured at scale. Students launch projects or careers. Both move from approval to real-world impact.`,
    keyPoints: [
      { drug: 'Scaled manufacturing begins', student: 'Career launches or projects begin' },
      { drug: 'Quality control continuous', student: 'Performance support ongoing' },
      { drug: 'Market distribution starts', student: 'Global career network activated' }
    ],
    connection: 'Manufacturing and deployment create real-world impact.'
  },
  {
    phase: 6,
    title: 'Pharmacovigilance & Monitoring',
    icon: '👁️',
    duration: '',
    narrative: `Drugs monitored post-launch for safety. Professionals monitored for career growth. Both require ongoing oversight and support.`,
    keyPoints: [
      { drug: 'Adverse effects tracked continuously', student: 'Career performance tracked' },
      { drug: 'Safety data reported to regulators', student: 'Growth feedback provided regularly' },
      { drug: 'Lifetime patient safety ensured', student: 'Lifetime career support ensured' }
    ],
    connection: 'Monitoring never stops - safety and success require vigilance.'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.68, -0.55, 0.265, 1.55] },
  },
};

export default function ParallelJourneySection() {
  return (
    <section className="relative bg-gradient-to-b from-white via-slate-50 to-white py-20 px-6 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-indigo-100/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-emerald-100/20 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <span className="text-sm font-bold tracking-widest text-indigo-600 uppercase">The Parallel Story</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Molecules & Students:<br />
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
              Same Journey, Different Paths
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            From discovery to monitoring, molecules and trained professionals follow parallel rigorous pathways to impact.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {phases.map((phase, idx) => (
            <motion.div key={phase.phase} variants={itemVariants} className="relative">
              {/* Connector Line */}
              {idx !== phases.length - 1 && (
                <div className="absolute left-8 top-24 w-1 h-20 bg-gradient-to-b from-indigo-300 to-transparent" />
              )}

              <div className="grid md:grid-cols-12 gap-8 items-start">
                {/* Phase Number & Icon */}
                <div className="md:col-span-2 flex flex-col items-center">
                  <div className="relative mb-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-emerald-500 flex items-center justify-center text-2xl shadow-lg">
                      {phase.icon}
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold">
                      {phase.phase}
                    </div>
                  </div>
                  <div className="text-xs font-bold text-slate-500 tracking-widest uppercase text-center">
                    {phase.duration && phase.duration}
                  </div>
                </div>

                {/* Content */}
                <div className="md:col-span-10 bg-white rounded-xl border border-slate-200 p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
                  {/* Phase Title */}
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{phase.title}</h3>

                  {/* Main Narrative - INTEGRATED STORY */}
                  <p className="text-slate-700 leading-relaxed mb-6 text-lg">
                    {phase.narrative}
                  </p>

                  {/* Key Points Grid */}
                  <div className="grid md:grid-cols-3 gap-6">
                    {phase.keyPoints.map((point, i) => (
                      <div key={i} className="border-l-4 border-indigo-300 pl-4">
                        <div className="mb-3">
                          <div className="text-xs font-bold text-indigo-600 uppercase tracking-wide mb-1">💊 Drug Journey</div>
                          <p className="text-sm text-slate-600">{point.drug}</p>
                        </div>
                        <div>
                          <div className="text-xs font-bold text-emerald-600 uppercase tracking-wide mb-1">🎓 Student Path</div>
                          <p className="text-sm text-slate-600">{point.student}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Connection Highlight */}
                  <div className="mt-6 pt-6 border-t border-slate-100">
                    <div className="inline-flex items-start gap-2 text-sm">
                      <span className="text-indigo-600 font-bold mt-0.5">🔗</span>
                      <p className="text-slate-600 italic">{phase.connection}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-slate-700 mb-6">
            Ready to join a training program built on pharmaceutical rigor?
          </p>
          <a
            href="https://firstpharmajob.vercel.app/student-partner"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-emerald-600 hover:from-indigo-700 hover:to-emerald-700 text-white font-bold px-8 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg"
          >
            Start Your Parallel Journey
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
