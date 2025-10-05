"use client";

import React from 'react';
import { motion } from 'framer-motion';
import AnalogyIntro from '../common/AnalogyIntro';

const ManufacturingSection: React.FC = () => (
  <motion.div
    role="region"
    aria-labelledby="manufacturing-heading"
    id="manufacturing"
    className="relative min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-rose-100 dark:from-[#1f1a2d] dark:via-[#2d1f33] dark:to-[#3a1f2d] py-20 md:py-28"
    initial={{ opacity: 1 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0 }}
  >
    <div className="max-w-6xl mx-auto px-6">
      <div className="text-center mb-14">
        <h2 id="manufacturing-heading" className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-800 dark:text-slate-100">Manufacturing: Scaling for Success</h2>
        <p className="mt-4 text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">From lab bench to global production: scaling pharmaceutical manufacturing requires precision, quality, and expertise. Just as we prepare you for professional success at scale.</p>
        <div className="mt-6 max-w-4xl mx-auto">
          <AnalogyIntro
            accent="purple"
            titleA="In Development"
            textA="Product scales from small batches to global manufacturing with rigorous quality control and regulatory compliance."
            titleB="At FPJ"
            textB="Students scale from learning to professional readiness through mock interviews, CV optimization, and industry networking."
          />
        </div>
      </div>

      {/* Manufacturing Process */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
        <motion.div
          className="group relative p-8 rounded-3xl bg-white/80 dark:bg-slate-900/60 backdrop-blur-sm border border-purple-200 dark:border-purple-800/30 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-violet-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center text-white text-2xl shadow-lg">
              🏭
            </div>
            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4 text-center">Scale-Up Process</h3>
            <ul className="space-y-3 text-slate-600 dark:text-slate-300">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0"></span>
                <span>Process optimization</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0"></span>
                <span>Equipment validation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0"></span>
                <span>Supply chain establishment</span>
              </li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          className="group relative p-8 rounded-3xl bg-white/80 dark:bg-slate-900/60 backdrop-blur-sm border border-pink-200 dark:border-pink-800/30 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-rose-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-pink-500 to-pink-600 flex items-center justify-center text-white text-2xl shadow-lg">
              🎯
            </div>
            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4 text-center">Quality Control</h3>
            <ul className="space-y-3 text-slate-600 dark:text-slate-300">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-pink-500 mt-2 flex-shrink-0"></span>
                <span>Good Manufacturing Practices</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-pink-500 mt-2 flex-shrink-0"></span>
                <span>Batch testing protocols</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-pink-500 mt-2 flex-shrink-0"></span>
                <span>Continuous monitoring</span>
              </li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          className="group relative p-8 rounded-3xl bg-white/80 dark:bg-slate-900/60 backdrop-blur-sm border border-rose-200 dark:border-rose-800/30 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 md:col-span-2 lg:col-span-1"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 to-red-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-rose-500 to-rose-600 flex items-center justify-center text-white text-2xl shadow-lg">
              🌍
            </div>
            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4 text-center">Global Distribution</h3>
            <ul className="space-y-3 text-slate-600 dark:text-slate-300">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 flex-shrink-0"></span>
                <span>Multi-site production</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 flex-shrink-0"></span>
                <span>Cold chain logistics</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 flex-shrink-0"></span>
                <span>Regional compliance</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>

      {/* FPJ Professional Preparation */}
      <div className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-white/90 to-purple-50/90 dark:from-slate-900/70 dark:to-purple-950/70 backdrop-blur-sm border border-purple-200 dark:border-purple-800/30 shadow-xl mb-16">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-3xl"></div>
        <div className="relative">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-100 mb-8 text-center">Your Professional Manufacturing at FPJ</h3>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-violet-600 flex items-center justify-center text-white text-2xl">
                🎤
              </div>
              <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-3">Mock Interviews</h4>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">Practice with industry professionals and get real-time feedback</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-pink-500 to-rose-600 flex items-center justify-center text-white text-2xl">
                📄
              </div>
              <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-3">CV Optimization</h4>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">Professional resume building tailored for pharmaceutical industry</p>
            </div>
            
            <div className="text-center md:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-rose-500 to-red-600 flex items-center justify-center text-white text-2xl">
                🤝
              </div>
              <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-3">Industry Networking</h4>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">Connect with pharmaceutical professionals and potential employers</p>
            </div>
          </div>
        </div>
      </div>

      {/* Professional Readiness Showcase */}
      <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-3xl p-8 md:p-12 border border-purple-200/50 dark:border-purple-800/30">
        <h3 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-100 mb-8 text-center">Manufacturing Your Professional Success</h3>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-12">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-black text-purple-600 dark:text-purple-400 mb-2">100+</div>
            <div className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-1">Mock Interviews</div>
            <div className="text-xs text-slate-600 dark:text-slate-300">Practice sessions conducted</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-black text-pink-600 dark:text-pink-400 mb-2">95%</div>
            <div className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-1">CV Success Rate</div>
            <div className="text-xs text-slate-600 dark:text-slate-300">Interview call rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-black text-rose-600 dark:text-rose-400 mb-2">50+</div>
            <div className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-1">Industry Mentors</div>
            <div className="text-xs text-slate-600 dark:text-slate-300">Available for guidance</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-black text-violet-600 dark:text-violet-400 mb-2">85%</div>
            <div className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-1">Placement Rate</div>
            <div className="text-xs text-slate-600 dark:text-slate-300">Within 6 months</div>
          </div>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-600 text-white font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
            <span>🏭 Start Your Professional Manufacturing</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

export default ManufacturingSection;