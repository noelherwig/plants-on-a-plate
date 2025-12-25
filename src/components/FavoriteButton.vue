<script setup lang="ts">
import { useFavoritesStore } from '@/stores/favoritesStore'
import { HeartIcon } from 'lucide-vue-next'
import { computed, ref } from 'vue'

const props = withDefaults(
  defineProps<{
    recipeId: string
    type?: 'default' | 'soft'
  }>(),
  {
    type: 'default',
  },
)

const favorites = useFavoritesStore()

const isFavorite = computed(() => favorites.isFavorite(props.recipeId))
const hasSpinned = ref(false)

const toggleFavorite = () => {
  hasSpinned.value = false

  // Ensures that the spin animation only runs on click, not on initial render
  requestAnimationFrame(() => {
    hasSpinned.value = true
    favorites.toggle(props.recipeId)
  })
}
</script>

<template>
  <div
    class="lg:tooltip lg:tooltip-left"
    :data-tip="isFavorite ? 'Remove from favorites' : 'Add to favorites'"
  >
    <button
      class="btn btn-square btn-ghost"
      :class="{ 'btn-soft': type === 'soft' }"
      @click="toggleFavorite"
      :aria-label="isFavorite ? 'Remove from favorites' : 'Add to favorites'"
    >
      <HeartIcon
        aria-hidden="true"
        :class="[
          isFavorite && 'fill-(--color-pink) text-(--color-pink)',
          hasSpinned && isFavorite && 'animate-[spin_0.3s]',
        ]"
      />
    </button>
  </div>
</template>
