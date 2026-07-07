import { motion, useMotionTemplate, useTransform } from 'motion/react';
import { useLook } from '../LookContext';
import { LOOKS, LOOK_RANGES, LOOK_FADE, type Look } from '../scenes';

/** How each look's grade overlay sits on its photography. */
const LOOK_BLEND: Array<'normal' | 'multiply'> = ['normal', 'multiply', 'normal', 'normal'];

/**
 * One full-bleed layer of the stage. Fades in/out around its scroll
 * range (overlapping the neighbours by LOOK_FADE) and drifts with a
 * subtle Ken Burns scale/pan so it never feels static mid-section.
 */
function StageLayer({ look, index }: { look: Look; index: number }) {
  const { scrollYProgress, reducedMotion } = useLook();
  const [start, end] = LOOK_RANGES[index];
  const isFirst = index === 0;
  const isLast = index === LOOK_RANGES.length - 1;

  const fadeIn = [start - LOOK_FADE, start + LOOK_FADE];
  const fadeOut = [end - LOOK_FADE, end + LOOK_FADE];
  const inputs = isFirst
    ? [0, fadeOut[0], fadeOut[1]]
    : isLast
      ? [fadeIn[0], fadeIn[1], 1]
      : [fadeIn[0], fadeIn[1], fadeOut[0], fadeOut[1]];
  const outputs = isFirst ? [1, 1, 0] : isLast ? [0, 1, 1] : [0, 1, 1, 0];

  const opacity = useTransform(scrollYProgress, inputs, outputs);
  const span: [number, number] = [Math.max(0, start - LOOK_FADE), Math.min(1, end + LOOK_FADE)];
  const scale = useTransform(scrollYProgress, span, reducedMotion ? [1, 1] : [1.04, 1.16]);
  const y = useTransform(scrollYProgress, span, reducedMotion ? ['0%', '0%'] : ['0%', '-3.5%']);

  return (
    <motion.div className="absolute inset-0" style={{ opacity }} aria-hidden="true">
      <motion.img
        src={look.media}
        alt=""
        className="h-full w-full object-cover"
        style={{ scale, y }}
        loading={index === 0 ? 'eager' : 'lazy'}
        draggable={false}
        onError={(e) => {
          // Dead placeholder URL → leave the tinted plate, no broken glyph
          e.currentTarget.style.visibility = 'hidden';
        }}
      />
      {/* Per-look color-grade tint: charcoal → rust → cream → near-black */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: look.tint,
          opacity: look.tintStrength,
          mixBlendMode: LOOK_BLEND[index],
        }}
      />
    </motion.div>
  );
}

/**
 * The fixed "film" behind every section. Sits at z-0; all page content
 * scrolls over it at z-10 while the stage crossfades between looks,
 * shifts its color grade, and slowly pans the active plate.
 */
export default function ScrollStage() {
  const { scrollYProgress } = useLook();

  // Global grade drift: slightly punchy in Heat, desaturated in Bone,
  // crushed in Midnight. Applied on top of each look's tint overlay.
  const saturate = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0.95, 1.2, 0.85, 0.7]);
  const hue = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0, -6, 4, 0]);
  const grade = useMotionTemplate`saturate(${saturate}) hue-rotate(${hue}deg)`;

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-[#0c0c0c]">
      <motion.div className="absolute inset-0" style={{ filter: grade }}>
        {LOOKS.map((look, i) => (
          <StageLayer key={look.name} look={look} index={i} />
        ))}
      </motion.div>
      {/* Soft vignette keeps foreground copy legible on every look */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 90% 70% at 50% 40%, transparent 55%, rgba(0,0,0,0.38) 100%)',
        }}
      />
    </div>
  );
}
