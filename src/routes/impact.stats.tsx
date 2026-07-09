import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader, Section } from "@/components/site/PageShell";

export const Route = createFileRoute("/impact/stats")({
  head: () => ({
    meta: [
      { title: "Statistics — AG Union" },
      { name: "description", content: "Growth data for AG Union: members, savings, capital, and loan portfolio from 2007 to 2026." },
      { property: "og:title", content: "AG Union Statistics" },
      { property: "og:description", content: "Growth data from 2007 to 2026." },
    ],
  }),
  component: StatsPage,
});

const MEMBER_GROWTH: [string, number][] = [
  ["2007", 600], ["2010", 1400], ["2013", 3200], ["2016", 5800],
  ["2019", 10000], ["2022", 11400], ["2026", 12000],
];

const PORTFOLIO_GROWTH: [string, number][] = [
  ["2007", 1.2], ["2010", 6], ["2013", 22], ["2016", 48],
  ["2019", 82], ["2022", 118], ["2026", 152],
];

function Bar({ label, value, max, unit }: { label: string; value: number; max: number; unit: string }) {
  const pct = (value / max) * 100;
  return (
    <div>
      <div className="mb-2 flex justify-between font-mono text-xs">
        <span className="text-foreground/60">{label}</span>
        <span className="font-bold">{value.toLocaleString()}{unit}</span>
      </div>
      <div className="h-3 overflow-hidden rounded-full bg-border">
        <div className="h-full bg-accent transition-all" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

function StatsPage() {
  const memMax = Math.max(...MEMBER_GROWTH.map(([, v]) => v));
  const potMax = Math.max(...PORTFOLIO_GROWTH.map(([, v]) => v));
  return (
    <PageShell>
      <PageHeader
        eyebrow="By the Numbers"
        title="Growth measured in members and Birr."
        variant="dark"
      />
      <Section>
        <div className="mb-16 grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            ["12,000+", "Members"],
            ["50", "SACCOs"],
            ["41.6M", "Capital (Birr)"],
            ["152M", "Loan Portfolio (Birr)"],
          ].map(([v, l]) => (
            <div key={l} className="rounded-2xl border border-border bg-card p-6 text-center">
              <div className="text-3xl font-extrabold text-accent lg:text-4xl">{v}</div>
              <div className="mt-2 font-mono text-[10px] uppercase tracking-widest text-foreground/60">{l}</div>
            </div>
          ))}
        </div>
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <h2 className="mb-8 text-2xl font-bold">Membership Growth</h2>
            <div className="space-y-4">
              {MEMBER_GROWTH.map(([year, v]) => (
                <Bar key={year} label={year} value={v} max={memMax} unit="" />
              ))}
            </div>
          </div>
          <div>
            <h2 className="mb-8 text-2xl font-bold">Loan Portfolio (M Birr)</h2>
            <div className="space-y-4">
              {PORTFOLIO_GROWTH.map(([year, v]) => (
                <Bar key={year} label={year} value={v} max={potMax} unit="M" />
              ))}
            </div>
          </div>
        </div>
      </Section>
      <Section className="bg-card">
        <h2 className="mb-10 text-3xl font-extrabold uppercase tracking-tighter">Member Composition</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-border bg-background p-8">
            <div className="text-3xl font-extrabold text-accent">54%</div>
            <div className="mt-2 text-sm text-foreground/60">Women members</div>
          </div>
          <div className="rounded-2xl border border-border bg-background p-8">
            <div className="text-3xl font-extrabold text-accent">31%</div>
            <div className="mt-2 text-sm text-foreground/60">Youth (under 30)</div>
          </div>
          <div className="rounded-2xl border border-border bg-background p-8">
            <div className="text-3xl font-extrabold text-accent">68%</div>
            <div className="mt-2 text-sm text-foreground/60">Rural / peri-urban</div>
          </div>
        </div>
      </Section>
    </PageShell>
  );
}
