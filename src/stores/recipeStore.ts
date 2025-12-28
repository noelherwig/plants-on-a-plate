import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Recipe } from '@/data/recipes'
import recipesMockData from '@/data/recipes'

export const useRecipeStore = defineStore('recipes', () => {
  const recipes = ref<Recipe[]>(recipesMockData)

  const getById = (id: string) => recipes.value.find((recipe) => recipe.id === id)

  return { recipes, getById }
})
