<script setup lang="ts">
import { PanelRightOpenIcon } from 'lucide-vue-next'
</script>

<template>
  <nav class="navbar w-full bg-base-300 fixed z-10" aria-label="Main navigation">
    <label for="sidebar-drawer" aria-label="Open sidebar" class="btn btn-square btn-ghost me-4">
      <PanelRightOpenIcon :size="16" class="rotate-180" aria-hidden="true" />
    </label>

    <a
      class="font-bold flex gap-2 items-center"
      href="https://github.com/noelherwig/plants-on-a-plate"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Plants On A Plate on GitHub (opens in new tab)"
    >
      <img alt="Aucapi icon" src="@/assets/aucapi-logo-icon-white.svg" class="h-9 w-auto me-1" />
      <img alt="Aucapi text" src="@/assets/aucapi-logo-text-white.svg" class="h-5 w-auto" />
    </a>
  </nav>
</template>
