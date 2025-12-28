import type { Recipe } from '@/types/recipe'
import { computed, type Ref } from 'vue'

export default function useSearch(searchTerm: Ref<string>, recipes: Ref<Recipe[]>) {
  const searchResults = computed(() => {
    const term = searchTerm.value.trim().toLowerCase()

    if (!term) {
      return recipes.value
    }

    return recipes.value.filter(({ title }) => title.trim().toLowerCase().includes(term))
  })

  return { searchResults }
}
