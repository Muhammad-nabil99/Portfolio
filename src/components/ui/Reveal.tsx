"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  /** Animate on mount (hero) instead of when scrolled into view. */
  immediate?: boolean;
};

export default function Reveal({ children, delay = 0, className, immediate }: RevealProps) {
  const transition = { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const };
  const initial = { opacity: 0, y: 24 };
  const target = { opacity: 1, y: 0 };

  if (immediate) {
    return (
      <motion.div className={className} initial={initial} animate={target} transition={transition}>
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={target}
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}
