import { defineStore } from 'pinia'
import { computed, ref, watch } from 'vue'
import { useRecipeStore } from './recipeStore'

const FAVORITES_KEY = 'favoriteRecipeIds'

export const useFavoriteStore = defineStore('favorite', () => {
  const recipeStore = useRecipeStore()

  const localStorageIds = localStorage.getItem(FAVORITES_KEY)
  const favoriteIds = ref<string[]>(localStorageIds ? JSON.parse(localStorageIds) : [])
  const favorites = computed(() =>
    recipeStore.recipes.filter(({ id }) => favoriteIds.value.includes(id)),
  )

  const isFavorite = (id: string) => favoriteIds.value.includes(id)

  const add = (id: string) => !isFavorite(id) && favoriteIds.value.push(id)

  const remove = (id: string) =>
    (favoriteIds.value = favoriteIds.value.filter((favoriteId) => favoriteId !== id))

  const toggle = (id: string) => (isFavorite(id) ? remove(id) : add(id))

  watch(favoriteIds, (ids) => localStorage.setItem(FAVORITES_KEY, JSON.stringify(ids)), {
    // Tell Vue to watch nested properties (IDs) instead of the array itself
    deep: true,
  })

  return { favorites, isFavorite, remove, add, toggle }
})
