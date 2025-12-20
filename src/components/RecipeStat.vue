<script setup lang="ts">
import type { Component } from 'vue'

defineProps<{
  icon: Component
  label: string
}>()
</script>

<template>
  <div class="flex items-center">
    <div class="h-8 w-8 bg-base-300 shadow-sm flex justify-center items-center me-3 rounded">
      <component :is="icon" :size="16" />
    </div>
    <span class="truncate">{{ label }}</span>
  </div>
</template>
