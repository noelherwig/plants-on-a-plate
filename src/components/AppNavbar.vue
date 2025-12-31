<script setup lang="ts">
import { PanelRightOpenIcon } from 'lucide-vue-next'
</script>

<template>
  <nav class="navbar w-full bg-base-300 fixed z-10" aria-label="Main navigation">
    <label for="sidebar-drawer" aria-label="Open sidebar" class="btn btn-square btn-ghost me-4">
      <PanelRightOpenIcon :size="16" class="rotate-180" aria-hidden="true" />
    </label>

    <RouterLink :to="{ name: 'Home' }" class="font-bold flex gap-2 items-center">
      <img
        alt="Plants on a Plate icon"
        src="@/assets/plants-on-a-plate.svg"
        class="h-8 w-auto me-1"
        aria-hidden="true"
      />
      <span class="text-xl">Plants on a Plate</span>
    </RouterLink>
  </nav>
</template>
