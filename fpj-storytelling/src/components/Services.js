import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
  const [activeTab, setActiveTab] = useState('programs');
  const tabsRef = useRef({});

  // Removed unused IntersectionObserver state to clean warnings

  const tabs = {
    programs: 'Training Programs',
    features: 'Why Choose Us', 
    enrollment: 'Enrollment Process'
  };



  const programs = [
    {
      title: "Clinical Data Management",
      duration: "3-4 months",
      description: "Master the art of clinical trial data collection, validation, and management. Learn industry-standard systems and regulatory requirements.",
      highlights: ["Database Design", "Data Validation", "CDISC Standards", "Regulatory Compliance"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Pharmacovigilance",
      duration: "3-4 months", 
      description: "Become an expert in drug safety monitoring and adverse event reporting. Understand global pharmacovigilance practices.",
      highlights: ["Safety Reporting", "Signal Detection", "Risk Management", "Regulatory Submissions"],
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "SAS Programming",
      duration: "4 months",
      description: "Develop advanced statistical programming skills for pharmaceutical data analysis and reporting.",
      highlights: ["Statistical Analysis", "Data Visualization", "Clinical Reports", "Validation Procedures"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Regulatory Affairs",
      duration: "3-4 months",
      description: "Navigate the complex world of pharmaceutical regulations and drug approval processes worldwide.",
      highlights: ["Submission Strategies", "Regulatory Pathways", "Global Guidelines", "Approval Processes"],
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const features = [
    {
      icon: "👨‍🏫",
      title: "Industry Expert Instructors",
      description: "Learn from professionals with real pharmaceutical industry experience"
    },
    {
      icon: "🏢",
      title: "Real-World Projects",
      description: "Work on actual case studies and projects from pharmaceutical companies"
    },
    {
      icon: "🤝",
      title: "Industry Partnerships",
      description: "Direct connections with leading pharmaceutical and biotech companies"
    },
    {
      icon: "�",
      title: "Industry Certification",
      description: "Receive recognized certifications that enhance your career prospects"
    },
    {
      icon: "💼",
      title: "Career Support",
      description: "Comprehensive job placement assistance and career guidance"
    },
    {
      icon: "🌐",
      title: "Global Standards",
      description: "Training aligned with international pharmaceutical industry standards"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 relative overflow-hidden">

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20 px-6 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text leading-[1.12] pb-2 overflow-visible"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Professional Training Programs
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Launch your pharmaceutical career with industry-focused training programs designed 
            to bridge the gap between education and professional success.
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
            {activeTab === 'programs' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {programs.map((program, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className={`w-full h-2 bg-gradient-to-r ${program.gradient} rounded-full mb-6`}></div>
                    <h3 className="text-2xl font-bold mb-2 text-gray-800">{program.title}</h3>
                    <p className="text-blue-600 font-semibold mb-4">Duration: {program.duration}</p>
                    <p className="text-gray-700 leading-relaxed mb-6">{program.description}</p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-800">Key Topics:</h4>
                      <div className="flex flex-wrap gap-2">
                        {program.highlights.map((highlight, idx) => (
                          <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {activeTab === 'features' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h4 className="text-xl font-bold mb-3 text-blue-600">{feature.title}</h4>
                    <p className="text-gray-700 leading-relaxed">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            )}

            {activeTab === 'enrollment' && (
              <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                  {[
                    {
                      step: "01",
                      title: "Application",
                      description: "Submit your application with academic background and career goals"
                    },
                    {
                      step: "02", 
                      title: "Assessment",
                      description: "Complete a brief assessment to determine the best program fit"
                    },
                    {
                      step: "03",
                      title: "Start Learning",
                      description: "Begin your journey with expert instructors and industry projects"
                    }
                  ].map((step, index) => (
                    <motion.div
                      key={index}
                      className="text-center"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 }}
                    >
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                        {step.step}
                      </div>
                      <h4 className="text-xl font-bold mb-3 text-gray-800">{step.title}</h4>
                      <p className="text-gray-600">{step.description}</p>
                    </motion.div>
                  ))}
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4 text-blue-600">Ready to Begin Your Career Transformation?</h3>
                  <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                    Join our next cohort and take the first step toward a rewarding career in the pharmaceutical industry. 
                    Our comprehensive programs are designed to prepare you for immediate industry impact.
                  </p>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link 
                      to="/contact"
                      className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Apply Now
                    </Link>
                  </motion.div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative z-10 py-20 px-6 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            className="bg-white rounded-2xl p-8 border border-gray-200 shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-blue-600">Start Your Pharmaceutical Career Today</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Transform your passion for science into a thriving pharmaceutical career. Our industry-focused 
              training programs provide the skills and connections you need to succeed.
            </p>
            <div className="flex justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  to="/contact"
                  className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Apply Now
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;