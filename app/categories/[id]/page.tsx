import RecipeCard from '../../components/RecipeCard'

const categories = {
  1: { id: 1, name: 'Italian' },
  2: { id: 2, name: 'Indian' },
  3: { id: 3, name: 'French' },
  4: { id: 4, name: 'Japanese' },
  5: { id: 5, name: 'Mexican' },
}

const recipes = [
  { id: 1, title: 'Spaghetti Carbonara', image: '/placeholder.svg?height=200&width=300', chef: 'Chef Mario', category: 'Italian', country: 'Italy' },
  { id: 2, title: 'Margherita Pizza', image: '/placeholder.svg?height=200&width=300', chef: 'Chef Luigi', category: 'Italian', country: 'Italy' },
  { id: 3, title: 'Tiramisu', image: '/placeholder.svg?height=200&width=300', chef: 'Chef Giulia', category: 'Italian', country: 'Italy' },
]

export default function CategoryPage({ params }: { params: { id: string } }) {
  const category = categories[params.id as keyof typeof categories]

  if (!category) {
    return <div>Category not found</div>
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">{category.name} Recipes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  )
}

