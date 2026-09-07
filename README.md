# Ferrolino Portfolio CMS

[![Nuxt 4](https://img.shields.io/badge/Nuxt-4.1-00DC82?logo=nuxt&labelColor=020420)](https://nuxt.com) [![Nuxt UI](https://img.shields.io/badge/UI-Nuxt%20UI-00DC82?logo=nuxt&labelColor=020420)](https://ui.nuxt.com) ![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white) ![pnpm](https://img.shields.io/badge/pnpm-10.x-F69220?logo=pnpm&logoColor=white)

A single-page portfolio for Joanne Ferrolino built with Nuxt 4, Nuxt UI, and Nuxt Content. All content is managed via a single YAML file and validated with strict Zod schemas.

## Overview

- Single-page architecture with `@nuxt/content`
- Strong typing for collections via `content.config.ts` (Zod schemas)
- UI with Nuxt UI (Tailwind-based) and `motion-v` animations
- File-based CMS: single `portfolio.yml` drives all sections
- Hosted on Cloudflare Pages (Nitro preset configured)
- Optional NuxtHub deploy workflow included

## Tech stack

- Nuxt 4, Vue 3 (Composition API, `<script setup>`)
- Nuxt UI, Tailwind utilities
- Nuxt Content (file-based CMS)
- TypeScript everywhere
- motion-v for animations
- pnpm workspace

## Project structure

Key files and folders:

- `content.config.ts` — Content schema definitions (Zod)
- `app/app.config.ts` — Global app configuration (colors, profile, UI)
- `nuxt.config.ts` — Modules and Nitro prerender config
- `app/components/portfolio/` — Section components (Hero)
- `app/pages/` — Route pages (index only — single-page site)
- `content/portfolio.yml` — All portfolio content
- `public/` — Static assets (profile photo, OG image, favicon)
- `.github/workflows/` — CI (lint/typecheck/build) and NuxtHub deployment

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

## Deployment (Cloudflare Pages)

This project is deployed on Cloudflare Pages.

Cloudflare settings:
- Build command: `pnpm build`
- Build output directory: `dist`
- Framework preset: None (Nitro preset `cloudflare-pages` generates the worker and assets)

Local preview and deploy with Wrangler:

```bash
# Preview the built site locally with Cloudflare Pages runtime
npx wrangler pages dev dist

# Deploy the built site to Cloudflare Pages
npx wrangler pages deploy dist
```

Tip: Set `NUXT_PUBLIC_SITE_URL` to your production domain for correct OG image URLs.

## Content authoring

All content lives in a single YAML file: `content/portfolio.yml`. The schema in `content.config.ts` defines these sections:

- `seo` — Page title and description
- `hero` — Eyebrow, title, name, role, photo
- `about` — Bio, photo, location
- `specialty` — Specialization label
- `toolkit` — Skills and tools
- `experience` — Work history
- `works` — Projects and portfolio items
- `connect` — Contact info, social links, QR code

Edit the YAML file to update any section. The build validates the content against the Zod schema.

## Scripts

Available package scripts:

- `pnpm dev` — Start development server
- `pnpm build` — Build for production (with increased Node memory)
- `pnpm preview` — Preview the built app
- `pnpm lint` / `pnpm lint:fix` — ESLint
- `pnpm typecheck` — TypeScript type checking

## CI/CD

Workflows in `.github/workflows/`:

- `ci.yml` — Runs on PRs and non-main pushes. Performs install, lint, typecheck, and a build (with increased Node memory) to validate changes.
- `nuxthub.yml` — Optional: Deploy to NuxtHub on pushes to `main` if you choose to use NuxtHub.

Primary hosting is Cloudflare Pages. Configure your Pages project to run the build and output to `dist` (as above). Nuxt/Nitro is already configured for the `cloudflare-pages` preset.

## Troubleshooting

- **Node heap out of memory during build**
  Already mitigated in scripts and CI via `NODE_OPTIONS=--max-old-space-size=4096`.

- **Content validation errors**
  Check required fields in `content.config.ts`. All YAML is validated at build time.

## Acknowledgments

- Built on top of Nuxt UI + Nuxt Content patterns and the Nuxt portfolio template.
- Thanks to the Nuxt team and community for the great ecosystem.