"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Fast authentic intro count (reaches 100 in ~650ms, then fades out smoothly)
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 200);
          return 100;
        }
        return prev + 12;
      });
    }, 45);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 bg-white flex flex-col items-center justify-center p-6 select-none"
        >
          {/* Central Monogram */}
          <div className="flex flex-col items-center gap-4">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="w-16 h-16 rounded-2xl bg-black border-2 border-black flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.15)]"
            >
              <span className="font-display text-4xl font-black text-[#C8FF00]">A</span>
            </motion.div>

            <div className="text-center">
              <h1 className="font-display text-3xl font-black tracking-tight text-black uppercase">
                ASHWAN
              </h1>
              <p className="font-mono-tech text-[10px] tracking-widest text-[#52525B] uppercase mt-1">
                LOADING 2026 REEL ARCHIVE
              </p>
            </div>

            {/* Counter */}
            <div className="w-48 mt-4">
              <div className="flex justify-between font-mono-tech text-xs text-black font-bold mb-1.5">
                <span>BUFFER</span>
                <span>{Math.min(progress, 100)}%</span>
              </div>
              <div className="w-full h-1.5 bg-neutral-200 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-black"
                  style={{ width: `${Math.min(progress, 100)}%` }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
