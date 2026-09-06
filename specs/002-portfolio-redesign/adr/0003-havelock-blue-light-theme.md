# ADR 0003: Havelock-blue light theme, dark mode deferred

**Date**: 2026-09-07
**Status**: Accepted
**Deciders**: Sean (owner)

## Context

The mockup gives a color scheme in `docs/portfolio-redesign.md`: the full `havelock-blue` scale (50-950), with the key mid-shades `havelock-blue-500: #5d83d4` and `havelock-blue-600: #4969c7`. The mockup PNGs show a light-only design: white background, pastel blue, soft rounded typography, sparkle doodles. The current site uses a green primary with a dark mode toggle.

The owner chose: light-only for now, with dark mode noted as a future follow-up.

## Decision

The redesign is light-only and uses havelock blue as the primary color.

Implementation mechanism, verified against `@nuxt/ui` v4.1.0 source (`dist/runtime/plugins/colors.js`): `app.config.ts` `ui.colors.primary` maps to generated CSS variables `--ui-color-primary-{shade}: var(--color-{name}-{shade}, fallback)`. So:

1. Add the full havelock-blue scale to `app/assets/css/main.css` inside the `@theme` block:
   ```css
   --color-havelock-blue-50: #f2f6fc;
   --color-havelock-blue-100: #e1e9f8;
   --color-havelock-blue-200: #cadaf3;
   --color-havelock-blue-300: #a6c2ea;
   --color-havelock-blue-400: #7ca2de;
   --color-havelock-blue-500: #5d83d4;
   --color-havelock-blue-600: #4969c7;
   --color-havelock-blue-700: #3f57b6;
   --color-havelock-blue-800: #384895;
   --color-havelock-blue-900: #324076;
   --color-havelock-blue-950: #222949;
   ```
2. Set `app.config.ts` `ui.colors.primary: 'havelock-blue'`. Light mode resolves primary to shade 500 (`#5d83d4`); dark mode would resolve to 400, but dark mode is out of scope.
3. Remove the green primary and the stone secondary. Neutral stays neutral.

Typography: headings get a rounded display font, **Quicksand** (via `@fontsource-variable/quicksand`); body stays **Public Sans** (via `@fontsource-variable/public-sans`). Note the current site declares `--font-sans: 'Public Sans'` but never loads the font files; it renders a system fallback. The redesign loads fonts properly. A `--font-display` theme variable is added and used for headings.

## Consequences

- `app/assets/css/main.css` gets the palette, both font imports, and `--font-display`.
- `package.json` gains `@fontsource-variable/quicksand` and `@fontsource-variable/public-sans`.
- Dark mode: `ColorModeButton.vue` is removed, color mode is pinned to light (`colorMode: { preference: 'light', fallback: 'light' }` in `nuxt.config.ts`). The `.dark` selection styles in `main.css` go away.
- Dark mode is a deferred follow-up, not a deleted decision. When it comes, it needs a navy-tinted variant of every section; nothing in the mockup gives us that, so it is its own design pass.
- Existing UI components (buttons, badges, etc.) automatically pick up the new primary color.
