<script setup lang="ts">
import { Unit as UnitEnum, type Ingredient } from '@/types/ingredient'
import { ref } from 'vue'

defineProps<{ ingredients: Ingredient[] }>()

const checked = ref<Record<string, boolean>>({})

const Unit = UnitEnum
const unitMapper: Record<(typeof Unit)[keyof typeof Unit], string> = {
  [Unit.Gram]: 'g ',
  [Unit.Milliliter]: 'ml ',
  [Unit.Tablespoon]: 'tbsp ',
  [Unit.Teaspoon]: 'tsp ',
  [Unit.Clove]: ' clove(s) of ',
  [Unit.None]: ' ',
}
</script>

<template>
  <label
    v-for="(ingredient, index) in ingredients"
    :key="index"
    class="label flex items-center gap-2 mb-0.5"
  >
    <input type="checkbox" class="checkbox" v-model="checked[ingredient.id]" />

    <span
      :class="{ 'line-through opacity-60': checked[ingredient.id] }"
      class="first-letter:uppercase"
    >
      <span v-if="ingredient.quantity">{{ ingredient.quantity }}</span>
      <span>{{ unitMapper[ingredient.unit] }}</span>
      <span> {{ ingredient.name }}</span>
    </span>
  </label>
</template>
