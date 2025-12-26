<script setup lang="ts">
import { TriangleAlertIcon } from 'lucide-vue-next'
import { ref } from 'vue'

defineProps<{ title: string; message: string }>()

const dialog = ref<HTMLDialogElement>()

const open = () => dialog.value && !dialog.value.open && dialog.value.showModal()
const close = () => dialog.value && dialog.value.close()

defineExpose({ open, close })
</script>

<template>
  <dialog ref="dialog" class="modal">
    <div class="modal-box p-0">
      <div class="sm:flex sm:items-start pt-6 px-6">
        <div
          class="mx-auto sm:mx-0 flex size-10 shrink-0 items-center justify-center rounded-full bg-warning/10"
        >
          <TriangleAlertIcon class="text-warning" />
        </div>
        <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
          <h3 class="text-lg font-bold mb-3">{{ title }}</h3>
          <p>{{ message }}</p>
        </div>
      </div>

      <div class="modal-action bg-base-200 px-6 py-3">
        <slot>
          <button class="btn btn-secondary" @click="close()">Close</button>
        </slot>
      </div>
    </div>
  </dialog>
</template>
