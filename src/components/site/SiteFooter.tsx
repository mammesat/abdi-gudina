import { Link } from "@tanstack/react-router";
import { useState } from "react";
import markAsset from "@/assets/ag-union-mark.png.asset.json";
import logoAsset from "@/assets/ag-union-logo.png.asset.json";

function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "ok" | "error">("idle");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
          setStatus("error");
          return;
        }
        // Placeholder: wire to WP REST /subscribers or a MailPoet endpoint later.
        setStatus("ok");
        setEmail("");
      }}
      className="mt-4 flex flex-col gap-2"
      aria-label="Newsletter signup"
    >
      <label htmlFor="footer-email" className="sr-only">Email address</label>
      <div className="flex overflow-hidden rounded-full border border-primary-foreground/20 bg-primary-foreground/5 focus-within:border-accent">
        <input
          id="footer-email"
          type="email"
          required
          value={email}
          onChange={(e) => { setEmail(e.target.value); setStatus("idle"); }}
          placeholder="your@email.et"
          className="min-h-11 flex-1 bg-transparent px-4 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none"
        />
        <button
          type="submit"
          className="min-h-11 bg-accent px-4 text-[11px] font-bold uppercase tracking-widest text-accent-foreground transition-opacity hover:opacity-90"
        >
          Subscribe
        </button>
      </div>
      <p
        role="status"
        className={`text-xs ${status === "ok" ? "text-accent" : status === "error" ? "text-[var(--danger)]" : "text-primary-foreground/40"}`}
      >
        {status === "ok" && "Thanks — we'll be in touch."}
        {status === "error" && "Please enter a valid email address."}
        {status === "idle" && "Quarterly reports and Union announcements. No spam."}
      </p>
    </form>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-primary-dark text-primary-foreground">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand + newsletter */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <img src={markAsset.url} alt="" width={28} height={28} className="h-7 w-7 object-contain" aria-hidden />
              <span className="text-xs font-extrabold uppercase tracking-tight">Abdi Gudina Union</span>
            </div>
            <p className="text-sm leading-relaxed text-primary-foreground/60">
              A member-owned financial cooperatives union serving 50 SACCOs and 12,000+ members across the Oromia
              Region, Ethiopia since 2007.
            </p>
            <NewsletterForm />
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-5 font-mono text-[10px] uppercase tracking-widest text-accent">Quick Links</h4>
            <ul className="space-y-2.5 text-sm text-primary-foreground/60">
              <li><Link to="/about" className="hover:text-accent">About the Union</Link></li>
              <li><Link to="/saccos" className="hover:text-accent">SACCO Directory</Link></li>
              <li><Link to="/saccos/join" className="hover:text-accent">How to Join</Link></li>
              <li><Link to="/services" className="hover:text-accent">Services</Link></li>
              <li><Link to="/impact" className="hover:text-accent">Achievements</Link></li>
              <li><Link to="/news" className="hover:text-accent">News &amp; Events</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="mb-5 font-mono text-[10px] uppercase tracking-widest text-accent">Resources</h4>
            <ul className="space-y-2.5 text-sm text-primary-foreground/60">
              <li><Link to="/resources" className="hover:text-accent">Resource Library</Link></li>
              <li><Link to="/resources/policies" className="hover:text-accent">Policies</Link></li>
              <li><Link to="/resources/audits" className="hover:text-accent">Audits</Link></li>
              <li><Link to="/resources/forms" className="hover:text-accent">Forms</Link></li>
              <li><Link to="/transparency" className="hover:text-accent">Financial Summary</Link></li>
              <li><Link to="/transparency/reports" className="hover:text-accent">Annual Reports</Link></li>
              <li><Link to="/resources/faq" className="hover:text-accent">FAQ</Link></li>
            </ul>
          </div>

          {/* Contact + Emergency */}
          <div>
            <h4 className="mb-5 font-mono text-[10px] uppercase tracking-widest text-accent">Contact</h4>
            <address className="space-y-2 text-sm not-italic text-primary-foreground/60">
              <p>Adama City, Around Mebrat Hail<br />Oromia Region, Ethiopia</p>
              <p><a href="tel:+251222114181" className="hover:text-accent">+251-222-114-181</a></p>
              <p><a href="mailto:info@abdigudinaunion.com.et" className="hover:text-accent">info@abdigudinaunion.com.et</a></p>
              <p className="text-primary-foreground/40">Mon – Sat · 8:00 AM – 5:00 PM</p>
            </address>
            <div className="mt-5 rounded-xl border border-accent/30 bg-accent/5 p-3">
              <div className="font-mono text-[10px] uppercase tracking-widest text-accent">Member Emergency</div>
              <a href="tel:+251222114181" className="mt-1 block text-sm font-bold hover:text-accent">
                +251-222-114-181
              </a>
              <p className="mt-1 text-[11px] text-primary-foreground/50">
                Loan queries, fraud reports, urgent SACCO matters.
              </p>
            </div>
            <div className="mt-5">
              <h5 className="mb-2 font-mono text-[10px] uppercase tracking-widest text-primary-foreground/50">Follow</h5>
              <ul className="flex gap-4 text-sm text-primary-foreground/60">
                <li><a href="https://www.facebook.com/profile.php?id=61556218060368" target="_blank" rel="noopener noreferrer" className="hover:text-accent">Facebook</a></li>
                <li><a href="https://t.me/AGFCunion" target="_blank" rel="noopener noreferrer" className="hover:text-accent">Telegram</a></li>
                <li><a href="https://www.youtube.com/channel/UCSflFQV3q78az9FTwpx0vXg" target="_blank" rel="noopener noreferrer" className="hover:text-accent">YouTube</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Legal row */}
        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-primary-foreground/10 pt-6 text-[10px] font-mono uppercase tracking-widest text-primary-foreground/40 md:flex-row md:items-center">
          <span>© 2026 Abdi Gudina Financial Cooperatives Union Ltd. All rights reserved.</span>
          <div className="flex flex-wrap gap-5">
            <Link to="/" className="hover:text-accent">Privacy</Link>
            <Link to="/" className="hover:text-accent">Terms</Link>
            <Link to="/" className="hover:text-accent">Accessibility</Link>
            <span className="text-primary-foreground/30">
              Powered by <span className="text-accent">HISABAGAR</span>
            </span>
          </div>
        </div>
      </div>

      <div className="sr-only">
        <img src={logoAsset.url} alt="Abdi Gudina Financial Cooperatives Union Ltd" />
      </div>
    </footer>
  );
}
