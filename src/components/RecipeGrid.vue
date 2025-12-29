<script setup lang="ts">
import RecipeCard from '@/components/RecipeCard.vue'
import type { Recipe } from '@/types/recipe'
import type { FirestoreError } from 'firebase/firestore'

defineProps<{
  recipes: Recipe[]
  searchTerm: string
  pending: boolean
  error: FirestoreError | undefined
}>()
</script>

<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
    :aria-busy="pending"
    aria-live="polite"
  >
    <template v-if="pending">
      <div v-for="i in 9" :key="i" class="skeleton h-65" />
    </template>

    <template v-else-if="error">
      <p class="col-span-full text-error text-center">
        Failed to load recipes. Please try again later.
      </p>
    </template>

    <template v-else-if="recipes.length === 0">
      <p class="col-span-full text-center text-base-content/60">
        No recipes found with "{{ searchTerm }}". Try a different search term.
      </p>
    </template>

    <template v-else>
      <RecipeCard v-for="recipe in recipes" :key="recipe.id" :recipe="recipe" />
    </template>
  </div>
</template>
