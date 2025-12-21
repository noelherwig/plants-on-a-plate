<script setup lang="ts">
import AppNavbar from './AppNavbar.vue'
import AppSidebar from './AppSidebar.vue'
</script>

<template>
  <header class="drawer lg:drawer-open fixed inset-0">
    <input id="sidebar-drawer" type="checkbox" class="drawer-toggle" />

    <div class="drawer-content flex flex-col h-screen">
      <AppNavbar />

      <div class="flex-1 min-h-0 overflow-y-scroll mt-16 p-4">
        <slot />
      </div>
    </div>

    <AppSidebar />
  </header>
</template>
