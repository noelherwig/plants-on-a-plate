<script setup lang="ts">
import type { Ingredient } from '@/data/recipes'
import { computed, ref } from 'vue'

interface IngredientsListProps {
  ingredients: Ingredient[]
  servings?: number
}

const props = withDefaults(defineProps<IngredientsListProps>(), {
  servings: 1,
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
  <div class="card bg-base-200 shadow-sm">
    <div class="card-body p-4 gap-y-2">
      <h2 class="card-title lg:text-2xl mb-2">Ingredients</h2>

      <label
        v-for="ingredient in adjustedIngredients"
        :key="ingredient.type"
        class="label flex items-center gap-2 mb-0.5"
      >
        <input type="checkbox" class="checkbox" v-model="checked[ingredient.type]" />

        <span :class="{ 'line-through opacity-60': checked[ingredient.type] }">
          {{ ingredient.adjustedAmount }}
          {{ ingredient.unit }}
          {{ ingredient.type }}
        </span>
      </label>
    </div>
  </div>
</template>
