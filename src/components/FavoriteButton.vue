<script setup lang="ts">
import { useFavoritesStore } from '@/stores/favoritesStore'
import { HeartIcon } from 'lucide-vue-next'
import { computed, ref, useAttrs } from 'vue'
import AppModal from './AppModal.vue'

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

const favorites = useFavoritesStore()

const isFavorite = computed(() => favorites.isFavorite(props.recipeId))
const hasSpinned = ref(false)
const modalRef = ref<InstanceType<typeof AppModal>>()

const addFavorite = () => {
  hasSpinned.value = false

  // Ensures that the spin animation only runs on click, not on initial render
  requestAnimationFrame(() => {
    hasSpinned.value = true
    favorites.add(props.recipeId)
  })
}

const removeFavorite = () => {
  favorites.remove(props.recipeId)
  closeDialog()
}

const openDialog = () => modalRef.value && modalRef.value.open()
const closeDialog = () => modalRef.value && modalRef.value.close()
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
      @click="isFavorite ? openDialog() : addFavorite()"
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

  <AppModal
    ref="modalRef"
    title="Remove favorite"
    :message="`Are you sure you want to remove &quot;${recipeTitle}&quot; from your favorites?`"
  >
    <button class="btn btn-secondary" @click="closeDialog()">Cancel</button>
    <button class="btn btn-primary" @click="removeFavorite()">Confirm</button>
  </AppModal>
</template>
