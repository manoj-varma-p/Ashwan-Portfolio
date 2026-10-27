"use client";

import React from "react";
import { motion, useScroll, useSpring } from "motion/react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-[#C8FF00] origin-left z-40 shadow-[0_0_10px_rgba(200,255,0,0.6)]"
      style={{ scaleX }}
    />
  );
}
