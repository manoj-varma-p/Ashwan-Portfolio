"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  useAnimationFrame,
  useMotionValue,
} from "framer-motion";
import {
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import { POSTERS_DATA, PosterItem } from "@/data/portfolioData";
import TextReveal from "@/components/animations/TextReveal";
import ScrollReveal from "@/components/animations/ScrollReveal";

function wrapNumber(min: number, max: number, v: number) {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
}

interface VelocityRowProps {
  items: PosterItem[];
  baseVelocity?: number;
  onSelectPoster: (poster: PosterItem) => void;
}

function VelocityPosterRow({ items, baseVelocity = -0.75, onSelectPoster }: VelocityRowProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 300,
  });

  const [isHovered, setIsHovered] = useState(false);

  // Gentle velocity modulation with scroll speed (reduced for smooth glide)
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 1.8], {
    clamp: false,
  });

  // Calculate percentage translation
  const x = useTransform(baseX, (v) => `${wrapNumber(-50, 0, v)}%`);

  useAnimationFrame((t, delta) => {
    // When hovering over the stream, slow down to a standstill for easy selection
    const speedMultiplier = isHovered ? 0.15 : 1;
    let moveBy = baseVelocity * (delta / 1000) * speedMultiplier;

    // Subtle, gentle scroll boost
    const currentVelocity = velocityFactor.get();
    if (currentVelocity !== 0) {
      moveBy += (baseVelocity < 0 ? -1 : 1) * Math.abs(currentVelocity) * 0.15;
    }

    baseX.set(baseX.get() + moveBy);
  });

  // Duplicate items 4 times for endless continuous loop without gaps
  const displayItems = [...items, ...items, ...items, ...items];

  return (
    <div
      className="overflow-hidden py-4 flex flex-nowrap select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div className="flex gap-6 sm:gap-8 shrink-0" style={{ x }}>
        {displayItems.map((poster, idx) => (
          <div
            key={`${poster.id}-${idx}`}
            onClick={() => onSelectPoster(poster)}
            className="group relative w-[250px] sm:w-[310px] md:w-[350px] aspect-[2/3] shrink-0 rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer border border-[#A1CCDC]/20 hover:border-[#71B7D5] shadow-[0_15px_35px_-10px_rgba(4,43,68,0.7)] hover:shadow-[0_20px_45px_rgba(113,183,213,0.35)] transition-all duration-500 bg-[#042B44]/60"
          >
            {/* The Poster Artwork — Clean presentation with NO text underneath */}
            <Image
              src={poster.image}
              alt={poster.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              sizes="(max-width: 768px) 280px, 360px"
            />

            {/* Subtle Gradient Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#08171E]/90 via-[#08171E]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5" />

            {/* Center View Expand Icon on Hover */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
              <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#096B90]/90 backdrop-blur-md text-[#F0F8FF] border border-[#71B7D5]/50 flex items-center justify-center shadow-[0_0_25px_rgba(113,183,213,0.7)] group-hover:scale-110 transition-transform">
                <Maximize2 className="w-6 h-6" />
              </div>
            </div>

            {/* Floating category badge revealed on hover */}
            <div className="absolute top-3.5 left-3.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="px-3 py-1 rounded-full bg-[#08171E]/85 backdrop-blur-md border border-[#71B7D5]/40 text-[10px] font-mono font-bold text-[#F0F8FF] uppercase tracking-wider">
                {poster.category}
              </span>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function PostersShowcase() {
  const [activeModalPoster, setActiveModalPoster] = useState<PosterItem | null>(null);

  // Keyboard navigation for aesthetic lightbox modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeModalPoster) return;
      if (e.key === "Escape") {
        setActiveModalPoster(null);
      } else if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  const handleNext = () => {
    if (!activeModalPoster) return;
    const currentIndex = POSTERS_DATA.findIndex((p) => p.id === activeModalPoster.id);
    const nextIndex = (currentIndex + 1) % POSTERS_DATA.length;
    setActiveModalPoster(POSTERS_DATA[nextIndex]);
  };

  const handlePrev = () => {
    if (!activeModalPoster) return;
    const currentIndex = POSTERS_DATA.findIndex((p) => p.id === activeModalPoster.id);
    const prevIndex = (currentIndex - 1 + POSTERS_DATA.length) % POSTERS_DATA.length;
    setActiveModalPoster(POSTERS_DATA[prevIndex]);
  };

  return (
    <section id="posters" className="py-14 sm:py-20 md:py-24 max-w-full mx-auto scroll-mt-20 relative overflow-hidden">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 mb-14">
        <ScrollReveal variant="fade-down" delay={0.1}>
          <span className="text-[#A1CCDC] font-mono text-xs uppercase tracking-widest">
            Theatrical Key Art & Posters
          </span>
        </ScrollReveal>

        <h2 className="font-sans text-3xl sm:text-5xl font-extrabold text-[#F0F8FF]">
          <TextReveal text="Key Visual" as="span" />{" "}
          <TextReveal text="Poster Gallery" as="span" gradient delay={0.15} />
        </h2>

        <ScrollReveal variant="fade-up" delay={0.3}>
          <p className="text-[#A1CCDC] max-w-2xl mx-auto text-sm sm:text-base font-normal leading-relaxed">
            Scroll to subtly accelerate the gallery stream. Click on any poster to view full artwork details.
          </p>
        </ScrollReveal>
      </div>

      {/* Single Continuous Scroll Velocity Row (Reduced velocity and smooth glide) */}
      <div className="relative w-full">
        {/* Soft edge fade masks for seamless infinite reel look */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-36 md:w-52 bg-gradient-to-r from-[#08171E] via-[#08171E]/80 to-transparent z-20" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-36 md:w-52 bg-gradient-to-l from-[#08171E] via-[#08171E]/80 to-transparent z-20" />

        {/* Single Row: All 9 posters gliding smoothly */}
        <VelocityPosterRow
          items={POSTERS_DATA}
          baseVelocity={-0.75}
          onSelectPoster={setActiveModalPoster}
        />
      </div>

      {/* Aesthetic Lightbox Detail Modal */}
      <AnimatePresence>
        {activeModalPoster && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveModalPoster(null)}
            className="fixed inset-0 z-[10000] bg-black/92 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-6 md:p-8"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 20 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full max-h-[92vh] glass-card rounded-3xl overflow-hidden border border-[#71B7D5]/35 shadow-[0_25px_70px_rgba(0,0,0,0.95)] flex flex-col bg-[#042B44]/95"
            >
              {/* Modal Top Header Bar */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-[#A1CCDC]/15 bg-[#042B44]">
                <div className="flex items-center gap-3">
                  <span className="text-[11px] font-mono text-[#71B7D5] uppercase font-bold tracking-wider px-3 py-1 rounded-full bg-[#096B90]/25 border border-[#71B7D5]/30">
                    {activeModalPoster.category}
                  </span>
                  <h3 className="font-sans font-extrabold text-[#F0F8FF] text-base sm:text-lg truncate max-w-xs sm:max-w-md">
                    {activeModalPoster.title}
                  </h3>
                </div>

                {/* Top Actions */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#096B90]/40 text-white flex items-center justify-center transition-colors"
                    title="Previous (Left arrow)"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  <button
                    onClick={handleNext}
                    className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#096B90]/40 text-white flex items-center justify-center transition-colors"
                    title="Next (Right arrow)"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>

                  <button
                    onClick={() => setActiveModalPoster(null)}
                    className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#71B7D5] hover:text-[#08171E] text-[#A1CCDC] flex items-center justify-center transition-colors ml-2"
                    title="Close (Esc)"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Modal Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 overflow-y-auto max-h-[78vh]">
                {/* Left: Full Uncropped Poster Visual */}
                <div className="lg:col-span-7 p-6 sm:p-8 flex items-center justify-center bg-black/60 relative min-h-[420px]">
                  <div className="relative w-full max-w-[380px] aspect-[2/3] rounded-2xl overflow-hidden border border-[#A1CCDC]/25 shadow-2xl">
                    <Image
                      src={activeModalPoster.image}
                      alt={activeModalPoster.title}
                      fill
                      priority
                      className="object-contain"
                      sizes="480px"
                    />
                  </div>
                </div>

                {/* Right: Aesthetic Design Details */}
                <div className="lg:col-span-5 p-6 sm:p-8 space-y-6 bg-[#042B44]/90 border-t lg:border-t-0 lg:border-l border-[#A1CCDC]/15 flex flex-col justify-between">
                  <div className="space-y-5">
                    <div>
                      <p className="text-[11px] font-mono text-[#71B7D5] uppercase font-bold tracking-wider">
                        Design Breakdown
                      </p>
                      <h4 className="font-sans font-extrabold text-[#F0F8FF] text-xl mt-1">
                        {activeModalPoster.subtitle}
                      </h4>
                    </div>

                    <div className="space-y-2">
                      <p className="text-xs uppercase font-mono text-[#A1CCDC] font-semibold">
                        Creative Concept
                      </p>
                      <p className="text-xs sm:text-sm text-[#A1CCDC] leading-relaxed font-normal">
                        {activeModalPoster.description}
                      </p>
                    </div>

                    {/* Software Tools & Capabilities */}
                    {activeModalPoster.tools && activeModalPoster.tools.length > 0 && (
                      <div className="space-y-2 pt-2 border-t border-[#A1CCDC]/15">
                        <p className="text-xs uppercase font-mono text-[#71B7D5] font-bold">
                          Tools & Techniques
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {activeModalPoster.tools.map((tool, tIdx) => (
                            <span
                              key={tIdx}
                              className="px-3 py-1 rounded-lg bg-[#08171E] border border-[#096B90]/40 text-xs font-mono text-[#F0F8FF]"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Design Specs */}
                    <div className="p-4 rounded-xl bg-[#08171E]/80 border border-[#096B90]/30 space-y-1.5">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="text-[#A1CCDC]">Aspect Ratio:</span>
                        <span className="text-[#F0F8FF] font-bold">2:3 Vertical Key Art</span>
                      </div>
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="text-[#A1CCDC]">Master Format:</span>
                        <span className="text-[#71B7D5] font-bold">Ultra HD 300 DPI</span>
                      </div>
                    </div>
                  </div>

                  {/* Modal Footer CTA */}
                  <div className="pt-6 border-t border-[#A1CCDC]/15 space-y-3">
                    <a
                      href="#contact"
                      onClick={() => setActiveModalPoster(null)}
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#096B90] via-[#71B7D5] to-[#096B90] bg-[length:200%_auto] hover:bg-right text-[#08171E] font-extrabold text-xs uppercase tracking-wider text-center block shadow-[0_0_25px_rgba(113,183,213,0.5)] transition-all duration-300"
                    >
                      Request Similar Poster Design
                    </a>

                    <p className="text-[10px] text-center font-mono text-[#A1CCDC]">
                      Use Arrow keys ← → or buttons to browse collection
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
