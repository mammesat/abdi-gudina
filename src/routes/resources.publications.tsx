import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader, Section } from "@/components/site/PageShell";

export const Route = createFileRoute("/resources/publications")({
  head: () => ({
    meta: [
      { title: "Publications — AG Union" },
      { name: "description", content: "Research, member newsletters, and educational publications from AG Union." },
      { property: "og:title", content: "AG Union Publications" },
      { property: "og:description", content: "Newsletters, research, and educational materials." },
    ],
  }),
  component: PublicationsPage,
});

const PUBS = [
  { title: "Cooperative Finance in Ethiopia: A 2025 Field Study", type: "Research", year: "2025" },
  { title: "Member Newsletter — Q2 2026", type: "Newsletter", year: "2026" },
  { title: "SACCO Governance: A Practitioner's Guide", type: "Handbook", year: "2024" },
  { title: "Financial Literacy Workbook for Members", type: "Workbook", year: "2024" },
  { title: "Impact Report: 15 Years of Cooperative Lending", type: "Report", year: "2022" },
  { title: "Member Newsletter — Q1 2026", type: "Newsletter", year: "2026" },
];

function PublicationsPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Publications"
        title="What we publish."
      />
      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PUBS.map((p) => (
            <article key={p.title} className="flex flex-col rounded-2xl border border-border bg-card p-8">
              <div className="mb-6 flex aspect-[3/4] items-end rounded-xl bg-gradient-to-br from-primary to-primary-dark p-6 text-primary-foreground">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-accent">{p.type} · {p.year}</div>
                  <div className="mt-2 text-sm font-bold leading-snug">{p.title}</div>
                </div>
              </div>
              <button className="mt-auto rounded-full bg-primary py-2.5 text-xs font-bold text-primary-foreground">
                Download →
              </button>
            </article>
          ))}
        </div>
      </Section>
    </PageShell>
  );
}
