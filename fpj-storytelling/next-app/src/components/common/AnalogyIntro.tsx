import React from 'react';

interface AnalogyIntroProps {
  titleA: string; // e.g., Drug Development label
  textA: string;
  titleB: string; // e.g., FPJ label
  textB: string;
  accent?: 'rose' | 'indigo' | 'cyan' | 'amber' | 'emerald' | 'purple' | 'orange';
}

const colorMap: Record<string, { ring: string; bg: string; grad: string; title: string; subtle: string }> = {
  rose: {
    ring: 'ring-rose-400/40',
    bg: 'bg-white/70 dark:bg-slate-900/50',
    grad: 'from-rose-100/60 via-fuchsia-100/40 to-pink-100/50 dark:from-rose-900/10 dark:via-fuchsia-900/5 dark:to-pink-900/10',
    title: 'text-rose-700 dark:text-rose-300',
    subtle: 'text-rose-600 dark:text-rose-300'
  },
  indigo: {
    ring: 'ring-indigo-400/40',
    bg: 'bg-white/70 dark:bg-slate-900/50',
    grad: 'from-indigo-100/60 via-violet-100/40 to-fuchsia-100/50 dark:from-indigo-900/10 dark:via-violet-900/5 dark:to-fuchsia-900/10',
    title: 'text-indigo-700 dark:text-indigo-300',
    subtle: 'text-indigo-600 dark:text-indigo-300'
  },
  cyan: {
    ring: 'ring-cyan-400/40',
    bg: 'bg-white/70 dark:bg-slate-900/50',
    grad: 'from-cyan-100/60 via-sky-100/40 to-emerald-100/50 dark:from-cyan-900/10 dark:via-sky-900/5 dark:to-emerald-900/10',
    title: 'text-cyan-700 dark:text-cyan-300',
    subtle: 'text-cyan-600 dark:text-cyan-300'
  },
  amber: {
    ring: 'ring-amber-400/40',
    bg: 'bg-white/70 dark:bg-slate-900/50',
    grad: 'from-amber-100/60 via-orange-100/40 to-rose-100/50 dark:from-amber-900/10 dark:via-orange-900/5 dark:to-rose-900/10',
    title: 'text-amber-700 dark:text-amber-300',
    subtle: 'text-amber-600 dark:text-amber-300'
  },
  emerald: {
    ring: 'ring-emerald-400/40',
    bg: 'bg-white/70 dark:bg-slate-900/50',
    grad: 'from-emerald-100/60 via-teal-100/40 to-lime-100/50 dark:from-emerald-900/10 dark:via-teal-900/5 dark:to-lime-900/10',
    title: 'text-emerald-700 dark:text-emerald-300',
    subtle: 'text-emerald-600 dark:text-emerald-300'
  },
  purple: {
    ring: 'ring-purple-400/40',
    bg: 'bg-white/70 dark:bg-slate-900/50',
    grad: 'from-purple-100/60 via-violet-100/40 to-fuchsia-100/50 dark:from-purple-900/10 dark:via-violet-900/5 dark:to-fuchsia-900/10',
    title: 'text-purple-700 dark:text-purple-300',
    subtle: 'text-purple-600 dark:text-purple-300'
  },
  orange: {
    ring: 'ring-orange-400/40',
    bg: 'bg-white/70 dark:bg-slate-900/50',
    grad: 'from-orange-100/60 via-amber-100/40 to-yellow-100/50 dark:from-orange-900/10 dark:via-amber-900/5 dark:to-yellow-900/10',
    title: 'text-orange-700 dark:text-orange-300',
    subtle: 'text-orange-600 dark:text-orange-300'
  }
};

export const AnalogyIntro: React.FC<AnalogyIntroProps> = ({ titleA, textA, titleB, textB, accent = 'rose' }) => {
  const c = colorMap[accent];
  return (
    <div className={`relative group overflow-hidden rounded-2xl border border-white/40 dark:border-white/10 backdrop-blur-md ${c.bg} p-5 md:p-6 shadow-sm hover:shadow-md transition-all ring-1 ${c.ring}`}>
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${c.grad}`} />
      <div className="relative grid md:grid-cols-2 gap-6">
        <div>
          <p className={`text-xs uppercase tracking-wide font-semibold mb-1 ${c.title}`}>{titleA}</p>
          <p className="text-[13px] md:text-sm leading-relaxed text-slate-700 dark:text-slate-300">{textA}</p>
        </div>
        <div>
          <p className={`text-xs uppercase tracking-wide font-semibold mb-1 ${c.title}`}>{titleB}</p>
          <p className="text-[13px] md:text-sm leading-relaxed text-slate-700 dark:text-slate-300">{textB}</p>
        </div>
      </div>
    </div>
  );
};

export default AnalogyIntro;
