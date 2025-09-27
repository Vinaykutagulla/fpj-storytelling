import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';

// Key used in localStorage
const STORAGE_KEY = 'fpj-theme';

// Possible themes
const THEMES = {
  LIGHT: 'light',
  DARK: 'dark'
};

const ThemeContext = createContext({
  theme: THEMES.LIGHT,
  toggleTheme: () => {},
  setTheme: () => {}
});

export const ThemeProvider = ({ children }) => {
  const [theme, setThemeState] = useState(THEMES.LIGHT);
  const [mounted, setMounted] = useState(false);

  // Apply theme class to <html>
  const applyThemeClass = useCallback((t) => {
    const root = document.documentElement;
    if (t === THEMES.DARK) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, []);

  // Initialize theme: localStorage -> system preference
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === THEMES.DARK || stored === THEMES.LIGHT) {
        setThemeState(stored);
        applyThemeClass(stored);
      } else {
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const initial = systemPrefersDark ? THEMES.DARK : THEMES.LIGHT;
        setThemeState(initial);
        applyThemeClass(initial);
      }
    } catch (e) {
      // Fallback: light
      applyThemeClass(THEMES.LIGHT);
    }
    setMounted(true);
  }, [applyThemeClass]);

  const setTheme = useCallback((t) => {
    setThemeState(t);
    try { localStorage.setItem(STORAGE_KEY, t); } catch (_) {}
    applyThemeClass(t);
  }, [applyThemeClass]);

  const toggleTheme = useCallback(() => {
    setThemeState(prev => {
      const next = prev === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK;
      try { localStorage.setItem(STORAGE_KEY, next); } catch(_) {}
      applyThemeClass(next);
      return next;
    });
  }, [applyThemeClass]);

  const value = { theme, toggleTheme, setTheme };

  // Sync theme-color meta (for mobile browser UI) when theme changes
  useEffect(() => {
    const lightColor = '#ffffff';
    const darkColor = '#0d1117';
    let meta = document.querySelector('meta[name="theme-color"][data-dynamic]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'theme-color';
      meta.setAttribute('data-dynamic', 'true');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', theme === THEMES.DARK ? darkColor : lightColor);
  }, [theme]);

  // Prevent flashing unstyled content before theme resolved (after all hooks)
  if (!mounted) {
    return <div style={{ visibility: 'hidden' }}>{children}</div>;
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
