# 01 — Theme foundation

**What to build:** The portfolio gets its new look. The havelock-blue palette becomes the site's primary color, the rounded display font (Quicksand) and body font (Public Sans) load correctly, and the site becomes light-only with the dark mode toggle removed. App config is updated to Joanne's email and socials. The existing page still renders, but in the new colors and fonts.

**Blocked by:** None — can start immediately.

**Status:** ready-for-agent

- [ ] The full havelock-blue scale (50-950) is defined and the primary color resolves to `#5d83d4` in light mode
- [ ] Quicksand renders on headings and Public Sans on body (verified in devtools, not a system fallback)
- [ ] Color mode is pinned to light; the dark mode toggle is gone and no dark-specific styles remain
- [ ] App config holds Joanne's email and social links; no Sean email or Sean link remains in config
- [ ] `pnpm lint`, `pnpm typecheck`, and `pnpm build` pass (build with the increased memory limit)
