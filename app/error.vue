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
    <div class="min-h-screen bg-background text-foreground">
      <AppHeader />
      <UMain>
        <UContainer class="sm:border-x border-default">
          <UPage>
            <UError :error="error" />
          </UPage>
        </UContainer>
      </UMain>
      <AppFooter />
      <UToaster />
    </div>
  </UApp>
</template>
