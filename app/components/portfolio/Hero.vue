<script setup lang="ts">
import type { PortfolioCollectionItem } from '@nuxt/content'

defineProps<{
  page: PortfolioCollectionItem
}>()
</script>

<template>
  <section class="relative overflow-hidden pt-20 pb-16 sm:pt-28 sm:pb-24 lg:pt-32 lg:pb-28">
    <!-- Sparkle doodles (inline SVG, decorative) -->
    <svg
      class="absolute top-10 right-6 size-5 text-havelock-blue-400 opacity-70 sm:top-14 sm:right-16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 0l1.5 6.5L18 2.5l-2 6L22 8l-6 1.5L18 15l-3-4.5L12 16l-1.5-6L6.5 14l2-6L2 10l6-1.5L6 3l3 4.5L12 0z" />
    </svg>
    <svg
      class="absolute top-1/3 right-10 size-3 text-havelock-blue-400 opacity-50 sm:right-28"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 0l1.5 6.5L18 2.5l-2 6L22 8l-6 1.5L18 15l-3-4.5L12 16l-1.5-6L6.5 14l2-6L2 10l6-1.5L6 3l3 4.5L12 0z" />
    </svg>

    <UContainer>
      <!-- Eyebrow -->
      <p class="text-xs font-semibold tracking-[0.25em] uppercase text-havelock-blue-600 sm:text-sm">
        {{ page.hero.eyebrow }}
      </p>
      <div class="mt-3 h-1 w-14 rounded-full bg-havelock-blue-500" />

      <!-- Giant title -->
      <h1
        class="mt-4 w-[75%] font-display text-[17vw] leading-[0.85] font-bold tracking-tight text-havelock-blue-300 select-none sm:w-[62%] sm:text-[12vw] lg:w-[55%] lg:text-[8vw]"
      >
        {{ page.hero.title }}
      </h1>

      <!-- Name / role / year -->
      <div class="mt-8 sm:mt-6">
        <h2 class="font-display text-2xl font-bold text-havelock-blue-600 sm:text-3xl">
          {{ page.hero.name }}
        </h2>
        <p class="mt-1 text-base text-neutral-600 sm:text-lg">
          {{ page.hero.role }}
        </p>
        <div class="mt-4 h-px w-10 bg-havelock-blue-300" />
        <span class="mt-4 block text-sm font-semibold text-havelock-blue-500">
          {{ page.hero.year }}
        </span>
      </div>
    </UContainer>
  </section>
</template>
