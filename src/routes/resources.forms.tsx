import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader, Section } from "@/components/site/PageShell";
import { getResources, type SiteResource } from "@/lib/wp.functions";
import { ResourceCard } from "./resources.index";

export const Route = createFileRoute("/resources/forms")({
  head: () => ({
    meta: [
      { title: "Forms & Templates — AG Union" },
      { name: "description", content: "Membership, loan, beneficiary, and SACCO reporting forms used across all 50 member cooperatives." },
      { property: "og:title", content: "AG Union Forms" },
      { property: "og:description", content: "Downloadable forms and templates for members and SACCOs." },
    ],
  }),
  loader: async (): Promise<SiteResource[]> => (await getResources({ data: { kind: "form" } })) as SiteResource[],
  component: FormsPage,
});

function FormsPage() {
  const items = Route.useLoaderData() as SiteResource[];
  return (
    <PageShell>
      <PageHeader eyebrow="Forms & Templates" title="Standard forms for members and SACCOs." intro="Membership, loan, and reporting templates. Contact your SACCO for stamped or notarized copies." />
      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((r) => <ResourceCard key={r.slug} r={r} />)}
        </div>
      </Section>
    </PageShell>
  );
}
