# STATUS.md

## Snapshot

- 2026-03-16 13:04 CET — Implemented a React-based registration page with static form data and integrated it into app-level path rendering.

## What changed in the last session

- 2026-03-16 13:04 CET — Added `src/RegisterPage.tsx` with static registration UI (email, username, first name, last name, login prompt, submit button) using Tailwind utility classes.
- 2026-03-16 13:04 CET — Updated `src/main.tsx` to use a small pathname route table (`/` -> `App`, `/register` -> `RegisterPage`) plus alias support for `/register.html`.
- 2026-03-16 13:04 CET — Updated `src/layout/Header.tsx` Join link from `/register.html` to `/register`.
- 2026-03-16 13:04 CET — Removed unused `./App.css` import from `src/App.tsx` and centralized global stylesheet imports in `src/main.tsx`.

## Current state (source of truth)

- Home page renders at `/`.
- Registration page renders at `/register` with static data and shared header/layout styling.
- Legacy path `/register.html` is accepted and routed to the same React registration page via alias mapping in `main.tsx`.
- No routing dependency was added; app still uses a lightweight manual route table.
- `pnpm build` succeeds.

## Decisions made

- 2026-03-16 13:04 CET — Chose manual path-based rendering over React Router to keep complexity low for current course scope.
- 2026-03-16 13:04 CET — Kept changes minimal and compositional by introducing a dedicated page component rather than modifying static `public/register.html`.
- 2026-03-26 13:30 CET — The project will use React Form Hook + Zod to handle the apps forms. It's overkill for such a small project, but more aligned with handling more complicated forms via a reusable pattern with minimal maintenance overhead.

## Open questions / blockers

## Next session first steps (ordered)

1. Add next planned static pages using the same route-table pattern.
2. Decide whether to keep accepting legacy `.html` paths as aliases.
3. Add a `NotFoundPage` to make unknown-path behavior explicit.

## References

- `src/RegisterPage.tsx`
- `src/main.tsx`
- `src/layout/Header.tsx`

## Risks / watchouts

- The manual route table is intentionally minimal; as routes grow (dynamic params, nested layouts, guarded pages), maintainability may decline and React Router may become preferable.
- `public/index.html` and `public/register.html` still reference `index.css` and `App.css`; Vite build warns those files do not exist at build time for those static documents.
- **Tech Debt:** Unknown path behavior is not explicitly handled. Add a `NotFoundPage` to make unknown-path behavior explicit.
