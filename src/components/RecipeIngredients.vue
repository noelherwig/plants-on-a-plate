<script setup lang="ts">
import type { Ingredient } from '@/data/recipes'
import { PlusIcon, UsersIcon } from 'lucide-vue-next'
import { computed, ref } from 'vue'
import NumberStepper from './NumberStepper.vue'
import IngredientsList from './IngredientsList.vue'
import { useShoppingListStore } from '@/stores/shoppingListStore'

interface RecipeIngredientsProps {
  ingredients: Ingredient[]
}

const props = defineProps<RecipeIngredientsProps>()

const servings = ref(2)
const adjustedIngredients = computed(() =>
  props.ingredients.map((ingredient) => {
    if (ingredient.amount === undefined) {
      return { ...ingredient, adjustedAmount: undefined }
    }

    return {
      ...ingredient,
      amount: ingredient.amount * servings.value,
    }
  }),
)

const shoppingList = useShoppingListStore()
const addToShoppingList = () => shoppingList.add(adjustedIngredients.value)
</script>

<template>
  <div class="card bg-base-200 shadow-sm">
    <div class="card-body p-4 gap-y-2">
      <div class="flex justify-between items-start mb-2">
        <h2 class="card-title lg:text-2xl">Ingredients</h2>

        <div class="flex items-center gap-2">
          <UsersIcon :size="20" />
          <NumberStepper v-model="servings" :min="1" :max="10" />
        </div>
      </div>

      <IngredientsList :ingredients="adjustedIngredients" />

      <button class="btn btn-primary ms-auto mt-4" @click="addToShoppingList">
        <PlusIcon /><span>Add to Shopping List</span>
      </button>
    </div>
  </div>
</template>
