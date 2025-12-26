<script setup lang="ts">
import IngredientsList from '@/components/IngredientsList.vue'
import { useShoppingListStore } from '@/stores/shoppingListStore'
import { ShoppingBasketIcon, TrashIcon } from 'lucide-vue-next'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import AppModal from '@/components/AppModal.vue'

const shoppingListStore = useShoppingListStore()
const { ingredients } = storeToRefs(shoppingListStore)

const clearShoppingList = () => {
  shoppingListStore.clear()
  closeDialog()
}

const modalRef = ref<InstanceType<typeof AppModal>>()

const openDialog = () => modalRef.value && modalRef.value.open()
const closeDialog = () => modalRef.value && modalRef.value.close()
</script>

<template>
  <div class="container max-w-300 mx-auto">
    <h1 class="text-xl font-bold mb-4 flex items-center gap-2">
      <ShoppingBasketIcon class="text-(--color-blue)" aria-hidden="true" />
      Your shopping list
    </h1>

    <hr class="my-8 h-0.5 border-t-0 bg-neutral" role="separator" />

    <p class="col-span-full text-center text-base-content/60" v-if="!ingredients.length">
      <span>Your shopping list is still empty! Take a look at </span>
      <RouterLink :to="{ name: 'Home' }" class="link text-(--color-green)">all recipes</RouterLink>
      <span> or your </span>
      <RouterLink :to="{ name: 'Favorites' }" class="link text-(--color-pink)">
        favorite recipes
      </RouterLink>
      <span>.</span>
    </p>

    <div class="card bg-base-200 shadow-sm" v-else>
      <div class="card-body p-4 gap-y-2">
        <IngredientsList :ingredients="ingredients" />

        <button class="btn btn-error ms-auto mt-4" @click="openDialog()">
          <TrashIcon aria-hidden="true" /><span>Clear Shopping List</span>
        </button>
      </div>
    </div>
  </div>

  <AppModal
    ref="modalRef"
    title="Clear shopping list"
    :message="`Are you sure you want to clear your shopping list? This action cannot be undone.`"
  >
    <button class="btn btn-secondary" @click="closeDialog()">Cancel</button>
    <button class="btn btn-primary" @click="clearShoppingList()">Confirm</button>
  </AppModal>
</template>
