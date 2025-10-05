"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import EnhancedPenicillin3D from '../temporary/EnhancedPenicillin3DPlaceholder.tsx';

const OpeningSection: React.FC = () => {
  const [showDiscoveryStory, setShowDiscoveryStory] = useState(false);
  const [showHint, setShowHint] = useState(true);
  const popoverRef = useRef<HTMLDivElement | null>(null);
  const moleculeWrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!showHint) return;
    const timer = setTimeout(() => setShowHint(false), 6000);
    return () => clearTimeout(timer);
  }, [showHint]);

  useEffect(() => {
    if (!showDiscoveryStory) return;
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setShowDiscoveryStory(false); };
    const handleClick = (e: MouseEvent | TouchEvent) => {
      if (
        popoverRef.current && !popoverRef.current.contains(e.target as Node) &&
        moleculeWrapperRef.current && !moleculeWrapperRef.current.contains(e.target as Node)
      ) {
        setShowDiscoveryStory(false);
      }
    };
    document.addEventListener('keydown', handleKey);
    document.addEventListener('mousedown', handleClick);
    document.addEventListener('touchstart', handleClick, { passive: true });
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('touchstart', handleClick);
    };
  }, [showDiscoveryStory]);

  const isMobile = typeof window !== 'undefined' && window.matchMedia('(max-width: 640px)').matches;

  return (
    <motion.div
      role="region"
      aria-labelledby="opening-heading"
      id="opening"
      className="relative w-full bg-gradient-to-br from-indigo-600 via-indigo-500 to-violet-600 dark:from-[#1e1b4b] dark:via-[#312e81] dark:to-[#4c1d95] text-slate-800 dark:text-slate-100"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0 }}
    >
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="bg-white dark:bg-slate-900/70 backdrop-blur-md shadow-xl shadow-indigo-900/10 dark:shadow-black/40 border border-indigo-100/60 dark:border-indigo-500/20 rounded-3xl px-6 py-12 md:py-16 relative overflow-hidden"
        >
          <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(circle_at_center,white,transparent_70%)]">
            <div className="absolute -top-24 -left-24 w-72 h-72 bg-fuchsia-400/20 dark:bg-fuchsia-500/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-32 -right-20 w-80 h-80 bg-indigo-400/25 dark:bg-indigo-500/20 rounded-full blur-3xl" />
          </div>
          <div className="relative max-w-3xl mx-auto text-center">
            <h1 id="opening-heading" className="font-extrabold tracking-tight text-3xl sm:text-4xl md:text-5xl leading-tight">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-300 dark:to-fuchsia-300">From Molecule to Medicine</span>
              <span className="mt-2 block text-slate-700 dark:text-slate-200">Your Journey Begins Here</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
              Just like discovering a life‑saving drug, your career pathway follows a validated sequence—from curiosity to real‑world impact. We guide you through every stage.
            </p>
            <p className="mt-4 text-base text-slate-500 dark:text-slate-400">
              At <span className="font-semibold text-indigo-600 dark:text-indigo-300">FirstPharmaJob Institute</span>, you are discovered, developed, validated and launched—mirroring the lifecycle of a breakthrough therapy.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#preclinical"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 px-8 py-3 text-white font-semibold shadow-lg shadow-indigo-600/30 hover:shadow-indigo-700/40 transition-all hover:scale-[1.03] focus:outline-none focus-visible:ring-4 ring-indigo-400/50"
              >
                Start Your Journey
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border-2 border-indigo-600/70 dark:border-indigo-400/60 px-8 py-3 font-semibold text-indigo-700 dark:text-indigo-300 bg-white/70 dark:bg-slate-800/50 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-all focus:outline-none focus-visible:ring-4 ring-indigo-400/40"
              >
                Get In Touch
              </a>
            </div>
          </div>
          {/* Molecule interactive area */}
          <div className="relative mt-14 md:mt-16 max-w-xl mx-auto">
            <div
              role="button"
              tabIndex={0}
              aria-pressed={showDiscoveryStory}
              aria-describedby="molecule-discovery-hint"
              onClick={() => setShowDiscoveryStory(p => !p)}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setShowDiscoveryStory(p => !p); } }}
              className="group relative mx-auto w-full focus:outline-none focus-visible:ring-4 ring-indigo-400/60 rounded-2xl"
              ref={moleculeWrapperRef}
            >
              <div className="relative rounded-3xl bg-gradient-to-br from-fuchsia-500 via-rose-500 to-red-500 p-[2px] shadow-lg shadow-fuchsia-500/30">
                <div className="rounded-[1.35rem] bg-white dark:bg-slate-900/80 backdrop-blur-sm p-4">
                  <EnhancedPenicillin3D />
                </div>
              </div>
              <p id="molecule-discovery-hint" className="sr-only">Activate to toggle a short discovery story about Penicillin.</p>
              <motion.div
                className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-white dark:bg-slate-800 px-4 py-1.5 rounded-full shadow border border-indigo-100/70 dark:border-indigo-700/40 text-xs font-medium text-indigo-700 dark:text-indigo-300"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: showHint && !showDiscoveryStory ? 1 : 0, y: showHint && !showDiscoveryStory ? 0 : 8 }}
                transition={{ duration: 0.4 }}
              >Tap to learn its story</motion.div>
              <motion.div
                className="absolute -top-5 left-1/2 -translate-x-1/2 -translate-y-full"
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <span className="inline-flex items-center gap-1 text-xs font-mono font-semibold bg-white/80 dark:bg-slate-800/70 backdrop-blur-sm px-3 py-1 rounded-full border border-indigo-100 dark:border-indigo-600/40 text-indigo-700 dark:text-indigo-300 select-none" title="Penicillin molecular formula">C₁₆H₁₈N₂O₄S</span>
              </motion.div>
            </div>
            <AnimatePresence>
              {showDiscoveryStory && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="relative mt-10 max-w-xl mx-auto"
                  role="dialog" aria-label="Penicillin discovery story" ref={popoverRef}
                >
                  <div className="relative bg-white dark:bg-slate-900/90 border border-indigo-100 dark:border-indigo-600/40 rounded-2xl shadow-xl p-6 text-sm leading-relaxed">
                    <button
                      onClick={() => setShowDiscoveryStory(false)}
                      aria-label="Close discovery story"
                      className="absolute top-2 right-2 text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300"
                    >✕</button>
                    <h4 className="text-rose-600 dark:text-rose-300 font-semibold mb-2 flex items-center gap-2"><span aria-hidden="true">🔬</span> Penicillin</h4>
                    <p className="text-slate-600 dark:text-slate-300 mb-2">1928: Fleming’s “contaminated” plate showed bacteria killed by a stray mold.</p>
                    <p className="text-slate-600 dark:text-slate-300">That simple observation sparked the antibiotic era.</p>
                    <div className="mt-4 flex justify-end"><button onClick={() => setShowDiscoveryStory(false)} className="text-xs font-medium text-indigo-600 dark:text-indigo-300 hover:underline">Close</button></div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-16 md:mt-20 max-w-4xl mx-auto"
          >
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-[11px] sm:text-xs font-medium tracking-wide">
              {['Discovery','Testing','Approval','Launch'].map(tag => (
                <span key={tag} className="rounded-full px-4 py-2 bg-indigo-50 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-700/40">{tag}</span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default OpeningSection;
