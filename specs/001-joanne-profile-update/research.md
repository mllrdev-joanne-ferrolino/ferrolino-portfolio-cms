# Research

## Content updates workflow

- **Decision:** Keep primary profile content in `content/index.yml` and long-form bio in `content/about.yml`.
  - **Rationale:** These files map directly to the homepage and about page components; content changes require no code edits.
  - **Alternatives considered:** Move profile content into `app/app.config.ts` or new content files, which reduces content-editor friendliness and increases coupling to code.

- **Decision:** Store resume PDFs in `public/documents` and reference them via `/documents/...` in hero CTA links.
  - **Rationale:** Nuxt serves public assets at the site root, providing stable, cacheable URLs for downloads.
  - **Alternatives considered:** External file hosting (e.g., Google Drive/S3), which adds dependency and potential access friction.

- **Decision:** Use `content/index.yml` `now.available` and `now.meetingLink` for homepage availability overrides, with `app/app.config.ts` as a global fallback.
  - **Rationale:** Enables per-page overrides without losing a sensible global default.
  - **Alternatives considered:** Use only global config (less flexible) or only content config (requires content updates for global changes).

## Schema constraints

- **Decision:** Align all content updates with `content.config.ts` Zod schemas (e.g., required `seo`, `title`, `description`, `profileImage`, `experience.items`).
  - **Rationale:** Nuxt Content validates data at build time; schema mismatches will fail builds.
  - **Alternatives considered:** Relax schema validation (not aligned with project conventions).
