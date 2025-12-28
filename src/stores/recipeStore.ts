import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Recipe } from '@/types/recipe'
import recipesMockData from '@/data/recipes'

export const useRecipeStore = defineStore('recipes', () => {
  const recipes = ref<Recipe[]>(recipesMockData)

  const getById = (recipeId: string) => recipes.value.find(({ id }) => id === recipeId)

  return { recipes, getById }
})
