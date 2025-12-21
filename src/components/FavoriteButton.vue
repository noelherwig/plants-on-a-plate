<script setup lang="ts">
import { useFavoritesStore } from '@/stores/favoritesStore'
import { HeartIcon } from 'lucide-vue-next'
import { computed } from 'vue'

interface FavoriteButtonProps {
  recipeId: string
}

const props = defineProps<FavoriteButtonProps>()

const favorites = useFavoritesStore()

const isFavorite = computed(() => favorites.isFavorite(props.recipeId))
const toggleFavorite = () => favorites.toggle(props.recipeId)
</script>

<template>
  <div class="tooltip tooltip-left" data-tip="Add to favorites">
    <button
      class="btn btn-square btn-ghost"
      :class="{ 'not-[&:hover]:btn-secondary btn-soft': isFavorite }"
      @click="toggleFavorite"
    >
      <HeartIcon :class="{ 'fill-secondary text-secondary': isFavorite }" />
    </button>
  </div>
</template>
