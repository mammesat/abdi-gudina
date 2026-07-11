import { createFileRoute, Link } from "@tanstack/react-router";
import almazImg from "@/assets/almaz-story.jpg";
import heroImg from "@/assets/hero-community.jpg";
import { PageShell, Section, SectionHead } from "@/components/site/PageShell";
import { SaccoLogoMarquee } from "@/components/site/SaccoLogoMarquee";
import { NEWS, MILESTONES, EVENTS } from "@/content/site";

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
      <AboutPreview />
      <Services />
      <SaccoLogoMarquee />
      <HowItWorks />
      <GrowthTimeline />
      <SuccessStory />
      <FinancialSnapshot />
      <NewsPreview />
      <ManagerWelcome />
      <FAQ />
      <EventsRibbon />
      <CTA />
      <Awards />

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

function AboutPreview() {
  return (
    <Section className="pb-8 pt-4">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <span className="mb-4 inline-block font-mono text-[11px] uppercase tracking-widest text-accent">Our Origin</span>
          <h2 className="text-4xl font-extrabold uppercase leading-[1.05] tracking-tighter lg:text-5xl">
            Rooted in Adama.<br />
            <span className="text-accent">Built by members.</span>
          </h2>
        </div>
        <div className="lg:col-span-7">
          <p className="text-lg leading-relaxed text-foreground/70">
            Founded in 2007 by eight primary SACCOs in Adama, Abdi Gudina emerged from a simple
            conviction — that Ethiopian communities are better served when their savings, credit,
            and enterprise capital stay in their own hands.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-foreground/70">
            Nineteen years later, we federate 50 SACCOs and 12,000+ members into a single,
            member-governed union — reinvesting every Birr into local livelihoods, women-led
            businesses, and smallholder agriculture across the Oromia Region.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-foreground/50">Founded</div>
              <div className="mt-2 text-2xl font-extrabold">2007</div>
            </div>
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-foreground/50">Governance</div>
              <div className="mt-2 text-2xl font-extrabold">Member-Owned</div>
            </div>
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-foreground/50">Region</div>
              <div className="mt-2 text-2xl font-extrabold">Oromia</div>
            </div>
          </div>
          <Link to="/about" className="mt-10 inline-block text-sm font-semibold text-accent hover:text-primary">
            Read our full story →
          </Link>
        </div>
      </div>
    </Section>
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

const journeySteps = [
  { n: "01", title: "Find your SACCO", desc: "Locate a primary cooperative near you from our 50-strong network across Oromia." },
  { n: "02", title: "Register as a member", desc: "Complete SACCO membership, buy shares, and open your first savings account." },
  { n: "03", title: "Build savings history", desc: "Grow a consistent savings record — the foundation of your cooperative credit score." },
  { n: "04", title: "Access capital & grow", desc: "Unlock working-capital loans at 14% with credit-life insurance included." },
];

function HowItWorks() {
  return (
    <Section>
      <SectionHead
        eyebrow="Membership Journey"
        title="How to become a member"
        aside="Four steps from first savings deposit to fully funded enterprise loan — the cooperative way."
      />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {journeySteps.map((s, i) => (
          <div key={s.n} className="group relative flex flex-col rounded-2xl border border-border bg-card p-8 transition-shadow hover:shadow-xl hover:shadow-primary/5">
            <div className="mb-8 flex items-center justify-between">
              <span className="font-mono text-xs uppercase tracking-widest text-accent">Step {s.n}</span>
              {i < journeySteps.length - 1 && <span className="text-accent/40">→</span>}
            </div>
            <h3 className="mb-3 text-xl font-bold">{s.title}</h3>
            <p className="text-sm text-foreground/60">{s.desc}</p>
          </div>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Link to="/saccos/join" className="inline-block rounded-full bg-primary px-8 py-4 text-sm font-bold text-primary-foreground transition-transform hover:-translate-y-0.5">
          Start your membership →
        </Link>
      </div>
    </Section>
  );
}

function GrowthTimeline() {
  return (
    <section className="bg-primary py-24 text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="mb-4 inline-block font-mono text-[11px] uppercase tracking-widest text-accent">Our Trajectory</span>
            <h2 className="text-3xl font-extrabold uppercase tracking-tighter lg:text-4xl">Nineteen years of cooperative growth</h2>
          </div>
          <p className="max-w-md text-sm text-primary-foreground/60">
            Each milestone is a member decision — voted by SACCO delegates and audited annually.
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-primary-foreground/15 md:block" />
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-8">
            {MILESTONES.map((m) => (
              <div key={m.year} className="group relative">
                <div className="relative z-10 mb-4 flex size-12 items-center justify-center rounded-full border border-accent/40 bg-primary transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <span className="font-mono text-[11px] font-bold text-accent group-hover:text-accent-foreground">{m.year}</span>
                </div>
                <h3 className="mb-2 text-sm font-bold leading-snug">{m.title}</h3>
                <p className="text-xs text-primary-foreground/50">{m.desc}</p>
              </div>
            ))}
          </div>
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
            <Link to="/impact/stories/$slug" params={{ slug: "almaz-hailu" }} className="mt-10 inline-block text-sm font-semibold text-accent hover:text-primary-foreground">
              Read Almaz's full story →
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



const financials = [
  { label: "Total Assets", value: "218.4M", unit: "Birr", delta: "+12.4%" },
  { label: "Net Income", value: "9.7M", unit: "Birr", delta: "+8.1%" },
  { label: "Operating Ratio", value: "84.2", unit: "%", delta: "−1.6 pts" },
  { label: "Loan Recovery", value: "97.3", unit: "%", delta: "+0.9 pts" },
];

function FinancialSnapshot() {
  return (
    <Section>
      <SectionHead
        eyebrow="Radical Transparency"
        title="FY 2025 financial snapshot"
        aside={<Link to="/transparency" className="text-sm font-semibold text-accent hover:text-primary">View full financials →</Link>}
      />
      <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-border md:grid-cols-2 lg:grid-cols-4">
        {financials.map((f) => (
          <div key={f.label} className="flex flex-col justify-between gap-8 bg-card p-8">
            <span className="font-mono text-xs uppercase tracking-widest text-foreground/50">{f.label}</span>
            <div>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-extrabold">{f.value}</span>
                <span className="text-sm font-medium text-foreground/60">{f.unit}</span>
              </div>
              <div className="mt-2 font-mono text-xs text-accent">{f.delta} YoY</div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10 flex flex-wrap items-center justify-between gap-6 rounded-2xl border border-border bg-card p-6">
        <div>
          <div className="font-mono text-[11px] uppercase tracking-widest text-accent">Independently Audited</div>
          <div className="mt-1 text-sm text-foreground/70">Annual statements audited by a licensed Ethiopian firm and adopted by the General Assembly.</div>
        </div>
        <Link to="/transparency/reports" className="rounded-full border border-primary/20 px-6 py-3 text-xs font-bold uppercase tracking-wide transition-colors hover:bg-primary/5">
          Download 2025 Report ↓
        </Link>
      </div>
    </Section>
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

function ManagerWelcome() {
  return (
    <Section>
      <div className="grid grid-cols-1 gap-12 overflow-hidden rounded-3xl border border-border bg-card p-10 lg:grid-cols-12 lg:p-16">
        <div className="lg:col-span-4">
          <div className="relative aspect-square w-full max-w-[280px] overflow-hidden rounded-2xl bg-primary">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-mono text-6xl font-extrabold text-accent">DB</span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-primary-dark/90 p-4 backdrop-blur">
              <div className="font-bold text-primary-foreground">Ato Dereje Bekele</div>
              <div className="text-xs text-primary-foreground/60">General Manager</div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-8">
          <span className="mb-4 inline-block font-mono text-[11px] uppercase tracking-widest text-accent">A Message from the GM</span>
          <h2 className="mb-6 text-3xl font-extrabold uppercase tracking-tighter lg:text-4xl">
            &ldquo;Every Birr we hold belongs to a member.&rdquo;
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-foreground/70">
            When members entrust us with their savings, they entrust us with their family&rsquo;s
            future. Our job — mine, the board&rsquo;s, and every SACCO leader&rsquo;s — is to steward
            that trust with discipline, transparency, and courage.
          </p>
          <p className="text-lg leading-relaxed text-foreground/70">
            In 2026, we&rsquo;re doubling down on what has always worked: member-first governance,
            audited books, and capital that stays inside our communities.
          </p>
          <Link to="/about/governance" className="mt-8 inline-block text-sm font-semibold text-accent hover:text-primary">
            Meet the leadership team →
          </Link>
        </div>
      </div>
    </Section>
  );
}

const faqs = [
  {
    q: "What is a Financial Cooperative Union?",
    a: "It's a second-level cooperative owned by SACCOs rather than by individuals. Individuals join a SACCO; SACCOs join the Union. The Union then serves its member SACCOs with wholesale finance, shared services, training, and advocacy.",
  },
  {
    q: "How is AG Union different from a bank?",
    a: "We are member-owned. Every SACCO that joins the Union holds equal governance rights, and every Birr of surplus is either reinvested in member services or distributed back as patronage — no outside shareholders.",
  },
  {
    q: "What services do you provide to member SACCOs?",
    a: "Liquidity loans, pooled investment returns, credit-life insurance, capacity training for boards and staff, shared accounting and audit support, and representation before regulators.",
  },
  {
    q: "Can an individual join the Union directly?",
    a: "No. Individuals join a primary SACCO in their community. That SACCO — once it meets the affiliation standards — joins Abdi Gudina Union on their behalf.",
  },
  {
    q: "How can an existing SACCO affiliate with AG Union?",
    a: "Contact the Union office in Adama for the affiliation packet. The process involves a governance review, financial due diligence, and a General Assembly vote — typically completed within one quarter.",
  },
  {
    q: "Are your accounts audited?",
    a: "Yes. Annual statements are audited by an independent Ethiopian firm and adopted by the General Assembly. Recent audited reports are available under Resources → Annual Reports.",
  },
];

function FAQ() {
  return (
    <Section className="bg-card">
      <SectionHead
        eyebrow="Frequently Asked"
        title="Questions from members & SACCOs"
        aside={<Link to="/contact" className="text-sm font-semibold text-accent hover:text-primary">Ask your own question →</Link>}
      />
      <div className="mx-auto max-w-4xl divide-y divide-border overflow-hidden rounded-2xl border border-border bg-background">
        {faqs.map((f, i) => (
          <details key={f.q} className="group" open={i === 0}>
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 p-6 transition-colors hover:bg-primary/5">
              <span className="text-base font-bold leading-snug lg:text-lg">{f.q}</span>
              <span className="font-mono text-2xl text-accent transition-transform group-open:rotate-45">+</span>
            </summary>
            <div className="px-6 pb-6 text-sm leading-relaxed text-foreground/70 lg:text-base">{f.a}</div>
          </details>
        ))}
      </div>
    </Section>
  );
}


function EventsRibbon() {
  return (
    <Section>
      <SectionHead
        eyebrow="What's Next"
        title="Upcoming events"
        aside={<Link to="/news/events" className="text-sm font-semibold text-accent hover:text-primary">Full events calendar →</Link>}
      />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {EVENTS.map((e) => (
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
    </Section>
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

const awards = [
  { year: "2024", title: "Best Cooperative Union", body: "Oromia Cooperative Bureau" },
  { year: "2023", title: "Excellence in Governance", body: "Federal Cooperative Agency" },
  { year: "2022", title: "Women's Financial Inclusion", body: "ICA Africa" },
  { year: "2021", title: "Rural Finance Innovation", body: "National Bank of Ethiopia" },
  { year: "2020", title: "Community Impact Award", body: "Adama City Administration" },
];

function Awards() {
  return (
    <section className="border-t border-border bg-card py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-center justify-between">
          <span className="font-mono text-[11px] uppercase tracking-widest text-accent">Recognition</span>
          <span className="hidden text-xs text-foreground/50 md:block">Five consecutive years of independent recognition</span>
        </div>
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-border md:grid-cols-5">
          {awards.map((a) => (
            <div key={a.year} className="flex flex-col gap-3 bg-card p-6">
              <div className="font-mono text-3xl font-extrabold text-accent">{a.year}</div>
              <div className="text-sm font-bold leading-snug">{a.title}</div>
              <div className="text-xs text-foreground/50">{a.body}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
