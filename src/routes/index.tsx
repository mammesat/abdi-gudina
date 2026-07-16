import { createFileRoute } from "@tanstack/react-router";
import almazImg from "@/assets/almaz-story.jpg";
import heroImg from "@/assets/hero-community.jpg";
import { PageShell } from "@/components/site/PageShell";
import { SaccoLogoMarquee } from "@/components/site/SaccoLogoMarquee";
import {
  HeroSection,
  StatsSection,
  AboutPreviewSection,
  ServicesSection,
  JourneySection,
  TimelineSection,
  SuccessStorySection,
  FinancialsSection,
  NewsPreviewSection,
  ManagerMessageSection,
  FaqSection,
  EventsSection,
  CtaSection,
  AwardsSection,
} from "@/components/home/sections";
import { HOME, NEWS, MILESTONES, EVENTS, STORIES } from "@/content/site";

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

function HomePage() {
  const featuredStory = STORIES.find((s) => s.slug === "almaz-hailu") ?? STORIES[0];
  return (
    <PageShell>
      {/* wp: template-parts/home-hero.php */}
      <HeroSection {...HOME.hero} />
      {/* wp: template-parts/home-stats.php */}
      <StatsSection items={HOME.stats} />
      {/* wp: template-parts/home-about.php */}
      <AboutPreviewSection {...HOME.about} />
      {/* wp: template-parts/home-services.php */}
      <ServicesSection items={HOME.services} />
      {/* wp: template-parts/home-saccos.php (CPT: sacco) */}
      <SaccoLogoMarquee />
      {/* wp: template-parts/home-journey.php */}
      <JourneySection items={HOME.journey} />
      {/* wp: template-parts/home-timeline.php (CPT: milestone) */}
      <TimelineSection items={MILESTONES} />
      {/* wp: template-parts/home-story.php (CPT: story) */}
      <SuccessStorySection story={featuredStory} image={almazImg} />
      {/* wp: template-parts/home-financials.php */}
      <FinancialsSection items={HOME.financials} />
      {/* wp: template-parts/home-news.php (post loop) */}
      <NewsPreviewSection items={NEWS.slice(0, 3)} />
      {/* wp: template-parts/home-manager.php */}
      <ManagerMessageSection {...HOME.managerMessage} />
      {/* wp: template-parts/home-faq.php */}
      <FaqSection items={HOME.faqs} />
      {/* wp: template-parts/home-events.php (CPT: event) */}
      <EventsSection items={EVENTS} />
      {/* wp: template-parts/home-cta.php */}
      <CtaSection {...HOME.cta} bgImage={heroImg} />
      {/* wp: template-parts/home-awards.php */}
      <AwardsSection items={HOME.awards} />
    </PageShell>
  );
}
