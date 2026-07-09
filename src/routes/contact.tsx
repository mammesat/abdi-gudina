import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { PageShell, PageHeader, Section } from "@/components/site/PageShell";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — AG Union" },
      { name: "description", content: "Contact Abdi Gudina Financial Cooperatives Union — Adama HQ, phone, email, office hours." },
      { property: "og:title", content: "Contact AG Union" },
      { property: "og:description", content: "Reach the Union — Adama, Ethiopia." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const body = `Name: ${data.get("name")}%0AEmail: ${data.get("email")}%0ASACCO: ${data.get("sacco")}%0A%0A${data.get("message")}`;
    window.location.href = `mailto:info@abdigudinaunion.com.et?subject=Website%20Enquiry&body=${body}`;
    setSent(true);
  };

  return (
    <PageShell>
      <PageHeader
        eyebrow="Get in Touch"
        title="Reach the Union."
        intro="Members should contact their SACCO first. For Union-level questions, partnership enquiries, or press, use the details below."
        variant="dark"
      />
      <Section>
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <h2 className="mb-8 text-2xl font-bold">Office</h2>
            <address className="space-y-6 not-italic">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-accent">Address</div>
                <p className="mt-2 text-lg">Adama City, Around Mebrat Hail<br />Oromia Region, Ethiopia</p>
              </div>
              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-accent">Phone</div>
                <p className="mt-2 text-lg">+251-222-114-181</p>
              </div>
              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-accent">Email</div>
                <p className="mt-2 text-lg">info@abdigudinaunion.com.et</p>
              </div>
              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-accent">Hours</div>
                <p className="mt-2">Mon – Sat · 8:00 AM – 5:00 PM<br />Sunday closed</p>
              </div>
            </address>
            <div className="mt-10 aspect-video overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-primary to-primary-dark">
              <div className="flex h-full flex-col items-center justify-center text-primary-foreground">
                <div className="text-4xl">📍</div>
                <div className="mt-2 font-bold">Adama, Ethiopia</div>
                <div className="mt-1 font-mono text-xs opacity-60">Map coming soon</div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="mb-8 text-2xl font-bold">Send us a message</h2>
            {sent ? (
              <div className="rounded-2xl border border-accent bg-accent/10 p-8">
                <div className="text-lg font-bold text-accent">Thanks — we'll be in touch.</div>
                <p className="mt-2 text-sm text-foreground/70">Your email client should open with a pre-filled draft.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-4">
                <label className="block">
                  <span className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-foreground/60">Name</span>
                  <input required name="name" className="w-full rounded-xl border border-border bg-background px-4 py-3 focus:border-accent focus:outline-none" />
                </label>
                <label className="block">
                  <span className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-foreground/60">Email</span>
                  <input required type="email" name="email" className="w-full rounded-xl border border-border bg-background px-4 py-3 focus:border-accent focus:outline-none" />
                </label>
                <label className="block">
                  <span className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-foreground/60">SACCO (optional)</span>
                  <input name="sacco" className="w-full rounded-xl border border-border bg-background px-4 py-3 focus:border-accent focus:outline-none" />
                </label>
                <label className="block">
                  <span className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-foreground/60">Message</span>
                  <textarea required name="message" rows={6} className="w-full rounded-xl border border-border bg-background px-4 py-3 focus:border-accent focus:outline-none" />
                </label>
                <button type="submit" className="w-full rounded-full bg-primary py-4 font-bold text-primary-foreground transition-colors hover:bg-primary-dark">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </Section>
    </PageShell>
  );
}
