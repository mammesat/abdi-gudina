import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader, Section } from "@/components/site/PageShell";

export const Route = createFileRoute("/services/savings")({
  head: () => ({
    meta: [
      { title: "Savings — AG Union" },
      { name: "description", content: "Regular, fixed-term, and group savings products offered through AG Union's 50 member SACCOs." },
      { property: "og:title", content: "Savings Products" },
      { property: "og:description", content: "Three savings products designed for cooperative growth." },
    ],
  }),
  component: SavingsPage,
});

const PRODUCTS = [
  { name: "Regular Savings", rate: "5.5%", min: "100 Birr", features: ["Deposit & withdraw anytime", "Interest paid quarterly", "No account fees for members"] },
  { name: "Fixed-Term Deposit", rate: "8.0%", min: "5,000 Birr", features: ["3, 6, 12-month terms", "Higher rate at maturity", "Auto-renewal option"] },
  { name: "Group Savings", rate: "6.5%", min: "500 Birr", features: ["For self-help & solidarity groups", "Joint account with multi-signer", "Access to group-lending pool"] },
];

function SavingsPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Savings"
        title="Savings that compound cooperatively."
        intro="Every Birr saved through a member SACCO strengthens the Union's lending capacity — which returns to members as credit, dividends, and investment."
      />
      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          {PRODUCTS.map((p) => (
            <div key={p.name} className="flex flex-col rounded-2xl border border-border bg-card p-8">
              <div className="mb-6">
                <h3 className="text-xl font-bold">{p.name}</h3>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-5xl font-extrabold text-accent">{p.rate}</span>
                  <span className="text-sm text-foreground/50">p.a.</span>
                </div>
                <div className="mt-2 font-mono text-xs uppercase tracking-widest text-foreground/50">Min. deposit {p.min}</div>
              </div>
              <ul className="mt-4 space-y-3 border-t border-border pt-6 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-10 text-sm text-foreground/60">Rates shown are current union-recommended rates. Individual SACCOs may adjust rates within a range set by the Board.</p>
      </Section>
    </PageShell>
  );
}
