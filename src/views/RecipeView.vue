<script setup lang="ts">
import { computed } from 'vue'
import RecipeIngredients from '@/components/RecipeIngredients.vue'
import FavoriteButton from '@/components/FavoriteButton.vue'
import BackButton from '@/components/BackButton.vue'
import RecipeDetails from '@/components/RecipeDetails.vue'
import CookingSteps from '@/components/CookingSteps.vue'
import { useRecipeStore } from '@/stores/recipeStore'
import SaveButton from '@/components/SaveButton.vue'

const props = defineProps<{ id: string }>()

const recipeStore = useRecipeStore()
const recipe = computed(() => recipeStore.getById(props.id))
</script>

<template>
  <div class="container max-w-300 mx-auto">
    <div class="flex justify-between mb-4">
      <BackButton />

      <div v-if="recipe" class="flex gap-2">
        <SaveButton :recipe-id="recipe.id" :recipe-title="recipe.title" />
        <FavoriteButton :recipe-id="recipe.id" :recipe-title="recipe.title" />
      </div>
    </div>

    <template v-if="recipe">
      <RecipeDetails :recipe="recipe" />

      <div class="grid lg:grid-cols-3 gap-4">
        <RecipeIngredients :recipe="recipe" />
        <CookingSteps :steps="recipe.steps" class="lg:col-span-2" />
      </div>
    </template>

    <template v-else>
      <p class="col-span-full text-center text-base-content/60">This recipe could not be found.</p>
    </template>
  </div>
</template>
