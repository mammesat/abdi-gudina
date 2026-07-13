/**
 * AG Union — Institutional Pattern Library (Phase 1)
 *
 * Presentation-only building blocks. Every component is content-agnostic
 * and props-driven so it maps cleanly to a WordPress CPT + ACF fields
 * or an Elementor Loop Grid template part.
 *
 * WP mapping cheatsheet (see docs/wordpress-mapping.md when Phase 6 lands):
 *   StatCard    → ACF group on any page
 *   NewsCard    → post (category: news|press|updates)
 *   EventCard   → CPT `event` + ACF { starts_at, ends_at, venue }
 *   ResourceCard→ CPT `policy|audit|form|publication` + `resource_category` taxonomy
 *   PersonCard  → CPT `person` + ACF { body, role, tenure }
 *   SaccoCard   → CPT `sacco` + ACF { location, members, founded, logo }
 *   StoryCard   → post (category: story|member-story|success-story)
 *   Quote       → reusable block / ACF flexible content
 */
import type { ReactNode, HTMLAttributes, ButtonHTMLAttributes } from "react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

/* ---------------- Layout primitives ---------------- */

export function Container({ className, children, ...rest }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8", className)} {...rest}>
      {children}
    </div>
  );
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-widest text-accent", className)}>
      <span aria-hidden className="inline-block h-px w-8 bg-accent" />
      {children}
    </span>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  intro,
  align = "left",
  as: Heading = "h2",
  aside,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  as?: "h1" | "h2";
  aside?: ReactNode;
}) {
  const center = align === "center";
  return (
    <header className={cn("mb-10 gap-6 md:mb-14", aside ? "flex flex-col md:flex-row md:items-end md:justify-between" : center ? "mx-auto max-w-3xl text-center" : "max-w-3xl")}>
      <div>
        {eyebrow && <div className={cn("mb-4", center && "flex justify-center")}><Eyebrow>{eyebrow}</Eyebrow></div>}
        <Heading className={cn("text-balance font-extrabold tracking-tight", Heading === "h1" ? "text-4xl leading-[1.05] lg:text-6xl" : "text-3xl leading-tight lg:text-4xl")}>
          {title}
        </Heading>
        {intro && <p className={cn("mt-4 text-pretty text-base text-muted-foreground sm:text-lg", center && "mx-auto max-w-2xl")}>{intro}</p>}
      </div>
      {aside && <div className="max-w-md text-sm text-muted-foreground">{aside}</div>}
    </header>
  );
}

/* ---------------- Accessibility helpers ---------------- */

export function SkipLink() {
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-primary-foreground"
    >
      Skip to main content
    </a>
  );
}

export function VisuallyHidden({ children }: { children: ReactNode }) {
  return <span className="sr-only">{children}</span>;
}

/* ---------------- Button (institutional, 44px tap targets) ---------------- */

type ButtonVariant = "primary" | "secondary" | "ghost" | "link" | "destructive";
type ButtonSize = "sm" | "md" | "lg";

const btnBase =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold uppercase tracking-wide transition-colors disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background";
const btnVariant: Record<ButtonVariant, string> = {
  primary: "bg-primary text-primary-foreground hover:bg-primary-dark",
  secondary: "border border-border-strong bg-surface text-foreground hover:border-accent hover:text-accent",
  ghost: "text-foreground hover:bg-muted",
  link: "text-accent underline-offset-4 hover:underline rounded-none",
  destructive: "bg-[var(--danger)] text-primary-foreground hover:opacity-90",
};
const btnSize: Record<ButtonSize, string> = {
  sm: "min-h-9 px-4 text-[11px]",
  md: "min-h-11 px-6 text-xs",
  lg: "min-h-12 px-7 text-sm",
};

type CommonBtn = { variant?: ButtonVariant; size?: ButtonSize; className?: string; children: ReactNode };

export function Button({ variant = "primary", size = "md", className, children, ...rest }: CommonBtn & ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button className={cn(btnBase, btnVariant[variant], btnSize[size], className)} {...rest}>{children}</button>;
}

export function LinkButton({
  variant = "primary",
  size = "md",
  className,
  children,
  href,
  external,
}: CommonBtn & { href: string; external?: boolean }) {
  const cls = cn(btnBase, btnVariant[variant], btnSize[size], className);
  if (external) {
    return <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>{children}</a>;
  }
  return <a href={href} className={cls}>{children}</a>;
}

/* ---------------- Cards ---------------- */

export function InstitutionalCard({ className, children, ...rest }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("rounded-2xl border border-border bg-card p-6 shadow-elev-1 transition-colors hover:border-border-strong", className)} {...rest}>
      {children}
    </div>
  );
}

export function StatCard({
  value,
  label,
  hint,
  trend,
}: {
  value: string | number;
  label: string;
  hint?: string;
  trend?: { direction: "up" | "down" | "flat"; text: string };
}) {
  const trendColor = trend?.direction === "up" ? "text-[var(--success)]" : trend?.direction === "down" ? "text-[var(--danger)]" : "text-muted-foreground";
  const arrow = trend?.direction === "up" ? "↑" : trend?.direction === "down" ? "↓" : "→";
  return (
    <div className="flex flex-col gap-2 rounded-2xl border border-border bg-card p-6">
      <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{label}</div>
      <div className="text-3xl font-extrabold tracking-tight text-foreground lg:text-4xl">{value}</div>
      {hint && <div className="text-xs text-muted-foreground">{hint}</div>}
      {trend && <div className={cn("mt-1 font-mono text-[10px] uppercase tracking-widest", trendColor)}>{arrow} {trend.text}</div>}
    </div>
  );
}

/* ---------------- Content-type cards (WP-CPT shaped) ---------------- */

type BaseLinkCardProps = {
  to: string;
  params?: Record<string, string>;
  eyebrow?: string;
  title: string;
  summary?: string;
  meta?: string;
  image?: { src: string; alt: string };
};

function CardLink({ to, params, children, className }: { to: string; params?: Record<string, string>; children: ReactNode; className?: string }) {
  // Use anchor for arbitrary string paths; TanStack Link is typed strict.
  if (params) {
    return (
      <Link to={to as never} params={params as never} className={cn("group block h-full", className)}>{children}</Link>
    );
  }
  return <Link to={to as never} className={cn("group block h-full", className)}>{children}</Link>;
}

export function NewsCard({ to, params, eyebrow, title, summary, meta, image }: BaseLinkCardProps) {
  return (
    <CardLink to={to} params={params}>
      <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors group-hover:border-accent">
        {image && (
          <div className="aspect-[16/9] overflow-hidden bg-muted">
            <img src={image.src} alt={image.alt} loading="lazy" className="size-full object-cover transition-transform duration-500 group-hover:scale-105" />
          </div>
        )}
        <div className="flex flex-1 flex-col p-6">
          {eyebrow && <div className="mb-3 font-mono text-[10px] uppercase tracking-widest text-accent">{eyebrow}</div>}
          <h3 className="mb-3 text-lg font-bold leading-snug transition-colors group-hover:text-accent">{title}</h3>
          {summary && <p className="mb-6 text-sm text-muted-foreground">{summary}</p>}
          {meta && <div className="mt-auto border-t border-border pt-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{meta}</div>}
        </div>
      </article>
    </CardLink>
  );
}

export function EventCard({
  to,
  params,
  title,
  date,
  venue,
  audience,
  status = "upcoming",
}: BaseLinkCardProps & { date: string; venue?: string; audience?: string; status?: "upcoming" | "past" }) {
  return (
    <CardLink to={to} params={params}>
      <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-colors group-hover:border-accent">
        <div className="mb-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest">
          <span className="text-accent">{date}</span>
          <span className={status === "upcoming" ? "text-[var(--success)]" : "text-muted-foreground"}>{status}</span>
        </div>
        <h3 className="mb-3 text-lg font-bold leading-snug transition-colors group-hover:text-accent">{title}</h3>
        <dl className="mt-auto space-y-1 border-t border-border pt-4 text-xs text-muted-foreground">
          {venue && (<div><dt className="sr-only">Venue</dt><dd>{venue}</dd></div>)}
          {audience && (<div><dt className="sr-only">Audience</dt><dd>{audience}</dd></div>)}
        </dl>
      </article>
    </CardLink>
  );
}

export function ResourceCard({
  to,
  params,
  kindLabel,
  category,
  title,
  summary,
  updated,
  fileSize,
  year,
}: BaseLinkCardProps & { kindLabel: string; category: string; updated?: string; fileSize?: string; year?: string | number }) {
  return (
    <CardLink to={to} params={params}>
      <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-7 transition-colors group-hover:border-accent">
        <div className="mb-6 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest">
          <span className="text-accent">{kindLabel} · {category}</span>
          {year && <span className="text-muted-foreground">{year}</span>}
        </div>
        <h3 className="mb-3 text-lg font-bold leading-snug transition-colors group-hover:text-accent">{title}</h3>
        {summary && <p className="mb-6 text-sm text-muted-foreground">{summary}</p>}
        <div className="mt-auto flex items-center justify-between border-t border-border pt-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          {updated && <span>Updated {updated}</span>}
          {fileSize && <span>PDF · {fileSize}</span>}
        </div>
      </article>
    </CardLink>
  );
}

export function PersonCard({
  to,
  params,
  name,
  role,
  body,
  image,
}: BaseLinkCardProps & { name: string; role: string; body?: string }) {
  return (
    <CardLink to={to} params={params}>
      <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors group-hover:border-accent">
        <div className="aspect-square overflow-hidden bg-surface-muted">
          {image ? (
            <img src={image.src} alt={image.alt} loading="lazy" className="size-full object-cover" />
          ) : (
            <div className="grid size-full place-items-center bg-gradient-to-br from-primary/10 to-accent/10 font-mono text-4xl font-bold text-primary/40">
              {name.split(" ").map((p) => p[0]).slice(0, 2).join("")}
            </div>
          )}
        </div>
        <div className="flex flex-1 flex-col p-5">
          {body && <div className="mb-2 font-mono text-[10px] uppercase tracking-widest text-accent">{body}</div>}
          <div className="font-bold leading-snug transition-colors group-hover:text-accent">{name}</div>
          <div className="mt-1 text-xs text-muted-foreground">{role}</div>
        </div>
      </article>
    </CardLink>
  );
}

export function SaccoCard({ name, location, members, founded }: { name: string; location: string; members: number | string; founded: number | string }) {
  return (
    <article className="rounded-2xl border border-border bg-card p-5">
      <div className="mb-2 font-bold leading-snug">{name}</div>
      <dl className="grid grid-cols-3 gap-2 border-t border-border pt-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        <div><dt className="sr-only">Location</dt><dd>{location}</dd></div>
        <div><dt className="sr-only">Members</dt><dd>{members} mbrs</dd></div>
        <div><dt className="sr-only">Founded</dt><dd>Est. {founded}</dd></div>
      </dl>
    </article>
  );
}

export function StoryCard({ to, params, eyebrow, title, summary, image }: BaseLinkCardProps) {
  return (
    <CardLink to={to} params={params}>
      <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors group-hover:border-accent">
        {image && (
          <div className="aspect-[4/3] overflow-hidden bg-muted">
            <img src={image.src} alt={image.alt} loading="lazy" className="size-full object-cover transition-transform duration-500 group-hover:scale-105" />
          </div>
        )}
        <div className="flex flex-1 flex-col p-6">
          {eyebrow && <div className="mb-3 font-mono text-[10px] uppercase tracking-widest text-accent">{eyebrow}</div>}
          <h3 className="mb-3 text-lg font-bold leading-snug transition-colors group-hover:text-accent">{title}</h3>
          {summary && <p className="text-sm text-muted-foreground">{summary}</p>}
        </div>
      </article>
    </CardLink>
  );
}

/* ---------------- Quote ---------------- */

export function Quote({ children, cite, role }: { children: ReactNode; cite: string; role?: string }) {
  return (
    <figure className="rounded-2xl border border-border bg-surface-muted p-8">
      <blockquote className="text-lg font-medium leading-relaxed text-foreground">
        <span aria-hidden className="mr-2 font-mono text-3xl leading-none text-accent">“</span>
        {children}
      </blockquote>
      <figcaption className="mt-6 border-t border-border pt-4">
        <div className="text-sm font-bold">{cite}</div>
        {role && <div className="text-xs text-muted-foreground">{role}</div>}
      </figcaption>
    </figure>
  );
}

/* ---------------- Empty / Loading states ---------------- */

export function EmptyState({ title, description, action }: { title: string; description?: string; action?: ReactNode }) {
  return (
    <div className="rounded-2xl border border-dashed border-border-strong bg-surface-muted p-12 text-center">
      <div className="mx-auto mb-4 grid size-12 place-items-center rounded-full bg-background font-mono text-lg text-muted-foreground" aria-hidden>∅</div>
      <h3 className="text-lg font-bold">{title}</h3>
      {description && <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">{description}</p>}
      {action && <div className="mt-6">{action}</div>}
    </div>
  );
}

export function LoadingState({ label = "Loading" }: { label?: string }) {
  return (
    <div role="status" aria-live="polite" className="flex items-center justify-center gap-3 p-12 text-sm text-muted-foreground">
      <span aria-hidden className="inline-block size-4 animate-spin rounded-full border-2 border-border border-t-accent" />
      <span>{label}…</span>
    </div>
  );
}

/* ---------------- Filter chip ---------------- */

export function FacetChip({
  active,
  onClick,
  children,
  as = "button",
}: {
  active?: boolean;
  onClick?: () => void;
  children: ReactNode;
  as?: "button";
}) {
  const Tag = as;
  return (
    <Tag
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "min-h-9 rounded-full border px-4 font-mono text-[11px] uppercase tracking-widest transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        active
          ? "border-primary bg-primary text-primary-foreground"
          : "border-border text-muted-foreground hover:border-accent hover:text-accent",
      )}
    >
      {children}
    </Tag>
  );
}
