# Implementation Plan: Joanne Portfolio Profile Update

**Branch**: `001-joanne-profile-update` | **Date**: 2026-01-19 | **Spec**: [specs/001-joanne-profile-update/spec.md](specs/001-joanne-profile-update/spec.md)
**Input**: Feature specification from `/specs/001-joanne-profile-update/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/commands/plan.md` for the execution workflow.

## Summary

Update CMS content to replace Sean Erick Ramones references with Joanne Ferrolino’s profile data, using her resume as the source of truth for bio/experience. Changes are limited to content files (`content/index.yml`, `content/about.yml`) and configuration (`app/app.config.ts`), plus a manual-assets checklist for hero images and profile photos.

## Technical Context

<!--
  ACTION REQUIRED: Replace the content in this section with the technical details
  for the project. The structure here is presented in advisory capacity to guide
  the iteration process.
-->

**Language/Version**: TypeScript 5.x, Vue 3, Nuxt 4.1  
**Primary Dependencies**: Nuxt 4, `@nuxt/content`, `@nuxt/ui`, `motion-v`, `nuxt-og-image`  
**Storage**: File-based content under `content/` and static assets in `public/`  
**Testing**: ESLint (`pnpm lint`), TypeScript (`pnpm typecheck`)  
**Target Platform**: Web app deployed to Cloudflare Pages  
**Project Type**: Web application  
**Performance Goals**: N/A (content-only update)  
**Constraints**: Content-only changes; pnpm-only workflows; schema-validated content  
**Scale/Scope**: Small content update across homepage/about/profile areas

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- Constitution file contains placeholders and defines no enforceable gates. Proceeding with no additional constraints beyond the spec.

## Project Structure

### Documentation (this feature)

```text
specs/[###-feature]/
├── plan.md              # This file (/speckit.plan command output)
├── research.md          # Phase 0 output (/speckit.plan command)
├── data-model.md        # Phase 1 output (/speckit.plan command)
├── quickstart.md        # Phase 1 output (/speckit.plan command)
├── contracts/           # Phase 1 output (/speckit.plan command)
├── manual-updates.md    # Manual asset checklist (this feature)
└── tasks.md             # Phase 2 output (/speckit.tasks command - NOT created by /speckit.plan)
```

### Source Code (repository root)
<!--
  ACTION REQUIRED: Replace the placeholder tree below with the concrete layout
  for this feature. Delete unused options and expand the chosen structure with
  real paths (e.g., apps/admin, packages/something). The delivered plan must
  not include Option labels.
-->

```text
app/
├── components/
│   └── landing/
├── pages/
└── layouts/

content/
├── index.yml
├── about.yml
├── blog.yml
├── projects.yml
└── blog/

public/
├── documents/
├── hero/
├── avatars/
└── about/

scripts/
```

**Structure Decision**: Web application using Nuxt Content with file-based CMS (`content/`) and static assets in `public/`.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| [e.g., 4th project] | [current need] | [why 3 projects insufficient] |
| [e.g., Repository pattern] | [specific problem] | [why direct DB access insufficient] |

## Phase 0: Research

- Output: [specs/001-joanne-profile-update/research.md](specs/001-joanne-profile-update/research.md)
- Findings used: content files are the source of truth for profile updates; resume and assets live in `public/`.

## Phase 1: Design & Contracts

- Data model: [specs/001-joanne-profile-update/data-model.md](specs/001-joanne-profile-update/data-model.md)
- Contracts: [specs/001-joanne-profile-update/contracts/README.md](specs/001-joanne-profile-update/contracts/README.md) (no API changes)
- Quickstart: [specs/001-joanne-profile-update/quickstart.md](specs/001-joanne-profile-update/quickstart.md)
- Manual assets checklist: [specs/001-joanne-profile-update/manual-updates.md](specs/001-joanne-profile-update/manual-updates.md)

## Constitution Check (Post-Design)

- No enforceable gates defined in the constitution template; no violations introduced.
