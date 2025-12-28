import type { Recipe } from '@/types/recipe'

export default function useRandomRecipe(recipes: Recipe[] = []) {
  const getRandomRecipe = (): Recipe | null => {
    if (recipes.length === 0) {
      return null
    }

    const randomIndex = Math.floor(Math.random() * recipes.length)
    return recipes[randomIndex] ?? null
  }

  return { getRandomRecipe }
}
