import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { getTranslation, Language as LangType } from '../data/translations';

type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    // Tenta recuperar o idioma do localStorage, ou usa 'pt' como padrão
    const savedLanguage = localStorage.getItem('language') as Language;
    return savedLanguage || 'pt';
  });

  useEffect(() => {
    // Salva o idioma no localStorage sempre que mudar
    localStorage.setItem('language', language);
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  // Função de tradução usando o arquivo de traduções
  const t = (key: string): string => {
    return getTranslation(language as LangType, key);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
