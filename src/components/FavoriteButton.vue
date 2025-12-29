<script setup lang="ts">
import { useFavoriteStore } from '@/stores/favoriteStore'
import { HeartIcon } from 'lucide-vue-next'
import { computed, ref, useAttrs } from 'vue'
import { useConfirmDialog } from '@/composable/useConfirmDialog'

const attrs = useAttrs()
const props = withDefaults(
  defineProps<{
    recipeId: string
    recipeTitle: string
    type?: 'default' | 'soft'
  }>(),
  {
    type: 'default',
  },
)

const favoriteStore = useFavoriteStore()
const isFavorite = computed(() => favoriteStore.isFavorite(props.recipeId))
const hasSpinned = ref(false)

const addFavorite = () => {
  hasSpinned.value = false

  // Ensures that the spin animation only runs on click, not on initial render
  requestAnimationFrame(() => {
    hasSpinned.value = true
    favoriteStore.add(props.recipeId)
  })
}

const { confirmDialog } = useConfirmDialog()
const removeFavorite = async () => {
  const confirmed = await confirmDialog({
    title: 'Remove favorite recipe',
    message: `Are you sure you want to remove “${props.recipeTitle}” from your favorite recipes?`,
  })

  if (confirmed) {
    favoriteStore.remove(props.recipeId)
  }
}
</script>

<template>
  <div
    v-bind="attrs"
    class="lg:tooltip lg:tooltip-left"
    :data-tip="isFavorite ? 'Remove from favorites' : 'Add to favorites'"
  >
    <button
      class="btn btn-square btn-ghost"
      :class="{ 'btn-soft': type === 'soft' }"
      @click="isFavorite ? removeFavorite() : addFavorite()"
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
