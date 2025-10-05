"use client";

import React from 'react';
import { motion } from 'framer-motion';
import AnalogyIntro from '../common/AnalogyIntro';

const LaunchSection: React.FC = () => (
  <motion.div
    role="region"
    aria-labelledby="launch-heading"
    id="launch"
    className="relative min-h-screen bg-gradient-to-br from-rose-50 via-orange-50 to-amber-100 dark:from-[#2d1b1b] dark:via-[#3d251b] dark:to-[#4d2f1b] py-20 md:py-28"
    initial={{ opacity: 1 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0 }}
  >
    <div className="max-w-6xl mx-auto px-6">
      <div className="text-center mb-14">
        <h2 id="launch-heading" className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-800 dark:text-slate-100">Launch: Reaching the Market</h2>
        <p className="mt-4 text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">After years of development, the moment arrives: bringing life-saving treatments to patients worldwide. Just as we help launch your pharmaceutical career into the global marketplace.</p>
        <div className="mt-6 max-w-4xl mx-auto">
          <AnalogyIntro
            accent="orange"
            titleA="In Development"
            textA="Product reaches patients worldwide through strategic market entry, distribution networks, and ongoing support."
            titleB="At FPJ"
            textB="Students reach global pharma careers through MNC referrals, placement support, and ongoing mentorship."
          />
        </div>
      </div>

      {/* Launch Strategy Components */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
        <motion.div
          className="group relative p-8 rounded-3xl bg-white/80 dark:bg-slate-900/60 backdrop-blur-sm border border-rose-200 dark:border-rose-800/30 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 to-pink-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-rose-500 to-rose-600 flex items-center justify-center text-white text-2xl shadow-lg">
              🚀
            </div>
            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4 text-center">Market Entry</h3>
            <ul className="space-y-3 text-slate-600 dark:text-slate-300">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 flex-shrink-0"></span>
                <span>Strategic market positioning</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 flex-shrink-0"></span>
                <span>Global distribution networks</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 flex-shrink-0"></span>
                <span>Healthcare provider engagement</span>
              </li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          className="group relative p-8 rounded-3xl bg-white/80 dark:bg-slate-900/60 backdrop-blur-sm border border-orange-200 dark:border-orange-800/30 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-amber-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center text-white text-2xl shadow-lg">
              🌍
            </div>
            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4 text-center">Global Reach</h3>
            <ul className="space-y-3 text-slate-600 dark:text-slate-300">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0"></span>
                <span>International market expansion</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0"></span>
                <span>Regulatory compliance worldwide</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0"></span>
                <span>Cultural adaptation strategies</span>
              </li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          className="group relative p-8 rounded-3xl bg-white/80 dark:bg-slate-900/60 backdrop-blur-sm border border-amber-200 dark:border-amber-800/30 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 md:col-span-2 lg:col-span-1"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-yellow-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 flex items-center justify-center text-white text-2xl shadow-lg">
              📈
            </div>
            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4 text-center">Success Metrics</h3>
            <ul className="space-y-3 text-slate-600 dark:text-slate-300">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0"></span>
                <span>Patient outcomes tracking</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0"></span>
                <span>Market penetration analysis</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0"></span>
                <span>Long-term impact assessment</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>

      {/* FPJ Career Launch */}
      <div className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-white/90 to-rose-50/90 dark:from-slate-900/70 dark:to-rose-950/70 backdrop-blur-sm border border-rose-200 dark:border-rose-800/30 shadow-xl mb-16">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 to-orange-500/5 rounded-3xl"></div>
        <div className="relative">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-100 mb-8 text-center">Your Career Launch with FPJ</h3>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-rose-500 to-pink-600 flex items-center justify-center text-white text-2xl">
                🎯
              </div>
              <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-3">MNC Referrals</h4>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">Direct connections to leading multinational pharmaceutical companies</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-orange-500 to-amber-600 flex items-center justify-center text-white text-2xl">
                🌍
              </div>
              <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-3">Global Opportunities</h4>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">Access to pharmaceutical careers across multiple countries and markets</p>
            </div>
            
            <div className="text-center md:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-amber-500 to-yellow-600 flex items-center justify-center text-white text-2xl">
                🚀
              </div>
              <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-3">Career Acceleration</h4>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">Fast-track your entry into the pharmaceutical industry</p>
            </div>
          </div>
        </div>
      </div>

      {/* MNC Partnership Vision */}
      <div className="bg-gradient-to-r from-rose-500/10 to-orange-500/10 rounded-3xl p-8 md:p-12 border border-rose-200/50 dark:border-rose-800/30">
        <h3 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-100 mb-8 text-center">Building Your Career Launch Platform</h3>
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 text-white text-sm font-bold shadow-lg">
            🚀 NEW INITIATIVE
          </div>
          <p className="mt-6 text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            We're launching a comprehensive career placement program to connect pharmaceutical talent with industry opportunities. Be among the first to benefit from our growing network.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 mb-12">
          <div className="text-center p-6 rounded-2xl bg-white/50 dark:bg-slate-900/30 border border-rose-200/30 dark:border-rose-800/20">
            <div className="text-2xl mb-3">🎯</div>
            <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-2">Target Companies</h4>
            <p className="text-slate-600 dark:text-slate-300 text-sm">Building relationships with leading pharmaceutical companies for direct placements</p>
          </div>
          <div className="text-center p-6 rounded-2xl bg-white/50 dark:bg-slate-900/30 border border-orange-200/30 dark:border-orange-800/20">
            <div className="text-2xl mb-3">🌍</div>
            <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-2">Global Reach</h4>
            <p className="text-slate-600 dark:text-slate-300 text-sm">Expanding network to offer pharmaceutical opportunities across multiple regions</p>
          </div>
          <div className="text-center p-6 rounded-2xl bg-white/50 dark:bg-slate-900/30 border border-amber-200/30 dark:border-amber-800/20">
            <div className="text-2xl mb-3">🤝</div>
            <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-2">Personal Support</h4>
            <p className="text-slate-600 dark:text-slate-300 text-sm">Dedicated guidance throughout your career launch journey</p>
          </div>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-rose-500 to-orange-600 text-white font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
            <span>🚀 Join Our Launch Program</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
          <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
            Be among the first to access our pharmaceutical career network
          </p>
        </div>
      </div>
    </div>
  </motion.div>
);

export default LaunchSection;