<script setup lang="ts">
import { useRouter } from 'vue-router'
import { DicesIcon } from 'lucide-vue-next'
import useRandomRecipe from '@/composable/useRandomRecipe'
import type { Recipe } from '@/types/recipe'

const styleMap = {
  default: { icon: '', text: '' },
  pink: { icon: 'text-(--color-pink)', text: 'text-(--color-pink-content)' },
  yellow: { icon: 'text-(--color-yellow)', text: 'text-(--color-yellow-content)' },
}

const props = withDefaults(
  defineProps<{
    recipes: Recipe[]
    color?: 'default' | 'pink' | 'yellow'
    label?: string
  }>(),
  {
    color: 'default',
    label: 'Random recipe',
  },
)

const $router = useRouter()

const goToRandomRecipe = () => {
  if (!props.recipes.length) {
    return
  }

  const { getRandomRecipe } = useRandomRecipe(props.recipes)
  const randomRecipe = getRandomRecipe()
  if (randomRecipe) {
    $router.push({ name: 'Recipe', params: { id: randomRecipe.id } })
  }
}
</script>

<template>
  <button
    class="btn btn-primary sm:btn-lg gap-2 ps-4"
    @click="goToRandomRecipe()"
    :disabled="!recipes.length"
    :class="recipes.length ? styleMap[props.color].text : ''"
  >
    <DicesIcon aria-hidden="true" :class="recipes.length ? styleMap[props.color].icon : ''" />
    {{ label }}
  </button>
</template>
