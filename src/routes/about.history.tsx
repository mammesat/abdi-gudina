import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHeader, Section, SectionHead } from "@/components/site/PageShell";
import { MILESTONES } from "@/content/site";

export const Route = createFileRoute("/about/history")({
  head: () => ({
    meta: [
      { title: "History, Vision & Values — AG Union" },
      { name: "description", content: "Nineteen years of cooperative finance and the vision, mission, and cooperative values that guide AG Union." },
      { property: "og:title", content: "History, Vision & Values" },
      { property: "og:description", content: "From 8 founding SACCOs in 2007 to 50 today — plus the principles that guide every decision." },
    ],
  }),
  component: HistoryPage,
});

const COMPARISON = [
  ["Member SACCOs", "8", "50"],
  ["Individual Members", "~600", "12,000+"],
  ["Capital", "0.4M Birr", "41.6M Birr"],
  ["Loan Portfolio", "1.2M Birr", "152M Birr"],
  ["Staff", "3", "24"],
];

const VMV = [
  { label: "Vision", title: "A financially self-reliant cooperative movement", body: "To be Ethiopia's most trusted cooperative finance union — where every member SACCO has the capital, capacity, and confidence to serve its community for generations." },
  { label: "Mission", title: "Aggregate, protect, invest, and build capacity", body: "We aggregate member savings, protect them through insurance, invest in productive enterprise, and build the institutional capacity of every SACCO we serve." },
  { label: "Promise", title: "Member-owned, member-led, member-first", body: "Every Birr of profit returns to members as dividends, capacity investment, or expanded services. There are no outside shareholders." },
];

const PRINCIPLES = [
  "Voluntary and open membership",
  "Democratic member control",
  "Member economic participation",
  "Autonomy and independence",
  "Education, training, and information",
  "Cooperation among cooperatives",
  "Concern for community",
];

function HistoryPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Our Story · Our Values"
        title="Nineteen years, seven principles, one Union."
        intro="What began in 2007 as a shared effort by eight SACCOs in Adama has grown into a regional financial cooperative that anchors the savings and credit needs of 12,000+ Ethiopians — guided by the same cooperative principles from day one."
      />

      <Section>
        <SectionHead eyebrow="Timeline" title="Milestones since 2007" aside="Each milestone was voted by the General Assembly and audited that same fiscal year." />
        <ol className="relative border-l-2 border-accent/30 pl-8">
          {MILESTONES.map((m) => (
            <li key={m.year} className="mb-12 last:mb-0">
              <div className="absolute -left-2 h-4 w-4 rounded-full bg-accent" />
              <div className="mb-2 font-mono text-xs uppercase tracking-widest text-accent">{m.year}</div>
              <h3 className="mb-2 text-2xl font-bold">{m.title}</h3>
              <p className="max-w-2xl text-foreground/70">{m.desc}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section className="bg-card">
        <SectionHead eyebrow="Then vs Now" title="Founding vs Today" />
        <div className="overflow-hidden rounded-2xl border border-border bg-background">
          <table className="w-full text-sm">
            <thead className="bg-primary text-primary-foreground">
              <tr>
                <th className="p-4 text-left font-mono text-[11px] uppercase tracking-widest">Metric</th>
                <th className="p-4 text-left font-mono text-[11px] uppercase tracking-widest">2007</th>
                <th className="p-4 text-left font-mono text-[11px] uppercase tracking-widest">2026</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON.map((row) => (
                <tr key={row[0]} className="border-t border-border">
                  <td className="p-4 font-medium">{row[0]}</td>
                  <td className="p-4 text-foreground/60">{row[1]}</td>
                  <td className="p-4 font-bold text-accent">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section>
        <SectionHead eyebrow="What We Stand For" title="Vision, mission & promise" />
        <div className="grid gap-6 md:grid-cols-3">
          {VMV.map((c) => (
            <article key={c.label} className="rounded-2xl border border-border bg-card p-8">
              <div className="mb-4 font-mono text-[10px] uppercase tracking-widest text-accent">{c.label}</div>
              <h3 className="mb-4 text-xl font-bold leading-snug">{c.title}</h3>
              <p className="text-sm text-foreground/70">{c.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="bg-primary text-primary-foreground">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <span className="mb-4 inline-block font-mono text-[11px] uppercase tracking-widest text-accent">ICA Principles</span>
            <h2 className="text-3xl font-extrabold uppercase tracking-tighter lg:text-4xl">The seven cooperative principles.</h2>
            <p className="mt-6 text-primary-foreground/70">Adopted by the International Cooperative Alliance and embedded in every policy AG Union writes.</p>
            <Link to="/about/governance" className="mt-8 inline-block text-sm font-semibold text-accent">Meet the leadership →</Link>
          </div>
          <ol className="space-y-4">
            {PRINCIPLES.map((p, i) => (
              <li key={p} className="flex items-start gap-4 border-b border-primary-foreground/10 pb-4">
                <span className="font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-lg">{p}</span>
              </li>
            ))}
          </ol>
        </div>
      </Section>
    </PageShell>
  );
}
