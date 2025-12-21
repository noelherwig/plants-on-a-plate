<script setup lang="ts">
import type { Ingredient } from '@/data/recipes'
import { PlusIcon, UsersIcon } from 'lucide-vue-next'
import { ref } from 'vue'
import NumberStepper from './NumberStepper.vue'
import IngredientsList from './IngredientsList.vue'
import { useShoppingListStore } from '@/stores/shoppingListStore'

interface RecipeIngredientsProps {
  ingredients: Ingredient[]
}

const props = defineProps<RecipeIngredientsProps>()

const shoppingList = useShoppingListStore()

const servings = ref(2)

const addRecipeToShoppingList = () => shoppingList.addIngredients(props.ingredients)
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

      <IngredientsList :ingredients="ingredients" :servings="servings" />

      <button class="btn btn-primary ms-auto mt-4" @click="addRecipeToShoppingList">
        <PlusIcon /><span>Add to Shopping List</span>
      </button>
    </div>
  </div>
</template>
