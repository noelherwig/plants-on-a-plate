<script setup lang="ts">
import { ref } from 'vue'
import AppDrawer from './components/AppDrawer.vue'
import ConfirmDialog from './components/ConfirmDialog.vue'
import { useRecipeStore } from './stores/recipeStore'

const recipeStore = useRecipeStore()
recipeStore.fetchRecipes()

const drawerRef = ref<InstanceType<typeof AppDrawer>>()
const scrollDrawerToTop = () => drawerRef.value && drawerRef.value.scrollToTop()
</script>

<template>
  <AppDrawer ref="drawerRef">
    <RouterView v-slot="{ Component }">
      <transition name="fade" mode="out-in" @before-enter="scrollDrawerToTop">
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
