<template>
  <div class="container max-w-300 mx-auto">
    <template v-if="recipe">
      <div class="card md:card-side bg-base-200 shadow-sm flex-col-reverse md:flex-row">
        <div class="card-body">
          <h1 class="card-title text-2xl">{{ recipe.title }}</h1>
        </div>

        <figure class="rounded-t-lg rounded-b-none md:rounded-s-none md:rounded-e-lg">
          <img
            :src="`/images/${recipe.imageUrl}`"
            alt="Recipe"
            class="w-full h-full object-cover"
          />
        </figure>
      </div>
    </template>

    <template v-else>Recept niet gevonde</template>
  </div>
</template>

<script setup lang="ts">
import type { Recipe } from '@/data/recipes'
import recipes from '@/data/recipes'
import { computed, type ComputedRef } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const recipe: ComputedRef<Recipe | undefined> = computed(() =>
  recipes.find((recipe) => recipe.id === route.params.id),
)
</script>
