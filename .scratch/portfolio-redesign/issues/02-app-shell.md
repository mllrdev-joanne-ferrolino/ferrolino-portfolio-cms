# 02 — App shell

**What to build:** The page gets its new frame: a sticky header with the "Joanne Ferrolino" wordmark and anchor links to About, Experience, Works, and Contact (collapsing into a hamburger menu on mobile), and a footer with the socials and credit line. The old content search and navigation plumbing is removed, and the error page is restyled for the light theme.

**Blocked by:** 01 — Theme foundation

**Status:** ready-for-agent

- [ ] Sticky header shows the wordmark and four anchor links; smooth scrolling and scroll margins work; mobile shows a hamburger menu
- [ ] Footer repeats the socials and a credit line
- [ ] Search and navigation queries are gone; nothing in the app renders them
- [ ] Error page renders in the light theme with the new shell
- [ ] `pnpm lint`, `pnpm typecheck`, and `pnpm build` pass
