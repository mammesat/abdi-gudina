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
        <Link
          to="/impact/stories/$slug"
          params={{ slug: featured.slug }}
          className="mb-16 grid overflow-hidden rounded-3xl bg-primary-dark text-primary-foreground transition-transform hover:-translate-y-0.5 lg:grid-cols-2"
        >
          <div className="p-12 lg:p-16">
            <div className="mb-8 inline-block rounded-full border border-accent/30 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-accent">
              Featured Story · {featured.location}
            </div>
            <blockquote className="text-2xl font-medium leading-snug lg:text-3xl">&ldquo;{featured.quote}&rdquo;</blockquote>
            <div className="mt-10 border-t border-primary-foreground/10 pt-6">
              <div className="font-bold">{featured.name}</div>
              <div className="text-sm text-primary-foreground/50">{featured.role} · {featured.loan}</div>
              <span className="mt-6 inline-block text-sm font-semibold text-accent">Read the full story →</span>
            </div>
          </div>
          <div className="relative min-h-[300px] lg:min-h-full">
            <img src={almazImg} alt={featured.name} className="absolute inset-0 h-full w-full object-cover" />
          </div>
        </Link>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((s) => (
            <Link
              key={s.slug}
              to="/impact/stories/$slug"
              params={{ slug: s.slug }}
              className="group flex flex-col rounded-2xl border border-border bg-card p-8 transition-colors hover:border-accent"
            >
              <div className="mb-4 font-mono text-[10px] uppercase tracking-widest text-accent">{s.location} · {s.loan}</div>
              <blockquote className="mb-8 text-lg leading-snug">&ldquo;{s.quote}&rdquo;</blockquote>
              <div className="mt-auto border-t border-border pt-4">
                <div className="font-bold group-hover:text-accent">{s.name}</div>
                <div className="text-sm text-accent">{s.role}</div>
                <span className="mt-3 inline-block text-xs font-semibold text-primary group-hover:text-accent">Read story →</span>
              </div>
            </Link>
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
