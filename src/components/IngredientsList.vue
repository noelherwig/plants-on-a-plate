<script setup lang="ts">
import type { Ingredient } from '@/data/recipes'
import { ref, computed } from 'vue'

interface IngredientsList {
  ingredients: Ingredient[]
  servings?: number
}

const props = withDefaults(defineProps<IngredientsList>(), {
  servings: 2,
})

const checked = ref<Record<string, boolean>>({})
const adjustedIngredients = computed(() =>
  props.ingredients.map((ingredient) => {
    if (ingredient.amount === undefined) {
      return { ...ingredient, adjustedAmount: undefined }
    }

    return {
      ...ingredient,
      adjustedAmount: ingredient.amount * props.servings,
    }
  }),
)
</script>

<template>
  <label
    v-for="(ingredient, index) in adjustedIngredients"
    :key="index"
    class="label flex items-center gap-2 mb-0.5"
  >
    <input type="checkbox" class="checkbox" v-model="checked[ingredient.type]" />

    <span :class="{ 'line-through opacity-60': checked[ingredient.type] }">
      {{ ingredient.adjustedAmount }}
      {{ ingredient.unit }}
      {{ ingredient.type }}
    </span>
  </label>
</template>
