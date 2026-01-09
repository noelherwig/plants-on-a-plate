<script setup lang="ts">
import { ArrowRightIcon } from 'lucide-vue-next'
</script>

<template>
  <div class="flex flex-col items-center">
    <div class="text-(--color-red) text-center">
      <h1 class="text-6xl">404</h1>
      <p class="text-3xl mb-4">Page not found</p>
    </div>

    <p class="text-base-content/60 mb-4">The page you are looking for does not exist.</p>

    <RouterLink class="btn btn-primary sm:btn-lg gap-2 ps-4" :to="{ name: 'Home' }">
      Take me back
      <ArrowRightIcon />
    </RouterLink>
  </div>
</template>
