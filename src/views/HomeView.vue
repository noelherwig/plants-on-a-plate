<script setup lang="ts">
import RecipeCard from '@/components/RecipeCard.vue'
import RecipeSearch from '@/components/RecipeSearch.vue'
import SupriseMeButton from '@/components/SupriseMeButton.vue'
import useSearch from '@/composable/useSearch'
import { LeafIcon } from 'lucide-vue-next'
import { ref } from 'vue'

const searchTerm = ref('')
const { searchResults } = useSearch(searchTerm)
</script>

<template>
  <div class="container max-w-300 mx-auto">
    <h1 class="text-xl font-bold mb-4 flex items-center gap-2">
      <LeafIcon class="text-green-500" />
      All plant-based recipes
    </h1>

    <div class="flex flex-col sm:flex-row items-end">
      <RecipeSearch v-model="searchTerm" />

      <div class="flex items-center">
        <p class="mx-4">or</p>
        <SupriseMeButton />
      </div>
    </div>

    <hr class="my-8 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <RecipeCard v-for="recipe in searchResults" :key="recipe.id" :recipe="recipe" />
    </div>

    <p v-if="!searchResults.length" class="col-span-full text-center text-base-content/60">
      No recipes found with {{ searchTerm }}. Try a different search term!
    </p>
  </div>
</template>
