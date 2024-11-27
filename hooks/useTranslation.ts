'use client'

import React, { useCallback, useState } from 'react'
import { dictionary } from '@/app/lib/dictonary'

type Language = keyof typeof dictionary;
type TranslationKey = keyof typeof dictionary['en'];

type TranslationHook = {
  t: (key: TranslationKey) => string;
  lang: Language;
  setLang: React.Dispatch<React.SetStateAction<Language>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export function useTranslation(): TranslationHook {
  const [lang, setLang] = useState<Language>('en')
  const [isLoading, setIsLoading] = useState(false)

  const t = useCallback((key: TranslationKey) => {
    return dictionary[lang][key] || key
  }, [lang])

  return { t, lang, setLang, isLoading, setIsLoading }
}
