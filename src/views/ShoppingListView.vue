<script setup lang="ts">
import IngredientsList from '@/components/IngredientsList.vue'
import { useShoppingListStore } from '@/stores/shoppingListStore'
import { ShoppingBasketIcon, TrashIcon } from 'lucide-vue-next'
import { storeToRefs } from 'pinia'

const shoppingList = useShoppingListStore()
const { ingredients } = storeToRefs(shoppingList)

const clearShoppingList = () => shoppingList.clear()
</script>

<template>
  <div class="container max-w-300 mx-auto">
    <h1 class="text-xl font-bold mb-4 flex items-center gap-2">
      <ShoppingBasketIcon class="text-blue-500" />
      Your shopping list
    </h1>

    <hr class="my-8 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />

    <p class="col-span-full text-center text-base-content/60" v-if="!ingredients.length">
      Your shopping list is still empty! Take a look at
      <RouterLink :to="'/'" class="link text-green-500">all recipes</RouterLink> or your
      <RouterLink :to="'/'" class="link text-pink-500">favorite recipes</RouterLink> .
    </p>

    <div class="card bg-base-200 shadow-sm" v-else>
      <div class="card-body p-4 gap-y-2">
        <IngredientsList :ingredients="ingredients" />

        <button class="btn btn-error ms-auto mt-4" @click="clearShoppingList">
          <TrashIcon /><span>Clear Shopping List</span>
        </button>
      </div>
    </div>
  </div>
</template>
