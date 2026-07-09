import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader, Section } from "@/components/site/PageShell";

export const Route = createFileRoute("/about/vision")({
  head: () => ({
    meta: [
      { title: "Vision, Mission & Values — AG Union" },
      { name: "description", content: "The vision, mission, and cooperative values that guide AG Union's work with 50 SACCOs across Ethiopia." },
      { property: "og:title", content: "Vision & Values" },
      { property: "og:description", content: "The cooperative principles that guide every decision." },
    ],
  }),
  component: VisionPage,
});

const CARDS = [
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

function VisionPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="What We Stand For"
        title="Cooperation as a financial system."
        intro="Cooperative finance is not charity and not commerce as usual. It's a third path — where the users of capital are also its owners."
      />
      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          {CARDS.map((c) => (
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
