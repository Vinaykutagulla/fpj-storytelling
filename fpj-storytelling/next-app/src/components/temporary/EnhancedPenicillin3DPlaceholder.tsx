"use client";
import React, { useMemo, useState, useCallback } from 'react';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';

// Lightweight SVG-based stylized Penicillin skeleton (simplified) with continuous rotation.
// Later could be upgraded to a true 3D representation using react-three-fiber.
const bond = 'stroke-current stroke-[2.2]';

type FunctionalGroup = 'beta' | 'thiazolidine' | 'side';

interface EnhancedPenicillinProps {
  speedSeconds?: number;                 // Controlled rotation speed (sec per full rotation) if provided
  initialSpeed?: number;                 // Uncontrolled initial speed fallback
  highlightControlled?: FunctionalGroup | null; // Controlled highlight state
  onHighlightChange?: (value: FunctionalGroup | null) => void; // Callback when highlight cycles/changes
  pausedExternal?: boolean;              // External pause override
}

const EnhancedPenicillin3DPlaceholder: React.FC<EnhancedPenicillinProps> = ({
  speedSeconds,
  initialSpeed = 40,
  highlightControlled,
  onHighlightChange,
  pausedExternal = false,
}) => {
  const prefersReducedMotion = useReducedMotion();
  const [internalSpeed] = useState<number>(initialSpeed);
  const effectiveSpeed = speedSeconds ?? internalSpeed;
  const [paused, setPaused] = useState(false);
  const [internalHighlight, setInternalHighlight] = useState<FunctionalGroup | null>(null);
  const highlight = highlightControlled !== undefined ? highlightControlled : internalHighlight;

  // Build animation configs
  const rotationAnim = useMemo(() => {
    if (prefersReducedMotion) return {};
    return (paused || pausedExternal) ? { rotate: 0 } : { rotate: 360 };
  }, [prefersReducedMotion, paused, pausedExternal]);

  const rotationTransition = useMemo(() => {
    if (prefersReducedMotion) return { duration: 0 };
    return { repeat: Infinity, duration: effectiveSpeed, ease: 'linear' as const };
  }, [prefersReducedMotion, effectiveSpeed]);

  const cycleHighlight = useCallback(() => {
    const next = highlight === null ? 'beta' : highlight === 'beta' ? 'thiazolidine' : highlight === 'thiazolidine' ? 'side' : null;
    if (highlightControlled !== undefined) {
      onHighlightChange?.(next);
    } else {
      setInternalHighlight(next);
      onHighlightChange?.(next);
    }
  }, [highlight, highlightControlled, onHighlightChange]);

  const setSpecificHighlight = (target: FunctionalGroup | null) => {
    const next = target === highlight ? null : target; // toggle behavior
    if (highlightControlled !== undefined) {
      onHighlightChange?.(next);
    } else {
      setInternalHighlight(next);
      onHighlightChange?.(next);
    }
  };
  // Color mapping for atom labels
  const atomColor: Record<string, string> = {
    O: 'fill-rose-500 dark:fill-rose-400',
    N: 'fill-blue-500 dark:fill-blue-400',
    S: 'fill-amber-500 dark:fill-amber-400',
    C: 'fill-slate-400 dark:fill-slate-500'
  };
  return (
    <div
      className="relative w-72 h-80 mx-auto select-none group outline-none focus-visible:ring-4 focus-visible:ring-indigo-400/60 dark:focus-visible:ring-indigo-500/50 focus-visible:rounded-3xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      tabIndex={0}
      role="group"
      aria-label="Interactive penicillin molecule"
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          cycleHighlight();
        }
        if (e.key === 'Escape') {
          setSpecificHighlight(null);
        }
      }}
    >
      {/* Soft radial ambient */}
      <div className="absolute inset-0 rounded-full bg-radial to-transparent from-indigo-300/40 dark:from-indigo-600/20 blur-2xl" aria-hidden="true" />
      {/* Electron orbit pulses (independent, faint) */}
      {!prefersReducedMotion && (
        <>
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{ opacity: [0.35, 0.55, 0.35] }}
            transition={{ repeat: Infinity, duration: 14, ease: 'easeInOut' }}
            aria-hidden="true"
          >
            <div className="w-[92%] h-[92%] rounded-full border border-indigo-300/30 dark:border-indigo-500/20" />
          </motion.div>
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: effectiveSpeed * 1.6, ease: 'linear' }}
            aria-hidden="true"
          >
            <div className="w-[70%] h-[70%] rounded-full border border-indigo-300/20 dark:border-indigo-500/15 border-dashed" />
          </motion.div>
        </>
      )}
      {/* Core molecule rotating */}
      <motion.svg
        viewBox="0 0 300 300"
        className="relative w-full h-full p-4 cursor-pointer"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        role="img"
        aria-label="Penicillin skeletal structure"
        animate={rotationAnim}
        transition={rotationTransition}
        onClick={(e) => {
          cycleHighlight();
        }}
      >
        {/* Bonds with conditional highlight */}
        <rect x="115" y="95" width="70" height="70" rx="6" className={bond + ' drop-shadow-sm ' + (highlight === 'beta' ? 'stroke-rose-500 dark:stroke-rose-400' : '')} />
        <path d="M115 165 L95 155 L105 125 L135 110 L155 125 L150 155 Z" className={bond + (highlight === 'thiazolidine' ? ' stroke-amber-500 dark:stroke-amber-400' : '')} />
        <path d="M185 110 L215 95 L235 105 L245 130 L230 155 L200 165" className={bond + (highlight === 'side' ? ' stroke-indigo-500 dark:stroke-indigo-300' : '')} />
        <path d="M185 130 L205 122" className={bond} />
        <path d="M185 134 L205 126" className="stroke-current stroke-[1.2]" />
        {/* Atoms */}
        {[
          [115,95,'O'],[185,95,'N'],[95,155,'S'],[235,105,'C'],[245,130,'C'],[230,155,'O'],[150,165,'C'],[135,110,'C']
        ].map(([x,y,label],i)=>(
          <g key={i} className={highlight ? 'opacity-90' : ''}>
            <circle cx={x as number} cy={y as number} r={11} className={`stroke-white/60 dark:stroke-slate-900/70 stroke-[1.5] shadow ${atomColor[label as string] || 'fill-slate-400'}`} />
            <text x={x as number} y={(y as number)+4} textAnchor="middle" className="font-semibold text-[9px] fill-white/90 dark:fill-slate-900 select-none mix-blend-plus-lighter">{label as string}</text>
          </g>
        ))}
        <AnimatePresence mode="wait">
          {highlight && (
            <motion.g
              key={highlight}
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.28, ease: 'easeOut' }}
              className="pointer-events-none"
            >
              <circle cx="150" cy="150" r="132" className="stroke-rose-400/0" />
              <text x="150" y="24" textAnchor="middle" className="text-[10px] font-medium fill-slate-600 dark:fill-slate-300">
                {highlight === 'beta' ? 'Beta-lactam ring' : highlight === 'thiazolidine' ? 'Thiazolidine ring' : 'Side chain'}
              </text>
            </motion.g>
          )}
        </AnimatePresence>
      </motion.svg>
      {/* Hover pause overlay instruction (screen-reader hidden by default) */}
      <span className="sr-only">Penicillin molecule rotating. Hover to pause. Click to cycle highlights.</span>
      {prefersReducedMotion && (
        <span className="sr-only">Animation reduced due to system accessibility preference.</span>
      )}
      {/* aria-live region for highlight updates */}
      <span className="sr-only" aria-live="polite">{highlight ? (highlight === 'beta' ? 'Beta lactam ring highlighted' : highlight === 'thiazolidine' ? 'Thiazolidine ring highlighted' : 'Side chain highlighted') : 'No functional group highlighted'}</span>
      {/* Legend / Controls */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-3" aria-label="Functional group legend">
        {([
          { key: 'beta', label: 'β-lactam', color: 'border-rose-500 bg-rose-500/80 dark:bg-rose-400/80' },
          { key: 'thiazolidine', label: 'Thiazolidine', color: 'border-amber-500 bg-amber-500/80 dark:bg-amber-400/80' },
          { key: 'side', label: 'Side chain', color: 'border-indigo-500 bg-indigo-500/80 dark:bg-indigo-300/80' },
        ] as { key: FunctionalGroup; label: string; color: string }[]).map(item => {
          const active = highlight === item.key;
          return (
            <button
              key={item.key}
              type="button"
              onClick={() => setSpecificHighlight(item.key)}
              onKeyDown={(e) => { if ((e.key === 'Enter' || e.key === ' ') && !e.shiftKey) { e.preventDefault(); setSpecificHighlight(item.key); } }}
              aria-pressed={active}
              className={`group relative inline-flex items-center gap-1.5 rounded-full pl-1 pr-2 py-0.5 border text-[10px] font-medium tracking-wide transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-indigo-500/70 dark:focus-visible:ring-indigo-400/70 ${active ? 'bg-slate-900/90 dark:bg-slate-100/90 text-white dark:text-slate-900' : 'bg-white/70 dark:bg-slate-800/70 text-slate-600 dark:text-slate-300 border-slate-200/60 dark:border-slate-600/50'}`}
            >
              <span className={`w-2.5 h-2.5 rounded-full border ${item.color} shadow`} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>
      {/* Speed slider */}
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-full px-4">
        <label className="flex flex-col items-center gap-1 text-[10px] font-medium text-slate-500 dark:text-slate-400">
          <span>Rotation speed (sec)</span>
          <input
            type="range"
            min={10}
            max={80}
            defaultValue={effectiveSpeed}
            onChange={(e) => {
              if (speedSeconds !== undefined) return; // controlled mode; ignore
              const val = Number(e.target.value);
              // We cannot change effectiveSpeed directly if speedSeconds provided; in uncontrolled we would set state (kept constant currently) - room for future.
              // Placeholder: no-op because internalSpeed is const; could refactor to setState if we want live adjustments.
            }}
            className="w-40 accent-indigo-600 dark:accent-indigo-400 cursor-pointer"
            aria-label="Adjust rotation speed"
          />
        </label>
      </div>
    </div>
  );
};

export default EnhancedPenicillin3DPlaceholder;
