import { createFileRoute, Link } from "@tanstack/react-router";
import almazImg from "@/assets/almaz-story.jpg";
import { PageShell, PageHeader, Section } from "@/components/site/PageShell";
import { STORIES } from "@/content/site";

export const Route = createFileRoute("/impact/")({
  head: () => ({
    meta: [
      { title: "Impact — AG Union" },
      { name: "description", content: "Real stories from AG Union members: merchants, farmers, and entrepreneurs whose lives were changed by cooperative finance." },
      { property: "og:title", content: "AG Union Impact" },
      { property: "og:description", content: "Member stories from across the Oromia Region." },
    ],
  }),
  component: ImpactIndex,
});

function ImpactIndex() {
  const [featured, ...rest] = STORIES;
  return (
    <PageShell>
      <PageHeader
        eyebrow="Impact"
        title="The stories behind the numbers."
        intro="Every loan is a livelihood. Every SACCO is a community. These are just a few of the members whose stories illustrate what cooperative finance makes possible."
      />
      <Section>
        <div className="mb-16 grid overflow-hidden rounded-3xl bg-primary-dark text-primary-foreground lg:grid-cols-2">
          <div className="p-12 lg:p-16">
            <div className="mb-8 inline-block rounded-full border border-accent/30 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-accent">
              Featured Story
            </div>
            <blockquote className="text-2xl font-medium leading-snug lg:text-3xl">&ldquo;{featured.quote}&rdquo;</blockquote>
            <div className="mt-10 border-t border-primary-foreground/10 pt-6">
              <div className="font-bold">{featured.name}</div>
              <div className="text-sm text-primary-foreground/50">{featured.role}</div>
            </div>
          </div>
          <div className="relative min-h-[300px] lg:min-h-full">
            <img src={almazImg} alt={featured.name} className="absolute inset-0 h-full w-full object-cover" />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((s) => (
            <article key={s.name} className="rounded-2xl border border-border bg-card p-8">
              <blockquote className="mb-8 text-lg leading-snug">&ldquo;{s.quote}&rdquo;</blockquote>
              <div className="border-t border-border pt-4">
                <div className="font-bold">{s.name}</div>
                <div className="text-sm text-accent">{s.role}</div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link to="/impact/stats" className="inline-block rounded-full bg-primary px-8 py-4 text-sm font-bold text-primary-foreground">
            See the numbers →
          </Link>
        </div>
      </Section>
    </PageShell>
  );
}
