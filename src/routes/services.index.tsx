import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHeader, Section } from "@/components/site/PageShell";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services — AG Union" },
      { name: "description", content: "Savings, loans, credit-life insurance, cooperative investments, and capacity training for 50 member SACCOs and 12,000+ members." },
      { property: "og:title", content: "AG Union Services" },
      { property: "og:description", content: "Five services that anchor cooperative finance." },
    ],
  }),
  component: ServicesIndex,
});

const SERVICES = [
  { to: "/services/savings", n: "01", title: "Savings", desc: "Interest-bearing savings for SACCOs and members with flexible product tiers." },
  { to: "/services/loans", n: "02", title: "Loans", desc: "50K–5M Birr at 14% for business, agricultural, and personal purposes." },
  { to: "/services/insurance", n: "03", title: "Credit-Life Insurance", desc: "Protection for every active loan — no additional premium for members." },
  { to: "/services/investments", n: "04", title: "Investments", desc: "Diversified portfolio: grain trading, agro-chemicals, real estate, vehicle rental." },
  { to: "/services/training", n: "05", title: "Training", desc: "Capacity building for committees, staff, and members across the Union." },
];

function ServicesIndex() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="What We Offer"
        title="Five services. One cooperative engine."
        intro="Each service exists to make member SACCOs more resilient — and every Birr of profit returns to members as dividends, insurance coverage, or reinvested capacity."
      />
      <Section>
        <div className="grid grid-cols-1 gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <Link key={s.n} to={s.to} className="group bg-background p-10 transition-colors hover:bg-primary">
              <div className="mb-8 flex size-12 items-center justify-center rounded-full border border-accent transition-colors group-hover:border-primary-foreground/20">
                <span className="font-mono font-bold text-accent">{s.n}</span>
              </div>
              <h3 className="mb-4 text-2xl font-bold group-hover:text-primary-foreground">{s.title}</h3>
              <p className="text-sm text-foreground/60 group-hover:text-primary-foreground/70">{s.desc}</p>
              <span className="mt-8 inline-block text-xs font-semibold text-accent">Learn more →</span>
            </Link>
          ))}
        </div>
      </Section>
    </PageShell>
  );
}
