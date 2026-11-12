import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { BrandLogo } from "@/components/site/BrandLogo";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import cinematics from "@/assets/concept-cinematics.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Wander Infinity Media" },
      {
        name: "description",
        content:
          "Meet Wander Infinity Media, a creative studio uniting film, VFX, marketing, podcasts, events and technology.",
      },
      { property: "og:title", content: "About — Wander Infinity Media" },
      {
        property: "og:description",
        content: "A creative studio uniting film, VFX, marketing, podcasts, events and technology.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

const VALUES = [
  ["Craft", "Every frame, sound and pixel considered.", "text-cyan"],
  ["Curiosity", "We wander — exploring ideas others overlook.", "text-violet"],
  ["Continuity", "One team from concept to launch and beyond.", "text-amber"],
  ["Impact", "Creative work measured by what it moves.", "text-emerald"],
];

function About() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40">
        <div className="absolute inset-0 bg-aurora" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 md:grid-cols-2 md:px-8">
          <Reveal>
            <p className="eyebrow">About us</p>
            <h1 className="mt-5 text-5xl font-bold leading-[1.02] md:text-7xl">
              Built to <span className="text-gradient-infinity">wander.</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Wander Infinity Media brings cinematic production, visual effects, digital marketing,
              podcasting, live events and technology together in one studio — so your story stays
              consistent everywhere it travels.
            </p>
          </Reveal>
          <Reveal delay={150}>
            <BrandLogo className="mx-auto w-full max-w-lg" />
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 md:px-8">
        <Reveal>
          <figure className="relative overflow-hidden rounded-2xl border border-border">
            <img
              src={cinematics}
              width={1536}
              height={1024}
              loading="lazy"
              alt="Cinema camera on a dolly at night — concept visual"
              className="aspect-[16/9] w-full object-cover"
            />
            <figcaption className="eyebrow absolute right-4 top-4 rounded-full border border-border bg-obsidian/60 px-3 py-1 text-[0.6rem] backdrop-blur">
              Concept visual
            </figcaption>
          </figure>
        </Reveal>

        <div className="mt-20 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map(([t, c, color], i) => (
            <Reveal key={t} delay={i * 100}>
              <span className={`font-display text-sm ${color}`}>0{i + 1}</span>
              <h2 className="mt-3 text-2xl font-semibold">{t}</h2>
              <p className="mt-2 text-muted-foreground">{c}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20 flex justify-center">
          <Button asChild variant="hero" size="xl">
            <Link to="/contact">
              Work with us <ArrowRight />
            </Link>
          </Button>
        </Reveal>
      </section>
    </>
  );
}
