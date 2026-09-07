<script setup lang="ts">
const { data: page } = await useAsyncData('portfolio', () => {
  return queryCollection('portfolio').first()
})

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: true
  })
}

const siteUrl = import.meta.env.NUXT_PUBLIC_SITE_URL || 'https://joanneferrolino.vercel.app'
const title = page.value.seo?.title || page.value.hero?.name || 'Joanne P. Ferrolino'
const description = page.value.seo?.description || page.value.hero?.role || 'Software Developer'
const ogImage = `${siteUrl}/og-image.png`

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage,
  ogUrl: siteUrl,
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: ogImage
})

useHead({
  link: [
    { rel: 'canonical', href: siteUrl }
  ]
})
</script>

<template>
  <div v-if="page">
    <PortfolioHero :page />
    <PortfolioAbout :page />
  </div>
</template>
