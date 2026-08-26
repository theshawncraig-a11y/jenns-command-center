# Jenn's Command Center

A static HTML site that tracks CINC Marketing's three departments: Events
(tradeshows + webinars), Content Marketing, and Product Marketing (GTM).
Viewed by the whole marketing team; maintained by Jenn and Shawn through
Claude Code.

## How this project works

- `index.html` — the entire site (markup, styles, and rendering logic). Reads `data.js`.
- `data.js` — the single source of truth for all tracked items. **Almost every
  update request means editing this file, not index.html.**
- No build step, no server, no dependencies. Open `index.html` directly or serve statically.

## Updating data (the common task)

When the user asks to add/change/remove an event, content piece, or GTM project:

1. Edit `data.js` only. Follow the existing object shapes exactly.
2. Set `meta.updated` to today's date (YYYY-MM-DD).
3. Remove `sample: true` placeholder items once real items of that kind exist.
4. Commit with a short message describing the change and push to GitHub
   (the team views the published site, so unpushed changes are invisible to them).

Valid values:
- Event `type`: `tradeshow`, `webinar`. Event `status`: `idea`, `planning`, `confirmed`, `complete`, `cancelled`.
- Content `type`: `blog`, `white-paper`, `testimonial`, `buy-side-brief`, `press-release`.
  Content `status`: `idea`, `drafting`, `in-review`, `scheduled`, `published`.
- GTM `stage`: `past`, `current`, `future`. New current GTM projects should get the
  standard 6-item launch `checklist` (copy from an existing current project).
- Every GTM project has its own page at `#gtm/<id>` showing a timeline and the
  marketing plan. The plan lives in the project's `plan` field:
  `plan.milestones` is `[{ date, label, done? }]`; `plan.internal` (Client
  Services), `plan.sales`, and `plan.external` (existing clients & prospects)
  are deliverable arrays of `{ title, due, owner, status, links, notes }` with
  status `planned` | `in-progress` | `complete`. When the user mentions a
  deliverable for a GTM launch, put it in the right track of that project's
  plan. The page timeline is generated from milestone dates + deliverable due
  dates automatically.

Checklist items on GTM pages are clickable, but clicks only persist in that
viewer's browser (localStorage overrides). When the user asks to check off a
checklist item, set `done: true` in `data.js` — that's the permanent,
team-visible state.

All dates are `YYYY-MM-DD` strings. Every item's `links` is an array of
`{ label, url }` pointing to where assets actually live (Google Drive, Canva,
HubSpot, published URLs) — this site is the map, not the filing cabinet.

## Changing the site itself

Layout/feature changes go in `index.html`. Keep it dependency-free and
single-file. Verify in a browser before committing.

## Brand

Assets live in `Images/` (logo SVG for light backgrounds, color swatches).
Brand colors: Deep Navy `#0B1F33` (ink/headings), Ocean Blue `#22A6F2`
(the single accent — active states, links, focus), Teal `#1FD6A1`
(success/progress only). The design language is light and Apple-like:
near-white canvas, hairline borders, one accent, status shown as small
tinted dots + text (never filled pill badges), Inter typeface.
