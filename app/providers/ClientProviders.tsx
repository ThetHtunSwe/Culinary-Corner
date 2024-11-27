'use client'

import React from 'react'
import { TranslationProvider } from "./TranslationProvider"

interface ClientProvidersProps {
  children: React.ReactNode
}

export function ClientProviders({ children }: ClientProvidersProps) {
  return (
    <TranslationProvider>
      {children}
    </TranslationProvider>
  )
}
