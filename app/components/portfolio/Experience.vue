<script setup lang="ts">
import type { PortfolioCollectionItem } from '@nuxt/content'

const props = defineProps<{
  page: PortfolioCollectionItem
}>()

type ExperienceItem = PortfolioCollectionItem['experience']['items'][number]

function isPlaceholder(item: ExperienceItem) {
  return [item.position, item.company, item.date, item.description]
    .every(value => !value || value.includes('[TODO'))
}

const items = computed(() => props.page.experience.items)
</script>

<template>
  <section
    id="experience"
    class="relative py-16 sm:py-20 lg:py-28 scroll-mt-16"
  >
    <UContainer>
      <!-- Section heading -->
      <div class="flex items-start justify-between">
        <div>
          <h2
            class="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-havelock-blue-500"
          >
            {{ page.experience.title }}
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

      <!-- Timeline (rows come from content, in the order listed in the YAML) -->
      <div class="relative mt-12">
        <!-- Vertical line -->
        <span
          class="absolute top-2 bottom-2 left-1 w-px bg-havelock-blue-200"
          aria-hidden="true"
        />

        <ol class="space-y-12">
          <li
            v-for="(item, index) in items"
            :key="index"
            class="relative pl-10"
          >
            <template v-if="!isPlaceholder(item)">
              <!-- Timeline dot -->
              <span
                class="absolute top-1.5 left-0 size-3 rounded-full border-2 border-havelock-blue-500 bg-white"
                aria-hidden="true"
              />

              <h3 class="font-display text-xl font-bold text-havelock-blue-600 sm:text-2xl">
                {{ item.position }}
              </h3>
              <p class="mt-1 text-neutral-700">
                {{ item.company }}
              </p>
              <p class="mt-1 text-sm font-medium text-havelock-blue-500">
                {{ item.date }}
              </p>
              <p
                v-if="item.description"
                class="mt-3 leading-relaxed text-neutral-600"
              >
                {{ item.description }}
              </p>
            </template>

            <!-- Placeholder row: shown as a "more to come" ghost node, not raw TODO text -->
            <template v-else>
              <span
                class="absolute top-1.5 left-0 size-3 rounded-full border-2 border-dashed border-havelock-blue-300 bg-white"
                aria-hidden="true"
              />
              <p class="font-display text-lg font-semibold text-havelock-blue-300 italic">
                More roles coming soon...
              </p>
            </template>
          </li>
        </ol>
      </div>

      <!-- Section marker -->
      <div class="mt-16 flex items-center gap-4">
        <span class="font-display text-lg font-semibold text-havelock-blue-500">03</span>
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
