<script setup lang="ts">
import { ClockIcon, ShoppingBasketIcon } from 'lucide-vue-next'
import FavoriteButton from './FavoriteButton.vue'
import type { Recipe } from '@/data/recipes'
import { useShoppingListStore } from '@/stores/shoppingListStore'
import AppBadge from './AppBadge.vue'
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    recipe: Recipe
    variant?: 'default' | 'compact'
  }>(),
  {
    variant: 'default',
  },
)

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

const shoppingListStore = useShoppingListStore()
const onShoppingList = computed(() => shoppingListStore.hasRecipe(props.recipe))
</script>

<template>
  <div class="relative" @mousemove="handleMouseMove">
    <RouterLink
      :to="{
        name: 'Recipe',
        params: { id: recipe.id },
      }"
      class="card bg-white/10"
      :class="variant === 'default' ? 'h-65' : 'h-18'"
    >
      <div
        class="card-body p-0 absolute z-2 rounded-[inherit] inset-px bg-base-200 hover:before:opacity-100 hover:after:opacity-100 hover:before:-ms-2"
        :class="{ 'flex flex-row justify-start': variant === 'compact' }"
      >
        <figure :class="{ 'w-18 min-w-18 rounded-s-lg rounded-e-none': variant === 'compact' }">
          <img
            :src="`/images/${recipe.imageUrl}`"
            :alt="`Image of ${recipe.title}`"
            class="max-h-55 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </figure>
        <div
          class="truncate"
          :class="
            variant === 'default' ? 'px-4 pb-3' : 'px-2 flex flex-col justify-center -mt-0.75'
          "
        >
          <h3 class="card-title">
            <span class="truncate">{{ recipe.title }}</span>
          </h3>

          <div class="flex items-center text-base-content/60 font-semibold">
            <ClockIcon :size="16" class="me-2" aria-hidden="true" />
            <span>{{ recipe.minutes }} min</span>

            <div v-if="recipe.categories.length && variant === 'default'">
              <span class="mx-2"> • </span>

              <span class="truncate">
                {{ recipe.categories.join(', ') }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </RouterLink>

    <AppBadge
      v-if="onShoppingList && variant === 'default'"
      :icon="ShoppingBasketIcon"
      label="Added"
      class="absolute top-2 left-2 z-9"
    />

    <FavoriteButton
      v-if="variant === 'default'"
      :recipe-id="recipe.id"
      :recipe-title="recipe.title"
      type="soft"
      class="absolute top-2 right-2 z-9"
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
