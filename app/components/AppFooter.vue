<script setup lang="ts">
const { footer } = useAppConfig()
</script>

<template>
  <UFooter
    class="z-10 border-t border-havelock-blue-100 bg-white"
    :ui="{ left: 'text-neutral-500 text-xs' }"
  >
    <template #left>
      {{ footer.credits }}
    </template>

    <template #right>
      <template v-if="footer?.links">
        <UButton
          v-for="(link, index) of footer?.links"
          :key="index"
          v-bind="{ size: 'xs', color: 'primary', variant: 'ghost', ...link }"
        />
      </template>
    </template>
  </UFooter>
</template>
