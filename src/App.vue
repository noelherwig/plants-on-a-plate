<script setup lang="ts">
import AppDrawer from './components/AppDrawer.vue'
import ConfirmDialog from './components/ConfirmDialog.vue'
</script>

<template>
  <AppDrawer>
    <RouterView v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </RouterView>
  </AppDrawer>

  <ConfirmDialog />
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
