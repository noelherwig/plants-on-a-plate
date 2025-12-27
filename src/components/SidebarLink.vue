<script setup lang="ts">
import type { FunctionalComponent } from 'vue'

defineProps<{
  to: string
  label: string
  color: 'green' | 'pink' | 'blue'
  icon: FunctionalComponent
}>()

// Static class maps for Tailwind compatibility
const styleMap = {
  ['green']: 'bg-(--color-green) text-(--color-green-content)',
  ['pink']: 'bg-(--color-pink)  text-(--color-pink-content)',
  ['blue']: 'bg-(--color-blue)  text-(--color-blue-content)',
}
</script>

<template>
  <li>
    <RouterLink
      :to="to"
      :aria-label="label"
      class="is-drawer-close:tooltip is-drawer-close:tooltip-right py-3 group"
      :data-tip="label"
      :class="`text-(--color-${color})`"
      :activeClass="`${styleMap[color]}`"
    >
      <component :is="icon" :size="20" aria-hidden="true" />
      <span
        class="is-drawer-close:hidden h-5 text-nowrap text-white font-medium group-[.router-link-exact-active]:text-inherit"
      >
        {{ label }}
      </span>
    </RouterLink>
  </li>
</template>
