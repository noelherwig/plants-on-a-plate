import recipes from '@/data/recipes'

export default function useRandomRecipe() {
  const getRandomRecipe = () => {
    if (recipes.length === 0) {
      return null
    }

    const randomIndex = Math.floor(Math.random() * recipes.length)
    return recipes[randomIndex]
  }

  return { getRandomRecipe }
}
