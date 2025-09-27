import React, { lazy, Suspense, useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import ErrorBoundary from './ErrorBoundary';

// Lazy-load heavy 3D component
const EnhancedPenicillin3D = lazy(() => import('./EnhancedPenicillin3D'));

const OpeningSection = () => {
  const [showDiscoveryStory, setShowDiscoveryStory] = useState(false);
  const [showHint, setShowHint] = useState(true);
  const popoverRef = useRef(null);
  const moleculeWrapperRef = useRef(null);

  // Dismiss hint after 6s or first interaction
  useEffect(() => {
    if (!showHint) return;
    const timer = setTimeout(() => setShowHint(false), 6000);
    return () => clearTimeout(timer);
  }, [showHint]);

  // Outside click & ESC handling
  useEffect(() => {
    if (!showDiscoveryStory) return;
    const handleKey = (e) => { if (e.key === 'Escape') setShowDiscoveryStory(false); };
    const handleClick = (e) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(e.target) &&
        moleculeWrapperRef.current &&
        !moleculeWrapperRef.current.contains(e.target)
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
  // Basic mobile detection (runs client-side only)
  const isMobile = typeof window !== 'undefined' && window.matchMedia('(max-width: 640px)').matches;

  return (
    <motion.div 
      role="region"
      aria-labelledby="opening-heading"
      className="w-full min-h-[70vh] flex items-start relative pt-12 pb-6 sm:pt-14 sm:pb-8 lg:pt-20 lg:pb-12"
      style={{
        background: `
          linear-gradient(135deg, 
            #dbeafe 0%, 
            #e0e7ff 50%, 
            #f0f4ff 100%
          )
        `
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        
        {/* Two Column Layout */}
  <div className="grid lg:grid-cols-2 gap-10 md:gap-8 items-center">
          
          {/* Content Column */}
          <div className="text-left">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="space-y-3"
            >
              {/* Main Headline */}
              <h1 className="text-[1.85rem] leading-[2.2rem] md:text-4xl lg:text-5xl font-bold tracking-tight">
                <motion.span 
                  className="block text-slate-800"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  The Journey from
                </motion.span>
                <motion.span 
                  className="block bg-gradient-to-r from-blue-700 to-indigo-900 bg-clip-text text-transparent font-black"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                >
                  <span id="opening-heading">Molecule to Medicine</span>
                </motion.span>
              </h1>

              {/* Description */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.1 }}
              >
                <p className="text-lg text-slate-600 leading-relaxed mb-3">
                  Follow the incredible path from laboratory discovery to life-saving medicine.
                </p>
                <p className="text-base text-slate-500">
                  At <span className="text-blue-700 font-medium">FirstPharmaJob</span>, students learn by following this same journey—building skills that matter in the real world of pharmaceutical development.
                </p>
              </motion.div>

              {/* Call to Action Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.3 }}
              >
                <Link 
                  to="/services"
                  className="w-full sm:w-auto px-8 py-3 sm:px-10 sm:py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold text-base sm:text-lg rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:scale-[1.03] shadow-lg hover:shadow-xl text-center"
                  aria-label="View our professional training programs"
                >
                  Start Your Journey
                </Link>
                <Link 
                  to="/contact"
                  className="w-full sm:w-auto px-8 py-3 sm:px-10 sm:py-4 border-2 border-blue-600 text-blue-700 font-bold text-base sm:text-lg rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-[1.03] shadow-md hover:shadow-lg text-center"
                  aria-label="Get in touch to discuss your pharmaceutical career"
                >
                  Get In Touch
                </Link>
              </motion.div>
            </motion.div>
          </div>
          
          {/* Molecule Column */}
          <div className="flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              className="max-w-md w-full"
            >
              {/* Enhanced 3D Molecule with Fallback */}
              <div className="relative">
                {/* Click target wrapper */}
                <div
                  role="button"
                  tabIndex={0}
                  aria-pressed={showDiscoveryStory}
                  aria-describedby="molecule-discovery-hint"
                  onClick={() => setShowDiscoveryStory(prev => !prev)}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setShowDiscoveryStory(p => !p); } }}
                  className="focus:outline-none focus:ring-4 focus:ring-blue-300/60 rounded-2xl"
                >
                <ErrorBoundary>
                  <Suspense fallback={
                    <div className="w-72 h-72 bg-blue-100/50 rounded-2xl flex items-center justify-center shadow-lg backdrop-blur-sm">
                      <div className="text-blue-400">Loading molecule...</div>
                    </div>
                  }>
                    <EnhancedPenicillin3D />
                  </Suspense>
                </ErrorBoundary>
                {/* Molecular Formula Display */}
                <motion.div 
                  className="molecule-formula-badge absolute -bottom-4 left-1/2 -translate-x-1/2 text-center bg-white px-4 py-2 rounded-lg shadow-md border border-blue-200 select-none"
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={ isMobile ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1, rotate: [0, 1, -1, 0] } }
                  transition={{ 
                    duration: 1.2, 
                    delay: 1.4,
                    rotate: isMobile ? undefined : { duration: 6, repeat: Infinity, ease: "easeInOut" }
                  }}
                  title="Penicillin molecular formula"
                >
                  <span className="text-blue-700 font-mono text-sm font-semibold whitespace-nowrap">C₁₆H₁₈N₂O₄S</span>
                </motion.div>
                <p id="molecule-discovery-hint" className="sr-only">Tap the molecule to toggle a short discovery story about Penicillin.</p>
                </div>

                {/* Discovery Story Popover */}
                <AnimatePresence>
                  {showDiscoveryStory && (
                    <motion.div
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.35, ease: 'easeOut' }}
                      className="absolute -top-4 left-1/2 -translate-x-1/2 -translate-y-full w-[min(20rem,90vw)] z-20"
                      role="dialog" aria-label="Penicillin discovery story"
                      ref={popoverRef}
                    >
                      <div className="relative bg-white rounded-xl border border-blue-200 shadow-xl p-4 text-sm leading-relaxed">
                        <button
                          onClick={() => setShowDiscoveryStory(false)}
                          aria-label="Close discovery story"
                          className="absolute top-2 right-2 text-slate-400 hover:text-slate-600"
                        >
                          ✕
                        </button>
                        <h4 className="text-blue-700 font-semibold mb-1">Penicillin Discovery</h4>
                        <p className="text-slate-600 mb-2">In 1928, Alexander Fleming noticed a mold (Penicillium) killing bacteria on a forgotten culture plate.</p>
                        <p className="text-slate-600">A decade later, a team refined & mass-produced it—launching the antibiotic era and saving millions of lives.</p>
                        <div className="mt-3 flex justify-end">
                          <button
                            onClick={() => setShowDiscoveryStory(false)}
                            className="text-xs font-medium text-blue-600 hover:underline"
                          >Close</button>
                        </div>
                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 rotate-45 bg-white border-r border-b border-blue-200" aria-hidden="true"></div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                {/* First-load hint */}
                <AnimatePresence>
                  {showHint && !showDiscoveryStory && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.4 }}
                      className="absolute -bottom-14 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-[11px] font-medium text-blue-700 border border-blue-200 shadow"
                    >
                      Tap to learn its story
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Simple Journey Preview */}
        <motion.div 
          className="mt-12 sm:mt-14 md:mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-blue-200 max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-slate-800 mb-4">Ready to explore?</h3>
            <p className="text-slate-600 mb-6">
              Discover how groundbreaking medicines come to life, and how you can be part of that story.
            </p>
            <div className="flex flex-wrap gap-3 justify-center text-sm">
              <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-medium">Discovery</span>
              <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-medium">Testing</span>
              <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-medium">Approval</span>
              <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-medium">Launch</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default OpeningSection;