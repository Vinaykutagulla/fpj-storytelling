import React from 'react';
import { motion } from 'framer-motion';

const ManufacturingSection = () => {

  return (
    <motion.div 
      role="region" 
      aria-labelledby="manufacturing-heading" 
      className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50 flex items-center relative overflow-hidden" 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 py-16 relative">
        <motion.div className="text-center mb-16" initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
          <h2 id="manufacturing-heading" className="text-5xl font-bold text-slate-800 mb-6">Making Millions</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">When one tiny lab process must become millions of perfect doses</p>
        </motion.div>

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
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center">
                  <span className="text-3xl" aria-hidden="true">🏭</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">Scale-Up Manufacturing</h3>
                  <p className="text-slate-600">From lab bench to factory floor</p>
                </div>
              </div>
              
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                The recipe that worked for <strong>100 doses in a lab</strong> must now produce millions. Every step gets redesigned. Bigger equipment, stricter standards, zero room for error. One batch can supply thousands of patients—or if something goes wrong, put them at risk.
              </p>
              
              <div className="bg-orange-50 rounded-xl p-6 mb-6">
                <p className="text-slate-700 italic">
                  "FPJ students learn manufacturing excellence—quality systems, process optimization, and supply chain management skills that turn them into the production leaders pharmaceutical companies need to scale reliably."
                </p>
              </div>
              
              <p className="text-lg text-slate-700 leading-relaxed">
                It takes <strong>2-3 years</strong> to scale from approval to full production. But once running, a single facility can produce medicine for millions of patients worldwide—and employ hundreds of skilled professionals.
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
              Ready to see how medicines reach patients?
            </p>
            <div className="w-12 h-0.5 bg-slate-300 mx-auto"></div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ManufacturingSection;
