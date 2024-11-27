'use client'

import React from 'react'
import { useTranslation } from '@/hooks/useTranslation'
import Header from './Header'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Search, ChefHat, Users } from 'lucide-react'
import Link from 'next/link'
import RecipeCard from './ReceipeCard'
import FeaturedRecipes from './FeaturedReceipes'
// Mock data for featured recipes
const featuredRecipes = [
  {
    id: 1,
    title: 'Spicy Thai Curry',
    image: '/images/thai-curry.jpg',
    chef: 'Chef Sarah',
    category: 'Main Course',
    country: 'Thailand'
  },
  {
    id: 2,
    title: 'Classic Tiramisu',
    image: '/images/tiramisu.jpg',
    chef: 'Chef Marco',
    category: 'Dessert',
    country: 'Italy'
  }
]

export default function HomePage() {
  const { t } = useTranslation()

  return (
    <div className="space-y-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">{t('welcome')}</h1>
        <p className="text-xl text-gray-600">{t('discover')}</p>
        <div className="flex justify-center">
          <div className="flex w-full max-w-sm items-center space-x-2">
            <Input type="text" placeholder={t('search')} />
            <Button type="submit">{t('search')}</Button>
          </div>
        </div>
      </section>
      <FeaturedRecipes />
      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4">{t('chef')}</h2>
        <p className="mb-4">{t('share')}</p>
        <Button asChild>
          <Link href="/register">{t('join')}</Link>
        </Button>
      </section>
    </div>
  )
}
