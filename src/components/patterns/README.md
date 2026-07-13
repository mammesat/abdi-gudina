# AG Union — Pattern Library

Presentation-only, content-agnostic building blocks. Every pattern is
props-driven so it can be fed from `src/content/site.ts` today and from
WordPress (CPT + ACF) tomorrow with zero component changes.

## Design tokens (see `src/styles.css`)

| Purpose        | Token                    |
|----------------|--------------------------|
| Page canvas    | `--background`           |
| Elevated card  | `--surface` / `--card`   |
| Quiet surface  | `--surface-muted`        |
| Primary text   | `--foreground`           |
| Secondary text | `--muted-foreground` (AA)|
| Divider (soft) | `--border`               |
| Divider (hard) | `--border-strong`        |
| Brand primary  | `--primary` (deep teal)  |
| Brand accent   | `--accent` (warm gold)   |
| Status         | `--info` `--success` `--warning` `--danger` |
| Elevation      | `--shadow-elev-1`, `--shadow-elev-2` |

Two shadow levels only — institutional restraint. Radius scale is derived
from `--radius: 0.75rem`.

## Component ↔ WordPress mapping

| Pattern         | WP source                                    | ACF fields                                     |
|-----------------|-----------------------------------------------|------------------------------------------------|
| `StatCard`      | ACF group on any page                         | `value, label, hint, trend`                    |
| `NewsCard`      | `post` (category: news, press, updates)       | featured image, excerpt                        |
| `EventCard`     | CPT `event`                                   | `starts_at, ends_at, venue, city, audience`    |
| `ResourceCard`  | CPT `policy` `audit` `form` `publication`     | `year, pages, file_size, pdf_url`; taxonomy `resource_category` |
| `PersonCard`    | CPT `person`                                  | `body (board/management/committee), role, tenure` |
| `SaccoCard`     | CPT `sacco`                                   | `location, members, founded, logo`             |
| `StoryCard`     | `post` (category: story, member-story)        | featured image, excerpt                        |
| `Quote`         | reusable block / ACF flexible content         | `quote, cite, role`                            |

## A11y contract

- All interactive components meet 44×44 CSS px minimum tap target.
- Focus-visible: 2px accent ring on offset — never removed.
- Icon-only controls: require `aria-label` at the call site.
- Motion: respects `prefers-reduced-motion` globally.
- Contrast: `--muted-foreground` verified WCAG AA on `--background` and
  `--surface`.

## Rules

1. Never hardcode colors in a pattern — always use tokens.
2. Never embed copy or fixture data — accept props.
3. Cards render as links via `to` + optional `params`; the link is the
   whole card for one clear tap target.
4. Add a new pattern only when a section repeats ≥2× across templates.
