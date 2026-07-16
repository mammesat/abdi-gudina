/**
 * Homepage sections — props-driven, one component per WordPress template part.
 *
 * Every section here is a thin composition of pattern primitives from
 * `src/components/patterns/index.tsx` and consumes structured content from
 * `src/content/site.ts` (the `HOME` object) plus the shared CPT feeds
 * (`NEWS`, `EVENTS`, `STORIES`, `MILESTONES`).
 *
 * WordPress template-part mapping (Elementor Loop / Theme Builder):
 *   HeroSection            → template-parts/home-hero.php           (ACF group: home.hero)
 *   StatsSection           → template-parts/home-stats.php          (ACF repeater: home.stats)
 *   AboutPreviewSection    → template-parts/home-about.php          (ACF group: home.about)
 *   ServicesSection        → template-parts/home-services.php       (ACF repeater: home.services)
 *   JourneySection         → template-parts/home-journey.php        (ACF repeater: home.journey)
 *   TimelineSection        → template-parts/home-timeline.php       (CPT: milestone)
 *   SuccessStorySection    → template-parts/home-story.php          (CPT: story, single featured)
 *   FinancialsSection      → template-parts/home-financials.php     (ACF repeater: home.financials)
 *   NewsPreviewSection     → template-parts/home-news.php           (post loop, latest 3)
 *   ManagerMessageSection  → template-parts/home-manager.php        (ACF group: home.managerMessage)
 *   FaqSection             → template-parts/home-faq.php            (ACF repeater / CPT: faq)
 *   EventsSection          → template-parts/home-events.php         (CPT: event, upcoming 4)
 *   CtaSection             → template-parts/home-cta.php            (ACF group: home.cta)
 *   AwardsSection          → template-parts/home-awards.php         (ACF repeater / CPT: award)
 */
import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Container, Eyebrow, SectionHeader, StatCard, Quote } from "@/components/patterns";
import type { EventItem, Story } from "@/content/site";

/* ---------------- shared shell ---------------- */

function HomeSection({
  id,
  tone = "default",
  children,
  className = "",
}: {
  id?: string;
  tone?: "default" | "muted" | "primary";
  children: ReactNode;
  className?: string;
}) {
  const bg =
    tone === "muted" ? "bg-card" : tone === "primary" ? "bg-primary text-primary-foreground" : "";
  return (
    <section id={id} className={`py-20 lg:py-24 ${bg} ${className}`.trim()}>
      <Container>{children}</Container>
    </section>
  );
}

/* ---------------- Hero ---------------- */

type HeroProps = {
  eyebrow: string;
  titleLead: string;
  titleAccent: string;
  titleTrail: string;
  intro: string;
  primaryCta: { label: string; to: string };
  secondaryCta: { label: string; to: string };
};

export function HeroSection({ eyebrow, titleLead, titleAccent, titleTrail, intro, primaryCta, secondaryCta }: HeroProps) {
  return (
    <section className="px-6 py-20 lg:py-32">
      <Container>
        <div className="max-w-3xl animate-fade-up">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-6 text-balance text-5xl font-extrabold leading-[0.95] tracking-tight lg:text-7xl">
            {titleLead} <span className="text-accent">{titleAccent}</span> {titleTrail}
          </h1>
          <p className="mt-8 max-w-xl text-pretty text-lg text-foreground/70">{intro}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to={primaryCta.to as never} className="rounded-full bg-primary px-8 py-4 text-sm font-bold tracking-wide text-primary-foreground transition-transform hover:-translate-y-0.5">
              {primaryCta.label}
            </Link>
            <Link to={secondaryCta.to as never} className="rounded-full border border-primary/20 px-8 py-4 text-sm font-bold tracking-wide transition-colors hover:bg-primary/5">
              {secondaryCta.label}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ---------------- Stats grid ---------------- */

type StatItem = { label: string; value: string; hint?: string; featured?: boolean };

export function StatsSection({ items }: { items: StatItem[] }) {
  const featured = items.find((s) => s.featured);
  const rest = items.filter((s) => !s.featured);
  return (
    <section className="px-6 pb-24">
      <Container>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          {featured && (
            <div className="flex aspect-video flex-col justify-between rounded-2xl bg-primary p-8 text-primary-foreground md:col-span-2 md:aspect-auto">
              <span className="font-mono text-xs uppercase tracking-widest opacity-60">{featured.label}</span>
              <div className="mt-auto">
                <div className="text-6xl font-extrabold">{featured.value}</div>
                {featured.hint && <div className="mt-2 text-sm opacity-80">{featured.hint}</div>}
              </div>
            </div>
          )}
          {rest.map((s, i) => (
            <div key={s.label} className={`flex flex-col justify-between rounded-2xl border border-border bg-card p-8 ${i >= 2 ? "md:col-span-2" : ""}`}>
              <span className="font-mono text-xs uppercase tracking-widest text-accent">{s.label}</span>
              <div className="mt-auto text-4xl font-extrabold italic">
                {s.value}
                {s.hint && <span className="ml-1 text-sm font-normal not-italic">{s.hint}</span>}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------------- About preview ---------------- */

type AboutProps = {
  eyebrow: string;
  titleLead: string;
  titleAccent: string;
  paragraphs: string[];
  facts: { label: string; value: string }[];
  cta: { label: string; to: string };
};

export function AboutPreviewSection({ eyebrow, titleLead, titleAccent, paragraphs, facts, cta }: AboutProps) {
  return (
    <HomeSection>
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="mt-4 text-4xl font-extrabold uppercase leading-[1.05] tracking-tighter lg:text-5xl">
            {titleLead}
            <br />
            <span className="text-accent">{titleAccent}</span>
          </h2>
        </div>
        <div className="lg:col-span-7">
          {paragraphs.map((p, i) => (
            <p key={i} className={`text-lg leading-relaxed text-foreground/70 ${i > 0 ? "mt-6" : ""}`}>{p}</p>
          ))}
          <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
            {facts.map((f) => (
              <div key={f.label}>
                <dt className="font-mono text-xs uppercase tracking-widest text-foreground/50">{f.label}</dt>
                <dd className="mt-2 text-2xl font-extrabold">{f.value}</dd>
              </div>
            ))}
          </dl>
          <Link to={cta.to as never} className="mt-10 inline-block text-sm font-semibold text-accent hover:text-primary">
            {cta.label}
          </Link>
        </div>
      </div>
    </HomeSection>
  );
}

/* ---------------- Services ---------------- */

type ServiceItem = { n: string; title: string; to: string; desc: string };

export function ServicesSection({ items }: { items: ServiceItem[] }) {
  return (
    <HomeSection tone="muted">
      <SectionHeader
        eyebrow="What We Offer"
        title="Core Services"
        aside="Providing the structural foundation for financial independence through member-first policies and cooperative principles."
      />
      <div className="grid grid-cols-1 gap-px bg-border md:grid-cols-4">
        {items.map((s) => (
          <Link key={s.n} to={s.to as never} className="group border-border bg-card p-10 transition-colors duration-500 hover:bg-primary">
            <div className="mb-8 flex size-12 items-center justify-center rounded-full border border-accent transition-colors group-hover:border-primary-foreground/20">
              <span className="font-mono font-bold text-accent">{s.n}</span>
            </div>
            <h3 className="mb-4 text-xl font-bold group-hover:text-primary-foreground">{s.title}</h3>
            <p className="text-sm text-foreground/60 group-hover:text-primary-foreground/70">{s.desc}</p>
          </Link>
        ))}
      </div>
    </HomeSection>
  );
}

/* ---------------- Journey (How-it-works) ---------------- */

type JourneyStep = { n: string; title: string; desc: string };

export function JourneySection({ items }: { items: JourneyStep[] }) {
  return (
    <HomeSection>
      <SectionHeader
        eyebrow="Membership Journey"
        title="How to become a member"
        aside="Four steps from first savings deposit to fully funded enterprise loan — the cooperative way."
      />
      <ol className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {items.map((s, i) => (
          <li key={s.n} className="group relative flex flex-col rounded-2xl border border-border bg-card p-8 transition-shadow hover:shadow-xl hover:shadow-primary/5">
            <div className="mb-8 flex items-center justify-between">
              <span className="font-mono text-xs uppercase tracking-widest text-accent">Step {s.n}</span>
              {i < items.length - 1 && <span aria-hidden className="text-accent/40">→</span>}
            </div>
            <h3 className="mb-3 text-xl font-bold">{s.title}</h3>
            <p className="text-sm text-foreground/60">{s.desc}</p>
          </li>
        ))}
      </ol>
      <div className="mt-10 text-center">
        <Link to="/saccos/join" className="inline-block rounded-full bg-primary px-8 py-4 text-sm font-bold text-primary-foreground transition-transform hover:-translate-y-0.5">
          Start your membership →
        </Link>
      </div>
    </HomeSection>
  );
}

/* ---------------- Timeline ---------------- */

export function TimelineSection({ items }: { items: { year: string; title: string; desc: string }[] }) {
  return (
    <section className="bg-primary py-24 text-primary-foreground">
      <Container>
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Eyebrow>Our Trajectory</Eyebrow>
            <h2 className="mt-4 text-3xl font-extrabold uppercase tracking-tighter lg:text-4xl">Nineteen years of cooperative growth</h2>
          </div>
          <p className="max-w-md text-sm text-primary-foreground/60">
            Each milestone is a member decision — voted by SACCO delegates and audited annually.
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-primary-foreground/15 md:block" />
          <ol className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-8">
            {items.map((m) => (
              <li key={m.year} className="group relative">
                <div className="relative z-10 mb-4 flex size-12 items-center justify-center rounded-full border border-accent/40 bg-primary transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <span className="font-mono text-[11px] font-bold text-accent group-hover:text-accent-foreground">{m.year}</span>
                </div>
                <h3 className="mb-2 text-sm font-bold leading-snug">{m.title}</h3>
                <p className="text-xs text-primary-foreground/50">{m.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}

/* ---------------- Success story ---------------- */

export function SuccessStorySection({ story, image }: { story: Story; image: string }) {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto flex max-w-7xl flex-col overflow-hidden rounded-3xl bg-primary-dark lg:flex-row">
        <div className="flex flex-col justify-center p-12 lg:w-1/2 lg:p-20">
          <div className="mb-8 inline-block w-fit rounded-full border border-accent/30 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-accent">
            Member Spotlight
          </div>
          <Quote cite={story.name} role={`${story.role} · ${story.loan} loan recipient`}>
            {story.quote}
          </Quote>
          <Link
            to="/impact/stories/$slug"
            params={{ slug: story.slug }}
            className="mt-8 inline-block text-sm font-semibold text-accent hover:text-primary-foreground"
          >
            Read {story.name.split(" ")[0]}'s full story →
          </Link>
        </div>
        <div className="relative min-h-[400px] overflow-hidden lg:w-1/2">
          <img src={image} alt={`${story.name} at work`} width={1200} height={1200} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        </div>
      </div>
    </section>
  );
}

/* ---------------- Financials ---------------- */

type FinancialItem = { label: string; value: string; unit: string; delta: string; direction: "up" | "down" | "flat" };

export function FinancialsSection({ items }: { items: FinancialItem[] }) {
  return (
    <HomeSection>
      <SectionHeader
        eyebrow="Radical Transparency"
        title="FY 2025 financial snapshot"
        aside={<Link to="/transparency" className="text-sm font-semibold text-accent hover:text-primary">View full financials →</Link>}
      />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {items.map((f) => (
          <StatCard
            key={f.label}
            label={f.label}
            value={`${f.value} ${f.unit}`}
            trend={{ direction: f.direction, text: `${f.delta} YoY` }}
          />
        ))}
      </div>
      <div className="mt-10 flex flex-wrap items-center justify-between gap-6 rounded-2xl border border-border bg-card p-6">
        <div>
          <Eyebrow>Independently Audited</Eyebrow>
          <div className="mt-1 text-sm text-foreground/70">Annual statements audited by a licensed Ethiopian firm and adopted by the General Assembly.</div>
        </div>
        <Link to="/transparency/reports" className="rounded-full border border-primary/20 px-6 py-3 text-xs font-bold uppercase tracking-wide transition-colors hover:bg-primary/5">
          Download 2025 Report ↓
        </Link>
      </div>
    </HomeSection>
  );
}

/* ---------------- News preview ---------------- */

type NewsItem = { slug: string; date: string; tag: string; title: string; excerpt: string };

export function NewsPreviewSection({ items }: { items: NewsItem[] }) {
  return (
    <HomeSection tone="muted">
      <SectionHeader
        eyebrow="Latest Updates"
        title="News & Announcements"
        aside={<Link to="/news" className="text-sm font-semibold text-accent hover:text-primary">View all news →</Link>}
      />
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {items.map((n) => (
          <article key={n.slug} className="group flex flex-col gap-4 border-t border-border pt-6">
            <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest">
              <span className="text-accent">{n.tag}</span>
              <span className="text-foreground/40">{n.date}</span>
            </div>
            <h3 className="text-xl font-bold leading-snug transition-colors group-hover:text-accent">{n.title}</h3>
            <p className="text-sm text-foreground/60">{n.excerpt}</p>
            <Link to="/news/$slug" params={{ slug: n.slug }} className="mt-auto text-xs font-semibold text-primary transition-colors hover:text-accent">
              Read more →
            </Link>
          </article>
        ))}
      </div>
    </HomeSection>
  );
}

/* ---------------- Manager message ---------------- */

type ManagerProps = {
  name: string;
  role: string;
  initials: string;
  quote: string;
  paragraphs: string[];
  cta: { label: string; to: string };
};

export function ManagerMessageSection({ name, role, initials, quote, paragraphs, cta }: ManagerProps) {
  return (
    <HomeSection>
      <div className="grid grid-cols-1 gap-12 overflow-hidden rounded-3xl border border-border bg-card p-10 lg:grid-cols-12 lg:p-16">
        <div className="lg:col-span-4">
          <div className="relative aspect-square w-full max-w-[280px] overflow-hidden rounded-2xl bg-primary">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-mono text-6xl font-extrabold text-accent">{initials}</span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-primary-dark/90 p-4 backdrop-blur">
              <div className="font-bold text-primary-foreground">{name}</div>
              <div className="text-xs text-primary-foreground/60">{role}</div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-8">
          <Eyebrow>A Message from the GM</Eyebrow>
          <h2 className="mb-6 mt-4 text-3xl font-extrabold uppercase tracking-tighter lg:text-4xl">
            &ldquo;{quote}&rdquo;
          </h2>
          {paragraphs.map((p, i) => (
            <p key={i} className={`text-lg leading-relaxed text-foreground/70 ${i > 0 ? "mt-4" : ""}`}>{p}</p>
          ))}
          <Link to={cta.to as never} className="mt-8 inline-block text-sm font-semibold text-accent hover:text-primary">
            {cta.label}
          </Link>
        </div>
      </div>
    </HomeSection>
  );
}

/* ---------------- FAQ ---------------- */

export function FaqSection({ items }: { items: { q: string; a: string }[] }) {
  return (
    <HomeSection tone="muted">
      <SectionHeader
        eyebrow="Frequently Asked"
        title="Questions from members & SACCOs"
        aside={<Link to="/contact" className="text-sm font-semibold text-accent hover:text-primary">Ask your own question →</Link>}
      />
      <div className="mx-auto max-w-4xl divide-y divide-border overflow-hidden rounded-2xl border border-border bg-background">
        {items.map((f, i) => (
          <details key={f.q} className="group" open={i === 0}>
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 p-6 transition-colors hover:bg-primary/5">
              <span className="text-base font-bold leading-snug lg:text-lg">{f.q}</span>
              <span aria-hidden className="font-mono text-2xl text-accent transition-transform group-open:rotate-45">+</span>
            </summary>
            <div className="px-6 pb-6 text-sm leading-relaxed text-foreground/70 lg:text-base">{f.a}</div>
          </details>
        ))}
      </div>
    </HomeSection>
  );
}

/* ---------------- Events ribbon ---------------- */

export function EventsSection({ items }: { items: EventItem[] }) {
  return (
    <HomeSection>
      <SectionHeader
        eyebrow="What's Next"
        title="Upcoming events"
        aside={<Link to="/news/events" className="text-sm font-semibold text-accent hover:text-primary">Full events calendar →</Link>}
      />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {items.map((e) => (
          <Link
            key={e.slug}
            to="/news/events/$slug"
            params={{ slug: e.slug }}
            className="group flex flex-col gap-6 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-accent/50"
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-accent">{e.date}</div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-foreground/50">{e.location}</div>
              </div>
              <span className="rounded-full border border-border px-2 py-1 font-mono text-[9px] uppercase tracking-widest text-foreground/60">{e.tag}</span>
            </div>
            <h3 className="text-base font-bold leading-snug transition-colors group-hover:text-accent">{e.title}</h3>
          </Link>
        ))}
      </div>
    </HomeSection>
  );
}

/* ---------------- Final CTA ---------------- */

type CtaProps = {
  eyebrow: string;
  title: string;
  intro: string;
  primary: { label: string; to: string };
  secondary: { label: string; to: string };
  bgImage: string;
};

export function CtaSection({ eyebrow, title, intro, primary, secondary, bgImage }: CtaProps) {
  return (
    <HomeSection className="pb-24">
      <div className="relative overflow-hidden rounded-3xl border-t border-border pt-24 text-center">
        <img src={bgImage} alt="" aria-hidden width={1600} height={1000} loading="lazy" className="pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover opacity-[0.06]" />
        <div className="mb-4 flex justify-center"><Eyebrow>{eyebrow}</Eyebrow></div>
        <h2 className="mb-6 text-4xl font-extrabold uppercase tracking-tighter lg:text-5xl">{title}</h2>
        <p className="mx-auto mb-10 max-w-xl text-lg text-foreground/60">{intro}</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to={primary.to as never} className="rounded-full bg-accent px-10 py-4 text-sm font-bold text-accent-foreground shadow-xl shadow-accent/20 transition-transform hover:scale-105">
            {primary.label}
          </Link>
          <Link to={secondary.to as never} className="rounded-full border border-primary/20 px-10 py-4 text-sm font-bold transition-colors hover:bg-primary/5">
            {secondary.label}
          </Link>
        </div>
      </div>
    </HomeSection>
  );
}

/* ---------------- Awards ---------------- */

export function AwardsSection({ items }: { items: { year: string; title: string; body: string }[] }) {
  return (
    <section className="border-t border-border bg-card py-16">
      <Container>
        <div className="mb-10 flex items-center justify-between">
          <Eyebrow>Recognition</Eyebrow>
          <span className="hidden text-xs text-foreground/50 md:block">Five consecutive years of independent recognition</span>
        </div>
        <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-border md:grid-cols-5">
          {items.map((a) => (
            <li key={a.year} className="flex flex-col gap-3 bg-card p-6">
              <div className="font-mono text-3xl font-extrabold text-accent">{a.year}</div>
              <div className="text-sm font-bold leading-snug">{a.title}</div>
              <div className="text-xs text-foreground/50">{a.body}</div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
