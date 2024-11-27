import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from 'lucide-react'

interface Recipe {
  id: number
  title: string
  image: string
  chef: string
  category: string
  country: string
}

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <Card>
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
        <div className="flex space-x-2 mt-2">
          <Badge>{recipe.category}</Badge>
          <Badge fontVariant="outline">{recipe.country}</Badge>
        </div>
        <Link href={`/recipes/${recipe.id}`} className="text-primary hover:underline mt-2">
          View Recipe
        </Link>
      </CardFooter>
    </Card>
  )
}

