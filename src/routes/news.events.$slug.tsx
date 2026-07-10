import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageShell, Section } from "@/components/site/PageShell";
import { EVENTS } from "@/content/site";

export const Route = createFileRoute("/news/events/$slug")({
  loader: ({ params }) => {
    const event = EVENTS.find((e) => e.slug === params.slug);
    if (!event) throw notFound();
    return { event };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Event not found — AG Union" }, { name: "robots", content: "noindex" }] };
    const { event } = loaderData;
    return {
      meta: [
        { title: `${event.title} — ${event.date} — AG Union` },
        { name: "description", content: event.summary },
        { property: "og:title", content: event.title },
        { property: "og:description", content: event.summary },
        { property: "og:type", content: "event" },
      ],
    };
  },
  component: EventPage,
  notFoundComponent: () => (
    <PageShell>
      <Section>
        <h1 className="text-4xl font-extrabold">Event not found</h1>
        <Link to="/news/events" className="mt-6 inline-block text-accent">← All events</Link>
      </Section>
    </PageShell>
  ),
});

function EventPage() {
  const { event } = Route.useLoaderData();
  const [month, day, year] = event.date.replace(",", "").split(" ");
  const others = EVENTS.filter((e) => e.slug !== event.slug).slice(0, 3);

  return (
    <PageShell>
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
          <Link to="/news/events" className="mb-8 inline-block font-mono text-xs uppercase tracking-widest text-accent">← Events</Link>
          <div className="grid gap-12 lg:grid-cols-[auto_1fr] lg:items-center">
            <div className="flex w-32 flex-col items-center rounded-2xl bg-accent/15 py-6 text-center">
              <span className="font-mono text-xs uppercase tracking-widest text-accent">{month}</span>
              <span className="text-5xl font-extrabold">{day}</span>
              <span className="font-mono text-xs opacity-70">{year}</span>
            </div>
            <div>
              <span className="mb-3 inline-block rounded-full bg-accent/15 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-accent">{event.tag}</span>
              <h1 className="text-balance text-4xl font-extrabold leading-tight lg:text-5xl">{event.title}</h1>
              <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-primary-foreground/70">
                <span>📍 {event.location}</span>
                <span>🕘 {event.time}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid gap-16 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="mb-6 text-2xl font-extrabold uppercase tracking-tighter">About this event</h2>
            <p className="text-lg leading-relaxed text-foreground/80">{event.summary}</p>

            <h2 className="mb-6 mt-16 text-2xl font-extrabold uppercase tracking-tighter">Agenda</h2>
            <ol className="overflow-hidden rounded-2xl border border-border">
              {event.agenda.map((a, i) => (
                <li key={i} className="grid grid-cols-[100px_1fr] gap-4 border-b border-border bg-card p-5 last:border-none">
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-accent">{a.time}</span>
                  <span className="text-sm">{a.item}</span>
                </li>
              ))}
            </ol>

            <h2 className="mb-6 mt-16 text-2xl font-extrabold uppercase tracking-tighter">Featured speakers</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {event.speakers.map((s) => (
                <div key={s} className="rounded-xl border border-border bg-card p-4 text-sm font-semibold">{s}</div>
              ))}
            </div>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl bg-primary p-6 text-primary-foreground">
              <div className="mb-4 font-mono text-[10px] uppercase tracking-widest text-accent">Event details</div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between border-b border-primary-foreground/10 pb-3"><span className="text-primary-foreground/60">Date</span><span className="font-bold">{event.date}</span></div>
                <div className="flex justify-between border-b border-primary-foreground/10 pb-3"><span className="text-primary-foreground/60">Time</span><span className="font-bold">{event.time}</span></div>
                <div className="flex justify-between border-b border-primary-foreground/10 pb-3"><span className="text-primary-foreground/60">Venue</span><span className="font-bold">{event.location}</span></div>
                <div className="flex justify-between"><span className="text-primary-foreground/60">Audience</span><span className="text-right font-bold">{event.audience}</span></div>
              </div>
            </div>
            <Link to="/contact" className="block rounded-2xl bg-accent p-6 text-center font-bold text-accent-foreground">
              RSVP or ask a question →
            </Link>
          </aside>
        </div>
      </Section>

      <Section className="bg-card">
        <h2 className="mb-10 text-2xl font-bold">Other upcoming events</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {others.map((e) => (
            <Link key={e.slug} to="/news/events/$slug" params={{ slug: e.slug }} className="group rounded-2xl border border-border bg-background p-6 transition-colors hover:border-accent">
              <div className="font-mono text-[10px] uppercase tracking-widest text-accent">{e.date}</div>
              <div className="mt-3 font-bold group-hover:text-accent">{e.title}</div>
              <div className="mt-1 text-xs text-foreground/60">📍 {e.location}</div>
            </Link>
          ))}
        </div>
      </Section>
    </PageShell>
  );
}
