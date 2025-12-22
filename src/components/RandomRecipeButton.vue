<script setup lang="ts">
import { useRouter } from 'vue-router'
import { DicesIcon } from 'lucide-vue-next'
import useRandomRecipe from '@/composable/useRandomRecipe'
import type { Recipe } from '@/data/recipes'

const props = withDefaults(
  defineProps<{
    recipes: Recipe[]
    type?: 'default' | 'secondary'
    label?: string
  }>(),
  {
    type: 'default',
    label: 'Random recipe',
  },
)

const router = useRouter()

const goToRandomRecipe = () => {
  if (!props.recipes.length) {
    return
  }

  const { getRandomRecipe } = useRandomRecipe(props.recipes)
  const randomRecipe = getRandomRecipe()
  if (randomRecipe) {
    router.push(`/recipe/${randomRecipe.id}`)
  }
}
</script>

<template>
  <button
    class="btn sm:btn-lg btn-soft gap-4"
    @click="goToRandomRecipe"
    :class="type === 'default' ? 'btn-success' : 'btn-secondary'"
    :disabled="!recipes.length"
  >
    <DicesIcon />
    {{ label }}
  </button>
</template>
