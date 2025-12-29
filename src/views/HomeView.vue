<script setup lang="ts">
import RecipeSearch from '@/components/RecipeSearch.vue'
import RandomRecipeButton from '@/components/RandomRecipeButton.vue'
import useSearch from '@/composable/useSearch'
import { LeafIcon } from 'lucide-vue-next'
import { ref } from 'vue'
import { useRecipeStore } from '@/stores/recipeStore'
import { storeToRefs } from 'pinia'
import AppDivider from '@/components/AppDivider.vue'
import RecipeGrid from '@/components/RecipeGrid.vue'
import RecipesNotFound from '@/components/RecipesNotFound.vue'

const recipeStore = useRecipeStore()
const { recipes, pending, error } = storeToRefs(recipeStore)

const searchTerm = ref('')
const { searchResults } = useSearch(searchTerm, recipes)
</script>

<template>
  <div class="container max-w-300 mx-auto">
    <h1 class="text-xl font-bold mb-4 flex items-center gap-2">
      <LeafIcon class="text-(--color-green)" aria-hidden="true" />
      <span>All plant-based recipes</span>
    </h1>

    <div class="flex flex-col sm:flex-row items-end gap-4">
      <RecipeSearch v-model="searchTerm" />
      <div class="flex items-center gap-4">
        <span aria-hidden="true">or</span>
        <RandomRecipeButton :recipes="recipes" />
      </div>
    </div>

    <AppDivider class="my-8" />

    <RecipeGrid
      :recipes="searchResults"
      :search-term="searchTerm"
      :pending="pending"
      :error="error"
    />

    <RecipesNotFound v-if="!searchResults.length && searchTerm">
      No recipes found with "{{ searchTerm }}". Try a different search term.
    </RecipesNotFound>
  </div>
</template>
