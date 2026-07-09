import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader, Section, SectionHead } from "@/components/site/PageShell";
import { BOARD, MANAGEMENT } from "@/content/site";

export const Route = createFileRoute("/about/governance")({
  head: () => ({
    meta: [
      { title: "Governance — AG Union" },
      { name: "description", content: "The elected board, control committee, and management team who lead AG Union on behalf of 50 member SACCOs." },
      { property: "og:title", content: "Governance at AG Union" },
      { property: "og:description", content: "Elected board, control committee, and management." },
    ],
  }),
  component: GovernancePage,
});

function Avatar({ name }: { name: string }) {
  const initials = name.split(" ").slice(-2).map((n) => n[0]).join("");
  return (
    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 font-mono text-lg font-bold text-primary">
      {initials}
    </div>
  );
}

function GovernancePage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Leadership"
        title="Elected by members. Accountable to members."
        intro="The Union is governed by an elected Board of Directors, monitored by a Control Committee, and run day-to-day by a professional management team."
      />
      <Section>
        <SectionHead eyebrow="Board of Directors" title="Elected Leadership" aside="Elected by the General Assembly for three-year terms." />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BOARD.map((p) => (
            <div key={p.name} className="flex items-start gap-5 rounded-2xl border border-border bg-card p-6">
              <Avatar name={p.name} />
              <div>
                <div className="font-bold">{p.name}</div>
                <div className="text-sm text-accent">{p.role}</div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-foreground/50">{p.tenure}</div>
              </div>
            </div>
          ))}
        </div>
      </Section>
      <Section className="bg-card">
        <SectionHead eyebrow="Management" title="Professional Team" aside="Appointed by the Board to run day-to-day operations." />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {MANAGEMENT.map((p) => (
            <div key={p.name} className="rounded-2xl border border-border bg-background p-6">
              <Avatar name={p.name} />
              <div className="mt-5 font-bold">{p.name}</div>
              <div className="text-sm text-accent">{p.role}</div>
            </div>
          ))}
        </div>
      </Section>
      <Section>
        <SectionHead eyebrow="Oversight" title="Control Committee" />
        <div className="rounded-2xl bg-primary p-10 text-primary-foreground">
          <p className="max-w-3xl text-lg">The Control Committee is an independent body of three members elected directly by the General Assembly. It audits the Union's operations, reviews the Board's decisions, and reports directly to members at each Annual General Assembly.</p>
        </div>
      </Section>
    </PageShell>
  );
}
