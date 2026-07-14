import { Link, useRouterState, useNavigate } from "@tanstack/react-router";
import { useEffect, useId, useRef, useState } from "react";
import { Search, X, Menu } from "lucide-react";
import markAsset from "@/assets/ag-union-mark.png.asset.json";
import { NEWS, STORIES, PEOPLE } from "@/content/site";

/* -------------------- Mega menu model -------------------- */

type MegaColumn = {
  heading: string;
  links: { label: string; to: string; desc?: string }[];
};
type Featured = { eyebrow: string; title: string; desc: string; to: string };
type NavItem = {
  label: string;
  to: string;
  columns?: MegaColumn[];
  featured?: Featured;
};

const NAV: NavItem[] = [
  {
    label: "About",
    to: "/about",
    columns: [
      {
        heading: "The Union",
        links: [
          { label: "Overview", to: "/about", desc: "Who we are & what we do" },
          { label: "History, Vision & Values", to: "/about/history", desc: "19 years of cooperative service" },
          { label: "Governance & Structure", to: "/about/governance", desc: "Board, management & committees" },
        ],
      },
    ],
    featured: {
      eyebrow: "Est. 2007",
      title: "A member-owned union",
      desc: "50 SACCOs · 12,000+ members · 152M Birr disbursed.",
      to: "/about",
    },
  },
  {
    label: "SACCOs",
    to: "/saccos",
    columns: [
      {
        heading: "Network",
        links: [
          { label: "Directory", to: "/saccos", desc: "Browse all 50 member SACCOs" },
          { label: "How to Join", to: "/saccos/join", desc: "Membership pathway" },
          { label: "Member Benefits", to: "/saccos/benefits", desc: "What membership unlocks" },
        ],
      },
    ],
    featured: {
      eyebrow: "Join the Union",
      title: "Find a SACCO near you",
      desc: "Register through any of our 50 primary cooperatives.",
      to: "/saccos/join",
    },
  },
  {
    label: "Services",
    to: "/services",
    columns: [
      {
        heading: "Financial",
        links: [
          { label: "Savings", to: "/services/savings", desc: "Interest-bearing accounts" },
          { label: "Loans", to: "/services/loans", desc: "Standardized 14% rate" },
          { label: "Credit Life Insurance", to: "/services/insurance", desc: "Included with every loan" },
        ],
      },
      {
        heading: "Enterprise",
        links: [
          { label: "Investments", to: "/services/investments", desc: "Grain, agro-chemicals, rentals" },
          { label: "Training", to: "/services/training", desc: "SACCO capacity building" },
          { label: "All Services", to: "/services", desc: "Overview" },
        ],
      },
    ],
  },
  {
    label: "Achievements",
    to: "/impact",
    columns: [
      {
        heading: "Impact",
        links: [
          { label: "Success Stories", to: "/impact", desc: "Members whose lives changed" },
          { label: "Statistics", to: "/impact/stats", desc: "Growth, reach & recovery" },
        ],
      },
    ],
  },
  {
    label: "News",
    to: "/news",
    columns: [
      {
        heading: "Newsroom",
        links: [
          { label: "Latest News", to: "/news", desc: "Announcements & updates" },
          { label: "Events", to: "/news/events", desc: "Assemblies, trainings, ceremonies" },
          { label: "Gallery", to: "/news/gallery", desc: "Photos from the field" },
        ],
      },
    ],
  },
  {
    label: "Resources",
    to: "/resources",
    columns: [
      {
        heading: "Library",
        links: [
          { label: "All Resources", to: "/resources", desc: "Search & filter everything" },
          { label: "Policies", to: "/resources/policies" },
          { label: "Audits", to: "/resources/audits" },
          { label: "Forms", to: "/resources/forms" },
          { label: "Publications", to: "/resources/publications" },
        ],
      },
      {
        heading: "Transparency",
        links: [
          { label: "Financial Summary", to: "/transparency", desc: "FY snapshot & KPIs" },
          { label: "Annual Reports", to: "/transparency/reports", desc: "Audited statements" },
          { label: "FAQ", to: "/resources/faq", desc: "Common questions" },
        ],
      },
    ],
  },
  { label: "Contact", to: "/contact" },
];

/* -------------------- Global search -------------------- */

type SearchResult =
  | { kind: "news"; slug: string; title: string; excerpt: string }
  | { kind: "story"; slug: string; title: string; excerpt: string }
  | { kind: "person"; slug: string; title: string; excerpt: string }
  | { kind: "page"; to: string; title: string; excerpt: string };

const STATIC_PAGES: SearchResult[] = [
  { kind: "page", to: "/services/loans", title: "Loans", excerpt: "Standardized 14% cooperative lending" },
  { kind: "page", to: "/services/savings", title: "Savings", excerpt: "Interest-bearing cooperative accounts" },
  { kind: "page", to: "/services/insurance", title: "Credit Life Insurance", excerpt: "Included with every loan" },
  { kind: "page", to: "/saccos", title: "SACCO Directory", excerpt: "Browse 50 member SACCOs" },
  { kind: "page", to: "/saccos/join", title: "How to Join", excerpt: "Become a member" },
  { kind: "page", to: "/transparency/reports", title: "Annual Reports", excerpt: "Audited financial statements" },
  { kind: "page", to: "/resources/faq", title: "Frequently Asked Questions", excerpt: "Common questions answered" },
  { kind: "page", to: "/contact", title: "Contact", excerpt: "Adama, Oromia · +251-222-114-181" },
];

function searchIndex(q: string): SearchResult[] {
  const s = q.trim().toLowerCase();
  if (!s) return [];
  const hits: SearchResult[] = [];
  for (const n of NEWS) {
    if (n.title.toLowerCase().includes(s) || n.excerpt.toLowerCase().includes(s) || n.tag.toLowerCase().includes(s)) {
      hits.push({ kind: "news", slug: n.slug, title: n.title, excerpt: n.excerpt });
    }
  }
  for (const st of STORIES) {
    if (st.name.toLowerCase().includes(s) || st.summary.toLowerCase().includes(s) || st.role.toLowerCase().includes(s)) {
      hits.push({ kind: "story", slug: st.slug, title: `${st.name} — ${st.role}`, excerpt: st.summary });
    }
  }
  for (const p of PEOPLE) {
    if (p.name.toLowerCase().includes(s) || p.role.toLowerCase().includes(s) || p.focus.join(" ").toLowerCase().includes(s)) {
      hits.push({ kind: "person", slug: p.slug, title: p.name, excerpt: p.role });
    }
  }
  for (const pg of STATIC_PAGES) {
    if (pg.title.toLowerCase().includes(s) || pg.excerpt.toLowerCase().includes(s)) hits.push(pg);
  }
  return hits.slice(0, 8);
}

function resultHref(r: SearchResult): string {
  if (r.kind === "news") return `/news/${r.slug}`;
  if (r.kind === "story") return `/impact/stories/${r.slug}`;
  if (r.kind === "person") return `/about/people/${r.slug}`;
  return r.to;
}

function SearchDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [q, setQ] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const listId = useId();

  useEffect(() => {
    if (!open) return;
    const t = setTimeout(() => inputRef.current?.focus(), 20);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      clearTimeout(t);
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;
  const results = searchIndex(q);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Search the site"
      className="fixed inset-0 z-[80] bg-background/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="mx-auto mt-24 max-w-2xl overflow-hidden rounded-2xl border border-border bg-background shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 border-b border-border px-4">
          <Search className="size-4 text-muted-foreground" aria-hidden />
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && results[0]) {
                onClose();
                navigate({ to: resultHref(results[0]) });
              }
            }}
            placeholder="Search news, stories, people, services…"
            className="min-h-12 flex-1 bg-transparent text-sm placeholder:text-muted-foreground focus:outline-none"
            aria-label="Search query"
            aria-controls={listId}
          />
          <button
            onClick={onClose}
            aria-label="Close search"
            className="rounded-md p-2 text-muted-foreground hover:bg-muted"
          >
            <X className="size-4" aria-hidden />
          </button>
        </div>
        <ul id={listId} role="listbox" className="max-h-[60vh] overflow-y-auto py-2">
          {q && results.length === 0 && (
            <li className="px-4 py-6 text-center text-sm text-muted-foreground">
              No matches for &ldquo;{q}&rdquo;.
            </li>
          )}
          {!q && (
            <li className="px-4 py-6 text-center text-xs text-muted-foreground">
              Start typing to search across the site.
            </li>
          )}
          {results.map((r, i) => (
            <li key={i}>
              <Link
                to={resultHref(r)}
                onClick={onClose}
                role="option"
                className="flex flex-col gap-1 px-4 py-3 hover:bg-muted focus-visible:bg-muted focus-visible:outline-none"
              >
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-accent">{r.kind}</span>
                  <span className="text-sm font-semibold">{r.title}</span>
                </div>
                <span className="line-clamp-1 text-xs text-muted-foreground">{r.excerpt}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* -------------------- Header -------------------- */

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const drawerRef = useRef<HTMLDivElement>(null);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
  }, [pathname]);

  // ESC closes drawer + focus trap
  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
      if (e.key === "Tab" && drawerRef.current) {
        const focusables = drawerRef.current.querySelectorAll<HTMLElement>(
          'a,button,[tabindex]:not([tabindex="-1"])',
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md" aria-label="Primary">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-3">
            <img src={markAsset.url} alt="AG Union" width={32} height={32} className="h-8 w-8 shrink-0 object-contain" />
            <div className="flex min-w-0 flex-col leading-none">
              <span className="truncate text-sm font-extrabold uppercase tracking-tight">Abdi Gudina</span>
              <span className="mt-0.5 truncate text-[9px] font-medium uppercase tracking-widest text-accent">
                Financial Cooperatives Union
              </span>
            </div>
          </Link>

          <div className="hidden items-center gap-1 text-[13px] font-medium lg:flex" onMouseLeave={() => setOpenMenu(null)}>
            {NAV.map((item) => (
              <div key={item.label} className="relative" onMouseEnter={() => setOpenMenu(item.label)}>
                <Link
                  to={item.to}
                  className="rounded-md px-3 py-2 transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  activeProps={{ className: "text-accent" }}
                >
                  {item.label}
                </Link>
                {item.columns && openMenu === item.label && (
                  <div className="absolute left-1/2 top-full -translate-x-1/2 pt-2">
                    <div
                      className={`grid gap-6 rounded-2xl border border-border bg-background p-6 shadow-2xl ${
                        item.featured ? "w-[720px] grid-cols-[1fr_1fr_220px]" : item.columns.length > 1 ? "w-[560px] grid-cols-2" : "w-[300px] grid-cols-1"
                      }`}
                    >
                      {item.columns.map((col) => (
                        <div key={col.heading}>
                          <div className="mb-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                            {col.heading}
                          </div>
                          <ul className="space-y-1">
                            {col.links.map((l) => (
                              <li key={l.to}>
                                <Link
                                  to={l.to}
                                  className="block rounded-md px-2 py-2 transition-colors hover:bg-muted"
                                >
                                  <span className="block text-sm font-semibold">{l.label}</span>
                                  {l.desc && <span className="block text-xs text-muted-foreground">{l.desc}</span>}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                      {item.featured && (
                        <Link
                          to={item.featured.to}
                          className="flex flex-col justify-between rounded-xl bg-primary p-4 text-primary-foreground transition-transform hover:-translate-y-0.5"
                        >
                          <span className="font-mono text-[10px] uppercase tracking-widest text-accent">
                            {item.featured.eyebrow}
                          </span>
                          <div>
                            <div className="mt-6 text-sm font-bold leading-snug">{item.featured.title}</div>
                            <p className="mt-2 text-xs text-primary-foreground/70">{item.featured.desc}</p>
                          </div>
                        </Link>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              aria-label="Open search"
              className="grid size-10 place-items-center rounded-full text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <Search className="size-4" aria-hidden />
            </button>
            <Link
              to="/saccos/join"
              className="hidden rounded-full bg-primary px-5 py-2 text-xs font-semibold text-primary-foreground transition-colors hover:bg-primary-dark md:inline-block"
            >
              Join Union
            </Link>
            <button
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-drawer"
              className="grid size-10 place-items-center rounded-full text-foreground hover:bg-muted lg:hidden"
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
            </button>
          </div>
        </div>
      </nav>

      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-background/60 backdrop-blur-sm lg:hidden"
          onClick={() => setMobileOpen(false)}
          aria-hidden
        />
      )}
      <div
        id="mobile-drawer"
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        className={`fixed inset-y-0 right-0 z-50 w-[86%] max-w-sm border-l border-border bg-background transition-transform lg:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full pointer-events-none"
        }`}
      >
        <div className="flex h-16 items-center justify-between border-b border-border px-5">
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Menu</span>
          <button
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
            className="grid size-10 place-items-center rounded-full hover:bg-muted"
          >
            <X className="size-5" aria-hidden />
          </button>
        </div>
        <div className="h-[calc(100dvh-4rem)] overflow-y-auto px-5 py-4">
          {NAV.map((item) => (
            <details key={item.label} className="group border-b border-border py-1">
              <summary className="flex cursor-pointer list-none items-center justify-between py-3 text-sm font-semibold">
                <Link to={item.to}>{item.label}</Link>
                {item.columns && (
                  <span aria-hidden className="text-xs text-accent transition-transform group-open:rotate-180">▾</span>
                )}
              </summary>
              {item.columns && (
                <div className="pb-3 pl-2">
                  {item.columns.map((col) => (
                    <div key={col.heading} className="mb-3">
                      <div className="mb-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                        {col.heading}
                      </div>
                      <ul className="border-l border-border pl-3">
                        {col.links.map((l) => (
                          <li key={l.to}>
                            <Link to={l.to} className="block py-2 text-sm text-foreground/80 hover:text-accent">
                              {l.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </details>
          ))}
          <Link
            to="/saccos/join"
            className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3 text-xs font-semibold text-primary-foreground"
          >
            Join Union
          </Link>
        </div>
      </div>

      <SearchDialog open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
