import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useFavoritesStore = defineStore('favorites', () => {
  const favoriteRecipeIds = ref<string[]>([])

  const isFavorite = (id: string) => favoriteRecipeIds.value.includes(id)

  const toggle = (id: string) => {
    if (isFavorite(id)) {
      favoriteRecipeIds.value = favoriteRecipeIds.value.filter((favoriteId) => favoriteId !== id)
    } else {
      favoriteRecipeIds.value.push(id)
    }
  }

  return { favoriteRecipeIds, isFavorite, toggle }
})
