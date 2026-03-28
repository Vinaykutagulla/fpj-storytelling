import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const StudentToProfessionalLogo = ({ 
  size = 140, 
  variant = 'journey',
  showText = true,
  animated = true 
}) => {
  const [progressStage, setProgressStage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Cycle through progression stages
  useEffect(() => {
    if (!animated) return;
    const interval = setInterval(() => {
      setProgressStage(prev => (prev + 1) % 4);
    }, 2500);
    return () => clearInterval(interval);
  }, [animated]);

  const variants = {
    journey: {
      student: '#ff6b6b',      // Bright red - energy/passion
      learning: '#4ecdc4',     // Teal - growth  
      career: '#45b7d1',       // Blue - professional
      success: '#f9ca24',      // Gold - achievement
      accent: '#6c5ce7',       // Purple - transformation
      text: '#2d3436'
    },
    academic: {
      student: '#e74c3c',      // Academic red
      learning: '#27ae60',     // Green - knowledge
      career: '#3498db',       // Professional blue
      success: '#f39c12',      // Achievement orange
      accent: '#9b59b6',       // Purple wisdom
      text: '#2c3e50'
    },
    pharma: {
      student: '#ff7675',      // Soft red
      learning: '#00b894',     // Medical green
      career: '#0984e3',       // Pharma blue
      success: '#fdcb6e',      // Gold success
      accent: '#6c5ce7',       // Innovation purple
      text: '#2d3436'
    },
    modern: {
      student: '#ff3838',      // Vibrant red
      learning: '#2ed573',     // Fresh green
      career: '#3742fa',       // Modern blue
      success: '#ffa502',      // Bright orange
      accent: '#5f27cd',       // Deep purple
      text: '#1e1e1e'
    }
  };

  const colors = variants[variant];
  const logoId = `s2p-logo-${variant}-${size}`;

  const getStageColor = (stage) => {
    switch(stage) {
      case 0: return colors.student;
      case 1: return colors.learning;
      case 2: return colors.career;
      case 3: return colors.success;
      default: return colors.student;
    }
  };

  const getStageLabel = (stage) => {
    switch(stage) {
      case 0: return 'STUDENT';
      case 1: return 'LEARNING';
      case 2: return 'GROWING';
      case 3: return 'PROFESSIONAL';
      default: return 'STUDENT';
    }
  };

  return (
    <motion.div 
      className="flex items-center gap-4 select-none cursor-pointer"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {/* Main Logo Container */}
      <div className="relative">
        {/* Outer Progress Ring */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: `conic-gradient(${getStageColor(progressStage)} ${(progressStage + 1) * 90}deg, rgba(0,0,0,0.1) ${(progressStage + 1) * 90}deg)`
          }}
          animate={animated ? {
            rotate: 360
          } : {}}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div 
            className="w-full h-full rounded-full border-4 border-transparent"
            style={{ 
              background: 'white',
              backgroundClip: 'padding-box',
              margin: '2px'
            }}
          />
        </motion.div>

        <svg
          width={size}
          height={size}
          viewBox="0 0 140 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-10"
        >
          <defs>
            {/* Progress Gradients */}
            <linearGradient id={`progress-${logoId}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={colors.student} />
              <stop offset="33%" stopColor={colors.learning} />
              <stop offset="66%" stopColor={colors.career} />
              <stop offset="100%" stopColor={colors.success} />
            </linearGradient>

            <radialGradient id={`center-${logoId}`} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="70%" stopColor={getStageColor(progressStage)} stopOpacity="0.3" />
              <stop offset="100%" stopColor={getStageColor(progressStage)} stopOpacity="0.1" />
            </radialGradient>

            {/* Glow effect */}
            <filter id={`glow-${logoId}`} x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Background Circle */}
          <circle
            cx="70"
            cy="70"
            r="65"
            fill={`url(#center-${logoId})`}
            stroke="none"
          />

          {/* Progress Path */}
          <motion.path
            d="M 20 70 Q 35 50 50 70 Q 65 90 80 70 Q 95 50 120 70"
            stroke={`url(#progress-${logoId})`}
            strokeWidth="4"
            fill="none"
            filter={`url(#glow-${logoId})`}
            strokeDasharray="200"
            animate={animated ? {
              strokeDashoffset: [200, 0, -200]
            } : {}}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Stage Nodes */}
          {[20, 50, 80, 120].map((x, index) => (
            <g key={index}>
              <motion.circle
                cx={x}
                cy="70"
                r={progressStage >= index ? "8" : "6"}
                fill={progressStage >= index ? getStageColor(index) : "#e0e0e0"}
                stroke="#ffffff"
                strokeWidth="2"
                filter={progressStage >= index ? `url(#glow-${logoId})` : "none"}
                animate={animated && progressStage >= index ? {
                  scale: [1, 1.2, 1],
                  opacity: [0.8, 1, 0.8]
                } : {}}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: index * 0.2,
                  ease: "easeInOut"
                }}
              />
              
              {/* Stage Icons */}
              <g transform={`translate(${x}, 70)`} fill="#ffffff" fontSize="8">
                {index === 0 && (
                  <text textAnchor="middle" dy="3" className="font-bold">🎓</text>
                )}
                {index === 1 && (
                  <text textAnchor="middle" dy="3" className="font-bold">📚</text>
                )}
                {index === 2 && (
                  <text textAnchor="middle" dy="3" className="font-bold">💼</text>
                )}
                {index === 3 && (
                  <text textAnchor="middle" dy="3" className="font-bold">⭐</text>
                )}
              </g>
            </g>
          ))}

          {/* Central Transformation Symbol */}
          <g transform="translate(70, 70)">
            {/* Rotating DNA/Growth Helix */}
            <motion.g
              animate={animated ? { rotate: 360 } : {}}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            >
              <path
                d="M -15,-10 Q 0,0 15,10 M -15,10 Q 0,0 15,-10"
                stroke={colors.accent}
                strokeWidth="2.5"
                fill="none"
                opacity="0.7"
              />
              <circle cx="-15" cy="-10" r="2" fill={colors.student} />
              <circle cx="15" cy="10" r="2" fill={colors.success} />
              <circle cx="-15" cy="10" r="2" fill={colors.learning} />
              <circle cx="15" cy="-10" r="2" fill={colors.career} />
            </motion.g>

            {/* Progress Indicator */}
            <motion.circle
              cx="0"
              cy="0"
              r="12"
              fill="none"
              stroke={getStageColor(progressStage)}
              strokeWidth="3"
              strokeDasharray="75"
              animate={animated ? {
                strokeDashoffset: [75, 0],
                rotate: 360
              } : {}}
              transition={{
                strokeDashoffset: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 15, repeat: Infinity, ease: "linear" }
              }}
            />
          </g>

          {/* Floating Achievement Particles */}
          {Array.from({length: 8}).map((_, i) => (
            <motion.circle
              key={i}
              cx={25 + (i * 15)}
              cy={25 + Math.sin(i) * 10}
              r="2"
              fill={getStageColor(i % 4)}
              opacity="0.6"
              animate={animated ? {
                y: [-20, 20, -20],
                opacity: [0.3, 0.8, 0.3],
                scale: [0.5, 1, 0.5]
              } : {}}
              transition={{
                duration: 3 + (i * 0.3),
                repeat: Infinity,
                delay: i * 0.4,
                ease: "easeInOut"
              }}
            />
          ))}

          {/* Progress Percentage */}
          <text
            x="70"
            y="110"
            textAnchor="middle"
            fill={getStageColor(progressStage)}
            fontSize="12"
            fontWeight="bold"
            className="font-mono"
          >
            {((progressStage + 1) * 25)}%
          </text>
        </svg>

        {/* Stage Label */}
        <motion.div
          className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white rounded-full px-3 py-1 shadow-lg border-2"
          style={{ borderColor: getStageColor(progressStage) }}
          animate={animated ? {
            scale: [1, 1.05, 1],
            backgroundColor: [`#ffffff`, `${getStageColor(progressStage)}20`, `#ffffff`]
          } : {}}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <span 
            className="text-xs font-bold font-mono"
            style={{ color: getStageColor(progressStage) }}
          >
            {getStageLabel(progressStage)}
          </span>
        </motion.div>
      </div>

      {/* Dynamic Text */}
      {showText && (
        <motion.div 
          className="flex flex-col font-sans"
          animate={isHovered ? { x: 3 } : { x: 0 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <motion.div 
            className="font-bold tracking-tight leading-none"
            style={{ 
              fontSize: `${size * 0.18}px`,
              color: colors.text
            }}
          >
            <motion.span
              style={{ color: colors.student }}
              animate={animated ? {
                color: [colors.student, colors.success, colors.student]
              } : {}}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              First
            </motion.span>
            <span style={{ color: colors.career }}>Pharma</span>
            <span style={{ color: colors.success }}>Job</span>
          </motion.div>
          
          <motion.div
            className="font-semibold tracking-wide mt-1"
            style={{ 
              fontSize: `${size * 0.09}px`,
              color: `${colors.text}cc`
            }}
            animate={animated ? {
              opacity: [0.7, 1, 0.7]
            } : {}}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Student → Professional
          </motion.div>

          {/* Current Stage Indicator */}
          <motion.div
            className="text-xs font-bold mt-2 px-2 py-1 rounded"
            style={{ 
              backgroundColor: `${getStageColor(progressStage)}20`,
              color: getStageColor(progressStage)
            }}
            animate={animated ? {
              scale: [1, 1.05, 1]
            } : {}}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {getStageLabel(progressStage)} PHASE
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

// Showcase Component
const StudentToProfessionalShowcase = () => {
  const [selectedVariant, setSelectedVariant] = useState('journey');
  const [showAnimated, setShowAnimated] = useState(true);

  const variants = [
    { key: 'journey', name: '🚀 JOURNEY', desc: 'Bright progression colors' },
    { key: 'academic', name: '🎓 ACADEMIC', desc: 'Classic educational theme' },
    { key: 'pharma', name: '💊 PHARMA', desc: 'Medical industry focused' },
    { key: 'modern', name: '✨ MODERN', desc: 'Contemporary vibrant style' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-blue-500 to-yellow-500 mb-4">
            Student to Professional Journey
          </h1>
          <p className="text-gray-600 text-xl">Your pharmaceutical career progression visualized</p>
        </motion.div>

        {/* Controls */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {variants.map(variant => (
            <motion.button
              key={variant.key}
              onClick={() => setSelectedVariant(variant.key)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                selectedVariant === variant.key 
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg scale-105' 
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow border'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {variant.name}
            </motion.button>
          ))}
          
          <motion.button
            onClick={() => setShowAnimated(!showAnimated)}
            className={`px-6 py-3 rounded-xl font-semibold transition-all ${
              showAnimated 
                ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-lg' 
                : 'bg-white text-gray-700 hover:bg-gray-50 shadow border'
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {showAnimated ? '⚡ ANIMATED' : '📱 STATIC'}
          </motion.button>
        </motion.div>

        {/* Main Logo Display */}
        <motion.div 
          className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-16 mb-12 text-center border border-white/50"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <StudentToProfessionalLogo 
            size={200} 
            variant={selectedVariant} 
            animated={showAnimated}
          />
        </motion.div>

        {/* Journey Stages Explanation */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {[
            { icon: '🎓', title: 'STUDENT', desc: 'Beginning your pharmaceutical education journey', color: '#ff6b6b' },
            { icon: '📚', title: 'LEARNING', desc: 'Gaining knowledge and practical skills', color: '#4ecdc4' },
            { icon: '💼', title: 'GROWING', desc: 'Applying skills in real-world experiences', color: '#45b7d1' },
            { icon: '⭐', title: 'PROFESSIONAL', desc: 'Thriving in your pharmaceutical career', color: '#f9ca24' }
          ].map((stage, index) => (
            <motion.div 
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-white/30"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-4xl mb-4">{stage.icon}</div>
              <h3 className="font-bold text-lg mb-2" style={{ color: stage.color }}>
                {stage.title}
              </h3>
              <p className="text-sm text-gray-600">{stage.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Size Variations */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 text-center shadow-lg">
            <h3 className="text-lg font-bold mb-6 text-purple-600">HEADER SIZE</h3>
            <StudentToProfessionalLogo size={140} variant={selectedVariant} animated={showAnimated} />
          </div>
          
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 text-center shadow-lg">
            <h3 className="text-lg font-bold mb-6 text-blue-600">NAVIGATION SIZE</h3>
            <StudentToProfessionalLogo size={100} variant={selectedVariant} animated={showAnimated} />
          </div>
          
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 text-center shadow-lg">
            <h3 className="text-lg font-bold mb-6 text-pink-600">MOBILE SIZE</h3>
            <StudentToProfessionalLogo size={80} variant={selectedVariant} animated={showAnimated} />
          </div>
        </motion.div>

        {/* Features */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <div className="bg-gradient-to-br from-red-100 to-red-200 rounded-xl p-6 text-center shadow-lg">
            <div className="text-3xl mb-3">📈</div>
            <h4 className="font-bold text-red-700 mb-2">PROGRESS TRACKING</h4>
            <p className="text-sm text-red-600">Visual career progression</p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl p-6 text-center shadow-lg">
            <div className="text-3xl mb-3">🎯</div>
            <h4 className="font-bold text-blue-700 mb-2">GOAL ORIENTED</h4>
            <p className="text-sm text-blue-600">Clear path to success</p>
          </div>
          
          <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-xl p-6 text-center shadow-lg">
            <div className="text-3xl mb-3">🌟</div>
            <h4 className="font-bold text-green-700 mb-2">INSPIRING</h4>
            <p className="text-sm text-green-600">Motivates growth mindset</p>
          </div>
          
          <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-xl p-6 text-center shadow-lg">
            <div className="text-3xl mb-3">🚀</div>
            <h4 className="font-bold text-yellow-700 mb-2">DYNAMIC</h4>
            <p className="text-sm text-yellow-600">Animated journey stages</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default StudentToProfessionalShowcase;