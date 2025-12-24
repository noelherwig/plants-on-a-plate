<script setup lang="ts">
import { useFavoritesStore } from '@/stores/favoritesStore'
import { HeartIcon } from 'lucide-vue-next'
import { computed } from 'vue'

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
const toggleFavorite = () => favorites.toggle(props.recipeId)
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
        :class="{ 'fill-(--color-pink) text-(--color-pink)': isFavorite }"
        aria-hidden="true"
      />
    </button>
  </div>
</template>
