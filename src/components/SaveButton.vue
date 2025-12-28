<script setup lang="ts">
import { BookmarkIcon } from 'lucide-vue-next'
import { computed, ref, useAttrs } from 'vue'
import { useConfirmDialog } from '@/composable/useConfirmDialog'
import { useSavedStore } from '@/stores/savedStore'

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

const savedStore = useSavedStore()
const isSaved = computed(() => savedStore.isSaved(props.recipeId))
const hasSpinned = ref(false)

const saveRecipe = () => {
  hasSpinned.value = false

  // Ensures that the spin animation only runs on click, not on initial render
  requestAnimationFrame(() => {
    hasSpinned.value = true
    savedStore.save(props.recipeId)
  })
}

const { confirmDialog } = useConfirmDialog()
const unsaveRecipe = async () => {
  const confirmed = await confirmDialog({
    title: 'Remove saved recipe',
    message: `Are you sure you want to remove “${props.recipeTitle}” from your saved recipes?`,
  })

  if (confirmed) {
    savedStore.unsave(props.recipeId)
  }
}
</script>

<template>
  <div
    v-bind="attrs"
    class="lg:tooltip lg:tooltip-left"
    :data-tip="isSaved ? 'Remove from saved recipes' : 'Add to saved recipes'"
  >
    <button
      class="btn btn-square btn-ghost"
      :class="{ 'btn-soft': type === 'soft' }"
      @click="isSaved ? unsaveRecipe() : saveRecipe()"
      :aria-label="isSaved ? 'Remove from saved recipes' : 'Add to saved recipes'"
    >
      <BookmarkIcon
        aria-hidden="true"
        :class="[
          isSaved && 'fill-(--color-yellow) text-(--color-yellow)',
          hasSpinned && isSaved && 'animate-[wiggle_0.3s_ease-out]',
        ]"
      />
    </button>
  </div>
</template>
