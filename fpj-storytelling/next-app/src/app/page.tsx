"use client";
import React, { useEffect, useMemo, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import OpeningSection from '../components/sections/OpeningSection.tsx';
// Remove original granular sections; user wants provided content next
// import PreclinicalSection from '../components/sections/PreclinicalSection.tsx';
// import ClinicalSection from '../components/sections/ClinicalSection.tsx';
// import RegulatorySection from '../components/sections/RegulatorySection.tsx';
// import ManufacturingSection from '../components/sections/ManufacturingSection.tsx';
// import LaunchSection from '../components/sections/LaunchSection.tsx';
import FloatingProgressIndicator from '../components/sections/FloatingProgressIndicator.tsx';
import { motion } from 'framer-motion';
import PreclinicalSection from '../components/sections/PreclinicalSection';
import ClinicalSection from '../components/sections/ClinicalSection';
import RegulatorySection from '../components/sections/RegulatorySection';
import ManufacturingSection from '../components/sections/ManufacturingSection';
import LaunchSection from '../components/sections/LaunchSection';
const PerfOverlay = dynamic(() => import('../components/dev/PerfOverlay.tsx').then(m => m.default), { ssr: false, loading: () => null });

export default function HomePage() {
  // Keep only opening; subsequent content will be the provided journey component
  const sections = useMemo(() => ([
    { id: 'opening', title: 'Molecule', node: <OpeningSection /> },
    { id: 'preclinical', title: 'Preclinical', node: <PreclinicalSection /> },
    { id: 'clinical', title: 'Clinical', node: <ClinicalSection /> },
    { id: 'regulatory', title: 'Regulatory', node: <RegulatorySection /> },
    { id: 'manufacturing', title: 'Manufacturing', node: <ManufacturingSection /> },
    { id: 'launch', title: 'Launch', node: <LaunchSection /> },
  ]), []);

  const [activeId, setActiveId] = useState(sections[0].id);
  const [liveMessage, setLiveMessage] = useState(`Section: ${sections[0].title}`);
  const frameRef = useRef<number | null>(null);

  const flowMode = true;
  const [progress, setProgress] = useState(0); // 0-1 overall page progress
  const geometryRef = useRef<{ id: string; midpoint: number }[]>([]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const perfEnabled = new URLSearchParams(window.location.search).has('perf');
    let lastActive = activeId;
    let scheduled = false;
    let lastSwitchTime = 0;

    const computeGeometry = () => {
      geometryRef.current = sections.map(s => {
        const el = document.getElementById(s.id);
        if (!el) return { id: s.id, midpoint: Number.POSITIVE_INFINITY };
        const rect = el.getBoundingClientRect();
        const scrollTop = window.scrollY || window.pageYOffset;
        const midpoint = rect.top + scrollTop + rect.height / 2;
        return { id: s.id, midpoint };
      });
    };

    const SWITCH_THRESHOLD = 90;
    const compute = () => {
      scheduled = false;
      const centerAbs = (window.scrollY || window.pageYOffset) + window.innerHeight / 2;
      let nearest: { id: string; dist: number } | null = null;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) setProgress(Math.min(1, Math.max(0, window.scrollY / docHeight)));
      for (const g of geometryRef.current) {
        const dist = Math.abs(g.midpoint - centerAbs);
        if (!nearest || dist < nearest.dist) nearest = { id: g.id, dist };
      }
      if (nearest && nearest.id !== lastActive) {
        const currentGeom = geometryRef.current.find(g => g.id === lastActive);
        if (currentGeom) {
          const currentDist = Math.abs(currentGeom.midpoint - centerAbs);
          const now = performance.now();
          if (currentDist - nearest.dist > SWITCH_THRESHOLD && now - lastSwitchTime > 60) {
            lastActive = nearest.id;
            setActiveId(nearest.id);
            const found = sections.find(s => s.id === nearest.id);
            if (found) setLiveMessage(`Section: ${found.title}`);
            lastSwitchTime = now;
          }
        } else {
          lastActive = nearest.id;
          setActiveId(nearest.id);
          const found = sections.find(s => s.id === nearest.id);
          if (found) setLiveMessage(`Section: ${found.title}`);
          lastSwitchTime = performance.now();
        }
      }
    };

    const onScroll = () => {
      if (!scheduled) {
        scheduled = true;
        frameRef.current = requestAnimationFrame(compute);
      }
    };

    const recomputeAndUpdate = () => {
      computeGeometry();
      onScroll();
    };

    const onResize = (() => {
      let resizeTimer: number | undefined;
      return () => {
        if (resizeTimer) window.clearTimeout(resizeTimer);
        resizeTimer = window.setTimeout(() => {
          recomputeAndUpdate();
        }, 120);
      };
    })();

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    const mo = new MutationObserver(() => { computeGeometry(); });
    mo.observe(document.body, { childList: true, subtree: true, attributes: false });
    computeGeometry();
    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      mo.disconnect();
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [sections]);

  return (
    <>
      <div aria-live="polite" aria-atomic="true" className="sr-only" id="section-live-region">{liveMessage}</div>
      <div className="fixed top-0 left-0 right-0 h-1.5 z-40 bg-slate-200/40 dark:bg-slate-800/60 backdrop-blur-sm">
        <div className="h-full bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 transition-[width] duration-150 ease-out" style={{ width: `${Math.round(progress * 100)}%` }} aria-hidden="true" />
      </div>
      {typeof window !== 'undefined' && new URLSearchParams(window.location.search).has('perf') && <PerfOverlay />}
      {/* Remove side progress indicator since we only track the hero now */}
      {/* <FloatingProgressIndicator items={sections.map(({ id, title }) => ({ id, title }))} activeId={activeId} /> */}
      <div className="w-full">
        <div className="space-y-0">
          {sections.map((s) => (
            <motion.section key={s.id} id={s.id} aria-label={s.title} initial={false} animate={false} className={[
              'flex flex-col justify-start','relative','scroll-mt-20','bg-white/0','min-h-[75vh]','overflow-visible','pt-0'
            ].join(' ')}>
              {s.node}
            </motion.section>
          ))}
          
          {/* Professional Credentials Section */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-700 py-12 px-6"
          >
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-3">
                  🏆 Trusted & Certified Excellence
                </h2>
                <p className="text-lg font-medium text-indigo-700 dark:text-indigo-300 mb-2">
                  "India's First Outcome-Guaranteed Clinical Research Training"
                </p>
                <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                  ISO 9001:2015 Certified | MSME Registered | Government Recognized Training Partner
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700 text-center"
                >
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">ISO 9001:2015</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    Quality Management System Certified for consistent training excellence
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700 text-center"
                >
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">MSME Registered</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    UDYAM-TS-02-0213761<br/>
                    Government recognized enterprise
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700 text-center"
                >
                  <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 14l9-5-9-5-9 5 9 5z"/>
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
                    </svg>
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Training Partner</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    SEA/HYD/ALO/16/1019933/2025<br/>
                    Telangana Shops & Establishments Act
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.section>

          {/* Professional Connect Section */}
          <motion.section 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative bg-gradient-to-br from-slate-50 via-indigo-50/30 to-purple-50/20 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900/20 border-t border-indigo-100 dark:border-slate-700 py-20 px-6 overflow-hidden"
          >
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/5 via-purple-600/5 to-cyan-600/5"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-indigo-400/10 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-400/10 to-transparent rounded-full blur-3xl"></div>
            
            <div className="relative max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent mb-4"
                >
                  Connect With FirstPharmaJob
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-lg text-slate-700 dark:text-slate-300 max-w-3xl mx-auto"
                >
                  Stay informed with pharmaceutical industry insights, professional development resources, 
                  and career advancement opportunities from our expert team.
                </motion.p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3, ease: [0.68, -0.55, 0.265, 1.55] }}
                  className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-slate-800 dark:to-green-900/20 rounded-xl p-6 text-center border border-green-200/50 dark:border-slate-700 hover:border-green-300 dark:hover:border-green-500 transition-all shadow-lg hover:shadow-green-500/25 backdrop-blur-sm"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-green-500/25">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.785"/>
                    </svg>
                  </div>
                  <h3 className="font-bold text-green-800 dark:text-green-300 mb-2">Direct Contact</h3>
                  <p className="text-sm text-green-700/80 dark:text-green-300/80 mb-4">
                    Get instant support and program guidance
                  </p>
                  <a
                    href="https://wa.me/919100514968"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-medium text-sm px-4 py-2 rounded-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-green-500/30"
                  >
                    Chat on WhatsApp
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </motion.div>

                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3, ease: [0.68, -0.55, 0.265, 1.55] }}
                  className="bg-gradient-to-br from-red-50 to-rose-50 dark:from-slate-800 dark:to-red-900/20 rounded-xl p-6 text-center border border-red-200/50 dark:border-slate-700 hover:border-red-300 dark:hover:border-red-500 transition-all shadow-lg hover:shadow-red-500/25 backdrop-blur-sm"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-rose-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-red-500/25">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </div>
                  <h3 className="font-bold text-red-800 dark:text-red-300 mb-2">Educational Content</h3>
                  <p className="text-sm text-red-700/80 dark:text-red-300/80 mb-4">
                    Expert tutorials and pharmaceutical industry insights
                  </p>
                  <a
                    href="https://www.youtube.com/@FirstPharmajob"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700 text-white font-medium text-sm px-4 py-2 rounded-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-red-500/30"
                  >
                    Watch Videos
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </motion.div>

                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3, ease: [0.68, -0.55, 0.265, 1.55] }}
                  className="bg-gradient-to-br from-pink-50 to-rose-50 dark:from-slate-800 dark:to-pink-900/20 rounded-xl p-6 text-center border border-pink-200/50 dark:border-slate-700 hover:border-pink-300 dark:hover:border-pink-500 transition-all shadow-lg hover:shadow-pink-500/25 backdrop-blur-sm"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-pink-500/25">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                  <h3 className="font-bold text-pink-800 dark:text-pink-300 mb-2">Student Success</h3>
                  <p className="text-sm text-pink-700/80 dark:text-pink-300/80 mb-4">
                    Behind-the-scenes and achievement highlights
                  </p>
                  <a
                    href="https://www.instagram.com/firstpharmajob/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-medium text-sm px-4 py-2 rounded-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-pink-500/30"
                  >
                    Follow Updates
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </motion.div>

                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3, ease: [0.68, -0.55, 0.265, 1.55] }}
                  className="bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-800 dark:to-gray-900/20 rounded-xl p-6 text-center border border-slate-200/50 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500 transition-all shadow-lg hover:shadow-slate-500/25 backdrop-blur-sm"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-slate-600 to-gray-700 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-slate-500/25">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </div>
                  <h3 className="font-bold text-slate-800 dark:text-slate-300 mb-2">Industry News</h3>
                  <p className="text-sm text-slate-700/80 dark:text-slate-300/80 mb-4">
                    Real-time pharmaceutical industry updates
                  </p>
                  <a
                    href="https://x.com/FPharmajob60819"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-gradient-to-r from-slate-600 to-gray-700 hover:from-slate-700 hover:to-gray-800 text-white font-medium text-sm px-4 py-2 rounded-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-slate-500/30"
                  >
                    Follow News
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </motion.div>

                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3, ease: [0.68, -0.55, 0.265, 1.55] }}
                  className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-blue-900/20 rounded-xl p-6 text-center border border-blue-200/50 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-500 transition-all shadow-lg hover:shadow-blue-500/25 backdrop-blur-sm"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-500/25">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2">Professional Network</h3>
                  <p className="text-sm text-blue-700/80 dark:text-blue-300/80 mb-4">
                    Connect with industry professionals and alumni
                  </p>
                  <a
                    href="https://www.linkedin.com/company/firstpharmajob"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium text-sm px-4 py-2 rounded-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-blue-500/30"
                  >
                    Connect Now
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </motion.div>
              </div>
              
              <div className="mt-12 text-center">
                <div className="inline-flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  Building the future of pharmaceutical education
                </div>
              </div>
            </div>
          </motion.section>
          
          {/* Homepage sections only; ProvidedJourney removed as requested */}
        </div>
      </div>
    </>
  );
}

