import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { ConceptImage } from "@/components/site/ConceptImage";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { ACCENT_BG, ACCENT_TEXT, DIVISIONS, findDivision } from "@/lib/services";

export const Route = createFileRoute("/services/$division/")({
  loader: ({ params }) => {
    const division = findDivision(params.division);
    if (!division) throw notFound();
    return { slug: division.slug };
  },
  head: ({ loaderData }) => {
    const d = loaderData ? findDivision(loaderData.slug) : undefined;
    const title = d ? `${d.name} — Wander Infinity Media` : "Service not found — Wander Infinity Media";
    const description = d?.tagline ?? "This service could not be found.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
        ...(d ? [] : [{ name: "robots", content: "noindex" }]),
      ],
    };
  },
  component: DivisionPage,
});

function DivisionPage() {
  const { slug } = Route.useLoaderData();
  const d = findDivision(slug)!;
  const others = DIVISIONS.filter((x) => x.slug !== d.slug);

  return (
    <div className="page-enter" key={d.slug}>
      <section className="relative overflow-hidden pt-28 md:pt-36">
        <div className="absolute inset-0 bg-aurora" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl items-end gap-10 px-5 pb-14 md:grid-cols-[1.1fr_1fr] md:px-8">
          <div>
            <nav aria-label="Breadcrumb" className="eyebrow flex flex-wrap gap-2">
              <Link to="/services" className="hover:text-foreground">Services</Link>
              <span aria-hidden="true">/</span>
              <span className={ACCENT_TEXT[d.accent]}>{d.name}</span>
            </nav>
            <h1 className="mt-5 text-4xl font-bold leading-[1.04] md:text-6xl">{d.name}</h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">{d.intro}</p>
            <Button asChild variant="hero" size="xl" className="mt-8">
              <Link to="/contact" search={{ service: d.slug }}>
                Enquire now <ArrowRight />
              </Link>
            </Button>
          </div>
          <ConceptImage
            {...d.image}
            priority
            className="aspect-[4/3] rounded-2xl border border-border"
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <Reveal>
          <h2 className="text-3xl font-semibold md:text-4xl">What we offer</h2>
          <p className="mt-3 max-w-xl text-muted-foreground">
            Select any service to see what's included, deliverables and how we work.
          </p>
        </Reveal>
        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {d.services.map((s) => (
            <li key={s.slug}>
              <Link
                to="/services/$division/$service"
                params={{ division: d.slug, service: s.slug }}
                className="group flex h-full flex-col rounded-xl border border-border bg-card/70 p-5 transition-all hover:-translate-y-0.5 hover:border-foreground/25 hover:bg-card"
              >
                <span className="flex items-start justify-between gap-3">
                  <span className="font-display text-lg font-semibold">{s.name}</span>
                  <ArrowUpRight
                    className={`size-5 shrink-0 opacity-50 transition-all group-hover:opacity-100 ${ACCENT_TEXT[d.accent]}`}
                  />
                </span>
                <span className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.summary}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-y border-border bg-obsidian">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 py-20 md:grid-cols-2 md:px-8">
          <Reveal>
            <h2 className="text-2xl font-semibold md:text-3xl">What we provide</h2>
            <ul className="mt-6 space-y-4">
              {d.provides.map((p) => (
                <li key={p} className="flex gap-3 text-foreground/85">
                  <Check className={`mt-0.5 size-5 shrink-0 ${ACCENT_TEXT[d.accent]}`} />
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="text-2xl font-semibold md:text-3xl">How we work</h2>
            <ol className="mt-6 space-y-5">
              {d.process.map((step) => (
                <li key={step.title} className="flex gap-4">
                  <span className={`mt-2 h-2 w-2 shrink-0 rounded-full ${ACCENT_BG[d.accent]}`} />
                  <span>
                    <span className="font-semibold">{step.title}</span>
                    <span className="block text-sm text-muted-foreground">{step.text}</span>
                  </span>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <p className="eyebrow">Explore other divisions</p>
        <div className="mt-6 flex flex-wrap gap-3">
          {others.map((o) => (
            <Link
              key={o.slug}
              to="/services/$division"
              params={{ division: o.slug }}
              className="rounded-full border border-border px-5 py-2.5 text-sm text-foreground/80 transition-colors hover:border-foreground/30 hover:text-foreground"
            >
              {o.name}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
