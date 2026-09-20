<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps({
  error: {
    type: Object as PropType<NuxtError>,
    required: true
  }
})

useHead({
  htmlAttrs: {
    lang: 'en'
  }
})

useSeoMeta({
  title: 'Page not found',
  description: 'We are sorry but this page could not be found.'
})
</script>

<template>
  <UApp>
    <div class="min-h-screen bg-white text-foreground">
      <AppHeader />
      <UMain>
        <UPage>
          <UError :error="error" />
        </UPage>
      </UMain>
      <AppFooter />
      <UToaster />
    </div>
  </UApp>
</template>
