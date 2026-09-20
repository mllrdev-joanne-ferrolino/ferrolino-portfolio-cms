<script setup lang="ts">
const isMobileOpen = ref(false)

interface HeaderLink {
  label: string
  to: string
}

const links: HeaderLink[] = [
  { label: 'About', to: '#about' },
  { label: 'Experience', to: '#experience' },
  { label: 'Works', to: '#works' },
  { label: 'Contact', to: '#connect' }
]

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
  isMobileOpen.value = false
}

function closeMobile() {
  isMobileOpen.value = false
}
</script>

<template>
  <header class="sticky top-0 z-50 w-full border-b border-havelock-blue-100 bg-white/85 backdrop-blur-md">
    <UContainer>
      <div class="flex h-16 items-center justify-between">
        <!-- Wordmark -->
        <button
          class="font-display text-lg font-bold text-havelock-blue-600"
          @click="scrollToTop"
        >
          Joanne Ferrolino
        </button>

        <!-- Desktop nav -->
        <nav class="hidden items-center gap-8 md:flex">
          <a
            v-for="link in links"
            :key="link.label"
            :href="link.to"
            class="text-sm font-medium text-neutral-600 transition-colors hover:text-havelock-blue-600"
          >
            {{ link.label }}
          </a>
        </nav>

        <!-- Mobile hamburger -->
        <UButton
          variant="ghost"
          color="primary"
          size="sm"
          class="md:hidden"
          :aria-label="isMobileOpen ? 'Close menu' : 'Open menu'"
          @click="isMobileOpen = !isMobileOpen"
        >
          <UIcon
            :name="isMobileOpen ? 'i-lucide-x' : 'i-lucide-menu'"
            class="size-5"
          />
        </UButton>
      </div>
    </UContainer>

    <!-- Mobile nav panel -->
    <div
      v-if="isMobileOpen"
      class="border-t border-havelock-blue-100 bg-white md:hidden"
    >
      <UContainer>
        <div class="flex flex-col gap-2 py-4">
          <a
            v-for="link in links"
            :key="link.label"
            :href="link.to"
            class="border-b border-havelock-blue-100 py-2 text-sm font-medium text-neutral-600 transition-colors last:border-0 hover:text-havelock-blue-600"
            @click="closeMobile"
          >
            {{ link.label }}
          </a>
        </div>
      </UContainer>
    </div>
  </header>
</template>
