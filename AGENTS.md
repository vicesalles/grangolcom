# AGENTS.md — grangol.com

## Purpose

This repository contains **grangol.com**, the public website for **Gran Gol**.

The role of an agent working in this repository is to **maintain, improve, and extend the website without unnecessarily changing its architecture, visual identity, localization model, or content structure**.

The site is a **multilingual Next.js application**.

Before making changes, inspect the repository and understand the existing implementation.  
Do not assume conventions, libraries, routing strategies, folder structures, or localization mechanisms that are not already present.

---

## Core Principles

1. **Inspect before changing**
   - Read the relevant files before proposing or implementing changes.
   - Reuse existing patterns whenever possible.
   - Do not introduce a second way of doing something that the project already solves.

2. **Prefer minimal, local changes**
   - Avoid broad refactors unless explicitly requested.
   - Do not reorganize folders, rename components, replace libraries, or rewrite working systems just to make them “cleaner”.
   - Preserve working behavior outside the requested scope.

3. **Do not invent project context**
   - The repository is the primary source of truth for implementation details.
   - If documentation and code disagree, report the inconsistency before making a destructive decision.
   - Do not fabricate routes, translation keys, assets, APIs, metadata, or game information.

4. **Preserve the existing visual language**
   - New UI should look like it belongs to the current site.
   - Reuse existing typography, spacing, colors, components, effects, and responsive patterns.
   - Avoid introducing a new design system unless explicitly requested.

5. **Keep the website lightweight**
   - Avoid unnecessary dependencies.
   - Prefer native Next.js / React / CSS capabilities when they are already sufficient.
   - Do not add client-side JavaScript where server-rendered or static solutions are adequate.

---

## Localization

The website is multilingual. Localization is a first-class requirement.

### Rules

- Never hardcode user-facing text in a component if the project already has a localization system for that content.
- Reuse the existing translation infrastructure and naming conventions.
- When adding a new user-facing string, add the corresponding localization entry for every currently supported locale unless explicitly told otherwise.
- Do not silently fall back to English for missing translations unless that is already the site's established behavior.
- Keep translation keys semantic and stable.
- Avoid using the visible English text itself as a translation key unless the project already follows that convention.
- Do not mix presentation decisions with translation content.
  - Capitalization, layout, styling, truncation, and emphasis should generally be handled by the UI.
  - Translation files should contain natural text for the locale.

### Translation quality

Translations should sound native rather than mechanically literal.

For football terminology:
- Use authentic football language for the target locale.
- Prefer **football** terminology over US-centric **soccer** terminology.
- Preserve the tone and identity of Gran Gol.

Proper names and branded terms should not be translated unless the project explicitly defines localized forms.

### Adding or changing locales

Do not add, remove, merge, or rename locales unless explicitly requested.

If locale routing, metadata, sitemap generation, alternate-language links, or canonical URLs are affected, verify all of them together.

---

## Next.js

Follow the version and architecture already present in the repository.

Do not assume whether the project uses:
- App Router or Pages Router;
- Server Components or Client Components;
- static generation, SSR, ISR, or client fetching;
- a specific i18n library;
- a specific CSS or component framework.

Inspect first.

### General guidance

- Prefer Server Components when the current architecture supports them and client interactivity is not required.
- Add `"use client"` only where needed.
- Avoid moving logic to the client without a clear reason.
- Preserve caching and rendering behavior unless the task requires changing it.
- Use `next/image`, `next/link`, metadata APIs, and other Next.js primitives consistently with the existing codebase.
- Do not bypass established abstractions for routing, translations, metadata, assets, or data fetching.

---

## SEO and Metadata

grangol.com is a public product website. SEO changes can have broad consequences.

When modifying pages, routes, locale handling, or metadata, verify where applicable:

- page title;
- meta description;
- canonical URL;
- Open Graph metadata;
- Twitter/social metadata;
- alternate locale URLs / `hreflang`;
- sitemap;
- robots directives;
- structured data;
- indexability.

Do not generate duplicate indexable URLs for the same content.

Do not change canonicalization or locale URL strategy casually.

---

## Content

Gran Gol is a football card battler.

When editing copy:
- preserve the established product positioning;
- do not invent features;
- do not promise release dates, platforms, modes, pricing, availability, or functionality unless supported by the repository or explicitly supplied by the user;
- avoid generic marketing filler;
- keep wording concise and specific.

When game facts are unclear, treat existing website copy and project-provided content as authoritative and flag contradictions.

---

## Components

Before creating a new component:

1. Search for an existing component with the same or similar purpose.
2. Prefer extending or composing existing components.
3. Create a new component only when it represents a genuinely reusable or isolated concern.

Avoid:
- giant page components;
- unnecessary abstraction;
- one-use wrappers with no semantic value;
- duplicated responsive logic;
- duplicated localization logic;
- duplicated animation or styling patterns.

---

## Styling

Follow the styling approach already used by the repository.

Do not introduce a new styling system without explicit approval.

When changing styles:
- preserve responsive behavior;
- check mobile and desktop layouts;
- avoid arbitrary pixel fixes when an existing layout rule can solve the issue;
- avoid unnecessary global CSS;
- keep visual changes scoped.

Do not “redesign” adjacent sections unless requested.

---

## Assets

Reuse existing asset organization and loading conventions.

Before adding an asset:
- check whether an equivalent asset already exists;
- use the existing naming convention;
- place it in the established directory;
- optimize it appropriately for the web.

Do not rename or relocate large sets of assets unless explicitly requested.

When replacing an asset, verify all references before removing the old file.

---

## Accessibility

Do not regress accessibility.

Where relevant:
- use semantic HTML;
- preserve keyboard navigation;
- provide meaningful alt text;
- avoid using images as text;
- maintain reasonable contrast;
- associate labels with controls;
- preserve visible focus states;
- respect reduced-motion behavior if the project supports it.

Decorative images should not receive misleading descriptive alt text.

---

## Performance

Avoid regressions in Core Web Vitals and initial load performance.

Be especially cautious with:
- large images;
- videos;
- custom fonts;
- third-party scripts;
- animation libraries;
- client components;
- hydration-heavy UI;
- large dependencies.

Do not optimize speculatively. Measure or identify a concrete reason first.

---

## External Dependencies

Do not add a package simply because it makes an implementation easier.

Before adding a dependency:
1. confirm the repository does not already provide the capability;
2. check whether the task can be solved cleanly with existing tools;
3. consider bundle size and maintenance cost.

Never replace a core dependency or framework library without explicit instruction.

---

## Environment and Secrets

Never expose secrets to client-side code.

Do not:
- commit `.env` files containing secrets;
- print secrets in logs;
- move server-only environment variables into `NEXT_PUBLIC_*`;
- hardcode API keys, tokens, credentials, or private endpoints.

If an environment variable is needed, follow the repository's existing naming and configuration conventions.

---

## Safe Editing Workflow

For each task:

1. Identify the requested outcome.
2. Inspect the relevant implementation.
3. Determine the smallest coherent change.
4. Implement using existing patterns.
5. Check for localization impact.
6. Check responsive impact.
7. Check SEO impact when routes or public page content change.
8. Run the relevant validation commands available in the repository.
9. Review the diff for unrelated changes.

Do not leave debugging code, dead code, temporary assets, or commented-out experiments behind.

---

## Validation

Use the project's existing scripts and tooling.

When available, run the relevant subset of:
- lint;
- type checking;
- tests;
- production build.

Do not invent command names. Inspect `package.json` first.

A successful development server is not sufficient validation for changes that affect production builds, routing, metadata, or static generation.

If a validation step cannot be run, state that clearly.

---

## Refactors

Refactoring is allowed when necessary to complete the requested task safely, but it should remain proportional.

Before a broad refactor:
- identify why the current structure blocks the requested change;
- preserve public behavior;
- avoid combining unrelated cleanup with functional changes.

Do not perform repository-wide “cleanup” opportunistically.

---

## Git / Version Control

Keep changes focused and reviewable.

Do not:
- rewrite history;
- delete unrelated work;
- revert changes you did not create unless explicitly instructed;
- include unrelated formatting churn.

If the working tree already contains unrelated modifications, preserve them.

---

## When Something Is Ambiguous

Prefer investigation over guessing.

If the repository provides enough evidence to make a safe choice, follow the existing pattern.

If multiple materially different implementations are possible and the choice affects architecture, public behavior, localization strategy, SEO, or content semantics, explain the ambiguity before making a destructive assumption.

---

## Definition of Done

A task is complete when:

- the requested behavior is implemented;
- existing behavior outside the scope is preserved;
- user-facing text follows the localization system;
- responsive behavior remains correct;
- relevant SEO behavior is preserved;
- no unnecessary dependencies or architecture changes were introduced;
- relevant checks pass, or any inability to run them is reported;
- the final diff contains no unrelated changes.

---

## Agent Reporting

At the end of a task, provide a concise report containing:

- what changed;
- which files were affected;
- any important implementation decision;
- validation performed;
- any unresolved issue or risk.

Do not produce a long narrative unless explicitly requested.
