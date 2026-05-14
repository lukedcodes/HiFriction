# HiFriction — Coding & Styling Guidelines

This document captures how we write code in this project. The goal is a small, learnable codebase: someone new should be able to read it top-to-bottom in an afternoon and know where everything lives.

If a guideline here is wrong for a specific case, break it — but say why in the commit message or PR description.

---

Rules
## Rule 1 — Think Before Coding
State assumptions explicitly. Ask rather than guess.
Push back when a simpler approach exists. Stop when confused.

## Rule 2 — Simplicity First
Minimum code that solves the problem. Nothing speculative.
No abstractions for single-use code.

## Rule 3 — Surgical Changes
Touch only what you must. Don't improve adjacent code.
Match existing style. Don't refactor what isn't broken.

## Rule 4 — Goal-Driven Execution
Define success criteria. Loop until verified.
Strong success criteria let Claude loop independently.

---

## 1. Styling philosophy

**Define styles once. Reuse classes. Keep markup quiet.**

Most pages should not need their own CSS file. They should compose a handful of shared classes plus correctly-chosen HTML elements. New CSS earns its place only when a pattern repeats or when bare-element styling can't reach.

### The three layers in `app/globals.css`

The global stylesheet has three sections, in this order:

1. **Tokens** — CSS variables on `:root` (colors, spacing scale, type scale, layout constants). Everything downstream references these. Change a token, the whole app shifts.
2. **Element defaults** — bare-tag selectors (`h1`, `p`, `a`, `button`, ...). These set the look of unstyled HTML. A page using only semantic tags should already look correct.
3. **Utility classes** — small, single-purpose classes (`.page`, `.stack`, `.muted`, `.sr-only`). These compose in markup.

### Where to put new styles — a decision ladder

When a new visual need comes up, walk down this list and stop at the first answer that fits:

1. **Can it be a token?** New color or spacing value used in more than one place → add a `--var` in section 1.
2. **Is it a default for a tag?** "All `<blockquote>`s should look like this" → element selector in section 2.
3. **Is it a small reusable concept?** ("muted text", "horizontal stack", "card") → utility/component class in section 3.
4. **Is it genuinely one-off?** Use a CSS Module (`page.module.css` next to the component). Reach for this last, not first.

### Class-naming rules

- Lowercase, hyphenated: `.feed-item`, not `.FeedItem` or `.feed_item`.
- Name by **what it is**, not what it looks like. `.muted` not `.gray`. `.measure` not `.max-width-36`.
- Prefer one class per element where possible. Two is fine. Three is a smell — usually it means a missing component class.

### What to avoid

- **No inline `style={{ ... }}`** except for genuinely dynamic values (e.g. a computed width from props). Static styling belongs in CSS.
- **No CSS-in-JS libraries** (styled-components, Emotion, etc.). Plain CSS only.
- **No utility framework** (Tailwind, etc.). We're writing CSS by hand.
- **No deep selector chains** (`.feed .item .author .name`). Flat selectors keep specificity predictable.
- **No `!important`** unless overriding a third-party style we don't control.

---

## 2. HTML

- Use **semantic elements**: `<main>`, `<nav>`, `<article>`, `<section>`, `<button>`, `<a>`. Reach for `<div>` only when no semantic tag fits.
- A `<button>` for actions, an `<a>` for navigation. Not interchangeable.
- Forms use real `<form>`, `<label>`, `<input>` — labels associated with inputs (either wrapping or via `htmlFor`).
- Headings descend in order (`h1` → `h2` → `h3`). Don't skip levels for visual size — change the size with CSS.
- Images have meaningful `alt` text, or `alt=""` if decorative. Never omit it.

---

## 3. React / Next.js

- **App Router**. Server Components by default; add `"use client"` only when a component needs hooks, browser APIs, or event handlers.
- **One component per file**, named the same as the file (`FeedItem.tsx` exports `FeedItem`).
- **Props are typed.** No `any`. If a type is genuinely unknown, use `unknown` and narrow.
- Co-locate small helpers with their component. Promote to a shared module only when used in two+ places.
- Keep components small. If a component is approaching ~150 lines, look for an extraction.

---

## 4. TypeScript

- `strict` mode stays on (already configured in `tsconfig.json`).
- Prefer `type` for object shapes and unions; `interface` only when declaration merging or `extends` is needed.
- No `as` casts that lie about the type. If you need a cast, narrow with a runtime check first.

---

## 5. File layout

```
app/
  layout.tsx            Root layout — global font, metadata
  globals.css           The single source of styling truth
  page.tsx              Routes — one folder per route
  <route>/
    page.tsx
    page.module.css     Only if styling is genuinely page-specific
components/             Shared, reusable React components
lib/                    Pure logic, helpers, types
public/                 Static assets
```

Folders appear when needed. Don't pre-create empty ones.

---

## 6. Commits & branches

- `main` is always deployable.
- Branch names: `feature/<short-name>`, `fix/<short-name>`, `docs/<short-name>`.
- Commit messages: short imperative subject (`Add feed pagination`), with a body for the *why* if non-obvious. No issue numbers in subject lines unless there's a strong reason.

---

## 7. When in doubt

Choose the option that makes the next person reading the code do less work. That's almost always the simpler one.
