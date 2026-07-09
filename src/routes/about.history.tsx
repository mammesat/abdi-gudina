import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader, Section } from "@/components/site/PageShell";
import { MILESTONES } from "@/content/site";

export const Route = createFileRoute("/about/history")({
  head: () => ({
    meta: [
      { title: "History — AG Union" },
      { name: "description", content: "From 8 founding SACCOs in 2007 to 50 member cooperatives and 12,000+ members today — the story of AG Union." },
      { property: "og:title", content: "History of AG Union" },
      { property: "og:description", content: "Milestones from 2007 to 2026." },
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

function HistoryPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Our Story"
        title="Nineteen years of cooperative finance."
        intro="What began in 2007 as a shared effort by eight SACCOs in Adama has grown into a regional financial cooperative that anchors the savings and credit needs of 12,000+ Ethiopians."
      />
      <Section>
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
        <h2 className="mb-10 text-3xl font-extrabold uppercase tracking-tighter">Founding vs Today</h2>
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
    </PageShell>
  );
}
