# ADR 0001: Single-page portfolio, multi-page site retired

**Date**: 2026-09-07
**Status**: Accepted
**Deciders**: Sean (owner), Joanne (profile owner)

## Context

The site is a fork of Sean's portfolio (Nuxt 4, Nuxt UI, Nuxt Content, file-based CMS). It currently has four routes: `/`, `/about`, `/projects`, `/blog` (plus `/blog/[slug]`), with content in `content/*.yml` and `content/blog/*.md`.

Joanne wants a redesign. The mockup in `docs/` (four PNGs plus a Tailwind color scheme in `portfolio-redesign.md`) shows a single-page portfolio: hero, about, selected works, connect. The owner wants the design out fast and details polished later.

## Decision

The site becomes a single page. No separate `/about`, `/projects`, or `/blog` routes. The old routes are removed outright, not redirected, and not kept alive.

The blog is dropped entirely: collection, content files, routes, search UI, and authoring scripts. The 14 posts and the search (Cmd+K) go with it.

## Consequences

- `app/pages/index.vue` is the only page.
- `app/pages/about.vue`, `app/pages/projects.vue`, `app/pages/blog/*` are deleted.
- `content.config.ts` drops the `index`, `about`, `projects`, `pages`, and `blog` collections, replaced by one new collection (see ADR 0004).
- `app/app.vue` drops the content search and navigation queries.
- `scripts/update-blog-frontmatter.mjs` and the `blog:*` package.json scripts are deleted.
- Old bookmarks and links to `/about`, `/projects`, `/blog/*` will 404. Accepted: the owner wants clean, and the domain is not yet public (see ADR 0002).
- The single page is a scroll page with anchor navigation, not an SPA router change. Nuxt still serves one route.

## Notes

- Nitro prerender already lists only `/` (`crawlLinks: false`), which stays correct.
- `@nuxthub/core` with `database: true` stays as-is. D1 was never used for content.
