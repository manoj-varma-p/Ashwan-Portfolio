"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [percent, setPercent] = useState(0);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    const duration = 2000; // Exactly 2 seconds loader duration
    const startTime = performance.now();

    const updateLoader = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(100, Math.floor((elapsed / duration) * 100));
      setPercent(progress);

      if (elapsed < duration) {
        requestAnimationFrame(updateLoader);
      } else {
        setPercent(100);
        setTimeout(() => setComplete(true), 250);
      }
    };

    const animFrame = requestAnimationFrame(updateLoader);
    return () => cancelAnimationFrame(animFrame);
  }, []);

  return (
    <AnimatePresence>
      {!complete && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[99999] bg-[#08171E] flex flex-col items-center justify-center select-none px-4"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute w-[500px] h-[500px] bg-[#096B90]/35 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute w-[300px] h-[300px] bg-[#71B7D5]/20 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative flex flex-col items-center space-y-8 z-10 w-full max-w-4xl text-center">
            {/* Monogram / Brand Name (Increased Size) */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="font-sans text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight sm:tracking-wide text-[#F0F8FF] leading-none"
            >
              ASHWAN<span className="text-[#71B7D5]">.JAKKINAPALLY</span>
            </motion.div>

            {/* Progress Track & Details */}
            <div className="w-full max-w-md sm:max-w-lg md:max-w-xl space-y-3">
              {/* Progress Track Bar */}
              <div className="w-full h-2 bg-[#042B44] rounded-full overflow-hidden relative border border-[#096B90]/40 shadow-inner">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#096B90] via-[#71B7D5] to-[#A1CCDC] rounded-full shadow-[0_0_20px_rgba(113,183,213,0.8)]"
                  style={{ width: `${percent}%` }}
                />
              </div>

              {/* Status & Counter */}
              <div className="flex items-center justify-between text-xs sm:text-sm font-mono text-[#A1CCDC] px-1">
                <span className="tracking-widest">LOADING PORTFOLIO</span>
                <span className="text-[#F0F8FF] font-bold text-sm sm:text-base">{percent}%</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
