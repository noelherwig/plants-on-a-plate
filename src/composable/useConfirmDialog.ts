import { ref } from 'vue'

const isOpen = ref(false)
const title = ref('')
const message = ref('')
let resolveFn: ((value: boolean) => void) | null = null

export function useConfirmDialog() {
  const confirmDialog = (options: { title: string; message: string }): Promise<boolean> => {
    title.value = options.title
    message.value = options.message
    isOpen.value = true

    return new Promise((resolve) => (resolveFn = resolve))
  }

  const close = (result: boolean) => {
    if (resolveFn) {
      resolveFn(result)
    }
    resolveFn = null
    isOpen.value = false
  }

  const confirm = () => close(true)
  const cancel = () => close(false)

  return { isOpen, title, message, confirmDialog, confirm, cancel }
}
