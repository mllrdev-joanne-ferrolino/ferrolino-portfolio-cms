---

description: "Task list for Joanne Portfolio Profile Update"
---

# Tasks: Joanne Portfolio Profile Update

**Input**: Design documents from `/specs/001-joanne-profile-update/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: Not requested for this feature.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (US1, US2, US3)
- Include exact file paths in descriptions

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Ensure feature documentation and manual asset notes are ready for content-only implementation.

- [x] T001 Create/confirm manual asset checklist in specs/001-joanne-profile-update/manual-updates.md

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Confirm shared sources of truth before updating content.

- [x] T002 Capture approved Joanne contact links and resume file name in specs/001-joanne-profile-update/manual-updates.md

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - See Joanne’s identity and bio (Priority: P1) 🎯 MVP

**Goal**: Replace Sean Erick Ramones profile content with Joanne Ferrolino’s name, title, bio, and contact info.

**Independent Test**: Load homepage and about page; verify name/title/bio/contact details match Joanne and no Sean references remain.

### Implementation for User Story 1

- [x] T003 [US1] Update hero/profile fields, SEO, availability, and social aria-labels in content/index.yml
- [x] T004 [US1] Update experience and about summary content in content/index.yml using resume details
- [x] T005 [US1] Replace or edit testimonial quotes to remove Sean references in content/index.yml
- [x] T006 [US1] Update about page bio, contact line, and profile image alt text in content/about.yml
- [x] T007 [US1] Update global contact defaults and footer socials in app/app.config.ts

**Checkpoint**: User Story 1 is independently complete when homepage/about/metadata show Joanne details consistently.

---

## Phase 4: User Story 2 - Access Joanne’s resume (Priority: P2)

**Goal**: Ensure resume CTA links to Joanne’s PDF and uses her name in the label.

**Independent Test**: Click the homepage resume CTA and confirm the correct PDF opens/downloads.

### Implementation for User Story 2

- [x] T008 [US2] Update resume CTA link/label in content/index.yml to /documents/joanne-ferrolino-resume.pdf
- [x] T009 [US2] Verify resume asset exists at public/documents/joanne-ferrolino-resume.pdf (rename if needed)

**Checkpoint**: User Story 2 is independently complete when the resume CTA opens Joanne’s PDF.

---

## Phase 5: User Story 3 - Prepare tech stack placeholders (Priority: P3)

**Goal**: Provide a clear placeholder list for tools, languages, and frameworks for manual hero image updates.

**Independent Test**: Open the manual checklist and confirm it has labeled sections for tools/languages/frameworks.

### Implementation for User Story 3

- [x] T010 [US3] Add or refine placeholder lists for tools/languages/frameworks in specs/001-joanne-profile-update/manual-updates.md

**Checkpoint**: User Story 3 is independently complete when placeholders are documented and visible.

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Final consistency check across profile content.

- [x] T011 [P] Sweep for remaining Sean references in content/index.yml, content/about.yml, app/app.config.ts

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3+)**: All depend on Foundational phase completion
  - User stories can then proceed in parallel (if staffed)
  - Or sequentially in priority order (P1 → P2 → P3)
- **Polish (Final Phase)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 2 (P2)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 3 (P3)**: Can start after Foundational (Phase 2) - No dependencies on other stories

### Within Each User Story

- Core content updates first
- Validate content consistency after changes
- Story complete before moving to next priority

---

## Parallel Execution Examples

### User Story 1

- T003 [US1] Update hero/profile fields in content/index.yml
- T006 [US1] Update about page bio in content/about.yml
- T007 [US1] Update global contact defaults in app/app.config.ts

### User Story 2

- T008 [US2] Update resume CTA in content/index.yml
- T009 [US2] Verify resume asset in public/documents/joanne-ferrolino-resume.pdf

### User Story 3

- T010 [US3] Add placeholder lists in specs/001-joanne-profile-update/manual-updates.md

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational
3. Complete Phase 3: User Story 1
4. **STOP and VALIDATE**: Verify homepage/about/metadata show Joanne’s profile consistently

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add User Story 1 → Validate independently → Demo
3. Add User Story 2 → Validate independently → Demo
4. Add User Story 3 → Validate independently → Demo
5. Final polish sweep

---

## Notes

- [P] tasks = different files, no dependencies
- Each user story should be independently completable and testable
- Content updates must conform to schemas in content.config.ts
