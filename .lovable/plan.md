
# Institutional Refactor Plan — AG Union

Your brief spans design system, IA, every page template, a11y, SEO, performance, and CMS-readiness. That is genuinely 6–10 focused work sessions, not one turn. If I try to do it in a single pass I will produce shallow edits everywhere and break the site.

I'll break it into **6 phases**. Each phase is self-contained, ships a working site, and is small enough to actually review. You approve one phase at a time.

## Phase 1 — Design System Foundation (this turn if you approve)
The prerequisite for everything else. No visible page redesigns yet.

- Audit `src/styles.css` tokens; formalize scale for: type (display / h1–h6 / body / caption / mono), spacing (4pt), radius, elevation (max 2 shadow levels — institutional, not startup), border, focus ring.
- Institutional palette pass: keep current brand primary/accent, add semantic tokens (`--surface`, `--surface-muted`, `--border-strong`, `--text-muted`, `--info`, `--success`, `--warning`, `--danger`) with WCAG AA verified pairs.
- Build/normalize base primitives under `src/components/ui/` and `src/components/patterns/`:
  - `Container`, `Section`, `SectionHeader`, `Eyebrow`
  - `Button` variants (primary, secondary, ghost, link, destructive) + sizes with 44px min tap targets
  - `Card`, `StatCard`, `Badge`, `Alert`, `EmptyState`, `LoadingState`, `Skeleton`
  - `Breadcrumbs`, `Pagination`, `Tabs`, `Accordion`, `Table`
  - `SearchInput`, `FilterBar`, `FacetChip`
  - Content-type cards: `NewsCard`, `EventCard`, `ResourceCard`, `PersonCard`, `SaccoCard`, `StoryCard`, `Quote`
- Focus ring, skip-link, and `<VisuallyHidden>` primitives.
- Document tokens in a `src/components/ui/README.md` reference so future WP/Elementor mapping is obvious (component ↔ CPT ↔ ACF field).

## Phase 2 
Information Architecture & Navigation
- Nav audit: keep `About / SACCOs / Services / Achievements / News / Resources / Contact`. Sub-item reshuffle if any items belong elsewhere.
- Desktop **mega menu** (grouped columns + featured item slot per menu). Tablet: collapsed mega. Mobile: accessible accordion drawer with proper focus trap, ESC, and route-change close.
- Global search entry point in header (UI + typed `SearchResult` union — wired to static index now, WP REST `/search` later).
- Breadcrumbs on every non-home route from route tree.
- Footer redesign: 4-column with Quick Links / Resources / Contact + emergency / Newsletter, plus legal row (Privacy, Terms, Accessibility) and "Powered by HISABAGAR".

Homepage Section-by-Section
Rebuild each section on the new primitives. No section duplicated as one-off markup — every one uses a reusable pattern component so it maps to a WP template part.
Hero, Stats bar, About preview, Services, How-it-works, Timeline, SACCO marquee, Directory preview, Events ribbon, Stories, CTA, Awards, all rebuilt with props-driven components fed from `src/content/site.ts` (WP fallback already exists).

Template Pages
One pass per template family, each using the shared components:
- **Resources** (library + kind pages + detail): richer filtering (kind, category, year, department, file type), sort, download count slot, featured/recent/popular rails.
- **Events** (index + detail): upcoming/past tabs, calendar view, agenda, speakers, venue+map, countdown, share, add-to-calendar.
- **News** (index + detail): featured, categories, related, author, reading time, share, tags, pagination, newsletter.
- **Achievements / Stories**: story detail with chapters, outcomes, before/after.
- **People**: board / management / committee grouping, profile detail.
- **SACCO Directory**: search + region/zone/district/status filters, card/list toggle, map placeholder slot.
- **FAQ**: categories + search + accordion + related.
- **Contact**: form with proper labels, error states, success state.

## Phase 3 — Accessibility & Responsive Pass
- WCAG 2.2 AA sweep: focus visible everywhere, keyboard nav, ARIA on custom widgets, heading order, alt text audit, form-label audit, single `<main>` per route, skip link, `prefers-reduced-motion`.
- Mobile pass per template (not just shrinking): tap targets ≥44px, container padding scale, card stacking rules, table → definition-list on <640px.

SEO, Performance & CMS Handoff
- Per-route `head()` audit: unique titles/descriptions, `og:*` on leaves only, JSON-LD (Organization sitewide; Article on news; Event on events; FAQPage on FAQ; BreadcrumbList on deep routes).
- `sitemap.xml` server route, `robots.txt`, canonical audit.
- Image strategy: `aspect-*` wrappers, `loading="lazy"`, LCP preload on home hero only.
- CMS handoff doc: `docs/wordpress-mapping.md` — every component ↔ CPT ↔ ACF field ↔ taxonomy, matching the existing `wp.functions.ts` contract, so an Elementor build can mirror the React templates 1:1.

---

I will NOT touch branding colors, typography families, logo, or copy tone. Only structure, tokens, reusable components, and page composition change.
