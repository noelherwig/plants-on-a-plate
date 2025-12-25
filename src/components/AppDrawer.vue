<script setup lang="ts">
import AppNavbar from './AppNavbar.vue'
import AppSidebar from './AppSidebar.vue'
import AppToast from './AppToast.vue'
</script>

<template>
  <div class="drawer lg:drawer-open fixed inset-0">
    <input
      id="sidebar-drawer"
      type="checkbox"
      class="drawer-toggle"
      aria-label="Toggle sidebar navigation"
    />

    <div class="drawer-content flex flex-col h-screen">
      <header>
        <AppNavbar />
      </header>

      <main class="flex-1 min-h-0 overflow-y-scroll mt-16 p-4">
        <AppToast />
        <slot />
      </main>
    </div>

    <AppSidebar />
  </div>
</template>
