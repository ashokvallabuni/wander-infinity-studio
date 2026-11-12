import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useCallback, useState } from "react";
import { BrandLogo } from "@/components/site/BrandLogo";
import { IntroSequence, LEMNISCATE } from "@/components/site/IntroSequence";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import cinematics from "@/assets/concept-cinematics.jpg";
import digital from "@/assets/concept-digital.jpg";
import podcast from "@/assets/concept-podcast.jpg";
import events from "@/assets/concept-events.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Wander Infinity Media — Stories Without Limits" },
      {
        name: "description",
        content:
          "Cinematic production, VFX, digital marketing, podcasts, live events and technology — one creative media studio.",
      },
      { property: "og:title", content: "Wander Infinity Media — Stories Without Limits" },
      {
        property: "og:description",
        content: "Cinematics, VFX, digital marketing, podcasts, events and technology.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

// Play the intro once per page load; client-side returns to home skip it.
let introPlayed = false;

const SERVICES = [
  {
    title: "Creative Media & Cinematics",
    copy: "Brand films, commercials and documentary storytelling, shot and graded for the big screen.",
    img: cinematics,
    w: 1536,
    h: 1024,
    accent: "text-cyan",
    span: "md:col-span-7",
    ratio: "aspect-[4/3] md:aspect-auto md:h-[540px]",
  },
  {
    title: "Podcast Production",
    copy: "Studio sessions, multi-cam video podcasts and editing that keeps listeners to the last minute.",
    img: podcast,
    w: 1024,
    h: 1280,
    accent: "text-violet",
    span: "md:col-span-5",
    ratio: "aspect-[4/5] md:aspect-auto md:h-[540px]",
  },
  {
    title: "Events & Experiences",
    copy: "Stage design, live production and event coverage that turns a moment into a memory.",
    img: events,
    w: 1024,
    h: 1280,
    accent: "text-emerald",
    span: "md:col-span-5",
    ratio: "aspect-[4/5] md:aspect-auto md:h-[540px]",
  },
  {
    title: "Digital Marketing & Technology",
    copy: "Campaigns, social content, websites and mobile apps — built to perform and look the part.",
    img: digital,
    w: 1536,
    h: 1024,
    accent: "text-amber",
    span: "md:col-span-7",
    ratio: "aspect-[4/3] md:aspect-auto md:h-[540px]",
  },
] as const;

const DISCIPLINES = [
  "Cinematics",
  "VFX",
  "Digital Marketing",
  "Podcasts",
  "Events",
  "Web & Apps",
  "Brand Films",
  "Social Content",
];

function Index() {
  const [playing, setPlaying] = useState(!introPlayed);
  const finish = useCallback(() => {
    introPlayed = true;
    setPlaying(false);
  }, []);

  return (
    <>
      {playing && <IntroSequence onDone={finish} />}

      {/* HERO */}
      <section
        data-ready={!playing}
        className="grain relative flex min-h-[100svh] items-center overflow-hidden pt-24 pb-16"
      >
        <div className="float-slow absolute inset-0 bg-aurora" aria-hidden="true" />
        <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center px-5 text-center md:px-8">
          <div className="rise relative w-[min(88vw,640px)]" style={{ ["--d" as string]: "0ms" }}>
            <svg
              viewBox="0 0 400 200"
              fill="none"
              aria-hidden="true"
              className="absolute left-1/2 top-[38%] w-[118%] -translate-x-1/2 -translate-y-1/2 opacity-70"
            >
              <defs>
                <linearGradient id="hero-g" x1="0" x2="1">
                  <stop offset="0" stopColor="var(--ember)" />
                  <stop offset=".35" stopColor="var(--amber)" />
                  <stop offset=".7" stopColor="var(--emerald)" />
                  <stop offset="1" stopColor="var(--cyan)" />
                </linearGradient>
                <filter id="hero-blur"><feGaussianBlur stdDeviation="3" /></filter>
              </defs>
              <path d={LEMNISCATE} stroke="var(--border)" strokeWidth=".6" />
              <path
                d={LEMNISCATE}
                pathLength={1000}
                stroke="url(#hero-g)"
                strokeWidth="3"
                filter="url(#hero-blur)"
                className="infinity-trace"
              />
            </svg>
            <BrandLogo priority className="relative w-full" />
          </div>

          <h1
            className="rise mt-2 max-w-4xl text-4xl font-bold leading-[1.02] md:text-7xl"
            style={{ ["--d" as string]: "200ms" }}
          >
            Stories without <span className="text-gradient-infinity">limits.</span>
          </h1>
          <p
            className="rise mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
            style={{ ["--d" as string]: "380ms" }}
          >
            Cinematics, VFX, digital marketing, podcasts, events and technology — crafted by one
            creative media studio.
          </p>
          <div
            className="rise mt-10 flex flex-col gap-3 sm:flex-row"
            style={{ ["--d" as string]: "560ms" }}
          >
            <Button asChild variant="hero" size="xl">
              <Link to="/contact">
                Start a project <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="glass" size="xl">
              <Link to="/" hash="services">Explore services</Link>
            </Button>
          </div>
        </div>
        <div className="bg-fade-b absolute inset-x-0 bottom-0 h-32" aria-hidden="true" />
      </section>

      {/* MARQUEE */}
      <div className="overflow-hidden border-y border-border py-6">
        <div className="marquee flex w-max gap-12 whitespace-nowrap">
          {[...DISCIPLINES, ...DISCIPLINES].map((d, i) => (
            <span key={i} className="font-display text-2xl text-foreground/70 md:text-4xl">
              {d}
              <span className="ml-12 text-gradient-infinity">∞</span>
            </span>
          ))}
        </div>
      </div>

      {/* SERVICES */}
      <section id="services" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-24 md:px-8 md:py-32">
        <Reveal className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">What we do</p>
            <h2 className="mt-4 max-w-2xl text-4xl font-bold md:text-6xl">
              Every medium. <br className="hidden md:block" />
              One infinite vision.
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground">
            From the first frame to the final campaign, we shape how your story is seen, heard and
            remembered.
          </p>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-12">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={(i % 2) * 120} className={s.span}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card">
                <div className={`relative overflow-hidden ${s.ratio}`}>
                  <img
                    src={s.img}
                    width={s.w}
                    height={s.h}
                    loading="lazy"
                    alt={`${s.title} — concept visual`}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/30 to-transparent" />
                  <span className="eyebrow absolute right-4 top-4 rounded-full border border-border bg-obsidian/60 px-3 py-1 text-[0.6rem] backdrop-blur">
                    Concept visual
                  </span>
                  <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                    <span className={`font-display text-sm ${s.accent}`}>0{i + 1}</span>
                    <h3 className="mt-2 text-2xl font-semibold md:text-3xl">{s.title}</h3>
                    <p className="mt-3 max-w-md text-sm leading-relaxed text-foreground/75">
                      {s.copy}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-5">
          <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-border bg-card p-8 md:flex-row md:items-center md:p-10">
            <div>
              <span className="font-display text-sm text-violet">05</span>
              <h3 className="mt-2 text-2xl font-semibold md:text-3xl">VFX & Post-Production</h3>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
                Compositing, motion graphics, colour grading and visual effects that make the
                impossible feel real.
              </p>
            </div>
            <Button asChild variant="glass" size="lg">
              <Link to="/contact">
                Discuss your project <ArrowUpRight />
              </Link>
            </Button>
          </div>
        </Reveal>
      </section>

      {/* PROCESS */}
      <section className="border-t border-border bg-obsidian">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 md:grid-cols-3 md:px-8">
          {[
            ["Discover", "We learn your story, audience and goals.", "bg-cyan"],
            ["Create", "Concept, production and post — under one roof.", "bg-amber"],
            ["Amplify", "Launch, distribute and grow across every channel.", "bg-emerald"],
          ].map(([t, c, dot], i) => (
            <Reveal key={t} delay={i * 120}>
              <span className={`block h-2 w-2 rounded-full ${dot}`} />
              <h3 className="mt-6 text-3xl font-semibold">{t}</h3>
              <p className="mt-3 text-muted-foreground">{c}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-aurora opacity-80" aria-hidden="true" />
        <Reveal className="relative mx-auto flex max-w-4xl flex-col items-center px-5 py-28 text-center md:py-36">
          <BrandLogo variant="mark" className="w-28 md:w-36" />
          <h2 className="mt-8 text-4xl font-bold md:text-6xl">Let’s make something infinite.</h2>
          <p className="mt-5 max-w-lg text-muted-foreground">
            Tell us about your next film, campaign, show or event.
          </p>
          <Button asChild variant="hero" size="xl" className="mt-10">
            <Link to="/contact">
              Start a project <ArrowRight />
            </Link>
          </Button>
        </Reveal>
      </section>
    </>
  );
}
