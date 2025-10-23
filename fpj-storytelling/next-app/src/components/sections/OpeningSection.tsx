"use client";
import React from 'react';
import { motion } from 'framer-motion';

// Custom CSS for 3D effects
const customStyles = `
  @keyframes spin-slow {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  .animate-spin-slow {
    animation: spin-slow 8s linear infinite;
  }
  .perspective-1000 {
    perspective: 1000px;
  }
  .transform-gpu {
    transform: translateZ(0);
  }
`;

const OpeningSection: React.FC = () => {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: customStyles }} />
      <div className="relative w-full bg-gradient-to-br from-indigo-600 via-indigo-500 to-violet-600 text-white">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="bg-white/95 backdrop-blur-md rounded-3xl px-6 py-12 md:py-16 border border-white/60 shadow-2xl">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl leading-tight">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">From Molecule to Medicine</span>
              <span className="mt-2 block text-slate-700">Your Journey Begins Here</span>
            </h1>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Just like discovering a life-saving drug, your career pathway follows a validated sequence—from curiosity to real-world impact. We guide you through every stage.
            </p>
            <p className="mt-4 text-base text-slate-500">
              At <span className="font-semibold text-indigo-600">FirstPharmaJob Institute</span>, you are discovered, developed, validated and launched—mirroring the lifecycle of a breakthrough therapy.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#preclinical"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white px-8 py-3 font-semibold shadow-lg shadow-indigo-600/30 hover:shadow-indigo-700/40 transition-all hover:scale-105"
              >
                Start Your Journey
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border-2 border-indigo-600/70 px-8 py-3 font-semibold text-indigo-700 bg-white/70 hover:bg-indigo-50 transition-all hover:scale-105"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>

        {/* The FirstPharmaJob Promise Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative mt-16 max-w-6xl mx-auto"
        >
          <div className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-indigo-100/60 shadow-2xl overflow-hidden">
            {/* Enhanced Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-3xl">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-indigo-200/30 to-purple-200/30 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-20 -left-20 w-56 h-56 bg-gradient-to-br from-blue-200/30 to-cyan-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-gradient-to-br from-violet-200/20 to-pink-200/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>
            
            <div className="relative z-10">
              {/* Enhanced Header with Penicillin */}
              <div className="text-center mb-12">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0, rotateX: 45 }}
                  animate={{ scale: 1, opacity: 1, rotateX: 0 }}
                  transition={{ duration: 1, delay: 0.7, ease: [0.68, -0.55, 0.265, 1.55] }}
                  className="relative inline-block mb-6"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 rounded-2xl blur-xl opacity-20 animate-pulse"></div>
                  <div className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 text-white px-8 py-4 rounded-2xl shadow-2xl border border-white/20">
                    <div className="flex items-center gap-4">
                      <span className="text-3xl animate-bounce">🎯</span>
                      <div className="text-center">
                        <h2 className="text-xl font-bold tracking-wide">The FirstPharmaJob Promise</h2>
                        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/60 to-transparent mt-2"></div>
                      </div>
                      {/* Penicillin Molecule */}
                      <div className="w-16 h-16 relative">
                        {/* Outer rotating ring */}
                        <motion.div 
                          className="absolute inset-0 border-2 border-white/30 rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        />
                        {/* Inner rotating molecule structure */}
                        <motion.div 
                          className="absolute inset-2 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full flex items-center justify-center"
                          animate={{ rotate: -360 }}
                          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                        >
                          <div className="relative">
                            {/* Molecule atoms */}
                            <div className="absolute -top-1 -left-1 w-2 h-2 bg-white rounded-full opacity-80"></div>
                            <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-yellow-300 rounded-full opacity-80"></div>
                            <div className="absolute top-0 -right-1 w-1.5 h-1.5 bg-red-400 rounded-full opacity-80"></div>
                            <div className="absolute -bottom-1 left-0 w-1.5 h-1.5 bg-blue-400 rounded-full opacity-80"></div>
                            {/* Central structure */}
                            <div className="w-4 h-4 bg-white/20 rounded-sm flex items-center justify-center">
                              <span className="text-[8px] font-mono text-white font-bold">P</span>
                            </div>
                          </div>
                        </motion.div>
                        {/* Chemical formula overlay */}
                        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                          <span className="text-xs font-mono text-white/90 font-bold bg-black/20 px-2 py-1 rounded">C₁₆H₁₈N₂O₄S</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed"
                >
                  Just like <span className="font-semibold text-indigo-600">Penicillin revolutionized medicine</span>, we're revolutionizing pharmaceutical careers with our outcome-guaranteed approach.
                </motion.p>
              </div>

              {/* Enhanced Promise Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    icon: "⏱️",
                    title: "12 Weeks Mastery",
                    description: "Master pharmaceutical industry skills in 12 weeks",
                    gradient: "from-emerald-400 via-emerald-500 to-teal-600",
                    shadowColor: "shadow-emerald-500/25",
                    glowColor: "from-emerald-400/20 to-teal-400/20"
                  },
                  {
                    icon: "💼",
                    title: "Real Portfolio",
                    description: "Build real project portfolio",
                    gradient: "from-blue-400 via-blue-500 to-indigo-600",
                    shadowColor: "shadow-blue-500/25",
                    glowColor: "from-blue-400/20 to-indigo-400/20"
                  },
                  {
                    icon: "📞",
                    title: "Interview Guarantee",
                    description: "Get minimum 3 interview calls or money back*",
                    gradient: "from-purple-400 via-purple-500 to-pink-600",
                    shadowColor: "shadow-purple-500/25",
                    glowColor: "from-purple-400/20 to-pink-400/20"
                  },
                  {
                    icon: "🤝",
                    title: "Lifetime Support",
                    description: "Lifetime placement support",
                    gradient: "from-orange-400 via-orange-500 to-red-600",
                    shadowColor: "shadow-orange-500/25",
                    glowColor: "from-orange-400/20 to-red-400/20"
                  }
                ].map((promise, index) => (
                  <motion.div
                    key={promise.title}
                    initial={{ opacity: 0, y: 40, rotateX: 30 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: 1.2 + (index * 0.15),
                      ease: [0.68, -0.55, 0.265, 1.55],
                      type: "spring",
                      stiffness: 100
                    }}
                    whileHover={{ 
                      y: -12, 
                      rotateY: 5,
                      transition: { duration: 0.3 }
                    }}
                    className="group relative perspective-1000"
                  >
                    {/* Glow Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${promise.glowColor} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform scale-110`}></div>
                    
                    {/* Main Card */}
                    <div className={`relative h-full bg-white/95 backdrop-blur-sm rounded-2xl p-7 border border-white/60 ${promise.shadowColor} shadow-xl hover:shadow-2xl transition-all duration-500 transform-gpu`}>
                      
                      {/* Animated Border */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Enhanced Icon with 3D Effect */}
                      <div className="relative mb-6">
                        <div className={`absolute inset-0 bg-gradient-to-br ${promise.gradient} rounded-2xl blur-md opacity-30 scale-110`}></div>
                        <div className={`relative w-16 h-16 bg-gradient-to-br ${promise.gradient} rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                          <span className="drop-shadow-lg">{promise.icon}</span>
                        </div>
                      </div>
                      
                      {/* Content with enhanced typography */}
                      <h4 className="font-bold text-slate-800 mb-3 text-xl leading-tight group-hover:text-slate-900 transition-colors">
                        {promise.title}
                      </h4>
                      <p className="text-slate-600 text-sm leading-relaxed group-hover:text-slate-700 transition-colors">
                        {promise.description}
                      </p>
                      
                      {/* Enhanced Check mark with pulse */}
                      <div className="absolute top-6 right-6 w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-25"></div>
                      </div>
                      
                      {/* Progress indicator */}
                      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-slate-200 to-transparent">
                        <div className={`h-full bg-gradient-to-r ${promise.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Simple Terms Notice */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 2 }}
                className="mt-10 text-center"
              >
                <p className="text-sm text-slate-500 italic">
                  *Outcome-guaranteed program with structured learning path
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Floating Trust Badges - Bottom Right */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="absolute bottom-6 right-6 flex flex-col gap-2 z-10"
        >
          {/* ISO Certification Badge */}
          <motion.div
            whileHover={{ scale: 1.05, x: -5 }}
            className="group relative"
          >
            <div className="flex items-center gap-2 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-lg border border-blue-100 hover:border-blue-300 transition-all">
              {/* ISO Logo */}
              <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <span className="text-xs font-medium text-blue-700">ISO 9001:2015</span>
            </div>
            <div className="absolute right-full mr-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              <div className="bg-slate-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap shadow-lg">
                Quality Management Certified
              </div>
            </div>
          </motion.div>

          {/* MSME Badge */}
          <motion.div
            whileHover={{ scale: 1.05, x: -5 }}
            className="group relative"
          >
            <div className="flex items-center gap-2 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-lg border border-green-100 hover:border-green-300 transition-all">
              {/* MSME Logo */}
              <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <span className="text-xs font-medium text-green-700">MSME</span>
            </div>
            <div className="absolute right-full mr-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              <div className="bg-slate-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap shadow-lg">
                Government Registered
              </div>
            </div>
          </motion.div>

          {/* Outcome Guarantee Badge */}
          <motion.div
            whileHover={{ scale: 1.05, x: -5 }}
            className="group relative"
          >
            <div className="flex items-center gap-2 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-lg border border-amber-100 hover:border-amber-300 transition-all">
              <span className="text-sm">🏆</span>
              <span className="text-xs font-medium text-amber-700">Outcome Guaranteed</span>
            </div>
            <div className="absolute right-full mr-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              <div className="bg-slate-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap shadow-lg">
                India's First Training Promise
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Floating Trust Badges - Bottom Right */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="absolute bottom-6 right-6 flex flex-col gap-2 z-10"
        >
          {/* ISO Certification Badge */}
          <motion.div
            whileHover={{ scale: 1.05, x: -5 }}
            className="group relative"
          >
            <div className="flex items-center gap-2 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-lg border border-blue-100 hover:border-blue-300 transition-all">
              <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <span className="text-xs font-medium text-blue-700">ISO 9001:2015</span>
            </div>
          </motion.div>

          {/* MSME Badge */}
          <motion.div
            whileHover={{ scale: 1.05, x: -5 }}
            className="group relative"
          >
            <div className="flex items-center gap-2 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-lg border border-green-100 hover:border-green-300 transition-all">
              <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <span className="text-xs font-medium text-green-700">MSME</span>
            </div>
          </motion.div>

          {/* Outcome Guarantee Badge */}
          <motion.div
            whileHover={{ scale: 1.05, x: -5 }}
            className="group relative"
          >
            <div className="flex items-center gap-2 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-lg border border-amber-100 hover:border-amber-300 transition-all">
              <span className="text-sm">🏆</span>
              <span className="text-xs font-medium text-amber-700">Outcome Guaranteed</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
      </div>
    </>
  );
};

export default OpeningSection;
