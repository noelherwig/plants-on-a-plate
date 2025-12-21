<script setup lang="ts">
import { PanelRightOpenIcon } from 'lucide-vue-next'
</script>

<template>
  <nav class="navbar w-full bg-base-300 fixed z-10">
    <label for="sidebar-drawer" aria-label="open sidebar" class="btn btn-square btn-ghost me-4">
      <PanelRightOpenIcon :size="16" class="rotate-180" />
    </label>

    <div>Plants On A Plate</div>
  </nav>
</template>
