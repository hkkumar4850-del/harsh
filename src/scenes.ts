/**
 * Single source of truth for the scroll-driven film.
 *
 * All ranges are fractions of the page-level `scrollYProgress` (0 → 1).
 * The fixed background stage, the navbar re-theme, and the lookbook
 * scrub all read from these constants so everything stays in sync.
 *
 * Swap `media` URLs for real product photography / video posters.
 */

export interface Look {
  /** Collection / fabric story this look represents. */
  name: string;
  /** Full-bleed background image (or video poster) for the look. */
  media: string;
  /** Tint color for the per-look gradient grade overlay. */
  tint: string;
  /** How opaque the tint overlay should be (0–1). */
  tintStrength: number;
  /** True when foreground text should flip to near-black for contrast. */
  lightSurface: boolean;
}

export const LOOKS: Look[] = [
  {
    // Look 1 — "Studio": charcoal, raw product shots
    name: 'Studio',
    media:
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1920&q=80',
    tint: '#17181c',
    tintStrength: 0.78,
    lightSurface: false,
  },
  {
    // Look 2 — "Heat": rust/orange grade, lifestyle shots
    name: 'Heat',
    media:
      'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?auto=format&fit=crop&w=1920&q=80',
    tint: '#e3603d',
    tintStrength: 0.45,
    lightSurface: false,
  },
  {
    // Look 3 — "Bone": cream/off-white grade, fabric close-ups
    name: 'Bone',
    media:
      'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=1920&q=80',
    tint: '#e9e2d3',
    tintStrength: 0.82,
    lightSurface: true,
  },
  {
    // Look 4 — "Midnight": near-black grade, final CTA
    name: 'Midnight',
    media:
      'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=1920&q=80',
    tint: '#04040a',
    tintStrength: 0.85,
    lightSurface: false,
  },
];

/**
 * Where each look owns the scroll (fraction of total page scroll).
 * Crossfades overlap by `LOOK_FADE` on either side of a boundary so
 * looks blend into each other instead of hard-cutting.
 */
export const LOOK_RANGES: Array<[number, number]> = [
  [0, 0.25],
  [0.25, 0.5],
  [0.5, 0.75],
  [0.75, 1],
];

export const LOOK_FADE = 0.05;

/** Look index for a given page scroll progress. */
export function lookIndexAt(progress: number): number {
  if (progress < 0.25) return 0;
  if (progress < 0.5) return 1;
  if (progress < 0.75) return 2;
  return 3;
}

/** Navbar switches to a blurred dark pill past this progress. */
export const NAV_SOLID_AFTER = 0.02;
