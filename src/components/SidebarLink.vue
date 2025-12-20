<script setup lang="ts">
interface SidebarLinkProps {
  to: string
  label: string
}

defineProps<SidebarLinkProps>()
</script>

<template>
  <li>
    <RouterLink
      :to="to"
      class="is-drawer-close:tooltip is-drawer-close:tooltip-right py-3"
      :data-tip="label"
    >
      <slot />
      <span class="is-drawer-close:hidden h-5">{{ label }}</span>
    </RouterLink>
  </li>
</template>
