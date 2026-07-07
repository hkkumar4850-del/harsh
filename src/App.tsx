import { useMemo, useState } from 'react';
import { useMotionValueEvent, useReducedMotion, useScroll } from 'motion/react';
import { LookContext } from './LookContext';
import { LOOKS, lookIndexAt } from './scenes';
import NoiseFilter from './components/NoiseFilter';
import ScrollStage from './components/ScrollStage';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Lookbook from './components/Lookbook';
import Fabric from './components/Fabric';
import LogoCloud from './components/LogoCloud';
import Testimonials from './components/Testimonials';
import Collections from './components/Collections';
import FinalCta from './components/FinalCta';

/**
 * The whole page reads off one window-level scrollYProgress: the fixed
 * ScrollStage crossfades its four looks, the lookbook scrubs sideways,
 * and foreground sections re-theme via LookContext — all in sync.
 */
export default function App() {
  // Single top-level scroll listener shared by every scroll-linked element
  const { scrollYProgress } = useScroll();
  const reducedMotion = useReducedMotion() ?? false;
  const [lookIndex, setLookIndex] = useState(0);

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const next = lookIndexAt(v);
    setLookIndex((prev) => (prev === next ? prev : next));
  });

  const lookState = useMemo(
    () => ({ lookIndex, look: LOOKS[lookIndex], scrollYProgress, reducedMotion }),
    [lookIndex, scrollYProgress, reducedMotion],
  );

  return (
    <LookContext.Provider value={lookState}>
      <NoiseFilter />
      <ScrollStage />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Lookbook />
        <Fabric />
        <LogoCloud />
        <Testimonials />
        <Collections />
        <FinalCta />
      </main>
    </LookContext.Provider>
  );
}
