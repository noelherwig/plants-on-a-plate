<script setup lang="ts">
import { useRouter } from 'vue-router'
import { PartyPopperIcon } from 'lucide-vue-next'
import useRandomRecipe from '@/composable/useRandomRecipe'

const router = useRouter()

const randomRecipe = useRandomRecipe().getRandomRecipe()

const goToRandomRecipe = () => {
  if (randomRecipe) {
    router.push(`/recipe/${randomRecipe.id}`)
  }
}
</script>

<template>
  <button class="btn sm:btn-lg btn-success btn-soft gap-4" @click="goToRandomRecipe">
    <PartyPopperIcon />
    Surprise me!
  </button>
</template>
