import type { Recipe } from '@/data/recipes'
import { computed, type Ref } from 'vue'

export default function useSearch(searchTerm: Ref<string>, recipes: Recipe[]) {
  const searchResults = computed(() => {
    if (!searchTerm.value) {
      return [...recipes]
    }

    const lowerTerm = searchTerm.value.toLowerCase()
    return recipes.filter((recipe) => recipe.title.toLowerCase().includes(lowerTerm))
  })

  return { searchResults }
}
