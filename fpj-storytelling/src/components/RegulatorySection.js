import React from 'react';
import { motion } from 'framer-motion';

const RegulatorySection = () => {
	return (
		<motion.div
			role="region"
			aria-labelledby="regulatory-heading"
			id="regulatory"
			className="min-h-screen bg-gradient-to-br from-cyan-50 to-sky-50 dark:from-[#052733] dark:to-[#06202c] flex items-center relative overflow-hidden"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.6 }}
		>
			<div className="container mx-auto px-4 py-16 relative">
				<div className="text-center mb-16">
					<h2 id="regulatory-heading" className="text-5xl font-bold text-slate-800 dark:text-slate-100 mb-6">Approval Pathway</h2>
					<p className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">All the data from discovery through clinical trials is assembled into a massive dossier for regulators.</p>
				</div>
				<motion.div
					className="bg-white rounded-2xl p-8 md:p-12 shadow-lg max-w-4xl mx-auto"
					initial={{ y: 30, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.8, delay: 0.2 }}
				>
					<p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">Regulatory teams compile quality, nonclinical, and clinical modules—thousands of pages of validated, auditable information.</p>
					<div className="bg-cyan-50 dark:bg-cyan-900/30 rounded-xl p-6 mb-6">
						<p className="text-slate-700 dark:text-slate-300 italic">"FPJ students build literacy in submission structure, risk management plans, labeling negotiation, and post-market surveillance frameworks."</p>
					</div>
					<p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">Review can take months to years depending on priority pathways—but once approved, the medicine can finally be manufactured at scale.</p>
				</motion.div>
			</div>
		</motion.div>
	);
};

export default RegulatorySection;
