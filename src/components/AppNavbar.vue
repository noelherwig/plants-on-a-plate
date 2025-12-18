<script setup lang="ts">
import { PanelRightOpenIcon } from 'lucide-vue-next'
</script>

<template>
  <nav class="navbar w-full bg-base-300 fixed z-10">
    <label for="sidebar-drawer" aria-label="open sidebar" class="btn btn-square btn-ghost">
      <PanelRightOpenIcon :size="16" class="rotate-180" />
    </label>

    <div class="px-4">
      <img alt="Vue logo" src="@/assets/logo.svg" width="20" height="20" />
    </div>

    <div>Plants On A Plate</div>
  </nav>
</template>
