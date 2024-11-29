import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Define the type for the context values
interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

// Create the context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Create the custom hook to use the ThemeContext
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// ThemeProvider component
interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  // Get the theme from localStorage, if available, otherwise default to 'light'
  const savedTheme = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;
  const [theme, setTheme] = useState<'light' | 'dark'>(
    savedTheme ? (savedTheme as 'light' | 'dark') : 'light' // Default to light theme if no saved theme
  );

  useEffect(() => {
    // Save the theme in localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
