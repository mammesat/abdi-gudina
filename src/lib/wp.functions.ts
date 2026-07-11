/**
 * WordPress-backed content getters exposed as TanStack server functions.
 *
 * Every getter follows the same pattern:
 *   1. Try WordPress (`wp.*`)
 *   2. Adapt WP payload → the site's typed shape
 *   3. Fall back to static seed content when WP is empty or unreachable
 *
 * The rest of the app imports these functions instead of `src/content/site.ts`
 * directly — so the day a WordPress instance is connected, the frontend
 * switches to live data with zero component changes.
 */
import { createServerFn } from "@tanstack/react-start";

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

export const getNews = createServerFn({ method: "GET" }).handler(async (): Promise<SiteNews[]> => {
  const { wp, featuredImage, stripHtml } = await import("./wp.server");
  const { NEWS } = await import("@/content/site");

  const posts = await wp.posts({ per_page: 12 });
  if (!posts || posts.length === 0) return NEWS;

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
    // Static seed shape → SiteEvent
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
