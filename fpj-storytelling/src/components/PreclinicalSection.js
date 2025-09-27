import React from 'react';
import { motion } from 'framer-motion';

const PreclinicalSection = () => {
	return (
		<motion.div
			role="region"
			aria-labelledby="preclinical-heading"
			id="preclinical"
			className="min-h-screen bg-gradient-to-br from-pink-50 to-fuchsia-50 dark:from-[#27111d] dark:to-[#3a142d] flex items-center relative overflow-hidden"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.6 }}
		>
			<div className="container mx-auto px-4 py-16 relative">
				<div className="text-center mb-16">
					<h2 id="preclinical-heading" className="text-5xl font-bold text-slate-800 dark:text-slate-100 mb-6">From Idea to Evidence</h2>
					<p className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">Before a molecule ever reaches humans, it must prove it works and is safe in carefully controlled lab and model systems.</p>
				</div>
				<motion.div
					className="bg-white rounded-2xl p-8 md:p-12 shadow-lg max-w-4xl mx-auto"
					initial={{ y: 30, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.8, delay: 0.2 }}
				>
					<p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">Scientists run pharmacology, toxicity, metabolism and formulation studies. Only a small fraction of molecules survive this stage—but those that do enter clinical development with data-backed confidence.</p>
					<div className="bg-pink-50 dark:bg-pink-900/30 rounded-xl p-6 mb-6">
						<p className="text-slate-700 dark:text-slate-300 italic">"FPJ students learn how preclinical data packages are built—giving them a head start in research, toxicology and CMC roles."</p>
					</div>
					<p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">This stage reduces risk, optimizes the molecule, and sets the scientific foundation for first-in-human trials.</p>
				</motion.div>
			</div>
		</motion.div>
	);
};

export default PreclinicalSection;
