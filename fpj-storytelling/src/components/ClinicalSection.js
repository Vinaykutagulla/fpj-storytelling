import React from 'react';
import { motion } from 'framer-motion';

const ClinicalSection = () => {

  return (
    <motion.div
      role="region"
      aria-labelledby="clinical-heading"
      id="clinical"
      className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 flex items-center relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 py-16 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 id="clinical-heading" className="text-5xl font-bold text-slate-800 mb-6">First Human Tests</h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            After years of lab work, the moment of truth arrives: testing in real people. It's a careful, methodical process that can take a decade—and where pharmaceutical careers are truly made.
          </p>
        </div>

        {/* Story Content */}
        <div className="max-w-4xl mx-auto mb-16">
          <motion.div
            className="bg-white rounded-2xl p-8 md:p-12 shadow-lg"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="prose prose-lg max-w-none">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center">
                  <span className="text-3xl" aria-hidden="true">🧪</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">Clinical Trials</h3>
                  <p className="text-slate-600">Where hope meets science</p>
                </div>
              </div>
              
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                The journey from lab to patient is long and careful. It starts with just <strong>20-100 brave volunteers</strong> who help test safety. If successful, hundreds more join to test effectiveness. Finally, thousands participate to prove the medicine works better than existing treatments.
              </p>
              
              <div className="bg-purple-50 rounded-xl p-6 mb-6">
                <p className="text-slate-700 italic">
                  "This is where FPJ students shine—learning clinical research principles, regulatory requirements, and data analysis skills that pharmaceutical companies desperately need for their clinical teams."
                </p>
              </div>
              
              <p className="text-lg text-slate-700 leading-relaxed">
                Only <strong>1 in 4 medicines</strong> that enter clinical trials ever reach patients. It takes 10-15 years and costs hundreds of millions of dollars. But when it works, lives are saved—and careers are launched.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg inline-block">
            <p className="text-slate-700 text-lg mb-4">
              Ready to see how medicines get approved?
            </p>
            <div className="w-12 h-0.5 bg-slate-300 mx-auto"></div>
          </div>
        </motion.div>
      </div>


    </motion.div>
  );
};

export default ClinicalSection;
