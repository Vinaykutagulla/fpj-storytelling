"use client";

import React from 'react';
import { motion } from 'framer-motion';
import AnalogyIntro from '../common/AnalogyIntro';

const ManufacturingSection: React.FC = () => (
  <motion.div
    role="region"
    aria-labelledby="manufacturing-heading"
    id="manufacturing"
    className="relative min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-100 dark:from-[#2c1905] dark:via-[#2d2109] dark:to-[#332000] py-20 md:py-28"
    initial={{ opacity: 1 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0 }}
  >
    <div className="max-w-6xl mx-auto px-6">
      <div className="text-center mb-14">
        <h2 id="manufacturing-heading" className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-800 dark:text-slate-100">
          Manufacturing: Perfect Formulation
        </h2>
        <p className="mt-4 text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
          Just as every medicine goes through a precise manufacturing process — selecting the right ingredients, ensuring the right dosage form, and being perfectly packed before it reaches the market — our students too go through a similar journey at FirstPharmaJob.
        </p>
        <div className="mt-6 max-w-4xl mx-auto">
          <AnalogyIntro
            accent="orange"
            titleA="In Development"
            textA="Precise manufacturing transforms approved formulations into millions of high-quality doses through controlled processes and rigorous quality checks."
            titleB="At FPJ"
            textB="We formulate students with right skills, refine through real projects, stabilize confidence, and pack them job-ready for the pharmaceutical market."
          />
        </div>
      </div>

      {/* Manufacturing Process */}
      <div className="grid gap-8 md:grid-cols-3 mb-16">
        <motion.div
          className="group relative p-8 rounded-3xl bg-white/80 dark:bg-slate-900/60 backdrop-blur-sm border border-orange-200 dark:border-orange-800/30 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-amber-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center text-white font-bold text-xl shadow-lg">
              ⚗️
            </div>
            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4 text-center">Raw Materials</h3>
            <ul className="space-y-3 text-slate-600 dark:text-slate-300">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0"></span>
                <span>Quality-tested ingredients</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0"></span>
                <span>Precise measurements</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0"></span>
                <span>Controlled environment</span>
              </li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          className="group relative p-8 rounded-3xl bg-white/80 dark:bg-slate-900/60 backdrop-blur-sm border border-amber-200 dark:border-amber-800/30 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-yellow-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 flex items-center justify-center text-white font-bold text-xl shadow-lg">
              🏭
            </div>
            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4 text-center">Scale Production</h3>
            <ul className="space-y-3 text-slate-600 dark:text-slate-300">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0"></span>
                <span>From lab to millions of doses</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0"></span>
                <span>Quality at every step</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0"></span>
                <span>Zero tolerance for error</span>
              </li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          className="group relative p-8 rounded-3xl bg-white/80 dark:bg-slate-900/60 backdrop-blur-sm border border-yellow-200 dark:border-yellow-800/30 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-orange-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-yellow-500 to-yellow-600 flex items-center justify-center text-white font-bold text-xl shadow-lg">
              📦
            </div>
            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4 text-center">Perfect Packaging</h3>
            <ul className="space-y-3 text-slate-600 dark:text-slate-300">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2 flex-shrink-0"></span>
                <span>Stability & protection</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2 flex-shrink-0"></span>
                <span>Patient information</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2 flex-shrink-0"></span>
                <span>Market-ready delivery</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>

      {/* Parallel Story Visual */}
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
        <div className="space-y-8">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center text-white font-bold shadow-lg">
              🏭
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">Drug Manufacturing</h3>
              <p className="text-slate-600 dark:text-slate-400">Precise formulation process</p>
            </div>
          </div>
          
          <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-orange-200/50 dark:border-orange-700/30 shadow-xl">
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
              <span className="font-semibold text-orange-700 dark:text-orange-300">Manufacturing transforms</span> approved formulations into millions of doses through 
              precise ingredient selection, controlled dosage forms, and perfect packaging for market delivery.
            </p>
            
            <div className="mt-6 grid md:grid-cols-3 gap-6 text-sm">
              <div className="rounded-xl bg-white dark:bg-slate-800/60 border border-orange-100 dark:border-orange-700/30 p-4">
                <p className="font-medium text-orange-700 dark:text-orange-300 mb-1">Ingredients</p>
                <span className="text-slate-700 dark:text-slate-300 font-medium">Quality-tested raw materials</span>
              </div>
              <div className="rounded-xl bg-white dark:bg-slate-800/60 border border-orange-100 dark:border-orange-700/30 p-4">
                <p className="font-medium text-orange-700 dark:text-orange-300 mb-1">Dosage</p>
                <span className="text-slate-700 dark:text-slate-300 font-medium">Precise formulation control</span>
              </div>
              <div className="rounded-xl bg-white dark:bg-slate-800/60 border border-orange-100 dark:border-orange-700/30 p-4">
                <p className="font-medium text-orange-700 dark:text-orange-300 mb-1">Packaging</p>
                <span className="text-slate-700 dark:text-slate-300 font-medium">Market-ready delivery</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-xl flex items-center justify-center text-white font-bold shadow-lg">
              🎓
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">FPJ Student Formulation</h3>
              <p className="text-slate-600 dark:text-slate-400">Professional development process</p>
            </div>
          </div>
          
          <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-amber-200/50 dark:border-amber-700/30 shadow-xl">
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
              <span className="font-semibold text-amber-700 dark:text-amber-300">We formulate students</span> with the right skills, 
              refine them through real-time projects, stabilize their confidence with mock interviews, and finally pack them — job-ready — for the pharmaceutical market.
            </p>
            
            <div className="mt-6 grid md:grid-cols-3 gap-6 text-sm">
              <div className="rounded-xl bg-white dark:bg-slate-800/60 border border-amber-100 dark:border-amber-700/30 p-4">
                <p className="font-medium text-amber-700 dark:text-amber-300 mb-1">Skills</p>
                <span className="text-slate-700 dark:text-slate-300 font-medium">Industry-relevant training</span>
              </div>
              <div className="rounded-xl bg-white dark:bg-slate-800/60 border border-amber-100 dark:border-amber-700/30 p-4">
                <p className="font-medium text-amber-700 dark:text-amber-300 mb-1">Projects</p>
                <span className="text-slate-700 dark:text-slate-300 font-medium">Real-time refinement</span>
              </div>
              <div className="rounded-xl bg-white dark:bg-slate-800/60 border border-amber-100 dark:border-amber-700/30 p-4">
                <p className="font-medium text-amber-700 dark:text-amber-300 mb-1">Confidence</p>
                <span className="text-slate-700 dark:text-slate-300 font-medium">Mock interview stabilization</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quality Assurance Analogy */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-orange-100 to-amber-100 dark:from-orange-900/40 dark:to-amber-900/40 mb-8">
          <span className="text-2xl mr-3">✨</span>
          <span className="text-orange-800 dark:text-orange-200 font-semibold text-lg">High-Quality Formulation</span>
        </div>
        <blockquote className="text-xl md:text-2xl font-medium text-slate-700 dark:text-slate-300 leading-relaxed max-w-4xl mx-auto">
          "Every student we produce is like a <span className="text-orange-700 dark:text-orange-300 font-semibold">high-quality formulation</span>, 
          designed to perform perfectly in the real-world pharmaceutical industry — with the right ingredients, proper dosage of skills, 
          and perfect packaging for professional success."
        </blockquote>
        <p className="mt-8 text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
          Our manufacturing process ensures every graduate meets industry standards with validated competencies, 
          proven through real projects and stabilized confidence for immediate professional impact.
        </p>
      </div>
    </div>
  </motion.div>
);

export default ManufacturingSection;