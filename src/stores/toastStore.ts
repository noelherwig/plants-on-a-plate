import { defineStore } from 'pinia'
import { ref } from 'vue'

export interface Toast {
  id: string
  message: string
  type: ToastType
  notifyTime: number
}

export enum ToastType {
  Success,
  Error,
}

export const useToastStore = defineStore('toast', () => {
  const toasts = ref<Toast[]>([])

  const show = (message: string, type: ToastType) => {
    const toast: Toast = {
      id: crypto.randomUUID(),
      message,
      type,
      notifyTime: Date.now(),
    }
    toasts.value.push(toast)
    setTimeout(() => clear(toast), 5000)
  }

  const clear = (toast: Toast) => (toasts.value = toasts.value.filter((t) => t.id !== toast.id))

  return { toasts, show, clear }
})
