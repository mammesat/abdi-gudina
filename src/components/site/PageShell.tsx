import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-accent/20">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  intro,
  variant = "light",
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  variant?: "light" | "dark";
}) {
  const isDark = variant === "dark";
  return (
    <section
      className={
        isDark
          ? "bg-primary text-primary-foreground"
          : "bg-background text-foreground"
      }
    >
      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        {eyebrow && (
          <span className="mb-6 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-accent">
            <span className="inline-block h-px w-8 bg-accent" />
            {eyebrow}
          </span>
        )}
        <h1 className="max-w-4xl text-balance text-4xl font-extrabold leading-[1.05] tracking-tight lg:text-6xl">
          {title}
        </h1>
        {intro && (
          <p
            className={`mt-6 max-w-2xl text-pretty text-lg ${
              isDark ? "text-primary-foreground/70" : "text-foreground/70"
            }`}
          >
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`px-6 py-20 ${className}`}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

export function SectionHead({
  eyebrow,
  title,
  aside,
}: {
  eyebrow?: string;
  title: string;
  aside?: ReactNode;
}) {
  return (
    <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
      <div>
        {eyebrow && (
          <span className="mb-4 inline-block font-mono text-[11px] uppercase tracking-widest text-accent">
            {eyebrow}
          </span>
        )}
        <h2 className="text-3xl font-extrabold uppercase tracking-tighter lg:text-4xl">
          {title}
        </h2>
      </div>
      {aside && <div className="max-w-md text-sm text-foreground/60">{aside}</div>}
    </div>
  );
}
