"use client";

import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#096B90] via-[#71B7D5] to-[#A1CCDC] origin-left z-[1000] pointer-events-none shadow-[0_0_10px_rgba(113,183,213,0.6)]"
      style={{ scaleX }}
    />
  );
}
