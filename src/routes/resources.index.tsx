import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader, Section } from "@/components/site/PageShell";

export const Route = createFileRoute("/resources/")({
  head: () => ({
    meta: [
      { title: "Downloads & Forms — AG Union" },
      { name: "description", content: "Downloadable forms, policies, and templates for AG Union members and SACCOs." },
      { property: "og:title", content: "AG Union Downloads" },
      { property: "og:description", content: "Membership forms, loan applications, and policy documents." },
    ],
  }),
  component: ResourcesIndex,
});

const CATEGORIES = [
  {
    name: "Forms",
    items: [
      { title: "Membership Application", size: "180 KB" },
      { title: "Loan Application", size: "220 KB" },
      { title: "Beneficiary Designation", size: "95 KB" },
    ],
  },
  {
    name: "Policies",
    items: [
      { title: "Union Bylaws (Revised 2024)", size: "480 KB" },
      { title: "Credit & Lending Policy", size: "310 KB" },
      { title: "Governance Handbook", size: "1.2 MB" },
    ],
  },
  {
    name: "Templates",
    items: [
      { title: "SACCO Monthly Report Template", size: "60 KB" },
      { title: "Board Meeting Minutes Template", size: "45 KB" },
      { title: "Loan Assessment Template", size: "120 KB" },
    ],
  },
];

function ResourcesIndex() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Resources"
        title="Downloads for members & SACCOs."
        intro="Forms, policies, and templates used across the Union. Contact your SACCO for stamped or notarized versions."
      />
      <Section>
        <div className="grid gap-10 md:grid-cols-3">
          {CATEGORIES.map((cat) => (
            <div key={cat.name}>
              <h2 className="mb-6 font-mono text-[11px] uppercase tracking-widest text-accent">{cat.name}</h2>
              <ul className="space-y-3">
                {cat.items.map((item) => (
                  <li key={item.title}>
                    <button className="flex w-full items-center justify-between rounded-xl border border-border bg-card p-4 text-left transition-colors hover:border-accent">
                      <div>
                        <div className="text-sm font-semibold">{item.title}</div>
                        <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-foreground/50">PDF · {item.size}</div>
                      </div>
                      <span className="text-accent">↓</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>
    </PageShell>
  );
}
