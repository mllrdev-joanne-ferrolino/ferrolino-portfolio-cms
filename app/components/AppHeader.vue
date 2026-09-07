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
  { label: 'Contact', to: '#contact' }
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
  <header class="sticky top-0 z-50 w-full border-b border-default bg-background/80 backdrop-blur-md">
    <UContainer>
      <div class="flex items-center justify-between h-14">
        <!-- Wordmark -->
        <button
          class="font-semibold text-lg tracking-tight"
          @click="scrollToTop"
        >
          Joanne Ferrolino
        </button>

        <!-- Desktop nav -->
        <nav class="hidden md:flex items-center gap-6">
          <a
            v-for="link in links"
            :key="link.label"
            :href="link.to"
            class="text-sm text-muted hover:text-foreground transition-colors"
          >
            {{ link.label }}
          </a>
        </nav>

        <!-- Mobile hamburger -->
        <UButton
          variant="ghost"
          color="neutral"
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
      class="md:hidden border-t border-default bg-background"
    >
      <UContainer>
        <div class="flex flex-col py-4 gap-2">
          <a
            v-for="link in links"
            :key="link.label"
            :href="link.to"
            class="text-sm text-muted hover:text-foreground transition-colors py-2 border-b border-default last:border-0"
            @click="closeMobile"
          >
            {{ link.label }}
          </a>
        </div>
      </UContainer>
    </div>
  </header>
</template>
