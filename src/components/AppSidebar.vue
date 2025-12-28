<script setup lang="ts">
import { BookmarkIcon, HeartIcon, LeafIcon, ShoppingBasketIcon } from 'lucide-vue-next'
import SidebarLink from './SidebarLink.vue'
</script>

<template>
  <div class="drawer-side is-drawer-close:overflow-visible">
    <label for="sidebar-drawer" aria-label="Close sidebar" class="drawer-overlay" />

    <aside
      class="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64"
    >
      <nav class="w-full" aria-label="Sidebar navigation">
        <ul class="menu w-full grow">
          <SidebarLink to="/" label="Home" color="green" :icon="LeafIcon" />

          <SidebarLink to="/favorites" label="Favorites" color="pink" :icon="HeartIcon" />

          <SidebarLink to="/saved" label="Saved" color="yellow" :icon="BookmarkIcon" />

          <SidebarLink
            to="/shopping-list"
            label="Shopping list"
            color="blue"
            :icon="ShoppingBasketIcon"
          />
        </ul>
      </nav>
    </aside>
  </div>
</template>
