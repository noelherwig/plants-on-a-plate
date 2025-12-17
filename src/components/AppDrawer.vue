<script setup lang="ts">
import AppNavbar from './AppNavbar.vue'
import AppSidebar from './AppSidebar.vue'
</script>

<template>
  <header class="drawer lg:drawer-open">
    <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      <AppNavbar />
      <main class="p-4 pt-20">
        <slot />
      </main>
    </div>

    <AppSidebar />
  </header>
</template>
