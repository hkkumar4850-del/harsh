/**
 * Root-level SVG noise filter (#frame-noise).
 * Fractal turbulence → color matrix isolating alpha grit →
 * composited into the source glyphs → multiplied back over them,
 * giving the shiny gradient text (and the watermark type) a film-grain bite.
 */
export default function NoiseFilter() {
  return (
    <svg width="0" height="0" aria-hidden="true" style={{ position: 'absolute' }}>
      <filter id="frame-noise" x="0%" y="0%" width="100%" height="100%">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.9"
          numOctaves="2"
          stitchTiles="stitch"
          result="noise"
        />
        <feColorMatrix
          in="noise"
          type="matrix"
          values="0 0 0 0 0
                  0 0 0 0 0
                  0 0 0 0 0
                  0 0 0 0.45 0"
          result="grain"
        />
        <feComposite in="grain" in2="SourceGraphic" operator="in" result="maskedGrain" />
        <feBlend in="SourceGraphic" in2="maskedGrain" mode="multiply" />
      </filter>
    </svg>
  );
}
