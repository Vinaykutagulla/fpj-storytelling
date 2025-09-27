import React, { useState } from 'react';
import { motion } from 'framer-motion';

const FirstPharmaJobLogo = ({ 
  size = 120, 
  variant = 'pharmaceutical',
  showText = true,
  animated = true 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const variants = {
    pharmaceutical: {
      primary: '#0ea5e9',    // Sky blue
      secondary: '#10b981',  // Emerald green  
      accent: '#f59e0b',     // Amber
      background: '#ffffff',
      text: '#1f2937'
    },
    medical: {
      primary: '#3b82f6',    // Blue
      secondary: '#ef4444',  // Red
      accent: '#22c55e',     // Green
      background: '#ffffff',
      text: '#1f2937'
    },
    minimal: {
      primary: '#6366f1',    // Indigo
      secondary: '#8b5cf6',  // Purple
      accent: '#f59e0b',     // Amber
      background: '#ffffff',
      text: '#1f2937'
    }
  };

  const colors = variants[variant];
  const logoId = `fpj-logo-${variant}-${size}`;

  return (
    <motion.div 
      className="flex items-center gap-3 select-none cursor-pointer"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={() => setIsPaused(!isPaused)}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {/* Logo Icon */}
      <div className="relative">
        <svg
          width={size}
          height={size}
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-lg"
        >
          <defs>
            {/* Gradients */}
            <radialGradient id={`molecule-${logoId}`} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor={colors.background} stopOpacity="0.9" />
              <stop offset="100%" stopColor={colors.primary} />
            </radialGradient>
            
            <linearGradient id={`bond-${logoId}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={colors.secondary} />
              <stop offset="100%" stopColor={colors.primary} />
            </linearGradient>

            <radialGradient id={`atom-primary-${logoId}`} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor={colors.background} />
              <stop offset="70%" stopColor={colors.primary} />
              <stop offset="100%" stopColor={colors.primary} stopOpacity="0.8" />
            </radialGradient>

            <radialGradient id={`atom-secondary-${logoId}`} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor={colors.background} />
              <stop offset="70%" stopColor={colors.secondary} />
              <stop offset="100%" stopColor={colors.secondary} stopOpacity="0.8" />
            </radialGradient>

            <radialGradient id={`atom-accent-${logoId}`} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor={colors.background} />
              <stop offset="70%" stopColor={colors.accent} />
              <stop offset="100%" stopColor={colors.accent} stopOpacity="0.8" />
            </radialGradient>

            {/* Glow filter */}
            <filter id={`glow-${logoId}`} x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Background Circle */}
          <motion.circle
            cx="60"
            cy="60"
            r="58"
            fill="none"
            stroke={colors.primary}
            strokeWidth="2"
            opacity="0.2"
            animate={animated && !isPaused ? { 
              strokeDasharray: ["0 365", "183 182", "0 365"],
              rotate: 360 
            } : {}}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />

          {/* Molecular Structure */}
          <g>
            {/* Central Hub Atom */}
            <motion.circle
              cx="60"
              cy="60"
              r="12"
              fill={`url(#atom-primary-${logoId})`}
              filter={`url(#glow-${logoId})`}
              animate={animated && !isPaused ? {
                scale: [1, 1.1, 1],
                opacity: [0.8, 1, 0.8]
              } : {}}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Surrounding Atoms */}
            <motion.circle
              cx="30"
              cy="30"
              r="8"
              fill={`url(#atom-secondary-${logoId})`}
              animate={animated && !isPaused ? {
                scale: [1, 1.15, 1],
                opacity: [0.7, 1, 0.7]
              } : {}}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.3
              }}
            />

            <motion.circle
              cx="90"
              cy="30"
              r="8"
              fill={`url(#atom-accent-${logoId})`}
              animate={animated && !isPaused ? {
                scale: [1, 1.15, 1],
                opacity: [0.7, 1, 0.7]
              } : {}}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.6
              }}
            />

            <motion.circle
              cx="90"
              cy="90"
              r="8"
              fill={`url(#atom-secondary-${logoId})`}
              animate={animated && !isPaused ? {
                scale: [1, 1.15, 1],
                opacity: [0.7, 1, 0.7]
              } : {}}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.9
              }}
            />

            <motion.circle
              cx="30"
              cy="90"
              r="8"
              fill={`url(#atom-accent-${logoId})`}
              animate={animated && !isPaused ? {
                scale: [1, 1.15, 1],
                opacity: [0.7, 1, 0.7]
              } : {}}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.2
              }}
            />

            {/* Molecular Bonds */}
            <motion.line
              x1="48"
              y1="48"
              x2="30"
              y2="30"
              stroke={`url(#bond-${logoId})`}
              strokeWidth="3"
              opacity="0.7"
              animate={animated && !isPaused ? {
                opacity: [0.4, 0.9, 0.4]
              } : {}}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            <motion.line
              x1="72"
              y1="48"
              x2="90"
              y2="30"
              stroke={`url(#bond-${logoId})`}
              strokeWidth="3"
              opacity="0.7"
              animate={animated && !isPaused ? {
                opacity: [0.4, 0.9, 0.4]
              } : {}}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            />

            <motion.line
              x1="72"
              y1="72"
              x2="90"
              y2="90"
              stroke={`url(#bond-${logoId})`}
              strokeWidth="3"
              opacity="0.7"
              animate={animated && !isPaused ? {
                opacity: [0.4, 0.9, 0.4]
              } : {}}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.0
              }}
            />

            <motion.line
              x1="48"
              y1="72"
              x2="30"
              y2="90"
              stroke={`url(#bond-${logoId})`}
              strokeWidth="3"
              opacity="0.7"
              animate={animated && !isPaused ? {
                opacity: [0.4, 0.9, 0.4]
              } : {}}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5
              }}
            />

            {/* Career Path Arrow */}
            <motion.path
              d="M 20 60 Q 40 45 60 60 Q 80 75 100 60"
              stroke={colors.accent}
              strokeWidth="2.5"
              fill="none"
              opacity="0.6"
              strokeDasharray="5,3"
              animate={animated && !isPaused ? {
                strokeDashoffset: [0, -20],
                opacity: [0.4, 0.8, 0.4]
              } : {}}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear"
              }}
            />

            {/* Arrow Head */}
            <motion.path
              d="M 95 57 L 100 60 L 95 63"
              stroke={colors.accent}
              strokeWidth="2.5"
              fill="none"
              opacity="0.8"
              animate={animated && !isPaused ? {
                x: [0, 3, 0],
                opacity: [0.6, 1, 0.6]
              } : {}}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </g>

          {/* Pharmaceutical Cross (subtle) */}
          <g opacity="0.3">
            <rect x="58" y="10" width="4" height="20" fill={colors.primary} rx="2" />
            <rect x="50" y="18" width="20" height="4" fill={colors.primary} rx="2" />
          </g>
        </svg>

        {/* Play/Pause Indicator */}
        {animated && (
          <motion.div
            className="absolute -bottom-1 -right-1 bg-white rounded-full p-1 shadow-lg border border-gray-200"
            initial={{ scale: 0 }}
            animate={{ scale: isHovered ? 1 : 0.8, opacity: isHovered ? 1 : 0.7 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="w-2 h-2 flex items-center justify-center text-[8px] font-bold" style={{ color: colors.primary }}>
              {isPaused ? '▶' : '⏸'}
            </div>
          </motion.div>
        )}
      </div>

      {/* Company Text */}
      {showText && (
        <motion.div 
          className="flex flex-col"
          animate={{ x: isHovered ? 2 : 0 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <motion.div 
            className="font-bold tracking-tight leading-none"
            style={{ 
              fontSize: `${size * 0.2}px`,
              color: colors.text
            }}
          >
            <span style={{ color: colors.primary }}>First</span>
            <span style={{ color: colors.secondary }}>Pharma</span>
            <span style={{ color: colors.accent }}>Job</span>
          </motion.div>
          
          <motion.div
            className="font-medium tracking-widest mt-1"
            style={{ 
              fontSize: `${size * 0.08}px`,
              color: `${colors.text}99`
            }}
            animate={animated && !isPaused ? {
              opacity: [0.6, 1, 0.6]
            } : {}}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            MOLECULE TO CAREER
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

// Logo Variants Showcase
const LogoShowcase = () => {
  const [selectedVariant, setSelectedVariant] = useState('pharmaceutical');
  const [showAnimated, setShowAnimated] = useState(true);

  const variants = [
    { key: 'pharmaceutical', name: 'Pharmaceutical', desc: 'Professional medical industry colors' },
    { key: 'medical', name: 'Medical', desc: 'Classic medical red, blue, green' },
    { key: 'minimal', name: 'Minimal', desc: 'Clean modern purple theme' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">FirstPharmaJob Logo</h1>
          <p className="text-gray-600 text-lg">Professional pharmaceutical industry branding</p>
        </div>

        {/* Controls */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {variants.map(variant => (
            <button
              key={variant.key}
              onClick={() => setSelectedVariant(variant.key)}
              className={`px-6 py-3 rounded-xl font-medium transition-all ${
                selectedVariant === variant.key 
                  ? 'bg-blue-600 text-white shadow-lg scale-105' 
                  : 'bg-white text-gray-700 hover:bg-blue-50 shadow'
              }`}
            >
              {variant.name}
            </button>
          ))}
          
          <button
            onClick={() => setShowAnimated(!showAnimated)}
            className={`px-6 py-3 rounded-xl font-medium transition-all ${
              showAnimated 
                ? 'bg-green-600 text-white shadow-lg' 
                : 'bg-white text-gray-700 hover:bg-green-50 shadow'
            }`}
          >
            {showAnimated ? 'Animated ✨' : 'Static'}
          </button>
        </div>

        {/* Main Logo Display */}
        <div className="bg-white rounded-2xl shadow-xl p-12 mb-8 text-center">
          <FirstPharmaJobLogo 
            size={160} 
            variant={selectedVariant} 
            animated={showAnimated}
          />
        </div>

        {/* Size Variations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">Header Size</h3>
            <FirstPharmaJobLogo size={120} variant={selectedVariant} animated={showAnimated} />
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">Navigation Size</h3>
            <FirstPharmaJobLogo size={80} variant={selectedVariant} animated={showAnimated} />
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">Compact Size</h3>
            <FirstPharmaJobLogo size={60} variant={selectedVariant} animated={showAnimated} />
          </div>
        </div>

        {/* Logo Without Text */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">Icon Only - Large</h3>
            <FirstPharmaJobLogo size={100} variant={selectedVariant} showText={false} animated={showAnimated} />
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">Icon Only - Small</h3>
            <FirstPharmaJobLogo size={60} variant={selectedVariant} showText={false} animated={showAnimated} />
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <div className="text-2xl mb-2">🧬</div>
            <h4 className="font-semibold text-blue-600 mb-2">Molecular Theme</h4>
            <p className="text-sm text-gray-600">Represents pharmaceutical science</p>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <div className="text-2xl mb-2">🎯</div>
            <h4 className="font-semibold text-green-600 mb-2">Career Path</h4>
            <p className="text-sm text-gray-600">Animated arrow shows progression</p>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <div className="text-2xl mb-2">⚡</div>
            <h4 className="font-semibold text-purple-600 mb-2">Interactive</h4>
            <p className="text-sm text-gray-600">Click to pause/play animations</p>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <div className="text-2xl mb-2">📱</div>
            <h4 className="font-semibold text-amber-600 mb-2">Scalable</h4>
            <p className="text-sm text-gray-600">Works at any size, SVG-based</p>
          </div>
        </div>

        {/* Variant Description */}
        <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-semibold mb-3 text-gray-800">
            {variants.find(v => v.key === selectedVariant)?.name} Theme
          </h3>
          <p className="text-gray-600">
            {variants.find(v => v.key === selectedVariant)?.desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogoShowcase;
