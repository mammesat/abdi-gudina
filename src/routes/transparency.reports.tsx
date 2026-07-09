import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader, Section } from "@/components/site/PageShell";
import { REPORTS } from "@/content/site";

export const Route = createFileRoute("/transparency/reports")({
  head: () => ({
    meta: [
      { title: "Annual Reports — AG Union" },
      { name: "description", content: "Download AG Union's audited annual reports from 2021 through 2025." },
      { property: "og:title", content: "Annual Reports" },
      { property: "og:description", content: "Five years of audited annual reports." },
    ],
  }),
  component: ReportsPage,
});

function ReportsPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Publications"
        title="Annual reports."
        intro="Each report contains the audited financial statements, member statistics, governance updates, and strategic outlook for the year."
      />
      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {REPORTS.map((r) => (
            <article key={r.year} className="flex flex-col rounded-2xl border border-border bg-card p-8">
              <div className="mb-6 flex items-start justify-between">
                <div className="font-mono text-4xl font-extrabold text-accent">{r.year}</div>
                <div className="rounded-full bg-primary/10 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-primary">PDF</div>
              </div>
              <h3 className="mb-3 text-lg font-bold">{r.title}</h3>
              <div className="mb-6 font-mono text-xs text-foreground/50">{r.pages} pages · {r.size}</div>
              <button
                type="button"
                className="mt-auto rounded-full bg-primary py-3 text-xs font-bold text-primary-foreground transition-colors hover:bg-primary-dark"
              >
                Download PDF ↓
              </button>
            </article>
          ))}
        </div>
      </Section>
    </PageShell>
  );
}
