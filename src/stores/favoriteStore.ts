import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { useRecipeStore } from './recipeStore'

export const useFavoriteStore = defineStore('favorite', () => {
  const recipeStore = useRecipeStore()

  const favoriteIds = ref<string[]>([])
  const favorites = computed(() =>
    recipeStore.recipes.filter(({ id }) => favoriteIds.value.includes(id)),
  )

  const isFavorite = (id: string) => favoriteIds.value.includes(id)

  const add = (id: string) => favoriteIds.value.push(id)

  const remove = (id: string) =>
    (favoriteIds.value = favoriteIds.value.filter((favoriteId) => favoriteId !== id))

  const toggle = (id: string) => (isFavorite(id) ? remove(id) : add(id))

  return { favorites, isFavorite, remove, add, toggle }
})
