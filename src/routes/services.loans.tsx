import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHeader, Section } from "@/components/site/PageShell";

export const Route = createFileRoute("/services/loans")({
  head: () => ({
    meta: [
      { title: "Loans — AG Union" },
      { name: "description", content: "Business, agricultural, and personal loans from 50,000 to 5,000,000 Birr at a standardized 14% rate." },
      { property: "og:title", content: "AG Union Loans" },
      { property: "og:description", content: "50K–5M Birr at 14% for member enterprises." },
    ],
  }),
  component: LoansPage,
});

const LOANS = [
  { name: "Business Loan", range: "100,000 – 5,000,000", term: "12 – 60 months", use: "Working capital, inventory, equipment, expansion for member enterprises." },
  { name: "Agricultural Loan", range: "50,000 – 2,000,000", term: "Seasonal or up to 36 months", use: "Inputs, livestock, irrigation, and harvest-cycle financing." },
  { name: "Personal Loan", range: "50,000 – 500,000", term: "12 – 36 months", use: "Education, medical, home improvement, and family emergencies." },
];

const STEPS = ["Apply at your SACCO", "Documentation & assessment", "Committee approval", "Disbursement & insurance activation"];

function LoansPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Credit"
        title="Loans built around member enterprise."
        intro="A single, transparent 14% rate. No hidden fees. Every loan is automatically covered by credit-life insurance."
        variant="dark"
      />
      <Section>
        <div className="mb-16 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-primary p-8 text-primary-foreground">
            <div className="font-mono text-[10px] uppercase tracking-widest text-accent">Interest Rate</div>
            <div className="mt-4 text-5xl font-extrabold">14%</div>
            <div className="mt-2 text-sm opacity-70">Standard across all products</div>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8">
            <div className="font-mono text-[10px] uppercase tracking-widest text-accent">Loan Range</div>
            <div className="mt-4 text-3xl font-extrabold">50K – 5M</div>
            <div className="mt-2 text-sm text-foreground/60">Birr</div>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8">
            <div className="font-mono text-[10px] uppercase tracking-widest text-accent">Insurance</div>
            <div className="mt-4 text-3xl font-extrabold">Included</div>
            <div className="mt-2 text-sm text-foreground/60">Credit-life coverage</div>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-border">
          <table className="w-full text-sm">
            <thead className="bg-primary text-primary-foreground">
              <tr>
                <th className="p-4 text-left font-mono text-[11px] uppercase tracking-widest">Product</th>
                <th className="p-4 text-left font-mono text-[11px] uppercase tracking-widest">Range (Birr)</th>
                <th className="p-4 text-left font-mono text-[11px] uppercase tracking-widest">Term</th>
                <th className="p-4 text-left font-mono text-[11px] uppercase tracking-widest">Typical Use</th>
              </tr>
            </thead>
            <tbody className="bg-card">
              {LOANS.map((l) => (
                <tr key={l.name} className="border-t border-border">
                  <td className="p-4 font-bold">{l.name}</td>
                  <td className="p-4 font-mono">{l.range}</td>
                  <td className="p-4">{l.term}</td>
                  <td className="p-4 text-foreground/70">{l.use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section className="bg-card">
        <h2 className="mb-10 text-3xl font-extrabold uppercase tracking-tighter">Application Flow</h2>
        <div className="grid gap-4 md:grid-cols-4">
          {STEPS.map((s, i) => (
            <div key={s} className="rounded-2xl border border-border bg-background p-6">
              <div className="mb-4 font-mono text-2xl font-bold text-accent">{String(i + 1).padStart(2, "0")}</div>
              <div className="font-bold">{s}</div>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <Link to="/saccos" className="inline-block rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground">
            Find your SACCO to apply →
          </Link>
        </div>
      </Section>
    </PageShell>
  );
}
