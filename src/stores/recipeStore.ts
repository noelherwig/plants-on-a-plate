import { defineStore } from 'pinia'
import type { Recipe } from '@/types/recipe'
import { ref } from 'vue'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '@/firebase/firebase'
import { mapRecipes } from '@/mappers/recipeMapper'

export const useRecipeStore = defineStore('recipes', () => {
  const recipes = ref<Recipe[]>([])
  const pending = ref(false)
  const error = ref(false)

  const fetchRecipes = async () => {
    const cachedRecipes = localStorage.getItem('recipes')
    if (cachedRecipes) {
      recipes.value = JSON.parse(cachedRecipes)
      console.log('🍽️ Cached recipes found!')
      return
    }

    pending.value = true
    try {
      const recipesRef = collection(db, 'recipes')
      const snapshot = await getDocs(recipesRef)

      const rawRecipes: Recipe[] = snapshot.docs.map((doc) => mapRecipes(doc.id, doc.data()))

      recipes.value = rawRecipes
      localStorage.setItem('recipes', JSON.stringify(rawRecipes))
    } catch {
      error.value = true
    } finally {
      pending.value = false
    }
  }

  const getById = (recipeId: string) => recipes.value.find(({ id }) => id === recipeId)

  return { recipes, pending, error, fetchRecipes, getById }
})
