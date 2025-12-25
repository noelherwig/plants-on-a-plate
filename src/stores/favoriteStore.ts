import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useFavoriteStore = defineStore('favorite', () => {
  const favoriteRecipeIds = ref<string[]>([])

  const isFavorite = (id: string) => favoriteRecipeIds.value.includes(id)

  const add = (id: string) => favoriteRecipeIds.value.push(id)

  const remove = (id: string) =>
    (favoriteRecipeIds.value = favoriteRecipeIds.value.filter((favoriteId) => favoriteId !== id))

  const toggle = (id: string) => (isFavorite(id) ? remove(id) : add(id))

  return { favoriteRecipeIds, isFavorite, remove, add, toggle }
})
