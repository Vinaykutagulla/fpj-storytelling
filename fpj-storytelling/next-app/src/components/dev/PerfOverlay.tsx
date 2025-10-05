"use client";
import React, { useEffect, useRef, useState } from 'react';

interface MetricsState {
  fps: number;
  minFps: number;
  longTasks: number;
  avgLongTask: number;
  maxLongTask: number;
  layoutShift: number; // cumulative layout shift (CLS-like)
  sectionUpdates: number;
  lastSectionUpdateMs: number;
}

/** Lightweight performance overlay (opt‑in via ?perf=1) */
const PerfOverlay: React.FC = () => {
  const [metrics, setMetrics] = useState<MetricsState>({
    fps: 0,
    minFps: 120,
    longTasks: 0,
    avgLongTask: 0,
    maxLongTask: 0,
    layoutShift: 0,
    sectionUpdates: 0,
    lastSectionUpdateMs: 0,
  });
  const frameTimesRef = useRef<number[]>([]);
  const lastFrameRef = useRef<number | null>(null);
  const running = useRef(true);
  const longTaskDurationsRef = useRef<number[]>([]);

  // Listen for custom section timing events
  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail as { duration: number } | undefined;
      if (!detail) return;
      setMetrics(m => ({ ...m, sectionUpdates: m.sectionUpdates + 1, lastSectionUpdateMs: detail.duration }));
    };
    window.addEventListener('perf:sectionUpdate', handler as EventListener);
    return () => window.removeEventListener('perf:sectionUpdate', handler as EventListener);
  }, []);

  useEffect(() => {
    const raf = (t: number) => {
      if (!running.current) return;
      if (lastFrameRef.current != null) {
        const dt = t - lastFrameRef.current;
        frameTimesRef.current.push(dt);
        if (frameTimesRef.current.length > 60) frameTimesRef.current.shift();
        const fps = 1000 / (frameTimesRef.current.reduce((a, b) => a + b, 0) / frameTimesRef.current.length);
        setMetrics(m => ({ ...m, fps: Math.round(fps), minFps: Math.min(m.minFps, Math.round(fps)) }));
      }
      lastFrameRef.current = t;
      requestAnimationFrame(raf);
    };
    const id = requestAnimationFrame(raf);
    return () => { running.current = false; cancelAnimationFrame(id); };
  }, []);

  // Long tasks + layout shift observers
  useEffect(() => {
    if ('PerformanceObserver' in window) {
      try {
        const longTaskObserver = new PerformanceObserver(list => {
          list.getEntries().forEach(entry => {
            const dur = entry.duration;
            longTaskDurationsRef.current.push(dur);
            const arr = longTaskDurationsRef.current;
            const longTasks = arr.length;
            const avg = arr.reduce((a, b) => a + b, 0) / longTasks;
            const max = Math.max(...arr);
            setMetrics(m => ({ ...m, longTasks, avgLongTask: Math.round(avg), maxLongTask: Math.round(max) }));
          });
        });
        longTaskObserver.observe({ entryTypes: ['longtask'] });
        const lsObserver = new PerformanceObserver(list => {
          list.getEntries().forEach(entry => {
            const ls = entry as PerformanceEntry & { value?: number; hadRecentInput?: boolean };
            if ((ls as any).value !== undefined && !(ls as any).hadRecentInput) {
              const val = (ls as any).value as number;
              setMetrics(m => ({ ...m, layoutShift: parseFloat((m.layoutShift + val).toFixed(4)) }));
            }
          });
        });
        lsObserver.observe({ type: 'layout-shift', buffered: true as any });
        return () => { longTaskObserver.disconnect(); lsObserver.disconnect(); };
      } catch {/* ignore */}
    }
  }, []);

  return (
    <div className="fixed bottom-2 left-2 z-[9999] font-mono text-[10px] sm:text-[11px] leading-tight bg-slate-900/85 text-slate-200 px-3 py-2 rounded-lg border border-slate-700 shadow-lg backdrop-blur-md select-none pointer-events-auto">
      <div className="flex items-center gap-3">
        <strong className="text-emerald-400">Perf</strong>
        <span className={metrics.fps < 50 ? 'text-rose-400' : metrics.fps < 58 ? 'text-amber-400' : 'text-emerald-400'}>FPS {metrics.fps}</span>
        <span className="text-slate-400">min {metrics.minFps === 120 ? '-' : metrics.minFps}</span>
      </div>
      <div className="mt-1 grid grid-cols-2 gap-x-4 gap-y-1">
        <span>Long tasks</span><span className="text-slate-100">{metrics.longTasks}</span>
        <span>Avg long</span><span>{metrics.avgLongTask}ms</span>
        <span>Max long</span><span>{metrics.maxLongTask}ms</span>
        <span>CLS</span><span>{metrics.layoutShift}</span>
        <span>Section updates</span><span>{metrics.sectionUpdates}</span>
        <span>Last update</span><span>{metrics.lastSectionUpdateMs.toFixed(2)}ms</span>
      </div>
      <div className="mt-1 text-[9px] text-slate-500">?perf=1 to enable • close tab to stop</div>
    </div>
  );
};

export default PerfOverlay;
