import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardFooter } from '@/components/ui/card'

const featuredRecipes = [
  { id: 1, title: 'Spaghetti Carbonara', image: '/placeholder.svg?height=200&width=300', chef: 'Chef Mario' },
  { id: 2, title: 'Chicken Tikka Masala', image: '/placeholder.svg?height=200&width=300', chef: 'Chef Priya' },
  { id: 3, title: 'Beef Bourguignon', image: '/placeholder.svg?height=200&width=300', chef: 'Chef Pierre' },
]

export default function FeaturedRecipes() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Featured Recipes</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featuredRecipes.map((recipe) => (
          <Card key={recipe.id}>
            <CardContent className="p-0">
              <Image
                src={recipe.image}
                alt={recipe.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
            </CardContent>
            <CardFooter className="flex flex-col items-start">
              <h3 className="font-semibold">{recipe.title}</h3>
              <p className="text-sm text-gray-600">by {recipe.chef}</p>
              <Link href={`/recipes/${recipe.id}`} className="text-primary hover:underline mt-2">
                View Recipe
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}

