"use client";
import React, { useEffect, useRef, useState } from 'react';

interface FormState {
  name: string; email: string; phone: string; service: string; experience: string; message: string; hp: string;
}

const initial: FormState = { name: '', email: '', phone: '', service: '', experience: '', message: '', hp: '' };

export default function ContactClient() {
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Record<string,string>>({});
  const [status, setStatus] = useState<'idle'|'submitting'|'success'|'error'>('idle');
  const successRef = useRef<HTMLDivElement | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    if (status === 'success' && successRef.current) {
      successRef.current.focus();
    }
  }, [status]);

  const validate = (): boolean => {
    const e: Record<string,string> = {};
    if (!form.name.trim()) e.name = 'Name required';
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) e.email = 'Valid email required';
    if (form.phone && !/^[+0-9()\-\s]{7,20}$/.test(form.phone)) e.phone = 'Invalid phone';
    if (form.message.trim().length < 10) e.message = 'Min 10 characters';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const encode = (data: Record<string,string>) => Object.keys(data).map(k => encodeURIComponent(k)+'='+encodeURIComponent(data[k]??'')).join('&');

  const onChange = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    // Honeypot early exit
    if (form.hp) {
      setStatus('success');
      setForm(initial);
      return;
    }
    setStatus('submitting');
    // dual: API route + Netlify fallback
    const payload = { ...form };
    try {
      await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
      // Netlify static form fallback
      await fetch('/', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: encode({ 'form-name': 'contact', ...form }) });
      setStatus('success');
      setForm(initial);
      try {
        // Analytics event dispatch
        window.dispatchEvent(new CustomEvent('analytics:interaction', { detail: { type: 'contact_submit', service: form.service || null, ts: Date.now() } }));
      } catch {/* noop */}
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100">
      <section className="relative pt-24 pb-16 px-6 bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">Get In Touch</h1>
          <p className="mt-6 text-indigo-100 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">Questions about programs, partnerships or career mapping? We respond within 24 hours.</p>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16">
        <div className="bg-white dark:bg-slate-900/70 backdrop-blur rounded-2xl border border-slate-200/60 dark:border-slate-700/60 shadow-lg p-8">
          <h2 className="text-2xl font-semibold tracking-tight mb-6">Send a Message</h2>
          {status === 'success' && <div ref={successRef} tabIndex={-1} className="mb-6 rounded-lg border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-4 py-3 text-sm focus:outline-none focus-visible:ring-4 ring-emerald-300/40">Message received — we’ll reply shortly.</div>}
          {status === 'error' && <div className="mb-6 rounded-lg border border-rose-500/30 bg-rose-500/10 text-rose-600 dark:text-rose-400 px-4 py-3 text-sm">Something went wrong. Try again.</div>}
          <form ref={formRef} name="contact" data-netlify="true" onSubmit={submit} noValidate className="space-y-5" aria-describedby="contact-help" data-analytics-scope="contact-form">
            <input type="hidden" name="form-name" value="contact" />
            {/* Honeypot field (hidden from users) */}
            <div className="hidden">
              <label>Leave this field empty<input name="hp" value={form.hp} onChange={onChange} autoComplete="off" tabIndex={-1} /></label>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-xs font-medium mb-1 uppercase tracking-wide">Name</label>
                <input id="name" name="name" value={form.name} onChange={onChange} autoComplete="name" className={`w-full rounded-lg border bg-white/60 dark:bg-slate-800/60 px-4 py-3 text-sm focus:outline-none focus:ring-4 ring-indigo-300/40 ${errors.name ? 'border-rose-500' : 'border-slate-300 dark:border-slate-600'}`} />
                {errors.name && <p className="mt-1 text-xs text-rose-500" role="alert">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-medium mb-1 uppercase tracking-wide">Email</label>
                <input id="email" name="email" type="email" value={form.email} onChange={onChange} autoComplete="email" className={`w-full rounded-lg border bg-white/60 dark:bg-slate-800/60 px-4 py-3 text-sm focus:outline-none focus:ring-4 ring-indigo-300/40 ${errors.email ? 'border-rose-500' : 'border-slate-300 dark:border-slate-600'}`} />
                {errors.email && <p className="mt-1 text-xs text-rose-500" role="alert">{errors.email}</p>}
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label htmlFor="phone" className="block text-xs font-medium mb-1 uppercase tracking-wide">Phone</label>
                <input id="phone" name="phone" value={form.phone} onChange={onChange} autoComplete="tel" className={`w-full rounded-lg border bg-white/60 dark:bg-slate-800/60 px-4 py-3 text-sm focus:outline-none focus:ring-4 ring-indigo-300/40 ${errors.phone ? 'border-rose-500' : 'border-slate-300 dark:border-slate-600'}`} />
                {errors.phone && <p className="mt-1 text-xs text-rose-500" role="alert">{errors.phone}</p>}
              </div>
              <div>
                <label htmlFor="service" className="block text-xs font-medium mb-1 uppercase tracking-wide">Interest</label>
                <select id="service" name="service" value={form.service} onChange={onChange} className="w-full rounded-lg border bg-white/60 dark:bg-slate-800/60 px-4 py-3 text-sm focus:outline-none focus:ring-4 ring-indigo-300/40 border-slate-300 dark:border-slate-600">
                  <option value="">Select</option>
                  <option value="cdm">Clinical Data Management</option>
                  <option value="sas">Clinical SAS Programming</option>
                  <option value="pv">Pharmacovigilance</option>
                  <option value="regulatory">Regulatory Affairs</option>
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-xs font-medium mb-1 uppercase tracking-wide">Message</label>
              <textarea id="message" name="message" value={form.message} onChange={onChange} rows={5} className={`w-full rounded-lg border bg-white/60 dark:bg-slate-800/60 px-4 py-3 text-sm resize-y focus:outline-none focus:ring-4 ring-indigo-300/40 ${errors.message ? 'border-rose-500' : 'border-slate-300 dark:border-slate-600'}`}></textarea>
              {errors.message && <p className="mt-1 text-xs text-rose-500" role="alert">{errors.message}</p>}
            </div>
            <div className="flex items-center gap-4 flex-wrap">
              <button type="submit" disabled={status==='submitting'} className="rounded-full bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 text-white font-semibold px-8 py-3 text-sm shadow-lg shadow-indigo-600/30 hover:opacity-90 focus:outline-none focus-visible:ring-4 ring-indigo-300/50 disabled:opacity-60 disabled:cursor-not-allowed relative">
                <span className={status==='submitting' ? 'opacity-0' : 'opacity-100 transition-opacity'}>{status==='success' ? 'Sent' : 'Send Message'}</span>
                {status==='submitting' && <span className="absolute inset-0 flex items-center justify-center"><span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white"></span></span>}
              </button>
              <p id="contact-help" className="text-xs text-slate-500 dark:text-slate-400">We never share your contact details. <span className="font-medium">Response time: &lt; 24h</span>.</p>
            </div>
          </form>
        </div>
        <aside className="space-y-8">
          <div className="bg-white dark:bg-slate-900/70 backdrop-blur rounded-2xl border border-slate-200/60 dark:border-slate-700/60 shadow p-6">
            <h3 className="text-sm font-semibold tracking-wide text-indigo-600 dark:text-indigo-300 uppercase mb-4">Direct Channels</h3>
            <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
              <li><strong className="text-slate-800 dark:text-slate-100">Email:</strong> firstpharmajob@gmail.com</li>
              <li><strong className="text-slate-800 dark:text-slate-100">WhatsApp:</strong> +91 91005 14968</li>
              <li><strong className="text-slate-800 dark:text-slate-100">LinkedIn:</strong> <a className="text-indigo-600 dark:text-indigo-400 hover:underline" href="https://www.linkedin.com/in/firstpharmajob">Profile</a></li>
            </ul>
          </div>
          <div className="bg-white dark:bg-slate-900/70 backdrop-blur rounded-2xl border border-slate-200/60 dark:border-slate-700/60 shadow p-6">
            <h3 className="text-sm font-semibold tracking-wide text-indigo-600 dark:text-indigo-300 uppercase mb-4">Why Reach Out?</h3>
            <ul className="list-disc pl-5 space-y-2 text-xs md:text-sm text-slate-600 dark:text-slate-400">
              <li>Clarify program fit & sequencing</li>
              <li>Discuss partnership / hiring funnels</li>
              <li>Request custom corporate cohort</li>
              <li>Media & speaking engagements</li>
            </ul>
          </div>
        </aside>
      </section>
    </main>
  );
}
