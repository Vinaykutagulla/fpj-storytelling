"use client";
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface SectionItem { id: string; title: string; }

export const FloatingProgressIndicator: React.FC<{ items: SectionItem[]; activeId: string; }> = ({ items, activeId }) => {
  const activeIndex = items.findIndex(i => i.id === activeId);
  const progress = activeIndex >= 0 ? ((activeIndex + 1) / items.length) * 100 : 0;
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollTime, setLastScrollTime] = useState(Date.now());

  const getSectionColorSolid = (sectionId: string) => {
    const colorMap: Record<string, string> = {
      'opening': '#06b6d4',
      'preclinical': '#ec4899',
      'clinical': '#84cc16',
      'regulatory': '#06b6d4',
      'manufacturing': '#ec4899',
      'launch': '#84cc16'
    };
    return colorMap[sectionId] || '#06b6d4';
  };

  useEffect(() => {
    const handleScroll = () => { setLastScrollTime(Date.now()); setIsVisible(true); };
    const hideTimer = setInterval(() => { if (Date.now() - lastScrollTime > 3000) setIsVisible(false); }, 1000);
    window.addEventListener('scroll', handleScroll);
    return () => { window.removeEventListener('scroll', handleScroll); clearInterval(hideTimer); };
  }, [lastScrollTime]);

  const currentColor = activeIndex >= 0 ? getSectionColorSolid(items[activeIndex].id) : '#06b6d4';

  return (
    <motion.div
      className="floating-progress-portal hidden sm:block fixed right-3 lg:right-6 top-1/2 transform -translate-y-1/2 z-40 pointer-events-none"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: isVisible ? 1 : 0.6, x: isVisible ? 0 : 30, scale: isVisible ? 1 : 0.9 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setLastScrollTime(Date.now())}
    >
      <div
        className="relative w-24 h-24 group cursor-pointer pointer-events-auto"
        role="progressbar"
        aria-live="polite"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(progress)}
        aria-label={`Journey progress: ${activeIndex + 1} of ${items.length} sections`}
        aria-describedby="journey-progress-tooltip"
      >
        <span className="sr-only">{`Journey progress: ${activeIndex + 1} of ${items.length} sections (${Math.round(progress)}%)`}</span>
        <div className="absolute inset-0 rounded-full bg-black/40 dark:bg-slate-800/70 backdrop-blur-md border border-white/25 dark:border-slate-600 shadow-2xl transition-colors" />
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 96 96">
          <circle cx="48" cy="48" r="36" stroke="rgba(255,255,255,0.15)" strokeWidth="8" fill="none" />
          <motion.circle
            cx="48" cy="48" r="36" stroke={currentColor} strokeWidth="8" fill="none" strokeLinecap="round"
            initial={{ strokeDasharray: '0 226.2' }}
            animate={{ strokeDasharray: `${(progress / 100) * 226.2} 226.2` }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            style={{ filter: `drop-shadow(0 0 12px ${currentColor}60)` }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <div className="text-xl font-bold" style={{ color: currentColor }}>{activeIndex + 1}</div>
          <div className="text-sm opacity-70 font-medium">of {items.length}</div>
        </div>
        {isVisible && (
          <div
            id="journey-progress-tooltip"
            className="absolute -left-2 top-1/2 transform -translate-y-1/2 -translate-x-full"
          >
            <div className="bg-black/90 dark:bg-slate-800/90 backdrop-blur-sm text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap border border-white/20 dark:border-slate-600 transition-colors">
              <div style={{ color: currentColor }} className="font-medium">{items[activeIndex]?.title || 'Journey'}</div>
              <div className="text-xs opacity-60">{Math.round(progress)}% Complete</div>
              <div className="absolute right-0 top-1/2 transform translate-x-full -translate-y-1/2" style={{ width: 0, height: 0, borderTop: '6px solid transparent', borderBottom: '6px solid transparent', borderLeft: '6px solid rgba(0,0,0,0.9)' }} />
            </div>
          </div>
        )}
      </div>
      <div className="mt-4 flex flex-col gap-2 lg:mt-6 lg:gap-3 pointer-events-auto">
        {items.map((item, idx) => (
          <motion.a
            key={item.id}
            href={`#${item.id}`}
            className="w-4 h-4 rounded-full border-2 border-white/40 transition-all duration-300 hover:scale-125"
            style={{
              backgroundColor: idx <= activeIndex ? getSectionColorSolid(item.id) : 'transparent',
              borderColor: idx === activeIndex ? getSectionColorSolid(item.id) : 'rgba(255,255,255,0.3)',
              boxShadow: idx === activeIndex ? `0 0 12px ${getSectionColorSolid(item.id)}60` : 'none'
            }}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 1.1 }}
            aria-label={`Jump to ${item.title} section`}
            aria-current={idx === activeIndex ? 'true' : undefined}
          />
        ))}
      </div>
    </motion.div>
  );
};

function getSectionColorSolid(sectionId: string) {
  const map: Record<string, string> = {
    opening: '#06b6d4',
    preclinical: '#ec4899',
    clinical: '#84cc16',
    regulatory: '#06b6d4',
    manufacturing: '#ec4899',
    launch: '#84cc16'
  };
  return map[sectionId] || '#06b6d4';
}

export default FloatingProgressIndicator;
