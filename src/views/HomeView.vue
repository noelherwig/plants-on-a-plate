<script setup lang="ts">
import RecipeCard from '@/components/RecipeCard.vue'
import recipes from '@/data/recipes'
import useSearch from '@/composable/useSearch'
import { LeafIcon, PartyPopperIcon, SearchIcon } from 'lucide-vue-next'
import { ref } from 'vue'

const searchTerm = ref('')
const { searchResults } = useSearch(searchTerm)
</script>

<template>
  <div class="container max-w-300 mx-auto">
    <h1 class="text-xl font-bold mb-4 flex items-center gap-2">
      <LeafIcon class="text-green-500" />
      All {{ recipes.length }} plant-based recipes
    </h1>
    <div class="flex items-center gap-4">
      <label class="input lg:input-lg w-full">
        <SearchIcon class="opacity-50" />
        <input type="search" placeholder="Search" v-model="searchTerm" />
      </label>
      <span>or</span>
      <button class="btn lg:btn-lg btn-success btn-soft gap-4">
        <PartyPopperIcon />
        Suprise me!
      </button>
    </div>

    <hr class="my-8 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
    <p class="text-xl mb-4" v-if="searchTerm">Results: {{ searchResults.length }}</p>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <RecipeCard v-for="recipe in searchResults" :key="recipe.id" :recipe="recipe" />
    </div>
  </div>
</template>
