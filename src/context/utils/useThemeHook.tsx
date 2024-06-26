import { use } from 'react';
import { ThemeContext } from '../ThemeContext';

export const useTheme = () => {
  const context = use(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
