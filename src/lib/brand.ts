// Official Wander Infinity Media brand files (served from /public, never regenerated).
export const BRAND = {
  name: "Wander Infinity Media",
  // wander-infinity-logo.png is the untouched upload. The *-transparent files are the same
  // pixels with only the black backdrop turned see-through (identical when shown on black).
  original: { src: "/assets/brand/wander-infinity-logo.png", width: 1672, height: 941 },
  logo: { src: "/assets/brand/wander-infinity-logo-transparent.png", width: 1672, height: 941 },
  /** Empty border trimmed — for compact spots like the navbar. */
  logoCompact: {
    src: "/assets/brand/wander-infinity-logo-trimmed-transparent.png",
    width: 1286,
    height: 453,
  },
  /** The infinity mark from the official logo (favicon-sized placements). */
  mark: { src: "/assets/brand/wander-infinity-mark-transparent.png", width: 543, height: 322 },
  // Placeholder contact email — replace with the real address.
  email: "hello@wanderinfinitymedia.com",
} as const;
