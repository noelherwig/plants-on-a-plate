<script setup lang="ts">
import { useConfirmDialog } from '@/composable/useConfirmDialog'
import { Unit as UnitEnum, type Ingredient } from '@/types/ingredient'
import { computed, ref } from 'vue'
import { onBeforeRouteLeave } from 'vue-router'

defineProps<{ ingredients: Ingredient[] }>()

const { confirmDialog } = useConfirmDialog()

const checked = ref<Record<string, boolean>>({})
const hasCheckedIngredients = computed(() => Object.values(checked.value).some(Boolean))

const Unit = UnitEnum
const unitMapper: Record<(typeof Unit)[keyof typeof Unit], string> = {
  [Unit.Gram]: 'g ',
  [Unit.Milliliter]: 'ml ',
  [Unit.Tablespoon]: 'tbsp ',
  [Unit.Teaspoon]: 'tsp ',
  [Unit.Clove]: ' clove(s) of ',
  [Unit.None]: ' ',
}

onBeforeRouteLeave(async () => {
  if (!hasCheckedIngredients.value) {
    return true
  }

  return await confirmDialog({
    title: 'Ingredients checked',
    message:
      'You have checked off some ingredients. They will be cleared when you leave this page. Do you want to continue?',
  })
})
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
