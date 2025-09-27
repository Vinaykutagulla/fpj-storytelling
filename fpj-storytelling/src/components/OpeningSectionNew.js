import React, { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import ErrorBoundary from './ErrorBoundary';

// Lazy-load heavy 3D component
const EnhancedPenicillin3D = lazy(() => import('./EnhancedPenicillin3D'));

const OpeningSection = () => {
  return (
    <motion.div 
      role="region"
      aria-labelledby="opening-heading"
      className="w-full min-h-screen flex items-center relative py-8 lg:py-12"
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
      {/* Japanese-inspired Seigaiha (wave) pattern background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-15">
        <svg width="100%" height="100%" viewBox="0 0 400 400" className="w-full h-full">
          <defs>
            <pattern id="seigaiha-opening" x="0" y="0" width="80" height="40" patternUnits="userSpaceOnUse">
              <path d="M0,40 Q20,20 40,40 T80,40" stroke="#3b82f6" strokeWidth="1" fill="none"/>
              <path d="M0,40 Q20,15 40,40 T80,40" stroke="#3b82f6" strokeWidth="0.5" fill="none"/>
              <path d="M0,40 Q20,25 40,40 T80,40" stroke="#3b82f6" strokeWidth="0.5" fill="none"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#seigaiha-opening)"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Content Column */}
          <div className="text-left">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="space-y-6"
            >
              {/* Subtitle */}
              <motion.div 
                className="text-sm text-blue-600 font-medium tracking-wide uppercase"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Molecule
              </motion.div>

              {/* Main Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
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
                <p className="text-xl text-slate-600 leading-relaxed mb-4">
                  Follow the incredible path from laboratory discovery to life-saving medicine.
                </p>
                <p className="text-lg text-slate-500">
                  At <span className="text-blue-700 font-medium">FirstPharmaJob</span>, students learn by following this same journey—building skills that matter in the real world of pharmaceutical development.
                </p>
              </motion.div>

              {/* Call to Action Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.3 }}
              >
                <a 
                  href="#preclinical"
                  className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg"
                  aria-label="Skip to Preclinical section to start your journey"
                >
                  Start Your Journey
                </a>
                <a 
                  href="#services"
                  className="px-8 py-3 border border-blue-300 text-blue-700 font-medium rounded-lg hover:bg-blue-50 hover:border-blue-400 transition-all duration-300 hover:scale-105"
                  aria-label="View all pharmaceutical career services"
                >
                  Explore Services
                </a>
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
                <ErrorBoundary>
                  <Suspense fallback={
                    <div className="w-80 h-80 bg-blue-100/50 rounded-2xl flex items-center justify-center shadow-lg backdrop-blur-sm">
                      <div className="text-blue-400">Loading molecule...</div>
                    </div>
                  }>
                    <EnhancedPenicillin3D />
                  </Suspense>
                </ErrorBoundary>

                {/* Molecular Formula Display */}
                <motion.div 
                  className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 text-center bg-white px-4 py-2 rounded-lg shadow-md border border-blue-200"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    rotate: [0, 1, -1, 0]
                  }}
                  transition={{ 
                    duration: 1.5, 
                    delay: 1.8,
                    rotate: { 
                      duration: 6, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }
                  }}
                  title="Penicillin molecular formula"
                >
                  <span className="text-blue-700 font-mono text-sm font-semibold">C₁₆H₁₈N₂O₄S</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Simple Journey Preview */}
        <motion.div 
          className="mt-16 text-center"
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