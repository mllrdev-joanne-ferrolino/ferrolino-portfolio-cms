# ADR 0004: Section architecture and content model

**Date**: 2026-09-07
**Status**: Accepted
**Deciders**: Sean (owner)

## Context

The mockup has four sections (hero, about, selected works, connect) and the owner added a work experience timeline. The site keeps Nuxt Content as the CMS: content stays file-based, schema-validated in `content.config.ts`, and editable from YAML.

## Decision

The single page has six sections, in order:

1. **Header** (sticky, minimal): "Joanne Ferrolino" wordmark plus anchor links to About, Experience, Works, Contact.
2. **Hero**: eyebrow label ("Software Development"), giant "PORTFOLIO" lettering in havelock blue, Joanne's B&W photo in a soft oval/blob mask overlapping the type, then name, role ("Software Developer"), and year. Sparkle doodles.
3. **About me**: framed B&W photo (rounded), name, location pin (Dumaguete City, Negros Oriental, Philippines), bio paragraph(s). Below it, the mockup's split block: "Specialty: Software Development" on the left, "My toolkit" chips on the right, separated by a vertical rule.
4. **Experience**: timeline with entries (real entry: Full-stack Software Developer, Miller Solutions Development AB, 2020-present, plus one marked placeholder row so the timeline layout can be reviewed).
5. **Selected works**: card grid. Each card: image placeholder, title, type label (e.g., "eCommerce Web App"), tag ("Professional Project" / "Personal Project"). Real card: Voky AB. Remaining cards are placeholders. Ends with the mockup's "More projects coming soon..." card.
6. **Let's connect**: heading, short message, email row, social rows (LinkedIn, GitHub, Instagram, Facebook), QR code card pointing at the LinkedIn profile, with a "Scan to see more of my work!" caption. Paper plane and leaf doodles.

The mockup's decorative language (sparkles, doodles, section page markers) is recreated as inline SVG, not images.

## Content model

One collection replaces the five existing ones:

- Collection name: `portfolio`, source `content/portfolio.yml`, type `page`.
- Schema groups: `seo`, `hero`, `about` (including `specialty` and `toolkit`), `experience`, `works`, `connect`. Full schema in data-model.md.
- All copy lives in the YAML. Components are presentational, no hardcoded text except microcopy like the "More projects coming soon..." card and decorative alt text.

## Component layout

- `app/pages/index.vue` composes sections from `app/components/portfolio/`: `PortfolioHeader.vue`, `Hero.vue`, `About.vue`, `Experience.vue`, `Works.vue`, `Connect.vue`. (The `landing/` directory is retired.)
- `app/layouts/default.vue` keeps a shell (header + page + footer), rewritten for the new design.
- `app/app.vue` drops content search and navigation; `app/error.vue` is restyled to the light theme.
- `app/utils/links.ts` becomes the anchor link list for the header.

## QR code

Generated client-side with the `qrcode` package (renders a data URL into the card). Target is hardcoded from content (`connect.qr.url`), so it stays CMS-editable.

## Consequences

- `content.config.ts` shrinks to one collection; five collections and all content files are deleted (see ADR 0001, 0002).
- `app/components/landing/*` is replaced by `app/components/portfolio/*`.
- Old components (`Blog.vue`, `Testimonials.vue`, `FAQ.vue`, `WorkExperience.vue`, `PolaroidItem.vue`, `ColorModeButton.vue`, current `AppHeader.vue`/`AppFooter.vue`) are deleted or rewritten.
- `motion-v` stays for scroll-in animations.
- The design is image-light: placeholders are CSS gradient blocks and inline SVG, so nothing blocks the first render.
