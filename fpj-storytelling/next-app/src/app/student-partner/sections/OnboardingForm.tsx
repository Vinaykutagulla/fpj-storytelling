"use client";
import React, { useState } from 'react';

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  college: string;
  course: string;
  year: string;
  instagram?: string;
  linkedin?: string;
  website?: string; // honeypot
}

const initial: FormState = { firstName:'', lastName:'', email:'', phone:'', college:'', course:'', year:'', instagram:'', linkedin:'', website:'' };

export default function OnboardingForm() {
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState,string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string|null>(null);
  // Earnings estimator state
  const [referralsEst, setReferralsEst] = useState(10);

  function validate() {
    const e: typeof errors = {};
    if (!form.firstName.trim()) e.firstName = 'Required';
    if (!form.lastName.trim()) e.lastName = 'Required';
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) e.email = 'Invalid email';
    if (!form.phone.trim()) e.phone = 'Required';
    if (!form.college.trim()) e.college = 'Required';
    if (!form.course.trim()) e.course = 'Required';
    if (!form.year.trim()) e.year = 'Required';
    return e;
  }

  async function handleSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length) return;
    setSubmitting(true);
    setServerError(null);
    try {
      // Simplified payload without motivation and referral code
      const payload = {
        name: form.firstName + ' ' + form.lastName,
        email: form.email,
        institution: form.college,
        year: form.year,
        motivation: 'Applied through simplified form', // Default motivation
        phone: form.phone,
        course: form.course,
        instagram: form.instagram,
        linkedin: form.linkedin,
        website: form.website // honeypot
      };
      const res = await fetch('/api/partner-applications', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
      if (!res.ok) {
        const body = await res.json().catch(()=>({}));
        setServerError(body.error || 'Submission failed');
        return;
      }
      setSubmitted(true);
      setForm(initial);
    } catch (e:any) {
      setServerError('Network error');
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <section id="apply" className="py-24 bg-gradient-to-br from-blue-50 to-sky-50 dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-4">Application Received</h2>
          <p className="text-slate-600 dark:text-slate-300 mb-6">Thank you for applying! We will review your submission and respond within 24–48 hours.</p>
          <button onClick={()=>setSubmitted(false)} className="px-6 py-3 rounded-lg font-medium bg-blue-600 text-white hover:bg-blue-700 transition">Submit Another</button>
        </div>
      </section>
    );
  }

  const field = 'w-full rounded-lg border bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-600 px-4 py-3 text-sm text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500';
  const twoCol = 'grid gap-6 md:grid-cols-2';

  function input<K extends keyof FormState>(k:K, props: any = {}) {
    return <input {...props} value={(form[k] as any) || ''} onChange={e=>setForm(f=>({...f,[k]:e.target.value}))} className={field + (errors[k]? ' ring-2 ring-red-500 border-red-500':'')} />;
  }
  function textarea<K extends keyof FormState>(k:K, props: any = {}) {
    return <textarea {...props} value={(form[k] as any)||''} onChange={e=>setForm(f=>({...f,[k]:e.target.value}))} className={field + ' min-h-[160px] resize-y' + (errors[k]? ' ring-2 ring-red-500 border-red-500':'')} />;
  }

  // Earnings estimator calculation
  function estimatedPayout(n:number) {
    // Simplistic tier logic aligned with levels
    if (n <= 5) return n * 500;
    if (n <= 15) return (5*500) + (n-5)*750;
    if (n <= 30) return (5*500) + (10*750) + (n-15)*1000;
    // 31+ assume 1500 each beyond 30
    return (5*500) + (10*750) + (15*1000) + (n-30)*1500;
  }

  return (
    <section id="apply" className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-4xl mx-auto px-6">
        <div className="max-w-2xl mb-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-800 dark:text-white">Apply to Become a Student Partner</h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300">Join the growing community building credible, ethical pharma talent acceleration. Provide enough detail for a fast review.</p>
        </div>
        <form onSubmit={handleSubmit} noValidate className="space-y-10" aria-describedby="apply-help">
          <div className={twoCol}>
            <div>
              <label className="block text-sm font-medium mb-1 text-slate-700 dark:text-slate-300">First Name *</label>
              {input('firstName', { required:true })}
              {errors.firstName && <p className="mt-1 text-xs text-red-600" role="alert">{errors.firstName}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-slate-700 dark:text-slate-300">Last Name *</label>
              {input('lastName',{ required:true })}
              {errors.lastName && <p className="mt-1 text-xs text-red-600" role="alert">{errors.lastName}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-slate-700 dark:text-slate-300">Email *</label>
              {input('email',{ type:'email', required:true })}
              {errors.email && <p className="mt-1 text-xs text-red-600" role="alert">{errors.email}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-slate-700 dark:text-slate-300">Phone *</label>
              {input('phone',{ required:true })}
              {errors.phone && <p className="mt-1 text-xs text-red-600" role="alert">{errors.phone}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-slate-700 dark:text-slate-300">College / University *</label>
              {input('college',{ required:true })}
              {errors.college && <p className="mt-1 text-xs text-red-600" role="alert">{errors.college}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-slate-700 dark:text-slate-300">Course *</label>
              {input('course',{ placeholder:'e.g., B.Pharm', required:true })}
              {errors.course && <p className="mt-1 text-xs text-red-600" role="alert">{errors.course}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-slate-700 dark:text-slate-300">Current Year *</label>
              {input('year',{ placeholder:'e.g., 3rd Year', required:true })}
              {errors.year && <p className="mt-1 text-xs text-red-600" role="alert">{errors.year}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-slate-700 dark:text-slate-300">Instagram Handle</label>
              {input('instagram',{ placeholder:'@username' })}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-slate-700 dark:text-slate-300">LinkedIn URL</label>
              {input('linkedin',{ placeholder:'https://linkedin.com/in/...' })}
            </div>
            {/* Honeypot */}
            <div className="hidden" aria-hidden="true">
              {input('website',{ tabIndex:-1, autoComplete:'off' })}
            </div>
          </div>
          <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-5 bg-slate-50 dark:bg-slate-900/30">
            <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-200 mb-3">Earnings Estimator (Preview)</h3>
            <label className="block text-xs font-medium mb-1 text-slate-500 dark:text-slate-400">Projected monthly qualified referrals</label>
            <input type="range" min={1} max={60} value={referralsEst} onChange={e=>setReferralsEst(Number(e.target.value))} className="w-full" />
            <div className="mt-2 flex justify-between text-xs text-slate-500 dark:text-slate-400"><span>{referralsEst}</span><span>₹{estimatedPayout(referralsEst).toLocaleString()}</span></div>
            <p className="mt-2 text-[11px] leading-relaxed text-slate-500 dark:text-slate-400">Approximate payout based on tiered structure (excludes bonuses). Actual validation & performance reviews apply.</p>
          </div>
          <div className="flex flex-col gap-2 text-xs text-slate-500 dark:text-slate-400" id="apply-help">
            {serverError && <span className="text-red-600" role="alert">{serverError}</span>}
            <span>Submissions currently persist in-memory or Supabase if configured.</span>
          </div>
          <div>
            <button disabled={submitting} className="w-full md:w-auto inline-flex items-center justify-center px-8 py-3 rounded-lg font-semibold bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed transition">
              {submitting ? 'Submitting…' : 'Submit Application'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
