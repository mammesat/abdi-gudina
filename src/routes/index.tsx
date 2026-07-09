import { createFileRoute } from "@tanstack/react-router";
import logoAsset from "@/assets/ag-union-logo.png.asset.json";
import markAsset from "@/assets/ag-union-mark.png.asset.json";
import almazImg from "@/assets/almaz-story.jpg";
import heroImg from "@/assets/hero-community.jpg";

export const Route = createFileRoute("/")({
  component: HomePage,
});

const services = [
  {
    n: "01",
    title: "Savings",
    desc: "Secure, interest-bearing savings accounts designed for long-term cooperative growth for SACCOs and individual members.",
  },
  {
    n: "02",
    title: "Loans",
    desc: "Affordable capital at a standardized 14% rate — from 50,000 up to 5,000,000 Birr to fuel member enterprises.",
  },
  {
    n: "03",
    title: "Credit Life",
    desc: "Comprehensive credit-life insurance protecting borrowers and their families through every stage of repayment.",
  },
  {
    n: "04",
    title: "Portfolio",
    desc: "Diversified investment across grain trading, agro-chemicals, real estate, and vehicle rental for union-wide growth.",
  },
];

const news = [
  {
    date: "Jul 5, 2026",
    tag: "Announcement",
    title: "AG Union celebrates its 19th anniversary",
    excerpt:
      "Abdi Gudina marked 19 years of cooperative service with a ceremony attended by member SACCOs and regional partners.",
  },
  {
    date: "Jun 20, 2026",
    tag: "Governance",
    title: "2026 Annual General Assembly convened",
    excerpt:
      "Representatives from all 50 member SACCOs gathered in Adama to review the year and adopt the 2026–2030 strategic plan.",
  },
  {
    date: "Jun 10, 2026",
    tag: "Capacity Building",
    title: "New training program launched for SACCO leaders",
    excerpt:
      "A dedicated capacity-building initiative targeting committee members and employees of member cooperatives is now underway.",
  },
];

function HomePage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-accent/20">
      <Header />
      <main>
        <Hero />
        <StatsGrid />
        <Services />
        <SuccessStory />
        <News />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#" className="flex items-center gap-3">
          <img
            src={markAsset.url}
            alt="AG Union"
            width={32}
            height={32}
            className="h-8 w-8 object-contain"
          />
          <div className="flex flex-col leading-none">
            <span className="text-sm font-extrabold uppercase tracking-tight">
              Abdi Gudina
            </span>
            <span className="mt-0.5 text-[9px] font-medium uppercase tracking-widest text-accent">
              Financial Cooperatives Union
            </span>
          </div>
        </a>
        <div className="hidden items-center gap-8 text-[13px] font-medium md:flex">
          <a href="#services" className="transition-colors hover:text-accent">
            Services
          </a>
          <a href="#about" className="transition-colors hover:text-accent">
            About
          </a>
          <a href="#story" className="transition-colors hover:text-accent">
            Success Stories
          </a>
          <a href="#news" className="transition-colors hover:text-accent">
            News
          </a>
          <span className="font-mono text-[11px] uppercase tracking-widest text-accent">
            EN / AM
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden font-mono text-[11px] opacity-60 lg:inline">
            +251-222-114-181
          </span>
          <a
            href="#cta"
            className="rounded-full bg-primary px-5 py-2 text-xs font-semibold text-primary-foreground transition-all hover:bg-primary-dark"
          >
            Join Union
          </a>
        </div>
      </div>
    </nav>
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
            <a
              href="#services"
              className="rounded-full bg-primary px-8 py-4 text-sm font-bold tracking-wide text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Explore Our Services
            </a>
            <a
              href="#about"
              className="rounded-full border border-primary/20 px-8 py-4 text-sm font-bold tracking-wide transition-colors hover:bg-primary/5"
            >
              Find Your SACCO
            </a>
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
            <span className="font-mono text-xs uppercase tracking-widest opacity-60">
              Member Reach
            </span>
            <div className="mt-auto">
              <div className="text-6xl font-extrabold">12,000+</div>
              <div className="mt-2 text-sm opacity-80">
                Individual members across the Oromia Region
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-2xl border border-border bg-card p-8">
            <span className="font-mono text-xs uppercase tracking-widest text-accent">
              Affiliates
            </span>
            <div className="mt-auto text-4xl font-extrabold italic">
              50 <span className="text-2xl not-italic">SACCOs</span>
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-2xl border border-border bg-card p-8">
            <span className="font-mono text-xs uppercase tracking-widest text-accent">
              Capital
            </span>
            <div className="mt-auto text-4xl font-extrabold italic">
              41.6M
              <span className="ml-1 text-sm font-normal not-italic">Birr</span>
            </div>
          </div>

          <div className="col-span-1 flex flex-col justify-between rounded-2xl border border-border bg-card p-8 md:col-span-2">
            <span className="font-mono text-xs uppercase tracking-widest text-accent">
              Member Savings
            </span>
            <div className="mt-auto text-4xl font-extrabold italic">
              60.9M
              <span className="ml-1 text-sm font-normal not-italic">Birr</span>
            </div>
          </div>

          <div id="about" className="col-span-1 flex flex-col justify-between rounded-2xl border border-border bg-card p-8 md:col-span-2">
            <span className="font-mono text-xs uppercase tracking-widest text-accent">
              Loan Portfolio
            </span>
            <div className="mt-auto text-4xl font-extrabold italic">
              152M
              <span className="ml-1 text-sm font-normal not-italic">
                Birr disbursed
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="bg-card py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="mb-4 inline-block font-mono text-[11px] uppercase tracking-widest text-accent">
              What We Offer
            </span>
            <h2 className="text-3xl font-extrabold uppercase tracking-tighter lg:text-4xl">
              Core Services
            </h2>
          </div>
          <p className="max-w-md text-sm text-foreground/60">
            Providing the structural foundation for financial independence
            through member-first policies and cooperative principles.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px bg-border md:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.n}
              className="group border-border bg-card p-10 transition-colors duration-500 hover:bg-primary"
            >
              <div className="mb-8 flex size-12 items-center justify-center rounded-full border border-accent transition-colors group-hover:border-primary-foreground/20">
                <span className="font-mono font-bold text-accent">{s.n}</span>
              </div>
              <h3 className="mb-4 text-xl font-bold group-hover:text-primary-foreground">
                {s.title}
              </h3>
              <p className="text-sm text-foreground/60 group-hover:text-primary-foreground/70">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SuccessStory() {
  return (
    <section id="story" className="px-6 py-24">
      <div className="mx-auto flex max-w-7xl flex-col overflow-hidden rounded-3xl bg-primary-dark lg:flex-row">
        <div className="flex flex-col justify-center p-12 lg:w-1/2 lg:p-20">
          <div className="mb-8 inline-block w-fit rounded-full border border-accent/30 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-accent">
            Member Spotlight
          </div>
          <blockquote className="text-primary-foreground">
            <p className="text-2xl font-medium leading-snug lg:text-3xl">
              &ldquo;The transition from a government employee to a successful
              merchant was possible because Abdi Gudina believed in my
              vision.&rdquo;
            </p>
            <footer className="mt-10 flex items-center gap-4">
              <img
                src={almazImg}
                alt="Almaz Hailu"
                width={48}
                height={48}
                loading="lazy"
                className="h-12 w-12 rounded-full border border-accent/40 object-cover"
              />
              <div>
                <cite className="block font-bold not-italic">Almaz Hailu</cite>
                <span className="text-sm text-primary-foreground/50">
                  Merchant · 2.9M Birr loan recipient
                </span>
              </div>
            </footer>
          </blockquote>
        </div>
        <div className="relative min-h-[400px] overflow-hidden lg:w-1/2">
          <img
            src={almazImg}
            alt="Almaz Hailu at her shop"
            width={1200}
            height={1200}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

function News() {
  return (
    <section id="news" className="bg-card py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="mb-4 inline-block font-mono text-[11px] uppercase tracking-widest text-accent">
              Latest Updates
            </span>
            <h2 className="text-3xl font-extrabold uppercase tracking-tighter lg:text-4xl">
              News &amp; Announcements
            </h2>
          </div>
          <a
            href="#"
            className="text-sm font-semibold text-accent transition-colors hover:text-primary"
          >
            View all news →
          </a>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {news.map((n) => (
            <article
              key={n.title}
              className="group flex flex-col gap-4 border-t border-border pt-6"
            >
              <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest">
                <span className="text-accent">{n.tag}</span>
                <span className="text-foreground/40">{n.date}</span>
              </div>
              <h3 className="text-xl font-bold leading-snug transition-colors group-hover:text-accent">
                {n.title}
              </h3>
              <p className="text-sm text-foreground/60">{n.excerpt}</p>
              <a
                href="#"
                className="mt-auto text-xs font-semibold text-primary transition-colors hover:text-accent"
              >
                Read more →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="cta" className="mx-auto max-w-7xl px-6 pb-24">
      <div className="relative overflow-hidden rounded-3xl border-t border-border pt-24 text-center">
        <img
          src={heroImg}
          alt=""
          aria-hidden
          width={1600}
          height={1000}
          loading="lazy"
          className="pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover opacity-[0.06]"
        />
        <span className="mb-4 inline-block font-mono text-[11px] uppercase tracking-widest text-accent">
          Join the Union
        </span>
        <h2 className="mb-6 text-4xl font-extrabold uppercase tracking-tighter lg:text-5xl">
          Ready to grow together?
        </h2>
        <p className="mx-auto mb-10 max-w-xl text-lg text-foreground/60">
          Discover how cooperative membership can transform your financial
          future — for your SACCO and your community.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#"
            className="rounded-full bg-accent px-10 py-4 text-sm font-bold text-accent-foreground shadow-xl shadow-accent/20 transition-transform hover:scale-105"
          >
            Find a SACCO near you
          </a>
          <a
            href="#"
            className="rounded-full border border-primary/20 px-10 py-4 text-sm font-bold transition-colors hover:bg-primary/5"
          >
            Learn about membership
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-primary-dark py-16 text-primary-foreground">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="mb-6 flex items-center gap-3">
            <img
              src={markAsset.url}
              alt="AG Union"
              width={28}
              height={28}
              className="h-7 w-7 object-contain"
            />
            <span className="text-xs font-extrabold uppercase tracking-tight">
              Abdi Gudina
            </span>
          </div>
          <p className="text-sm leading-relaxed text-primary-foreground/60">
            A member-based financial institution serving 50 SACCOs and over
            12,000 members across the Oromia Region, Ethiopia since 2007.
          </p>
        </div>

        <div>
          <h4 className="mb-6 font-mono text-[10px] uppercase tracking-widest text-accent">
            Quick Links
          </h4>
          <ul className="space-y-3 text-sm text-primary-foreground/60">
            <li><a href="#about" className="hover:text-accent">About Us</a></li>
            <li><a href="#services" className="hover:text-accent">SACCO Directory</a></li>
            <li><a href="#services" className="hover:text-accent">Loan Products</a></li>
            <li><a href="#news" className="hover:text-accent">Annual Reports</a></li>
            <li><a href="#cta" className="hover:text-accent">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-6 font-mono text-[10px] uppercase tracking-widest text-accent">
            Contact
          </h4>
          <address className="space-y-2 text-sm not-italic text-primary-foreground/60">
            <p>Adama City, Around Mebrat Hail<br />Oromia Region, Ethiopia</p>
            <p>+251-222-114-181</p>
            <p>info@abdigudinaunion.com.et</p>
            <p className="text-primary-foreground/40">Mon – Sat · 8:00 AM – 5:00 PM</p>
          </address>
        </div>

        <div>
          <h4 className="mb-6 font-mono text-[10px] uppercase tracking-widest text-accent">
            Follow
          </h4>
          <ul className="space-y-3 text-sm text-primary-foreground/60">
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=61556218060368"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://t.me/AGFCunion"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent"
              >
                Telegram
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCSflFQV3q78az9FTwpx0vXg"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent"
              >
                YouTube
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-16 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-primary-foreground/10 px-6 pt-8 text-[10px] font-mono uppercase tracking-widest text-primary-foreground/40 md:flex-row">
        <span>© 2026 Abdi Gudina Financial Cooperatives Union Ltd.</span>
        <div className="flex gap-6">
          <a href="#" className="hover:text-accent">Privacy Policy</a>
          <a href="#" className="hover:text-accent">Terms &amp; Conditions</a>
        </div>
      </div>

      <div className="sr-only">
        {/* Full brand logo for screen readers / SEO reference */}
        <img src={logoAsset.url} alt="Abdi Gudina Financial Cooperatives Union Ltd" />
      </div>
    </footer>
  );
}
