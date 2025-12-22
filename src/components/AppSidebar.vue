<script setup lang="ts">
import { HeartIcon, LeafIcon, ShoppingBasketIcon } from 'lucide-vue-next'
import SidebarLink from './SidebarLink.vue'
</script>

<template>
  <div class="drawer-side is-drawer-close:overflow-visible">
    <label for="sidebar-drawer" aria-label="Close sidebar" class="drawer-overlay" />

    <aside
      class="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64"
    >
      <nav aria-label="Sidebar navigation">
        <ul class="menu w-full grow">
          <SidebarLink to="/" label="Home">
            <LeafIcon :size="20" class="text-green-500" aria-hidden="true" />
          </SidebarLink>

          <SidebarLink to="/favorites" label="Favorites">
            <HeartIcon :size="20" class="text-pink-500" aria-hidden="true" />
          </SidebarLink>

          <SidebarLink to="/shopping-list" label="Shopping List">
            <ShoppingBasketIcon :size="20" class="text-blue-500" aria-hidden="true" />
          </SidebarLink>
        </ul>
      </nav>
    </aside>
  </div>
</template>
