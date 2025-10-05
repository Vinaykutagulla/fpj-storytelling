"use client";

import React from 'react';
import { motion } from 'framer-motion';
import AnalogyIntro from '../common/AnalogyIntro';

const ClinicalSection: React.FC = () => (
  <motion.div
    role="region"
    aria-labelledby="clinical-heading"
    id="clinical"
    className="relative min-h-screen bg-gradient-to-br from-indigo-50 via-violet-50 to-purple-100 dark:from-[#1b1830] dark:via-[#211c3d] dark:to-[#241a46] py-20 md:py-28"
    initial={{ opacity: 1 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0 }}
  >
    <div className="max-w-6xl mx-auto px-6">
      <div className="text-center mb-14">
        <h2 id="clinical-heading" className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-800 dark:text-slate-100">Clinical: First Human Tests</h2>
        <p className="mt-4 text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">After years of lab work, the moment of truth arrives: testing in real people through Phase I–III. It's careful, methodical, and where pharmaceutical careers are truly made.</p>
        <div className="mt-6 max-w-4xl mx-auto">
          <AnalogyIntro
            accent="indigo"
            titleA="In Development"
            textA="Candidate is exposed to staged real‑world complexity; signal consistency and risk profile are monitored."
            titleB="At FPJ"
            textB="Students apply skills to industry‑like projects; performance and readiness are assessed through guided challenges."
          />
        </div>
      </div>

      {/* Clinical Trial Phases */}
      <div className="grid gap-8 md:grid-cols-3 mb-16">
        <motion.div
          className="group relative p-8 rounded-3xl bg-white/80 dark:bg-slate-900/60 backdrop-blur-sm border border-indigo-200 dark:border-indigo-800/30 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-violet-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-indigo-500 to-indigo-600 flex items-center justify-center text-white font-bold text-xl shadow-lg">
              I
            </div>
            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4 text-center">Phase I: Safety First</h3>
            <ul className="space-y-3 text-slate-600 dark:text-slate-300">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 flex-shrink-0"></span>
                <span>Small group of healthy volunteers</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 flex-shrink-0"></span>
                <span>Determine safe dosage range</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 flex-shrink-0"></span>
                <span>Identify side effects</span>
              </li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          className="group relative p-8 rounded-3xl bg-white/80 dark:bg-slate-900/60 backdrop-blur-sm border border-violet-200 dark:border-violet-800/30 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-violet-500 to-violet-600 flex items-center justify-center text-white font-bold text-xl shadow-lg">
              II
            </div>
            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4 text-center">Phase II: Efficacy</h3>
            <ul className="space-y-3 text-slate-600 dark:text-slate-300">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-500 mt-2 flex-shrink-0"></span>
                <span>100-300 people with condition</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-500 mt-2 flex-shrink-0"></span>
                <span>Test if treatment works</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-500 mt-2 flex-shrink-0"></span>
                <span>Further safety monitoring</span>
              </li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          className="group relative p-8 rounded-3xl bg-white/80 dark:bg-slate-900/60 backdrop-blur-sm border border-purple-200 dark:border-purple-800/30 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl shadow-lg">
              III
            </div>
            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4 text-center">Phase III: Confirmation</h3>
            <ul className="space-y-3 text-slate-600 dark:text-slate-300">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0"></span>
                <span>1,000-3,000 participants</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0"></span>
                <span>Compare to existing treatments</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0"></span>
                <span>Monitor adverse reactions</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>

      {/* FPJ Student Journey */}
      <div className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-white/90 to-indigo-50/90 dark:from-slate-900/70 dark:to-indigo-950/70 backdrop-blur-sm border border-indigo-200 dark:border-indigo-800/30 shadow-xl">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-violet-500/5 rounded-3xl"></div>
        <div className="relative">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-100 mb-8 text-center">Your Clinical Phase at FPJ</h3>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-indigo-500 to-violet-600 flex items-center justify-center text-white text-2xl">
                🎯
              </div>
              <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-3">Real-World Projects</h4>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">Apply your pharmaceutical knowledge to industry-like scenarios and case studies</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-violet-500 to-purple-600 flex items-center justify-center text-white text-2xl">
                🔍
              </div>
              <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-3">Skill Assessment</h4>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">Your performance is evaluated through guided challenges and feedback</p>
            </div>
            
            <div className="text-center md:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center text-white text-2xl">
                📈
              </div>
              <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-3">Readiness Tracking</h4>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">Monitor your progress and readiness for pharmaceutical industry roles</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

export default ClinicalSection;