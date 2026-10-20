"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type Language = "vi" | "en";

type LanguageContextValue = {
  language: Language;
  toggleLanguage: () => void;
};

const STORAGE_KEY = "kling-vn-language";
const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("vi");
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "vi" || stored === "en") setLanguage(stored);
    setInitialized(true);
  }, []);

  useEffect(() => {
    if (!initialized) return;
    document.documentElement.lang = language;
    document.title = language === "vi" ? "Kling AI Việt Nam" : "Kling AI Vietnam";
    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (description) {
      description.content =
        language === "vi"
          ? "Trang web chính thức của Kling AI tại Việt Nam."
          : "Official Kling AI website for Vietnam.";
    }
    window.localStorage.setItem(STORAGE_KEY, language);
  }, [initialized, language]);

  const toggleLanguage = () => {
    setLanguage((current) => (current === "vi" ? "en" : "vi"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
