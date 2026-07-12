import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader, Section } from "@/components/site/PageShell";
import { getResources, type SiteResource } from "@/lib/wp.functions";
import { ResourceCard } from "./resources.index";

export const Route = createFileRoute("/resources/policies")({
  head: () => ({
    meta: [
      { title: "Policies — AG Union" },
      { name: "description", content: "Union bylaws, credit policy, and governance handbooks — the rulebook of AG Union." },
      { property: "og:title", content: "AG Union Policies" },
      { property: "og:description", content: "Governance policies and operating rules of AG Union." },
    ],
  }),
  loader: async (): Promise<SiteResource[]> => (await getResources({ data: { kind: "policy" } })) as SiteResource[],
  component: PoliciesPage,
});

function PoliciesPage() {
  const items = Route.useLoaderData();
  return (
    <PageShell>
      <PageHeader eyebrow="Policies" title="How the Union governs itself." intro="Bylaws, credit rules, and governance handbooks adopted by the General Assembly and reviewed on a fixed cadence." />
      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((r) => <ResourceCard key={r.slug} r={r} />)}
        </div>
      </Section>
    </PageShell>
  );
}
