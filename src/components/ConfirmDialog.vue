<script setup lang="ts">
import AppModal from '@/components/AppModal.vue'
import { useConfirmDialog } from '@/composable/useConfirmDialog'

const { isOpen, title, message, confirm, cancel } = useConfirmDialog()
</script>

<template>
  <AppModal :open="isOpen" :title="title" :message="message">
    <button class="btn btn-secondary" @click="cancel">Cancel</button>
    <button class="btn btn-primary" @click="confirm">Confirm</button>
  </AppModal>
</template>
