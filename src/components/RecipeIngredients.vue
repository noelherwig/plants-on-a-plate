<script setup lang="ts">
import type { Recipe } from '@/data/recipes'
import { CircleCheckIcon, PlusIcon, UsersIcon } from 'lucide-vue-next'
import { computed, ref } from 'vue'
import NumberStepper from './NumberStepper.vue'
import IngredientsList from './IngredientsList.vue'
import { useShoppingListStore } from '@/stores/shoppingListStore'
import AppModal from './AppModal.vue'

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
const isAlreadyOnShoppingList = computed(() => shoppingListStore.recipes.includes(props.recipe))

const modalRef = ref<InstanceType<typeof AppModal>>()
const openDialog = () => modalRef.value && modalRef.value.open()
const closeDialog = () => modalRef.value && modalRef.value.close()

const addToShoppingList = () => {
  shoppingListStore.add(props.recipe, adjustedIngredients.value)
  ingredientsAdded.value = true
  closeDialog()
}

const confirmAddToShoppingList = () => {
  if (isAlreadyOnShoppingList.value) {
    openDialog()
    return
  }

  addToShoppingList()
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
        @click="confirmAddToShoppingList()"
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

  <AppModal
    ref="modalRef"
    title="Recipe added previously"
    :message="`You have already added this recipe to your shopping list previously. Are you sure you want to add these ingredients again?`"
  >
    <button class="btn btn-secondary" @click="closeDialog()">Cancel</button>
    <button class="btn btn-primary" @click="addToShoppingList()">Confirm</button>
  </AppModal>
</template>
