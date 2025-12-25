<script setup lang="ts">
const props = defineProps<{ to: string; label: string; color: 'green' | 'pink' | 'blue' }>()

// Static class maps for Tailwind compatibility
const bgClasses: Record<string, string> = {
  green: 'bg-(--color-green) text-(--color-green-content)',
  pink: 'bg-(--color-pink)  text-(--color-pink-content)',
  blue: 'bg-(--color-blue)  text-(--color-blue-content)',
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
      :activeClass="`${bgClasses[props.color]}`"
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
