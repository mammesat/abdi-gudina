import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageShell, Section } from "@/components/site/PageShell";
import { STORIES } from "@/content/site";

export const Route = createFileRoute("/impact/stories/$slug")({
  loader: ({ params }) => {
    const story = STORIES.find((s) => s.slug === params.slug);
    if (!story) throw notFound();
    return { story };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Story not found — AG Union" }, { name: "robots", content: "noindex" }] };
    const { story } = loaderData;
    return {
      meta: [
        { title: `${story.name} — Member Story — AG Union` },
        { name: "description", content: story.summary },
        { property: "og:title", content: `${story.name} · ${story.role}` },
        { property: "og:description", content: story.summary },
        { property: "og:type", content: "article" },
      ],
    };
  },
  component: StoryPage,
  notFoundComponent: () => (
    <PageShell>
      <Section>
        <h1 className="text-4xl font-extrabold">Story not found</h1>
        <Link to="/impact" className="mt-6 inline-block text-accent">← All stories</Link>
      </Section>
    </PageShell>
  ),
});

function StoryPage() {
  const { story } = Route.useLoaderData();
  const related = STORIES.filter((s) => s.slug !== story.slug).slice(0, 3);
  const initials = story.name.split(" ").slice(-2).map((n) => n[0]).join("");

  return (
    <PageShell>
      <section className="bg-primary-dark text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <Link to="/impact" className="mb-8 inline-block font-mono text-xs uppercase tracking-widest text-accent">← Success Stories</Link>
          <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <div className="mb-4 font-mono text-[11px] uppercase tracking-widest text-accent">Member Story · {story.location}</div>
              <h1 className="text-balance text-4xl font-extrabold leading-tight lg:text-6xl">{story.name}</h1>
              <div className="mt-4 text-xl text-primary-foreground/70">{story.role} · {story.since}</div>
            </div>
            <div className="flex h-32 w-32 items-center justify-center rounded-2xl bg-accent/15 font-mono text-4xl font-extrabold text-accent">
              {initials}
            </div>
          </div>
          <blockquote className="mt-16 max-w-3xl border-l-4 border-accent pl-6 text-2xl font-medium leading-snug lg:text-3xl">
            &ldquo;{story.quote}&rdquo;
          </blockquote>
        </div>
      </section>

      <Section>
        <div className="grid gap-16 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="text-xl leading-relaxed text-foreground/80">{story.summary}</p>
            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-card p-6">
                <div className="mb-2 font-mono text-[10px] uppercase tracking-widest text-accent">Before</div>
                <p className="text-sm text-foreground/80">{story.before}</p>
              </div>
              <div className="rounded-2xl border border-accent bg-card p-6">
                <div className="mb-2 font-mono text-[10px] uppercase tracking-widest text-accent">After</div>
                <p className="text-sm text-foreground/80">{story.after}</p>
              </div>
            </div>

            <div className="mt-16 space-y-10">
              {story.chapters.map((c, i) => (
                <section key={c.title}>
                  <div className="mb-3 font-mono text-xs uppercase tracking-widest text-accent">Chapter {String(i + 1).padStart(2, "0")}</div>
                  <h3 className="mb-4 text-2xl font-bold">{c.title}</h3>
                  <p className="text-lg leading-relaxed text-foreground/80">{c.body}</p>
                </section>
              ))}
            </div>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl bg-primary p-6 text-primary-foreground">
              <div className="mb-4 font-mono text-[10px] uppercase tracking-widest text-accent">At a glance</div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between border-b border-primary-foreground/10 pb-3"><span className="text-primary-foreground/60">Loan volume</span><span className="font-bold">{story.loan}</span></div>
                <div className="flex justify-between border-b border-primary-foreground/10 pb-3"><span className="text-primary-foreground/60">Location</span><span className="font-bold">{story.location}</span></div>
                <div className="flex justify-between"><span className="text-primary-foreground/60">Membership</span><span className="font-bold">{story.since}</span></div>
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="mb-4 font-mono text-[10px] uppercase tracking-widest text-accent">Outcomes</div>
              <ul className="space-y-3">
                {story.outcomes.map((o) => (
                  <li key={o.label} className="flex justify-between border-b border-border pb-2 text-sm last:border-none">
                    <span className="text-foreground/60">{o.label}</span>
                    <span className="font-bold">{o.value}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Link to="/saccos/join" className="block rounded-2xl bg-accent p-6 text-center font-bold text-accent-foreground">
              Start your own story →
            </Link>
          </aside>
        </div>
      </Section>

      <Section className="bg-card">
        <h2 className="mb-10 text-2xl font-bold">More member stories</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {related.map((s) => (
            <Link key={s.slug} to="/impact/stories/$slug" params={{ slug: s.slug }} className="group rounded-2xl border border-border bg-background p-6 transition-colors hover:border-accent">
              <div className="font-mono text-[10px] uppercase tracking-widest text-accent">{s.location} · {s.loan}</div>
              <div className="mt-3 font-bold group-hover:text-accent">{s.name}</div>
              <div className="text-sm text-foreground/60">{s.role}</div>
            </Link>
          ))}
        </div>
      </Section>
    </PageShell>
  );
}
