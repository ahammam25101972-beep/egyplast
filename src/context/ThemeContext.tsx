import React, { createContext, useContext, useState, useEffect } from 'react';

type ThemeMode = 'light' | 'navy';

interface ThemeContextType {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
  toggleTheme: () => void;
  isNavy: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Default to 'light' (modern bright titanium/pearl architectural background) as requested
  const [theme, setThemeState] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem('homeplast_theme');
    return (saved === 'navy' || saved === 'light') ? saved : 'light';
  });

  const setTheme = (mode: ThemeMode) => {
    setThemeState(mode);
    localStorage.setItem('homeplast_theme', mode);
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'navy' : 'light');
  };

  useEffect(() => {
    if (theme === 'navy') {
      document.documentElement.classList.add('dark');
      document.body.className = "bg-[#0b1736] text-slate-100 font-['Cairo',sans-serif] selection:bg-cyan-500/30 selection:text-cyan-200 antialiased overflow-x-hidden transition-colors duration-300";
    } else {
      document.documentElement.classList.remove('dark');
      document.body.className = "bg-slate-50 text-slate-900 font-['Cairo',sans-serif] selection:bg-cyan-500/30 selection:text-cyan-800 antialiased overflow-x-hidden transition-colors duration-300";
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme, isNavy: theme === 'navy' }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
