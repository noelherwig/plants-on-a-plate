<script setup lang="ts">
import { useRouter } from 'vue-router'
import { DicesIcon } from 'lucide-vue-next'
import useRandomRecipe from '@/composable/useRandomRecipe'
import type { Recipe } from '@/data/recipes'

interface SupriseMeButtonProps {
  recipes: Recipe[]
  type?: 'default' | 'secondary'
  label?: string
}

const props = withDefaults(defineProps<SupriseMeButtonProps>(), {
  type: 'default',
  label: 'Random recipe',
})

const router = useRouter()

const { getRandomRecipe } = useRandomRecipe(props.recipes)
const randomRecipe = getRandomRecipe()

const goToRandomRecipe = () => {
  if (randomRecipe) {
    router.push(`/recipe/${randomRecipe.id}`)
  }
}
</script>

<template>
  <button
    class="btn sm:btn-lg btn-soft gap-4"
    @click="goToRandomRecipe"
    :class="props.type === 'default' ? 'btn-success' : 'btn-secondary'"
  >
    <DicesIcon />
    {{ label }}
  </button>
</template>
