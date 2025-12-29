import { defineStore } from 'pinia'
import { computed, ref, watch } from 'vue'
import { useRecipeStore } from './recipeStore'

const SAVED_KEY = 'savedRecipeIds'

export const useSavedStore = defineStore('saved', () => {
  const recipeStore = useRecipeStore()

  const localStorageIds = localStorage.getItem(SAVED_KEY)
  const savedIds = ref<string[]>(localStorageIds ? JSON.parse(localStorageIds) : [])
  const saved = computed(() => recipeStore.recipes.filter(({ id }) => savedIds.value.includes(id)))

  const isSaved = (id: string) => savedIds.value.includes(id)

  const save = (id: string) => !isSaved(id) && savedIds.value.push(id)

  const unsave = (id: string) =>
    (savedIds.value = savedIds.value.filter((savedId) => savedId !== id))

  const toggle = (id: string) => (isSaved(id) ? save(id) : unsave(id))

  watch(savedIds, (ids) => localStorage.setItem(SAVED_KEY, JSON.stringify(ids)), {
    // Tell Vue to watch nested properties (IDs) instead of the array itself
    deep: true,
  })

  return { saved, isSaved, save, unsave, toggle }
})
