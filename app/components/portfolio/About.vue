<script setup lang="ts">
import type { PortfolioCollectionItem } from '@nuxt/content'

const props = defineProps<{
  page: PortfolioCollectionItem
}>()

const bioParagraphs = computed(() =>
  props.page.about.bio
    .split(/\n{2,}/)
    .map(paragraph => paragraph.trim())
    .filter(Boolean)
)
</script>

<template>
  <section
    id="about"
    class="relative py-16 sm:py-20 lg:py-28 scroll-mt-16"
  >
    <UContainer>
      <!-- Section heading -->
      <div class="flex items-start justify-between">
        <div>
          <h2
            class="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-havelock-blue-500"
          >
            {{ page.about.title }}
          </h2>
          <div class="mt-3 h-1 w-14 rounded-full bg-havelock-blue-500" />
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

      <!-- Photo + intro -->
      <div class="mt-10 grid gap-10 lg:grid-cols-5 lg:gap-16">
        <div class="lg:col-span-2">
          <NuxtImg
            :src="page.about.photo.src"
            :alt="page.about.photo.alt"
            width="640"
            height="800"
            class="w-full object-cover grayscale rounded-3xl"
          />
        </div>

        <div class="lg:col-span-3">
          <h3 class="font-display text-2xl sm:text-3xl font-bold text-havelock-blue-600">
            {{ page.about.name }}
          </h3>

          <p class="mt-3 flex items-center gap-2 text-havelock-blue-500">
            <UIcon
              name="i-lucide-map-pin"
              class="size-5 shrink-0"
            />
            {{ page.about.location }}
          </p>

          <div class="mt-6 space-y-4 text-neutral-600 leading-relaxed">
            <p
              v-for="(paragraph, index) in bioParagraphs"
              :key="index"
            >
              {{ paragraph }}
            </p>
          </div>
        </div>
      </div>

      <!-- Divider before Specialty / Toolkit split -->
      <div class="mt-14 h-px w-full bg-havelock-blue-200/60" />

      <!-- Specialty (left) / Toolkit (right) split -->
      <div class="mt-12 grid gap-12 lg:grid-cols-5 lg:gap-0">
        <div class="lg:col-span-2 lg:pr-16">
          <p class="text-xs font-semibold uppercase tracking-[0.2em] text-havelock-blue-500">
            {{ page.specialty.title }}
          </p>
          <p class="mt-4 font-display text-4xl sm:text-5xl font-bold text-havelock-blue-500">
            {{ page.specialty.label }}
          </p>
        </div>

        <div class="lg:col-span-3 lg:border-l lg:border-havelock-blue-200/60 lg:pl-16">
          <p class="text-xs font-semibold uppercase tracking-[0.2em] text-havelock-blue-500">
            {{ page.toolkit.title }}
          </p>

          <ul class="mt-6 space-y-4">
            <li
              v-for="item in page.toolkit.items"
              :key="item.label"
              class="flex items-center gap-3"
            >
              <span
                v-if="item.icon"
                class="flex size-10 shrink-0 items-center justify-center rounded-lg border border-havelock-blue-300 text-havelock-blue-500"
              >
                <UIcon
                  :name="item.icon"
                  class="size-5"
                />
              </span>
              <span class="text-sm sm:text-base text-neutral-700">
                {{ item.label }}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Section marker -->
      <div class="mt-16 flex items-center gap-4">
        <span class="font-display text-lg font-semibold text-havelock-blue-500">02</span>
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
