import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    updateThemeStyles(theme);
  }, [theme]);

  const updateThemeStyles = (currentTheme) => {
    const isDark = currentTheme === 'dark';
    
    const accentColor = isDark ? '#00FFC0' : '#3730A3';
    const textColor = isDark ? '#CCD6F6' : '#1E293B';
    const bgColor = isDark ? '#0A192F' : '#F8F8FF';
    const cardColor = isDark ? '#112240' : '#FFFFFF';
    const borderColor = isDark ? '#233554' : '#D1D5DB';

    document.documentElement.style.setProperty('--bg-color', bgColor);
    document.documentElement.style.setProperty('--text-color', textColor);
    document.documentElement.style.setProperty('--card-color', cardColor);
    document.documentElement.style.setProperty('--accent-color', accentColor);
    document.documentElement.style.setProperty('--border-color', borderColor);
    document.documentElement.style.setProperty('--neon-color', accentColor);
    
    document.documentElement.style.setProperty(
      '--neon-color-rgba-light',
      isDark ? 'rgba(0, 255, 192, 0.6)' : 'rgba(55, 48, 163, 0.3)'
    );
    document.documentElement.style.setProperty(
      '--neon-color-rgba-mid',
      isDark ? 'rgba(0, 255, 192, 0.4)' : 'rgba(55, 48, 163, 0.15)'
    );
  };

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

