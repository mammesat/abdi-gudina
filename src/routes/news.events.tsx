import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader, Section } from "@/components/site/PageShell";
import { EVENTS } from "@/content/site";

export const Route = createFileRoute("/news/events")({
  head: () => ({
    meta: [
      { title: "Events — AG Union" },
      { name: "description", content: "Upcoming AG Union events: forums, summits, training days, and community celebrations." },
      { property: "og:title", content: "AG Union Events" },
      { property: "og:description", content: "Upcoming forums, summits, and community events." },
    ],
  }),
  component: EventsPage,
});

function EventsPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Events"
        title="Come together."
        intro="Forums, summits, and celebrations where members, SACCO leaders, and partners meet in person."
      />
      <Section>
        <div className="space-y-4">
          {EVENTS.map((e) => {
            const [month, day, year] = e.date.replace(",", "").split(" ");
            return (
              <article key={e.title} className="flex flex-col gap-6 rounded-2xl border border-border bg-card p-6 sm:flex-row sm:items-center">
                <div className="flex w-24 shrink-0 flex-col items-center rounded-2xl bg-primary py-4 text-primary-foreground">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-accent">{month}</span>
                  <span className="text-3xl font-extrabold">{day}</span>
                  <span className="font-mono text-[10px] opacity-60">{year}</span>
                </div>
                <div className="flex-1">
                  <span className="mb-2 inline-block rounded-full bg-accent/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-accent">{e.tag}</span>
                  <h3 className="text-xl font-bold">{e.title}</h3>
                  <p className="mt-1 text-sm text-foreground/60">📍 {e.location}</p>
                </div>
                <button className="rounded-full border border-primary/20 px-6 py-2 text-sm font-bold transition-colors hover:bg-primary hover:text-primary-foreground">
                  RSVP
                </button>
              </article>
            );
          })}
        </div>
      </Section>
    </PageShell>
  );
}
