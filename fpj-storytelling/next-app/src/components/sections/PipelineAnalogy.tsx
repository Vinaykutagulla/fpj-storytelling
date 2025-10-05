import React from 'react';

export default function PipelineAnalogy() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10">
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-6 text-slate-900 dark:text-slate-50">
        From Molecule to Career: A Simple Parallel
      </h2>
      <div className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed">
        <div>
          <p className="font-medium text-slate-900 dark:text-slate-100 mb-2" aria-label="Preclinical vs FPJ Preclinical Stage">
            <span role="img" aria-hidden="true" className="mr-2">💊</span>
            Preclinical (Drug Testing in Lab)
          </p>
          <p className="pl-6 text-sm sm:text-base">A new drug is tested in controlled conditions to check if it works and is safe.</p>
          <p className="font-medium text-slate-900 dark:text-slate-100 mt-4 mb-2" aria-label="At FPJ Preclinical Stage">
            <span role="img" aria-hidden="true" className="mr-2">🎓</span>
            At FPJ (Preclinical Stage)
          </p>
          <p className="pl-6 text-sm sm:text-base">You are tested with small assignments and exercises—to check your grasp of concepts and ensure you build a strong base.</p>
        </div>
        <div className="border-t border-slate-200/50 dark:border-slate-700/50 pt-6">
          <p className="font-medium text-slate-900 dark:text-slate-100 mb-2" aria-label="Clinical Trials vs FPJ Clinical Stage">
            <span role="img" aria-hidden="true" className="mr-2">💊</span>
            Clinical Trials (Testing in Humans)
          </p>
          <p className="pl-6 text-sm sm:text-base">The drug is tried step by step in real-world conditions to prove safety and effectiveness.</p>
          <p className="font-medium text-slate-900 dark:text-slate-100 mt-4 mb-2" aria-label="At FPJ Clinical Stage">
            <span role="img" aria-hidden="true" className="mr-2">🎓</span>
            At FPJ (Clinical Stage)
          </p>
          <p className="pl-6 text-sm sm:text-base">You work on real-world projects and case studies, applying skills to practical challenges—just like clinical trials prove the drug in practice.</p>
        </div>
        <div className="border-t border-slate-200/50 dark:border-slate-700/50 pt-6">
          <p className="font-medium text-slate-900 dark:text-slate-100 mb-2" aria-label="Regulatory Approval vs FPJ Regulatory Stage">
            <span role="img" aria-hidden="true" className="mr-2">💊</span>
            Regulatory Approval
          </p>
          <p className="pl-6 text-sm sm:text-base">Authorities evaluate all data and grant approval if the drug is safe and effective.</p>
          <p className="font-medium text-slate-900 dark:text-slate-100 mt-4 mb-2" aria-label="At FPJ Regulatory Stage">
            <span role="img" aria-hidden="true" className="mr-2">🎓</span>
            At FPJ (Regulatory Stage)
          </p>
          <p className="pl-6 text-sm sm:text-base">You earn an industry-recognized certificate after completing the course—your "regulatory approval" that proves your skills to employers.</p>
        </div>
        <div className="border-t border-slate-200/50 dark:border-slate-700/50 pt-6">
            <p className="font-medium text-slate-900 dark:text-slate-100 mb-2" aria-label="Manufacturing & Launch vs FPJ Final Launch">
              <span role="img" aria-hidden="true" className="mr-2">💊</span>
              Manufacturing & Launch
            </p>
            <p className="pl-6 text-sm sm:text-base">The drug is scaled, polished, and launched into the market for patients.</p>
            <p className="font-medium text-slate-900 dark:text-slate-100 mt-4 mb-2" aria-label="At FPJ Final Launch Stage">
              <span role="img" aria-hidden="true" className="mr-2">🎓</span>
              At FPJ (Final Launch)
            </p>
            <p className="pl-6 text-sm sm:text-base">We polish you for the job market through mock interviews, CV preparation, and professional branding—so you are "launched" into the industry, ready to make an impact.</p>
        </div>
        <div className="border-t border-slate-200/50 dark:border-slate-700/50 pt-6">
          <p className="pl-0 text-base sm:text-lg font-medium text-slate-900 dark:text-slate-100">
            <span role="img" aria-hidden="true" className="mr-2">✨</span>
            Just as a drug is discovered, tested, approved, and launched into the world, FPJ ensures every student is trained, validated, certified, and career-ready.
          </p>
        </div>
      </div>
    </div>
  );
}
