import { createFileRoute } from "@tanstack/react-router";
import almazImg from "@/assets/almaz-story.jpg";
import heroImg from "@/assets/hero-community.jpg";
import { PageShell, PageHeader, Section } from "@/components/site/PageShell";

export const Route = createFileRoute("/news/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — AG Union" },
      { name: "description", content: "Photos from AG Union events, member stories, training sessions, and community moments." },
      { property: "og:title", content: "AG Union Gallery" },
      { property: "og:description", content: "Photos from the cooperative movement." },
    ],
  }),
  component: GalleryPage,
});

const IMAGES: { src: string; caption: string; span: string }[] = [
  { src: heroImg, caption: "Cooperative gathering, Adama 2026", span: "md:col-span-2 md:row-span-2" },
  { src: almazImg, caption: "Almaz Hailu, member spotlight", span: "" },
  { src: heroImg, caption: "SACCO leaders forum", span: "" },
  { src: almazImg, caption: "Loan disbursement day", span: "" },
  { src: heroImg, caption: "Training program 2026", span: "md:col-span-2" },
  { src: almazImg, caption: "Women in cooperative finance summit", span: "" },
];

function GalleryPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Gallery"
        title="Moments from the movement."
      />
      <Section>
        <div className="grid auto-rows-[200px] grid-cols-1 gap-3 md:grid-cols-3">
          {IMAGES.map((img, i) => (
            <figure key={i} className={`group relative overflow-hidden rounded-2xl ${img.span}`}>
              <img src={img.src} alt={img.caption} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary-dark to-transparent p-4 text-xs text-primary-foreground opacity-0 transition-opacity group-hover:opacity-100">
                {img.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>
    </PageShell>
  );
}
