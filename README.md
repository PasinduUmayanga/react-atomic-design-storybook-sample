# react-atomic-design-storybook-sample

A small React sample built to **learn Storybook** through a real [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) component hierarchy — atoms → molecules → organisms → templates → pages — styled with Tailwind CSS and backed by a proper automated test suite.

[![Build status](https://ci.appveyor.com/api/projects/status/<your-appveyor-project-id>?svg=true)](https://ci.appveyor.com/project/<your-appveyor-account>/react-atomic-design-storybook-sample)
![React](https://img.shields.io/badge/React-19.3-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8.3-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.3-06B6D4?logo=tailwindcss&logoColor=white)
![Storybook](https://img.shields.io/badge/Storybook-10.6-FF4785?logo=storybook&logoColor=white)
![Vitest](https://img.shields.io/badge/Vitest-4.1-6E9F18?logo=vitest&logoColor=white)
![Testing Library](https://img.shields.io/badge/Testing_Library-16.3-E33332?logo=testinglibrary&logoColor=white)

> The AppVeyor badge above uses a placeholder project id/account — after you link this repo on [appveyor.com](https://www.appveyor.com/), replace `<your-appveyor-project-id>` and `<your-appveyor-account>` with the values from your project's **Badges** settings page.

## Tech stack

| Tool | Purpose |
| --- | --- |
| [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) | UI library and type safety |
| [Vite](https://vite.dev/) | Dev server and build tool |
| [Tailwind CSS v4](https://tailwindcss.com/) | Utility-first styling (via `@tailwindcss/vite`, no PostCSS config needed) |
| [Storybook 10](https://storybook.js.org/) | Isolated component development, documentation, and interaction testing |
| [Vitest](https://vitest.dev/) + [React Testing Library](https://testing-library.com/react) | Unit/component tests |
| [AppVeyor](https://www.appveyor.com/) | CI: dependency caching, build, and test on every push |

## Getting started

```bash
npm install        # install dependencies
npm run dev         # start the app at http://localhost:5173
npm run storybook   # start Storybook at http://localhost:6006
npm run build        # type-check and build the app for production
npm run build-storybook  # build a static Storybook site
```

## Project structure (Atomic Design)

```
src/
  components/
    atoms/        # Button, Input, Text — smallest, single-purpose building blocks
    molecules/     # FormField, Card — atoms composed together
    organisms/      # Header — molecules/atoms composed into a page section
    templates/       # PageTemplate — page layout with content "slots", no real data
  pages/
    HomePage/         # A template filled with real content — what App.tsx renders
  test/
    setup.ts            # Vitest + Testing Library global test setup
```

Every component folder follows the same shape:

```
ComponentName/
  ComponentName.tsx          # the component
  ComponentName.stories.tsx  # Storybook stories
  ComponentName.test.tsx     # Vitest + React Testing Library tests
  index.ts                   # public exports
```

## Testing

This project has two, separate test suites, both run by Vitest:

- **`npm run test`** — plain component/unit tests (`*.test.tsx`) using React Testing Library in `jsdom`. Fast, no browser needed — this is what runs in CI (`appveyor.yml`).
- **`npm run test:storybook`** — runs every Storybook **story** as a test in a real headless Chromium browser (via `@storybook/addon-vitest`), including the `play` function interaction tests described below. This is a local/optional extra — it needs Playwright's browser binaries (installed automatically the first time you run `npx storybook init`, or via `npx playwright install chromium`) and is intentionally **not** run in CI here, to keep the pipeline fast and dependency-free. `npm run test:all` runs both suites together.
- **`npm run test:coverage`** — unit tests with a v8 coverage report.

## Storybook: how to use it & what this project teaches

Storybook lets you develop, preview, and document one component at a time, outside of the full app. Run `npm run storybook` and open `http://localhost:6006` — the sidebar mirrors the Atomic Design folders above (`Atoms/`, `Molecules/`, `Organisms/`, `Templates/`, `Pages/`).

Each `*.stories.tsx` file in this repo demonstrates a specific Storybook concept:

1. **CSF3 story format** — every story file exports a default `meta` object (which component, default args, layout) and one named export per state/variant. See [`Button.stories.tsx`](src/components/atoms/Button/Button.stories.tsx).
2. **Controls & `argTypes`** — the Controls panel lets you tweak a component's props live in the browser. `Button.stories.tsx` configures `variant`/`size` as dropdowns instead of free text.
3. **Autodocs** — `tags: ['autodocs']` on every `meta` auto-generates a full documentation page (props table, description, all stories) from the component and its TypeScript types — no separate `.mdx` file needed.
4. **Actions addon** — wrapping an event-handler prop in `fn()` (e.g. `args: { onClick: fn() }`) logs every call to the Actions panel, so you can see a component "work" without wiring up real state. See [`Header.stories.tsx`](src/components/organisms/Header/Header.stories.tsx).
5. **Composing stories** — [`Card.stories.tsx`](src/components/molecules/Card/Card.stories.tsx) imports `Button`'s own `Primary` story and reuses its `args`, instead of re-declaring button props — composed examples stay in sync with the atom they're built from.
6. **Play functions & the Interactions panel** — a story's `play` function scripts real user interaction (`userEvent.click`, `userEvent.type`) with assertions (`expect`), shown step-by-step in the Interactions panel. See `ClickInteraction` in [`Button.stories.tsx`](src/components/atoms/Button/Button.stories.tsx) or `TypingInteraction` in [`Input.stories.tsx`](src/components/atoms/Input/Input.stories.tsx). Run `npm run test:storybook` to execute every story's `play` function as an automated test.
7. **a11y addon** — every story is automatically checked for accessibility violations (contrast, missing labels, ARIA misuse); open the "Accessibility" tab in Storybook's addon panel for any story.
8. **Organizing by Atomic Design level** — each `meta.title` (e.g. `'Atoms/Button'`, `'Molecules/Card'`) places the story under that section in the sidebar, turning the sidebar itself into a map of the design system's hierarchy.
9. **`storybook dev` vs `storybook build`** — `npm run storybook` runs a live dev server with hot reload; `npm run build-storybook` produces a static `storybook-static/` site you can deploy anywhere (e.g. as living documentation for a team).

### Next steps not covered here

- Visual regression testing (e.g. [Chromatic](https://www.chromatic.com/)) — compares story screenshots across commits.
- Running `@storybook/addon-vitest` story tests in CI — requires installing Playwright's browser binaries in the pipeline; left as a local-only workflow here (see [Testing](#testing)).

## Continuous Integration

[`appveyor.yml`](appveyor.yml) runs on every push:

1. Installs Node.js and restores a cached `node_modules` (keyed on `package-lock.json`) so repeat builds skip a full reinstall.
2. `npm ci` — clean, reproducible install.
3. `npm run test:coverage` — the unit test suite.
4. `npm run build` and `npm run build-storybook` — verifies both the app and the Storybook site build cleanly.
