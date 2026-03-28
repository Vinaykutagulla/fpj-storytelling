"use client";
import React, { useEffect, useMemo, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import OpeningSection from '../components/sections/OpeningSection.tsx';
import DrugDiscoveryJourney from '../components/sections/DrugDiscoveryJourney.tsx';
import ParallelJourneySection from '../components/sections/ParallelJourneySection.tsx';
import { motion } from 'framer-motion';
const PerfOverlay = dynamic(() => import('../components/dev/PerfOverlay.tsx').then(m => m.default), { ssr: false, loading: () => null });

export default function HomePage() {
  const sections = useMemo(() => ([
    { id: 'opening', title: 'Opening', node: <OpeningSection /> },
    { id: 'drug-discovery', title: 'Drug Discovery', node: <DrugDiscoveryJourney /> },
    { id: 'parallel-journey', title: 'Your Journey', node: <ParallelJourneySection /> },
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
      <div className="w-full">
        <div className="space-y-0">
          {sections.map((s) => (
            <motion.section key={s.id} id={s.id} aria-label={s.title} initial={false} animate={false} className={[
              'flex flex-col justify-start','relative','scroll-mt-20','bg-white/0','min-h-[75vh]','overflow-visible','pt-0'
            ].join(' ')}>
              {s.node}
            </motion.section>
          ))}
          
          {/* Clean Footer Section */}
          <motion.section 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-gradient-to-br from-slate-900 to-slate-800 border-t border-slate-700 py-16 px-6"
          >
            <div className="max-w-6xl mx-auto">
              {/* Credentials Row */}
              <div className="grid md:grid-cols-3 gap-6 mb-12 pb-12 border-b border-slate-700">
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-400 mb-2">🏆</div>
                  <h3 className="font-semibold text-white mb-1">ISO 9001:2015 Certified</h3>
                  <p className="text-sm text-slate-400">Quality Management System</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">✓</div>
                  <h3 className="font-semibold text-white mb-1">MSME Registered</h3>
                  <p className="text-sm text-slate-400">UDYAM-TS-02-0213761</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">🎯</div>
                  <h3 className="font-semibold text-white mb-1">Outcome Guaranteed</h3>
                  <p className="text-sm text-slate-400">India's First in Pharma Training</p>
                </div>
              </div>

              {/* Connect Section */}
              <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Connect With FirstPharmaJob</h2>
                <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
                  Reach out for program inquiries, career guidance, or to stay updated with pharmaceutical industry insights
                </p>
                
                <div className="flex flex-wrap justify-center gap-4">
                  <a
                    href="https://wa.me/919100514968"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-3 rounded-lg transition-all transform hover:scale-105"
                  >
                    <span>💬</span> WhatsApp
                  </a>
                  <a
                    href="https://www.youtube.com/@FirstPharmajob"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-3 rounded-lg transition-all transform hover:scale-105"
                  >
                    <span>▶️</span> YouTube
                  </a>
                  <a
                    href="https://www.instagram.com/firstpharmajob/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white font-medium px-6 py-3 rounded-lg transition-all transform hover:scale-105"
                  >
                    <span>📷</span> Instagram
                  </a>
                  <a
                    href="https://www.linkedin.com/company/firstpharmajob"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-all transform hover:scale-105"
                  >
                    <span>💼</span> LinkedIn
                  </a>
                  <a
                    href="https://x.com/FPharmajob60819"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-slate-600 hover:bg-slate-700 text-white font-medium px-6 py-3 rounded-lg transition-all transform hover:scale-105"
                  >
                    <span>𝕏</span> Twitter
                  </a>
                </div>
              </div>

              {/* Copyright */}
              <div className="mt-12 pt-8 border-t border-slate-700 text-center text-slate-400 text-sm">
                <p>© 2026 FirstPharmaJob · ISO 9001:2015 · MSME Registered · Hyderabad, India</p>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </>
  );
}

