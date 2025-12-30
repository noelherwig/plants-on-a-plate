<script setup lang="ts">
import { computed } from 'vue'
import RecipeIngredients from '@/components/RecipeIngredients.vue'
import FavoriteButton from '@/components/FavoriteButton.vue'
import BackButton from '@/components/BackButton.vue'
import RecipeDetails from '@/components/RecipeDetails.vue'
import CookingSteps from '@/components/CookingSteps.vue'
import { useRecipeStore } from '@/stores/recipeStore'
import SaveButton from '@/components/SaveButton.vue'
import RecipesNotFound from '@/components/RecipesNotFound.vue'
import { storeToRefs } from 'pinia'

const props = defineProps<{ id: string }>()

const recipeStore = useRecipeStore()
const { pending, error } = storeToRefs(recipeStore)
const recipe = computed(() => recipeStore.getById(props.id))
</script>

<template>
  <div class="container max-w-300 mx-auto h-full flex flex-col">
    <div class="flex justify-between mb-4">
      <BackButton />

      <div v-if="recipe" class="flex gap-2">
        <SaveButton :recipe-id="recipe.id" :recipe-title="recipe.title" />
        <FavoriteButton :recipe-id="recipe.id" :recipe-title="recipe.title" />
      </div>
    </div>

    <div v-if="pending" class="flex grow" aria-busy="true" aria-live="polite">
      <div class="grid lg:grid-cols-3 grid-rows-3 gap-4 w-full">
        <div class="skeleton h-full w-full col-span-3"></div>
        <div class="skeleton h-full w-full row-span-2"></div>
        <div class="skeleton h-full w-full row-span-2 col-span-2"></div>
      </div>
    </div>

    <RecipesNotFound v-else-if="!recipe || error">
      This recipe could not be found.
    </RecipesNotFound>

    <template v-else>
      <RecipeDetails :recipe="recipe" />

      <div class="grid lg:grid-cols-3 gap-4">
        <RecipeIngredients :recipe="recipe" />
        <CookingSteps :steps="recipe.steps" class="lg:col-span-2" />
      </div>
    </template>
  </div>
</template>
