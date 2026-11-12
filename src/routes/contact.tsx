import { createFileRoute } from "@tanstack/react-router";
import { Mail } from "lucide-react";
import { useState, type FormEvent } from "react";
import { BrandLogo } from "@/components/site/BrandLogo";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { BRAND } from "@/lib/brand";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Wander Infinity Media" },
      {
        name: "description",
        content: "Start a film, campaign, podcast, event or tech project with Wander Infinity Media.",
      },
      { property: "og:title", content: "Contact — Wander Infinity Media" },
      {
        property: "og:description",
        content: "Start a film, campaign, podcast, event or tech project with us.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

const SERVICES = ["Cinematics", "VFX", "Digital Marketing", "Podcast", "Events", "Web & Apps"];

function Contact() {
  const [picked, setPicked] = useState<string[]>([]);
  const toggle = (s: string) =>
    setPicked((p) => (p.includes(s) ? p.filter((x) => x !== s) : [...p, s]));

  // Opens the visitor's email app with the brief pre-filled.
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = [
      `Name: ${f.get("name")}`,
      `Email: ${f.get("email")}`,
      `Services: ${picked.join(", ") || "—"}`,
      "",
      String(f.get("message") ?? ""),
    ].join("\n");
    window.location.href = `mailto:${BRAND.email}?subject=${encodeURIComponent(
      "New project enquiry",
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className="relative overflow-hidden pt-32 pb-24 md:pt-40">
      <div className="absolute inset-0 bg-aurora" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl gap-16 px-5 md:grid-cols-[1fr_1.1fr] md:px-8">
        <Reveal>
          <BrandLogo variant="compact" className="w-56 md:w-72" />
          <h1 className="mt-10 text-5xl font-bold leading-[1.02] md:text-6xl">
            Let’s start your <span className="text-gradient-infinity">story.</span>
          </h1>
          <p className="mt-6 max-w-md text-lg text-muted-foreground">
            Share a few details and we’ll get back to you with ideas, timelines and next steps.
          </p>
          <a
            href={`mailto:${BRAND.email}`}
            className="mt-10 inline-flex items-center gap-3 text-foreground/85 hover:text-foreground"
          >
            <Mail className="size-5 text-cyan" /> {BRAND.email}
          </a>
        </Reveal>

        <Reveal delay={150}>
          <form
            onSubmit={submit}
            className="rounded-2xl border border-border bg-card/80 p-6 backdrop-blur-xl md:p-10"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" required maxLength={100} className="h-11" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" required maxLength={255} className="h-11" />
              </div>
            </div>
            <fieldset className="mt-6">
              <legend className="text-sm font-medium">What do you need?</legend>
              <div className="mt-3 flex flex-wrap gap-2">
                {SERVICES.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => toggle(s)}
                    aria-pressed={picked.includes(s)}
                    className="rounded-full border border-border px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground aria-pressed:border-primary aria-pressed:bg-primary/10 aria-pressed:text-foreground"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </fieldset>
            <div className="mt-6 space-y-2">
              <Label htmlFor="message">Tell us about your project</Label>
              <Textarea id="message" name="message" required maxLength={2000} rows={5} />
            </div>
            <Button type="submit" variant="hero" size="xl" className="mt-8 w-full">
              Send enquiry
            </Button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
