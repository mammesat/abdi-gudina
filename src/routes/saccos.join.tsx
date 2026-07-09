import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHeader, Section } from "@/components/site/PageShell";

export const Route = createFileRoute("/saccos/join")({
  head: () => ({
    meta: [
      { title: "How to Join — AG Union" },
      { name: "description", content: "How to join an AG Union member SACCO or affiliate your existing cooperative — a four-step process." },
      { property: "og:title", content: "How to Join AG Union" },
      { property: "og:description", content: "Four steps to member ownership." },
    ],
  }),
  component: JoinPage,
});

const STEPS = [
  { n: "01", title: "Learn", desc: "Read about member benefits, review the directory, and identify the SACCO nearest to your community or line of work." },
  { n: "02", title: "Apply", desc: "Complete a membership application at your chosen SACCO with valid ID, proof of residence, and initial share capital." },
  { n: "03", title: "Verify", desc: "Your application is reviewed by the SACCO's membership committee. Turnaround is usually 5–10 business days." },
  { n: "04", title: "Activate", desc: "Once approved, your savings account opens the same day and you gain access to the Union's loan, insurance, and training services." },
];

const ELIGIBILITY = [
  "18 years of age or older",
  "Valid national or regional government ID",
  "Proof of residence in the SACCO's service area",
  "Initial share capital contribution (varies by SACCO)",
  "Commitment to cooperative principles",
];

function JoinPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Membership"
        title="Four steps to member ownership."
        intro="Membership is open to any adult in a member SACCO's service area. Your SACCO is your entry point to the Union."
      />
      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s) => (
            <div key={s.n} className="rounded-2xl border border-border bg-card p-8">
              <div className="mb-6 font-mono text-3xl font-bold text-accent">{s.n}</div>
              <h3 className="mb-3 text-xl font-bold">{s.title}</h3>
              <p className="text-sm text-foreground/60">{s.desc}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section className="bg-card">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <span className="mb-4 inline-block font-mono text-[11px] uppercase tracking-widest text-accent">Eligibility</span>
            <h2 className="text-3xl font-extrabold uppercase tracking-tighter">Who can join?</h2>
            <ul className="mt-8 space-y-4">
              {ELIGIBILITY.map((e) => (
                <li key={e} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                  <span>{e}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl bg-primary p-10 text-primary-foreground">
            <h3 className="mb-4 text-2xl font-bold">Already run a SACCO?</h3>
            <p className="mb-8 text-primary-foreground/70">Existing SACCOs can affiliate with AG Union to access wholesale credit, insurance, capacity training, and investment returns. Contact us for the affiliation packet.</p>
            <Link to="/contact" className="inline-block rounded-full bg-accent px-6 py-3 text-sm font-bold text-accent-foreground">
              Contact the Union
            </Link>
          </div>
        </div>
      </Section>
    </PageShell>
  );
}
