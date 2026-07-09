import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageShell, Section } from "@/components/site/PageShell";
import { NEWS } from "@/content/site";

export const Route = createFileRoute("/news/$slug")({
  loader: ({ params }) => {
    const article = NEWS.find((n) => n.slug === params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Article not found — AG Union" }, { name: "robots", content: "noindex" }] };
    }
    const { article } = loaderData;
    return {
      meta: [
        { title: `${article.title} — AG Union News` },
        { name: "description", content: article.excerpt },
        { property: "og:title", content: article.title },
        { property: "og:description", content: article.excerpt },
        { property: "og:type", content: "article" },
      ],
    };
  },
  component: ArticlePage,
  notFoundComponent: () => (
    <PageShell>
      <Section>
        <h1 className="text-4xl font-extrabold">Article not found</h1>
        <p className="mt-4 text-foreground/60">This news item may have been removed.</p>
        <Link to="/news" className="mt-8 inline-block text-accent">← Back to news</Link>
      </Section>
    </PageShell>
  ),
});

function ArticlePage() {
  const { article } = Route.useLoaderData();
  const related = NEWS.filter((n) => n.slug !== article.slug).slice(0, 3);

  return (
    <PageShell>
      <article className="border-b border-border">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <Link to="/news" className="mb-8 inline-block font-mono text-xs uppercase tracking-widest text-accent">← News</Link>
          <div className="mb-6 flex gap-4 font-mono text-[10px] uppercase tracking-widest">
            <span className="text-accent">{article.tag}</span>
            <span className="text-foreground/50">{article.date}</span>
          </div>
          <h1 className="text-balance text-4xl font-extrabold leading-tight lg:text-5xl">{article.title}</h1>
          <p className="mt-6 text-xl text-foreground/70">{article.excerpt}</p>
          <div className="mt-12 space-y-6 text-lg leading-relaxed text-foreground/80">
            {article.body.map((p, i) => <p key={i}>{p}</p>)}
          </div>
          <div className="mt-16 flex gap-3 border-t border-border pt-8">
            <span className="font-mono text-xs uppercase tracking-widest text-foreground/50">Share:</span>
            <button className="text-sm text-accent hover:underline">Facebook</button>
            <button className="text-sm text-accent hover:underline">Telegram</button>
            <button className="text-sm text-accent hover:underline">Copy Link</button>
          </div>
        </div>
      </article>
      <Section className="bg-card">
        <h2 className="mb-10 text-2xl font-bold">Related news</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {related.map((n) => (
            <Link key={n.slug} to="/news/$slug" params={{ slug: n.slug }} className="group flex flex-col gap-4 border-t border-border pt-6">
              <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest">
                <span className="text-accent">{n.tag}</span>
                <span className="text-foreground/40">{n.date}</span>
              </div>
              <h3 className="text-lg font-bold leading-snug group-hover:text-accent">{n.title}</h3>
            </Link>
          ))}
        </div>
      </Section>
    </PageShell>
  );
}
