<script setup lang="ts">
import type { PortfolioCollectionItem } from '@nuxt/content'
import QRCode from 'qrcode'

const props = defineProps<{
  page: PortfolioCollectionItem
}>()

const { data: qrDataUrl } = await useAsyncData(
  () => `qr-${props.page.connect.qr.url}`,
  () => QRCode.toDataURL(props.page.connect.qr.url, {
    margin: 1,
    width: 320,
    color: { dark: '#324076', light: '#ffffff' }
  })
)
</script>

<template>
  <section
    id="connect"
    class="relative overflow-hidden py-16 sm:py-20 lg:py-28 scroll-mt-16"
  >
    <!-- Paper plane doodle (inline SVG, decorative) -->
    <svg
      class="absolute top-16 right-6 size-16 text-havelock-blue-300 opacity-70 sm:right-16 lg:right-24"
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      stroke-width="1.5"
      aria-hidden="true"
    >
      <path
        d="M8 28L54 8 36 54l-6-16-16-4z"
        stroke-linejoin="round"
      />
      <path d="M30 38L54 8" />
      <path
        d="M20 50c4-2 8-1 10 3"
        stroke-dasharray="3 4"
      />
    </svg>

    <!-- Leaf doodle (inline SVG, decorative) -->
    <svg
      class="absolute right-8 bottom-4 size-14 text-havelock-blue-200 opacity-70 sm:right-20"
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      stroke-width="1.5"
      aria-hidden="true"
    >
      <path d="M24 44V16" />
      <path d="M24 20c0-8 6-14 14-14 0 8-6 14-14 14z" />
      <path d="M24 30c0-7-5-12-12-12 0 7 5 12 12 12z" />
    </svg>

    <UContainer>
      <div class="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 class="font-display text-4xl leading-[0.95] font-bold text-havelock-blue-500 sm:text-5xl">
            {{ page.connect.title.replace('!', '') }}<span aria-hidden="true">!</span>
          </h2>
          <div class="mt-4 h-1 w-14 rounded-full bg-havelock-blue-500" />

          <p class="mt-6 max-w-sm leading-relaxed text-neutral-600">
            {{ page.connect.message }}
          </p>

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

          <ul class="mt-8 space-y-4">
            <li>
              <a
                :href="`mailto:${page.connect.email}`"
                class="group flex items-center gap-4"
              >
                <span class="flex size-10 shrink-0 items-center justify-center rounded-full bg-havelock-blue-500 text-white">
                  <UIcon
                    name="i-lucide-mail"
                    class="size-5"
                  />
                </span>
                <span class="text-neutral-700 group-hover:text-havelock-blue-600">
                  {{ page.connect.email }}
                </span>
              </a>
            </li>
            <li
              v-for="social in page.connect.socials"
              :key="social.label"
            >
              <a
                :href="social.to"
                :target="social.target"
                rel="noopener"
                class="group flex items-center gap-4"
              >
                <span class="flex size-10 shrink-0 items-center justify-center rounded-full bg-havelock-blue-500 text-white">
                  <UIcon
                    :name="social.icon!"
                    class="size-5"
                  />
                </span>
                <span class="text-neutral-700 group-hover:text-havelock-blue-600">
                  {{ social.label }}
                </span>
              </a>
            </li>
          </ul>
        </div>

        <div class="flex justify-center lg:justify-end">
          <div class="w-fit rounded-3xl bg-havelock-blue-100 p-6 text-center">
            <div class="rounded-2xl bg-white p-4">
              <img
                v-if="qrDataUrl"
                :src="qrDataUrl"
                :alt="`QR code to ${page.connect.qr.url}`"
                width="180"
                height="180"
                class="size-44"
              >
            </div>
            <p class="mt-4 max-w-[12rem] text-sm text-neutral-600">
              {{ page.connect.qr.caption }}
            </p>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>
