import { type Ingredient } from '@/data/recipes'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { ToastType, useToastStore } from './toastStore'

export const useShoppingListStore = defineStore('shoppingList', () => {
  const ingredients = ref<Ingredient[]>([])
  const toastStore = useToastStore()

  const add = (newIngredients: Ingredient[]) => {
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

    toastStore.show('The ingredients have been added to your shopping list!', ToastType.Success)
  }

  const clear = () => (ingredients.value = [])

  return { ingredients, add, clear }
})
