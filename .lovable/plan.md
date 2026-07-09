
# AG Union — Inner Pages Plan

Extends the current homepage (Modern Fintech direction, teal + gold + off-white) with dedicated routes for every section in the content brief. Each route gets its own `head()` metadata for SEO and social sharing, and reuses shared Header/Footer components extracted from `index.tsx`.

## 1. Shared Layout Refactor (do first)

Extract from `src/routes/index.tsx` into `src/components/site/`:
- `SiteHeader.tsx` — sticky nav with dropdown menus for multi-page navigation.
- `SiteFooter.tsx` — verified footer with contact, socials, quick links.
- `PageHeader.tsx` — reusable page hero (eyebrow tag, headline, sub-line, teal or off-white variants) for interior pages.
- `Section.tsx` — consistent max-w-7xl padded wrapper.
- `Stat.tsx`, `Card.tsx`, `Quote.tsx` — small primitives.

Homepage keeps its hero + bento but delegates chrome to shared components.

## 2. Route Structure

```text
src/routes/
  index.tsx                     -> /               (existing home)
  about.tsx                     -> /about          (layout with <Outlet />)
  about.index.tsx               -> /about          (Overview)
  about.history.tsx             -> /about/history
  about.vision.tsx              -> /about/vision
  about.governance.tsx          -> /about/governance
  about.structure.tsx           -> /about/structure

  saccos.tsx                    -> /saccos         (layout)
  saccos.index.tsx              -> Directory
  saccos.join.tsx               -> How to Join
  saccos.benefits.tsx           -> Membership Benefits

  services.tsx                  -> /services       (layout)
  services.index.tsx            -> Overview + 4 cards
  services.savings.tsx
  services.loans.tsx
  services.insurance.tsx
  services.investments.tsx
  services.training.tsx

  transparency.tsx              -> /transparency   (layout)
  transparency.index.tsx        -> Financial summary
  transparency.reports.tsx      -> Annual reports

  impact.tsx                    -> /impact         (layout)
  impact.index.tsx              -> Success stories grid
  impact.stats.tsx              -> Statistics

  news.tsx                      -> /news           (layout)
  news.index.tsx                -> News list
  news.$slug.tsx                -> Article detail
  news.events.tsx               -> Events
  news.gallery.tsx              -> Gallery

  resources.tsx                 -> /resources      (layout)
  resources.index.tsx           -> Downloads & forms
  resources.publications.tsx    -> Publications

  contact.tsx                   -> /contact
```

Each layout file is `component: () => <Outlet />` — no wrapper UI, just enables nested routing.

## 3. Page-by-Page Content Blueprint

Data comes from the content brief (verified numbers + realistic placeholders where marked).

**About / Overview** — intro paragraphs, Key Facts sidebar table (founded 2007, 50 SACCOs, 12,000+ members, 41.6M capital, 60.9M savings, 152M loan portfolio), founding-story block.

**About / History** — founding narrative + vertical timeline of milestones 2007 → 2026 + growth-comparison table (Founding vs Current).

**About / Vision, Mission & Values** — three side-by-side cards + ICA cooperative principles list.

**About / Governance** — board of directors grid, control committee, management team (placeholder headshots).

**About / Structure** — organizational chart section (SVG diagram of General Assembly → Board → Management → Departments).

**SACCOs / Directory** — searchable/filterable card grid of 50 SACCOs (placeholder names, location chips, member counts).

**SACCOs / How to Join** — 4-step process (Learn → Apply → Verify → Activate) + eligibility requirements.

**SACCOs / Benefits** — 6-card benefits grid (dividends, capacity training, insurance access, etc.).

**Services / Overview** — 4 primary service cards from the home + Training as fifth item, links to detail pages.

**Services / Savings** — product table (Regular / Fixed / Group), interest rates, minimum deposits, feature comparison.

**Services / Loans** — loan-product table (business, agricultural, personal), 14% rate, 50K–5M Birr range, eligibility, application flow.

**Services / Insurance** — coverage explainer, what's covered, premium calculation, FAQ.

**Services / Investments** — four investment lines (grain, agro-chemicals, real estate, vehicle rental) as image cards with descriptions.

**Services / Training** — capacity-building programs, upcoming cohorts, target audience.

**Transparency / Financial Summary** — headline metrics band + 3-year P&L / balance-sheet snapshot tables + audit statement.

**Transparency / Reports** — grid of downloadable PDF placeholders (Annual Report 2021 → 2025).

**Impact / Success Stories** — 3-column grid (Almaz Hailu highlighted + 5 placeholder stories) + featured detail block.

**Impact / Statistics** — animated counter row + growth charts (SVG bar chart of membership 2007–2026, savings, capital) + gender breakdown.

**News / Index** — filterable news list (Announcement / Governance / Community tabs), most-recent hero + 6 excerpt cards.

**News / Article** — long-form article template (title, date, tag, body, share buttons, related-articles rail).

**News / Events** — event cards (date chip, title, location, RSVP button).

**News / Gallery** — masonry photo grid.

**Resources / Downloads** — categorized list (Forms, Policies, Templates) with download buttons.

**Resources / Publications** — publication cards with cover thumbnails.

**Contact** — split layout: left = office info + hours + map placeholder for Adama, right = contact form (name / email / SACCO / message) with validation. No backend — form disables submit + shows "we'll get back to you" toast (mailto fallback).

## 4. Navigation

`SiteHeader` gets dropdown menus for the 8 top-level items using a lightweight hover/focus disclosure (no Radix menu needed at this scale). Mobile: slide-in drawer with accordion sections. All internal links use `<Link to="..." />`, not `<a href>`.

## 5. SEO

Every leaf route defines `head()` with route-specific `title`, `description`, `og:title`, `og:description`. News detail additionally sets `og:image` from article data. Root `head()` stays as the default fallback — no `og:image` there.

Add `src/routes/sitemap[.]xml.ts` listing every static route so search engines discover the new pages.

## 6. Delivery Order

1. Shared components + refactor homepage.
2. About cluster (5 pages).
3. Services cluster (6 pages).
4. SACCOs cluster (3 pages).
5. Impact + Transparency (4 pages).
6. News cluster (4 pages, including article template).
7. Resources + Contact (3 pages).
8. Sitemap + robots update.

## Technical Notes

- No backend — forms are visual only (Lovable Cloud can be added later for submissions).
- Placeholder data lives in `src/content/*.ts` typed modules so real data can be swapped in later without touching layout.
- News article route uses `news.$slug.tsx` with a static `articles` map for now; when Cloud is enabled it can migrate to a loader + query.
- No new dependencies required — Tailwind + existing tokens cover all UI. Charts are hand-authored SVG (no chart lib) to keep bundle lean.
