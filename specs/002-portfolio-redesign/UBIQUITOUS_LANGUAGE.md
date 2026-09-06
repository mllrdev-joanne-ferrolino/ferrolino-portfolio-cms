# Ubiquitous Language

## Portfolio

| Term | Definition | Aliases to avoid |
| --- | --- | --- |
| **Portfolio** | The single-page site for Joanne P. Ferrolino, served at `/` | Site, website, homepage (when meaning the whole product) |
| **Section** | One of the six blocks on the page: Hero, About, Experience, Works, Connect (plus the Header) | Module, component (when meaning the content block) |
| **Placeholder** | Content that is designed but not final, marked as TODO in the spec | Dummy, sample, fake data |
| **Seed content** | The real Joanne data already confirmed (name, role, email, employer, Voky AB, toolkit) and used in place of placeholders | Existing content |

## Page sections

| Term | Definition | Aliases to avoid |
| --- | --- | --- |
| **Hero** | The first section: PORTFOLIO lettering, photo, name, role, year | Landing, intro |
| **About** | The second section: photo, location, bio, then Specialty and Toolkit | Bio |
| **Specialty** | The one-line discipline label in About, e.g., "Software Development" | Skill, focus |
| **Toolkit** | The chip list of technologies and tools in About | Stack, tech stack, tools |
| **Experience** | The timeline of roles, currently Miller Solutions Development AB (2020-present) | Work experience, career |
| **Works** | The Selected Works card grid | Projects, work, selected works |
| **Connect** | The closing section: email, socials, QR card | Contact, footer section |

## Work cards

| Term | Definition | Aliases to avoid |
| --- | --- | --- |
| **Work card** | One entry in the Works grid: image, title, type, tag, optional URL | Project card, portfolio item |
| **Type** | What kind of product the card is, e.g., "eCommerce Web App" | Category (when confused with tag) |
| **Tag** | Provenance of the card: **Professional Project** or **Personal Project** | Category, label |
| **More projects card** | The trailing card that reads "More projects coming soon..." | Footer card |

## Relationships

- A **Portfolio** contains six **Sections** (Header, Hero, About, Experience, Works, Connect) in fixed order.
- An **About** section contains one **Specialty** and one **Toolkit**.
- A **Works** section contains one or more **Work cards** and ends with the **More projects card**.
- A **Work card** has exactly one **Type** and one **Tag**.
- A **Connect** section has one **QR card**.

## Example dialogue

> **Dev:** "The mockup says 'Personal Project' under each work card. Is that the type or the tag?"
> **Owner:** "The tag. Voky AB is a 'Professional Project' and its type is 'eCommerce Web App'. Placeholder cards are 'Personal Project' with a TODO type."
> **Dev:** "So the tag is provenance and the type is what it is."
> **Owner:** "Right. And remember the portfolio is the whole page, not the works grid. The grid is the Works section."

## Flagged ambiguities

- "portfolio" was used for both the whole site and the works grid. Canonical: **Portfolio** is the site; the grid is the **Works** section.
- "project" is ambiguous between a **Work card** and the whole product (e.g., "the portfolio project"). Use **Work card** for grid entries.
- "category" appeared for both **Type** and **Tag**. Canonical: **Type** is what it is, **Tag** is who made it (professional vs personal).
- "CV" and "resume" both appear in old content. The redesign drops the resume link; if it returns, pick one word. Canonical: **resume**.
