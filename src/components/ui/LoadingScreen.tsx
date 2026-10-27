"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Lock scroll during intro loading screen
    document.body.style.overflow = "hidden";

    const duration = 1500; // Exactly 1.5 seconds
    const intervalTime = 30;
    const step = 100 / (duration / intervalTime);

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + step;
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setLoading(false);
            document.body.style.overflow = "auto";
          }, 150);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: -25,
            transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] }
          }}
          className="fixed inset-0 z-[99999] bg-[#1E1E22] text-[#F5F5F0] flex flex-col items-center justify-center p-6 select-none"
        >
          {/* Subtle background tech grid */}
          <div className="absolute inset-0 bg-grid-tech opacity-10 pointer-events-none" />
          <div className="absolute inset-0 bg-halftone-subtle opacity-15 pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center gap-6 max-w-sm w-full text-center">
            {/* Minimalist Monogram Badge */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="w-16 h-16 rounded-2xl bg-[#282832] border border-white/15 flex items-center justify-center shadow-2xl relative overflow-hidden group"
            >
              <span className="font-display text-3xl font-black text-[#C8FF00]">
                A
              </span>
              <div className="absolute inset-x-0 bottom-0 h-0.5 bg-[#C8FF00]" />
            </motion.div>

            {/* Name & Title */}
            <div>
              <h1 className="font-display text-2xl sm:text-3xl font-black tracking-tight text-white uppercase">
                ASHWAN
              </h1>
              <p className="font-mono-tech text-[10px] tracking-widest text-neutral-400 uppercase mt-1">
                VIDEO EDITOR & GRAPHIC DESIGNER
              </p>
            </div>

            {/* Sleek Progress Bar & Counter */}
            <div className="w-56 mt-2">
              <div className="flex items-center justify-between font-mono-tech text-xs text-neutral-400 font-semibold mb-2">
                <span className="uppercase text-[10px] tracking-wider text-neutral-500">Loading</span>
                <span className="text-[#C8FF00] font-black">{Math.min(Math.round(progress), 100)}%</span>
              </div>
              <div className="w-full h-1 bg-[#282832] rounded-full overflow-hidden border border-white/10">
                <motion.div
                  className="h-full bg-[#C8FF00] shadow-[0_0_10px_rgba(200,255,0,0.8)]"
                  style={{ width: `${Math.min(progress, 100)}%` }}
                />
              </div>
            </div>

            {/* Sub-label */}
            <span className="font-mono-tech text-[9px] tracking-widest text-neutral-600 uppercase">
              PORTFOLIO 2026 // ARCHIVE
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
