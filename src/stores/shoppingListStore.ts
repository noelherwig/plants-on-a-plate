import type { Recipe, Ingredient } from '@/types/recipe'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { useRecipeStore } from './recipeStore'

export const useShoppingListStore = defineStore('shoppingList', () => {
  const recipeStore = useRecipeStore()

  const ingredients = ref<Ingredient[]>([])
  const recipeIds = ref<string[]>([])
  const recipes = computed(() =>
    recipeIds.value.flatMap((id) => {
      const recipe = recipeStore.getById(id)
      return recipe ? [recipe] : []
    }),
  )

  const add = (recipe: Recipe, newIngredients: Ingredient[]) => {
    recipeIds.value.push(recipe.id)
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
    recipeIds.value = []
    ingredients.value = []
  }

  const hasRecipe = (recipeId: string): boolean => recipes.value.some(({ id }) => id === recipeId)

  return { recipes, ingredients, add, clear, hasRecipe }
})
