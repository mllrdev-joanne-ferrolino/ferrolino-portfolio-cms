# Copilot Instructions for Ferrolino Portfolio CMS

This is a Nuxt 4 single-page portfolio built with Nuxt UI and Nuxt Content, featuring a type-safe CMS architecture with YAML content management.

## Architecture Overview

**Tech Stack**: Nuxt 4, Vue 3 Composition API, TypeScript, Nuxt UI (Tailwind-based), Nuxt Content (file-based CMS), YAML content, motion-v animations, pnpm workspace

**Key Patterns**:
- **Content-driven architecture**: All page content is managed via a single YAML file (`content/portfolio.yml`) with strict Zod schemas in `content.config.ts`
- **Component structure**: Section components in `components/portfolio/`, shared components in `components/`
- **Type safety**: Heavily typed content collection with auto-generated types from `@nuxt/content`

## Content Management System

The project uses a file-based CMS with strict typing via a single `portfolio` collection:

```typescript
// content.config.ts defines the collection with Zod schemas
```

**Content Structure**:
- `content/portfolio.yml` - All portfolio content (seo, hero, about, specialty, toolkit, experience, works, connect)

**Adding Content**: Always reference the Zod schema in `content.config.ts` for required fields and types. Content is automatically validated and provides full TypeScript support.

## Component Conventions

**Naming**: PascalCase for components, camelCase for props/composables
**Structure**: Composition API with `<script setup>`, TypeScript interfaces for props
**Styling**: Nuxt UI components with Tailwind utilities, avoid custom CSS when possible

```vue
<script setup lang="ts">
import type { PortfolioCollectionItem } from '@nuxt/content'

defineProps<{
  page: PortfolioCollectionItem
}>()
</script>

<template>
  <UPageHero>
    <template #title>
      <Motion>
        <!-- Content -->
      </Motion>
    </template>
  </UPageHero>
</template>
```

## Key Files & Directories

- `content.config.ts` - Content schema definitions (critical for content changes)
- `app/app.config.ts` - Global app configuration (colors, UI settings, profile data)
- `nuxt.config.ts` - Module configuration, prerendering settings
- `components/portfolio/` - Section components (Hero.vue)
- `content/portfolio.yml` - All portfolio content

## Development Workflow

**Commands**: Use `pnpm` (not npm/yarn)
- `pnpm dev` - Development server
- `pnpm build` - Production build with prerendering
- `pnpm lint` / `pnpm lint:fix` - ESLint with Nuxt config

**ESLint**: Uses `@nuxt/eslint` with stylistic rules (comma-dangle: never, braceStyle: 1tbs)

## Animation & Motion

Uses `motion-v` for animations. Common pattern:
```vue
<Motion
  :initial="{ opacity: 0, scale: 1.1, filter: 'blur(20px)' }"
  :animate="{ opacity: 1, scale: 1, filter: 'blur(0px)' }"
  :transition="{ duration: 0.6, delay: 0.1 }"
>
```

## Common Patterns

- Leverage Nuxt UI's variant system (`color`, `variant`, `size` props)
- Content queries via `@nuxt/content` return fully typed objects
- Global config accessible via `useAppConfig()` composable

## Active Technologies

- TypeScript 5.x, Vue 3 (Composition API), Nuxt 4.1 + @nuxt/content (file-based CMS), @nuxthub/core, @nuxt/ui (components), motion-v (animations)