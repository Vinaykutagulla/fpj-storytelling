"use client";"use client";"use client";



import React from 'react';

import { motion } from 'framer-motion';

import AnalogyIntro from '../common/AnalogyIntro';import React from 'react';import React from 'react';



const ManufacturingSection: React.FC = () => (import { motion } from 'framer-motion';import { motion } from 'framer-motion';

  <motion.div

    role="region"import AnalogyIntro from '../common/AnalogyIntro';import AnalogyIntro from '../common/AnalogyIntro';

    aria-labelledby="manufacturing-heading"

    id="manufacturing"

    className="relative min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-100 dark:from-[#2d1b0d] dark:via-[#3d2512] dark:to-[#4d2f17] py-20 md:py-28"

    initial={{ opacity: 1 }}const ManufacturingSection: React.FC = () => (const ManufacturingSection: React.FC = () => (

    animate={{ opacity: 1 }}

    transition={{ duration: 0 }}  <motion.div  <motion.div

  >

    {/* Background Elements */}    role="region"    role="region"

    <div className="absolute inset-0 opacity-5 dark:opacity-10">

      <div className="absolute top-20 left-16 w-40 h-40 bg-amber-300 rounded-full blur-3xl"></div>    aria-labelledby="manufacturing-heading"    aria-labelledby="manufacturing-heading"

      <div className="absolute bottom-24 right-16 w-36 h-36 bg-orange-300 rounded-full blur-3xl"></div>

    </div>    id="manufacturing"    id="manufacturing"



    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">    className="relative min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-100 dark:from-[#2d1b0d] dark:via-[#3d2512] dark:to-[#4d2f17] py-20 md:py-28"

      <div className="text-center mb-14">

        <h2 id="manufacturing-heading" className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-800 dark:text-slate-100 mb-6">    initial={{ opacity: 1 }}    aria-labelledby="manufacturing-heading"    aria-labelledby="manufacturing-heading"

          Manufacturing: Scale & Quality

        </h2>    animate={{ opacity: 1 }}

        

        <AnalogyIntro accent="amber">    transition={{ duration: 0 }}    id="manufacturing"    id="manufacturing"

          Approved drugs must scale from lab batches to million-dose production with zero tolerance for error. Similarly, 

          <span className="font-semibold text-amber-700 dark:text-amber-300"> FPJ prepares students for professional performance</span> through mock interviews, CV optimization, and presentation skills that ensure career readiness.  >

        </AnalogyIntro>

      </div>    {/* Background Elements */}    className="relative min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-100 dark:from-[#2a1605] dark:via-[#331d09] dark:to-[#3b190f] py-16 md:py-24 overflow-hidden"    className="relative min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-100 dark:from-[#2a1605] dark:via-[#331d09] dark:to-[#3b190f] py-20 md:py-28"



      {/* Content Sections */}    <div className="absolute inset-0 opacity-5 dark:opacity-10">

      <div className="space-y-24">

        {/* Manufacturing Excellence */}      <div className="absolute top-20 left-16 w-40 h-40 bg-amber-300 rounded-full blur-3xl"></div>    initial={{ opacity: 1 }}  initial={{ opacity: 1 }}

        <motion.div

          className="bg-white/90 dark:bg-slate-900/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20"      <div className="absolute bottom-24 right-16 w-36 h-36 bg-orange-300 rounded-full blur-3xl"></div>

          initial={{ opacity: 0, y: 30 }}

          whileInView={{ opacity: 1, y: 0 }}    </div>    animate={{ opacity: 1 }}  animate={{ opacity: 1 }}

          transition={{ duration: 0.6 }}

          viewport={{ once: true }}

        >

          <div className="grid md:grid-cols-2 gap-12 items-center">    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">    transition={{ duration: 0 }}  transition={{ duration: 0 }}

            <div>

              <h3 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100 mb-6">Manufacturing Excellence</h3>      <div className="text-center mb-14">

              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">

                Pharmaceutical manufacturing requires precision engineering, quality control, and regulatory compliance at every step of the production process.        <h2 id="manufacturing-heading" className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-800 dark:text-slate-100 mb-6">  >  >

              </p>

              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">Reusable answer & framing templates.</p>          Manufacturing: Scale & Quality

            </div>

            <div className="grid grid-cols-1 gap-4">        </h2>    {/* Background Elements */}    <div className="max-w-6xl mx-auto px-6">

              <div className="bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 rounded-2xl p-6">

                <p className="font-medium text-amber-700 dark:text-amber-300 mb-1">Narrative</p>        

                <span className="text-slate-700 dark:text-slate-300 font-medium">Process optimization expertise</span>

              </div>        <AnalogyIntro accent="amber">    <div className="absolute inset-0 opacity-5 dark:opacity-10">      <div className="text-center mb-14">

              <div className="bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 rounded-2xl p-6">

                <p className="font-medium text-orange-700 dark:text-orange-300 mb-1">Skills</p>          Approved drugs must scale from lab batches to million-dose production with zero tolerance for error. Similarly, 

                <span className="text-slate-700 dark:text-slate-300 font-medium">Quality management systems</span>

              </div>          <span className="font-semibold text-amber-700 dark:text-amber-300"> FPJ prepares students for professional performance</span> through mock interviews, CV optimization, and presentation skills that ensure career readiness.      <div className="absolute top-28 right-12 w-48 h-48 bg-amber-300 rounded-full blur-3xl"></div>  <h2 id="manufacturing-heading" className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-800 dark:text-slate-100">Manufacturing: Scale‑Up to Millions</h2>

            </div>

          </div>        </AnalogyIntro>

        </motion.div>

      </div>      <div className="absolute bottom-28 left-12 w-40 h-40 bg-orange-300 rounded-full blur-3xl"></div>  <p className="mt-4 text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">The recipe that worked for 100 doses in a lab must now produce millions. Bigger equipment, stricter standards, and zero room for error—one batch can help thousands of patients.</p>

        {/* Professional Preparation */}

        <motion.div

          className="bg-white/90 dark:bg-slate-900/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20"

          initial={{ opacity: 0, y: 30 }}      {/* Content Sections */}    </div>  <div className="mt-6 max-w-4xl mx-auto">

          whileInView={{ opacity: 1, y: 0 }}

          transition={{ duration: 0.6, delay: 0.2 }}      <div className="space-y-24">

          viewport={{ once: true }}

        >        {/* Manufacturing Excellence */}        <AnalogyIntro

          <div className="grid md:grid-cols-2 gap-12 items-center">

            <div className="order-2 md:order-1">        <motion.div

              <div className="grid grid-cols-1 gap-4">

                <div className="bg-gradient-to-r from-amber-100 to-yellow-100 dark:from-amber-900/30 dark:to-yellow-900/30 rounded-2xl p-6">          className="bg-white/90 dark:bg-slate-900/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20"    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">  accent="amber"

                  <h4 className="font-bold text-amber-700 dark:text-amber-300 mb-2">Interview Mastery</h4>

                  <p className="text-slate-700 dark:text-slate-300 text-sm">Mock interviews with industry professionals</p>          initial={{ opacity: 0, y: 30 }}

                </div>

                <div className="bg-gradient-to-r from-orange-100 to-amber-100 dark:from-orange-900/30 dark:to-amber-900/30 rounded-2xl p-6">          whileInView={{ opacity: 1, y: 0 }}      <div className="text-center mb-16">  titleA="In Development"

                  <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-2">CV Optimization</h4>

                  <p className="text-slate-700 dark:text-slate-300 text-sm">Pharmaceutical industry-specific resume building</p>          transition={{ duration: 0.6 }}

                </div>

                <div className="bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 rounded-2xl p-6">          viewport={{ once: true }}        <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200 text-sm font-medium mb-6">  textA="Process robustness, quality gates and throughput readiness are proven before market exposure."

                  <h4 className="font-bold text-yellow-700 dark:text-yellow-300 mb-2">Presentation Skills</h4>

                  <p className="text-slate-700 dark:text-slate-300 text-sm">Technical communication and leadership presence</p>        >

                </div>

              </div>          <div className="grid md:grid-cols-2 gap-12 items-center">          🏭 Phase 4: Production Ready  titleB="At FPJ"

            </div>

            <div className="order-1 md:order-2">            <div>

              <h3 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100 mb-6">FPJ Professional Prep</h3>

              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">              <h3 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100 mb-6">Manufacturing Excellence</h3>        </div>  textB="You operationalize delivery: structured interview routes, narrative hooks, metric-forward framing and calm escalation style."

                Beyond technical knowledge, pharmaceutical careers require exceptional professional skills. Our comprehensive preparation ensures you stand out in competitive markets.

              </p>              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">

              <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-orange-200/50 dark:border-orange-700/30 shadow-xl">

                <h4 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4">Career Readiness Program</h4>                Pharmaceutical manufacturing requires precision engineering, quality control, and regulatory compliance at every step of the production process.        <h2 id="manufacturing-heading" className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-800 dark:text-slate-100 mb-6">    />

                <ul className="space-y-3 text-slate-700 dark:text-slate-300">

                  <li className="flex items-center space-x-3">              </p>

                    <div className="w-2 h-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></div>

                    <span>Industry networking strategies</span>              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">Reusable answer & framing templates.</p>          Manufacturing: <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">Scale to Professional</span>  </div>

                  </li>

                  <li className="flex items-center space-x-3">            </div>

                    <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>

                    <span>Salary negotiation techniques</span>            <div className="grid grid-cols-1 gap-4">        </h2>      </div>

                  </li>

                  <li className="flex items-center space-x-3">              <div className="bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 rounded-2xl p-6">

                    <div className="w-2 h-2 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full"></div>

                    <span>Leadership development framework</span>                <p className="font-medium text-amber-700 dark:text-amber-300 mb-1">Narrative</p>        <p className="mt-6 text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed font-light">      <motion.div

                  </li>

                </ul>                <span className="text-slate-700 dark:text-slate-300 font-medium">Process optimization expertise</span>

              </div>

            </div>              </div>          Approved drugs must scale from lab batches to million-dose production with zero tolerance for error. Similarly,         className="bg-white/90 dark:bg-slate-900/70 backdrop-blur-sm rounded-3xl shadow-xl shadow-amber-600/10 dark:shadow-black/40 border border-amber-100/60 dark:border-amber-600/30 p-8 md:p-12"

          </div>

        </motion.div>              <div className="bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 rounded-2xl p-6">

      </div>

    </div>                <p className="font-medium text-orange-700 dark:text-orange-300 mb-1">Skills</p>          <span className="font-semibold text-amber-700 dark:text-amber-300"> FPJ prepares students for professional performance</span> through mock interviews, CV optimization, and presentation skills.      >

  </motion.div>

);                <span className="text-slate-700 dark:text-slate-300 font-medium">Quality management systems</span>



export default ManufacturingSection;              </div>        </p>        <div className="grid md:grid-cols-2 gap-8 md:gap-12">

            </div>

          </div>      </div>          <div className="rounded-2xl p-6 bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/20 border border-amber-200/60 dark:border-amber-700/30">

        </motion.div>

            <h3 className="text-base font-semibold tracking-wide text-amber-700 dark:text-amber-300 mb-3 uppercase">Development Parallel</h3>

        {/* Professional Preparation */}

        <motion.div      {/* Parallel Story Visual */}            <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">Scale protocols tighten variance, codify quality thresholds, and reduce transactional overhead.</p>

          className="bg-white/90 dark:bg-slate-900/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20"

          initial={{ opacity: 0, y: 30 }}      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16">          </div>

          whileInView={{ opacity: 1, y: 0 }}

          transition={{ duration: 0.6, delay: 0.2 }}        <div className="space-y-8">          <div className="rounded-2xl p-6 bg-gradient-to-br from-orange-100 via-rose-50 to-amber-100 dark:from-orange-900/30 dark:via-rose-900/20 dark:to-amber-900/20 border border-orange-200/60 dark:border-orange-700/30">

          viewport={{ once: true }}

        >          <div className="flex items-center space-x-4 mb-6">            <h3 className="text-base font-semibold tracking-wide text-orange-700 dark:text-orange-300 mb-3 uppercase">Your Practice</h3>

          <div className="grid md:grid-cols-2 gap-12 items-center">

            <div className="order-2 md:order-1">            <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center text-white text-xl font-bold">            <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">You stress-test messaging under time constraints, surface measurable outcomes, and iterate delivery posture.</p>

              <div className="grid grid-cols-1 gap-4">

                <div className="bg-gradient-to-r from-amber-100 to-yellow-100 dark:from-amber-900/30 dark:to-yellow-900/30 rounded-2xl p-6">              🏭          </div>

                  <h4 className="font-bold text-amber-700 dark:text-amber-300 mb-2">Interview Mastery</h4>

                  <p className="text-slate-700 dark:text-slate-300 text-sm">Mock interviews with industry professionals</p>            </div>        </div>

                </div>

                <div className="bg-gradient-to-r from-orange-100 to-amber-100 dark:from-orange-900/30 dark:to-amber-900/30 rounded-2xl p-6">            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-100">Drug Manufacturing</h3>        <div className="mt-10 grid md:grid-cols-3 gap-6 text-sm">

                  <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-2">CV Optimization</h4>

                  <p className="text-slate-700 dark:text-slate-300 text-sm">Pharmaceutical industry-specific resume building</p>          </div>          <div className="rounded-xl bg-white dark:bg-slate-800/60 border border-amber-100 dark:border-amber-700/30 p-4">

                </div>

                <div className="bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 rounded-2xl p-6">          <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-amber-200/50 dark:border-amber-700/30 shadow-xl">            <p className="font-medium text-amber-700 dark:text-amber-300 mb-1">Protocols</p>

                  <h4 className="font-bold text-yellow-700 dark:text-yellow-300 mb-2">Presentation Skills</h4>

                  <p className="text-slate-700 dark:text-slate-300 text-sm">Technical communication and leadership presence</p>            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">Reusable answer & framing templates.</p>

                </div>

              </div>              <span className="font-semibold text-amber-700 dark:text-amber-300">Scale-up manufacturing</span> transforms           </div>

            </div>

            <div className="order-1 md:order-2">              small lab processes into high-volume, quality-controlled production systems serving millions of patients.          <div className="rounded-xl bg-white dark:bg-slate-800/60 border border-amber-100 dark:border-amber-700/30 p-4">

              <h3 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100 mb-6">FPJ Professional Prep</h3>

              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">            </p>            <p className="font-medium text-amber-700 dark:text-amber-300 mb-1">Narrative</p>

                Beyond technical knowledge, pharmaceutical careers require exceptional professional skills. Our comprehensive preparation ensures you stand out in competitive markets.

              </p>            <div className="mt-8 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-xl p-6">            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">Crisp problem → action → measurable lift.</p>

              <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-orange-200/50 dark:border-orange-700/30 shadow-xl">

                <h4 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4">Career Readiness Program</h4>              <div className="flex items-center justify-between mb-4">          </div>

                <ul className="space-y-3 text-slate-700 dark:text-slate-300">

                  <li className="flex items-center space-x-3">                <span className="text-amber-700 dark:text-amber-300 font-semibold">Lab Scale</span>          <div className="rounded-xl bg-white dark:bg-slate-800/60 border border-amber-100 dark:border-amber-700/30 p-4">

                    <div className="w-2 h-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></div>

                    <span>Industry networking strategies</span>                <span className="text-3xl">→</span>            <p className="font-medium text-amber-700 dark:text-amber-300 mb-1">Outcome</p>

                  </li>

                  <li className="flex items-center space-x-3">                <span className="text-amber-700 dark:text-amber-300 font-semibold">Commercial Scale</span>            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">Reliable professional signal under scrutiny.</p>

                    <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>

                    <span>Salary negotiation techniques</span>              </div>          </div>

                  </li>

                  <li className="flex items-center space-x-3">              <div className="grid grid-cols-2 gap-4 text-center">        </div>

                    <div className="w-2 h-2 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full"></div>

                    <span>Leadership development framework</span>                <div className="p-3 bg-white dark:bg-slate-800 rounded-lg">        <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-amber-50 via-orange-50 to-rose-50 dark:from-amber-900/20 dark:via-orange-900/20 dark:to-rose-900/20 border border-amber-100/70 dark:border-amber-700/40">

                  </li>

                </ul>                  <div className="text-2xl font-bold text-amber-600">100</div>          <p className="italic text-slate-700 dark:text-slate-300">“FPJ students learn manufacturing excellence—quality systems, process optimization and supply chain skills to scale reliably.”</p>

              </div>

            </div>                  <div className="text-sm text-slate-600 dark:text-slate-400">Doses</div>        </div>

          </div>

        </motion.div>                </div>        <div className="mt-10 grid md:grid-cols-3 gap-6 text-center">

      </div>

    </div>                <div className="p-3 bg-white dark:bg-slate-800 rounded-lg">          <div className="rounded-xl bg-white dark:bg-slate-800/60 border border-amber-100 dark:border-amber-700/30 p-6">

  </motion.div>

);                  <div className="text-2xl font-bold text-amber-600">Millions</div>            <p className="font-bold text-2xl text-amber-700 dark:text-amber-300">2–3</p>



export default ManufacturingSection;                  <div className="text-sm text-slate-600 dark:text-slate-400">Doses</div>            <p className="text-slate-600 dark:text-slate-400">Years to full scale</p>

                </div>          </div>

              </div>          <div className="rounded-xl bg-white dark:bg-slate-800/60 border border-amber-100 dark:border-amber-700/30 p-6">

            </div>            <p className="font-bold text-2xl text-amber-700 dark:text-amber-300">Millions</p>

          </div>            <p className="text-slate-600 dark:text-slate-400">Patients served globally</p>

        </div>          </div>

          <div className="rounded-xl bg-white dark:bg-slate-800/60 border border-amber-100 dark:border-amber-700/30 p-6">

        <div className="space-y-8">            <p className="font-bold text-2xl text-amber-700 dark:text-amber-300">100s</p>

          <div className="flex items-center space-x-4 mb-6">            <p className="text-slate-600 dark:text-slate-400">Skilled professionals employed</p>

            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center text-white text-xl font-bold">          </div>

              💼        </div>

            </div>  <p className="mt-10 text-slate-700 dark:text-slate-300 text-base md:text-lg leading-relaxed font-medium">From lab to factory floor—scale turns science into real‑world access.</p>

            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-100">FPJ Professional Prep</h3>      </motion.div>

          </div>    </div>

          <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-orange-200/50 dark:border-orange-700/30 shadow-xl">  </motion.div>

            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">);

              <span className="font-semibold text-orange-700 dark:text-orange-300">Professional scaling</span> transforms 

              competent students into interview-ready candidates who perform confidently under hiring pressure.export default ManufacturingSection;

            </p>
            <div className="space-y-4 mt-6">
              <div className="flex items-center space-x-3 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                <div className="w-3 h-3 bg-orange-500 rounded-full flex-shrink-0"></div>
                <span className="text-slate-700 dark:text-slate-300 font-medium">Mock interviews with industry professionals</span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                <div className="w-3 h-3 bg-orange-500 rounded-full flex-shrink-0"></div>
                <span className="text-slate-700 dark:text-slate-300 font-medium">CV optimization for pharmaceutical roles</span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                <div className="w-3 h-3 bg-orange-500 rounded-full flex-shrink-0"></div>
                <span className="text-slate-700 dark:text-slate-300 font-medium">Presentation & communication skills</span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                <div className="w-3 h-3 bg-orange-500 rounded-full flex-shrink-0"></div>
                <span className="text-slate-700 dark:text-slate-300 font-medium">Professional networking strategies</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Professional Readiness Showcase */}
      <div className="relative mb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-3xl blur-xl"></div>
        <div className="relative bg-white/90 dark:bg-slate-900/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-amber-200/60 dark:border-amber-500/30 shadow-2xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900/40 dark:to-orange-900/40 mb-8">
              <span className="text-2xl mr-3">🎯</span>
              <span className="text-amber-800 dark:text-amber-200 font-semibold text-lg">Interview Excellence</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100 mb-6">
              From <span className="text-amber-600">Student</span> to <span className="text-orange-600">Professional</span>
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Like manufacturing processes that must perform flawlessly at scale, 
              our students master professional performance under interview pressure.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center text-white text-xl group-hover:scale-110 transition-transform">
                🎤
              </div>
              <h4 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-2">Mock Interviews</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">Practice with industry professionals</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center text-white text-xl group-hover:scale-110 transition-transform">
                📄
              </div>
              <h4 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-2">CV Optimization</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">Pharmaceutical-focused resume crafting</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl flex items-center justify-center text-white text-xl group-hover:scale-110 transition-transform">
                💬
              </div>
              <h4 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-2">Communication</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">Confident professional presentation</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl flex items-center justify-center text-white text-xl group-hover:scale-110 transition-transform">
                🤝
              </div>
              <h4 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-2">Networking</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">Industry connection strategies</p>
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
            <div className="p-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-xl border border-amber-200/50 dark:border-amber-700/30">
              <div className="text-3xl font-bold text-amber-600 mb-2">2-3</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Weeks intensive preparation</div>
            </div>
            <div className="p-6 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-xl border border-orange-200/50 dark:border-orange-700/30">
              <div className="text-3xl font-bold text-orange-600 mb-2">95%</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Interview success rate</div>
            </div>
            <div className="p-6 bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 rounded-xl border border-red-200/50 dark:border-red-700/30">
              <div className="text-3xl font-bold text-red-600 mb-2">100+</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Companies partnered</div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Insight Highlight */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-3xl blur-xl"></div>
        <div className="relative bg-white/90 dark:bg-slate-900/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-amber-200/60 dark:border-amber-500/30 shadow-2xl">
          <div className="text-center">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900/40 dark:to-orange-900/40 mb-8">
              <span className="text-2xl mr-3">💡</span>
              <span className="text-amber-800 dark:text-amber-200 font-semibold text-lg">Professional Excellence</span>
            </div>
            <blockquote className="text-xl md:text-2xl font-medium text-slate-700 dark:text-slate-300 leading-relaxed">
              "Just as manufacturing scales drugs from lab batches to millions of perfect doses, 
              <span className="text-amber-700 dark:text-amber-300 font-semibold"> FPJ scales students from knowledge to confident professional performance</span> 
              ready for high-pressure pharmaceutical environments."
            </blockquote>
            <p className="mt-8 text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              We operationalize delivery through structured interview techniques, narrative frameworks, 
              and professional presence training that reduces friction under hiring pressure.
            </p>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

export default ManufacturingSection;