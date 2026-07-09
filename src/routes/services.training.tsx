import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader, Section } from "@/components/site/PageShell";

export const Route = createFileRoute("/services/training")({
  head: () => ({
    meta: [
      { title: "Training & Capacity Building — AG Union" },
      { name: "description", content: "Training programs for SACCO board members, committee leaders, employees, and general members across the Union." },
      { property: "og:title", content: "Training Programs" },
      { property: "og:description", content: "Capacity building across the cooperative movement." },
    ],
  }),
  component: TrainingPage,
});

const PROGRAMS = [
  { title: "Cooperative Governance", audience: "Board & Committee Members", duration: "3 days", desc: "Roles, fiduciary duties, meeting discipline, conflict handling." },
  { title: "Financial Management", audience: "SACCO Accountants & Managers", duration: "5 days", desc: "Bookkeeping, monthly reporting, liquidity, and audit readiness." },
  { title: "Credit Assessment", audience: "Loan Officers", duration: "4 days", desc: "Underwriting, collateral valuation, and portfolio-quality monitoring." },
  { title: "Digital Records", audience: "SACCO Staff", duration: "2 days", desc: "Using the Union's digital member and ledger tools." },
  { title: "Member Financial Literacy", audience: "General Membership", duration: "1 day", desc: "Budgeting, savings discipline, and responsible borrowing." },
];

function TrainingPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Capacity Building"
        title="Training that scales the movement."
        intro="Strong SACCOs need strong people. Every year we deliver hundreds of training days across governance, finance, and member literacy."
      />
      <Section>
        <div className="grid gap-4 md:grid-cols-2">
          {PROGRAMS.map((p) => (
            <div key={p.title} className="rounded-2xl border border-border bg-card p-8">
              <div className="mb-4 flex flex-wrap gap-2 font-mono text-[10px] uppercase tracking-widest">
                <span className="rounded-full bg-accent/10 px-2 py-0.5 text-accent">{p.audience}</span>
                <span className="rounded-full bg-primary/10 px-2 py-0.5 text-primary">{p.duration}</span>
              </div>
              <h3 className="mb-3 text-xl font-bold">{p.title}</h3>
              <p className="text-sm text-foreground/60">{p.desc}</p>
            </div>
          ))}
        </div>
      </Section>
    </PageShell>
  );
}
