import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHeader, Section } from "@/components/site/PageShell";

export const Route = createFileRoute("/resources/faq")({
  head: () => ({
    meta: [
      { title: "Frequently Asked Questions — AG Union" },
      { name: "description", content: "Answers to common questions about AG Union, cooperative membership, SACCO affiliation, and financial services." },
      { property: "og:title", content: "AG Union FAQ" },
      { property: "og:description", content: "How Financial Cooperative Unions work, and how AG Union serves member SACCOs." },
    ],
  }),
  component: FAQPage,
});

const GROUPS: { title: string; items: { q: string; a: string }[] }[] = [
  {
    title: "About the Union",
    items: [
      {
        q: "What is a Financial Cooperative Union?",
        a: "A Financial Cooperative Union is a second-level cooperative formed by multiple SACCOs. Instead of serving individuals directly, it serves the SACCOs that own it. Individuals join a SACCO, and SACCOs join the Union — the Union then provides financial and technical services to its member SACCOs.",
      },
      {
        q: "Who owns AG Union?",
        a: "Abdi Gudina Union is owned by its 50 member SACCOs. Each affiliated SACCO holds governance rights and appoints delegates to the General Assembly, which elects the Board of Directors.",
      },
      {
        q: "How is a Union different from a commercial bank?",
        a: "A bank is owned by shareholders and serves customers for profit. A Union is owned by its member SACCOs. Every surplus is either reinvested into member services or distributed as patronage. Governance is one-SACCO-one-vote — not one-share-one-vote.",
      },
      {
        q: "Where does AG Union operate?",
        a: "We are headquartered in Adama and serve SACCOs across the East Shewa corridor of the Oromia Region — reaching from Bishoftu in the west to Awash in the east.",
      },
    ],
  },
  {
    title: "For Member SACCOs",
    items: [
      {
        q: "What services do you provide to member SACCOs?",
        a: "Six core services: (1) liquidity loans when a SACCO faces cash shortages, (2) pooled investment returns, (3) credit-life insurance, (4) capacity training for boards and staff, (5) shared accounting, audit, and IT services, and (6) representation before government and regulators.",
      },
      {
        q: "How can a SACCO affiliate with AG Union?",
        a: "Contact the Union office in Adama for the affiliation packet. The process includes a governance review, financial due diligence, and a General Assembly vote — typically completed within one quarter.",
      },
      {
        q: "What are the requirements for affiliation?",
        a: "A SACCO must be legally registered under Ethiopian cooperative law, have an active membership base, maintain audited books, and pledge to adopt the Union's minimum governance and reporting standards.",
      },
      {
        q: "Do you provide shared digital banking?",
        a: "Yes. Member SACCOs can plug into the Union's shared ledger, member registry, and mobile-money reconciliation tools — reducing per-SACCO IT costs and improving reporting consistency.",
      },
    ],
  },
  {
    title: "For Individual Members",
    items: [
      {
        q: "Can I join AG Union directly as an individual?",
        a: "No. Individuals join a primary SACCO in their community. That SACCO — once it meets AG Union's affiliation standards — represents its members inside the Union.",
      },
      {
        q: "How do I find a SACCO near me?",
        a: "Browse our SACCO Directory to see all 50 member SACCOs by location, or contact the Union for a referral to the SACCO best suited to your community or profession.",
      },
      {
        q: "What benefits do I get as a SACCO member?",
        a: "Savings accounts with competitive interest, access to affordable loans, credit-life insurance on borrowings, patronage refunds from cooperative surplus, and access to financial-literacy and enterprise training run by the Union.",
      },
    ],
  },
  {
    title: "Transparency & Governance",
    items: [
      {
        q: "Are your accounts audited?",
        a: "Yes. Annual financial statements are audited by an independent Ethiopian firm and adopted by the General Assembly. The most recent five audited reports are available on the Annual Reports page.",
      },
      {
        q: "Who regulates AG Union?",
        a: "We are registered with and supervised by the Federal Cooperative Agency and the Oromia Cooperative Bureau, in line with Ethiopian cooperative law.",
      },
      {
        q: "How are decisions made?",
        a: "One SACCO, one vote. Member SACCOs send delegates to the General Assembly, which elects the Board of Directors and Control Committee. Day-to-day operations are run by professional management accountable to the Board.",
      },
    ],
  },
];

function FAQPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="FAQ"
        title="Answers for members & SACCOs."
        intro="Everything you need to know about Financial Cooperative Unions, how AG Union works, and how member SACCOs and their members benefit."
      />
      <Section>
        <div className="space-y-16">
          {GROUPS.map((g) => (
            <div key={g.title}>
              <h2 className="mb-6 font-mono text-[11px] uppercase tracking-widest text-accent">{g.title}</h2>
              <div className="divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
                {g.items.map((item, i) => (
                  <details key={item.q} className="group" open={i === 0}>
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-6 p-6 transition-colors hover:bg-primary/5">
                      <span className="text-base font-bold leading-snug lg:text-lg">{item.q}</span>
                      <span className="font-mono text-2xl text-accent transition-transform group-open:rotate-45">+</span>
                    </summary>
                    <div className="px-6 pb-6 text-sm leading-relaxed text-foreground/70 lg:text-base">{item.a}</div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 rounded-3xl bg-primary p-10 text-center text-primary-foreground">
          <h3 className="mb-3 text-2xl font-bold">Still have questions?</h3>
          <p className="mb-8 text-primary-foreground/70">Our team in Adama is happy to help members and prospective SACCOs.</p>
          <Link to="/contact" className="inline-block rounded-full bg-accent px-8 py-4 text-sm font-bold text-accent-foreground">
            Contact the Union →
          </Link>
        </div>
      </Section>
    </PageShell>
  );
}
