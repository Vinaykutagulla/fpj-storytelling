"use client";
import React from 'react';
import AnalogyIntro from '../common/AnalogyIntro';
// Motion variants removed to reduce unnecessary layout / paint overhead after scroll simplification.
// (Kept file client-bound in case future subtle animations are reintroduced.)

const PreclinicalSection: React.FC = () => (
  <div
    role="region"
    aria-labelledby="preclinical-heading"
    className="relative min-h-[80vh] bg-gradient-to-br from-pink-50 via-rose-50 to-fuchsia-100 dark:from-[#2d1122] dark:via-[#351528] dark:to-[#451a33] py-16 md:py-24 overflow-hidden"
  >
    {/* Background Pattern */}
    <div className="absolute inset-0 opacity-5 dark:opacity-10">
      <div className="absolute top-20 left-10 w-32 h-32 bg-rose-300 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-fuchsia-300 rounded-full blur-3xl"></div>
    </div>
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-rose-100 dark:bg-rose-900/30 text-rose-800 dark:text-rose-200 text-sm font-medium mb-6">
          🧪 Phase 1: Foundation Building
        </div>
        <h2 id="preclinical-heading" className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-800 dark:text-slate-100 mb-6">
          Preclinical: <span className="bg-gradient-to-r from-rose-600 to-fuchsia-600 bg-clip-text text-transparent">Lab to Learning</span>
        </h2>
        <p className="mt-6 text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed font-light">
          Just as molecules are rigorously tested in controlled lab environments before human trials, 
          <span className="font-semibold text-rose-700 dark:text-rose-300"> FPJ students undergo comprehensive skill validation</span> through carefully designed assignments.
        </p>
      </div>

      {/* Parallel Story Visual */}
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
        <div className="space-y-8">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-fuchsia-500 rounded-xl flex items-center justify-center text-white text-xl font-bold">
              🧬
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-100">Drug Development</h3>
          </div>
          <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-rose-200/50 dark:border-rose-700/30 shadow-xl">
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
              Molecules undergo <span className="font-semibold text-rose-700 dark:text-rose-300">battery of laboratory tests</span>: 
              pharmacology assays, toxicity studies, metabolism analysis, and formulation optimization.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-rose-500 rounded-full"></div>
                <span className="text-slate-600 dark:text-slate-400">Safety profile validation</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-rose-500 rounded-full"></div>
                <span className="text-slate-600 dark:text-slate-400">Efficacy signal detection</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-rose-500 rounded-full"></div>
                <span className="text-slate-600 dark:text-slate-400">Optimal formulation discovery</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-fuchsia-500 to-pink-500 rounded-xl flex items-center justify-center text-white text-xl font-bold">
              🎓
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-100">FPJ Learning</h3>
          </div>
          <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-fuchsia-200/50 dark:border-fuchsia-700/30 shadow-xl">
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
              Students undergo <span className="font-semibold text-fuchsia-700 dark:text-fuchsia-300">battery of targeted assignments</span>: 
              case studies, regulatory scenarios, data analysis projects, and industry simulations.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-fuchsia-500 rounded-full"></div>
                <span className="text-slate-600 dark:text-slate-400">Core competency validation</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-fuchsia-500 rounded-full"></div>
                <span className="text-slate-600 dark:text-slate-400">Critical thinking development</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-fuchsia-500 rounded-full"></div>
                <span className="text-slate-600 dark:text-slate-400">Industry readiness assessment</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-white/90 dark:bg-slate-900/70 backdrop-blur-sm rounded-3xl shadow-xl shadow-rose-500/10 dark:shadow-black/40 border border-rose-100/60 dark:border-rose-500/20 p-8 md:p-12"
      >
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Drug development column */}
          <div className="rounded-2xl p-6 bg-gradient-to-br from-fuchsia-100 to-rose-100 dark:from-fuchsia-900/30 dark:to-rose-900/20 border border-fuchsia-200/60 dark:border-fuchsia-700/30">
            <h3 className="text-base font-semibold tracking-wide text-fuchsia-700 dark:text-fuchsia-300 mb-3 uppercase">Development Parallel</h3>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">Exploratory assays document signal, reliability and basic safety boundaries before scale is justified.</p>
          </div>
          {/* Learner column */}
          <div className="rounded-2xl p-6 bg-gradient-to-br from-rose-100 via-amber-50 to-orange-100 dark:from-rose-900/30 dark:via-amber-900/20 dark:to-orange-900/20 border border-rose-200/60 dark:border-rose-700/30">
            <h3 className="text-base font-semibold tracking-wide text-rose-700 dark:text-rose-300 mb-3 uppercase">Your Practice</h3>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">You execute tightly bounded tasks; each output must state objective, method, result, and a next decision. Effort is secondary to evidence.</p>
          </div>
        </div>
  <div className="mt-10 grid md:grid-cols-3 gap-6 text-sm">
          <div className="rounded-xl bg-white dark:bg-slate-800/60 border border-rose-100 dark:border-rose-700/30 p-4">
            <p className="font-medium text-rose-700 dark:text-rose-300 mb-1">Discipline</p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">Consistent structure: objective → approach → result.</p>
          </div>
          <div className="rounded-xl bg-white dark:bg-slate-800/60 border border-rose-100 dark:border-rose-700/30 p-4">
            <p className="font-medium text-rose-700 dark:text-rose-300 mb-1">Artifacts</p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">Concise briefs, validation snippets, structured recap.</p>
          </div>
          <div className="rounded-xl bg-white dark:bg-slate-800/60 border border-rose-100 dark:border-rose-700/30 p-4">
            <p className="font-medium text-rose-700 dark:text-rose-300 mb-1">Outcome</p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">Lower ambiguity; readiness to justify scale.</p>
          </div>
        </div>
        <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-fuchsia-50 to-rose-50 dark:from-fuchsia-900/20 dark:to-rose-900/20 border border-fuchsia-100/70 dark:border-fuchsia-700/40">
          <p className="italic text-slate-700 dark:text-slate-300">“FPJ students go through a battery of tests and assessments—proving their grasp of core concepts before moving forward, just like molecules must prove safety before clinical trials.”</p>
        </div>
  <p className="mt-10 text-slate-700 dark:text-slate-300 text-base md:text-lg leading-relaxed font-medium">This stage reduces risk, optimizes the molecule, and sets a defensible base for first‑in‑human trials.</p>
      </div>
    </div>
  </div>
);

export default PreclinicalSection;
