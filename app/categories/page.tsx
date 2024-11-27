import Link from 'next/link'
import { Card, CardContent, CardFooter } from '@/components/ui/card'

const categories = [
  { id: 1, name: 'Italian', recipeCount: 15 },
  { id: 2, name: 'Indian', recipeCount: 12 },
  { id: 3, name: 'French', recipeCount: 10 },
  { id: 4, name: 'Japanese', recipeCount: 8 },
  { id: 5, name: 'Mexican', recipeCount: 14 },
  { id: 6, name: 'Chinese', recipeCount: 11 },
  { id: 7, name: 'Thai', recipeCount: 9 },
  { id: 8, name: 'American', recipeCount: 13 },
]

export default function CategoriesPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Recipe Categories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Card key={category.id}>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold">{category.name}</h2>
              <p className="text-gray-600">{category.recipeCount} recipes</p>
            </CardContent>
            <CardFooter>
              <Link href={`/categories/${category.id}`} className="text-primary hover:underline">
                View Recipes
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

