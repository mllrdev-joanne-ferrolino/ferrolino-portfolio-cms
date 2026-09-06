# ADR 0002: Joanne's identity, clean slate on content

**Date**: 2026-09-07
**Status**: Accepted
**Deciders**: Sean (owner), Joanne (profile owner)

## Context

The repo is a fork of Sean's portfolio. The content files still carry Sean's data: `about.yml` bio, the FAQ, testimonials, the work experience at Miller Development AB, four client projects (Pharus, Roommejts, Sysarb, Up Planner), Sean's email, and Sean's social links in `app.config.ts`. The `index.yml` SEO title already says "Joanne P. Ferrolino | Full-stack Software Developer".

Sean confirmed: the fork is for Joanne's profile, and most of the career content is his, not hers. Sean is fine wiping it.

## Decision

Everything in the content layer is rebuilt for Joanne. Sean-specific content is deleted, not adapted. The page is seeded with Joanne's real data where we have it and explicit placeholders where we do not (see spec.md TODO list).

Real data, confirmed in the grilling session:

| Field | Value |
|---|---|
| Name | Joanne P. Ferrolino |
| Role | Software Developer (backend-leaning full stack) |
| Photo | `public/joanne-profile-image.jpg` (B&W, provided by owner) |
| Email | joferrolino0109@gmail.com |
| Location | Dumaguete City, Negros Oriental, Philippines (postal code 6200) |
| Employer | Miller Solutions Development AB (Full-stack Software Developer, 2020-present) |
| Real project | Voky AB, https://www.voky.com/, e-commerce web app |
| Toolkit | C# / ASP.NET Core, Optimizely CMS, MSSQL, RabbitMQ, Visma, SQL, Vue/Nuxt, HTML/CSS/JS/TS, Azure Cloud, e-commerce, SEO |
| Socials | LinkedIn https://www.linkedin.com/in/joanne-ferrolino/, GitHub https://github.com/mllrdev-joanne-ferrolino, Instagram https://www.instagram.com/joooenggg_/, Facebook https://www.facebook.com/joferrolino |
| QR target | LinkedIn profile (https://www.linkedin.com/in/joanne-ferrolino/) |
| Domain | Not set. Placeholder: `joanneferrolino.vercel.app` |

## Consequences

- Content files deleted: `content/index.yml`, `content/about.yml`, `content/projects.yml`, `content/blog.yml`, `content/projects/*.yml`, `content/blog/*.md`.
- New single content file: `content/portfolio.yml` (see ADR 0004 and data-model.md).
- `app/app.config.ts` rewritten: Joanne's email and socials, no Sean calendly link, no Sean resume.
- Testimonials, FAQ, and the "Now / availability" blocks are not carried over. Sean's testimonials name him; Joanne has none yet. They are dropped, not placeholder-ed.
- The hero "Download Resume" link is dropped. No resume exists for Joanne yet (TODO).
- Sean's public assets (`public/hero/*`, `public/about/*`, `public/avatars/*`, `public/documents/updated-cv.pdf`, `public/recent_projects.json`, project images) are removed as part of cleanup. `public/joanne-profile-image.jpg` stays.

## Notes

- GitHub handle `mllrdev-joanne-ferrolino` and the employer name both point to Miller Development, which matches.
- Domain discrepancy: the owner mentioned `joanneferrolino.vercel.app`, but this repo deploys via Cloudflare Pages (Nitro preset `cloudflare-pages`). The domain is a placeholder either way and flagged as a TODO in spec.md.
