<script setup lang="ts">
defineProps<{ to: string; label: string }>()
</script>

<template>
  <li>
    <RouterLink
      :to="to"
      :aria-label="label"
      class="is-drawer-close:tooltip is-drawer-close:tooltip-right py-3"
      :data-tip="label"
    >
      <slot />
      <span class="is-drawer-close:hidden h-5 text-nowrap">{{ label }}</span>
    </RouterLink>
  </li>
</template>
