<script setup lang="ts">
const { data: page } = await useAsyncData('index', () => {
  return queryCollection('index').first()
})
if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: true
  })
}

const siteUrl = 'https://www.seancramones.com'
const title = page.value?.seo?.title || page.value?.title || 'Sean Erick C. Ramones'
const description = page.value?.seo?.description || page.value?.description || 'Full-stack software engineer specializing in Vue.js, Nuxt, and modern web technologies.'
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
  twitterImage: ogImage,
  twitterSite: '@ramones_sean'
})

useHead({
  link: [
    { rel: 'canonical', href: siteUrl }
  ]
})
</script>

<template>
  <UPage v-if="page">
    <LandingHero :page />
    <UPageSection
      :ui="{
        container: '!pt-0 lg:grid lg:grid-cols-2 lg:gap-8'
      }"
    >
      <div
        id="about"
        class="scroll-mt-14"
      >
        <LandingAbout :page />
      </div>
      <div
        id="experience"
        class="scroll-mt-14"
      >
        <LandingWorkExperience :page />
      </div>
    </UPageSection>
    <div
      id="works"
      class="scroll-mt-14"
    >
      <LandingBlog :page />
    </div>
    <LandingTestimonials :page />
    <LandingFAQ :page />
  </UPage>
</template>
