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
      <img
        alt="Plants on a Plate icon"
        src="@/assets/plants-on-a-plate.svg"
        class="h-8 w-auto me-1"
        aria-hidden="true"
      />
      <span class="text-xl">Plants on a Plate</span>
    </a>
  </nav>
</template>
