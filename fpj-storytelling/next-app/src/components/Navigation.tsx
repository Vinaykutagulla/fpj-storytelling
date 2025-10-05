"use client";
import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from './ThemeProvider.tsx';
import { LogoMark } from './LogoMark.tsx';

export const Navigation: React.FC = () => {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = React.useState(false);

  const navItems: { name: string; href: string }[] = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
    { name: 'Student Partner', href: '/student-partner' }
  ];

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-white/90 dark:bg-slate-900/80 backdrop-blur border-b border-slate-200 dark:border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <LogoMark size={44} variant="icon" />
              <div className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-40 transition-opacity" style={{background:'radial-gradient(circle, #3b82f6 20%, transparent 70%)'}} />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-br from-slate-800 to-slate-600 dark:from-slate-100 dark:to-slate-300 group-hover:from-blue-600 group-hover:to-purple-500">FirstPharmaJob</span>
              <span className="text-xs text-slate-500 dark:text-slate-400">Students to Professionals</span>
            </div>
          </Link>
          <div className="hidden md:flex items-center gap-6">
            {navItems.map(i => {
              const active = pathname === i.href;
              return (
                <Link key={i.href} href={i.href as any} className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${active ? 'text-blue-600 dark:text-blue-400 bg-blue-50/60 dark:bg-slate-800' : 'text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100/60 dark:hover:bg-slate-700/60'}`}>{i.name}</Link>
              );
            })}
            <button onClick={toggleTheme} aria-label="Toggle theme" className="w-10 h-10 inline-flex items-center justify-center rounded-md border border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700">
              {theme === 'dark' ? '🌙' : '☀️'}
            </button>
          </div>
          <div className="md:hidden flex items-center gap-2">
            <button onClick={toggleTheme} aria-label="Toggle theme" className="w-10 h-10 inline-flex items-center justify-center rounded-md border border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700">
              {theme === 'dark' ? '🌙' : '☀️'}
            </button>
            <button onClick={() => setOpen(o => !o)} aria-label="Menu" className="w-10 h-10 inline-flex items-center justify-center rounded-md border border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700">☰</button>
          </div>
        </div>
      </div>
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          {navItems.map(i => {
            const active = pathname === i.href;
            return (
              <Link key={i.href} href={i.href as any} onClick={() => setOpen(false)} className={`block px-3 py-2 rounded-md text-sm font-medium ${active ? 'text-blue-600 dark:text-blue-400 bg-blue-50/60 dark:bg-slate-800' : 'text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-700'}`}>{i.name}</Link>
            );
          })}
        </div>
      )}
    </nav>
  );
};
