import { useEffect } from "react";
import { BrandLogo } from "./BrandLogo";
import { BRAND } from "@/lib/brand";

// Deterministic particle field (no Math.random → no hydration mismatch).
const COLORS = ["var(--cyan)", "var(--amber)", "var(--emerald)", "var(--violet)", "var(--ember)"];
const PARTICLES = Array.from({ length: 22 }, (_, i) => {
  const angle = (i / 22) * Math.PI * 2;
  const dist = 140 + ((i * 37) % 120);
  return {
    x: `${Math.round(Math.cos(angle) * dist * 1.6)}px`,
    y: `${Math.round(Math.sin(angle) * dist)}px`,
    s: `${2 + (i % 3)}px`,
    c: COLORS[i % COLORS.length],
    pd: `${1.6 + (i % 5) * 0.08}s`,
  };
});

export const LEMNISCATE =
  "M200,100 C240,40 340,40 340,100 C340,160 240,160 200,100 C160,40 60,40 60,100 C60,160 160,160 200,100 Z";

/** Black → ambient light → official logo → light sweep → particles → infinity portal expands. */
export function IntroSequence({ onDone }: { onDone: () => void }) {
  useEffect(() => {
    const t = window.setTimeout(onDone, 3900);
    return () => window.clearTimeout(t);
  }, [onDone]);

  return (
    <div
      className="intro-root fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-obsidian"
      role="presentation"
    >
      <div className="intro-ambient absolute inset-0 bg-aurora" />

      <svg
        viewBox="0 0 400 200"
        className="intro-portal absolute w-[min(92vw,820px)]"
        fill="none"
      >
        <defs>
          <linearGradient id="intro-g" x1="0" x2="1">
            <stop offset="0" stopColor="var(--ember)" />
            <stop offset=".35" stopColor="var(--amber)" />
            <stop offset=".7" stopColor="var(--emerald)" />
            <stop offset="1" stopColor="var(--cyan)" />
          </linearGradient>
          <filter id="intro-blur"><feGaussianBlur stdDeviation="4" /></filter>
        </defs>
        <path d={LEMNISCATE} stroke="url(#intro-g)" strokeWidth="6" filter="url(#intro-blur)" opacity=".7" />
        <path d={LEMNISCATE} stroke="url(#intro-g)" strokeWidth="1.2" />
      </svg>

      {PARTICLES.map((p, i) => (
        <span
          key={i}
          className="intro-particle"
          style={{ ["--x" as string]: p.x, ["--y" as string]: p.y, ["--s" as string]: p.s, ["--c" as string]: p.c, ["--pd" as string]: p.pd }}
        />
      ))}

      <div className="intro-logo relative w-[min(84vw,560px)] overflow-hidden">
        <BrandLogo priority />
        {/* Sheen is masked to the logo's own pixels, so only a passing light touches it. */}
        <div
          className="intro-sweep pointer-events-none absolute inset-0"
          style={{
            maskImage: `url(${BRAND.logo.src})`,
            WebkitMaskImage: `url(${BRAND.logo.src})`,
            maskSize: "100% 100%",
            WebkitMaskSize: "100% 100%",
          }}
        />
      </div>

      <button
        type="button"
        onClick={onDone}
        className="eyebrow absolute bottom-8 right-6 z-10 hover:text-foreground"
      >
        Skip intro
      </button>
    </div>
  );
}
