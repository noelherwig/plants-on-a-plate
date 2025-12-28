import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { useRecipeStore } from './recipeStore'

export const useSavedStore = defineStore('saved', () => {
  const recipeStore = useRecipeStore()

  const savedIds = ref<string[]>([])
  const saved = computed(() => recipeStore.recipes.filter(({ id }) => savedIds.value.includes(id)))

  const isSaved = (id: string) => savedIds.value.includes(id)

  const save = (id: string) => savedIds.value.push(id)

  const unsave = (id: string) =>
    (savedIds.value = savedIds.value.filter((savedId) => savedId !== id))

  const toggle = (id: string) => (isSaved(id) ? save(id) : unsave(id))

  return { saved, isSaved, save, unsave, toggle }
})
