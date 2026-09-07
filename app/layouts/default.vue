<script setup lang="ts">
</script>

<template>
  <div>
    <AppHeader />
    <UContainer class="sm:border-x border-default">
      <slot />
      <div id="contact">
        <AppFooter />
      </div>
    </UContainer>
  </div>
</template>
