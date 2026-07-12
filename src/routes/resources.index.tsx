import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageShell, PageHeader, Section } from "@/components/site/PageShell";
import { getResources, type SiteResource } from "@/lib/wp.functions";
import type { ResourceKind } from "@/content/site";

export const Route = createFileRoute("/resources/")({
  head: () => ({
    meta: [
      { title: "Resource Library — AG Union" },
      { name: "description", content: "Policies, audits, forms, and publications for AG Union members and SACCOs. Filter by category or kind." },
      { property: "og:title", content: "AG Union Resource Library" },
      { property: "og:description", content: "Governance policies, audit reports, membership forms, and research publications." },
    ],
  }),
  loader: () => getResources(),
  component: ResourcesIndex,
  errorComponent: ({ error }) => (
    <PageShell>
      <Section>
        <h1 className="text-3xl font-bold">Couldn't load resources</h1>
        <p className="mt-4 text-foreground/60">{error.message}</p>
      </Section>
    </PageShell>
  ),
});

const KIND_META: Record<ResourceKind | "all", { label: string; blurb: string }> = {
  all: { label: "All", blurb: "Everything published by the Union." },
  policy: { label: "Policies", blurb: "Bylaws, credit rules, governance handbooks." },
  audit: { label: "Audits", blurb: "External audits, control-committee reports, compliance reviews." },
  form: { label: "Forms", blurb: "Membership, loan, beneficiary, and SACCO reporting templates." },
  publication: { label: "Publications", blurb: "Research, workbooks, and educational materials." },
};

function ResourcesIndex() {
  const items = Route.useLoaderData();
  const [kind, setKind] = useState<ResourceKind | "all">("all");
  const [category, setCategory] = useState<string>("All");

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(items.map((r) => r.category))).sort()],
    [items],
  );

  const filtered = useMemo(
    () =>
      items.filter(
        (r) => (kind === "all" || r.kind === kind) && (category === "All" || r.category === category),
      ),
    [items, kind, category],
  );

  return (
    <PageShell>
      <PageHeader
        eyebrow="Resource Library"
        title="Everything the Union publishes, in one place."
        intro="Governance policies, audit reports, membership forms, and research — filter by kind or by taxonomy category. Every item is backed by a WordPress custom post with ACF fields."
      />
      <Section>
        <div className="mb-6 flex flex-wrap gap-2">
          {(Object.keys(KIND_META) as (ResourceKind | "all")[]).map((k) => (
            <button
              key={k}
              onClick={() => setKind(k)}
              className={`rounded-full border px-4 py-2 font-mono text-[11px] uppercase tracking-widest transition-colors ${
                k === kind
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-foreground/70 hover:border-accent"
              }`}
            >
              {KIND_META[k].label}
            </button>
          ))}
        </div>
        <div className="mb-10 flex flex-wrap items-center gap-2">
          <span className="mr-2 font-mono text-[10px] uppercase tracking-widest text-foreground/50">
            Category
          </span>
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`rounded-full border px-3 py-1.5 text-xs transition-colors ${
                c === category
                  ? "border-accent bg-accent/10 text-accent"
                  : "border-border text-foreground/60 hover:border-accent"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <p className="text-sm text-foreground/60">No resources match this filter yet.</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((r) => (
              <ResourceCard key={`${r.kind}-${r.slug}`} r={r} />
            ))}
          </div>
        )}
      </Section>
    </PageShell>
  );
}

export function ResourceCard({ r }: { r: SiteResource }) {
  return (
    <Link
      to="/resources/$kind/$slug"
      params={{ kind: r.kind, slug: r.slug }}
      className="group flex flex-col rounded-2xl border border-border bg-card p-7 transition-colors hover:border-accent"
    >
      <div className="mb-6 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest">
        <span className="text-accent">{KIND_META[r.kind].label} · {r.category}</span>
        <span className="text-foreground/40">{r.year}</span>
      </div>
      <h3 className="mb-3 text-lg font-bold leading-snug transition-colors group-hover:text-accent">
        {r.title}
      </h3>
      <p className="mb-6 text-sm text-foreground/60">{r.summary}</p>
      <div className="mt-auto flex items-center justify-between border-t border-border pt-4 font-mono text-[10px] uppercase tracking-widest text-foreground/50">
        <span>Updated {r.updated}</span>
        {r.fileSize && <span>PDF · {r.fileSize}</span>}
      </div>
    </Link>
  );
}
