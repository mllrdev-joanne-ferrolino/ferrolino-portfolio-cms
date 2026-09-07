# 04 — Repo cleanup

**What to build:** Dead files from the old site are removed so the repo matches the new single-page reality: the old landing section components, blog markdown files and authoring scripts, the old projects content, and Sean's assets (hero logos, about photos, avatars, project images, resume, recent-projects JSON). Everything that would break the build goes in the removal set; leftovers that are dead weight are removed here.

**Blocked by:** 03 — Content model and Hero

**Status:** ready-for-agent

- [ ] No blog content, no blog authoring scripts, no blog script entries remain in the project
- [ ] No Sean-era assets remain in the public directory (the Joanne profile photo stays)
- [ ] Old landing components and unused components are removed
- [ ] No leftover dependency or devDependency is only used by removed scripting
- [ ] `pnpm lint`, `pnpm typecheck`, and `pnpm build` pass and a grep for Sean's name, email, and old content yields nothing outside the redesign docs
