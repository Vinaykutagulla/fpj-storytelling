import React from 'react';

interface Props { title: string; subtitle?: string; className?: string }
export default function SectionTitleProxy({ title, subtitle, className = '' }: Props) {
  return (
    <div className={`mx-auto text-center max-w-3xl ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-800 dark:text-white">{title}</h2>
      {subtitle && <p className="mt-4 text-slate-600 dark:text-slate-300">{subtitle}</p>}
    </div>
  );
}
