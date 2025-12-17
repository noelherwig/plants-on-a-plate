<script setup lang="ts">
defineProps<{
  to: string
  label: string
}>()
</script>

<template>
  <li>
    <RouterLink
      :to="to"
      class="is-drawer-close:tooltip is-drawer-close:tooltip-right"
      :data-tip="label"
    >
      <slot />
      <span class="is-drawer-close:hidden">{{ label }}</span>
    </RouterLink>
  </li>
</template>
