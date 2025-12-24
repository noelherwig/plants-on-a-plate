<script setup lang="ts">
import { useRouter } from 'vue-router'
import { DicesIcon } from 'lucide-vue-next'
import useRandomRecipe from '@/composable/useRandomRecipe'
import type { Recipe } from '@/data/recipes'

const props = withDefaults(
  defineProps<{
    recipes: Recipe[]
    type?: 'default' | 'favorite'
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
    router.push({ name: 'Recipe', params: { id: randomRecipe.id } })
  }
}
</script>

<template>
  <button
    class="btn btn-primary sm:btn-lg gap-2 ps-4"
    @click="goToRandomRecipe"
    :disabled="!recipes.length"
    :class="{ 'text-(--color-pink-content)': type === 'favorite' && recipes.length }"
  >
    <DicesIcon
      aria-hidden="true"
      :class="{ 'text-(--color-pink)': type === 'favorite' && recipes.length }"
    />
    {{ label }}
  </button>
</template>
