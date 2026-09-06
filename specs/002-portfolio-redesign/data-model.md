# Data model: Portfolio redesign

**Date**: 2026-09-07
**Feature**: 002-portfolio-redesign
**Phase**: Design

## Content collection

One collection replaces the five existing ones (`index`, `about`, `projects`, `pages`, `blog`).

```ts
portfolio: defineCollection({
  type: 'page',
  source: 'portfolio.yml',
  schema: z.object({
    seo: z.object({
      title: z.string().nonempty(),
      description: z.string().nonempty()
    }).optional(),
    hero: z.object({
      eyebrow: z.string(),                       // "Software Development"
      title: z.string(),                         // "PORTFOLIO"
      photo: createImageSchema(),                // /joanne-profile-image.jpg
      name: z.string(),                          // "Joanne P. Ferrolino"
      role: z.string(),                          // "Software Developer"
      year: z.string()                           // "2026"
    }),
    about: z.object({
      title: z.string(),                         // "About me"
      photo: createImageSchema(),                // same photo
      name: z.string(),
      location: z.string(),                      // "Dumaguete City, Negros Oriental, Philippines"
      bio: z.string()                            // markdown allowed
    }),
    specialty: z.object({
      title: z.string(),                         // "Specialty"
      label: z.string()                          // "Software Development"
    }),
    toolkit: z.object({
      title: z.string(),                         // "My toolkit"
      items: z.array(z.object({
        icon: z.string().optional(),             // i-simple-icons-dotnet, i-lucide-database...
        label: z.string()
      }))
    }),
    experience: z.object({
      title: z.string(),                         // "Experience"
      items: z.array(z.object({
        position: z.string(),
        company: z.string(),
        date: z.string(),                        // "2020 - Present" (string, not z.date: labels like "Present" are not dates)
        description: z.string().optional()
      }))
    }),
    works: z.object({
      title: z.string(),                         // "Selected Works"
      subtitle: z.string().optional(),           // "Professional & Personal Projects"
      items: z.array(z.object({
        title: z.string(),
        type: z.string(),                        // "eCommerce Web App"
        tag: z.string(),                         // "Professional Project" | "Personal Project"
        image: createImageSchema().optional(),   // optional: card falls back to gradient placeholder
        url: z.string().optional()
      })),
      moreLabel: z.string().optional()           // "More projects coming soon..."
    }),
    connect: z.object({
      title: z.string(),                         // "Let's connect!"
      message: z.string(),                       // short paragraph
      email: z.string(),
      socials: z.array(createButtonSchema()),
      qr: z.object({
        url: z.string(),                         // https://www.linkedin.com/in/joanne-ferrolino/
        caption: z.string()                      // "Scan to see more of my work!"
      })
    })
  })
})
```

Notes:

- `experience.items.date` is a string, not `z.date()`, because entries carry labels like "Present". The old schema used `z.date()` and could not express that.
- `works.items.image` is optional so placeholder cards render as gradient blocks without assets.
- `createImageSchema`, `createButtonSchema` keep their existing shapes from the current `content.config.ts`.
- Decorative doodles (sparkles, paper plane, leaves) are not content. They are inline SVG in components.

## Seed content: `content/portfolio.yml`

```yaml
seo:
  title: Joanne P. Ferrolino | Software Developer
  description: Full-stack software developer based in Dumaguete City, Philippines, specializing in C#/.NET, Optimizely CMS, and e-commerce platforms.
hero:
  eyebrow: Software Development
  title: PORTFOLIO
  photo:
    src: /joanne-profile-image.jpg
    alt: Joanne P. Ferrolino
  name: Joanne P. Ferrolino
  role: Software Developer
  year: "2026"
about:
  title: About me
  photo:
    src: /joanne-profile-image.jpg
    alt: Joanne P. Ferrolino
  name: Joanne P. Ferrolino
  location: Dumaguete City, Negros Oriental, Philippines
  bio: |
    [TODO: real bio. Draft signal: backend-leaning full-stack developer,
    C#/.NET and Optimizely CMS, e-commerce platforms, Vue/Nuxt frontend.]
specialty:
  title: Specialty
  label: Software Development
toolkit:
  title: My toolkit
  items:
    - { label: C# / .NET }
    - { label: ASP.NET Core }
    - { label: Optimizely CMS }
    - { label: MSSQL }
    - { label: RabbitMQ }
    - { label: Visma }
    - { label: SQL }
    - { label: Vue / Nuxt }
    - { label: TypeScript }
    - { label: Azure Cloud }
    - { label: HTML / CSS / JS }
    - { label: E-commerce }
experience:
  title: Experience
  items:
    - position: Full-stack Software Developer
      company: Miller Solutions Development AB
      date: 2020 - Present
      description: "[TODO: short description. Signal: C#/.NET, Optimizely DXP, e-commerce on Azure.]"
    - position: "[TODO: second role]"
      company: "[TODO]"
      date: "[TODO]"
      description: "[TODO]"
works:
  title: Selected Works
  subtitle: Professional & Personal Projects
  items:
    - title: Voky AB
      type: eCommerce Web App
      tag: Professional Project
      url: https://www.voky.com/
    - title: "[TODO: project 2]"
      type: "[TODO]"
      tag: Personal Project
    - title: "[TODO: project 3]"
      type: "[TODO]"
      tag: Personal Project
  moreLabel: More projects coming soon...
connect:
  title: Let's connect!
  message: "[TODO: short closing message. Draft: Thank you for visiting my portfolio. I'm always open to new opportunities to build, learn, and grow as a developer.]"
  email: joferrolino0109@gmail.com
  socials:
    - icon: i-simple-icons-linkedin
      to: https://www.linkedin.com/in/joanne-ferrolino/
      target: _blank
      aria-label: Joanne Ferrolino on LinkedIn
    - icon: i-simple-icons-github
      to: https://github.com/mllrdev-joanne-ferrolino
      target: _blank
      aria-label: Joanne Ferrolino on GitHub
    - icon: i-simple-icons-instagram
      to: https://www.instagram.com/joooenggg_/
      target: _blank
      aria-label: Joanne Ferrolino on Instagram
    - icon: i-simple-icons-facebook
      to: https://www.facebook.com/joferrolino
      target: _blank
      aria-label: Joanne Ferrolino on Facebook
  qr:
    url: https://www.linkedin.com/in/joanne-ferrolino/
    caption: Scan to see more of my work!
```

## Files removed

- `content/index.yml`, `content/about.yml`, `content/projects.yml`, `content/blog.yml`
- `content/projects/*.yml` (4 files)
- `content/blog/*.md` (14 files)
- `scripts/update-blog-frontmatter.mjs` (and the `blog:*` scripts in `package.json`; `dotenv` devDependency if it has no other consumer)
- `app/pages/about.vue`, `app/pages/projects.vue`, `app/pages/blog/index.vue`, `app/pages/blog/[...slug].vue`
- `app/components/landing/*` (Hero, About, Blog, Testimonials, FAQ, WorkExperience), `PolaroidItem.vue`, `ColorModeButton.vue`
- `public/hero/*`, `public/about/*`, `public/avatars/*` (Sean's photos), `public/projects/*`, `public/documents/updated-cv.pdf`, `public/recent_projects.json`
- `.env`-driven Pexels config (no longer needed)

## Files added or rewritten

- `content/portfolio.yml` (new)
- `content.config.ts` (one collection)
- `app/pages/index.vue` (rewritten to compose the six sections)
- `app/components/portfolio/PortfolioHeader.vue`, `Hero.vue`, `About.vue`, `Experience.vue`, `Works.vue`, `Connect.vue` (new)
- `app/components/AppHeader.vue`, `AppFooter.vue` (rewritten for the new design)
- `app/layouts/default.vue` (rewritten shell)
- `app/app.vue` (no search/navigation)
- `app/error.vue` (light theme)
- `app/app.config.ts` (havelock-blue primary, Joanne's email/socials)
- `app/assets/css/main.css` (palette, fonts, light-only)
- `app/utils/links.ts` (anchor links)
- `nuxt.config.ts` (color mode pinned to light)
- `package.json` (`@fontsource-variable/quicksand`, `@fontsource-variable/public-sans`, `qrcode`)
