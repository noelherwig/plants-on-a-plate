<script setup lang="ts">
import { useFavoriteStore } from '@/stores/favoriteStore'
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

const removeFavorite = () => favoriteStore.remove(props.recipeId)

const modalRef = ref<InstanceType<typeof AppModal>>()
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
    :message="`Are you sure you want to remove “${recipeTitle}” from your favorites?`"
  >
    <button class="btn btn-secondary" @click="closeDialog()">Cancel</button>
    <button class="btn btn-primary" @click="(removeFavorite(), closeDialog())">Confirm</button>
  </AppModal>
</template>
