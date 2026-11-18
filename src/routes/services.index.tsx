import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { ConceptImage } from "@/components/site/ConceptImage";
import { Reveal } from "@/components/site/Reveal";
import { ACCENT_BG, ACCENT_TEXT, DIVISIONS } from "@/lib/services";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services — Wander Infinity Media" },
      {
        name: "description",
        content:
          "Creative production, digital marketing, podcasts, events, websites & apps, software & cybersecurity, and AI automation.",
      },
      { property: "og:title", content: "Services — Wander Infinity Media" },
      {
        property: "og:description",
        content: "Seven divisions, one studio. Explore every service we offer.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
  return (
    <div className="page-enter">
      <section className="relative overflow-hidden pt-32 pb-16 md:pt-40">
        <div className="absolute inset-0 bg-aurora" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <p className="eyebrow">Services</p>
          <h1 className="mt-5 max-w-4xl text-5xl font-bold leading-[1.02] md:text-7xl">
            Every medium. <span className="text-gradient-infinity">One studio.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Seven specialist divisions working as one team — choose a division to see every service
            we provide.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-28 md:px-8">
        <div className="grid gap-5 md:grid-cols-2">
          {DIVISIONS.map((d, i) => (
            <Reveal key={d.slug} delay={(i % 2) * 100}>
              <Link
                to="/services/$division"
                params={{ division: d.slug }}
                className="group block h-full overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-foreground/25"
              >
                <ConceptImage
                  {...d.image}
                  className="aspect-[16/9]"
                  imgClassName="transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                />
                <div className="p-6 md:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <h2 className="text-2xl font-semibold md:text-3xl">{d.name}</h2>
                    <ArrowUpRight
                      className={`mt-1 size-6 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 ${ACCENT_TEXT[d.accent]}`}
                    />
                  </div>
                  <p className="mt-3 text-muted-foreground">{d.tagline}</p>
                  <div className="mt-6 flex items-center gap-2 text-sm text-foreground/70">
                    <span className={`h-1.5 w-1.5 rounded-full ${ACCENT_BG[d.accent]}`} />
                    {d.services.length} services
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
