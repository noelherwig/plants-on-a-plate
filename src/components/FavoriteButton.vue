<script setup lang="ts">
import { useFavoritesStore } from '@/stores/favoritesStore'
import { HeartIcon } from 'lucide-vue-next'
import { computed } from 'vue'

interface FavoriteButtonProps {
  recipeId: string
  type?: 'default' | 'secondary'
}

const props = withDefaults(defineProps<FavoriteButtonProps>(), {
  type: 'default',
})

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
      :class="{
        'not-[&:hover]:btn-secondary': isFavorite,
        'btn-soft': isFavorite && type === 'default',
      }"
      @click="toggleFavorite"
    >
      <HeartIcon
        :class="{
          'fill-secondary text-secondary': isFavorite,
          'text-secondary': type === 'secondary',
        }"
      />
    </button>
  </div>
</template>
