<script setup lang="ts">
import { ClockIcon } from 'lucide-vue-next'

interface RecipeCardProps {
  title: string
  minutes: number
  categories?: string[]
  imageUrl: string
}

withDefaults(defineProps<RecipeCardProps>(), {
  categories: () => [],
})
</script>

<template>
  <div class="card bg-base-200 shadow-sm">
    <figure>
      <img :src="`/images/${imageUrl}`" alt="recipe" class="max-h-55 w-full h-full object-cover" />
    </figure>
    <div class="card-body p-4">
      <h3 class="card-title">
        <span class="truncate">{{ title }}</span>
      </h3>
      <div class="flex items-center text-base-content/60 font-semibold">
        <ClockIcon :size="16" class="me-2" />
        <span>{{ minutes }} min</span>

        <span v-if="categories.length" class="mx-2"> • </span>

        <span class="truncate">
          {{ categories.join(', ') }}
        </span>
      </div>
    </div>
  </div>
</template>
