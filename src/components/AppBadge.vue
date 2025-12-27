<script setup lang="ts">
import type { FunctionalComponent } from 'vue'

defineProps<{ icon?: FunctionalComponent; label: string }>()
</script>

<template>
  <div class="badge bg-(--color-blue-content) text-(--color-blue) border-0">
    <component :is="icon" :size="16" aria-hidden="true" />
    <span>{{ label }}</span>
  </div>
</template>
