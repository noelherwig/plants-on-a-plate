import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import type { Recipe } from '@/data/recipes'
import recipesMockData from '@/data/recipes'
import { useFavoriteStore } from './favoriteStore'

export const useRecipeStore = defineStore('recipes', () => {
  const recipes = ref<Recipe[]>(recipesMockData)
  const favoriteStore = useFavoriteStore()

  const getById = (id: string) => recipes.value.find((recipe) => recipe.id === id)

  const favorites = computed(() =>
    recipes.value.filter((recipe) => favoriteStore.favoriteIds.includes(recipe.id)),
  )

  return { recipes, getById, favorites }
})
