import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

type Theme = 'light' | 'dark';
type Lang = 'ES' | 'EN';

interface PreferencesContextType {
  theme: Theme;
  lang: Lang;
  toggleTheme: () => void;
  setLang: (lang: Lang) => void;
}

const STORAGE_KEY_THEME = 'saru-theme';
const STORAGE_KEY_LANG = 'saru-lang';

function getInitialTheme(): Theme {
  try {
    const stored = localStorage.getItem(STORAGE_KEY_THEME);
    if (stored === 'light' || stored === 'dark') return stored;
  } catch {
    /* localStorage unavailable */
  }
  return 'light';
}

function getInitialLang(): Lang {
  try {
    const stored = localStorage.getItem(STORAGE_KEY_LANG);
    if (stored === 'ES' || stored === 'EN') return stored;
  } catch {
    /* localStorage unavailable */
  }
  return 'ES';
}

const PreferencesContext = createContext<PreferencesContextType | null>(null);

export const PreferencesProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const [lang, setLang] = useState<Lang>(getInitialLang);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem(STORAGE_KEY_THEME, theme);
    } catch {
      /* localStorage unavailable */
    }
  }, [theme]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_LANG, lang);
    } catch {
      /* localStorage unavailable */
    }
  }, [lang]);

  const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'));

  return (
    <PreferencesContext.Provider value={{ theme, lang, toggleTheme, setLang }}>
      {children}
    </PreferencesContext.Provider>
  );
};

export const usePreferences = (): PreferencesContextType => {
  const ctx = useContext(PreferencesContext);
  if (!ctx) throw new Error('usePreferences must be used within a <PreferencesProvider>');
  return ctx;
};
