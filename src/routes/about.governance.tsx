import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHeader, Section, SectionHead } from "@/components/site/PageShell";
import { BOARD, MANAGEMENT, COMMITTEE } from "@/content/site";

export const Route = createFileRoute("/about/governance")({
  head: () => ({
    meta: [
      { title: "Governance & Structure — AG Union" },
      { name: "description", content: "How AG Union is organized: General Assembly, elected Board, independent Control Committee, and the professional management team." },
      { property: "og:title", content: "Governance & Structure" },
      { property: "og:description", content: "Elected board, control committee, management, and how they connect." },
    ],
  }),
  component: GovernancePage,
});

function Avatar({ name }: { name: string }) {
  const initials = name.split(" ").slice(-2).map((n) => n[0]).join("");
  return (
    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary/10 font-mono text-base font-bold text-primary">
      {initials}
    </div>
  );
}

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
      <div className="font-mono text-xs uppercase tracking-widest text-accent">{sub}</div>
      <div className="mt-1 font-bold">{title}</div>
    </div>
  );
}

function PersonCard({ p }: { p: (typeof BOARD)[number] }) {
  return (
    <Link
      to="/about/people/$slug"
      params={{ slug: p.slug }}
      className="group flex items-start gap-5 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-accent"
    >
      <Avatar name={p.name} />
      <div className="min-w-0">
        <div className="font-bold group-hover:text-accent">{p.name}</div>
        <div className="text-sm text-accent">{p.role}</div>
        {p.tenure && <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-foreground/50">{p.tenure}</div>}
        <span className="mt-3 inline-block text-xs font-semibold text-primary group-hover:text-accent">View profile →</span>
      </div>
    </Link>
  );
}

function GovernancePage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Governance & Structure"
        title="Elected by members. Accountable to members."
        intro="The General Assembly of member SACCOs sits at the top. Every other body — Board, Control Committee, Management — answers upward to members."
      />

      <Section>
        <SectionHead eyebrow="Organizational Structure" title="How the Union is organized" aside="From member SACCOs up to the General Assembly and down through the operational departments." />
        <div className="mx-auto max-w-3xl space-y-4">
          <Node title="General Assembly" sub="Top authority · 50 SACCOs" />
          <div className="mx-auto h-6 w-px bg-primary" />
          <div className="grid gap-4 sm:grid-cols-2">
            <Node title="Board of Directors" sub="Governance" />
            <Node title="Control Committee" sub="Independent Oversight" />
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

      <Section className="bg-card">
        <SectionHead eyebrow="Board of Directors" title="Elected leadership" aside="Elected by the General Assembly for three-year terms. Tap a member to view their profile." />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BOARD.map((p) => <PersonCard key={p.slug} p={p} />)}
        </div>
      </Section>

      <Section>
        <SectionHead eyebrow="Management" title="Professional team" aside="Appointed by the Board to run day-to-day operations." />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {MANAGEMENT.map((p) => <PersonCard key={p.slug} p={p} />)}
        </div>
      </Section>

      <Section className="bg-card">
        <SectionHead eyebrow="Independent Oversight" title="Control Committee" aside="Three members elected directly by the General Assembly. They audit operations and report to members." />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {COMMITTEE.map((p) => <PersonCard key={p.slug} p={p} />)}
        </div>
      </Section>
    </PageShell>
  );
}
