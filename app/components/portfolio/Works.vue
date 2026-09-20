<script setup lang="ts">
import type { PortfolioCollectionItem } from '@nuxt/content'

const props = defineProps<{
  page: PortfolioCollectionItem
}>()

const items = computed(() =>
  props.page.works.items.filter(item => !item.title.includes('[TODO'))
)
</script>

<template>
  <section
    id="works"
    class="relative py-16 sm:py-20 lg:py-28 scroll-mt-16"
  >
    <UContainer>
      <!-- Section heading -->
      <div class="flex items-start justify-between">
        <div>
          <h2
            class="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-havelock-blue-500"
          >
            {{ page.works.title }}
          </h2>
          <div class="mt-3 h-1 w-14 rounded-full bg-havelock-blue-500" />
          <p
            v-if="page.works.subtitle"
            class="mt-4 text-neutral-600"
          >
            {{ page.works.subtitle }}
          </p>
        </div>

        <!-- Decorative sparkle (inline SVG, hidden from AT) -->
        <svg
          class="size-6 text-havelock-blue-300"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 0l1.5 6.5L18 2.5l-2 6L22 8l-6 1.5L18 15l-3-4.5L12 16l-1.5-6L6.5 14l2-6L2 10l6-1.5L6 3l3 4.5L12 0z" />
        </svg>
      </div>

      <!-- Work cards -->
      <div class="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <component
          :is="item.url ? 'a' : 'div'"
          v-for="item in items"
          :key="item.title"
          v-bind="item.url ? { href: item.url, target: '_blank', rel: 'noopener' } : {}"
          class="group rounded-2xl border border-havelock-blue-100 bg-white p-3 transition-shadow hover:shadow-lg hover:shadow-havelock-blue-500/10"
        >
          <div class="relative aspect-4/3 overflow-hidden rounded-xl">
            <NuxtImg
              v-if="item.image"
              :src="item.image.src"
              :alt="item.image.alt"
              class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div
              v-else
              class="h-full w-full bg-gradient-to-br from-havelock-blue-200 via-havelock-blue-300 to-havelock-blue-400"
            />
            <span
              class="absolute top-2 left-2 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-havelock-blue-600 backdrop-blur-sm"
            >
              {{ item.type }}
            </span>
          </div>

          <p class="mt-3 font-display text-lg font-bold text-neutral-800">
            {{ item.title }}
          </p>
          <p class="mt-0.5 text-sm font-medium text-havelock-blue-500">
            {{ item.tag }}
          </p>
        </component>

        <!-- More projects coming soon -->
        <div
          class="flex items-center justify-center gap-3 rounded-2xl border border-dashed border-havelock-blue-300 bg-havelock-blue-50 p-6 text-center sm:col-span-2 lg:col-span-1"
        >
          <svg
            class="size-5 shrink-0 text-havelock-blue-400"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 0l1.5 6.5L18 2.5l-2 6L22 8l-6 1.5L18 15l-3-4.5L12 16l-1.5-6L6.5 14l2-6L2 10l6-1.5L6 3l3 4.5L12 0z" />
          </svg>
          <span class="text-sm font-medium text-havelock-blue-600">
            {{ page.works.moreLabel }}
          </span>
        </div>
      </div>

      <!-- Section marker -->
      <div class="mt-16 flex items-center gap-4">
        <span class="font-display text-lg font-semibold text-havelock-blue-500">04</span>
        <span class="h-px flex-1 bg-havelock-blue-200" />
        <svg
          class="size-4 text-havelock-blue-300"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 0l1.5 6.5L18 2.5l-2 6L22 8l-6 1.5L18 15l-3-4.5L12 16l-1.5-6L6.5 14l2-6L2 10l6-1.5L6 3l3 4.5L12 0z" />
        </svg>
      </div>
    </UContainer>
  </section>
</template>
