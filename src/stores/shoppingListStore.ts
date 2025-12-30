import type { Recipe } from '@/types/recipe'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { useRecipeStore } from './recipeStore'
import type { Ingredient } from '@/types/ingredient'

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
      const existingIngredient = ingredients.value.find(({ id }) => id === newIngredient.id)

      // If the ingredient does not exist yet, add it to the shopping list as-is
      if (!existingIngredient) {
        ingredients.value.push({ ...newIngredient })
        return
      }

      // Existing ingredients get their quantities updated
      existingIngredient.quantity += newIngredient.quantity
    })
  }

  const clear = () => {
    recipeIds.value = []
    ingredients.value = []
  }

  const hasRecipe = (recipeId: string): boolean => recipes.value.some(({ id }) => id === recipeId)

  return { recipes, ingredients, add, clear, hasRecipe }
})
