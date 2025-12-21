import { type Ingredient } from '@/data/recipes'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useShoppingListStore = defineStore('shoppingList', () => {
  const ingredients = ref<Ingredient[]>([])

  const addIngredients = (newIngredients: Ingredient[]) => ingredients.value.push(...newIngredients)

  return { ingredients, addIngredients }
})
