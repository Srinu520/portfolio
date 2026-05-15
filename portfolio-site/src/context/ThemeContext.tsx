'use client';

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
const THEME_STORAGE_KEY = 'portfolio-theme';

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isDark, setIsDark] = useState(true);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(THEME_STORAGE_KEY);
    const nextIsDark = saved ? saved === 'dark' : true;
    localStorage.removeItem('theme');
    setIsDark(nextIsDark);
    document.documentElement.setAttribute('data-theme', nextIsDark ? 'dark' : 'light');
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (!hasMounted) return;
    localStorage.setItem(THEME_STORAGE_KEY, isDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark, hasMounted]);

  const toggleTheme = () => setIsDark((prev) => !prev);

  return <ThemeContext.Provider value={{ isDark, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
};
