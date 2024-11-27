'use client'

import { createContext, useContext, ReactNode, useState, useCallback, useEffect } from 'react'
import { dictionary } from '../lib/dictonary';

type Language = keyof typeof dictionary;
type TranslationKey = keyof typeof dictionary['en'];

type TranslationContextType = {
  t: (key: TranslationKey) => string;
  lang: Language;
  setLang: (lang: Language) => void;
  isLoading: boolean;
}

const TranslationContext = createContext<TranslationContextType | null>(null)

const DEFAULT_LANG: Language = 'en'

export function TranslationProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>(DEFAULT_LANG)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const storedLang = localStorage.getItem('language') as Language
    if (storedLang) {
      setLang(storedLang)
    }
    setIsLoading(false)
  }, [])

  const handleSetLang = useCallback((newLang: Language) => {
    setLang(newLang)
    localStorage.setItem('language', newLang)
  }, [])

  const t = useCallback((key: TranslationKey) => {
    try {
      return dictionary[lang][key] || key
    } catch {
      return key
    }
  }, [lang])

  const value = {
    t,
    lang,
    setLang: handleSetLang,
    isLoading
  }
  
  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  )
}

export function useTranslationContext() {
  const context = useContext(TranslationContext)
  if (!context) {
    throw new Error('useTranslationContext must be used within a TranslationProvider')
  }
  return context
}

export type { TranslationContextType }
export { TranslationContext }
