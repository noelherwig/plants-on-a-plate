<script setup lang="ts">
import { CircleCheckBigIcon, CircleDashedIcon } from 'lucide-vue-next'
import { ref } from 'vue'

const props = defineProps<{
  steps: string[]
}>()

const checked = ref<Record<string, boolean>>(
  Object.fromEntries(props.steps.map((step) => [step, true])),
)
</script>

<template>
  <div class="card bg-base-200 p-4">
    <h2 class="card-title lg:text-2xl mb-2">Cooking steps</h2>

    <div
      v-for="(step, index) in steps"
      :key="index"
      class="collapse border border-base-300 bg-base-100"
    >
      <input type="checkbox" v-model="checked[step]" />
      <div class="collapse-title font-bold flex justify-between items-center px-4">
        <span>Step {{ index + 1 }}</span>

        <CircleDashedIcon :size="20" class="text-base-content/40" v-if="checked[step]" />
        <CircleCheckBigIcon :size="20" class="text-green-500" v-else />
      </div>
      <div class="collapse-content text-sm text-pretty">
        {{ step }}
      </div>
    </div>
  </div>
</template>
