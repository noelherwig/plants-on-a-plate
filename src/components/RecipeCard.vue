<script setup lang="ts">
import { ClockIcon } from 'lucide-vue-next'

interface RecipeCardProps {
  id: string
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
  <RouterLink
    :to="{
      name: 'Recipe',
      params: { id },
    }"
    class="card bg-base-200 shadow-sm transition-all duration-300 group"
  >
    <figure class="overflow-hidden">
      <img
        :src="`/images/${imageUrl}`"
        alt="recipe"
        class="max-h-55 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
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
  </RouterLink>
</template>
