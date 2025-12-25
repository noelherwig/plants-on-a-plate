<script setup lang="ts">
import RecipeCard from '@/components/RecipeCard.vue'
import RecipeSearch from '@/components/RecipeSearch.vue'
import RandomRecipeButton from '@/components/RandomRecipeButton.vue'
import useSearch from '@/composable/useSearch'
import recipes from '@/data/recipes'
import { useFavoriteStore } from '@/stores/favoriteStore'
import { HeartIcon } from 'lucide-vue-next'
import { computed, ref } from 'vue'

const favoriteStore = useFavoriteStore()
const favoriteRecipes = computed(() =>
  recipes.filter((recipe) => favoriteStore.favoriteRecipeIds.includes(recipe.id)),
)

const searchTerm = ref('')
const { searchResults } = useSearch(searchTerm, favoriteRecipes)
</script>

<template>
  <div class="container max-w-300 mx-auto">
    <h1 class="text-xl font-bold mb-4 flex items-center gap-2">
      <HeartIcon class="text-(--color-pink)" aria-hidden="true" />
      Your favorite recipes
    </h1>

    <div class="flex flex-col sm:flex-row items-end">
      <RecipeSearch v-model="searchTerm" />
      <div class="flex items-center">
        <p class="mx-4" aria-hidden="true">or</p>
        <RandomRecipeButton :recipes="favoriteRecipes" type="favorite" label="Random favorite" />
      </div>
    </div>

    <hr class="my-8 h-0.5 border-t-0 bg-neutral" role="separator" />

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <RecipeCard v-for="recipe in searchResults" :key="recipe.id" :recipe="recipe" />
    </div>

    <p
      v-if="!searchResults.length && favoriteRecipes.length"
      class="col-span-full text-center text-base-content/60"
    >
      No recipes found with "{{ searchTerm }}". Try a different search term.
    </p>

    <p v-if="!favoriteRecipes.length" class="col-span-full text-center text-base-content/60">
      You haven't added any favorite recipes yet! Take a look at
      <RouterLink :to="'/'" class="link text-(--color-green)">all recipes</RouterLink>.
    </p>
  </div>
</template>
