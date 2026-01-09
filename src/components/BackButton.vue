<script setup lang="ts">
import { ChevronLeftIcon } from 'lucide-vue-next'
import { useRouter } from 'vue-router'

const $router = useRouter()

const goBack = () => (history.state.back ? $router.back() : $router.push({ name: 'Home' }))
</script>

<template>
  <div class="lg:tooltip lg:tooltip-right" data-tip="Go back">
    <button @click="goBack()" class="btn btn-square btn-ghost" aria-label="Go back">
      <ChevronLeftIcon aria-hidden="true" />
    </button>
  </div>
</template>
