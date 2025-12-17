<script setup lang="ts">
import RecipeCard from '@/components/RecipeCard.vue'
</script>

<template>
  <div class="container max-w-300 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <RecipeCard title="Creamy Tomato Garlic Pasta" :minutes="45" :categories="['Italian']" />
    <RecipeCard title="Creamy Chicken Garlic Parmesan Pasta" :minutes="30" />
  </div>
</template>
