<script setup lang="ts">
import { ToastType, useToastStore } from '@/stores/toastStore'
import { AlertCircleIcon, CircleCheckIcon, XIcon } from 'lucide-vue-next'
import { storeToRefs } from 'pinia'

const toastStore = useToastStore()
const { toasts } = storeToRefs(toastStore)

const styleMap = {
  [ToastType.Success]: {
    bg: 'bg-success',
    text: 'text-success-content',
    btn: 'btn-success',
    icon: CircleCheckIcon,
  },
  [ToastType.Error]: {
    bg: 'bg-error',
    text: 'text-error-content',
    btn: 'btn-error',
    icon: AlertCircleIcon,
  },
}
</script>

<template>
  <div class="toast toast-top toast-end mt-16 me-4 z-10">
    <div
      v-for="(toast, index) in toasts"
      :key="index"
      class="max-w-md shadow-lg rounded-lg"
      :class="[styleMap[toast.type].bg, styleMap[toast.type].text]"
    >
      <div class="p-4">
        <div class="flex items-start">
          <component :is="styleMap[toast.type].icon" class="w-6 h-6 mr-3" />
          <div class="ml-3 flex-1">
            <p class="font-medium">{{ toast.message }}</p>
          </div>
          <div class="ml-4 shrink-0 flex">
            <button
              type="button"
              class="btn btn-square"
              :class="styleMap[toast.type].btn"
              @click="toastStore.clear(toast)"
            >
              <span class="sr-only">Close</span>
              <XIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
