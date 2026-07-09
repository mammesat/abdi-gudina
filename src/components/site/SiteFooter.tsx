import { Link } from "@tanstack/react-router";
import markAsset from "@/assets/ag-union-mark.png.asset.json";
import logoAsset from "@/assets/ag-union-logo.png.asset.json";

export function SiteFooter() {
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
            <li><Link to="/about" className="hover:text-accent">About Us</Link></li>
            <li><Link to="/saccos" className="hover:text-accent">SACCO Directory</Link></li>
            <li><Link to="/services/loans" className="hover:text-accent">Loan Products</Link></li>
            <li><Link to="/transparency/reports" className="hover:text-accent">Annual Reports</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Contact Us</Link></li>
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
            <li><a href="https://www.facebook.com/profile.php?id=61556218060368" target="_blank" rel="noopener noreferrer" className="hover:text-accent">Facebook</a></li>
            <li><a href="https://t.me/AGFCunion" target="_blank" rel="noopener noreferrer" className="hover:text-accent">Telegram</a></li>
            <li><a href="https://www.youtube.com/channel/UCSflFQV3q78az9FTwpx0vXg" target="_blank" rel="noopener noreferrer" className="hover:text-accent">YouTube</a></li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-16 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-primary-foreground/10 px-6 pt-8 text-[10px] font-mono uppercase tracking-widest text-primary-foreground/40 md:flex-row">
        <span>© 2026 Abdi Gudina Financial Cooperatives Union Ltd.</span>
        <div className="flex gap-6">
          <Link to="/" className="hover:text-accent">Privacy Policy</Link>
          <Link to="/" className="hover:text-accent">Terms &amp; Conditions</Link>
        </div>
      </div>

      <div className="sr-only">
        <img src={logoAsset.url} alt="Abdi Gudina Financial Cooperatives Union Ltd" />
      </div>
    </footer>
  );
}
