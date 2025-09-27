import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState('story');
  const tabsRef = useRef({});

  // Removed unused IntersectionObserver state to clean warnings

  const tabs = {
    story: 'Our Story',
    mission: 'Mission & Vision', 
    values: 'Core Values'
  };



  const values = [
    {
      icon: "🎯",
      title: "Excellence",
      description: "We maintain the highest standards in pharmaceutical education and training"
    },
    {
      icon: "🤝",
      title: "Integrity",
      description: "We operate with transparency, honesty, and ethical practices"
    },
    {
      icon: "🚀",
      title: "Innovation",
      description: "We continuously evolve our methods to meet industry demands"
    },
    {
      icon: "💝",
      title: "Student-Centric",
      description: "Every decision we make prioritizes student success and career growth"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 relative overflow-hidden">

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20 px-6 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About FirstPharmaJob
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Bridging the gap between pharmaceutical education and industry careers through innovative, 
            hands-on training that transforms students into industry-ready professionals.
          </motion.p>
        </div>
      </section>

      {/* Tab Navigation with proper tab semantics */}
      <section className="relative z-10 px-6">
        <div className="max-w-6xl mx-auto">
          <div
            className="flex flex-wrap justify-center gap-4 mb-12"
            role="tablist"
            aria-label="About sections"
            onKeyDown={(e) => {
              const keys = Object.keys(tabs);
              const currentIndex = keys.indexOf(activeTab);
              let nextIndex = currentIndex;
              if (e.key === 'ArrowRight') nextIndex = (currentIndex + 1) % keys.length;
              if (e.key === 'ArrowLeft') nextIndex = (currentIndex - 1 + keys.length) % keys.length;
              if (e.key === 'Home') nextIndex = 0;
              if (e.key === 'End') nextIndex = keys.length - 1;
              if (nextIndex !== currentIndex) {
                e.preventDefault();
                const nextKey = keys[nextIndex];
                setActiveTab(nextKey);
                const btn = tabsRef.current[nextKey];
                if (btn) btn.focus();
              }
            }}
          >
            {Object.entries(tabs).map(([key, label]) => (
              <button
                key={key}
                ref={(el) => (tabsRef.current[key] = el)}
                id={`about-tab-${key}`}
                role="tab"
                aria-selected={activeTab === key}
                aria-controls={`about-panel-${key}`}
                tabIndex={activeTab === key ? 0 : -1}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 border ${
                  activeTab === key
                    ? 'bg-blue-600 border-blue-600 text-white'
                    : 'bg-white border-gray-300 text-gray-600 hover:border-blue-500 hover:text-blue-600 shadow-sm'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-5xl mx-auto"
            role="tabpanel"
            id={`about-panel-${activeTab}`}
            aria-labelledby={`about-tab-${activeTab}`}
          >
            {activeTab === 'story' && (
              <div className="space-y-8">
                <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
                  <h3 className="text-2xl font-bold mb-4 text-blue-600">Our Beginning</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Founded in January 2025 by pharmaceutical industry leaders and educational experts, 
                    FirstPharmaJob emerged from a shared vision: to bridge the critical gap between 
                    pharmaceutical education and real-world industry careers.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Our founders bring together decades of experience from leading pharmaceutical companies 
                    and prestigious educational institutions. They recognized that while students receive 
                    excellent scientific training, they often lack practical knowledge of drug development 
                    processes and industry pathways.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    As a fresh initiative in 2025, we're building something new - combining cutting-edge 
                    educational approaches with direct industry mentorship to prepare the next generation 
                    of pharmaceutical professionals.
                  </p>
                </div>
                
                <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
                  <h3 className="text-2xl font-bold mb-4 text-green-600">Strategic Partnerships</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold">
                        V4
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-green-600">V4 Clinical</h4>
                        <p className="text-gray-600">Strategic partnership providing real-world clinical research experience and industry insights</p>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Through our partnership with V4 Clinical, students gain direct exposure to active clinical 
                      research projects, regulatory processes, and pharmaceutical industry best practices.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'mission' && (
              <div className="space-y-8">
                <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
                  <h3 className="text-2xl font-bold mb-4 text-blue-600">Our Mission</h3>
                  <p className="text-gray-700 leading-relaxed text-lg mb-4">
                    To revolutionize pharmaceutical education by creating immersive learning experiences 
                    that combine scientific knowledge with real-world drug development insights.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    We empower students to understand not just the science behind medicines, but the entire 
                    journey from laboratory discovery to patient care - preparing them to become confident, 
                    industry-ready pharmaceutical professionals.
                  </p>
                </div>
                
                <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
                  <h3 className="text-2xl font-bold mb-4 text-purple-600">Our Vision</h3>
                  <p className="text-gray-700 leading-relaxed text-lg mb-4">
                    To become the premier destination where pharmaceutical education meets industry excellence, 
                    creating a new generation of professionals who understand both the science and business of drug development.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    We envision a future where every pharmaceutical graduate enters their career with deep 
                    industry knowledge, practical skills, and the confidence to contribute meaningfully to 
                    improving global health outcomes.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'values' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="text-4xl mb-4">{value.icon}</div>
                    <h4 className="text-xl font-bold mb-3 text-blue-600">{value.title}</h4>
                    <p className="text-gray-700 leading-relaxed">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative z-10 py-20 px-6 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            className="bg-white rounded-2xl p-8 border border-gray-200 shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-blue-600">Ready to Start Your Journey?</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Join the next generation of pharmaceutical professionals. Your career in drug discovery 
              and development starts here with expert guidance and industry partnerships.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/services"
                className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Explore Our Programs
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;