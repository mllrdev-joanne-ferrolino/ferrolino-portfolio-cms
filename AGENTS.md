# AGENTS.md — ferrolino-portfolio-cms

Nuxt 4 single-page portfolio CMS for joferrolino.com. Content-driven, file-based CMS (YAML), hosted on Cloudflare Pages via NuxtHub.

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

All content is file-based (not from a database or headless CMS). A single `portfolio` collection drives the whole site:

| Source | Format | Collection |
|---|---|---|
| `content/portfolio.yml` | YAML | `portfolio` |

The schema in `content.config.ts` defines sections: seo, hero, about, specialty, toolkit, experience, works, and connect.

## Key paths (Nuxt 4 app directory)

| Path | Purpose |
|---|---|
| `app/pages/` | Route pages (index only — single-page site) |
| `app/components/portfolio/` | Section components (Hero) |
| `app/components/` | Shared components (AppHeader, AppFooter) |
| `app/app.config.ts` | Global app config (colors, profile, footer links) |

## Deployment

- **Primary**: Cloudflare Pages (Nitro preset `cloudflare-pages`). Build output: `dist/`.
- **Alternative**: `pnpx nuxthub@latest ensure` then deploy via `.github/workflows/nuxthub.yml`.
- Preview locally: `npx wrangler pages dev dist` after build.
- Set `NUXT_PUBLIC_SITE_URL` for correct OG image URLs.

## What this project does not have

- No test framework or test files.
- No traditional database for content (D1 exists via Hub module but unused).
- No blog, no blog content, no blog scripts.
- No i18n, no auth, no API routes, no Edge Functions.
- Not a monorepo (pnpm workspace is single-project, only configures build deps).

## Agent skills

### Issue tracker

Issues are tracked as GitHub Issues in this repo. See `docs/agents/issue-tracker.md`.

### Triage labels

The five canonical triage labels are used: `needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`. See `docs/agents/triage-labels.md`.

### Domain docs

Single-context layout: `CONTEXT.md` + `docs/adr/` at the repo root. See `docs/agents/domain.md`.