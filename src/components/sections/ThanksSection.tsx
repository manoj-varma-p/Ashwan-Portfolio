"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { ThumbsUp, ArrowUp } from "lucide-react";
import { PROFILE_DATA } from "@/data/profile";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { useSmoothScroll } from "@/components/motion/SmoothScroll";

export function ThanksSection() {
  const [likes, setLikes] = useState(85);
  const [hasLiked, setHasLiked] = useState(false);
  const { scrollTo } = useSmoothScroll();

  const handleLike = () => {
    if (!hasLiked) {
      setLikes((prev) => prev + 1);
      setHasLiked(true);
    } else {
      setLikes((prev) => prev - 1);
      setHasLiked(false);
    }
  };

  const scrollToTop = () => {
    scrollTo(0, { duration: 1.5 });
  };

  return (
    <footer className="relative w-full bg-[#050505] text-[#F5F5F0] pt-24 pb-12 overflow-hidden border-t-2 border-white/10 select-none">
      
      {/* Background Halftone & Grain */}
      <div className="absolute inset-0 bg-halftone opacity-20 pointer-events-none" />

      {/* Viewport Frame Container */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 relative flex flex-col items-center">
        
        {/* Giant Outro Canvas */}
        <div className="relative w-full min-h-[520px] sm:min-h-[640px] md:min-h-[720px] flex items-end justify-center overflow-hidden">
          
          {/* Gigantic Acid-Yellow "THANKS!" Typography dominating behind subject */}
          <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
            <motion.h2
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-[27vw] sm:text-[25vw] md:text-[23vw] leading-[0.72] tracking-tighter text-[#C8FF00] font-black uppercase text-center w-full select-none [-webkit-text-stroke:2px_#000000] sm:[-webkit-text-stroke:4px_#000000] drop-shadow-[0_20px_50px_rgba(0,0,0,0.95)]"
            >
              THANKS!
            </motion.h2>
          </div>

          {/* Foreground Portrait Cutout Overlapping Typography */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.95, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-[320px] sm:max-w-[420px] md:max-w-[500px] h-[460px] sm:h-[580px] md:h-[650px] flex items-end justify-center pointer-events-none"
          >
            <div className="relative w-full h-full">
              <Image
                src="/images/portrait/ashwan.png"
                alt="Ashwan - Thanks for Watching"
                fill
                sizes="(max-width: 768px) 320px, (max-width: 1200px) 450px, 500px"
                className="object-contain object-bottom contrast-125 brightness-95 drop-shadow-[0_20px_50px_rgba(0,0,0,0.95)]"
              />
            </div>
          </motion.div>

          {/* Technical Sub-bar Capsule */}
          <ScrollReveal direction="up" delay={0.25} className="absolute bottom-3 inset-x-4 max-w-3xl mx-auto z-20 hidden sm:block">
            <div className="flex items-center justify-between text-[10px] font-mono-tech text-black px-6 py-2.5 bg-white border-2 border-black rounded-full shadow-2xl font-black relative overflow-hidden glossy-shine-light glossy-rim-light group">
              <div className="flex items-center gap-2.5">
                <span className="font-black tracking-wider text-black">PROGRESS OVER PERFECTION</span>
                <span className="opacity-40">•</span>
                <a
                  href={PROFILE_DATA.contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline transition-all duration-200"
                >
                  @{PROFILE_DATA.contact.instagramHandle}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={`tel:${PROFILE_DATA.contact.phone.replace(/\s+/g, "")}`}
                  className="hover:underline transition-all duration-200"
                >
                  {PROFILE_DATA.contact.phoneDisplay}
                </a>
                <span className="opacity-40">•</span>
                <a
                  href={`mailto:${PROFILE_DATA.contact.email}`}
                  className="hover:underline transition-all duration-200"
                >
                  {PROFILE_DATA.contact.email}
                </a>
              </div>
            </div>
          </ScrollReveal>

        </div>

        {/* Appreciation / Like Badge */}
        <ScrollReveal direction="up" delay={0.2} className="mt-10 flex flex-col items-center justify-center text-center z-20">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={handleLike}
            className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ease-out hover:scale-110 active:scale-95 shadow-2xl border-2 border-black cursor-pointer relative overflow-hidden glossy-shine-light glossy-rim-light group ${
              hasLiked
                ? "bg-[#C8FF00] text-black shadow-[0_0_25px_rgba(200,255,0,0.6)]"
                : "bg-white text-black hover:bg-[#C8FF00] shadow-xl"
            }`}
            title="Appreciate portfolio"
            aria-label="Appreciate portfolio"
          >
            <ThumbsUp className={`w-6 h-6 transition-transform duration-200 ${hasLiked ? "fill-black scale-110 text-black" : "fill-black text-black"}`} />
          </motion.button>

          <div className="mt-4">
            <h3 className="font-display text-base sm:text-lg font-bold text-white tracking-wider uppercase">
              PORTFOLIO | VIDEO & GRAPHICS | 2026
            </h3>
            <div className="flex items-center justify-center gap-4 text-xs font-mono-tech text-neutral-400 mt-1">
              <span className="flex items-center gap-1">
                👍 <strong className="text-white">{likes}</strong>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                👁 <strong className="text-white">2.8K</strong>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                💬 <strong className="text-white">12</strong>
              </span>
            </div>
            <p className="font-mono-tech text-[10px] text-neutral-500 mt-2">
              Published: Creative Portfolio Edition 2026
            </p>
          </div>
        </ScrollReveal>

        {/* Bottom Editorial Credits Line */}
        <div className="w-full mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-tech text-neutral-400 z-20">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-[#C8FF00]" />
            <span className="text-white uppercase font-bold tracking-wider">
              ASHWAN JAKKINAPALLY
            </span>
            <span>—</span>
            <span>{PROFILE_DATA.location.full}</span>
          </div>

          <p className="text-neutral-500 text-center uppercase tracking-widest text-[10px]">
            CREATED WITH INTENTION. BUILT THROUGH STORYTELLING.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-neutral-400 hover:text-[#C8FF00] transition-all duration-200 uppercase text-[11px] hover:-translate-y-0.5 active:scale-95 font-semibold cursor-pointer"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
