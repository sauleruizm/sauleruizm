import { usePreferences } from '../contexts/PreferencesContext';

export const useTheme = () => {
  const { theme, toggleTheme } = usePreferences();
  return { theme, toggleTheme };
};
