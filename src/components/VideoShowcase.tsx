"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  Clock,
  X,
  Film,
  Layers,
  SlidersHorizontal,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { VIDEOS_DATA, VideoItem } from "@/data/portfolioData";
import TextReveal from "@/components/animations/TextReveal";
import ScrollReveal from "@/components/animations/ScrollReveal";

export default function VideoShowcase() {
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);
  const [mobileView, setMobileView] = useState<"sidescroll" | "stack">("sidescroll");
  const [activeSideScrollIndex, setActiveSideScrollIndex] = useState(0);
  const scrollTrackRef = useRef<HTMLDivElement>(null);

  // Sync scroll indicator on horizontal swipe
  const handleScroll = () => {
    if (!scrollTrackRef.current) return;
    const { scrollLeft, clientWidth } = scrollTrackRef.current;
    if (clientWidth === 0) return;
    const newIdx = Math.round(scrollLeft / (clientWidth * 0.86));
    setActiveSideScrollIndex(Math.min(Math.max(newIdx, 0), VIDEOS_DATA.length - 1));
  };

  const scrollToCard = (index: number) => {
    if (!scrollTrackRef.current) return;
    const cardWidth = scrollTrackRef.current.clientWidth * 0.86 + 16;
    scrollTrackRef.current.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });
    setActiveSideScrollIndex(index);
  };

  const handlePrev = () => {
    scrollToCard(Math.max(activeSideScrollIndex - 1, 0));
  };

  const handleNext = () => {
    scrollToCard(Math.min(activeSideScrollIndex + 1, VIDEOS_DATA.length - 1));
  };

  return (
    <section id="videos" className="py-14 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20 border-t border-[#A1CCDC]/10">
      {/* Section Header */}
      <div className="text-center space-y-4 mb-8 sm:mb-14">
        <ScrollReveal variant="fade-down" delay={0.1}>
          <span className="text-[#A1CCDC] font-mono text-xs uppercase tracking-widest">
            Motion & Sequence Cuts
          </span>
        </ScrollReveal>

        <h2 className="font-sans text-3xl sm:text-5xl font-extrabold text-[#F0F8FF]">
          <TextReveal text="My Editing" as="span" />{" "}
          <TextReveal text="Videos" as="span" gradient delay={0.2} />
        </h2>

        <ScrollReveal variant="fade-up" delay={0.3}>
          <p className="text-[#A1CCDC] max-w-2xl mx-auto text-xs sm:text-base font-normal leading-relaxed">
            Cinematic pacing, rhythm beat-syncing, color grading, and dynamic sound design across documentary, commercial, and short-form video projects.
          </p>
        </ScrollReveal>

        {/* Mobile View Toggle Options */}
        <div className="md:hidden pt-4 flex flex-col items-center gap-2">
          <span className="text-[10px] font-mono text-[#A1CCDC]/80 uppercase tracking-widest">
            Mobile Layout View
          </span>
          <div className="inline-flex p-1 rounded-full bg-[#042B44]/90 border border-[#71B7D5]/35 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
            <button
              onClick={() => setMobileView("sidescroll")}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-bold flex items-center gap-1.5 transition-all duration-300 ${
                mobileView === "sidescroll"
                  ? "bg-[#71B7D5] text-[#08171E] shadow-[0_0_15px_rgba(113,183,213,0.6)]"
                  : "text-[#A1CCDC] hover:text-[#F0F8FF]"
              }`}
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Side Scroll</span>
            </button>
            <button
              onClick={() => setMobileView("stack")}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-bold flex items-center gap-1.5 transition-all duration-300 ${
                mobileView === "stack"
                  ? "bg-[#096B90] text-[#F0F8FF] shadow-[0_0_15px_rgba(9,107,144,0.6)]"
                  : "text-[#A1CCDC] hover:text-[#F0F8FF]"
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Scroll Stack</span>
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE DISPLAY (Visible on < md) */}
      <div className="md:hidden">
        {mobileView === "sidescroll" ? (
          /* SIDE SCROLL CAROUSEL MODE */
          <div className="space-y-4 pt-1 pb-4">
            {/* Header controls */}
            <div className="flex items-center justify-between px-1">
              <span className="text-xs font-mono text-[#A1CCDC] flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#71B7D5] animate-pulse" />
                <span>Swipe videos ({activeSideScrollIndex + 1} of {VIDEOS_DATA.length})</span>
              </span>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  disabled={activeSideScrollIndex === 0}
                  className="w-8 h-8 rounded-full bg-[#042B44] border border-[#71B7D5]/30 text-white disabled:opacity-30 flex items-center justify-center transition-colors"
                  aria-label="Previous video"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  disabled={activeSideScrollIndex === VIDEOS_DATA.length - 1}
                  className="w-8 h-8 rounded-full bg-[#042B44] border border-[#71B7D5]/30 text-white disabled:opacity-30 flex items-center justify-center transition-colors"
                  aria-label="Next video"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Horizontal Swipe Reel */}
            <div
              ref={scrollTrackRef}
              onScroll={handleScroll}
              className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4 pt-1 -mx-4 px-4"
            >
              {VIDEOS_DATA.map((video) => (
                <div
                  key={video.id}
                  onClick={() => setActiveVideo(video)}
                  className="w-[86vw] max-w-[340px] shrink-0 snap-center rounded-3xl bg-[#042B44]/85 backdrop-blur-xl border border-[#71B7D5]/35 shadow-[0_15px_35px_-10px_rgba(4,43,68,0.7)] overflow-hidden cursor-pointer flex flex-col justify-between"
                >
                  {/* Thumbnail */}
                  <div className="relative aspect-video bg-black/90 overflow-hidden">
                    <Image
                      src={video.posterImage}
                      alt={video.title}
                      fill
                      className="object-cover"
                      sizes="340px"
                    />
                    <div className="absolute inset-0 bg-black/35" />

                    <div className="absolute bottom-2.5 right-2.5 flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-[#08171E]/90 text-[10px] font-mono text-[#A1CCDC]">
                      <Clock className="w-3 h-3 text-[#71B7D5]" />
                      <span>{video.duration}</span>
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-[#096B90] text-[#F0F8FF] flex items-center justify-center shadow-[0_0_20px_rgba(113,183,213,0.7)]">
                        <Play className="w-5 h-5 fill-current ml-0.5" />
                      </div>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-5 space-y-2">
                    <h3 className="font-sans font-extrabold text-[#F0F8FF] text-base leading-snug line-clamp-1">
                      {video.title}
                    </h3>
                    <p className="text-xs text-[#A1CCDC] line-clamp-2 leading-relaxed font-normal">
                      {video.description}
                    </p>
                    <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-[#71B7D5] border-t border-[#A1CCDC]/10">
                      <span>Tap to play embed</span>
                      <span>Watch Reel →</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Dots */}
            <div className="flex items-center justify-center gap-2 pt-2">
              {VIDEOS_DATA.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToCard(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeSideScrollIndex === idx
                      ? "w-7 bg-[#71B7D5] shadow-[0_0_10px_rgba(113,183,213,0.8)]"
                      : "w-2 bg-[#042B44] border border-[#71B7D5]/30 hover:bg-[#71B7D5]/50"
                  }`}
                  aria-label={`Go to video ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        ) : (
          /* SCROLL STACK MODE */
          <div className="relative space-y-5 pb-8 pt-2">
            <div className="text-center pb-2">
              <span className="text-[11px] font-mono text-[#71B7D5] bg-[#042B44]/80 px-3 py-1 rounded-full border border-[#71B7D5]/30">
                ↓ Scroll to stack video cuts
              </span>
            </div>

            {VIDEOS_DATA.map((video, idx) => (
              <div
                key={video.id}
                onClick={() => setActiveVideo(video)}
                style={{
                  top: `${76 + idx * 10}px`,
                  zIndex: 10 + idx,
                }}
                className="sticky rounded-2xl bg-[#061C27] border border-[#71B7D5]/40 shadow-[0_-8px_30px_rgba(0,0,0,0.9)] overflow-hidden cursor-pointer"
              >
                {/* Header Strip */}
                <div className="flex items-center justify-between px-4 py-2.5 border-b border-[#A1CCDC]/15 bg-[#042B44]">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-md bg-[#096B90]/40 border border-[#71B7D5]/40 flex items-center justify-center text-[10px] font-mono font-black text-[#71B7D5]">
                      0{idx + 1}
                    </span>
                    <span className="text-[11px] font-mono text-[#F0F8FF] font-bold truncate max-w-[200px]">
                      {video.title}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#A1CCDC] flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#71B7D5]" />
                    {video.duration}
                  </span>
                </div>

                {/* Aspect ratio video banner */}
                <div className="relative aspect-[16/8] bg-black/90 overflow-hidden">
                  <Image
                    src={video.posterImage}
                    alt={video.title}
                    fill
                    className="object-cover"
                    sizes="100vw"
                  />
                  <div className="absolute inset-0 bg-black/35" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-11 h-11 rounded-full bg-[#096B90] text-[#F0F8FF] flex items-center justify-center shadow-[0_0_15px_rgba(113,183,213,0.7)]">
                      <Play className="w-4 h-4 fill-current ml-0.5" />
                    </div>
                  </div>
                </div>

                <div className="p-3.5 flex items-center justify-between gap-3">
                  <p className="text-[11px] text-[#A1CCDC] line-clamp-1">
                    {video.description}
                  </p>
                  <span className="text-[10px] font-mono font-bold uppercase text-[#71B7D5] shrink-0">
                    Play Video ↗
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* DESKTOP DISPLAY (Hidden on mobile, 3-column grid on >= md) */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {VIDEOS_DATA.map((video, idx) => (
          <ScrollReveal
            key={video.id}
            variant="fade-up"
            delay={(idx % 3) * 0.12}
            className="h-full"
          >
            <div
              onClick={() => setActiveVideo(video)}
              className="h-full group glass-card rounded-3xl overflow-hidden cursor-pointer border border-[#A1CCDC]/15 hover:border-[#71B7D5]/60 hover:shadow-[0_15px_40px_-10px_rgba(9,107,144,0.4)] transition-all duration-500 flex flex-col justify-between"
            >
              {/* Video Thumbnail with Hover Overlay */}
              <div className="relative aspect-video bg-black/90 overflow-hidden">
                <Image
                  src={video.posterImage}
                  alt={video.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />

                <div className="absolute bottom-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#08171E]/80 backdrop-blur-md text-[10px] font-mono text-[#A1CCDC]">
                  <Clock className="w-3 h-3 text-[#71B7D5]" />
                  <span>{video.duration}</span>
                </div>

                {/* Pulsing Center Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative flex items-center justify-center">
                    <span className="absolute w-14 h-14 rounded-full bg-[#096B90]/40 animate-ping group-hover:animate-none" />
                    <div className="w-12 h-12 rounded-full bg-[#096B90] text-[#F0F8FF] flex items-center justify-center shadow-[0_0_25px_rgba(113,183,213,0.6)] group-hover:scale-110 group-hover:bg-[#71B7D5] group-hover:text-[#08171E] transition-all duration-300">
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Video Meta Info */}
              <div className="p-6 space-y-2">
                <h3 className="font-sans font-extrabold text-[#F0F8FF] text-lg group-hover:text-[#71B7D5] transition-colors leading-snug">
                  {video.title}
                </h3>

                <p className="text-xs text-[#A1CCDC] line-clamp-2 leading-relaxed font-normal">
                  {video.description}
                </p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Video Modal Player */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveVideo(null)}
            className="fixed inset-0 z-[10000] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-8"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full glass-card rounded-3xl overflow-hidden border border-[#A1CCDC]/25 shadow-2xl flex flex-col"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-[#A1CCDC]/15 bg-[#042B44]">
                <div className="space-y-0.5">
                  <h3 className="font-sans font-extrabold text-[#F0F8FF] text-base sm:text-lg">
                    {activeVideo.title}
                  </h3>
                </div>

                <button
                  onClick={() => setActiveVideo(null)}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#096B90]/40 text-[#A1CCDC] hover:text-[#F0F8FF] flex items-center justify-center transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Video Player Embed */}
              <div className="relative aspect-video w-full bg-black">
                {activeVideo.youtubeEmbedUrl ? (
                  <iframe
                    src={activeVideo.youtubeEmbedUrl}
                    title={activeVideo.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full border-0"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-center p-8 space-y-3">
                    <Film className="w-12 h-12 text-[#71B7D5]" />
                    <p className="text-white font-bold text-base">Video Reel Preview</p>
                    <p className="text-xs text-[#A1CCDC] max-w-md">
                      Contact Ashwan directly for uncompressed client project reels, high-bitrate master files, and private timeline samples.
                    </p>
                  </div>
                )}
              </div>

              {/* Modal Footer Description */}
              <div className="p-6 bg-[#042B44] border-t border-[#A1CCDC]/15 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs text-[#A1CCDC] max-w-lg font-normal">
                  {activeVideo.description}
                </p>

                <a
                  href="#contact"
                  onClick={() => setActiveVideo(null)}
                  className="px-5 py-2.5 rounded-xl bg-[#096B90] text-[#F0F8FF] font-bold text-xs uppercase tracking-wider hover:bg-[#71B7D5] hover:text-[#08171E] transition-colors shrink-0 shadow-[0_0_15px_rgba(9,107,144,0.4)]"
                >
                  Hire for This Style
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
