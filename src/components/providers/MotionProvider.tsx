"use client";

import { MotionConfig } from "motion/react";
import type { ReactNode } from "react";

/** Makes every motion component respect prefers-reduced-motion. */
export default function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
