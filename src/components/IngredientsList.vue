<script setup lang="ts">
import type { Ingredient } from '@/data/recipes'
import { ref } from 'vue'

defineProps<{ ingredients: Ingredient[] }>()

const checked = ref<Record<string, boolean>>({})
</script>

<template>
  <label
    v-for="(ingredient, index) in ingredients"
    :key="index"
    class="label flex items-center gap-2 mb-0.5"
  >
    <input type="checkbox" class="checkbox" v-model="checked[ingredient.type]" />

    <span :class="{ 'line-through opacity-60': checked[ingredient.type] }">
      {{ ingredient.amount }}
      {{ ingredient.unit }}
      {{ ingredient.type }}
    </span>
  </label>
</template>
