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

// Real simple-icons brand colors so toolkit badges read as colorful, not monochrome.
const BRAND_COLORS: Record<string, string> = {
  csharp: '#239120',
  dotnet: '#512BD4',
  microsoftsqlserver: '#CC2927',
  rabbitmq: '#FF6600',
  nuxt: '#00DC82',
  typescript: '#3178C6',
  microsoftazure: '#0078D4',
  html5: '#E34F26',
  claude: '#D97757',
  githubcopilot: '#000000'
}

const FALLBACK_ICON = 'i-lucide-code-2'

function toolkitIcon(icon?: string) {
  return icon || FALLBACK_ICON
}

function toolkitColor(icon?: string) {
  if (!icon) return undefined
  const slug = icon.replace('i-simple-icons-', '')
  return BRAND_COLORS[slug]
}
</script>

<template>
  <section
    id="about"
    class="relative py-16 sm:py-20 lg:py-28 scroll-mt-16"
  >
    <UContainer>
      <!-- Section heading -->
      <div class="flex items-start justify-between">
        <div class="flex items-center gap-3">
          <div>
            <h2
              class="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-havelock-blue-500"
            >
              {{ page.about.title }}
            </h2>
            <div class="mt-3 h-1 w-14 rounded-full bg-havelock-blue-500" />
          </div>
          <svg
            class="mt-1 size-5 text-havelock-blue-300"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            aria-hidden="true"
          >
            <path d="M12 20s-7-4.35-9.5-8.5C.6 8.2 1.8 5 5 5c1.9 0 3.3 1 4 2.3C9.7 6 11.1 5 13 5c3.2 0 4.4 3.2 2.5 6.5C13 15.65 12 20 12 20z" />
          </svg>
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
        <div class="relative lg:col-span-2">
          <!-- Dot-grid decoration (inline SVG pattern, hidden from AT) -->
          <svg
            class="absolute -bottom-4 -left-4 -z-10 size-20 text-havelock-blue-300"
            aria-hidden="true"
          >
            <pattern
              id="about-dot-grid"
              width="10"
              height="10"
              patternUnits="userSpaceOnUse"
            >
              <circle
                cx="2"
                cy="2"
                r="1.5"
                fill="currentColor"
              />
            </pattern>
            <rect
              width="100%"
              height="100%"
              fill="url(#about-dot-grid)"
            />
          </svg>

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

          <svg
            class="mt-4 size-4 text-havelock-blue-300"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            aria-hidden="true"
          >
            <path d="M12 20s-7-4.35-9.5-8.5C.6 8.2 1.8 5 5 5c1.9 0 3.3 1 4 2.3C9.7 6 11.1 5 13 5c3.2 0 4.4 3.2 2.5 6.5C13 15.65 12 20 12 20z" />
          </svg>
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
                class="flex size-10 shrink-0 items-center justify-center rounded-lg border border-havelock-blue-200 bg-havelock-blue-50"
                :style="{ color: toolkitColor(item.icon) }"
                :class="{ 'text-havelock-blue-500': !toolkitColor(item.icon) }"
              >
                <UIcon
                  :name="toolkitIcon(item.icon)"
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
