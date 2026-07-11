/**
 * WordPress REST client — SERVER ONLY.
 *
 * Reads three env vars (all optional; without them the client returns null and
 * callers fall back to the static content in `src/content/site.ts`):
 *
 *   WP_BASE_URL   e.g. https://cms.agunion.et            (self-hosted WP)
 *   WP_USERNAME   WordPress username (Application Passwords)
 *   WP_APP_PASSWORD  the Application Password value
 *
 * Anonymous GETs on public post types don't need credentials — creds are only
 * used for draft previews or protected fields.
 *
 * When Lovable's WordPress connector is linked instead, swap the fetch call
 * for the connector gateway (see `standard_connectors--connect`); the response
 * shapes below match the standard `/wp-json/wp/v2/*` payload either way.
 */

type WpImage = { source_url: string; alt_text?: string } | undefined;
type WpRendered = { rendered: string };

export type WpPost = {
  id: number;
  slug: string;
  date: string;
  modified: string;
  link: string;
  title: WpRendered;
  excerpt: WpRendered;
  content: WpRendered;
  featured_media: number;
  categories: number[];
  tags: number[];
  _embedded?: {
    "wp:featuredmedia"?: WpImage[];
    "wp:term"?: Array<Array<{ id: number; name: string; slug: string; taxonomy: string }>>;
    author?: Array<{ id: number; name: string; slug: string }>;
  };
  // Advanced Custom Fields payload — enabled with the ACF-to-REST plugin
  acf?: Record<string, unknown>;
  meta?: Record<string, unknown>;
};

export type WpMedia = {
  id: number;
  source_url: string;
  alt_text?: string;
  mime_type: string;
  media_details?: { filesize?: number };
};

function baseUrl(): string | null {
  const b = process.env.WP_BASE_URL?.replace(/\/+$/, "");
  return b || null;
}

function authHeader(): Record<string, string> {
  const user = process.env.WP_USERNAME;
  const pass = process.env.WP_APP_PASSWORD;
  if (!user || !pass) return {};
  const token = Buffer.from(`${user}:${pass}`).toString("base64");
  return { Authorization: `Basic ${token}` };
}

/**
 * Low-level GET against the WP REST API. Returns `null` when WordPress is not
 * configured OR when the request fails — callers use that to fall back to
 * static content instead of throwing during SSR.
 */
export async function wpGet<T>(path: string, params: Record<string, string | number> = {}): Promise<T | null> {
  const base = baseUrl();
  if (!base) return null;

  const qs = new URLSearchParams();
  for (const [k, v] of Object.entries(params)) qs.set(k, String(v));
  const url = `${base}/wp-json/wp/v2/${path.replace(/^\/+/, "")}${qs.toString() ? `?${qs}` : ""}`;

  try {
    const res = await fetch(url, {
      headers: { Accept: "application/json", ...authHeader() },
    });
    if (!res.ok) {
      console.warn(`[wp] ${res.status} ${url}`);
      return null;
    }
    return (await res.json()) as T;
  } catch (err) {
    console.warn("[wp] fetch failed", err);
    return null;
  }
}

/**
 * Convenience wrappers around commonly-used endpoints.
 *
 * TAXONOMY MAP — match these slugs when creating terms in the WP admin so
 * the frontend routes to the right sections without additional code:
 *
 *   Post categories:
 *     news, press, updates                → surfaces on /news
 *     story, member-story, success-story  → surfaces on /impact
 *
 *   Custom post types (register in WP with `show_in_rest: true`):
 *     event      → /wp-json/wp/v2/event     → /news/events/$slug
 *     report     → /wp-json/wp/v2/report    → /resources/publications
 *     policy     → /wp-json/wp/v2/policy    → /resources
 *     form       → /wp-json/wp/v2/form      → /resources
 *     audit      → /wp-json/wp/v2/audit     → /resources
 *     person     → /wp-json/wp/v2/person    → /about/people/$slug
 *     sacco      → /wp-json/wp/v2/sacco     → SACCO logo marquee + /saccos
 *
 *   ACF custom fields expected (all optional):
 *     event   → { starts_at, ends_at, venue, city, agenda[], speakers[], audience }
 *     report  → { year, pages, file_size, pdf_url }
 *     person  → { body: board|management|committee, role, tenure, focus[], education, hometown, quote }
 *     sacco   → { location, members, founded, logo }
 *     story   → { role, since, location, loan, chapters[], outcomes[], before, after }
 */
export const wp = {
  posts: (params: Record<string, string | number> = {}) =>
    wpGet<WpPost[]>("posts", { _embed: 1, per_page: 12, ...params }),
  post: (slug: string) => wpGet<WpPost[]>("posts", { slug, _embed: 1 }),
  cpt: (type: string, params: Record<string, string | number> = {}) =>
    wpGet<WpPost[]>(type, { _embed: 1, per_page: 24, ...params }),
  cptOne: (type: string, slug: string) => wpGet<WpPost[]>(type, { slug, _embed: 1 }),
};

export function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "").replace(/&nbsp;/g, " ").trim();
}

export function featuredImage(post: WpPost): string | undefined {
  return post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
}
