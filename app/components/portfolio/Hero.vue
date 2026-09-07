<script setup lang="ts">
import type { PortfolioCollectionItem } from '@nuxt/content'

defineProps<{
  page: PortfolioCollectionItem
}>()
</script>

<template>
  <section class="relative overflow-hidden py-24 sm:py-32 lg:py-40">
    <!-- Sparkle doodles (inline SVG, decorative) -->
    <svg
      class="absolute top-8 right-12 size-6 text-havelock-blue-400 opacity-60"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 0l1.5 6.5L18 2.5l-2 6L22 8l-6 1.5L18 15l-3-4.5L12 16l-1.5-6L6.5 14l2-6L2 10l6-1.5L6 3l3 4.5L12 0z" />
    </svg>
    <svg
      class="absolute bottom-16 left-8 size-4 text-havelock-blue-400 opacity-50"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 0l1.5 6.5L18 2.5l-2 6L22 8l-6 1.5L18 15l-3-4.5L12 16l-1.5-6L6.5 14l2-6L2 10l6-1.5L6 3l3 4.5L12 0z" />
    </svg>

    <!-- Eyebrow -->
    <p class="text-center text-sm font-medium tracking-widest uppercase text-havelock-blue-600 mb-6">
      {{ page.hero.eyebrow }}
    </p>

    <!-- Giant PORTFOLIO title -->
    <h1
      class="font-display text-[12vw] sm:text-[10vw] lg:text-[8vw] leading-none text-center text-havelock-blue-500 font-bold select-none"
    >
      {{ page.hero.title }}
    </h1>

    <!-- Photo with blob mask -->
    <div class="relative mx-auto mt-[-4vw] sm:mt-[-3vw] w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64">
      <NuxtImg
        :src="page.hero.photo.src"
        :alt="page.hero.photo.alt"
        width="256"
        height="256"
        class="w-full h-full object-cover grayscale"
        style="border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%"
      />
    </div>

    <!-- Name -->
    <h2 class="mt-8 text-center font-display text-3xl sm:text-4xl font-bold text-neutral-800">
      {{ page.hero.name }}
    </h2>

    <!-- Role -->
    <p class="mt-2 text-center text-lg text-neutral-600">
      {{ page.hero.role }}
    </p>

    <!-- Year -->
    <span class="block mt-2 text-center text-sm font-medium text-havelock-blue-500">
      {{ page.hero.year }}
    </span>
  </section>
</template>
