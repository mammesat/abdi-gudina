import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader, Section } from "@/components/site/PageShell";

export const Route = createFileRoute("/saccos/benefits")({
  head: () => ({
    meta: [
      { title: "Member Benefits — AG Union" },
      { name: "description", content: "What members gain from AG Union: annual dividends, credit access, insurance, training, and cooperative ownership." },
      { property: "og:title", content: "Member Benefits" },
      { property: "og:description", content: "Six ways membership pays off." },
    ],
  }),
  component: BenefitsPage,
});

const BENEFITS = [
  { title: "Annual Dividends", desc: "A share of the Union's surplus is returned to members every year in proportion to participation." },
  { title: "Affordable Credit", desc: "Loans from 50,000 to 5,000,000 Birr at a standardized 14% rate — designed for member enterprises, not extraction." },
  { title: "Credit-Life Insurance", desc: "Every active loan is protected. Your family is not left with debt in the event of unforeseen loss." },
  { title: "Capacity Training", desc: "Ongoing training for SACCO committees, staff, and members on cooperative governance and financial literacy." },
  { title: "Investment Returns", desc: "Portfolio profits from grain, agro-chemicals, real estate, and vehicle rental flow back to member SACCOs." },
  { title: "Democratic Voice", desc: "One member, one vote at the SACCO level. One SACCO, one vote at the Union's General Assembly." },
];

function BenefitsPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Why Members Stay"
        title="What you gain as a member."
        intro="Membership is not a service subscription. It is ownership — with all the returns, protections, and voice that come with it."
      />
      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((b, i) => (
            <div key={b.title} className="rounded-2xl border border-border bg-card p-8">
              <div className="mb-6 font-mono text-sm text-accent">/ {String(i + 1).padStart(2, "0")}</div>
              <h3 className="mb-3 text-xl font-bold">{b.title}</h3>
              <p className="text-sm text-foreground/60">{b.desc}</p>
            </div>
          ))}
        </div>
      </Section>
    </PageShell>
  );
}
