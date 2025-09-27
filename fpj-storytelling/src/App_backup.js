import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// Import page components
import ServicesPage from './components/Services';
import ContactPage from './components/contact';
import AboutPage from './components/About';

// Import section components
import LaunchSection from './components/LaunchSection';
import OpeningSection from './components/OpeningSection';
import PreclinicalSection from './components/PreclinicalSection';
import ClinicalSection from './components/ClinicalSection';
import RegulatorySection from './components/RegulatorySection';
import ManufacturingSection from './components/ManufacturingSection';

// Navigation Component
const Navigation = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/', icon: '🏠' },
    { name: 'About', path: '/about', icon: '📖' },
    { name: 'Services', path: '/services', icon: '⚗️' },
    { name: 'Contact', path: '/contact', icon: '📞' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-cyan-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <EnhancedCellLogo size={48} />
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                      isActive
                        ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-500/25'
                        : 'text-cyan-100 hover:bg-cyan-700 hover:text-white'
                    }`}
                  >
                    <span className="text-lg">{item.icon}</span>
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-cyan-400 hover:text-white hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/95 backdrop-blur-sm">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 flex items-center gap-3 ${
                      isActive
                        ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-500/25'
                        : 'text-cyan-100 hover:bg-cyan-700 hover:text-white'
                    }`}
                  >
                    <span className="text-xl">{item.icon}</span>
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// Enhanced Cell Logo Component with Link
const EnhancedCellLogo = ({ size = 64 }) => {
  const [isPaused, setIsPaused] = useState(false);
  
  // Futuristic color palette
  const colors = {
    primaryColor: "#00f5ff", // Cyan electric
    secondaryColor: "#ff0080", // Hot magenta
    accentColor: "#39ff14", // Electric lime
    bgGradient: ["#0a0a0a", "#1a1a2e"], // Deep space
    nucleusGradient: ["#00f5ff", "#0080ff"], // Cyan to blue
    strokeColor: "#39ff14", // Electric lime
  };

  return (
    <Link to="/" className="flex items-center gap-3 select-none hover:scale-105 transition-transform duration-300">
      <motion.div
        animate={isPaused ? {} : { rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Outer electron shells */}
        <motion.div
          className="absolute rounded-full border-2 opacity-30"
          style={{
            width: size * 1.8,
            height: size * 1.8,
            borderColor: colors.accentColor,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
          animate={{ rotate: isPaused ? 0 : -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        
        <motion.div
          className="absolute rounded-full border-2 opacity-40"
          style={{
            width: size * 1.4,
            height: size * 1.4,
            borderColor: colors.secondaryColor,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
          animate={{ rotate: isPaused ? 0 : 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />

        {/* Central nucleus */}
        <motion.div
          className="relative rounded-full shadow-2xl"
          style={{
            width: size,
            height: size,
            background: `radial-gradient(circle, ${colors.nucleusGradient[0]}, ${colors.nucleusGradient[1]})`,
            boxShadow: `0 0 ${size/4}px ${colors.primaryColor}`,
          }}
          animate={isPaused ? { scale: 1.1 } : { scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {/* Inner glow effect */}
          <div
            className="absolute inset-2 rounded-full opacity-60"
            style={{
              background: `radial-gradient(circle, transparent 30%, ${colors.primaryColor} 100%)`,
            }}
          />
          
          {/* DNA helix representation */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{ rotate: isPaused ? 0 : 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            <div className="relative">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-6 rounded-full"
                  style={{
                    backgroundColor: colors.accentColor,
                    left: Math.cos((i * 120 * Math.PI) / 180) * (size/6) + size/8,
                    top: Math.sin((i * 120 * Math.PI) / 180) * (size/6) + size/4,
                    transformOrigin: "center",
                  }}
                  animate={{ 
                    opacity: [0.4, 1, 0.4],
                    scale: [0.8, 1.2, 0.8] 
                  }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity, 
                    delay: i * 0.2 
                  }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Orbiting electrons */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 rounded-full"
            style={{
              backgroundColor: colors.accentColor,
              boxShadow: `0 0 8px ${colors.accentColor}`,
            }}
            animate={{
              rotate: isPaused ? 0 : 360,
              x: [
                Math.cos((i * 120 * Math.PI) / 180) * (size * 0.7),
                Math.cos(((i * 120 + 360) * Math.PI) / 180) * (size * 0.7),
              ],
              y: [
                Math.sin((i * 120 * Math.PI) / 180) * (size * 0.7),
                Math.sin(((i * 120 + 360) * Math.PI) / 180) * (size * 0.7),
              ],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </motion.div>
      
      {/* Company name with futuristic styling */}
      <motion.div 
        className="flex flex-col"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        <span 
          className="text-2xl font-bold tracking-wider"
          style={{ 
            color: colors.primaryColor,
            textShadow: `0 0 10px ${colors.primaryColor}`,
            fontFamily: "'Orbitron', monospace"
          }}
        >
          FPJ
        </span>
        <span 
          className="text-xs font-medium tracking-widest opacity-80"
          style={{ 
            color: colors.accentColor,
            fontFamily: "'Rajdhani', sans-serif"
          }}
        >
          PHARMA NEXUS
        </span>
      </motion.div>
    </Link>
  );
};

// HomePage Component (all the storytelling sections)
const HomePage = () => {
  return (
    <>
      <OpeningSection />
      <PreclinicalSection />
      <ClinicalSection />
      <RegulatorySection />
      <ManufacturingSection />
      <LaunchSection />
    </>
  );
};

// Layout Component (shared background and header)
const Layout = ({ children }) => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Futuristic background */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full" style={{
            backgroundImage: `
              linear-gradient(cyan 1px, transparent 1px),
              linear-gradient(90deg, cyan 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }} />
        </div>
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main className="relative z-10 pt-16">
        {children}
      </main>
    </div>
  );
};

// Main App Component
function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;