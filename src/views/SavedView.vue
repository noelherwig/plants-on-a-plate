<script setup lang="ts">
import RecipeCard from '@/components/RecipeCard.vue'
import RecipeSearch from '@/components/RecipeSearch.vue'
import RandomRecipeButton from '@/components/RandomRecipeButton.vue'
import useSearch from '@/composable/useSearch'
import { BookmarkIcon } from 'lucide-vue-next'
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useSavedStore } from '@/stores/savedStore'
import AppDivider from '@/components/AppDivider.vue'

const savedStore = useSavedStore()
const { saved } = storeToRefs(savedStore)

const searchTerm = ref('')
const { searchResults } = useSearch(searchTerm, saved)
</script>

<template>
  <div class="container max-w-300 mx-auto">
    <h1 class="text-xl font-bold mb-4 flex items-center gap-2">
      <BookmarkIcon class="text-(--color-yellow)" aria-hidden="true" />
      <span>Your saved recipes</span>
    </h1>

    <div class="flex flex-col sm:flex-row items-end gap-4">
      <RecipeSearch v-model="searchTerm" />
      <div class="flex items-center gap-4">
        <span aria-hidden="true">or</span>
        <RandomRecipeButton :recipes="saved" color="yellow" label="Random saved" />
      </div>
    </div>

    <AppDivider class="my-8" />

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <RecipeCard v-for="recipe in searchResults" :key="recipe.id" :recipe="recipe" />
    </div>

    <p
      v-if="!searchResults.length && saved.length"
      class="col-span-full text-center text-base-content/60"
    >
      No recipes found with "{{ searchTerm }}". Try a different search term.
    </p>

    <p v-if="!saved.length" class="col-span-full text-center text-base-content/60">
      You haven't saved any recipes for later yet! Take a look at
      <RouterLink :to="'/'" class="link text-(--color-green)">all recipes</RouterLink>.
    </p>
  </div>
</template>
