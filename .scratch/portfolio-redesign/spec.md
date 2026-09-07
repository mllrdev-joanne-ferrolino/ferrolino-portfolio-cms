Status: ready-for-agent
Feature: 002-portfolio-redesign

## Problem Statement

The current site is a multi-page portfolio forked from Sean's, and it still carries his identity: his bio, testimonials, FAQ, four client projects, 14 blog posts, his email, and his social links. It does not represent Joanne P. Ferrolino, and it is not the design she wants. She wants a single-page portfolio in the havelock-blue style of the mockup in `docs/` (four PNGs plus the color scheme in `portfolio-redesign.md`), seeded with her real details, with the design and UI out first and copy polished later.

## Solution

The site becomes one page at `/` with a light-only havelock-blue look matching the mockup: sticky header with anchors, hero with giant PORTFOLIO type behind Joanne's photo, About (photo, location, bio, then Specialty + Toolkit split), Experience timeline, Selected Works grid, and a Let's Connect section with email, socials, and a QR code card pointing at her LinkedIn.

All page copy moves into one content file (`portfolio.yml`), validated by one content schema. Real data is seeded (name, role, photo, email, location, employer, Voky AB, toolkit, socials, QR target); everything not confirmed yet is an explicit `[TODO]` placeholder. Sean's content, the blog, old routes, and the multi-page structure are removed outright.

## User Stories

1. As a first-time visitor, I want to see Joanne's name, role, and photo as soon as the page loads, so that I know who I'm looking at.
2. As a visitor, I want the giant PORTFOLIO lettering with the photo overlapping it, so that the page announces itself as a portfolio in the mockup's style.
3. As a visitor, I want a sticky header with anchor links, so that I can jump to About, Experience, Works, and Contact without scrolling the whole page.
4. As a mobile visitor, I want the header links tucked into a hamburger menu, so that the header stays compact on small screens.
5. As a visitor, I want to read Joanne's bio and see her location, so that I understand her background and where she is based.
6. As a visitor, I want her Specialty and Toolkit at a glance, so that I can quickly judge technical fit.
7. As a visitor, I want the Experience timeline, so that I can see her career history in order.
8. As a visitor, I want to browse Works as cards, so that I can scan projects quickly.
9. As a visitor, I want each Work card to link to the live project, so that I can see the real product (Voky AB).
10. As a visitor, I want a More projects card that says "More projects coming soon...", so that I know the portfolio is still growing.
11. As a recruiter, I want contact details in one place (email, LinkedIn, GitHub, Instagram, Facebook), so that I can reach out easily.
12. As a visitor, I want a scannable QR code that opens Joanne's LinkedIn, so that I can save her profile on the go.
13. As Joanne, I want all page copy in one YAML file, so that I can update text without touching components.
14. As Joanne, I want placeholders clearly marked `[TODO]` in that file, so that I know exactly what to fill in later.
15. As Joanne, I want the design to match the mockup's feel (havelock blue, soft pastel, light), so that the page looks the way I designed it.
16. As Joanne, I want the site to be light-only, so that the pastel look stays consistent (dark mode is a later pass).
17. As Sean, I want all Sean-specific content removed (bio, testimonials, FAQ, projects, blog, email, links), so that nothing leaks from the fork.
18. As Sean, I want old routes (`/about`, `/projects`, `/blog`, `/blog/[slug]`) to 404 rather than redirect, so that the codebase stays clean.
19. As a maintainer, I want lint, typecheck, and build to pass in CI, so that the redesign does not break the deploy.
20. As a maintainer, I want the build to run with the increased memory limit, so that it does not OOM.
21. As a mobile visitor, I want the Works grid to stack to one column, so that cards are readable on small screens.
22. As a visitor, I want readable contrast, so that body text stays dark on white and blue is reserved for headings and accents.
23. As a visitor on a slow connection, I want image-light placeholders (CSS gradients, inline SVG), so that the page renders fast before real assets arrive.
24. As a search engine, I want a title and description in the head, so that the page is findable.
25. As a screen reader user, I want decorative doodles and section markers hidden from the accessibility tree, so that they do not interfere with reading.
26. As Joanne, I want the site to keep shipping via Cloudflare Pages, so that deployment stays the same.
27. As Joanne, I want Toolkit chips to carry real icons where they exist, so that the Toolkit block looks like the mockup's badge rows.
28. As a visitor, I want small decorative section numbers (02, 03) in the mockup's style, so that the page carries the editorial feel.
29. As Joanne, I want no resume download link until a resume exists, so that there is no broken download.
30. As a visitor, I want the About photo grayscale and framed, so that it matches the mockup's treatment.
31. As Joanne, I want the hero year to reflect the current year, so that it does not go stale.
32. As a content editor, I want Experience dates to accept strings like "2020 - Present", so that open-ended roles are expressible.
33. As a maintainer, I want the blog authoring scripts and Pexels config removed, so that the repo has no dead tooling.
34. As Joanne, I want the QR code to regenerate from content, so that changing the target URL updates the code without a rebuild of logic.
35. As Joanne, I want social links to open in new tabs, so that visitors do not navigate away from the portfolio.
36. As a visitor, I want the footer to repeat the socials and a credit line, so that there is a clean end to the page.
37. As Joanne, I want the error page restyled to the light theme, so that 404s match the site.
38. As a mobile visitor, I want the hero to reflow (type above photo, scaled down), so that the layout does not clip.
39. As Joanne, I want a placeholder second Experience row, so that I can judge the timeline layout before I have real data for it.
40. As Joanne, I want the Toolkit items ordered and editable from the YAML, so that I can rearrange chips without code changes.

## Implementation Decisions

**Content model.** One collection replaces the five existing ones (`index`, `about`, `projects`, `pages`, `blog`). It is a page collection sourced from a single YAML file. Schema groups: `seo` (title, description), `hero` (eyebrow, title, photo, name, role, year), `about` (title, photo, name, location, bio), `specialty` (title, label), `toolkit` (title, items with optional icon and label), `experience` (title, items with position, company, date as a string, optional description), `works` (title, optional subtitle, items with title, type, tag, optional image, optional url, plus a "more projects" label), `connect` (title, message, email, socials as button entries, qr with url and caption). The old schema's `z.date()` for experience is replaced by a string so "Present" is expressible. Work card images are optional so placeholder cards render as gradient blocks with no assets. All page copy comes from this file; components are presentational.

**Components.** The single page composes six sections in fixed order: sticky Header, Hero, About (with Specialty and Toolkit), Experience, Works, Connect. Section components replace the old landing components. The header and footer are rewritten for the new design; the app shell drops the content search and navigation queries; the error page is restyled to the light theme; the nav links utility becomes the header's anchor list. Decorative elements (sparkles, paper plane, leaves, section markers) are inline SVG, aria-hidden, not image assets.

**Theme.** The full havelock-blue scale (50-950) is added to the Tailwind theme; the primary color is set to havelock blue, which resolves to `#5d83d4` in light mode (verified against the installed Nuxt UI v4 color plugin). Typography: Quicksand for display/headings, Public Sans for body, both loaded properly via fontsource variable packages (the current site declares Public Sans but never loads the files, so it renders a fallback). Color mode is pinned to light; the dark-mode toggle and dark styles are removed. Body copy is neutral dark; blue is for headings, accents, and the decorative giant type. Scroll-in animations stay subtle via the existing motion library.

**QR code.** Generated client-side with the `qrcode` package; the target URL comes from content so it is CMS-editable. Caption and card styling per the mockup.

**Assets and cleanup.** Joanne's photo stays; Sean's assets (hero logos, about photos, avatars, project images, resume PDF, recent-projects JSON) are removed. Work card images are gradient placeholders until real screenshots exist. The blog collection, blog markdown files, blog scripts, and the Pexels/dotenv tooling are deleted. Old routes are not redirected; they 404.

**Config and deployment.** The package gains the two font packages and the QR library; blog script entries are removed. The Nitro prerender list already only includes `/`, which stays correct. Deployment remains Cloudflare Pages via the existing workflow; the domain is a placeholder (`joanneferrolino.vercel.app`) until it is set. SEO title/description and OG image/favicon are placeholders for now.

## Testing Decisions

- This repo has no test runner and none is being added. The automated seam is the one that already exists: the content schema (Zod) validates the YAML, and the CI gate (lint, typecheck, build with `NODE_OPTIONS='--max-old-space-size=4096'`) catches schema and type errors. A malformed YAML must fail the build, not render a broken page.
- Good tests here are behavioral: schema rejects missing required fields or wrong shapes; build fails on bad content; the page renders only from content.
- Prior art: the current `content.config.ts` already validates all collections this way, and CI already runs the three commands sequentially.
- Visual acceptance is manual: compare the rendered page against the mockup PNGs in `docs/`. Checklist: six sections in order, palette hexes correct, Quicksand rendering on headings (not fallback), no dark styles or toggle, QR scannable to LinkedIn, all visible copy editable from the YAML, no "Sean" or seancramones data anywhere visible, old routes 404, mobile layout sane at 375px.

## Out of Scope

- Dark mode theme (deferred to a separate design pass, noted in the ADRs).
- Blog, content search, testimonials, FAQ, availability/Calendly, and the resume download.
- Real bio wording, additional Experience rows beyond the placeholder, real screenshots for Work cards, and the second/third project entries (all `[TODO]` placeholders).
- Domain registration, redirects from the old domain, and any SEO strategy beyond head title/description/OG placeholders.
- A test framework or visual regression tooling.
- CMS UI beyond the existing Nuxt Studio preview wiring; i18n; auth; API routes.
- Recreating the mockup's illustrated character (the real photo is used instead).

## Further Notes

- Design docs live in the repo under `specs/002-portfolio-redesign/`: four ADRs (single-page, identity/clean slate, theme, content model), the section-by-section design spec, the content data model with the full seed YAML, and the domain glossary (`UBIQUITOUS_LANGUAGE.md`). Use the glossary's vocabulary in review: Portfolio, Section, Hero, About, Specialty, Toolkit, Experience, Works, Work card, Type, Tag, More projects card, Connect, Placeholder.
- The mockup files in `docs/` stay as the design reference.
- Work is expected on the existing `portfolio-single-page-redesign` branch.
- Placeholder inventory (all `[TODO]`, none blocking the design): About bio, Experience description and second role, Works cards 2-3 and Voky screenshot, Connect message, domain, OG image and favicon.
