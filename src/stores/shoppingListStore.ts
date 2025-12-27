import type { Recipe, Ingredient } from '@/data/recipes'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useShoppingListStore = defineStore('shoppingList', () => {
  const recipes = ref<Recipe[]>([])
  const ingredients = ref<Ingredient[]>([])

  const add = (recipe: Recipe, newIngredients: Ingredient[]) => {
    recipes.value.push(recipe)
    newIngredients.forEach((newIngredient) => {
      const existingIngredient = ingredients.value.find(
        (item) => item.type === newIngredient.type && item.unit === newIngredient.unit,
      )

      // If the ingredient does not exist yet, add it to the shopping list as-is
      if (!existingIngredient) {
        ingredients.value.push({ ...newIngredient })
        return
      }

      // Existing ingredients without an amount ("Salt", "Olive oil") do not get added again
      if (!existingIngredient.amount || !newIngredient.amount) {
        existingIngredient.amount = undefined
        return
      }

      // Existing ingredients get their amounts updated
      existingIngredient.amount += newIngredient.amount
    })
  }

  const clear = () => {
    recipes.value = []
    ingredients.value = []
  }

  const hasRecipe = (recipe: Recipe): boolean => recipes.value.some((r) => r.id === recipe.id)

  return { recipes, ingredients, add, clear, hasRecipe }
})
