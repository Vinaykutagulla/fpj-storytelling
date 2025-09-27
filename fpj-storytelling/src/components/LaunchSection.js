import React from 'react';
import { motion } from 'framer-motion';

const LaunchSection = () => {
	return (
		<motion.div
			role="region"
			aria-labelledby="launch-heading"
			id="launch"
			className="min-h-screen bg-gradient-to-br from-lime-50 to-emerald-50 flex items-center relative overflow-hidden"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.6 }}
		>
			<div className="container mx-auto px-4 py-16 relative">
				<div className="text-center mb-16">
					<h2 id="launch-heading" className="text-5xl font-bold text-slate-800 mb-6">Reaching Patients</h2>
					<p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">After approval, coordinated commercial, medical and manufacturing efforts bring the therapy to real-world use.</p>
				</div>
				<motion.div
					className="bg-white rounded-2xl p-8 md:p-12 shadow-lg max-w-4xl mx-auto"
					initial={{ y: 30, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.8, delay: 0.2 }}
				>
					<p className="text-lg text-slate-700 leading-relaxed mb-6">Market access, pricing strategy, pharmacovigilance, medical education, lifecycle management—launch is a multidisciplinary sprint.</p>
					<div className="bg-lime-50 rounded-xl p-6 mb-6">
						<p className="text-slate-700 italic">"FPJ students explore how cross-functional teams ensure safe uptake, monitor outcomes, and expand indications over time."</p>
					</div>
					<p className="text-lg text-slate-700 leading-relaxed">A successful launch turns a scientific achievement into sustained patient impact—and opens the door to future innovations.</p>
				</motion.div>
			</div>
		</motion.div>
	);
};

export default LaunchSection;
