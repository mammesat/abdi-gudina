import { createFileRoute, Link } from "@tanstack/react-router";
import almazImg from "@/assets/almaz-story.jpg";
import heroImg from "@/assets/hero-community.jpg";
import { PageShell, Section, SectionHead } from "@/components/site/PageShell";
import { NEWS } from "@/content/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Abdi Gudina Financial Cooperatives Union — Cooperative Finance for Ethiopia" },
      { name: "description", content: "Serving 50 SACCOs and 12,000+ members across Ethiopia since 2007. Savings, loans, credit-life insurance, and cooperative investment." },
      { property: "og:title", content: "Abdi Gudina Financial Cooperatives Union" },
      { property: "og:description", content: "Cooperative finance for Ethiopia — 50 SACCOs, 12,000+ members, 152M Birr disbursed." },
    ],
  }),
  component: HomePage,
});

const services = [
  { n: "01", title: "Savings", to: "/services/savings", desc: "Secure, interest-bearing savings accounts designed for long-term cooperative growth for SACCOs and individual members." },
  { n: "02", title: "Loans", to: "/services/loans", desc: "Affordable capital at a standardized 14% rate — from 50,000 up to 5,000,000 Birr to fuel member enterprises." },
  { n: "03", title: "Credit Life", to: "/services/insurance", desc: "Comprehensive credit-life insurance protecting borrowers and their families through every stage of repayment." },
  { n: "04", title: "Portfolio", to: "/services/investments", desc: "Diversified investment across grain trading, agro-chemicals, real estate, and vehicle rental for union-wide growth." },
];

function HomePage() {
  return (
    <PageShell>
      <Hero />
      <StatsGrid />
      <Services />
      <SuccessStory />
      <NewsPreview />
      <CTA />
    </PageShell>
  );
}

function Hero() {
  return (
    <section className="px-6 py-20 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl animate-fade-up">
          <span className="mb-6 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-accent">
            <span className="inline-block h-px w-8 bg-accent" />
            Est. 2007 · Adama, Ethiopia
          </span>
          <h1 className="text-balance text-5xl font-extrabold leading-[0.95] tracking-tight lg:text-7xl">
            Empowering communities through{" "}
            <span className="text-accent">cooperative</span> finance.
          </h1>
          <p className="mt-8 max-w-xl text-pretty text-lg text-foreground/70">
            Since 2007, we have been building a resilient financial ecosystem in
            Ethiopia — serving 50 member SACCOs and over 12,000 members with
            transparent, member-owned capital.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/services" className="rounded-full bg-primary px-8 py-4 text-sm font-bold tracking-wide text-primary-foreground transition-transform hover:-translate-y-0.5">
              Explore Our Services
            </Link>
            <Link to="/saccos" className="rounded-full border border-primary/20 px-8 py-4 text-sm font-bold tracking-wide transition-colors hover:bg-primary/5">
              Find Your SACCO
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsGrid() {
  return (
    <section className="px-6 pb-24">
      <div className="mx-auto max-w-7xl animate-fade-up [animation-delay:200ms]">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          <div className="flex aspect-video flex-col justify-between rounded-2xl bg-primary p-8 text-primary-foreground md:col-span-2 md:aspect-auto">
            <span className="font-mono text-xs uppercase tracking-widest opacity-60">Member Reach</span>
            <div className="mt-auto">
              <div className="text-6xl font-extrabold">12,000+</div>
              <div className="mt-2 text-sm opacity-80">Individual members across the Oromia Region</div>
            </div>
          </div>
          <div className="flex flex-col justify-between rounded-2xl border border-border bg-card p-8">
            <span className="font-mono text-xs uppercase tracking-widest text-accent">Affiliates</span>
            <div className="mt-auto text-4xl font-extrabold italic">50 <span className="text-2xl not-italic">SACCOs</span></div>
          </div>
          <div className="flex flex-col justify-between rounded-2xl border border-border bg-card p-8">
            <span className="font-mono text-xs uppercase tracking-widest text-accent">Capital</span>
            <div className="mt-auto text-4xl font-extrabold italic">41.6M<span className="ml-1 text-sm font-normal not-italic">Birr</span></div>
          </div>
          <div className="col-span-1 flex flex-col justify-between rounded-2xl border border-border bg-card p-8 md:col-span-2">
            <span className="font-mono text-xs uppercase tracking-widest text-accent">Member Savings</span>
            <div className="mt-auto text-4xl font-extrabold italic">60.9M<span className="ml-1 text-sm font-normal not-italic">Birr</span></div>
          </div>
          <div className="col-span-1 flex flex-col justify-between rounded-2xl border border-border bg-card p-8 md:col-span-2">
            <span className="font-mono text-xs uppercase tracking-widest text-accent">Loan Portfolio</span>
            <div className="mt-auto text-4xl font-extrabold italic">152M<span className="ml-1 text-sm font-normal not-italic">Birr disbursed</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="bg-card py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHead
          eyebrow="What We Offer"
          title="Core Services"
          aside="Providing the structural foundation for financial independence through member-first policies and cooperative principles."
        />
        <div className="grid grid-cols-1 gap-px bg-border md:grid-cols-4">
          {services.map((s) => (
            <Link key={s.n} to={s.to} className="group border-border bg-card p-10 transition-colors duration-500 hover:bg-primary">
              <div className="mb-8 flex size-12 items-center justify-center rounded-full border border-accent transition-colors group-hover:border-primary-foreground/20">
                <span className="font-mono font-bold text-accent">{s.n}</span>
              </div>
              <h3 className="mb-4 text-xl font-bold group-hover:text-primary-foreground">{s.title}</h3>
              <p className="text-sm text-foreground/60 group-hover:text-primary-foreground/70">{s.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function SuccessStory() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto flex max-w-7xl flex-col overflow-hidden rounded-3xl bg-primary-dark lg:flex-row">
        <div className="flex flex-col justify-center p-12 lg:w-1/2 lg:p-20">
          <div className="mb-8 inline-block w-fit rounded-full border border-accent/30 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-accent">
            Member Spotlight
          </div>
          <blockquote className="text-primary-foreground">
            <p className="text-2xl font-medium leading-snug lg:text-3xl">
              &ldquo;The transition from a government employee to a successful merchant was possible because Abdi Gudina believed in my vision.&rdquo;
            </p>
            <footer className="mt-10 flex items-center gap-4">
              <img src={almazImg} alt="Almaz Hailu" width={48} height={48} loading="lazy" className="h-12 w-12 rounded-full border border-accent/40 object-cover" />
              <div>
                <cite className="block font-bold not-italic">Almaz Hailu</cite>
                <span className="text-sm text-primary-foreground/50">Merchant · 2.9M Birr loan recipient</span>
              </div>
            </footer>
            <Link to="/impact" className="mt-10 inline-block text-sm font-semibold text-accent hover:text-primary-foreground">
              More member stories →
            </Link>
          </blockquote>
        </div>
        <div className="relative min-h-[400px] overflow-hidden lg:w-1/2">
          <img src={almazImg} alt="Almaz Hailu at her shop" width={1200} height={1200} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        </div>
      </div>
    </section>
  );
}

function NewsPreview() {
  return (
    <section className="bg-card py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHead
          eyebrow="Latest Updates"
          title="News & Announcements"
          aside={<Link to="/news" className="text-sm font-semibold text-accent hover:text-primary">View all news →</Link>}
        />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {NEWS.slice(0, 3).map((n) => (
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
      </div>
    </section>
  );
}

function CTA() {
  return (
    <Section className="pb-24">
      <div className="relative overflow-hidden rounded-3xl border-t border-border pt-24 text-center">
        <img src={heroImg} alt="" aria-hidden width={1600} height={1000} loading="lazy" className="pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover opacity-[0.06]" />
        <span className="mb-4 inline-block font-mono text-[11px] uppercase tracking-widest text-accent">Join the Union</span>
        <h2 className="mb-6 text-4xl font-extrabold uppercase tracking-tighter lg:text-5xl">Ready to grow together?</h2>
        <p className="mx-auto mb-10 max-w-xl text-lg text-foreground/60">
          Discover how cooperative membership can transform your financial future — for your SACCO and your community.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/saccos" className="rounded-full bg-accent px-10 py-4 text-sm font-bold text-accent-foreground shadow-xl shadow-accent/20 transition-transform hover:scale-105">
            Find a SACCO near you
          </Link>
          <Link to="/saccos/benefits" className="rounded-full border border-primary/20 px-10 py-4 text-sm font-bold transition-colors hover:bg-primary/5">
            Learn about membership
          </Link>
        </div>
      </div>
    </Section>
  );
}
