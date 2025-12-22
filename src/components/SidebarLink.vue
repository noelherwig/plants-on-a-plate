<script setup lang="ts">
const props = defineProps<{ to: string; label: string; color: 'green' | 'pink' | 'blue' }>()

// Static class maps for Tailwind compatibility
const bgClasses: Record<string, string> = {
  blue: 'dark:bg-blue-700 bg-blue-500',
  green: 'dark:bg-green-700 bg-green-500',
  pink: 'dark:bg-pink-700 bg-pink-500',
}
</script>

<template>
  <li>
    <RouterLink
      :to="to"
      :aria-label="label"
      class="is-drawer-close:tooltip is-drawer-close:tooltip-right py-3"
      :data-tip="label"
      :class="`text-${color}-500`"
      :activeClass="`${bgClasses[props.color]} text-white`"
    >
      <slot />
      <span class="is-drawer-close:hidden h-5 text-white">{{ label }}</span>
    </RouterLink>
  </li>
</template>
