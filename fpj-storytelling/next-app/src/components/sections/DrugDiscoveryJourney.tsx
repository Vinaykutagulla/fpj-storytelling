"use client";
import React from 'react';
import { motion } from 'framer-motion';

const DrugDiscoveryJourney: React.FC = () => {
  const journeySteps = [
    {
      phase: 1,
      title: "Discovery & Research",
      duration: "3-6 Years",
      icon: "🔬",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      borderColor: "border-blue-200",
      description: "Scientists identify and test thousands of compounds in laboratories to find promising drug candidates.",
      roles: ["Research Scientists", "Medicinal Chemists", "Lab Technicians"],
      keyActivities: [
        "Screening thousands of compounds",
        "Testing drug efficacy in cells",
        "Analyzing molecular structures",
        "Documenting all findings"
      ]
    },
    {
      phase: 2,
      title: "Preclinical Testing",
      duration: "3-6 Years",
      icon: "🧪",
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50",
      borderColor: "border-purple-200",
      description: "The drug is tested extensively in laboratory and animal studies to check safety and effectiveness.",
      roles: ["Preclinical Scientists", "Toxicologists", "Data Analysts"],
      keyActivities: [
        "Animal studies for safety",
        "Toxicity testing",
        "Pharmacokinetics analysis",
        "Manufacturing process design"
      ]
    },
    {
      phase: 3,
      title: "Clinical Trials - Phase I",
      duration: "1-2 Years",
      icon: "👥",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
      borderColor: "border-green-200",
      description: "Small group of 20-100 healthy volunteers test the drug to check safety and dosage.",
      roles: ["Clinical Research Associates", "Medical Monitors", "Study Coordinators"],
      keyActivities: [
        "Safety assessment in humans",
        "Dose finding",
        "Side effect monitoring",
        "Patient data collection"
      ]
    },
    {
      phase: 4,
      title: "Clinical Trials - Phase II & III",
      duration: "2-3 Years",
      icon: "📊",
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-50 to-red-50",
      borderColor: "border-orange-200",
      description: "Hundreds to thousands of patient volunteers test the drug's effectiveness and monitor side effects.",
      roles: ["Clinical Data Managers", "Medical Writers", "Study Coordinators"],
      keyActivities: [
        "Large-scale patient trials",
        "Effectiveness verification",
        "Adverse event tracking",
        "Data management & analysis"
      ]
    },
    {
      phase: 5,
      title: "Regulatory Review",
      duration: "1-2 Years",
      icon: "📋",
      color: "from-indigo-500 to-blue-500",
      bgColor: "from-indigo-50 to-blue-50",
      borderColor: "border-indigo-200",
      description: "Regulatory agencies (FDA, EMA) review all data to ensure safety and effectiveness before approval.",
      roles: ["Regulatory Affairs Specialists", "Compliance Officers", "Medical Reviewers"],
      keyActivities: [
        "Preparing regulatory submissions",
        "Responding to agency queries",
        "Quality assurance reviews",
        "Risk management documentation"
      ]
    },
    {
      phase: 6,
      title: "Manufacturing & Launch",
      duration: "Ongoing",
      icon: "🏭",
      color: "from-teal-500 to-green-500",
      bgColor: "from-teal-50 to-green-50",
      borderColor: "border-teal-200",
      description: "Drug is manufactured at scale and distributed to patients through pharmacies and hospitals worldwide.",
      roles: ["Quality Assurance Specialists", "Manufacturing Engineers", "Medical Affairs Professionals"],
      keyActivities: [
        "Large-scale manufacturing",
        "Quality control testing",
        "Post-market surveillance",
        "Medical information support"
      ]
    }
  ];

  return (
    <section
      id="drug-discovery"
      className="relative bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 py-20 md:py-32 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-400 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-sm font-medium mb-6">
            💊 From Lab to Patient
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
            The <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Drug Discovery & Development</span> Journey
          </h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Discover the 10-15 year journey that brings a revolutionary drug from concept to patient. Learn how pharmaceutical professionals like you drive this transformative process.
          </p>
        </motion.div>

        {/* Timeline Steps */}
        <div className="grid gap-8 md:gap-12 mb-16">
          {journeySteps.map((step, idx) => (
            <motion.div
              key={step.phase}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`relative flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
            >
              {/* Phase Connector */}
              {idx < journeySteps.length - 1 && (
                <div className="hidden md:block absolute left-1/2 top-full h-12 w-1 bg-gradient-to-b from-slate-300 to-transparent dark:from-slate-600"></div>
              )}

              {/* Icon Circle */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                className={`flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-4xl md:text-5xl shadow-lg transform transition-all`}
              >
                {step.icon}
              </motion.div>

              {/* Content Card */}
              <div className="flex-1">
                <motion.div
                  whileHover={{ translateY: -5 }}
                  className={`bg-gradient-to-br ${step.bgColor} dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8 border-2 ${step.borderColor} dark:border-slate-600 shadow-lg hover:shadow-xl transition-all`}
                >
                  <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                        Phase {step.phase}: {step.title}
                      </h3>
                      <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 font-semibold mt-2">
                        ⏱️ Duration: {step.duration}
                      </p>
                    </div>
                  </div>

                  <p className="text-base md:text-lg text-slate-700 dark:text-slate-200 mb-6 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Key Roles */}
                  <div className="mb-6">
                    <p className="text-sm font-bold text-slate-700 dark:text-slate-300 mb-3">💼 Key Roles:</p>
                    <div className="flex flex-wrap gap-2">
                      {step.roles.map((role) => (
                        <span
                          key={role}
                          className={`px-3 py-2 rounded-lg text-sm font-medium bg-white dark:bg-slate-700/50 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600`}
                        >
                          {role}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Activities */}
                  <div>
                    <p className="text-sm font-bold text-slate-700 dark:text-slate-300 mb-3">✓ Key Activities:</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {step.keyActivities.map((activity) => (
                        <li key={activity} className="flex items-start text-sm text-slate-600 dark:text-slate-300">
                          <span className={`mr-2 text-lg`}>→</span>
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-12 text-white shadow-2xl"
        >
          <h3 className="text-3xl font-bold mb-12 text-center">By The Numbers</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">10-15</div>
              <p className="text-lg opacity-90">Years to Market</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">$1-3B</div>
              <p className="text-lg opacity-90">Average Cost</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">10,000+</div>
              <p className="text-lg opacity-90">Compounds Tested</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">1-2%</div>
              <p className="text-lg opacity-90">Success Rate</p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
            These 6 phases require dedicated pharmaceutical professionals at every stage. 
            <span className="font-bold text-slate-800 dark:text-white"> FirstPharmaJob trains you for these critical roles.</span>
          </p>
          <motion.a
            href="/student-partner"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:shadow-lg transition-all"
          >
            Start Your Pharma Career Today →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default DrugDiscoveryJourney;
