import { motion, useReducedMotion } from "framer-motion";
import { useId } from "react";
import type { DialColor, StrapMaterial } from "@/lib/content";

/**
 * A hand-built SVG watch — no photography is reachable from this
 * environment, so the product itself is rendered as a detailed vector
 * illustration rather than a stock placeholder. Hands are fixed at 10:08,
 * photography's traditional "smiling" position.
 */
export default function WatchFace({
  dial,
  strap,
  size = 360,
  showStrap = true,
  sweepSeconds = true,
  className,
}: {
  dial: DialColor;
  strap?: StrapMaterial;
  size?: number;
  showStrap?: boolean;
  sweepSeconds?: boolean;
  className?: string;
}) {
  const uid = useId().replace(/:/g, "");
  const reduceMotion = useReducedMotion();
  const strapFill = strapTexture(strap);

  return (
    <svg
      viewBox="0 0 400 400"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label={`Meridian watch, ${dial.label} dial${strap ? `, ${strap.label} strap` : ""}`}
    >
      <defs>
        <radialGradient id={`case-${uid}`} cx="35%" cy="30%" r="75%">
          <stop offset="0%" stopColor="#e8e8ea" />
          <stop offset="45%" stopColor="#b7b8bc" />
          <stop offset="100%" stopColor="#6c6d72" />
        </radialGradient>
        <linearGradient id={`bezel-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#dcdde0" />
          <stop offset="50%" stopColor="#8c8d92" />
          <stop offset="100%" stopColor="#c7c8cc" />
        </linearGradient>
        <radialGradient id={`dial-${uid}`} cx="42%" cy="38%" r="70%">
          <stop offset="0%" stopColor={dial.ring} stopOpacity="0.55" />
          <stop offset="55%" stopColor={dial.hex} />
          <stop offset="100%" stopColor={dial.hex} />
        </radialGradient>
        <linearGradient id={`glass-${uid}`} x1="10%" y1="0%" x2="90%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.16" />
          <stop offset="35%" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        {showStrap && (
          <linearGradient id={`strap-${uid}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={strapFill.dark} />
            <stop offset="50%" stopColor={strapFill.light} />
            <stop offset="100%" stopColor={strapFill.dark} />
          </linearGradient>
        )}
      </defs>

      {showStrap && (
        <>
          <rect x="150" y="0" width="100" height="70" rx="14" fill={`url(#strap-${uid})`} />
          <rect x="150" y="330" width="100" height="70" rx="14" fill={`url(#strap-${uid})`} />
        </>
      )}

      {/* Lugs */}
      <path d="M120 78 L155 55 L165 90 L140 108 Z" fill={`url(#case-${uid})`} />
      <path d="M280 78 L245 55 L235 90 L260 108 Z" fill={`url(#case-${uid})`} />
      <path d="M120 322 L155 345 L165 310 L140 292 Z" fill={`url(#case-${uid})`} />
      <path d="M280 322 L245 345 L235 310 L260 292 Z" fill={`url(#case-${uid})`} />

      {/* Case + bezel */}
      <circle cx="200" cy="200" r="132" fill={`url(#case-${uid})`} />
      <circle cx="200" cy="200" r="124" fill={`url(#bezel-${uid})`} />
      <circle cx="200" cy="200" r="112" fill={`url(#dial-${uid})`} />

      {/* Crown */}
      <rect x="330" y="188" width="16" height="24" rx="3" fill={`url(#case-${uid})`} />

      {/* Chapter ring ticks */}
      {Array.from({ length: 60 }).map((_, i) => {
        const isHour = i % 5 === 0;
        const angle = (i / 60) * 360;
        const len = isHour ? 10 : 4;
        const r1 = 106;
        const r2 = r1 - len;
        return (
          <line
            key={i}
            x1={200 + r1 * Math.sin((angle * Math.PI) / 180)}
            y1={200 - r1 * Math.cos((angle * Math.PI) / 180)}
            x2={200 + r2 * Math.sin((angle * Math.PI) / 180)}
            y2={200 - r2 * Math.cos((angle * Math.PI) / 180)}
            stroke={isHour ? "#ece6d9" : "#ece6d9"}
            strokeOpacity={isHour ? 0.85 : 0.35}
            strokeWidth={isHour ? 2.2 : 1}
          />
        );
      })}

      {/* Brand wordmark on dial */}
      <text
        x="200"
        y="140"
        textAnchor="middle"
        fontFamily="IBM Plex Mono, monospace"
        fontSize="9"
        letterSpacing="3"
        fill="#ece6d9"
        opacity={0.8}
      >
        MERIDIAN
      </text>
      <text
        x="200"
        y="270"
        textAnchor="middle"
        fontFamily="IBM Plex Mono, monospace"
        fontSize="7"
        letterSpacing="1.5"
        fill="#ece6d9"
        opacity={0.55}
      >
        SWISS MADE
      </text>

      {/* Date window */}
      <rect x="248" y="192" width="20" height="16" rx="2" fill="#0a0a0c" opacity={0.85} />
      <text
        x="258"
        y="204"
        textAnchor="middle"
        fontFamily="IBM Plex Mono, monospace"
        fontSize="9"
        fill="#ece6d9"
      >
        24
      </text>

      {/* Hands: fixed at 10:08 */}
      <g stroke="#ece6d9" strokeLinecap="round">
        <line x1="200" y1="200" x2="163" y2="152" strokeWidth="6" />
        <line x1="200" y1="200" x2="238" y2="163" strokeWidth="4" />
      </g>
      {sweepSeconds ? (
        <motion.line
          x1="200"
          y1="200"
          x2="200"
          y2="118"
          stroke="#b08d57"
          strokeWidth="1.5"
          strokeLinecap="round"
          style={{ transformOrigin: "200px 200px" }}
          animate={reduceMotion ? undefined : { rotate: 360 }}
          transition={reduceMotion ? undefined : { duration: 60, repeat: Infinity, ease: "linear" }}
        />
      ) : null}
      <circle cx="200" cy="200" r="5" fill="#b08d57" />

      {/* Glass reflection */}
      <circle cx="200" cy="200" r="112" fill={`url(#glass-${uid})`} />
    </svg>
  );
}

function strapTexture(strap?: StrapMaterial) {
  if (!strap) return { light: "#8c8d92", dark: "#5a5b60" };
  switch (strap.texture) {
    case "brushed":
      return { light: "#c7c8cc", dark: "#8c8d92" };
    case "polished":
      return { light: strap.swatch, dark: "#5c3f22" };
    case "leather":
      return { light: strap.swatch, dark: "#2e1c12" };
    case "rubber":
      return { light: "#2a2a2a", dark: "#0a0a0a" };
    default:
      return { light: strap.swatch, dark: strap.swatch };
  }
}
