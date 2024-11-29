import { useState, useEffect } from 'react';

export const useTheme = () => {
  // Get the theme from localStorage, if available, otherwise default to 'dark'
  const savedTheme = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;
  const [theme, setTheme] = useState<'light' | 'dark'>(
    savedTheme ? (savedTheme as 'light' | 'dark') : 'dark'
  );

  useEffect(() => {
    // Set the theme in localStorage when it changes
    localStorage.setItem('theme', theme);
    // Apply the theme to the document body
    document.body.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return { theme, toggleTheme };
};
