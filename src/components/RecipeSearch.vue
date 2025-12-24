<script setup lang="ts">
import { computed } from 'vue'
import { SearchIcon } from 'lucide-vue-next'

const props = withDefaults(
  defineProps<{
    modelValue: string
  }>(),
  {
    modelValue: '',
  },
)

const searchTerm = computed({
  get: () => props.modelValue,
  set: (value: string) => emit('update:modelValue', value),
})

const emit = defineEmits<{
  (event: 'update:modelValue', value: string): void
}>()
</script>

<template>
  <label class="input w-full sm:w-auto grow sm:input-lg mb-4 sm:mb-0" for="recipe-search">
    <SearchIcon class="opacity-60" aria-hidden="true" />
    <input type="search" placeholder="Search" v-model="searchTerm" id="recipe-search" />
  </label>
</template>
