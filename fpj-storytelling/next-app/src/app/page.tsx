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
          {/* Homepage sections only; ProvidedJourney removed as requested */}
        </div>
      </div>
    </>
  );
}

