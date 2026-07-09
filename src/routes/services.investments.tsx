import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader, Section } from "@/components/site/PageShell";

export const Route = createFileRoute("/services/investments")({
  head: () => ({
    meta: [
      { title: "Investments — AG Union" },
      { name: "description", content: "AG Union's diversified investment portfolio: grain trading, agro-chemicals, real estate, and vehicle rental — with profits returning to members." },
      { property: "og:title", content: "AG Union Investment Portfolio" },
      { property: "og:description", content: "Four investment lines that fund member SACCOs." },
    ],
  }),
  component: InvestmentsPage,
});

const LINES = [
  { title: "Grain Trading", desc: "Aggregation and wholesale trading of maize, wheat, and teff — with pricing that supports smallholder members.", icon: "🌾" },
  { title: "Agro-Chemicals", desc: "Wholesale supply of fertilizer, seed, and crop-protection inputs to member SACCOs and their farmer members.", icon: "🧪" },
  { title: "Real Estate", desc: "Commercial and mixed-use properties in Adama and the surrounding Oromia region generating stable rental yield.", icon: "🏢" },
  { title: "Vehicle Rental", desc: "A managed fleet supporting agricultural transport, commercial logistics, and member enterprise needs.", icon: "🚚" },
];

function InvestmentsPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Portfolio"
        title="Cooperative capital, put to work."
        intro="The Union's investment arm exists for one purpose: to generate returns that flow back to member SACCOs as dividends, service subsidies, and reinvested capital."
        variant="dark"
      />
      <Section>
        <div className="grid gap-4 md:grid-cols-2">
          {LINES.map((l) => (
            <article key={l.title} className="group rounded-3xl border border-border bg-card p-10 transition-colors hover:border-accent">
              <div className="mb-6 text-4xl">{l.icon}</div>
              <h3 className="mb-3 text-2xl font-bold">{l.title}</h3>
              <p className="text-foreground/70">{l.desc}</p>
            </article>
          ))}
        </div>
      </Section>
    </PageShell>
  );
}
