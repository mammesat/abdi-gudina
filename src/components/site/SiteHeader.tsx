import { Link } from "@tanstack/react-router";
import { useState } from "react";
import markAsset from "@/assets/ag-union-mark.png.asset.json";

type NavItem = {
  label: string;
  to: string;
  children?: { label: string; to: string }[];
};

const NAV: NavItem[] = [
  {
    label: "About",
    to: "/about",
    children: [
      { label: "Overview", to: "/about" },
      { label: "History, Vision & Values", to: "/about/history" },
      { label: "Governance & Structure", to: "/about/governance" },
    ],
  },
  {
    label: "SACCOs",
    to: "/saccos",
    children: [
      { label: "Directory", to: "/saccos" },
      { label: "How to Join", to: "/saccos/join" },
      { label: "Member Benefits", to: "/saccos/benefits" },
    ],
  },
  {
    label: "Services",
    to: "/services",
    children: [
      { label: "Overview", to: "/services" },
      { label: "Savings", to: "/services/savings" },
      { label: "Loans", to: "/services/loans" },
      { label: "Insurance", to: "/services/insurance" },
      { label: "Investments", to: "/services/investments" },
      { label: "Training", to: "/services/training" },
    ],
  },
  {
    label: "Achievements",
    to: "/impact",
    children: [
      { label: "Success Stories", to: "/impact" },
      { label: "Statistics", to: "/impact/stats" },
    ],
  },
  {
    label: "News",
    to: "/news",
    children: [
      { label: "Latest", to: "/news" },
      { label: "Events", to: "/news/events" },
      { label: "Gallery", to: "/news/gallery" },
    ],
  },
  {
    label: "Resources",
    to: "/resources",
    children: [
      { label: "Financial Summary", to: "/transparency" },
      { label: "Annual Reports", to: "/transparency/reports" },
      { label: "Downloads & Forms", to: "/resources" },
      { label: "Publications", to: "/resources/publications" },
      { label: "FAQ", to: "/resources/faq" },
    ],
  },

  { label: "Contact", to: "/contact" },
];

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-3">
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
        </Link>

        <div className="hidden items-center gap-6 text-[13px] font-medium lg:flex">
          {NAV.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setOpenMenu(item.label)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <Link
                to={item.to}
                className="py-2 transition-colors hover:text-accent"
                activeProps={{ className: "text-accent" }}
              >
                {item.label}
              </Link>
              {item.children && openMenu === item.label && (
                <div className="absolute left-1/2 top-full min-w-[200px] -translate-x-1/2 pt-2">
                  <div className="rounded-xl border border-border bg-background p-2 shadow-xl">
                    {item.children.map((c) => (
                      <Link
                        key={c.to}
                        to={c.to}
                        className="block rounded-md px-3 py-2 text-sm transition-colors hover:bg-primary/5 hover:text-accent"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/saccos/join"
            className="hidden rounded-full bg-primary px-5 py-2 text-xs font-semibold text-primary-foreground transition-all hover:bg-primary-dark md:inline-block"
          >
            Join Union
          </Link>
          <button
            aria-label="Menu"
            className="lg:hidden"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <div className="flex h-8 w-8 flex-col items-center justify-center gap-1.5">
              <span className="h-0.5 w-5 bg-foreground" />
              <span className="h-0.5 w-5 bg-foreground" />
            </div>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-background px-6 py-4 lg:hidden">
          <div className="max-h-[70vh] space-y-1 overflow-y-auto">
            {NAV.map((item) => (
              <details key={item.label} className="group">
                <summary className="flex cursor-pointer items-center justify-between py-2 text-sm font-semibold">
                  <Link to={item.to} onClick={() => setMobileOpen(false)}>
                    {item.label}
                  </Link>
                  {item.children && (
                    <span className="text-xs text-accent group-open:rotate-180 transition-transform">
                      ▾
                    </span>
                  )}
                </summary>
                {item.children && (
                  <div className="ml-4 border-l border-border pl-3">
                    {item.children.map((c) => (
                      <Link
                        key={c.to}
                        to={c.to}
                        onClick={() => setMobileOpen(false)}
                        className="block py-1.5 text-sm text-foreground/70 hover:text-accent"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                )}
              </details>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
