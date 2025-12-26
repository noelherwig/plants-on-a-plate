<script setup lang="ts">
import AppDrawer from './components/AppDrawer.vue'
import ConfirmDialog from './components/ConfirmDialog.vue'
</script>

<template>
  <AppDrawer>
    <RouterView />
  </AppDrawer>

  <ConfirmDialog />
</template>
