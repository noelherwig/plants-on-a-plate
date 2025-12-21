import { type Recipe } from '@/data/recipes'

export default function useRandomRecipe(recipes: Recipe[] = []) {
  const getRandomRecipe = () => {
    if (recipes.length === 0) {
      return null
    }

    const randomIndex = Math.floor(Math.random() * recipes.length)
    return recipes[randomIndex]
  }

  return { getRandomRecipe }
}
