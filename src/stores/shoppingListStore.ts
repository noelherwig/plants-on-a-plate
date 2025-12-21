import { type Recipe, type Ingredient } from '@/data/recipes'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useShoppingListStore = defineStore('shoppingList', () => {
  const ingredients = ref<Ingredient[]>([])

  const addRecipe = (recipe: Recipe) => {
    recipe.ingredients.forEach((ingredient) => addIngredient(ingredient))
  }

  const addIngredient = (ingredient: Ingredient) => {
    ingredients.value.push(ingredient)
  }

  return { addRecipe }
})
