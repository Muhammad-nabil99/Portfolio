"use client";

import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";
import { useRef, useState, useSyncExternalStore } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import ServiceCard from "@/components/ui/ServiceCard";
import { services, siteConfig } from "@/data/site";

/** Scattered start and organised end positions (px from the stage centre). */
const cardPaths = [
  { from: { x: -360, y: -90, r: -9 }, to: { x: -130, y: -85 } },
  { from: { x: 330, y: -110, r: 7 }, to: { x: 130, y: -85 } },
  { from: { x: -300, y: 105, r: 6 }, to: { x: -130, y: 85 } },
  { from: { x: 360, y: 100, r: -6 }, to: { x: 130, y: 85 } },
] as const;

/** Card travel finishes at this scroll progress; the CTA appears just after. */
const CONVERGE_END = 0.6;

function useMediaQuery(query: string) {
  return useSyncExternalStore(
    (notify) => {
      const mql = window.matchMedia(query);
      mql.addEventListener("change", notify);
      return () => mql.removeEventListener("change", notify);
    },
    () => window.matchMedia(query).matches,
    () => false,
  );
}

function Heading({ centered }: { centered?: boolean }) {
  return (
    <div className={centered ? "text-center" : undefined}>
      <div className={centered ? "flex justify-center" : undefined}>
        <SectionLabel index="04">Let&apos;s build</SectionLabel>
      </div>
      <h2
        className={
          centered
            ? "display-lg mt-5 text-[clamp(2rem,4.2vw,3.75rem)]"
            : "display-lg mt-6"
        }
      >
        Have an idea? Let&apos;s make it real.
      </h2>
      <p className="mt-4 text-muted">
        From websites to intelligent systems, let&apos;s build something useful together.
      </p>
    </div>
  );
}

function CtaLink({ enabled = true }: { enabled?: boolean }) {
  return (
    <a
      href={siteConfig.contact.ctaHref}
      tabIndex={enabled ? 0 : -1}
      aria-hidden={!enabled}
      className="inline-flex h-14 items-center bg-accent px-8 text-base font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
    >
      Collaborate With Me
    </a>
  );
}

function AnimatedCard({
  index,
  progress,
}: {
  index: number;
  progress: MotionValue<number>;
}) {
  const { from, to } = cardPaths[index];
  const range = [0, CONVERGE_END];
  const x = useTransform(progress, range, [from.x, to.x]);
  const y = useTransform(progress, range, [from.y, to.y]);
  const rotate = useTransform(progress, range, [from.r, 0]);
  const scale = useTransform(progress, range, [0.94, 1]);
  const service = services[index];

  return (
    <motion.div
      style={{ x, y, rotate, scale }}
      className="absolute left-1/2 top-1/2 -ml-30 -mt-18"
    >
      <ServiceCard {...service} index={index} className="w-60" />
    </motion.div>
  );
}

function ScrollStage() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const [revealed, setRevealed] = useState(false);
  useMotionValueEvent(scrollYProgress, "change", (v) => setRevealed(v > CONVERGE_END));

  const ctaOpacity = useTransform(scrollYProgress, [CONVERGE_END - 0.05, CONVERGE_END + 0.15], [0, 1]);
  const ctaY = useTransform(scrollYProgress, [CONVERGE_END - 0.05, CONVERGE_END + 0.15], [16, 0]);

  return (
    // 200vh gives roughly one extra screen of scroll for the whole convergence.
    <div ref={ref} className="relative h-[200vh]">
      <div className="sticky top-16 flex h-[calc(100svh-4rem)] flex-col items-center justify-center overflow-hidden">
        <div className="container-grid">
          <Heading centered />
        </div>

        <div className="relative my-4 h-[360px] w-full max-w-5xl">
          {cardPaths.map((_, i) => (
            <AnimatedCard key={services[i].title} index={i} progress={scrollYProgress} />
          ))}
        </div>

        <motion.div
          style={{ opacity: ctaOpacity, y: ctaY, pointerEvents: revealed ? "auto" : "none" }}
          className="flex h-24 flex-col items-center justify-center gap-2"
        >
          <CtaLink enabled={revealed} />
          <p className="text-sm text-muted">Have a project in mind? Let&apos;s talk.</p>
        </motion.div>
      </div>
    </div>
  );
}

function StaticStage() {
  return (
    <div className="container-grid py-24 md:py-32">
      <Heading />
      <ul className="mt-12 grid gap-4 sm:grid-cols-2">
        {services.map((service, i) => (
          <li key={service.title}>
            <ServiceCard {...service} index={i} className="w-full" />
          </li>
        ))}
      </ul>
      <div className="mt-12 flex flex-col items-start gap-3">
        <CtaLink />
        <p className="text-sm text-muted">Have a project in mind? Let&apos;s talk.</p>
      </div>
    </div>
  );
}

export default function CallToAction() {
  const reduced = useReducedMotion();
  const wide = useMediaQuery("(min-width: 1024px)");

  return (
    <section id="contact" className="border-t border-border">
      {wide && !reduced ? <ScrollStage /> : <StaticStage />}
    </section>
  );
}
