"use client";

import React from 'react';
import { motion } from 'framer-motion';
import AnalogyIntro from '../common/AnalogyIntro';

const RegulatorySection: React.FC = () => (
  <motion.div
    role="region"
    aria-labelledby="regulatory-heading"
    id="regulatory"
    className="relative min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-100 dark:from-[#0a2e0a] dark:via-[#0d3d0d] dark:to-[#0f2f1f] py-20 md:py-28"
    initial={{ opacity: 1 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0 }}
  >
    <div className="max-w-6xl mx-auto px-6">
      <div className="text-center mb-14">
        <h2 id="regulatory-heading" className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-800 dark:text-slate-100">Regulatory: Official Approval</h2>
        <p className="mt-4 text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">After successful clinical trials, drugs must pass rigorous regulatory review for safety and efficacy. This approval process validates that the medicine is ready for patients worldwide.</p>
        <div className="mt-6 max-w-4xl mx-auto">
          <AnalogyIntro
            accent="emerald"
            titleA="In Development"
            textA="All trial data, manufacturing processes, and safety profiles are compiled into comprehensive submission dossiers for regulatory review."
            titleB="At FPJ"
            textB="Students build complete professional portfolios demonstrating competency through structured projects and industry certifications."
          />
        </div>
      </div>

      {/* Regulatory Approval Process */}
      <div className="grid gap-8 md:grid-cols-3 mb-16">
        <motion.div
          className="group relative p-8 rounded-3xl bg-white/80 dark:bg-slate-900/60 backdrop-blur-sm border border-emerald-200 dark:border-emerald-800/30 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-green-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 flex items-center justify-center text-white font-bold text-xl shadow-lg">
              📋
            </div>
            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4 text-center">Dossier Submission</h3>
            <ul className="space-y-3 text-slate-600 dark:text-slate-300">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 flex-shrink-0"></span>
                <span>Complete clinical trial data</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 flex-shrink-0"></span>
                <span>Manufacturing quality docs</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 flex-shrink-0"></span>
                <span>Risk management plans</span>
              </li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          className="group relative p-8 rounded-3xl bg-white/80 dark:bg-slate-900/60 backdrop-blur-sm border border-green-200 dark:border-green-800/30 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-teal-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center text-white font-bold text-xl shadow-lg">
              🔍
            </div>
            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4 text-center">Agency Review</h3>
            <ul className="space-y-3 text-slate-600 dark:text-slate-300">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0"></span>
                <span>Scientific assessment team</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0"></span>
                <span>Benefit-risk evaluation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0"></span>
                <span>Advisory panel consultation</span>
              </li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          className="group relative p-8 rounded-3xl bg-white/80 dark:bg-slate-900/60 backdrop-blur-sm border border-teal-200 dark:border-teal-800/30 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-emerald-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-teal-500 to-teal-600 flex items-center justify-center text-white font-bold text-xl shadow-lg">
              ✅
            </div>
            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4 text-center">Market Authorization</h3>
            <ul className="space-y-3 text-slate-600 dark:text-slate-300">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 flex-shrink-0"></span>
                <span>Official approval granted</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 flex-shrink-0"></span>
                <span>Product labeling finalized</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 flex-shrink-0"></span>
                <span>Post-market surveillance</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>

      {/* FPJ Student Journey */}
      <div className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-white/90 to-emerald-50/90 dark:from-slate-900/70 dark:to-emerald-950/70 backdrop-blur-sm border border-emerald-200 dark:border-emerald-800/30 shadow-xl">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-green-500/5 rounded-3xl"></div>
        <div className="relative">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-100 mb-8 text-center">Your Regulatory Journey at FPJ</h3>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 flex items-center justify-center text-white text-2xl">
                📚
              </div>
              <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-3">Regulatory Knowledge</h4>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">Master submission requirements, compliance frameworks, and approval processes</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center text-white text-2xl">
                🎓
              </div>
              <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-3">Certification Process</h4>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">Complete structured assessments to earn industry-recognized credentials</p>
            </div>
            
            <div className="text-center md:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 flex items-center justify-center text-white text-2xl">
                ✨
              </div>
              <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-3">Professional Readiness</h4>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">Demonstrate competency that employers trust for pharmaceutical roles</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

export default RegulatorySection;