<script setup lang="ts">
defineProps<{ to: string; label: string; color: 'green' | 'pink' | 'blue' }>()
</script>

<template>
  <li>
    <RouterLink
      :to="to"
      :aria-label="label"
      class="is-drawer-close:tooltip is-drawer-close:tooltip-right py-3 group"
      :data-tip="label"
      :class="`text-(--color-${color})`"
      :activeClass="`bg-(--color-${color}) text-(--color-${color}-content)`"
    >
      <slot />
      <span
        class="is-drawer-close:hidden h-5 text-nowrap text-white font-medium group-[.router-link-exact-active]:text-inherit"
      >
        {{ label }}
      </span>
    </RouterLink>
  </li>
</template>
