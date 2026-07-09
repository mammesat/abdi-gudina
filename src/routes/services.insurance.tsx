import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader, Section } from "@/components/site/PageShell";

export const Route = createFileRoute("/services/insurance")({
  head: () => ({
    meta: [
      { title: "Credit-Life Insurance — AG Union" },
      { name: "description", content: "Every active loan issued through AG Union member SACCOs includes credit-life coverage protecting families in the event of loss." },
      { property: "og:title", content: "Credit-Life Insurance" },
      { property: "og:description", content: "Every loan is protected. Every family is protected." },
    ],
  }),
  component: InsurancePage,
});

const FAQ = [
  { q: "Who is covered?", a: "The primary borrower on every active loan issued through a member SACCO. Coverage begins on the loan disbursement date." },
  { q: "What events are covered?", a: "Death and total permanent disability of the borrower. In those events, the outstanding loan balance is settled by the insurance fund." },
  { q: "How is the premium calculated?", a: "The premium is a small percentage of the loan value and is administered by the Union at the pool level. There is no per-member surcharge." },
  { q: "How are claims made?", a: "The borrower's SACCO submits the claim on behalf of the family. Standard processing is within 30 days of documentation." },
];

function InsurancePage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Protection"
        title="No family left with debt."
        intro="Credit-life insurance is not an add-on — it is built into every loan the Union underwrites. If the worst happens, the debt does not follow the family."
      />
      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-primary p-8 text-primary-foreground">
            <div className="text-4xl font-extrabold">100%</div>
            <div className="mt-3 text-sm opacity-80">of active loans covered</div>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8">
            <div className="text-4xl font-extrabold text-accent">0 Birr</div>
            <div className="mt-3 text-sm text-foreground/60">additional premium per member</div>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8">
            <div className="text-4xl font-extrabold text-accent">30 days</div>
            <div className="mt-3 text-sm text-foreground/60">standard claim resolution</div>
          </div>
        </div>
      </Section>
      <Section className="bg-card">
        <h2 className="mb-10 text-3xl font-extrabold uppercase tracking-tighter">FAQ</h2>
        <div className="space-y-4">
          {FAQ.map((f) => (
            <details key={f.q} className="group rounded-2xl border border-border bg-background p-6">
              <summary className="flex cursor-pointer items-center justify-between font-bold">
                {f.q}
                <span className="text-accent transition-transform group-open:rotate-45">＋</span>
              </summary>
              <p className="mt-4 text-sm text-foreground/70">{f.a}</p>
            </details>
          ))}
        </div>
      </Section>
    </PageShell>
  );
}
