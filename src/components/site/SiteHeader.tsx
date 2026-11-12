import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { BrandLogo } from "./BrandLogo";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const NAV: { to: "/" | "/about" | "/contact"; label: string; hash?: string }[] = [
  { to: "/", label: "Home" },
  { to: "/", label: "Services", hash: "services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-500",
        scrolled ? "border-b border-border bg-obsidian/85 backdrop-blur-xl" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-8">
        <Link to="/" aria-label="Wander Infinity Media — home" className="shrink-0">
          <BrandLogo variant="compact" priority className="w-[132px] md:w-[168px]" />
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {NAV.map((n) => (
            <Link
              key={n.label}
              to={n.to}
              {...(n.hash ? { hash: n.hash } : {})}
              activeOptions={{ exact: true, includeHash: true }}
              className="text-sm tracking-wide text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-foreground"
            >
              {n.label}
            </Link>
          ))}
          <Button asChild variant="hero" size="sm" className="h-10 px-5">
            <Link to="/contact">Start a project</Link>
          </Button>
        </nav>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="glass" size="icon" className="md:hidden" aria-label="Open menu">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[86vw] max-w-sm border-border bg-obsidian">
            <SheetTitle className="sr-only">Menu</SheetTitle>
            <BrandLogo variant="compact" className="mt-2 w-[150px]" />
            <nav className="mt-12 flex flex-col gap-6">
              {NAV.map((n) => (
                <Link
                  key={n.label}
                  to={n.to}
                  {...(n.hash ? { hash: n.hash } : {})}
                  onClick={() => setOpen(false)}
                  className="font-display text-3xl text-foreground/90 hover:text-foreground"
                >
                  {n.label}
                </Link>
              ))}
            </nav>
            <Button asChild variant="hero" size="xl" className="mt-12 w-full">
              <Link to="/contact" onClick={() => setOpen(false)}>
                Start a project
              </Link>
            </Button>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
