<script setup lang="ts">
import type { Recipe } from '@/data/recipes'
import recipes from '@/data/recipes'
import { computed, type ComputedRef } from 'vue'
import { useRoute } from 'vue-router'
import IngredientsList from '@/components/IngredientsList.vue'
import FavoriteButton from '@/components/FavoriteButton.vue'
import BackButton from '@/components/BackButton.vue'
import RecipeDetails from '@/components/RecipeDetails.vue'
import CookingSteps from '@/components/CookingSteps.vue'

const route = useRoute()

const recipe: ComputedRef<Recipe | undefined> = computed(() =>
  recipes.find((recipe) => recipe.id === route.params.id),
)
</script>

<template>
  <div class="container max-w-300 mx-auto">
    <div class="flex justify-between mb-4">
      <BackButton />
      <FavoriteButton v-if="recipe" :recipe-id="recipe.id" />
    </div>

    <template v-if="recipe">
      <RecipeDetails :recipe="recipe" />

      <div class="grid lg:grid-cols-3 gap-4">
        <IngredientsList :ingredients="recipe.ingredients" :servings="4" />
        <CookingSteps :steps="recipe.steps" class="lg:col-span-2" />
      </div>
    </template>

    <template v-else>
      <p v-if="!recipe" class="col-span-full text-center text-base-content/60">
        This recipe could not be found.
      </p>
    </template>
  </div>
</template>
