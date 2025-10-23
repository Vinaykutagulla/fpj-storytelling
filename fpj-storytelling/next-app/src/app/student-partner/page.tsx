"use client";
import React from 'react';
import OnboardingForm from './sections/OnboardingForm';
import FAQOnboarding from './sections/FAQOnboarding';
import EarningsCalculator from './sections/EarningsCalculator';
import { faqItems } from './faqData';

export default function StudentPartnerOnboarding() {
  // Build FAQPage JSON-LD once on server. Avoids hydration mismatch.
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a }
    }))
  };
  return (
    <div className="relative">
      <script
        type="application/ld+json"
        id="faq-jsonld"
        // JSON-LD must be serialized; ensure no user input is injected here.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <HeroReferral />
      <ReferralHighlight />
      <HowItWorksReferral />
      <ReferralBenefits />
  <EarningsCalculator />
      <TermsAndConditions />
      <OnboardingForm />
      <FAQOnboarding />
      <FooterCTA />
    </div>
  );
}

function SectionTitle({ title, subtitle, className = '' }: { title: string; subtitle?: string; className?: string }) {
  return (
    <div className={`mx-auto text-center max-w-3xl ${className}`}> 
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-800 dark:text-white">{title}</h2>
      {subtitle && <p className="mt-4 text-slate-600 dark:text-slate-300">{subtitle}</p>}
    </div>
  );
}

function HeroReferral() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 dark:from-slate-900 dark:via-indigo-950 dark:to-purple-950 py-20 md:py-32">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-cyan-400/30 to-blue-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-pink-400/30 to-purple-500/30 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-gradient-to-r from-emerald-400/20 to-teal-500/20 rounded-full blur-3xl animate-pulse delay-500" />
      </div>
      
      <div className="relative max-w-6xl mx-auto px-6 text-center">
        {/* Attention-grabbing badge */}
        <div className="inline-flex items-center gap-3 mb-8 px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white text-sm font-bold shadow-2xl shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all duration-300 animate-bounce">
          <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
          💰 EARN ₹1,500 PER REFERRAL
          <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
        </div>
        
        {/* Power headline with enhanced gradients */}
        <h1 className="text-5xl md:text-8xl font-black tracking-tight leading-tight mb-6">
          <span className="block bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent">
            Turn Your Network
          </span>
          <span className="block bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300 bg-clip-text text-transparent">
            Into Pharma Income
          </span>
        </h1>
        
        {/* Compelling subtitle */}
        <p className="mt-8 text-xl md:text-2xl leading-relaxed text-slate-200 max-w-4xl mx-auto font-medium">
          Be among the <span className="text-emerald-300 font-bold">first student partners</span> to help peers access pharmaceutical careers while earning for yourself. 
          <span className="block mt-2 text-cyan-200">No skills required—just your network.</span>
        </p>
        
        {/* Enhanced program highlights */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="group text-center p-6 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-sm border border-emerald-400/30 hover:border-emerald-400/60 transition-all duration-300 hover:scale-105">
            <div className="text-4xl md:text-5xl font-black text-emerald-300 group-hover:text-emerald-200 transition-colors">₹1,500</div>
            <div className="text-sm font-semibold text-emerald-100 uppercase tracking-wide mt-2">Per Referral</div>
          </div>
          <div className="group text-center p-6 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 hover:scale-105">
            <div className="text-4xl md:text-5xl font-black text-cyan-300 group-hover:text-cyan-200 transition-colors">Instant</div>
            <div className="text-sm font-semibold text-cyan-100 uppercase tracking-wide mt-2">Fast Payout</div>
          </div>
          <div className="group text-center p-6 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-400/30 hover:border-purple-400/60 transition-all duration-300 hover:scale-105">
            <div className="text-4xl md:text-5xl font-black text-purple-300 group-hover:text-purple-200 transition-colors">No Limit</div>
            <div className="text-sm font-semibold text-purple-100 uppercase tracking-wide mt-2">Earning Cap</div>
          </div>
        </div>
        
        {/* Enhanced CTA buttons */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6">
          <a href="#apply" className="group relative px-12 py-6 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white font-bold text-xl shadow-2xl shadow-emerald-500/40 hover:shadow-emerald-500/60 hover:scale-110 transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative flex items-center gap-3">
              🚀 Start Earning Today
              <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </span>
          </a>
          <a href="#calculator" className="px-12 py-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 text-white font-bold text-xl hover:bg-white/20 hover:border-white/30 hover:scale-105 transition-all duration-300 shadow-xl">
            📊 Calculate Earnings
          </a>
        </div>
        
        {/* Enhanced urgency indicator */}
        <div className="mt-10 text-lg text-cyan-200">
          <span className="inline-flex items-center gap-2">
            <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse shadow-lg shadow-emerald-400/50"></div>
            Launching soon • Be among the first to apply
            <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse shadow-lg shadow-emerald-400/50"></div>
          </span>
        </div>
      </div>
    </section>
  );
}

function ReferralHighlight() {
  return (
    <section className="py-24 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white text-center relative overflow-hidden">
      {/* Enhanced animated background pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 via-transparent to-purple-500/10 animate-pulse"></div>
        
        {/* Floating elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-pink-400/20 to-purple-400/20 rounded-full blur-2xl animate-pulse delay-300"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-2xl animate-pulse delay-700"></div>
      </div>
      
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          {/* Main earning highlight with enhanced styling */}
          <div className="text-center lg:text-left">
            <div className="relative">
              <div className="text-7xl md:text-9xl font-black tracking-tight mb-4 bg-gradient-to-r from-white via-cyan-100 to-emerald-100 bg-clip-text text-transparent drop-shadow-2xl">
                ₹1,500
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-bounce shadow-lg"></div>
            </div>
            <div className="text-2xl md:text-3xl font-light text-emerald-100 tracking-wide">
              Per Successful Referral
            </div>
          </div>
          
          {/* Enhanced multiplier visual */}
          <div className="hidden lg:block">
            <div className="w-24 h-24 rounded-full bg-gradient-to-r from-purple-500/30 to-pink-500/30 backdrop-blur-sm border border-white/20 flex items-center justify-center">
              <span className="text-5xl font-light text-white/80">×</span>
            </div>
          </div>
          
          {/* Enhanced potential calculation */}
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-emerald-100 mb-4 leading-tight">
              Unlimited<br />
              <span className="text-cyan-200">Earning Potential</span>
            </div>
            <div className="text-xl text-white/90 font-medium">
              More referrals = More income!
            </div>
          </div>
        </div>
        
        {/* Enhanced value props with beautiful cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="group text-center p-8 rounded-3xl bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-lg border border-white/20 hover:border-white/40 hover:scale-105 transition-all duration-500 shadow-2xl">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🚀</div>
            <div className="font-bold text-xl mb-3">No Earning Limit</div>
            <div className="text-white/80 leading-relaxed">Scale your earnings with more referrals - sky's the limit!</div>
          </div>
          <div className="group text-center p-8 rounded-3xl bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-lg border border-white/20 hover:border-white/40 hover:scale-105 transition-all duration-500 shadow-2xl">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">⚡</div>
            <div className="font-bold text-xl mb-3">Instant Payouts</div>
            <div className="text-white/80 leading-relaxed">Money credited immediately after payment - no waiting periods!</div>
          </div>
          <div className="group text-center p-8 rounded-3xl bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-lg border border-white/20 hover:border-white/40 hover:scale-105 transition-all duration-500 shadow-2xl">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🎯</div>
            <div className="font-bold text-xl mb-3">Zero Investment</div>
            <div className="text-white/80 leading-relaxed">Just share your unique code - no upfront costs required!</div>
          </div>
        </div>
        
        {/* Call to action */}
        <div className="mt-12">
          <a href="#apply" className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 font-bold text-lg shadow-2xl hover:shadow-yellow-500/30 hover:scale-105 transition-all duration-300">
            <span>✨ Join the Program Now</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

function ReferralBenefits() {
  const benefits = [
    { 
      icon: '💰', 
      title: 'Earn Money', 
      text: 'Income while accelerating peers into the pharma industry.',
      color: 'from-emerald-500 to-teal-500',
      bgColor: 'from-emerald-50 to-teal-50 dark:from-emerald-950 dark:to-teal-950'
    },
    { 
      icon: '🤝', 
      title: 'Help Your Network', 
      text: 'Guide classmates toward structured development pathways.',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950'
    },
    { 
      icon: '🎓', 
      title: 'Build Experience', 
      text: 'Practice outreach, communication & lightweight funnel tracking.',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950'
    },
    { 
      icon: '🎯', 
      title: 'Unlimited Potential', 
      text: 'No cap on referrals or cumulative rewards.',
      color: 'from-orange-500 to-red-500',
      bgColor: 'from-orange-50 to-red-50 dark:from-orange-950 dark:to-red-950'
    },
    { 
      icon: '⚡', 
      title: 'Quick Payouts', 
      text: 'Fast confirmation and scheduled disbursement after enrollment.',
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'from-yellow-50 to-orange-50 dark:from-yellow-950 dark:to-orange-950'
    },
    { 
      icon: '🏆', 
      title: 'Recognition', 
      text: 'Top performers highlighted + additional benefits over time.',
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'from-indigo-50 to-purple-50 dark:from-indigo-950 dark:to-purple-950'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 dark:from-slate-900 dark:via-blue-950/30 dark:to-purple-950/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-emerald-200/20 to-teal-200/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Enhanced section title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight bg-gradient-to-r from-slate-900 via-blue-700 to-purple-700 dark:from-white dark:via-blue-300 dark:to-purple-300 bg-clip-text text-transparent mb-6">
            Why Become a Student Partner?
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Real impact + real reward = perfect opportunity
          </p>
        </div>
        
        {/* Enhanced benefits grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={benefit.title} 
              className={`group relative rounded-3xl bg-gradient-to-br ${benefit.bgColor} border border-white/60 dark:border-slate-700/60 p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              {/* Icon container */}
              <div className={`relative w-16 h-16 mb-6 flex items-center justify-center rounded-2xl bg-gradient-to-r ${benefit.color} text-white text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {benefit.icon}
              </div>
              
              {/* Content */}
              <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-slate-800 group-hover:to-slate-600 dark:group-hover:from-slate-100 dark:group-hover:to-slate-300 transition-all duration-300">
                {benefit.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                {benefit.text}
              </p>
              
              {/* Bottom accent line */}
              <div className={`absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r ${benefit.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
              
              {/* Corner decoration */}
              <div className={`absolute top-4 right-4 w-3 h-3 bg-gradient-to-r ${benefit.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
            </div>
          ))}
        </div>
        
        {/* Call to action section */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center gap-4 p-8 rounded-3xl bg-gradient-to-r from-emerald-500/10 via-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-emerald-200/50 dark:border-emerald-800/50">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100">
              Ready to start earning while helping others?
            </h3>
            <a href="#apply" className="px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-blue-600 text-white font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
              Apply Now →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// PartnerLevels removed in referral simplification

function HowItWorksReferral() {
  const steps = [
    { 
      n: '1', 
      title: 'Sign Up', 
      text: 'Submit a quick application and receive your unique referral code instantly.',
      icon: '📝',
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      n: '2', 
      title: 'Share Your Code', 
      text: 'Distribute to classmates & peers interested in pharma careers via WhatsApp, Instagram, etc.',
      icon: '📱',
      color: 'from-emerald-500 to-teal-500'
    },
    { 
      n: '3', 
      title: 'They Enroll', 
      text: 'Your referral uses the code to join an FPJ Institute course and starts their journey.',
      icon: '🎯',
      color: 'from-violet-500 to-purple-500'
    },
    { 
      n: '4', 
      title: 'You Earn', 
      text: '₹1,500 credited to your account instantly. No earning cap, unlimited potential.',
      icon: '💰',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 dark:from-slate-950 dark:via-blue-950/30 dark:to-purple-950/30 relative overflow-hidden">
      {/* Enhanced background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-emerald-100/20 via-blue-100/20 to-purple-100/20 dark:from-emerald-950/20 dark:via-blue-950/20 dark:to-purple-950/20"></div>
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-gradient-to-r from-blue-200/30 to-cyan-200/30 rounded-full blur-3xl animate-pulse delay-300"></div>
        <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-gradient-to-r from-purple-200/30 to-pink-200/30 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Enhanced section header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-black tracking-tight bg-gradient-to-r from-slate-900 via-blue-700 to-purple-700 dark:from-white dark:via-blue-300 dark:to-purple-300 bg-clip-text text-transparent mb-6 leading-tight">
            How It Works
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
            4 simple steps to start earning money while helping friends succeed in pharma
          </p>
          <div className="mt-6 w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full mx-auto"></div>
        </div>
        
        {/* Enhanced steps grid */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 relative">
          {/* Connection lines for desktop */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-1">
            <div className="flex justify-between items-center h-full px-20">
              <div className="flex-1 h-0.5 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 dark:from-blue-600 dark:via-purple-600 dark:to-pink-600"></div>
            </div>
          </div>
          
          {steps.map((step, index) => (
            <div key={step.n} className="group relative">
              {/* Enhanced Card */}
              <div className="relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/60 dark:border-slate-700/60 hover:shadow-3xl hover:-translate-y-4 hover:scale-105 transition-all duration-700 z-10">
                
                {/* Step number with enhanced styling */}
                <div className={`relative w-20 h-20 rounded-3xl mx-auto mb-6 flex items-center justify-center bg-gradient-to-r ${step.color} text-white font-black text-3xl shadow-2xl group-hover:scale-110 transition-transform duration-500`}>
                  <span className="relative z-10">{step.n}</span>
                  <div className="absolute inset-0 rounded-3xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                {/* Enhanced Icon */}
                <div className="text-5xl text-center mb-6 group-hover:scale-110 transition-transform duration-300">{step.icon}</div>
                
                {/* Enhanced Content */}
                <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4 text-center group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-slate-800 group-hover:to-slate-600 dark:group-hover:from-slate-100 dark:group-hover:to-slate-300 transition-all duration-300">
                  {step.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-center text-lg">
                  {step.text}
                </p>
                
                {/* Enhanced bottom accent */}
                <div className={`absolute bottom-0 left-8 right-8 h-2 bg-gradient-to-r ${step.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700`}></div>
                
                {/* Corner decorations */}
                <div className={`absolute top-4 right-4 w-4 h-4 bg-gradient-to-r ${step.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                <div className={`absolute bottom-4 left-4 w-3 h-3 bg-gradient-to-r ${step.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
                
                {/* Hover glow effect */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${step.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`}></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Enhanced success story */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-4 px-10 py-6 rounded-3xl bg-gradient-to-r from-emerald-50 via-blue-50 to-purple-50 dark:from-emerald-950 dark:via-blue-950 dark:to-purple-950 border border-emerald-200/50 dark:border-emerald-800/50 shadow-xl">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-emerald-500 to-blue-500 flex items-center justify-center text-white font-bold text-xl shadow-lg">
              ✨
            </div>
            <div className="text-left">
              <div className="text-lg font-bold text-slate-800 dark:text-slate-100">
                Start your earning journey today!
              </div>
              <div className="text-slate-600 dark:text-slate-300">
                Join the first batch of student partners
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TermsAndConditions() {
  const terms = [
    '₹1,500 per verified course enrollment attributed to your referral code.',
    'Referral code must be used during initial enrollment; retroactive claims not guaranteed.',
    'Payments processed after enrollment payment is confirmed (and any refund window passes).',
    'Only new student enrollments qualify.',
    'Rewards are non-transferable; fraud or misuse leads to disqualification.',
    'Program terms may evolve; material changes will be communicated.'
  ];
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/40">
      <div className="max-w-4xl mx-auto px-6">
        <SectionTitle title="Key Terms" subtitle="Understand the basics before you start" />
        <ul className="mt-10 space-y-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300 list-disc pl-6">
          {terms.map(t => <li key={t}>{t}</li>)}
        </ul>
      </div>
    </section>
  );
}

function FooterCTA() {
  return (
    <section className="py-24 bg-slate-900 text-white text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-6">Ready to Start Earning?</h2>
        <p className="text-xl mb-8">Join our student partner program today</p>
        <a href="#apply" className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-colors">
          Apply Now
        </a>
      </div>
    </section>
  );
}
