import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageShell, PageHeader, Section } from "@/components/site/PageShell";
import { NEWS } from "@/content/site";

export const Route = createFileRoute("/news/")({
  head: () => ({
    meta: [
      { title: "News & Announcements — AG Union" },
      { name: "description", content: "Latest news, announcements, and updates from AG Union — anniversaries, assemblies, training programs, and community events." },
      { property: "og:title", content: "AG Union News" },
      { property: "og:description", content: "Latest updates from Abdi Gudina Financial Cooperatives Union." },
    ],
  }),
  component: NewsIndex,
});

function NewsIndex() {
  const tags = useMemo(() => ["All", ...Array.from(new Set(NEWS.map((n) => n.tag)))], []);
  const [tag, setTag] = useState("All");
  const items = tag === "All" ? NEWS : NEWS.filter((n) => n.tag === tag);
  const [hero, ...rest] = items;

  return (
    <PageShell>
      <PageHeader
        eyebrow="Newsroom"
        title="What's happening at the Union."
      />
      <Section>
        <div className="mb-10 flex flex-wrap gap-2">
          {tags.map((t) => (
            <button
              key={t}
              onClick={() => setTag(t)}
              className={`rounded-full border px-4 py-2 font-mono text-[11px] uppercase tracking-widest transition-colors ${
                t === tag
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-foreground/70 hover:border-accent"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {hero && (
          <Link
            to="/news/$slug"
            params={{ slug: hero.slug }}
            className="mb-16 block overflow-hidden rounded-3xl bg-primary-dark p-12 text-primary-foreground transition-transform hover:-translate-y-1 lg:p-16"
          >
            <div className="mb-6 flex gap-4 font-mono text-[10px] uppercase tracking-widest">
              <span className="text-accent">{hero.tag}</span>
              <span className="opacity-60">{hero.date}</span>
            </div>
            <h2 className="max-w-3xl text-3xl font-bold lg:text-5xl">{hero.title}</h2>
            <p className="mt-6 max-w-2xl text-lg text-primary-foreground/70">{hero.excerpt}</p>
            <span className="mt-8 inline-block text-sm font-semibold text-accent">Read article →</span>
          </Link>
        )}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((n) => (
            <article key={n.slug} className="group flex flex-col gap-4 border-t border-border pt-6">
              <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest">
                <span className="text-accent">{n.tag}</span>
                <span className="text-foreground/40">{n.date}</span>
              </div>
              <h3 className="text-xl font-bold leading-snug transition-colors group-hover:text-accent">{n.title}</h3>
              <p className="text-sm text-foreground/60">{n.excerpt}</p>
              <Link to="/news/$slug" params={{ slug: n.slug }} className="mt-auto text-xs font-semibold text-primary hover:text-accent">
                Read more →
              </Link>
            </article>
          ))}
        </div>
      </Section>
    </PageShell>
  );
}
