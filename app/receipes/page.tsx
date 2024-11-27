import RecipeCard from '../components/RecipeCard'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const recipes = [
  { id: 1, title: 'Spaghetti Carbonara', image: '/placeholder.svg?height=200&width=300', chef: 'Chef Mario', category: 'Italian', country: 'Italy' },
  { id: 2, title: 'Chicken Tikka Masala', image: '/placeholder.svg?height=200&width=300', chef: 'Chef Priya', category: 'Indian', country: 'India' },
  { id: 3, title: 'Beef Bourguignon', image: '/placeholder.svg?height=200&width=300', chef: 'Chef Pierre', category: 'French', country: 'France' },
  { id: 4, title: 'Sushi Rolls', image: '/placeholder.svg?height=200&width=300', chef: 'Chef Yuki', category: 'Japanese', country: 'Japan' },
  { id: 5, title: 'Tacos al Pastor', image: '/placeholder.svg?height=200&width=300', chef: 'Chef Carlos', category: 'Mexican', country: 'Mexico' },
]

export default function RecipesPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Recipes</h1>
      <div className="flex space-x-4">
        <Input type="text" placeholder="Search recipes" className="max-w-sm" />
        <Button type="submit">Search</Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  )
}

