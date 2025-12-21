import type { Recipe } from '@/data/recipes'
import { computed, type Ref } from 'vue'

export default function useSearch(searchTerm: Ref<string>, recipes: Ref<Recipe[]>) {
  const searchResults = computed(() => {
    if (!searchTerm.value) {
      return [...recipes.value]
    }

    const lowerTerm = searchTerm.value.toLowerCase()
    return recipes.value.filter((recipe) => recipe.title.toLowerCase().includes(lowerTerm))
  })

  return { searchResults }
}
