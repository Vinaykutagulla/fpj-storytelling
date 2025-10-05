"use client";
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface Step {
  id: string;
  label: string;
}
interface JourneyStaticProgressProps {
  steps: Step[];
  activeId?: string;
  onJump?: (id: string) => void;
  sticky?: boolean;
}

// Accessible horizontal journey progress indicator
const JourneyStaticProgress: React.FC<JourneyStaticProgressProps> = ({ steps, activeId, onJump, sticky = false }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const lastCenterRef = useRef<number>(0);
  const centerRaf = useRef<number | null>(null);
  const pendingActiveRef = useRef<string | null>(null);
  const [visible, setVisible] = useState(false);

  // Defer initial render until after first paint + slight scroll to reduce perceived snap
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 600); // appear after hero engagement
    return () => clearTimeout(timer);
  }, []);

  // Scroll active step into view on overflow (mobile horizontal scroll scenario)
  // Tweened horizontal centering (mobile overflow). Debounced and smoothed.
  useEffect(() => {
    if (!activeId || !containerRef.current) return;
    pendingActiveRef.current = activeId;
    const now = Date.now();
    if (now - lastCenterRef.current < 180) return; // debounce
    lastCenterRef.current = now;
    const wrap = containerRef.current;
    const targetEl = wrap.querySelector<HTMLButtonElement>(`button[data-step='${activeId}']`);
    if (!targetEl) return;
    const start = wrap.scrollLeft;
    const targetCenter = targetEl.offsetLeft + targetEl.offsetWidth / 2;
    const desired = Math.max(0, targetCenter - wrap.clientWidth / 2);
    const maxScroll = wrap.scrollWidth - wrap.clientWidth;
    const end = Math.min(maxScroll, desired);
    if (Math.abs(end - start) < 4) return; // negligible
    const duration = 420; // ms
    const t0 = performance.now();
    if (centerRaf.current) cancelAnimationFrame(centerRaf.current);
    const ease = (t: number) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; // cubic easeInOut
    const step = () => {
      const nowT = performance.now();
      const p = Math.min(1, (nowT - t0) / duration);
      const eased = ease(p);
      wrap.scrollLeft = start + (end - start) * eased;
      if (p < 1) centerRaf.current = requestAnimationFrame(step);
    };
    centerRaf.current = requestAnimationFrame(step);
    return () => { if (centerRaf.current) cancelAnimationFrame(centerRaf.current); };
  }, [activeId]);

  // Smooth vertical scroll helper for jumps to reduce abrupt native snap.
  const smoothScrollTo = (id: string) => {
    const target = document.getElementById(id);
    if (!target) return onJump?.(id); // fallback
    const startY = window.scrollY || window.pageYOffset;
    const rect = target.getBoundingClientRect();
    const targetY = rect.top + startY - 20; // slight offset for visual comfort
    const dist = targetY - startY;
    const duration = Math.min(900, Math.max(360, Math.abs(dist) * 0.55));
    const t0 = performance.now();
    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
    const rafRef = { id: 0 } as { id: number };
    const tick = () => {
      const p = Math.min(1, (performance.now() - t0) / duration);
      const eased = easeOutCubic(p);
      window.scrollTo(0, startY + dist * eased);
      if (p < 1) rafRef.id = requestAnimationFrame(tick);
    };
    rafRef.id = requestAnimationFrame(tick);
  };

  return (
    <div className={[
      'w-full py-6 sm:py-8 bg-white/70 dark:bg-slate-900/60 backdrop-blur-sm border-b border-slate-200/60 dark:border-slate-700 z-10',
      sticky ? 'sticky top-0' : 'relative',
      visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
    ].join(' ')} role="navigation" aria-label="Journey progress" aria-hidden={!visible}>
      <div ref={containerRef} className="relative max-w-6xl mx-auto px-4">
        {/* Connecting line */}
        <div aria-hidden="true" className="absolute left-4 right-4 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 dark:from-slate-700 dark:via-slate-600 dark:to-slate-700" />
        <div className="flex gap-4 sm:gap-6 justify-between">
          {steps.map((s, idx) => {
            const isActive = s.id === activeId;
            return (
              <div key={s.id} className="flex-1 flex flex-col items-center relative">
                <motion.button
                  data-step={s.id}
                  onClick={() => smoothScrollTo(s.id)}
                  whileTap={{ scale: 0.9 }}
                  className={[
                    'relative z-10 w-10 h-10 rounded-full flex items-center justify-center font-semibold text-xs transition-all duration-300 ease-out focus:outline-none focus:ring-4 focus:ring-blue-300/40',
                    isActive
                      ? 'bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/30 scale-[1.08]'
                      : 'bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-300 border border-slate-200 dark:border-slate-600 hover:text-slate-700 dark:hover:text-slate-200'
                  ].join(' ')}
                  aria-current={isActive ? 'step' : undefined}
                  aria-label={`Go to ${s.label} section`}
                >
                  {idx + 1}
                </motion.button>
                <div className="mt-2 text-[11px] sm:text-xs font-medium tracking-wide uppercase text-slate-600 dark:text-slate-300 text-center max-w-[5rem] leading-tight">
                  {s.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default JourneyStaticProgress;
