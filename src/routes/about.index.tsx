import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHeader, Section } from "@/components/site/PageShell";

export const Route = createFileRoute("/about/")({
  head: () => ({
    meta: [
      { title: "About — Abdi Gudina Financial Cooperatives Union" },
      { name: "description", content: "AG Union is a member-owned financial cooperative serving 50 SACCOs and 12,000+ members across Ethiopia since 2007." },
      { property: "og:title", content: "About AG Union" },
      { property: "og:description", content: "A member-owned financial cooperative serving Ethiopia since 2007." },
    ],
  }),
  component: AboutIndex,
});

const KEY_FACTS: [string, string][] = [
  ["Founded", "2007"],
  ["Headquarters", "Adama, Oromia"],
  ["Member SACCOs", "50"],
  ["Individual Members", "12,000+"],
  ["Capital", "41.6M Birr"],
  ["Savings on Deposit", "60.9M Birr"],
  ["Loan Portfolio", "152M Birr"],
  ["Legal Form", "Cooperative Union Ltd."],
];

const SUBLINKS = [
  { to: "/about/history", title: "History, Vision & Values", desc: "Nineteen years of milestones and the cooperative principles that guide us." },
  { to: "/about/governance", title: "Governance & Structure", desc: "Elected board, control committee, management, and how they connect." },
];

function AboutIndex() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="About the Union"
        title="A cooperative built by members, for members."
        intro="Since 2007, Abdi Gudina has served as the apex financial cooperative for 50 SACCOs across the Oromia Region, pooling capital, expertise, and risk to make ownership of finance genuinely local."
        variant="dark"
      />
      <Section>
        <div className="grid gap-16 lg:grid-cols-[1.5fr_1fr]">
          <div className="space-y-6 text-[15px] leading-relaxed text-foreground/80">
            <p>Abdi Gudina Financial Cooperatives Union Ltd. is a second-tier cooperative registered in the Oromia Region of Ethiopia. Our members are Savings and Credit Cooperative Organizations (SACCOs) — the primary cooperatives that serve individuals, families, and small businesses in their communities.</p>
            <p>The Union exists to do what a single SACCO cannot do alone: aggregate savings, negotiate wholesale credit, cover risk through pooled insurance, invest in productive enterprise, and build institutional capacity across the movement.</p>
            <p>Every Birr of capital, every loan disbursed, every dividend returned belongs to members. We measure success not by profit alone but by the resilience of the SACCOs we serve and the livelihoods they support.</p>
          </div>
          <aside className="rounded-2xl border border-border bg-card p-8">
            <h3 className="mb-6 font-mono text-[10px] uppercase tracking-widest text-accent">Key Facts</h3>
            <dl className="divide-y divide-border">
              {KEY_FACTS.map(([k, v]) => (
                <div key={k} className="flex justify-between py-3 text-sm">
                  <dt className="text-foreground/60">{k}</dt>
                  <dd className="font-semibold">{v}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </Section>
      <Section className="bg-card">
        <div className="grid gap-4 md:grid-cols-2">
          {SUBLINKS.map((s) => (
            <Link key={s.to} to={s.to} className="group rounded-2xl border border-border bg-background p-8 transition-colors hover:border-accent">
              <h3 className="mb-3 text-lg font-bold group-hover:text-accent">{s.title}</h3>
              <p className="text-sm text-foreground/60">{s.desc}</p>
              <span className="mt-6 inline-block text-xs font-semibold text-accent">Read more →</span>
            </Link>
          ))}
        </div>
      </Section>
    </PageShell>
  );
}
