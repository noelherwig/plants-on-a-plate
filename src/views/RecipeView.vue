<script setup lang="ts">
import type { Recipe } from '@/data/recipes'
import recipes from '@/data/recipes'
import { computed, type ComputedRef } from 'vue'
import { useRoute } from 'vue-router'
import RecipeStat from '@/components/RecipeStat.vue'
import {
  ClockIcon,
  FlameIcon,
  BicepsFlexedIcon,
  UtensilsCrossedIcon,
  ChevronLeftIcon,
} from 'lucide-vue-next'
import IngredientsList from '@/components/IngredientsList.vue'
import FavoriteButton from '@/components/FavoriteButton.vue'

const route = useRoute()

const recipe: ComputedRef<Recipe | undefined> = computed(() =>
  recipes.find((recipe) => recipe.id === route.params.id),
)
</script>

<template>
  <div class="container max-w-300 mx-auto">
    <div class="flex justify-between mb-4">
      <RouterLink to="/" data-tip="Back to recipes" class="btn btn-square btn-ghost">
        <ChevronLeftIcon />
      </RouterLink>
      <FavoriteButton v-if="recipe" :recipe-id="recipe.id" />
    </div>

    <template v-if="recipe">
      <div class="card md:card-side bg-base-200 shadow-sm flex-col-reverse md:flex-row mb-4">
        <div class="card-body flex p-4 gap-y-2">
          <h1 class="card-title lg:text-2xl mb-2">{{ recipe.title }}</h1>
          <div
            class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-x-2 gap-y-4 md:min-w-64 lg:min-w-124 mb-2"
          >
            <RecipeStat :icon="ClockIcon" :label="`${recipe.minutes} minutes`" />
            <RecipeStat :icon="FlameIcon" :label="`${recipe.statistics.calories} calories`" />
            <RecipeStat :icon="BicepsFlexedIcon" :label="`${recipe.statistics.protein}g protein`" />
            <RecipeStat :icon="UtensilsCrossedIcon" label="Easily made" />
          </div>
          <hr class="my-2 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
          <p>Some description here</p>
        </div>

        <figure class="rounded-t-lg rounded-b-none md:rounded-s-none md:rounded-e-lg max-h-67.5">
          <img
            :src="`/images/${recipe.imageUrl}`"
            alt="Recipe"
            class="w-full h-full object-cover md:max-w-120"
          />
        </figure>
      </div>

      <div class="grid lg:grid-cols-3 gap-4">
        <IngredientsList :ingredients="recipe.ingredients" :servings="2" />

        <div class="card bg-base-200 lg:col-span-2 p-4">
          <h2 class="card-title lg:text-2xl">Cooking steps</h2>
        </div>
      </div>
    </template>

    <template v-else>Recept niet gevonden</template>
  </div>
</template>
