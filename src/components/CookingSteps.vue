<script setup lang="ts">
import type { CookingStep } from '@/data/recipes'
import { CircleCheckBigIcon, CircleDashedIcon } from 'lucide-vue-next'
import { ref } from 'vue'

const { steps } = defineProps<{
  steps: CookingStep[]
}>()

// DaisyUI's Collapse Element is open for "true" and closed for "false"
// Hence, "uncompletedSteps" is used to track the completed steps
const uncompletedSteps = ref<Record<string, boolean>>(
  Object.fromEntries(steps.map((step) => [step.id, true])),
)
</script>

<template>
  <div class="card bg-base-200 p-4">
    <h2 class="card-title lg:text-2xl mb-2">Cooking steps</h2>

    <div
      v-for="(step, index) in steps"
      :key="step.id"
      class="collapse border border-base-300 bg-base-100"
    >
      <input type="checkbox" v-model="uncompletedSteps[step.id]" aria-hidden="true" />
      <label class="collapse-title font-bold flex justify-between items-center px-4">
        <span>Step {{ index + 1 }}</span>

        <!-- Step uncompleted icon -->
        <CircleDashedIcon
          :size="20"
          class="text-base-content/60"
          aria-hidden="true"
          v-if="uncompletedSteps[step.id]"
        />
        <!-- Step completed icon -->
        <CircleCheckBigIcon :size="20" class="text-(--color-green)" aria-hidden="true" v-else />
      </label>

      <div class="collapse-content text-sm text-pretty">
        {{ step.text }}
      </div>
    </div>
  </div>
</template>
