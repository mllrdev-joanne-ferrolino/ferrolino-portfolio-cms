# 09 — Polish and acceptance

**What to build:** The finishing pass across the whole page: subtle scroll-in animations, the mockup's decorative section markers (02, 03...), SEO head metadata with placeholder domain, placeholder OG image and favicon, contrast and accessibility pass (body text neutral, blue for accents only), mobile sanity check at 375px, and the final side-by-side acceptance against the mockup in `docs/`.

**Blocked by:** 05 — About, Specialty and Toolkit; 06 — Experience timeline; 07 — Selected Works; 08 — Let's Connect and QR; 04 — Repo cleanup

**Status:** ready-for-agent

- [ ] Scroll-in animations are subtle (300-500ms, small offsets, no motion sickness)
- [ ] Section markers render in the mockup's style and are hidden from screen readers
- [ ] Head carries title, description, canonical, and OG placeholders with the placeholder domain
- [ ] Body copy is readable dark-on-white; havelock blue appears on headings and accents only
- [ ] Page passes the mockup acceptance checklist: six sections in order, palette matches, doodles present, mobile layout sane
- [ ] No "Sean", no seancramones email or domain anywhere visible or in config
- [ ] `pnpm lint`, `pnpm typecheck`, and `pnpm build` pass
