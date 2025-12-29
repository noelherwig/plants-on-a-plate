<script setup lang="ts">
import RecipeCard from '@/components/RecipeCard.vue'
import RecipeSearch from '@/components/RecipeSearch.vue'
import RandomRecipeButton from '@/components/RandomRecipeButton.vue'
import useSearch from '@/composable/useSearch'
import { LeafIcon } from 'lucide-vue-next'
import { ref } from 'vue'
import { useRecipeStore } from '@/stores/recipeStore'
import { storeToRefs } from 'pinia'

const recipeStore = useRecipeStore()
const { recipes } = storeToRefs(recipeStore)

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

    <hr class="my-8 h-0.5 border-t-0 bg-neutral" role="separator" />

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" v-if="recipes.length > 0">
      <RecipeCard v-for="recipe in searchResults" :key="recipe.id" :recipe="recipe" />
    </div>

    <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" aria>
      <div class="skeleton h-65"></div>
      <div class="skeleton h-65"></div>
      <div class="skeleton h-65"></div>
      <div class="skeleton h-65"></div>
      <div class="skeleton h-65"></div>
      <div class="skeleton h-65"></div>
      <div class="skeleton h-65"></div>
      <div class="skeleton h-65"></div>
      <div class="skeleton h-65"></div>
    </div>

    <p
      v-if="!searchResults.length && searchTerm"
      class="col-span-full text-center text-base-content/60"
    >
      No recipes found with "{{ searchTerm }}". Try a different search term.
    </p>
  </div>
</template>
