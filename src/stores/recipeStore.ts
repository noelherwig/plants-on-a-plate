import { defineStore } from 'pinia'
import type { Recipe } from '@/types/recipe'
import { collection } from 'firebase/firestore'
import { db } from '@/firebase/firebase'
import { useCollection } from 'vuefire'

export const useRecipeStore = defineStore('recipes', () => {
  const recipesRef = collection(db, 'recipes')
  const { data: recipes, pending, error } = useCollection<Recipe>(recipesRef)

  const getById = (recipeId: string) => recipes.value.find(({ id }) => id === recipeId)

  return { recipes, pending, error, getById }
})
