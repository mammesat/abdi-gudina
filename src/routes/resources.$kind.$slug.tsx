import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageShell, Section } from "@/components/site/PageShell";
import { getResource } from "@/lib/wp.functions";
import type { ResourceKind } from "@/content/site";

const KINDS: ResourceKind[] = ["policy", "audit", "form", "publication"];

export const Route = createFileRoute("/resources/$kind/$slug")({
  params: {
    parse: (raw) => {
      const kind = raw.kind as ResourceKind;
      if (!KINDS.includes(kind)) throw notFound();
      return { kind, slug: String(raw.slug) };
    },
    stringify: (parsed) => ({ kind: parsed.kind, slug: parsed.slug }),
  },
  loader: async ({ params }) => {
    const r = await getResource({ data: { kind: params.kind, slug: params.slug } });
    if (!r) throw notFound();
    return { r };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Resource not found — AG Union" }, { name: "robots", content: "noindex" }] };
    const { r } = loaderData;
    return {
      meta: [
        { title: `${r.title} — AG Union` },
        { name: "description", content: r.summary },
        { property: "og:title", content: r.title },
        { property: "og:description", content: r.summary },
        { property: "og:type", content: "article" },
      ],
    };
  },
  component: ResourcePage,
  notFoundComponent: () => (
    <PageShell>
      <Section>
        <h1 className="text-4xl font-extrabold">Resource not found</h1>
        <Link to="/resources" className="mt-6 inline-block text-accent">← Back to library</Link>
      </Section>
    </PageShell>
  ),
});

const KIND_LABEL: Record<ResourceKind, string> = {
  policy: "Policy",
  audit: "Audit",
  form: "Form",
  publication: "Publication",
};

function ResourcePage() {
  const { r } = Route.useLoaderData();
  return (
    <PageShell>
      <article className="border-b border-border">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <Link to="/resources" className="mb-8 inline-block font-mono text-xs uppercase tracking-widest text-accent">
            ← Resource Library
          </Link>
          <div className="mb-6 flex flex-wrap gap-4 font-mono text-[10px] uppercase tracking-widest">
            <span className="text-accent">{KIND_LABEL[r.kind]} · {r.category}</span>
            <span className="text-foreground/50">Updated {r.updated}</span>
            <span className="text-foreground/50">{r.year}</span>
          </div>
          <h1 className="text-balance text-4xl font-extrabold leading-tight lg:text-5xl">{r.title}</h1>
          <p className="mt-6 text-xl text-foreground/70">{r.summary}</p>

          {r.fields.length > 0 && (
            <dl className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
              {r.fields.map((f) => (
                <div key={f.label} className="flex flex-col gap-1 bg-card p-5">
                  <dt className="font-mono text-[10px] uppercase tracking-widest text-foreground/50">{f.label}</dt>
                  <dd className="text-sm font-bold">{f.value}</dd>
                </div>
              ))}
            </dl>
          )}

          <div className="mt-12 space-y-6 text-lg leading-relaxed text-foreground/80">
            {r.body.map((p, i) => <p key={i}>{p}</p>)}
          </div>

          {(r.fileUrl || r.fileSize) && (
            <div className="mt-12 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-border bg-card p-6">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-accent">Document</div>
                <div className="mt-1 text-sm text-foreground/70">
                  PDF{r.fileSize ? ` · ${r.fileSize}` : ""}{r.filePages ? ` · ${r.filePages} pages` : ""}
                </div>
              </div>
              <a
                href={r.fileUrl ?? "#"}
                target={r.fileUrl ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="rounded-full bg-primary px-6 py-3 text-xs font-bold uppercase tracking-wide text-primary-foreground transition-colors hover:bg-primary-dark"
              >
                {r.fileUrl ? "Download ↓" : "Contact Union to request ↓"}
              </a>
            </div>
          )}
        </div>
      </article>
    </PageShell>
  );
}
