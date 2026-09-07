# 03 — Content model and Hero

**What to build:** The content layer migrates to the single-page model. One `portfolio` content collection with groups for seo, hero, about, specialty, toolkit, experience, works, and connect, sourced from a single content file seeded with all of Joanne's real data and explicit `[TODO]` placeholders for what is not confirmed yet. All other collections and their routes are removed: about, projects, blog, and the meta pages. The Hero section renders from content: eyebrow, giant PORTFOLIO type, the B&W photo in a soft mask, name, role, and year.

**Blocked by:** 02 — App shell

**Status:** ready-for-agent

- [ ] The `portfolio` collection schema validates the seed content file; malformed YAML fails the build
- [ ] The page at `/` shows the Hero entirely from content; editing the content file changes the page
- [ ] Old routes (`/about`, `/projects`, `/blog`, `/blog/[slug]`) 404, not redirect
- [ ] All old collections are gone; no code references a deleted collection
- [ ] Experience dates in content are strings, so "Present" is expressible
- [ ] No Sean data is rendered anywhere: no Sean name, email, or links in visible content
- [ ] `pnpm lint`, `pnpm typecheck`, and `pnpm build` pass
