<script setup lang="ts">
import type { Recipe } from '@/data/recipes'
import { CircleCheckIcon, PlusIcon, UsersIcon } from 'lucide-vue-next'
import { computed, ref } from 'vue'
import NumberStepper from './NumberStepper.vue'
import IngredientsList from './IngredientsList.vue'
import { useShoppingListStore } from '@/stores/shoppingListStore'
import { useConfirmDialog } from '@/composable/useConfirmDialog'

const props = defineProps<{ recipe: Recipe }>()

const servings = ref(2)
const adjustedIngredients = computed(() =>
  props.recipe.ingredients.map((ingredient) => {
    if (ingredient.amount === undefined) {
      return { ...ingredient, adjustedAmount: undefined }
    }

    return {
      ...ingredient,
      amount: ingredient.amount * servings.value,
    }
  }),
)

const shoppingListStore = useShoppingListStore()
const ingredientsAdded = ref(false)
const onShoppingList = shoppingListStore.hasRecipe(props.recipe)

const { confirmDialog } = useConfirmDialog()
const addToShoppingList = async () => {
  // Ask for confirmation only if the recipe is already in the shopping list
  const shouldAdd =
    !onShoppingList ||
    (await confirmDialog({
      title: 'Recipe added previously',
      message:
        'You have already added this recipe to your shopping list previously. Are you sure you want to add these ingredients again?',
    }))

  if (shouldAdd) {
    shoppingListStore.add(props.recipe, adjustedIngredients.value)
    ingredientsAdded.value = true
  }
}
</script>

<template>
  <div class="card bg-base-200 shadow-sm">
    <div class="card-body p-4 gap-y-2">
      <div class="flex justify-between items-start mb-2">
        <h2 class="card-title lg:text-2xl">Ingredients</h2>

        <div class="flex items-center gap-2">
          <UsersIcon :size="20" aria-hidden="true" />
          <NumberStepper v-model="servings" :min="1" :max="10" label="Servings" />
        </div>
      </div>

      <IngredientsList :ingredients="adjustedIngredients" />

      <button
        type="button"
        class="btn btn-primary ms-auto gap-2 ps-3"
        @click="addToShoppingList()"
        :disabled="ingredientsAdded"
      >
        <PlusIcon aria-hidden="true" /><span>Add to Shopping List</span>
      </button>
      <span
        class="flex items-center justify-end text-(--color-green) gap-1"
        v-if="ingredientsAdded"
      >
        <CircleCheckIcon :size="16" />
        Ingredients added!
      </span>
    </div>
  </div>
</template>
