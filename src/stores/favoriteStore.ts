import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useFavoriteStore = defineStore('favorite', () => {
  const favoriteIds = ref<string[]>([])

  const isFavorite = (id: string) => favoriteIds.value.includes(id)

  const add = (id: string) => favoriteIds.value.push(id)

  const remove = (id: string) =>
    (favoriteIds.value = favoriteIds.value.filter((favoriteId) => favoriteId !== id))

  const toggle = (id: string) => (isFavorite(id) ? remove(id) : add(id))

  return { favoriteIds, isFavorite, remove, add, toggle }
})
