import React, { useEffect, useMemo, useRef, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// Import page components
import ServicesPage from './components/Services';
import ContactPage from './components/contact';
import AboutPage from './components/About';
import ScrollToTop from './components/ScrollToTop';

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
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav role="navigation" aria-label="Primary" className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <MetamorphosisLogo size={56} />
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`relative px-4 py-3 text-base font-medium transition-all duration-300 rounded-lg ${
                      isActive
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <span className={`relative ${
                      isActive ? 'after:content-[""] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-blue-600 after:rounded-full' : ''
                    }`}>
                      {item.name}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-expanded={isMenuOpen}
              aria-controls="primary-mobile-menu"
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
            id="primary-mobile-menu"
          >
            <div className="px-4 pt-4 pb-6 space-y-2 bg-white/98 backdrop-blur-md border-t border-slate-200">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-4 py-3 text-lg font-medium rounded-lg transition-all duration-300 ${
                      isActive
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
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

// Simple Minimalist Logo - Instagram Style
const MetamorphosisLogo = ({ size = 64 }) => {
  return (
    <Link to="/" className="flex items-center gap-4 select-none hover:opacity-90 transition-all duration-300 group">
      {/* Refined Logo Mark */}
      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
        <div className="relative">
          <span className="text-white text-lg font-bold tracking-tight">FPJ</span>
          <div className="absolute -inset-0.5 bg-white/20 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </div>
      
      {/* Enhanced Brand Text */}
      <div className="flex flex-col">
        <span className="font-bold text-2xl tracking-tight text-slate-800 group-hover:text-blue-700 transition-colors duration-300">
          FirstPharmaJob
        </span>
        <p className="text-sm text-slate-500 font-medium -mt-0.5">
          Students to Professionals
        </p>
      </div>
    </Link>
  );
};


// Beautiful Floating Circular Progress Indicator
const FloatingProgressIndicator = ({ items, activeId }) => {
  const activeIndex = items.findIndex(i => i.id === activeId);
  const progress = ((activeIndex + 1) / items.length) * 100;
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollTime, setLastScrollTime] = useState(Date.now());
  
  // Section-specific colors
  const getSectionColorSolid = (sectionId) => {
    const colorMap = {
      'opening': '#06b6d4', // Cyan
      'preclinical': '#ec4899', // Pink
      'clinical': '#84cc16', // Lime
      'regulatory': '#06b6d4', // Cyan
      'manufacturing': '#ec4899', // Pink
      'launch': '#84cc16' // Lime
    };
    return colorMap[sectionId] || '#06b6d4';
  };

  // Auto-hide logic
  useEffect(() => {
    const handleScroll = () => {
      setLastScrollTime(Date.now());
      setIsVisible(true);
    };
    
    const hideTimer = setInterval(() => {
      if (Date.now() - lastScrollTime > 3000) {
        setIsVisible(false);
      }
    }, 1000);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(hideTimer);
    };
  }, [lastScrollTime]);

  const currentColor = activeIndex >= 0 ? getSectionColorSolid(items[activeIndex]?.id) : '#06b6d4';

  return (
    <motion.div 
      className="floating-progress-portal hidden sm:block fixed right-3 lg:right-6 top-1/2 transform -translate-y-1/2 z-50"
      initial={{ opacity: 0, x: 100 }}
      animate={{ 
        opacity: isVisible ? 1 : 0.6,
        x: isVisible ? 0 : 30,
        scale: isVisible ? 1 : 0.9
      }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setLastScrollTime(Date.now())}
    >
      {/* Main circular progress with screen-reader friendly progressbar */}
      <div 
        className="relative w-24 h-24 group cursor-pointer"
        role="progressbar"
        aria-live="polite"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(progress)}
        aria-label={`Journey progress: ${activeIndex + 1} of ${items.length} sections`}
        aria-describedby="journey-progress-tooltip"
      >
        <span className="sr-only">{`Journey progress: ${activeIndex + 1} of ${items.length} sections (${Math.round(progress)}%)`}</span>
        {/* Background circle */}
        <div className="absolute inset-0 rounded-full bg-black/40 backdrop-blur-md border border-white/25 shadow-2xl">
        </div>
        
        {/* Progress ring */}
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 96 96">
          {/* Background track */}
          <circle
            cx="48"
            cy="48"
            r="36"
            stroke="rgba(255,255,255,0.15)"
            strokeWidth="8"
            fill="none"
          />
          {/* Progress arc */}
          <motion.circle
            cx="48"
            cy="48"
            r="36"
            stroke={currentColor}
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            initial={{ strokeDasharray: "0 226.2" }}
            animate={{ strokeDasharray: `${(progress / 100) * 226.2} 226.2` }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{
              filter: `drop-shadow(0 0 12px ${currentColor}60)`
            }}
          />
        </svg>
        
        {/* Center content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <div 
            className="text-xl font-bold"
            style={{ color: currentColor }}
          >
            {activeIndex + 1}
          </div>
          <div className="text-sm opacity-70 font-medium">of {items.length}</div>
        </div>
        
        {/* Hover tooltip */}
        <AnimatePresence>
          {isVisible && (
            <motion.div
              id="journey-progress-tooltip"
              className="absolute -left-2 top-1/2 transform -translate-y-1/2 -translate-x-full"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ delay: 0.5 }}
            >
              <div className="bg-black/90 backdrop-blur-sm text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap border border-white/20">
                <div style={{ color: currentColor }} className="font-medium">
                  {items[activeIndex]?.title || 'Journey'}
                </div>
                <div className="text-xs opacity-60">
                  {Math.round(progress)}% Complete
                </div>
                {/* Arrow */}
                <div 
                  className="absolute right-0 top-1/2 transform translate-x-full -translate-y-1/2"
                  style={{
                    width: 0,
                    height: 0,
                    borderTop: '6px solid transparent',
                    borderBottom: '6px solid transparent',
                    borderLeft: '6px solid rgba(0,0,0,0.9)'
                  }}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Section dots */}
      <div className="mt-4 flex flex-col gap-2 lg:mt-6 lg:gap-3">
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

// Enhanced HomePage Component with better organization
const HomePage = () => {
  
  const sections = useMemo(() => ([
    { id: 'opening', title: 'Molecule', node: <OpeningSection /> },
    { id: 'preclinical', title: 'Preclinical', node: <PreclinicalSection /> },
    { id: 'clinical', title: 'Clinical', node: <ClinicalSection /> },
    { id: 'regulatory', title: 'Regulatory', node: <RegulatorySection /> },
    { id: 'manufacturing', title: 'Manufacturing', node: <ManufacturingSection /> },
    { id: 'launch', title: 'Launch', node: <LaunchSection /> },
  ]), []);

  const [activeId, setActiveId] = useState(sections[0].id);
  const [liveMessage, setLiveMessage] = useState(`Section: ${sections[0].title}`);
  const observerRef = useRef(null);

  useEffect(() => {
    const options = { 
      threshold: [0, 0.1, 0.3, 0.5, 0.7, 0.9],
      rootMargin: '-10% 0px -10% 0px'
    };
    const callback = (entries) => {
      let maxRatio = 0;
      let activeSection = null;
      
      // First priority: find section with highest intersection ratio
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
          maxRatio = entry.intersectionRatio;
          activeSection = entry.target.id;
        }
      });
      
      // If no section has high visibility, pick any intersecting section
      if (!activeSection) {
        const intersectingEntry = entries.find(entry => entry.isIntersecting);
        if (intersectingEntry) {
          activeSection = intersectingEntry.target.id;
        }
      }
      
      if (activeSection) {
        setActiveId(activeSection);
        const found = sections.find(s => s.id === activeSection);
        if (found) setLiveMessage(`Section: ${found.title}`);
      }
    };
    
    const observer = new IntersectionObserver(callback, options);
    observerRef.current = observer;
    
    // Add a small delay to ensure DOM elements are ready
    const timer = setTimeout(() => {
      sections.forEach((s) => {
        const el = document.getElementById(s.id);
        if (el) {
          observer.observe(el);
        }
      });
      
      // Set initial active section if none is set
      if (!activeId && sections.length > 0) {
        setActiveId(sections[0].id);
      }
    }, 100);
    
    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [sections, activeId]);

  return (
    <>
      {/* Live region for announcing section changes */}
      <div aria-live="polite" aria-atomic="true" className="sr-only" id="section-live-region">
        {liveMessage}
      </div>
      {/* Floating Progress Indicator */}
  <FloatingProgressIndicator items={sections} activeId={activeId} />
      
      {/* Full-width Content Layout */}
      <div className="w-full">
        <div className="space-y-0">
          {sections.map((s) => (
            <motion.section
              key={s.id}
              id={s.id}
              aria-label={s.title}
              initial={{ opacity: 0.9 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              viewport={{ amount: 0.15, once: true }}
              className="min-h-screen flex flex-col justify-start"
            >
              {s.node}
            </motion.section>
          ))}
        </div>
      </div>
    </>
  );
};

// Enhanced Layout Component with sophisticated background
const Layout = ({ children }) => {

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Skip link for keyboard users */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-white focus:text-black focus:px-4 focus:py-2 focus:rounded focus:shadow">
        Skip to content
      </a>
      {/* Clean background */}
      <div className="fixed inset-0 bg-white"></div>

      {/* Navigation */}
      <Navigation />
      
      {/* Main Content: remove internal scroll container (h-screen + overflow) so browser window scroll shows all sections */}
      <main
        id="main-content"
        role="main"
        className="relative z-10 pt-20 pb-10"
      >
        {children}
      </main>
      <Footer />
    </div>
  );
};

// Footer with social/contact quick links
const Footer = () => {
  const handleOutbound = (label) => {
    if (window.plausible) {
      window.plausible('Outbound Click', { props: { target: label } });
    }
  };
  return (
    <footer className="bg-slate-50 border-t border-slate-200 mt-auto relative z-20">
      <div className="max-w-7xl mx-auto px-6 py-10 md:py-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <p className="text-slate-700 font-semibold">FirstPharmaJob</p>
            <p className="text-slate-500 text-sm mt-1">Guiding students into pharmaceutical careers.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://www.linkedin.com/in/firstpharmajob"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleOutbound('LinkedIn Footer')}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0A66C2] text-white text-sm font-medium shadow hover:shadow-md hover:bg-[#0d74db] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0A66C2]"
              aria-label="LinkedIn profile"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M4.983 3.5C4.983 4.604 4.105 5.5 3 5.5 1.895 5.5 1 4.604 1 3.5 1 2.395 1.895 1.5 3 1.5c1.105 0 1.983.895 1.983 2zM1.25 22h3.5V7.75h-3.5V22zM8.75 7.75h-3.5V22h3.5v-7.164c0-3.258 4.25-3.521 4.25 0V22h3.5v-8.902c0-5.217-5.979-5.034-7.75-2.466V7.75z" /></svg>
              LinkedIn
            </a>
            <a
              href="https://wa.me/919100514968?text=Hi%20FirstPharmaJob%2C%20I%27d%20like%20to%20learn%20more%20about%20your%20programs"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleOutbound('WhatsApp Footer')}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-green-500 text-white text-sm font-medium shadow hover:shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              aria-label="WhatsApp chat"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M12.04 2c-5.52 0-10 4.42-10 9.86 0 1.74.51 3.41 1.48 4.87L2 22l5.4-1.72a10.2 10.2 0 0 0 4.64 1.12h.01c5.52 0 10-4.42 10-9.86 0-2.64-1.07-5.12-3.01-6.99A10.37 10.37 0 0 0 12.04 2m5.84 14.21c-.24.68-1.39 1.3-1.92 1.38-.49.07-1.1.1-1.77-.11-.41-.13-.94-.3-1.63-.59-2.87-1.24-4.75-4.14-4.89-4.33-.14-.19-1.17-1.55-1.17-2.96 0-1.4.74-2.08 1-2.36.24-.26.64-.38 1.03-.38h.15c.3.01.46.03.66.52.24.58.82 2 .89 2.15.07.15.12.32.02.51-.09.19-.14.31-.27.48-.14.17-.29.38-.41.51-.13.13-.27.28-.12.55.15.26.68 1.12 1.46 1.81 1 .9 1.81 1.18 2.09 1.31.27.13.43.11.59-.06.19-.21.43-.56.68-.91.17-.25.39-.28.62-.19.23.09 1.47.7 1.72.83.26.13.43.19.49.3.07.11.07.63-.17 1.31Z" /></svg>
              WhatsApp
            </a>
          </div>
        </div>
        <div className="mt-8 text-xs text-slate-400">&copy; {new Date().getFullYear()} FirstPharmaJob. All rights reserved.</div>
      </div>
    </footer>
  );
};

// Main App Component
function App() {
  return (
    <Router>
      <ScrollToTop />
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