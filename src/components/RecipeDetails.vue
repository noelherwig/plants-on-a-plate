<script setup lang="ts">
import type { Recipe } from '@/data/recipes'
import RecipeStat from '@/components/RecipeStat.vue'
import { ClockIcon, FlameIcon, BicepsFlexedIcon, VeganIcon } from 'lucide-vue-next'

defineProps<{ recipe: Recipe }>()
</script>

<template>
  <div class="card md:card-side bg-base-200 shadow-sm flex-col-reverse md:flex-row mb-4">
    <div class="card-body flex p-4 gap-y-2">
      <h1 class="card-title lg:text-2xl mb-2">{{ recipe.title }}</h1>
      <div
        class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-x-2 gap-y-4 md:min-w-64 lg:min-w-124 mb-2"
      >
        <RecipeStat :icon="ClockIcon" :label="`${recipe.minutes} minutes`" />
        <RecipeStat :icon="FlameIcon" :label="`${recipe.statistics.calories} calories`" />
        <RecipeStat :icon="BicepsFlexedIcon" :label="`${recipe.statistics.protein}g protein`" />
        <RecipeStat :icon="VeganIcon" label="100% vegan" class="text-green-500" />
      </div>
      <hr class="my-2 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
      <p class="max-w-172 text-pretty whitespace-pre-line">{{ recipe.description }}</p>
    </div>

    <figure class="rounded-t-lg rounded-b-none md:rounded-s-none md:rounded-e-lg">
      <img
        :src="`/images/${recipe.imageUrl}`"
        alt="Recipe"
        class="w-full h-full object-cover md:max-w-120"
      />
    </figure>
  </div>
</template>
