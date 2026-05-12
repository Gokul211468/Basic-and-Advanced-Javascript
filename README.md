# JavaScript curriculum

Materials for a full JavaScript track for beginners through advanced topics, organized as interactive browser-based practice pages.

## Live demo

**Click here to view:** https://gokul211468.github.io/Basic-and-Advanced-Javascript/

Explore all 13 days of interactive lessons, hands-on tasks, and homework exercises directly in your browser using the Curriculum panel on the right sidebar.

**Local setup:** You can also open `index.html` in your browser locally (double-click or "Open with…" from your editor).

## Browser practice pages

Locally, open **`index.html`** in your browser (double-click or "Open with…" from your editor). Use the **Curriculum** panel on the right to jump between days and pages.

Each published practice day has:

- **`lesson.html`** — Topics and examples you can read and try in DevTools.
- **`hands-on.html`** — Short tasks for class time.
- **`homework.html`** — Take-home practice.

Scripts live next to the HTML under `day-N/js/`. Shared styling is **`shared/css/style.css`**. Each page includes a **`page-shell`** grid and the **Curriculum** links are plain HTML in `<aside class="site-outline">` (no script)—duplicate/update that block on every page when you add a day.

To add another practice day: create `day-N/html/` and `day-N/js/` from an existing day, then **edit the Curriculum `<aside>` on every HTML page** (`index.html` and each `day-*/html/*.html`) so the new day appears with correct `href`s, `<details open>` on the day being viewed, and **`aria-current="page"`** on the active link only.

## What the course covers

**Foundations (Days 1–5)** — Variables and types, operators, control flow, and loops.

**Core Features (Days 6–9)** — Functions, arrays, objects, and modern syntax (destructuring, spread operator, template literals).

**Browser and Interaction (Days 10–12)** — DOM basics, events, and error handling.

**Advanced Concepts (Day 13)** — Hoisting and the Temporal Dead Zone.

## Status

✅ Foundations (Days 1–5)  
✅ Core Features (Days 6–9)  
✅ Browser and Interaction (Days 10–12)  
✅ Advanced Concepts (Day 13)

## License

Internal training materials. Not for redistribution without permission.
