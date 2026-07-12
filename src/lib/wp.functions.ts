/**
 * WordPress-backed content getters exposed as TanStack server functions.
 *
 * Every getter follows the same pattern:
 *   1. Try WordPress (`wp.*`)
 *   2. Adapt WP payload → the site's typed shape
 *   3. Fall back to static seed content when WP is empty or unreachable
 *
 * Taxonomy / CPT mapping (see wp.server.ts for the full table):
 *   posts.category "news|press|updates"        → /news
 *   CPT `event`  + ACF{starts_at,venue,...}    → /news/events
 *   CPT `policy` | `audit` | `form` | `publication`
 *     + taxonomy `resource_category`           → /resources (unified)
 *   CPT `sacco`  + ACF{logo,location,members}  → SACCO marquee
 *   CPT `report` + ACF{year,pages,file_size,pdf_url} → /resources (annual reports)
 */
import { createServerFn } from "@tanstack/react-start";
import type { ResourceKind } from "@/content/site";

export type SiteNews = {
  slug: string;
  date: string;
  category: string;
  title: string;
  excerpt: string;
  image?: string;
};

export type SiteEvent = {
  slug: string;
  date: string;
  title: string;
  location: string;
  tag: string;
  audience?: string;
};

export type SiteReport = {
  year: string;
  title: string;
  pages: number;
  size: string;
  pdfUrl?: string;
};

export type SiteResource = {
  slug: string;
  kind: ResourceKind;
  title: string;
  category: string;
  year: string;
  updated: string;
  summary: string;
  fileSize?: string;
  filePages?: number;
  fileUrl?: string;
  body: string[];
  fields: { label: string; value: string }[];
};

export type SiteSacco = {
  slug: string;
  name: string;
  location: string;
  members?: number;
  founded?: number;
  logo?: string;
};

const KIND_TO_CPT: Record<ResourceKind, string> = {
  policy: "policy",
  audit: "audit",
  form: "form",
  publication: "publication",
};

export const getNews = createServerFn({ method: "GET" }).handler(async (): Promise<SiteNews[]> => {
  const { wp, featuredImage, stripHtml } = await import("./wp.server");
  const { NEWS } = await import("@/content/site");

  const posts = await wp.posts({ per_page: 12 });
  if (!posts || posts.length === 0) {
    return NEWS.map((n) => ({
      slug: n.slug,
      date: n.date,
      category: n.tag,
      title: n.title,
      excerpt: n.excerpt,
    }));
  }

  return posts.map((p) => {
    const cat = p._embedded?.["wp:term"]?.[0]?.[0]?.name ?? "News";
    return {
      slug: p.slug,
      date: p.date.slice(0, 10),
      category: cat,
      title: stripHtml(p.title.rendered),
      excerpt: stripHtml(p.excerpt.rendered).slice(0, 220),
      image: featuredImage(p),
    };
  });
});

export const getEvents = createServerFn({ method: "GET" }).handler(async (): Promise<SiteEvent[]> => {
  const { wp, stripHtml } = await import("./wp.server");
  const { EVENTS } = await import("@/content/site");

  const posts = await wp.cpt("event", { per_page: 12, orderby: "date", order: "asc" });
  if (!posts || posts.length === 0) {
    return EVENTS.map((e) => ({
      slug: e.slug,
      date: e.date,
      title: e.title,
      location: e.location,
      tag: e.tag,
      audience: e.audience,
    }));
  }

  return posts.map((p) => {
    const acf = (p.acf ?? {}) as Record<string, string | undefined>;
    return {
      slug: p.slug,
      date: (acf.starts_at ?? p.date).slice(0, 10),
      title: stripHtml(p.title.rendered),
      location: acf.venue ?? acf.city ?? "TBA",
      tag: p._embedded?.["wp:term"]?.[0]?.[0]?.name ?? "Event",
      audience: acf.audience,
    };
  });
});

export const getReports = createServerFn({ method: "GET" }).handler(async (): Promise<SiteReport[]> => {
  const { wp, stripHtml } = await import("./wp.server");
  const { REPORTS } = await import("@/content/site");

  const posts = await wp.cpt("report", { per_page: 24, orderby: "date", order: "desc" });
  if (!posts || posts.length === 0) return REPORTS;

  return posts.map((p) => {
    const acf = (p.acf ?? {}) as Record<string, string | number | undefined>;
    return {
      year: String(acf.year ?? p.date.slice(0, 4)),
      title: stripHtml(p.title.rendered),
      pages: Number(acf.pages ?? 0),
      size: String(acf.file_size ?? "—"),
      pdfUrl: acf.pdf_url ? String(acf.pdf_url) : undefined,
    };
  });
});

/**
 * Resources — a unified feed across four CPTs. `kind` filters to a single
 * CPT; omitting it returns all four merged and sorted by `updated` desc.
 */
export const getResources = createServerFn({ method: "GET" })
  .inputValidator((input?: { kind?: ResourceKind }) => input ?? {})
  .handler(async ({ data }): Promise<SiteResource[]> => {
    const { wp, stripHtml } = await import("./wp.server");
    const { RESOURCES } = await import("@/content/site");

    const kinds: ResourceKind[] = data.kind
      ? [data.kind]
      : ["policy", "audit", "form", "publication"];

    const merged: SiteResource[] = [];
    let anyLive = false;

    for (const kind of kinds) {
      const posts = await wp.cpt(KIND_TO_CPT[kind], { per_page: 30, orderby: "modified", order: "desc" });
      if (posts && posts.length > 0) {
        anyLive = true;
        for (const p of posts) {
          const acf = (p.acf ?? {}) as Record<string, unknown>;
          const category = p._embedded?.["wp:term"]?.[0]?.[0]?.name ?? "General";
          const fieldsAcf = Array.isArray(acf.fields) ? (acf.fields as { label: string; value: string }[]) : [];
          merged.push({
            slug: p.slug,
            kind,
            title: stripHtml(p.title.rendered),
            category,
            year: String(acf.year ?? p.date.slice(0, 4)),
            updated: p.modified.slice(0, 10),
            summary: stripHtml(p.excerpt.rendered).slice(0, 260),
            fileSize: acf.file_size ? String(acf.file_size) : undefined,
            filePages: acf.pages ? Number(acf.pages) : undefined,
            fileUrl: acf.file_url ? String(acf.file_url) : undefined,
            body: stripHtml(p.content.rendered).split(/\n{2,}/).filter(Boolean),
            fields: fieldsAcf,
          });
        }
      }
    }

    if (!anyLive) {
      // Fall back to static seed, filtered by kind if provided.
      return RESOURCES.filter((r) => (data.kind ? r.kind === data.kind : true));
    }
    return merged.sort((a, b) => (a.updated < b.updated ? 1 : -1));
  });

export const getResource = createServerFn({ method: "GET" })
  .inputValidator((input: { kind: ResourceKind; slug: string }) => input)
  .handler(async ({ data }): Promise<SiteResource | null> => {
    const { wp, stripHtml } = await import("./wp.server");
    const { RESOURCES } = await import("@/content/site");

    const posts = await wp.cptOne(KIND_TO_CPT[data.kind], data.slug);
    const post = posts?.[0];
    if (post) {
      const acf = (post.acf ?? {}) as Record<string, unknown>;
      const category = post._embedded?.["wp:term"]?.[0]?.[0]?.name ?? "General";
      const fieldsAcf = Array.isArray(acf.fields) ? (acf.fields as { label: string; value: string }[]) : [];
      return {
        slug: post.slug,
        kind: data.kind,
        title: stripHtml(post.title.rendered),
        category,
        year: String(acf.year ?? post.date.slice(0, 4)),
        updated: post.modified.slice(0, 10),
        summary: stripHtml(post.excerpt.rendered).slice(0, 260),
        fileSize: acf.file_size ? String(acf.file_size) : undefined,
        filePages: acf.pages ? Number(acf.pages) : undefined,
        fileUrl: acf.file_url ? String(acf.file_url) : undefined,
        body: stripHtml(post.content.rendered).split(/\n{2,}/).filter(Boolean),
        fields: fieldsAcf,
      };
    }

    const seed = RESOURCES.find((r) => r.kind === data.kind && r.slug === data.slug);
    return seed ?? null;
  });

/**
 * SACCO directory + logos. When WP is unreachable, returns static seed
 * (without images, so the marquee falls back to typographic chips).
 */
export const getSaccos = createServerFn({ method: "GET" }).handler(async (): Promise<SiteSacco[]> => {
  const { wp, stripHtml } = await import("./wp.server");
  const { SACCO_BRANDS } = await import("@/content/site");

  const posts = await wp.cpt("sacco", { per_page: 60, orderby: "title", order: "asc" });
  if (!posts || posts.length === 0) {
    return SACCO_BRANDS.map((s, i) => ({
      slug: s.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || `sacco-${i}`,
      name: s.name,
      location: s.location,
      members: s.members,
      founded: s.founded,
      logo: s.logo,
    }));
  }

  return posts.map((p) => {
    const acf = (p.acf ?? {}) as Record<string, string | number | undefined>;
    // ACF `logo` may be a URL string OR a WP media object; support both,
    // and fall back to the post's featured image.
    let logo: string | undefined;
    const rawLogo = acf.logo;
    if (typeof rawLogo === "string" && rawLogo) logo = rawLogo;
    else if (rawLogo && typeof rawLogo === "object" && "url" in (rawLogo as Record<string, unknown>)) {
      logo = String((rawLogo as { url?: string }).url ?? "");
    }
    if (!logo) logo = p._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

    return {
      slug: p.slug,
      name: stripHtml(p.title.rendered),
      location: String(acf.location ?? ""),
      members: acf.members ? Number(acf.members) : undefined,
      founded: acf.founded ? Number(acf.founded) : undefined,
      logo,
    };
  });
});
