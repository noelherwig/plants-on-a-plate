import { Unit, type Ingredient } from '@/types/ingredient'
import type { Recipe } from '@/types/recipe'
import type { RecipeTO } from '@/types/recipeTO'
import type { DocumentData } from 'firebase/firestore'

export function mapRecipes(docId: string, data: DocumentData): Recipe {
  return {
    id: docId,
    title: data.title,
    minutes: data.minutes,
    categories: data.categories,
    imageUrl: data.imageUrl,
    description: data.description,
    statistics: data.statistics,
    ingredients: mapIngredients(data.ingredients),
    steps: data.steps,
  }
}

function mapIngredients(ingredients: RecipeTO['ingredients']): Ingredient[] {
  return ingredients.map((ingredient) => ({
    id: ingredient.id,
    name: ingredient.name,
    quantity: ingredient.quantity,
    unit: unitMap[ingredient.unit] ?? Unit.None,
  }))
}

const unitMap: Record<string, Unit> = {
  g: Unit.Gram,
  ml: Unit.Milliliter,
  tbsp: Unit.Tablespoon,
  tsp: Unit.Teaspoon,
  clove: Unit.Clove,
  none: Unit.None,
}
