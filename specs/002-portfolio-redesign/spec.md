# Spec: Portfolio redesign (single page, havelock blue)

**Date**: 2026-09-07
**Status**: Design settled
**Related**: ADR 0001-0004, data-model.md, UBIQUITOUS_LANGUAGE.md

## Goal

Turn the multi-page portfolio into a single-page portfolio for Joanne P. Ferrolino, styled to the mockup in `docs/` (havelock blue, soft pastel, light only). Design first: the layout and look are the deliverable. Copy, projects, and images are seeded with real data where confirmed and placeholders elsewhere, swapped later.

## Reference

- Mockup: `docs/img-1.png` (hero), `img-2.png` (about + specialty/toolkit), `img-3.png` (works), `img-4.png` (connect)
- Palette: `docs/portfolio-redesign.md`

## Page anatomy

### Header (sticky)

- Left: "Joanne Ferrolino" wordmark (Quicksand, havelock blue).
- Right: anchor links About, Experience, Works, Contact. Small, muted, underline on hover/active.
- Background: white with slight blur/translucency; thin bottom border in `havelock-blue-100`.
- Smooth scroll (`scroll-behavior: smooth`, `scroll-margin-top` on sections so anchors don't hide under the header).

### Hero

- Eyebrow: small caps "SOFTWARE DEVELOPMENT" (letterspaced, `havelock-blue-600`), thin rule under it like the mockup.
- Giant "PORTFOLIO" display type in `havelock-blue-300`, stacked/overlapping the photo. Letter-spacing tight, Quicksand bold.
- Photo: `joanne-profile-image.jpg` (B&W) in a soft oval/blob mask (border-radius or SVG mask), centered, overlapping the type, ~40-45% viewport height.
- Below: name in blue, "Software Developer" in muted, year ("2026", dynamic from current year), small divider.
- Decorative sparkles (inline SVG) top-right and near the name, same style as mockup.
- No resume download button in this design (TODO: add when a resume exists).

### About

- Heading "ABOUT ME" (Quicksand, blue), thin rule and heart doodle under it.
- Two columns: framed B&W photo on the left (rounded-3xl, thin border, grayscale), text on the right.
- Text column: name (blue, medium), location row (map-pin icon + "Dumaguete City, Negros Oriental, Philippines"), bio paragraph(s) in muted text.
- Below, split block with vertical divider (mockup img-2 bottom half):
  - Left: "SPECIALTY" small caps label, then "Software Development" in large Quicksand, pencil doodle.
  - Right: "MY TOOLKIT" small caps label, chips: rounded squares with icon + label, one per row (mockup style: Ai/Ps badges). Icons optional; text chips with soft blue borders are fine where no icon exists.
- Toolkit items (from seed): C#/.NET, ASP.NET Core, Optimizely CMS, MSSQL, RabbitMQ, Visma, SQL, Vue/Nuxt, TypeScript, Azure Cloud, HTML/CSS/JS, E-commerce.

### Experience

- Heading "EXPERIENCE" (Quicksand, blue), small rule.
- Timeline: vertical line in `havelock-blue-200`, dots in `havelock-blue-500`, entries left-aligned.
- Entry fields: position (medium), company (muted), date (small, blue), description (muted, optional).
- Seed: one real entry (Miller Solutions Development AB, 2020 - Present) plus one placeholder entry marked "[TODO]" so the two-row layout can be judged.

### Works

- Heading "SELECTED WORKS" (Quicksand, blue), rule, sparkles.
- Subtitle: "Professional & Personal Projects".
- Grid: 2-3 columns (responsive), gap-6. Cards: rounded-2xl, soft `havelock-blue-50`/`100` gradient background, image area (aspect ~4:3), then title (medium), type (muted), tag (small, blue, e.g., "Professional Project").
- Card 1 (real): Voky AB, type "eCommerce Web App", tag "Professional Project", links to https://www.voky.com/. Image: gradient placeholder until a screenshot exists.
- Cards 2-3: placeholders, tag "Personal Project", "[TODO]" type. Gradient placeholders, no assets.
- Trailing card: full-width soft blue card, star icon, "More projects coming soon...".

### Connect

- Heading "LET'S CONNECT!" (Quicksand, blue), rule, sparkle.
- Left column: short message (muted), then contact rows: mail icon + email, LinkedIn, GitHub, Instagram, Facebook (simple-icons, blue circle background, white icon, like the mockup).
- Right column: QR card (rounded-3xl, soft blue bg): QR code for https://www.linkedin.com/in/joanne-ferrolino/, caption "Scan to see more of my work!", curved arrow doodle.
- Decorative paper plane (top-right) and leaf doodle (bottom-right), inline SVG.

### Footer

- Name, small muted line ("Joanne P. Ferrolino"), social icons (LinkedIn, GitHub, Instagram, Facebook), year, credit line. Light, thin top border.

## Theme

- Primary: havelock blue (see ADR 0003). Background white. All accents from the palette.
- Fonts: Quicksand (display, headings), Public Sans (body). Loaded via @fontsource-variable packages.
- Light only. No dark toggle, no dark styles.
- Animations: motion-v fade/slide-up on scroll into view, subtle (300-500ms, small offsets). Decorative elements may have gentle float animations, keep it tasteful.

## Placeholders and TODOs (not blockers for design)

| Item | Status |
| --- | --- |
| About bio text | placeholder, needs Joanne's real words |
| Experience description + second role | placeholder rows |
| Works cards 2-3 | placeholder, need real projects |
| Voky screenshot / card images | gradient placeholder, needs real screenshots |
| Connect message | placeholder draft |
| OG image, favicon | keep existing as placeholder, or simple "JP" mark |
| Domain / site URL | placeholder `joanneferrolino.vercel.app`; note: repo deploys via Cloudflare Pages, confirm host later |
| QR code library | `qrcode` client-side; verify it builds cleanly on Cloudflare Pages |
| Dark mode | deferred, separate design pass (noted, not forgotten) |
| Resume / CV | dropped from design until a file exists |
| Calendly / availability | dropped; add back if Joanne wants a booking link |

## Acceptance criteria

1. `pnpm dev` serves one page at `/` with the six sections in order; `/about`, `/projects`, `/blog`, `/blog/[slug]` 404.
2. Primary color renders havelock blue (`#5d83d4` for primary UI elements, e.g., buttons/badges) after setting `ui.colors.primary`.
3. Quicksand renders on headings; Public Sans on body (verified in devtools, not fallback).
4. No dark mode toggle; color mode pinned light; no `.dark` styles remain.
5. All text visible on the page comes from `content/portfolio.yml` (except decorative microcopy); editing the YAML changes the page.
6. Content typechecks: `pnpm lint`, `pnpm typecheck`, `pnpm build` pass (build with `NODE_OPTIONS='--max-old-space-size=4096'`).
7. QR card shows a scannable QR that opens the LinkedIn profile.
8. Old Sean data is gone: no "Sean", no seancramones email/domain in visible content or config.
