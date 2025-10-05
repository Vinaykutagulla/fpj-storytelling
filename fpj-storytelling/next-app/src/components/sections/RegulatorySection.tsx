"use client";

import React from 'react';
import { motion } from 'framer-motion';
import AnalogyIntro from '../common/AnalogyIntro';

const RegulatorySection: React.FC = () => (
  <motion.div
    role="region"
    aria-labelledby="regulatory-heading"
    id="regulatory"
    className="relative min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-100 dark:from-[#0a2318] dark:via-[#0f2f23] dark:to-[#123a2e] py-20 md:py-28"
    initial={{ opacity: 1 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0 }}
  >
    <div className="max-w-6xl mx-auto px-6">
      <div className="text-center mb-14">
        <h2 id="regulatory-heading" className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-800 dark:text-slate-100">Regulatory: Getting Approval</h2>
        <p className="mt-4 text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">The final hurdle before reaching patients: regulatory approval. A rigorous process that validates safety and efficacy, much like how certification validates your professional readiness.</p>
        <div className="mt-6 max-w-4xl mx-auto">
          <AnalogyIntro
            accent="emerald"
            titleA="In Development"
            textA="Comprehensive documentation demonstrates safety and efficacy to regulatory authorities for market approval."
            titleB="At FPJ"
            textB="Portfolio demonstrates competency to employers; certification shows you've met industry standards."
          />
        </div>
      </div>

      {/* Regulatory Process */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
        <motion.div
          className="group relative p-8 rounded-3xl bg-white/80 dark:bg-slate-900/60 backdrop-blur-sm border border-emerald-200 dark:border-emerald-800/30 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 flex items-center justify-center text-white text-2xl shadow-lg">
              📋
            </div>
            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4 text-center">Documentation</h3>
            <ul className="space-y-3 text-slate-600 dark:text-slate-300">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 flex-shrink-0"></span>
                <span>Comprehensive trial data</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 flex-shrink-0"></span>
                <span>Manufacturing protocols</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 flex-shrink-0"></span>
                <span>Risk assessment reports</span>
              </li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          className="group relative p-8 rounded-3xl bg-white/80 dark:bg-slate-900/60 backdrop-blur-sm border border-teal-200 dark:border-teal-800/30 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-cyan-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-teal-500 to-teal-600 flex items-center justify-center text-white text-2xl shadow-lg">
              🔍
            </div>
            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4 text-center">Review Process</h3>
            <ul className="space-y-3 text-slate-600 dark:text-slate-300">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 flex-shrink-0"></span>
                <span>Expert panel evaluation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 flex-shrink-0"></span>
                <span>Rigorous safety assessment</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 flex-shrink-0"></span>
                <span>Benefit-risk analysis</span>
              </li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          className="group relative p-8 rounded-3xl bg-white/80 dark:bg-slate-900/60 backdrop-blur-sm border border-cyan-200 dark:border-cyan-800/30 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 md:col-span-2 lg:col-span-1"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-cyan-500 to-cyan-600 flex items-center justify-center text-white text-2xl shadow-lg">
              ✅
            </div>
            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4 text-center">Approval</h3>
            <ul className="space-y-3 text-slate-600 dark:text-slate-300">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 flex-shrink-0"></span>
                <span>Market authorization</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 flex-shrink-0"></span>
                <span>Post-market monitoring</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 flex-shrink-0"></span>
                <span>Ongoing compliance</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>

      {/* FPJ Certification Journey */}
      <div className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-white/90 to-emerald-50/90 dark:from-slate-900/70 dark:to-emerald-950/70 backdrop-blur-sm border border-emerald-200 dark:border-emerald-800/30 shadow-xl">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 rounded-3xl"></div>
        <div className="relative">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-100 mb-8 text-center">Your Certification Journey at FPJ</h3>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 flex items-center justify-center text-white text-2xl">
                📚
              </div>
              <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-3">Portfolio Building</h4>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">Document your projects, case studies, and practical pharmaceutical knowledge</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-teal-500 to-cyan-600 flex items-center justify-center text-white text-2xl">
                🎯
              </div>
              <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-3">Competency Assessment</h4>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">Rigorous evaluation of your pharmaceutical industry readiness</p>
            </div>
            
            <div className="text-center md:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-white text-2xl">
                🏆
              </div>
              <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-3">Industry Certification</h4>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">Official recognition that validates your pharmaceutical career readiness</p>
            </div>
          </div>

          {/* Certification Benefits */}
          <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-2xl p-8 border border-emerald-200/50 dark:border-emerald-800/30">
            <h4 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-6 text-center">Why Employers Trust FPJ Certification</h4>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white text-sm font-bold">
                  ✓
                </div>
                <div>
                  <h5 className="font-semibold text-slate-800 dark:text-slate-100 mb-1">Industry-Aligned Curriculum</h5>
                  <p className="text-sm text-slate-600 dark:text-slate-300">Skills mapped directly to pharmaceutical industry needs</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center text-white text-sm font-bold">
                  ✓
                </div>
                <div>
                  <h5 className="font-semibold text-slate-800 dark:text-slate-100 mb-1">Rigorous Assessment</h5>
                  <p className="text-sm text-slate-600 dark:text-slate-300">Comprehensive evaluation ensures genuine competency</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center text-white text-sm font-bold">
                  ✓
                </div>
                <div>
                  <h5 className="font-semibold text-slate-800 dark:text-slate-100 mb-1">Employer Recognition</h5>
                  <p className="text-sm text-slate-600 dark:text-slate-300">Trusted by leading pharmaceutical companies</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center text-white text-sm font-bold">
                  ✓
                </div>
                <div>
                  <h5 className="font-semibold text-slate-800 dark:text-slate-100 mb-1">Career Confidence</h5>
                  <p className="text-sm text-slate-600 dark:text-slate-300">Demonstrates your commitment to pharmaceutical excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

export default RegulatorySection;