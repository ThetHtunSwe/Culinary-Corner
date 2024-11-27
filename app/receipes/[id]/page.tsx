import Image from 'next/image'
import { Badge } from '@/components/ui/badge'

const recipe = {
  id: 1,
  title: 'Spaghetti Carbonara',
  image: '/placeholder.svg?height=400&width=600',
  chef: 'Chef Mario',
  category: 'Italian',
  country: 'Italy',
  ingredients: [
    '400g spaghetti',
    '200g pancetta',
    '4 large eggs',
    '100g Pecorino Romano cheese',
    '100g Parmesan cheese',
    'Freshly ground black pepper',
    'Salt',
  ],
  instructions: [
    'Bring a large pot of salted water to boil and cook spaghetti according to package instructions.',
    'While the pasta is cooking, cut the pancetta into small cubes and fry in a large pan until crispy.',
    'In a bowl, whisk together eggs, grated Pecorino Romano, and Parmesan cheese.',
    'Drain the pasta, reserving a cup of pasta water.',
    'Add the hot pasta to the pan with pancetta and toss to combine.',
    'Remove the pan from heat and quickly stir in the egg and cheese mixture, adding some reserved pasta water if needed to create a creamy sauce.',
    'Season with freshly ground black pepper and serve immediately.',
  ],
}

export default function RecipeDetail({ params }: { params: { id: string } }) {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">{recipe.title}</h1>
      <div className="flex space-x-2">
        <Badge>{recipe.category}</Badge>
        <Badge variant="outline">{recipe.country}</Badge>
      </div>
      <p className="text-gray-600">by {recipe.chef}</p>
      <Image
        src={recipe.image}
        alt={recipe.title}
        width={600}
        height={400}
        className="w-full max-w-2xl mx-auto rounded-lg shadow-md"
      />
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Ingredients</h2>
          <ul className="list-disc list-inside space-y-2">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Instructions</h2>
          <ol className="list-decimal list-inside space-y-2">
            {recipe.instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  )
}

