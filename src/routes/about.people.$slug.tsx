import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageShell, Section } from "@/components/site/PageShell";
import { PEOPLE } from "@/content/site";

export const Route = createFileRoute("/about/people/$slug")({
  loader: ({ params }) => {
    const person = PEOPLE.find((p) => p.slug === params.slug);
    if (!person) throw notFound();
    return { person };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Profile not found — AG Union" }, { name: "robots", content: "noindex" }] };
    const { person } = loaderData;
    return {
      meta: [
        { title: `${person.name} — ${person.role} — AG Union` },
        { name: "description", content: person.bio },
        { property: "og:title", content: `${person.name} · ${person.role}` },
        { property: "og:description", content: person.bio },
      ],
    };
  },
  component: PersonPage,
  notFoundComponent: () => (
    <PageShell>
      <Section>
        <h1 className="text-4xl font-extrabold">Profile not found</h1>
        <Link to="/about/governance" className="mt-6 inline-block text-accent">← Back to governance</Link>
      </Section>
    </PageShell>
  ),
});

const BODY_LABEL = { board: "Board of Directors", management: "Management Team", committee: "Control Committee" } as const;

function PersonPage() {
  const { person } = Route.useLoaderData();
  const initials = person.name.split(" ").slice(-2).map((n) => n[0]).join("");
  const peers = PEOPLE.filter((p) => p.body === person.body && p.slug !== person.slug).slice(0, 3);

  return (
    <PageShell>
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
          <Link to="/about/governance" className="mb-8 inline-block font-mono text-xs uppercase tracking-widest text-accent">← Governance</Link>
          <div className="grid gap-12 lg:grid-cols-[auto_1fr] lg:items-center">
            <div className="flex h-40 w-40 items-center justify-center rounded-2xl bg-accent/15 font-mono text-5xl font-extrabold text-accent">
              {initials}
            </div>
            <div>
              <div className="mb-4 font-mono text-[11px] uppercase tracking-widest text-accent">{BODY_LABEL[person.body]}</div>
              <h1 className="text-balance text-4xl font-extrabold leading-tight lg:text-5xl">{person.name}</h1>
              <div className="mt-3 text-xl text-accent">{person.role}</div>
              {person.tenure && <div className="mt-2 font-mono text-xs uppercase tracking-widest text-primary-foreground/60">{person.tenure} · {person.hometown}</div>}
            </div>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid gap-16 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="mb-6 text-2xl font-extrabold uppercase tracking-tighter">Biography</h2>
            <p className="text-lg leading-relaxed text-foreground/80">{person.bio}</p>
            <blockquote className="mt-12 border-l-4 border-accent bg-card px-8 py-8 text-2xl font-medium leading-snug">
              &ldquo;{person.quote}&rdquo;
            </blockquote>
          </div>
          <aside className="space-y-6">
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="mb-4 font-mono text-[10px] uppercase tracking-widest text-accent">Focus Areas</div>
              <ul className="space-y-2">
                {person.focus.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="mb-4 font-mono text-[10px] uppercase tracking-widest text-accent">Education</div>
              <p className="text-sm text-foreground/80">{person.education}</p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="mb-4 font-mono text-[10px] uppercase tracking-widest text-accent">Hometown</div>
              <p className="text-sm text-foreground/80">{person.hometown}</p>
            </div>
          </aside>
        </div>
      </Section>

      {peers.length > 0 && (
        <Section className="bg-card">
          <h2 className="mb-10 text-2xl font-bold">Also on the {BODY_LABEL[person.body]}</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {peers.map((p) => (
              <Link key={p.slug} to="/about/people/$slug" params={{ slug: p.slug }} className="group rounded-2xl border border-border bg-background p-6 transition-colors hover:border-accent">
                <div className="font-bold group-hover:text-accent">{p.name}</div>
                <div className="text-sm text-accent">{p.role}</div>
                <span className="mt-4 inline-block text-xs font-semibold text-primary">View profile →</span>
              </Link>
            ))}
          </div>
        </Section>
      )}
    </PageShell>
  );
}
