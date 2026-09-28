"use client";

import React from "react";
import { motion } from "framer-motion";
export default function SectionDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center my-6 max-w-7xl mx-auto px-4 overflow-hidden pointer-events-none ${className}`}>
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#096B90]/50 to-transparent origin-center"
      />
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="absolute w-2.5 h-2.5 rounded-full bg-[#71B7D5] shadow-[0_0_12px_#71B7D5]"
      />
    </div>
  );
}
