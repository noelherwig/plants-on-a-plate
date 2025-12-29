<script setup lang="ts">
import IngredientsList from '@/components/IngredientsList.vue'
import { useShoppingListStore } from '@/stores/shoppingListStore'
import { ShoppingBasketIcon, TrashIcon } from 'lucide-vue-next'
import { storeToRefs } from 'pinia'
import { useConfirmDialog } from '@/composable/useConfirmDialog'
import RecipeCard from '@/components/RecipeCard.vue'
import AppDivider from '@/components/AppDivider.vue'

const shoppingListStore = useShoppingListStore()
const { recipes, ingredients } = storeToRefs(shoppingListStore)

const { confirmDialog } = useConfirmDialog()
const clearShoppingList = async () => {
  const confirmed = await confirmDialog({
    title: 'Clear shopping list',
    message: `Are you sure you want to clear your shopping list? This action cannot be undone.`,
  })

  if (confirmed) {
    shoppingListStore.clear()
  }
}
</script>

<template>
  <div class="container max-w-300 mx-auto">
    <h1 class="text-xl font-bold mb-4 flex items-center gap-2">
      <ShoppingBasketIcon class="text-(--color-blue)" aria-hidden="true" />
      Your shopping list
    </h1>

    <AppDivider class="my-8" />

    <p class="col-span-full text-center text-base-content/60" v-if="!ingredients.length">
      <span>Your shopping list is still empty! Take a look at </span>
      <RouterLink :to="{ name: 'Home' }" class="link text-(--color-green)">all recipes</RouterLink>
      <span>, your </span>
      <RouterLink :to="{ name: 'Favorites' }" class="link text-(--color-pink)">
        favorite recipes
      </RouterLink>
      <span>, or your </span>
      <RouterLink :to="{ name: 'Saved' }" class="link text-(--color-yellow)">
        saved recipes
      </RouterLink>
      <span>.</span>
    </p>

    <div v-else>
      <div class="card bg-base-200 shadow-sm mb-4">
        <div class="card-body p-4">
          <h2 class="card-title lg:text-2xl mb-2">Ingredients</h2>

          <IngredientsList :ingredients="ingredients" />
        </div>
      </div>

      <div class="card bg-base-200 shadow-sm">
        <div class="card-body p-4">
          <h2 class="card-title lg:text-2xl mb-2">Ready to cook</h2>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <RecipeCard
              v-for="recipe in recipes"
              :key="recipe.id"
              :recipe="recipe"
              variant="compact"
            />
          </div>
        </div>
      </div>

      <div class="mt-4 flex justify-end">
        <button class="btn btn-error btn-soft" @click="clearShoppingList()">
          <TrashIcon aria-hidden="true" /><span>Clear shopping list</span>
        </button>
      </div>
    </div>
  </div>
</template>
