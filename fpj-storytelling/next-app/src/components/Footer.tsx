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
        <div className="flex gap-4 text-sm text-slate-600 dark:text-slate-300">
          <a className="hover:text-blue-600 transition-colors" href="https://www.linkedin.com/in/firstpharmajob" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a className="hover:text-blue-600 transition-colors" href="/contact">Contact</a>
        </div>
      </div>
      <div className="text-xs text-center text-slate-400 dark:text-slate-500 pb-6">
        © {new Date().getFullYear()} FirstPharmaJob. All rights reserved.
        <span className="block md:inline md:ml-2 mt-1 md:mt-0 text-blue-600 dark:text-blue-400">🧠 Future Now</span>
      </div>
    </footer>
  );
};
