<script setup lang="ts">
import RecipeCard from '@/components/RecipeCard.vue'
import recipes from '@/data/recipes'
import { useFavoritesStore } from '@/stores/favoritesStore'
import { computed } from 'vue'

const favorites = useFavoritesStore()
const favoriteRecipes = computed(() =>
  recipes.filter((recipe) => favorites.favoriteRecipeIds.includes(recipe.id)),
)
</script>

<template>
  <div class="container max-w-300 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <RecipeCard
      v-for="recipe in favoriteRecipes.length ? favoriteRecipes : []"
      :key="recipe.id"
      :id="recipe.id"
      :title="recipe.title"
      :minutes="recipe.minutes"
      :categories="recipe.categories"
      :image-url="recipe.imageUrl"
    />
    <p v-if="!favoriteRecipes.length" class="col-span-full text-center text-base-content/60">
      You haven't added any favorite recipes yet!
    </p>
  </div>
</template>
