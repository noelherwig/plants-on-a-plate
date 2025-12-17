<script setup lang="ts">
import { ClockIcon } from 'lucide-vue-next'
</script>

<template>
  <div class="card bg-base-200 shadow-sm">
    <figure>
      <img
        src="@/data/images/tomato-garlic-pasta.jpg"
        alt="recipe"
        class="max-h-55 w-full h-full object-cover"
      />
    </figure>
    <div class="card-body p-4">
      <h3 class="card-title">
        <span class="truncate">Creamy Tomato Garlic Pasta</span>
      </h3>
      <div class="flex items-center text-base-content/60 font-semibold">
        <ClockIcon :size="16" class="me-2" />
        <span>35 min</span>
        <span class="mx-2">•</span>
        <span class="truncate">Italian</span>
      </div>
    </div>
  </div>
</template>
