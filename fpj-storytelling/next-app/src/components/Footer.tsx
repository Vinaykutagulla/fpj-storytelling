import * as React from 'react';
import { LogoMark } from './LogoMark';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-24 border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row gap-6 md:items-center justify-between">
        <div className="flex items-center gap-3">
          <LogoMark size={40} variant="icon" />
          <div>
            <p className="font-semibold text-slate-700 dark:text-slate-200">FirstPharmaJob</p>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Guiding students into pharmaceutical careers.</p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          {/* Contact & Social Media Links */}
          <div className="flex flex-wrap gap-4 text-sm">
            <a 
              className="flex items-center gap-2 hover:text-green-600 transition-colors text-slate-600 dark:text-slate-300" 
              href="https://wa.me/919100514968" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Contact FirstPharmaJob on WhatsApp"
            >
              <span className="text-green-500">📱</span>
              WhatsApp
            </a>
            <a 
              className="flex items-center gap-2 hover:text-blue-600 transition-colors text-slate-600 dark:text-slate-300" 
              href="https://www.youtube.com/@FirstPharmajob" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="FirstPharmaJob YouTube Channel"
            >
              <span className="text-red-500">▶️</span>
              YouTube
            </a>
            <a 
              className="flex items-center gap-2 hover:text-pink-600 transition-colors text-slate-600 dark:text-slate-300" 
              href="https://www.instagram.com/firstpharmajob/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="FirstPharmaJob Instagram"
            >
              <span className="text-pink-500">📷</span>
              Instagram
            </a>
            <a 
              className="flex items-center gap-2 hover:text-blue-400 transition-colors text-slate-600 dark:text-slate-300" 
              href="https://x.com/FPharmajob60819" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="FirstPharmaJob Twitter/X"
            >
              <span className="text-blue-400">🐦</span>
              Twitter/X
            </a>
            <a 
              className="flex items-center gap-2 hover:text-blue-600 transition-colors text-slate-600 dark:text-slate-300" 
              href="https://www.linkedin.com/company/firstpharmajob" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="FirstPharmaJob LinkedIn"
            >
              <span className="text-blue-600">💼</span>
              LinkedIn
            </a>
          </div>
          
          {/* Quick Links */}
          <div className="flex gap-4 text-sm text-slate-600 dark:text-slate-300">
            <a className="hover:text-blue-600 transition-colors" href="/student-partner">Student Partner</a>
            <a className="hover:text-blue-600 transition-colors" href="/about">About</a>
            <a className="hover:text-blue-600 transition-colors" href="/contact">Contact</a>
          </div>
        </div>
      </div>
      <div className="text-xs text-center text-slate-400 dark:text-slate-500 pb-6">
        © {new Date().getFullYear()} FirstPharmaJob. All rights reserved.
        <span className="block md:inline md:ml-2 mt-1 md:mt-0 text-blue-600 dark:text-blue-400">🧠 Future Now</span>
      </div>
    </footer>
  );
};
