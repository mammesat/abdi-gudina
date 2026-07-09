import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader, Section } from "@/components/site/PageShell";

export const Route = createFileRoute("/about/structure")({
  head: () => ({
    meta: [
      { title: "Organizational Structure — AG Union" },
      { name: "description", content: "How AG Union is organized: General Assembly, Board, Control Committee, and operational departments." },
      { property: "og:title", content: "Organizational Structure" },
      { property: "og:description", content: "From member SACCOs up to the General Assembly and Board." },
    ],
  }),
  component: StructurePage,
});

const DEPTS = [
  { name: "Finance & Accounting", desc: "Books, treasury, financial reporting, and audit coordination." },
  { name: "Credit & Loans", desc: "Underwriting, disbursement, and portfolio monitoring." },
  { name: "Member Services", desc: "SACCO relations, training, and support." },
  { name: "Investment Portfolio", desc: "Grain, agro-chemicals, real estate, vehicle rental." },
  { name: "Risk & Insurance", desc: "Credit-life administration and risk analytics." },
  { name: "Administration & IT", desc: "HR, procurement, digital systems, and records." },
];

function Node({ title, sub }: { title: string; sub?: string }) {
  return (
    <div className="rounded-2xl border-2 border-primary bg-background px-6 py-4 text-center">
      <div className="text-xs font-mono uppercase tracking-widest text-accent">{sub}</div>
      <div className="mt-1 font-bold">{title}</div>
    </div>
  );
}

function StructurePage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Organization"
        title="Structure of the Union."
        intro="The General Assembly of member SACCOs sits at the top. Every other body — Board, Committee, Management — answers upward to members."
      />
      <Section>
        <div className="mx-auto max-w-3xl space-y-4">
          <Node title="General Assembly" sub="Top authority · 50 SACCOs" />
          <div className="mx-auto h-6 w-px bg-primary" />
          <div className="grid gap-4 sm:grid-cols-2">
            <Node title="Board of Directors" sub="Governance" />
            <Node title="Control Committee" sub="Oversight" />
          </div>
          <div className="mx-auto h-6 w-px bg-primary" />
          <Node title="General Manager" sub="Executive" />
          <div className="mx-auto h-6 w-px bg-primary" />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {DEPTS.map((d) => (
              <div key={d.name} className="rounded-xl border border-border bg-card p-4">
                <div className="text-sm font-bold">{d.name}</div>
                <div className="mt-1 text-xs text-foreground/60">{d.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </PageShell>
  );
}
