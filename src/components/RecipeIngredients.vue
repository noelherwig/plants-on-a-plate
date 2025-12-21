<script setup lang="ts">
import type { Ingredient } from '@/data/recipes'
import { PlusIcon, UsersIcon } from 'lucide-vue-next'
import { computed, ref } from 'vue'
import NumberStepper from './NumberStepper.vue'

interface RecipeIngredients {
  ingredients: Ingredient[]
  servings?: number
}

const props = withDefaults(defineProps<RecipeIngredients>(), {
  servings: 2,
})

const servings = ref(props.servings)
const checked = ref<Record<string, boolean>>({})
const adjustedIngredients = computed(() =>
  props.ingredients.map((ingredient) => {
    if (ingredient.amount === undefined) {
      return { ...ingredient, adjustedAmount: undefined }
    }

    return {
      ...ingredient,
      adjustedAmount: ingredient.amount * servings.value,
    }
  }),
)

const addRecipeToShoppingList = () => console.log('Add recipe', props.ingredients)
</script>

<template>
  <div class="card bg-base-200 shadow-sm">
    <div class="card-body p-4 gap-y-2">
      <div class="flex justify-between items-start mb-2">
        <h2 class="card-title lg:text-2xl">Ingredients</h2>

        <div class="flex items-center gap-2">
          <UsersIcon :size="20" />
          <NumberStepper v-model="servings" :min="1" :max="100" />
        </div>
      </div>

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

      <button class="btn btn-primary ms-auto mt-4" @click="addRecipeToShoppingList">
        <PlusIcon /><span>Add to Shopping List</span>
      </button>
    </div>
  </div>
</template>
