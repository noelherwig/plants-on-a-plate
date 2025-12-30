import { defineStore } from 'pinia'
import type { Recipe } from '@/types/recipe'
import { ref } from 'vue'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '@/firebase/firebase'
import { mapRecipes } from '@/mappers/recipeMapper'

const CACHE_KEY = 'recipes'
const CACHE_TIMESTAMP_KEY = 'recipes_cache_timestamp'
const CACHE_DURATION_MS = 24 * 60 * 60 * 1000 // 24 hours

export const useRecipeStore = defineStore('recipes', () => {
  const recipes = ref<Recipe[]>([])
  const pending = ref(true)
  const error = ref(false)

  const fetchRecipes = async () => {
    const cachedRecipes = localStorage.getItem(CACHE_KEY)
    const cacheTimestamp = localStorage.getItem(CACHE_TIMESTAMP_KEY)
    const now = Date.now()

    // Use cache only if it exists and is less than 24 hours old
    if (cachedRecipes && cacheTimestamp && now - Number(cacheTimestamp) < CACHE_DURATION_MS) {
      recipes.value = JSON.parse(cachedRecipes)
      console.log('🍽️ Using cached recipes')
      pending.value = false
      return
    }

    try {
      const recipesRef = collection(db, 'recipes')
      const snapshot = await getDocs(recipesRef)

      const fetchedRecipes: Recipe[] = snapshot.docs.map((doc) => mapRecipes(doc.id, doc.data()))

      recipes.value = fetchedRecipes
      localStorage.setItem(CACHE_KEY, JSON.stringify(fetchedRecipes))
      localStorage.setItem(CACHE_TIMESTAMP_KEY, now.toString())
      console.log('🍽️ Recipes fetched from Firestore')
    } catch {
      error.value = true
    } finally {
      pending.value = false
    }
  }

  const getById = (recipeId: string) => recipes.value.find(({ id }) => id === recipeId)

  return { recipes, pending, error, fetchRecipes, getById }
})
