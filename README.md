# Ferrolino Portfolio CMS

[![Nuxt 4](https://img.shields.io/badge/Nuxt-4.1-00DC82?logo=nuxt&labelColor=020420)](https://nuxt.com) [![Nuxt UI](https://img.shields.io/badge/UI-Nuxt%20UI-00DC82?logo=nuxt&labelColor=020420)](https://ui.nuxt.com) ![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white) ![pnpm](https://img.shields.io/badge/pnpm-10.x-F69220?logo=pnpm&logoColor=white)

A single-page portfolio for Joanne Ferrolino built with Nuxt 4, Nuxt UI, and Nuxt Content. All content is managed via a single YAML file and validated with strict Zod schemas.

## Overview

- Single-page architecture with `@nuxt/content`
- Strong typing for collections via `content.config.ts` (Zod schemas)
- UI with Nuxt UI (Tailwind-based) and `motion-v` animations
- File-based CMS: single `portfolio.yml` drives all sections
- Hosted on Vercel

## Tech stack

- Nuxt 4, Vue 3 (Composition API, `<script setup>`)
- Nuxt UI, Tailwind utilities
- Nuxt Content (file-based CMS)
- TypeScript everywhere
- motion-v for animations
- pnpm workspace

## Project structure

Key files and folders:

- `content.config.ts`: content schema definitions (Zod)
- `app/app.config.ts`: global app configuration (colors, profile, UI)
- `nuxt.config.ts`: modules and Nitro prerender config
- `app/components/portfolio/`: section components (Hero, About, Experience, Works, Connect)
- `app/pages/`: route pages (index only, single-page site)
- `content/portfolio.yml`: all portfolio content
- `public/`: static assets (profile photo, OG image, favicon)
- `.github/workflows/`: CI (lint/typecheck/build)

## Getting started

Install dependencies:

```bash
pnpm install
```

Start the dev server:

```bash
pnpm dev
```

Build for production:

```bash
pnpm build
```

Preview the production build locally:

```bash
pnpm preview
```

Notes:
- The build script uses `NODE_OPTIONS=--max-old-space-size=4096` to avoid Node heap OOM on CI and local builds.
- Nitro prerender is configured to be explicit and resilient (`crawlLinks: false`, `failOnError: false`).
- If you encounter `GLib-GObject-CRITICAL` errors on Linux, see the Troubleshooting section below.

## Deployment (Vercel)

This project deploys to Vercel. Nitro auto-detects the Vercel platform at build time, so no preset config is needed in `nuxt.config.ts`.

Vercel project settings:
- Framework preset: Nuxt.js (auto-detected)
- Build command: `pnpm build`
- Output directory: leave as Vercel's default for the Nuxt preset

Deploy with the Vercel CLI:

```bash
# Link the local repo to a Vercel project (first time only)
vercel link

# Deploy a preview
vercel

# Deploy to production
vercel --prod
```

Tip: Set `NUXT_PUBLIC_SITE_URL` as a Vercel environment variable to your production domain for correct OG image URLs.

## Content authoring

All content lives in a single YAML file: `content/portfolio.yml`. The schema in `content.config.ts` defines these sections:

- `seo`: page title and description
- `hero`: eyebrow, title, name, role, photo
- `about`: bio, photo, location
- `specialty`: specialization label
- `toolkit`: skills and tools
- `experience`: work history
- `works`: projects and portfolio items
- `connect`: contact info, social links, QR code

Edit the YAML file to update any section. The build validates the content against the Zod schema.

## Scripts

Available package scripts:

- `pnpm dev`: start development server
- `pnpm build`: build for production (with increased Node memory)
- `pnpm preview`: preview the built app
- `pnpm lint` / `pnpm lint:fix`: ESLint
- `pnpm typecheck`: TypeScript type checking

## CI/CD

Workflows in `.github/workflows/`:

- `ci.yml`: runs on PRs and non-main pushes. Installs, lints, typechecks, and builds (with increased Node memory) to validate changes.

Hosting and deploys are handled by Vercel's own Git integration: pushes to `main` trigger a production deploy, other branches get preview deploys.

## Troubleshooting

- **Node heap out of memory during build**
  Already mitigated in scripts and CI via `NODE_OPTIONS=--max-old-space-size=4096`.

- **Content validation errors**
  Check required fields in `content.config.ts`. All YAML is validated at build time.

## Acknowledgments

- Built on top of Nuxt UI + Nuxt Content patterns and the Nuxt portfolio template.
- Thanks to the Nuxt team and community for the great ecosystem.
