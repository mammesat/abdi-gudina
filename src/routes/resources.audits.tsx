import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader, Section } from "@/components/site/PageShell";
import { getResources } from "@/lib/wp.functions";
import { ResourceCard } from "./resources.index";

export const Route = createFileRoute("/resources/audits")({
  head: () => ({
    meta: [
      { title: "Audits & Compliance — AG Union" },
      { name: "description", content: "External audits, control-committee reports, and regulatory compliance reviews for AG Union." },
      { property: "og:title", content: "AG Union Audits" },
      { property: "og:description", content: "Independent audits, internal control reports, and compliance reviews." },
    ],
  }),
  loader: () => getResources({ data: { kind: "audit" } }),
  component: AuditsPage,
});

function AuditsPage() {
  const items = Route.useLoaderData();
  return (
    <PageShell>
      <PageHeader eyebrow="Audits & Compliance" title="Every Birr, on the record." intro="Independent audits, internal control-committee reports, and regulatory compliance reviews — all published to members." />
      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((r) => <ResourceCard key={r.slug} r={r} />)}
        </div>
      </Section>
    </PageShell>
  );
}
