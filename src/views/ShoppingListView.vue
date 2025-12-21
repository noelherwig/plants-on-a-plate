<script setup lang="ts">
import IngredientsList from '@/components/IngredientsList.vue'
import { useShoppingListStore } from '@/stores/shoppingListStore'
import { ShoppingBasketIcon } from 'lucide-vue-next'

const shoppingList = useShoppingListStore()
const ingredients = shoppingList.ingredients
</script>

<template>
  <div class="container max-w-300 mx-auto">
    <h1 class="text-xl font-bold mb-4 flex items-center gap-2">
      <ShoppingBasketIcon class="text-blue-500" />
      Your shopping list
    </h1>

    <hr class="my-8 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />

    <div class="card bg-base-200 shadow-sm">
      <div class="card-body p-4 gap-y-2">
        <IngredientsList :ingredients="ingredients" />
      </div>
    </div>

    <!-- <p class="col-span-full text-center text-base-content/60">Your shopping list is still empty!</p> -->
  </div>
</template>
