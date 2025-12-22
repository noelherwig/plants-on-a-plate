<script setup lang="ts">
import { ref, watch } from 'vue'
import { SearchIcon } from 'lucide-vue-next'

const props = withDefaults(
  defineProps<{
    modelValue: string
  }>(),
  {
    modelValue: '',
  },
)

const emit = defineEmits<{
  (event: 'update:modelValue', value: string): void
}>()

const searchTerm = ref(props.modelValue)

watch(searchTerm, (value) => emit('update:modelValue', value))
</script>

<template>
  <label class="input w-full sm:w-auto grow sm:input-lg mb-4 sm:mb-0">
    <SearchIcon class="opacity-50" />
    <input type="search" placeholder="Search" v-model="searchTerm" />
  </label>
</template>
