import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import WatchFace from "@/components/WatchFace";
import Reveal from "@/components/Reveal";
import { collection, type CollectionPiece } from "@/lib/content";
import { fadeUp, viewportOnceEarly } from "@/lib/motion";

const TOTAL = collection.length;

export default function Collection() {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  if (reduceMotion) {
    return <StaticCollection />;
  }

  return (
    <section
      id="collection"
      ref={sectionRef}
      className="relative bg-ink"
      style={{ height: `${TOTAL * 100}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="eyebrow absolute left-6 top-8 z-10 text-brass md:left-12 md:top-12">
          The Collection
        </div>

        {collection.map((piece, i) => (
          <CollectionScene
            key={piece.id}
            piece={piece}
            index={i}
            scrollYProgress={scrollYProgress}
          />
        ))}

        <ProgressIndicator scrollYProgress={scrollYProgress} />
      </div>
    </section>
  );
}

function CollectionScene({
  piece,
  index,
  scrollYProgress,
}: {
  piece: CollectionPiece;
  index: number;
  scrollYProgress: MotionValue<number>;
}) {
  const start = index / TOTAL;
  const end = (index + 1) / TOTAL;
  const mid = (start + end) / 2;
  const fade = (end - start) * 0.18;
  const isFirst = index === 0;
  const isLast = index === TOTAL - 1;

  // The first scene is already what's on screen the instant the section
  // pins (scrollYProgress lands exactly on `start`), so it must not fade
  // in from 0 there — only fade out as the next scene approaches. Same
  // logic in reverse for the last scene: it should never fade back out
  // once reached, since there's nothing after it to crossfade to.
  const opacity = useTransform(
    scrollYProgress,
    isFirst
      ? [start, end - fade, end]
      : isLast
        ? [start, start + fade, end]
        : [start, start + fade, end - fade, end],
    isFirst ? [1, 1, 0] : isLast ? [0, 1, 1] : [0, 1, 1, 0],
  );
  const scale = useTransform(scrollYProgress, [start, mid, end], [0.86, 1, 1.1]);
  const rotate = useTransform(scrollYProgress, [start, mid, end], [-3, 0, 3]);
  const textX = useTransform(scrollYProgress, [start, start + fade, end], [24, 0, -24]);

  const flip = index % 2 === 1;

  return (
    <motion.div
      style={{ opacity }}
      className="absolute inset-0 flex flex-col items-center justify-center px-6 md:px-16"
    >
      <div
        className={`flex w-full max-w-6xl flex-col items-center gap-10 md:gap-16 ${
          flip ? "md:flex-row-reverse" : "md:flex-row"
        }`}
      >
        <div className="flex w-full justify-center md:w-[55%]">
          <motion.div style={{ scale, rotate }}>
            <WatchFace dial={piece.dial} strap={piece.strap} size={420} />
          </motion.div>
        </div>

        <motion.div
          style={{ x: textX }}
          className={`w-full md:w-[45%] ${flip ? "md:text-right" : "md:text-left"} text-center`}
        >
          <p className="eyebrow text-brass">{piece.line}</p>
          <h3 className="mt-4 font-display text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.05] text-bone">
            {piece.name}
          </h3>
          <div
            className={`mt-4 flex items-center gap-4 font-mono text-sm text-bone-soft tabular ${
              flip ? "md:justify-end" : "md:justify-start"
            } justify-center`}
          >
            <span className="text-brass">{piece.ref}</span>
            <span className="hairline h-3 w-px" />
            <span>{piece.price}</span>
          </div>
          <p
            className={`mx-auto mt-6 max-w-md font-sans text-lg text-bone md:mx-0 md:text-xl ${
              flip ? "md:ml-auto md:mr-0" : "md:mr-auto md:ml-0"
            }`}
          >
            {piece.description}
          </p>
          <p
            className={`mx-auto mt-4 max-w-md font-sans text-sm leading-relaxed text-bone-faint ${
              flip ? "md:ml-auto md:mr-0" : "md:mr-auto md:ml-0"
            }`}
          >
            {piece.detail}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

function ProgressIndicator({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) {
  const trackHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="absolute bottom-10 right-6 z-10 flex items-center gap-4 md:right-12">
      <div className="font-mono text-xs text-bone-faint tabular">
        {String(TOTAL).padStart(2, "0")}
      </div>
      <div className="relative h-16 w-px bg-line">
        <motion.div
          className="absolute left-0 top-0 w-px bg-brass"
          style={{ height: trackHeight }}
        />
      </div>
      <div className="font-mono text-xs text-brass tabular">01</div>
    </div>
  );
}

function StaticCollection() {
  return (
    <section id="collection" className="bg-ink py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="eyebrow text-brass">The Collection</p>
        </Reveal>

        <div className="mt-20 space-y-28">
          {collection.map((piece, i) => {
            const flip = i % 2 === 1;
            return (
              <motion.div
                key={piece.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={viewportOnceEarly}
                className={`flex flex-col items-center gap-10 md:gap-16 ${
                  flip ? "md:flex-row-reverse" : "md:flex-row"
                }`}
              >
                <div className="flex w-full justify-center md:w-[55%]">
                  <WatchFace dial={piece.dial} strap={piece.strap} size={360} showStrap sweepSeconds={false} />
                </div>
                <div
                  className={`w-full md:w-[45%] ${flip ? "md:text-right" : "md:text-left"} text-center`}
                >
                  <p className="eyebrow text-brass">{piece.line}</p>
                  <h3 className="mt-4 font-display text-[clamp(1.75rem,4vw,3rem)] leading-[1.1] text-bone">
                    {piece.name}
                  </h3>
                  <div
                    className={`mt-4 flex items-center gap-4 font-mono text-sm text-bone-soft tabular ${
                      flip ? "md:justify-end" : "md:justify-start"
                    } justify-center`}
                  >
                    <span className="text-brass">{piece.ref}</span>
                    <span className="hairline h-3 w-px" />
                    <span>{piece.price}</span>
                  </div>
                  <p
                    className={`mx-auto mt-6 max-w-md font-sans text-lg text-bone md:mx-0 md:text-xl ${
                      flip ? "md:ml-auto md:mr-0" : "md:mr-auto md:ml-0"
                    }`}
                  >
                    {piece.description}
                  </p>
                  <p
                    className={`mx-auto mt-4 max-w-md font-sans text-sm leading-relaxed text-bone-faint ${
                      flip ? "md:ml-auto md:mr-0" : "md:mr-auto md:ml-0"
                    }`}
                  >
                    {piece.detail}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
