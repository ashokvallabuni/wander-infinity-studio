import { Link } from "@tanstack/react-router";
import { BrandLogo } from "./BrandLogo";
import { BRAND } from "@/lib/brand";

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border bg-obsidian">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-[1.4fr_1fr_1fr] md:px-8">
        <div>
          <BrandLogo variant="compact" className="w-[200px]" />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
            A creative media studio for cinematics, VFX, digital marketing, podcasts, events and
            technology.
          </p>
        </div>
        <div>
          <p className="eyebrow">Explore</p>
          <ul className="mt-5 space-y-3 text-sm">
            <li><Link to="/" className="text-foreground/80 hover:text-foreground">Home</Link></li>
            <li><Link to="/" hash="services" className="text-foreground/80 hover:text-foreground">Services</Link></li>
            <li><Link to="/about" className="text-foreground/80 hover:text-foreground">About</Link></li>
            <li><Link to="/contact" className="text-foreground/80 hover:text-foreground">Contact</Link></li>
          </ul>
        </div>
        <div>
          <p className="eyebrow">Say hello</p>
          <a href={`mailto:${BRAND.email}`} className="mt-5 block text-sm text-foreground/80 hover:text-foreground">
            {BRAND.email}
          </a>
        </div>
      </div>
      <div className="h-px bg-gradient-infinity opacity-60" />
      <p className="mx-auto max-w-7xl px-5 py-6 text-xs text-muted-foreground md:px-8">
        © {new Date().getFullYear()} {BRAND.name}. Images marked “Concept visual” are illustrative,
        not client work.
      </p>
    </footer>
  );
}
