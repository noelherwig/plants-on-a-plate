<script setup lang="ts">
import { ClockIcon } from 'lucide-vue-next'
import FavoriteButton from './FavoriteButton.vue'
import type { Recipe } from '@/data/recipes'

defineProps<{ recipe: Recipe }>()
</script>

<template>
  <div class="relative">
    <RouterLink
      :to="{
        name: 'Recipe',
        params: { id: recipe.id },
      }"
      class="card bg-base-200 shadow-sm transition-all duration-300 group"
    >
      <figure class="overflow-hidden">
        <img
          :src="`/images/${recipe.imageUrl}`"
          alt="recipe"
          class="max-h-55 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </figure>
      <div class="card-body p-4">
        <h3 class="card-title">
          <span class="truncate">{{ recipe.title }}</span>
        </h3>

        <div class="flex items-center text-base-content/60 font-semibold">
          <ClockIcon :size="16" class="me-2" />
          <span>{{ recipe.minutes }} min</span>

          <span v-if="recipe.categories.length" class="mx-2"> • </span>

          <span class="truncate">
            {{ recipe.categories.join(', ') }}
          </span>
        </div>
      </div>
    </RouterLink>

    <FavoriteButton :recipe-id="recipe.id" type="secondary" class="absolute top-2 right-2 z-10" />
  </div>
</template>
