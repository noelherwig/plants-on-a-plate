<script setup lang="ts">
import type { Ingredient } from '@/types/ingredient'
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
    <input type="checkbox" class="checkbox" v-model="checked[ingredient.id]" />

    <span :class="{ 'line-through opacity-60': checked[ingredient.id] }">
      {{ ingredient.quantity }}
      {{ ingredient.unit }}
      {{ ingredient.name }}
    </span>
  </label>
</template>
