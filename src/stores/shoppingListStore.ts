import { type Ingredient } from '@/data/recipes'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useShoppingListStore = defineStore('shoppingList', () => {
  const ingredients = ref<Ingredient[]>([])

  const add = (newIngredients: Ingredient[]) => {
    newIngredients.forEach((newIngredient) => {
      const existingIngredient = ingredients.value.find(
        (item) => item.type === newIngredient.type && item.unit === newIngredient.unit,
      )

      if (existingIngredient) {
        existingIngredient.amount = (existingIngredient.amount ?? 0) + (newIngredient.amount ?? 0)
        return
      }

      ingredients.value.push({ ...newIngredient })
    })
  }

  const clear = () => (ingredients.value = [])

  return { ingredients, add, clear }
})
