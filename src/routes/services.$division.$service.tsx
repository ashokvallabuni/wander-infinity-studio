import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { ConceptImage } from "@/components/site/ConceptImage";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { ACCENT_BG, ACCENT_TEXT, findService, relatedServices } from "@/lib/services";

export const Route = createFileRoute("/services/$division/$service")({
  loader: ({ params }) => {
    const found = findService(params.division, params.service);
    if (!found) throw notFound();
    return { division: found.division.slug, service: found.service.slug };
  },
  head: ({ loaderData }) => {
    const f = loaderData ? findService(loaderData.division, loaderData.service) : undefined;
    const title = f
      ? `${f.service.name} — ${f.division.name} | Wander Infinity Media`
      : "Service not found — Wander Infinity Media";
    const description = f?.service.summary ?? "This service could not be found.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
        ...(f ? [] : [{ name: "robots", content: "noindex" }]),
      ],
    };
  },
  component: ServicePage,
});

function ServicePage() {
  const ids = Route.useLoaderData();
  const { division: d, service: s } = findService(ids.division, ids.service)!;
  const related = relatedServices(d, s);
  const accent = ACCENT_TEXT[d.accent];

  return (
    <div className="page-enter" key={s.slug}>
      <section className="relative overflow-hidden pt-28 md:pt-36">
        <div className="absolute inset-0 bg-aurora" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 pb-14 md:grid-cols-[1.1fr_1fr] md:px-8">
          <div>
            <nav aria-label="Breadcrumb" className="eyebrow flex flex-wrap gap-2">
              <Link to="/services" className="hover:text-foreground">Services</Link>
              <span aria-hidden="true">/</span>
              <Link to="/services/$division" params={{ division: d.slug }} className="hover:text-foreground">
                {d.name}
              </Link>
            </nav>
            <h1 className="mt-5 text-4xl font-bold leading-[1.04] md:text-6xl">{s.name}</h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">{s.summary}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="hero" size="xl">
                <Link to="/contact" search={{ service: s.slug }}>
                  Enquire now <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="glass" size="xl">
                <Link to="/services/$division" params={{ division: d.slug }}>
                  <ArrowLeft /> All {d.name.split(" ")[0]} services
                </Link>
              </Button>
            </div>
          </div>
          <ConceptImage
            {...d.image}
            priority
            className="aspect-[4/3] rounded-2xl border border-border"
          />
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-5 py-16 md:grid-cols-3 md:px-8">
        <Reveal className="rounded-2xl border border-border bg-card p-7">
          <h2 className="text-xl font-semibold">What we provide</h2>
          <ul className="mt-5 space-y-3 text-sm text-foreground/85">
            {d.provides.map((p) => (
              <li key={p} className="flex gap-3">
                <Check className={`mt-0.5 size-4 shrink-0 ${accent}`} /> {p}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={100} className="rounded-2xl border border-border bg-card p-7">
          <h2 className="text-xl font-semibold">Key deliverables</h2>
          <ul className="mt-5 space-y-3 text-sm text-foreground/85">
            {s.deliverables.map((x) => (
              <li key={x} className="flex gap-3">
                <Check className={`mt-0.5 size-4 shrink-0 ${accent}`} /> {x}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={200} className="rounded-2xl border border-border bg-card p-7">
          <h2 className="text-xl font-semibold">Business benefits</h2>
          <ul className="mt-5 space-y-3 text-sm text-foreground/85">
            {d.benefits.map((b) => (
              <li key={b} className="flex gap-3">
                <Check className={`mt-0.5 size-4 shrink-0 ${accent}`} /> {b}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="border-y border-border bg-obsidian">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
          <h2 className="text-2xl font-semibold md:text-3xl">Our execution process</h2>
          <ol className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {d.process.map((step, i) => (
              <Reveal key={step.title} delay={i * 80}>
                <li className="list-none">
                  <span className={`block h-0.5 w-10 ${ACCENT_BG[d.accent]}`} />
                  <p className="mt-4 font-semibold">{step.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{step.text}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <h2 className="text-2xl font-semibold md:text-3xl">Related services</h2>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((r) => (
            <li key={r.slug}>
              <Link
                to="/services/$division/$service"
                params={{ division: d.slug, service: r.slug }}
                className="group flex h-full items-start justify-between gap-3 rounded-xl border border-border bg-card/70 p-5 transition-all hover:-translate-y-0.5 hover:border-foreground/25"
              >
                <span className="font-display font-semibold">{r.name}</span>
                <ArrowUpRight className={`size-5 shrink-0 opacity-50 group-hover:opacity-100 ${accent}`} />
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-16 flex flex-col items-start justify-between gap-6 rounded-2xl border border-border bg-card p-8 md:flex-row md:items-center md:p-10">
          <div>
            <h2 className="text-2xl font-semibold md:text-3xl">Interested in {s.name}?</h2>
            <p className="mt-2 text-muted-foreground">Tell us about your project — we'll reply with next steps.</p>
          </div>
          <Button asChild variant="hero" size="xl">
            <Link to="/contact" search={{ service: s.slug }}>
              Enquire now <ArrowRight />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
