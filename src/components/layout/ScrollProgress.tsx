"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { formatTimecode } from "@/lib/utils";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [timecode, setTimecode] = useState("01:00:00:00");
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      // simulate 180 seconds timeline across full scroll
      const simulatedSeconds = latest * 180;
      setTimecode(formatTimecode(simulatedSeconds));
      setPercent(Math.round(latest * 100));
    });
  }, [scrollYProgress]);

  return (
    <>
      {/* Top Progress Line */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-[#C8FF00] origin-left z-[60] shadow-[0_0_10px_rgba(200,255,0,0.6)]"
        style={{ scaleX }}
      />

      {/* Floating HUD Timecode Capsule (Desktop/Tablet) */}
      <div className="fixed bottom-6 right-6 z-40 hidden md:flex items-center gap-3 bg-[#111111]/90 border border-white/20 px-3.5 py-1.5 rounded-full backdrop-blur-md shadow-2xl">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="font-mono-tech text-[11px] uppercase tracking-wider text-neutral-400 font-semibold">
            TIMELINE
          </span>
        </div>

        <span className="font-mono-tech text-xs font-bold text-white tabular-nums">
          {timecode}
        </span>

        <span className="font-mono-tech text-[10px] bg-white text-black font-extrabold px-1.5 py-0.5 rounded shadow-sm">
          {percent}%
        </span>
      </div>
    </>
  );
}
