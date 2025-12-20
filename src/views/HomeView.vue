<script setup lang="ts">
import RecipeCard from '@/components/RecipeCard.vue'
import recipes from '@/data/recipes'

console.log(recipes)
</script>

<template>
  <div class="container max-w-300 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <RecipeCard
      v-for="recipe in recipes"
      :key="recipe.id"
      :id="recipe.id"
      :title="recipe.title"
      :minutes="recipe.minutes"
      :categories="recipe.categories"
      :image-url="recipe.imageUrl"
    />
  </div>
</template>
