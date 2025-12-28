<script setup lang="ts">
import RecipeCard from '@/components/RecipeCard.vue'
import RecipeSearch from '@/components/RecipeSearch.vue'
import RandomRecipeButton from '@/components/RandomRecipeButton.vue'
import useSearch from '@/composable/useSearch'
import { BookmarkIcon } from 'lucide-vue-next'
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useSavedStore } from '@/stores/savedStore'

const savedStore = useSavedStore()
const { saved } = storeToRefs(savedStore)

const searchTerm = ref('')
const { searchResults } = useSearch(searchTerm, saved)

savedStore.save('1')
</script>

<template>
  <div class="container max-w-300 mx-auto">
    <h1 class="text-xl font-bold mb-4 flex items-center gap-2">
      <BookmarkIcon class="text-(--color-yellow)" aria-hidden="true" />
      Your saved recipes
    </h1>

    <div class="flex flex-col sm:flex-row items-end">
      <RecipeSearch v-model="searchTerm" />
      <div class="flex items-center">
        <p class="mx-4" aria-hidden="true">or</p>
        <RandomRecipeButton :recipes="saved" color="yellow" label="Random saved" />
      </div>
    </div>

    <hr class="my-8 h-0.5 border-t-0 bg-neutral" role="separator" />

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
