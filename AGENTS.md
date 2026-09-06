# AGENTS.md — ferrolino-portfolio-cms

Nuxt 4 portfolio + blog CMS for seancramones.com. Content-driven, file-based CMS (YAML + Markdown), hosted on Cloudflare Pages via NuxtHub.

## First setup

```bash
pnpm install        # postinstall runs `nuxt prepare`, generates .nuxt/ tsconfigs
pnpm dev            # local dev server
```

`.npmrc` hoists deps (`shamefully-hoist=true`). If a module import fails, check it isn't a deep import that hoisting flattened.

## Verification commands (run in this order, same as CI)

```bash
pnpm lint          # ESLint via @nuxt/eslint
pnpm typecheck     # nuxt typecheck (requires .nuxt/ generated — pnpm install first)
pnpm build         # NODE_OPTIONS='--max-old-space-size=4096' nuxt build
```

Build OOMs without the increased memory limit. CI runs these three sequentially.

**No test runner is configured.** There is no Jest, Vitest, or any test dependency. Do not look for or create tests unless explicitly requested.

## Important config details

- **`content.config.ts`** is the single source of truth for content schemas (Zod via `@nuxt/content`). Always check it before adding or editing content files.
- **ESLint** uses `@nuxt/eslint` with stylistic rules: `commaDangle: 'never'`, `braceStyle: '1tbs'`. Two TS rules are disabled globally: `no-explicit-any`, `unified-signatures`.
- **TypeScript**: referenced via generated `.nuxt/tsconfig.*.json` files. `tsconfig.json` references these paths. The `.nuxt/` dir is gitignored and regenerated on `pnpm install` or `nuxt prepare`.
- **Nitro prerender**: explicit routes only (`crawlLinks: false`, `failOnError: false`). Adding a new page route may require adding it to `nuxt.config.ts` `nitro.prerender.routes`.
- **@nuxthub/core** enabled with `database: true`. Cloudflare D1 (via Hub) is wired but not used for content (content is file-based).

## Content architecture

All content is file-based (not from a database or headless CMS).

| Source | Format | Collection (content.config.ts) |
|---|---|---|
| `content/index.yml` | YAML | `index` |
| `content/about.yml` | YAML | `about` |
| `content/projects/*.yml` | YAML | `projects` |
| `content/blog/*.md` | Markdown + frontmatter | `blog` |
| `content/projects.yml`, `content/blog.yml` | YAML | `pages` (meta pages with links) |

Required blog frontmatter: `title`, `description`, `date`, `image`, `minRead`, `author` (with `name`, `avatar.src`, `avatar.alt`). The schema in `content.config.ts` is the authoritative reference.

### Blog management scripts

```bash
pnpm blog:update              # normalize all blog posts (title, description, minRead, date, author, image)
pnpm blog:update-file <path>  # normalize a single post
pnpm blog:refresh-images      # re-fetch Pexels images for all posts
```

Scripts live in `scripts/update-blog-frontmatter.mjs`. They read `.env` manually (dotenv devDependency). Author info and Pexels API key are configured inside the script / `.env`.

## Key paths (Nuxt 4 app directory)

| Path | Purpose |
|---|---|
| `app/pages/` | Route pages (index, about, projects, blog) |
| `app/components/landing/` | Homepage section components (Hero, About, Blog, FAQ, Testimonials, WorkExperience) |
| `app/components/` | Shared components (AppHeader, AppFooter, ColorModeButton, PolaroidItem) |
| `app/app.config.ts` | Global app config (colors, profile, footer links) |
| `app/utils/` | Auto-imported utilities (`links.ts`, `clipboard.ts`) |

## Deployment

- **Primary**: Cloudflare Pages (Nitro preset `cloudflare-pages`). Build output: `dist/`.
- **Alternative**: `pnpx nuxthub@latest ensure` then deploy via `.github/workflows/nuxthub.yml`.
- Preview locally: `npx wrangler pages dev dist` after build.
- Set `NUXT_PUBLIC_SITE_URL` for correct OG image URLs.

## What this project does not have

- No test framework or test files.
- No traditional database for content (D1 exists via Hub module but unused).
- No i18n, no auth, no API routes, no Edge Functions.
- Not a monorepo (pnpm workspace is single-project, only configures build deps).