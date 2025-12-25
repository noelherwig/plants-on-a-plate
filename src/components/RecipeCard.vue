<script setup lang="ts">
import { ClockIcon } from 'lucide-vue-next'
import FavoriteButton from './FavoriteButton.vue'
import type { Recipe } from '@/data/recipes'

defineProps<{ recipe: Recipe }>()

const handleMouseMove = (event: MouseEvent) => {
  const card = event.currentTarget
  if (!(card instanceof HTMLElement)) {
    return
  }

  const rect = card.getBoundingClientRect()
  const x = event.clientX - rect.left
  const y = event.clientY - rect.top

  card.style.setProperty('--mouse-x', `${x}px`)
  card.style.setProperty('--mouse-y', `${y}px`)
}
</script>

<template>
  <div class="relative" @mousemove="handleMouseMove">
    <RouterLink
      :to="{
        name: 'Recipe',
        params: { id: recipe.id },
      }"
      class="card h-65 bg-white/10"
    >
      <div
        class="card-body p-0 absolute z-2 rounded-[inherit] inset-px bg-base-200 hover:before:opacity-100 hover:after:opacity-100"
      >
        <figure>
          <img
            :src="`/images/${recipe.imageUrl}`"
            :alt="`Image of ${recipe.title}`"
            class="max-h-55 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </figure>
        <div class="px-4 pb-4">
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
      </div>
    </RouterLink>
    <FavoriteButton
      :recipe-id="recipe.id"
      :recipe-title="recipe.title"
      type="soft"
      class="absolute top-2 right-2 z-10"
    />
  </div>
</template>

<style scoped>
.card {
  &::before {
    background: radial-gradient(
      800px circle at var(--mouse-x) var(--mouse-y),
      rgba(255, 255, 255, 0.06),
      transparent 40%
    );
    z-index: 3;
  }

  &::after {
    background: radial-gradient(
      600px circle at var(--mouse-x) var(--mouse-y),
      rgba(255, 255, 255, 0.4),
      transparent 40%
    );
    z-index: 1;
  }

  &::before,
  &::after {
    border-radius: inherit;
    content: '';
    height: 100%;
    opacity: 0;
    position: absolute;
    transition: opacity 500ms;
    width: 100%;
  }

  &:hover {
    &::before,
    &::after {
      opacity: 1;
    }
  }
}
</style>
