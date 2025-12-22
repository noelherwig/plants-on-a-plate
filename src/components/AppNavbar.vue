<script setup lang="ts">
import { PanelRightOpenIcon, SproutIcon } from 'lucide-vue-next'
</script>

<template>
  <nav class="navbar w-full bg-base-300 fixed z-10">
    <label for="sidebar-drawer" aria-label="open sidebar" class="btn btn-square btn-ghost me-4">
      <PanelRightOpenIcon :size="16" class="rotate-180" />
    </label>

    <a
      class="font-bold flex gap-2"
      href="https://github.com/noelherwig/plants-on-a-plate"
      target="_blank"
    >
      <SproutIcon :size="24" />
      Plants On A Plate
    </a>
  </nav>
</template>
