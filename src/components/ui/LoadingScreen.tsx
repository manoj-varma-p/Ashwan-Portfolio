"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
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
          className="fixed inset-0 z-[99999] bg-[#0E0E11] text-[#F5F5F0] flex flex-col items-center justify-center p-6 select-none"
        >
          {/* Subtle background tech grid */}
          <div className="absolute inset-0 bg-grid-tech opacity-10 pointer-events-none" />
          <div className="absolute inset-0 bg-halftone-subtle opacity-15 pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center gap-6 sm:gap-7 max-w-3xl w-full text-center px-4">
            {/* Minimalist Brand Logo Badge */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-[#17171C] border border-white/20 flex items-center justify-center shadow-2xl relative overflow-hidden group"
            >
              <Image
                src="/images/logo/ashwan-logo.jpg"
                alt="Ashwan"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 h-1 sm:h-1.5 bg-[#C8FF00] z-10" />
            </motion.div>

            {/* Name & Title */}
            <div className="w-full flex flex-col items-center">
              <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight text-white uppercase leading-none drop-shadow-2xl">
                ASHWAN
              </h1>
              <p className="font-mono-tech text-xs sm:text-sm md:text-base tracking-[0.25em] text-neutral-400 uppercase mt-3 sm:mt-4 font-semibold">
                VIDEO EDITOR &amp; GRAPHIC DESIGNER
              </p>
            </div>

            {/* Sleek Progress Bar & Counter */}
            <div className="w-72 sm:w-80 md:w-96 mt-2">
              <div className="flex items-center justify-between font-mono-tech text-xs text-neutral-400 font-semibold mb-2">
                <span className="uppercase text-[10px] tracking-wider text-neutral-500">Buffer</span>
                <span className="text-[#C8FF00] font-black">{Math.min(Math.round(progress), 100)}%</span>
              </div>
              <div className="w-full h-1.5 sm:h-2 bg-[#282832] rounded-full overflow-hidden border border-white/10">
                <motion.div
                  className="h-full bg-[#C8FF00] shadow-[0_0_14px_rgba(200,255,0,0.9)]"
                  style={{ width: `${Math.min(progress, 100)}%` }}
                />
              </div>
            </div>

            {/* Sub-label */}
            <span className="font-mono-tech text-[10px] sm:text-xs tracking-widest text-neutral-500 uppercase">
              PORTFOLIO 2026 // ARCHIVE
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
