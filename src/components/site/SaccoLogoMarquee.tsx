import { useEffect, useState } from "react";
import { SACCO_BRANDS, type SaccoBrand } from "@/content/site";
import { getSaccos, type SiteSacco } from "@/lib/wp.functions";

/**
 * Dual-row opposing marquee — a "living network" band of member SACCO logos.
 *
 * Rendering rules per SACCO:
 *   1. If the ACF `logo` (or WP featured image) is present → render <img>.
 *   2. Otherwise → typographic monogram chip (premium fallback).
 *
 * Data flow:
 *   - Static seed: SACCO_BRANDS from src/content/site.ts (no logos yet).
 *   - When the WordPress `sacco` CPT + ACF logo field are populated, this
 *     component fetches getSaccos() on mount and swaps in real images.
 *
 * The component stays a client component so we can progressively enhance
 * without changing the surrounding home-page composition.
 */
export function SaccoLogoMarquee() {
  const [saccos, setSaccos] = useState<(SiteSacco | SaccoBrand)[]>(SACCO_BRANDS);

  useEffect(() => {
    let cancelled = false;
    void getSaccos()
      .then((live) => {
        if (cancelled || !Array.isArray(live) || live.length === 0) return;
        // Only swap when at least one WP entry actually carries a logo —
        // otherwise the static monogram chips look better.
        if (live.some((s) => Boolean(s.logo))) setSaccos(live);
      })
      .catch(() => {
        /* silent — keep the static seed */
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const half = Math.ceil(saccos.length / 2);
  const rowA = saccos.slice(0, half);
  const rowB = saccos.slice(half);

  return (
    <section className="relative overflow-hidden bg-primary-dark py-20 text-primary-foreground">
      <div className="mx-auto mb-12 max-w-7xl px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-widest text-accent">
              <span className="mr-2 inline-block h-px w-6 align-middle bg-accent" />
              The Network
            </span>
            <h2 className="mt-4 text-balance text-3xl font-extrabold uppercase leading-[1.05] tracking-tighter lg:text-5xl">
              50 SACCOs. One Union.
            </h2>
          </div>
          <p className="max-w-md text-sm text-primary-foreground/60">
            Every mark below is a primary cooperative serving its own community — federated into
            AG Union for shared capital, credit-life protection, and cooperative growth.
          </p>
        </div>
      </div>

      <MarqueeRow items={[...rowA, ...rowA]} direction="left" />
      <div className="h-4" />
      <MarqueeRow items={[...rowB, ...rowB]} direction="right" />

      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-primary-dark to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-primary-dark to-transparent" />
    </section>
  );
}

function MarqueeRow({
  items,
  direction,
}: {
  items: (SiteSacco | SaccoBrand)[];
  direction: "left" | "right";
}) {
  return (
    <div className="group flex overflow-hidden">
      <div
        className={`flex shrink-0 items-center gap-4 pr-4 ${
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
        } group-hover:[animation-play-state:paused]`}
        style={{ width: "max-content" }}
      >
        {items.map((s, i) => (
          <LogoChip key={`${s.name}-${i}`} sacco={s} />
        ))}
      </div>
    </div>
  );
}

function LogoChip({ sacco }: { sacco: SiteSacco | SaccoBrand }) {
  const initials = sacco.name
    .replace(/SACCO|Union|Cooperative|Coop/gi, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  return (
    <div className="flex h-20 min-w-[260px] items-center gap-4 rounded-2xl border border-primary-foreground/10 bg-primary-foreground/[0.03] px-5 backdrop-blur-sm transition-colors hover:border-accent/60 hover:bg-primary-foreground/[0.06]">
      {sacco.logo ? (
        <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-primary-foreground/10 ring-1 ring-inset ring-primary-foreground/15">
          <img
            src={sacco.logo}
            alt={`${sacco.name} logo`}
            width={48}
            height={48}
            loading="lazy"
            className="h-full w-full object-contain"
          />
        </div>
      ) : (
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent/25 to-accent/5 font-mono text-sm font-extrabold text-accent ring-1 ring-inset ring-accent/30">
          {initials || "SC"}
        </div>
      )}
      <div className="min-w-0">
        <div className="truncate text-sm font-bold text-primary-foreground">{sacco.name}</div>
        <div className="mt-0.5 font-mono text-[10px] uppercase tracking-widest text-primary-foreground/50">
          {sacco.location || "Oromia"} · Member SACCO
        </div>
      </div>
    </div>
  );
}
