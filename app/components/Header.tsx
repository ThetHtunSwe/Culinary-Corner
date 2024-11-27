'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useTranslation } from '@/hooks/useTranslation'
import LanguageSelector from './LanguageSelector'

export default function Header() {
  const { t, isLoading } = useTranslation()

  if (isLoading) {
    return (
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary">
            Culinary Corner
          </Link>
          <nav className="flex items-center space-x-4">
            <ul className="flex space-x-4">
              <li><div className="h-6 w-16 bg-gray-200 animate-pulse rounded" /></li>
              <li><div className="h-6 w-20 bg-gray-200 animate-pulse rounded" /></li>
              <li><div className="h-6 w-12 bg-gray-200 animate-pulse rounded" /></li>
              <li><div className="h-9 w-20 bg-gray-200 animate-pulse rounded" /></li>
            </ul>
            <div className="h-9 w-[140px] bg-gray-200 animate-pulse rounded" />
          </nav>
        </div>
      </header>
    )
  }

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          Culinary Corner
        </Link>
        <nav className="flex items-center space-x-4">
          <ul className="flex space-x-4">
            <li><Link href="/recipes" className="text-gray-600 hover:text-primary">{t('recipes')}</Link></li>
            <li><Link href="/categories" className="text-gray-600 hover:text-primary">{t('categories')}</Link></li>
            <li><Link href="/login" className="text-gray-600 hover:text-primary">{t('login')}</Link></li>
            <li><Button asChild><Link href="/register">{t('register')}</Link></Button></li>
          </ul>
          <LanguageSelector />
        </nav>
      </div>
    </header>
  )
}
