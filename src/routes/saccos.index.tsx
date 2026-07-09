import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageShell, PageHeader, Section } from "@/components/site/PageShell";
import { SACCOS } from "@/content/site";

export const Route = createFileRoute("/saccos/")({
  head: () => ({
    meta: [
      { title: "SACCO Directory — AG Union" },
      { name: "description", content: "Browse AG Union's 50 member SACCOs across the Oromia Region — search by location and community." },
      { property: "og:title", content: "SACCO Directory" },
      { property: "og:description", content: "50 member SACCOs across the Oromia Region." },
    ],
  }),
  component: SaccosIndex,
});

function SaccosIndex() {
  const [q, setQ] = useState("");
  const [loc, setLoc] = useState("All");

  const locations = useMemo(() => ["All", ...Array.from(new Set(SACCOS.map((s) => s.location)))], []);
  const filtered = useMemo(
    () =>
      SACCOS.filter(
        (s) =>
          (loc === "All" || s.location === loc) &&
          s.name.toLowerCase().includes(q.toLowerCase()),
      ),
    [q, loc],
  );

  return (
    <PageShell>
      <PageHeader
        eyebrow="Member Directory"
        title="50 SACCOs. One Union."
        intro="Every member SACCO is a locally-owned cooperative serving its community. Search below to find a SACCO near you."
        variant="dark"
      />
      <Section>
        <div className="mb-10 flex flex-col gap-4 md:flex-row">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search SACCOs…"
            className="w-full rounded-full border border-border bg-background px-5 py-3 text-sm focus:border-accent focus:outline-none"
          />
          <select
            value={loc}
            onChange={(e) => setLoc(e.target.value)}
            className="rounded-full border border-border bg-background px-5 py-3 text-sm focus:border-accent focus:outline-none"
          >
            {locations.map((l) => <option key={l}>{l}</option>)}
          </select>
        </div>
        <div className="mb-6 font-mono text-xs uppercase tracking-widest text-foreground/50">
          Showing {filtered.length} of {SACCOS.length} SACCOs
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((s) => (
            <div key={s.name} className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-accent">
              <div className="mb-3 flex items-center gap-2">
                <span className="rounded-full bg-accent/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest text-accent">{s.location}</span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-foreground/40">Est. {s.founded}</span>
              </div>
              <h3 className="mb-4 text-lg font-bold leading-snug">{s.name}</h3>
              <div className="flex items-end justify-between border-t border-border pt-4">
                <div>
                  <div className="text-xs text-foreground/50">Members</div>
                  <div className="font-mono text-2xl font-bold">{s.members.toLocaleString()}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 rounded-2xl bg-primary p-8 text-center text-primary-foreground">
          <p className="mb-4">Don't see a SACCO in your community?</p>
          <Link to="/saccos/join" className="inline-block rounded-full bg-accent px-6 py-3 text-sm font-bold text-accent-foreground">
            Start the joining process →
          </Link>
        </div>
      </Section>
    </PageShell>
  );
}
