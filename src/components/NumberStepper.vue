<script setup lang="ts">
import { MinusIcon, PlusIcon } from 'lucide-vue-next'

interface NumberStepperProps {
  modelValue: number
  min?: number
  max?: number
  step?: number
}

const props = withDefaults(defineProps<NumberStepperProps>(), {
  min: 0,
  step: 1,
})

const emit = defineEmits<{
  (event: 'update:modelValue', value: number): void
}>()

const decrement = () => {
  const next = props.modelValue - props.step
  if (next >= props.min) {
    emit('update:modelValue', next)
  }
}

const increment = () => {
  const next = props.modelValue + props.step
  if (props.max === undefined || next <= props.max) {
    emit('update:modelValue', next)
  }
}
</script>

<template>
  <div class="w-24 flex">
    <button type="button" class="rounded-r-none btn btn-soft btn-square btn-sm" @click="decrement">
      <MinusIcon :size="16" />
    </button>

    <p class="bg-base-300 border-y border-base-100 h-8 flex items-center justify-center flex-1">
      {{ modelValue }}
    </p>

    <button type="button" class="rounded-l-none btn btn-soft btn-square btn-sm" @click="increment">
      <PlusIcon :size="16" />
    </button>
  </div>
</template>
