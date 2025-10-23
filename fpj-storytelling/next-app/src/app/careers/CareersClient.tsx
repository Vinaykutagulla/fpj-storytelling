"use client";
import React from 'react';
import { motion } from 'framer-motion';

const jobCategories = [
  {
    title: 'Clinical Research',
    jobs: [
      'Clinical Research Associate (CRA)',
      'Clinical Data Manager',
      'Clinical Research Coordinator',
      'Medical Monitor',
      'Clinical Operations Manager'
    ],
    icon: '🔬'
  },
  {
    title: 'Regulatory Affairs',
    jobs: [
      'Regulatory Affairs Specialist',
      'Drug Safety Associate',
      'Regulatory Medical Writer',
      'Compliance Officer',
      'Submissions Manager'
    ],
    icon: '📋'
  },
  {
    title: 'Quality Assurance',
    jobs: [
      'QA Specialist',
      'Quality Control Analyst',
      'Validation Engineer',
      'GMP Auditor',
      'Quality Manager'
    ],
    icon: '✅'
  },
  {
    title: 'Medical Affairs',
    jobs: [
      'Medical Science Liaison',
      'Medical Writer',
      'Medical Affairs Manager',
      'Clinical Educator',
      'Medical Information Specialist'
    ],
    icon: '💊'
  }
];

const partnerCompanies = [
  'Biocon', 'Dr. Reddy\'s', 'Cipla', 'Sun Pharma', 'Lupin',
  'Aurobindo', 'Glenmark', 'Torrent Pharma', 'Alkem Labs', 'Zydus Cadila',
  'Novartis', 'Pfizer', 'GSK', 'Roche', 'Johnson & Johnson'
];

export default function CareersClient() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
      {/* Header */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-600 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Launch Your Pharmaceutical Career
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-blue-100 max-w-3xl mx-auto"
          >
            Access exclusive job opportunities with 50+ partner companies. 
            Get certified, trained, and placed in India's top pharmaceutical organizations.
          </motion.p>
        </div>
      </section>

      {/* Job Categories */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
            Pharmaceutical Career Opportunities
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Explore high-demand roles in India's pharmaceutical industry
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {jobCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-slate-900 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-slate-200 dark:border-slate-700"
            >
              <div className="flex items-center mb-6">
                <span className="text-4xl mr-4">{category.icon}</span>
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
                  {category.title}
                </h3>
              </div>
              <ul className="space-y-3">
                {category.jobs.map((job, jobIndex) => (
                  <li key={jobIndex} className="flex items-center text-slate-600 dark:text-slate-300">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    {job}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Partner Companies */}
      <section className="bg-white dark:bg-slate-900 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Our Partner Companies
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Get direct access to job opportunities with leading pharmaceutical companies
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {partnerCompanies.map((company, index) => (
              <motion.div
                key={company}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-slate-50 dark:bg-slate-800 rounded-lg p-4 text-center border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-500 transition-colors"
              >
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  {company}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-8">Our Success Record</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">1,000+</div>
              <div className="text-blue-100">Students Certified</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-blue-100">Placement Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Partner Companies</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5+</div>
              <div className="text-blue-100">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
          Ready to Start Your Pharmaceutical Career?
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
          Join our student partner program and get certified, trained, and placed in top pharmaceutical companies.
        </p>
        <motion.a
          href="/student-partner"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
        >
          Apply Now - Student Partner Program
        </motion.a>
      </section>
    </main>
  );
}