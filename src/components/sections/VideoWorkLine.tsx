"use client";

import React, { useRef, useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Smartphone,
  Tv,
  Film,
} from "lucide-react";
import { VIDEOS } from "@/data/videos";
import { VideoCard } from "@/components/video/VideoCard";
import { VideoModal } from "@/components/video/VideoModal";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

type VideoFilter = "all" | "reel" | "youtube";

export function VideoWorkLine() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState<VideoFilter>("all");
  const [selectedVideoIndex, setSelectedVideoIndex] = useState<number | null>(null);
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Filtered video list:
  // "all" preserves the strict alternating line: Reel (9:16) -> YouTube (16:9) -> Reel (9:16) ...
  const displayVideos =
    activeFilter === "all"
      ? VIDEOS
      : VIDEOS.filter((v) => v.type === activeFilter);

  // Check scroll position to enable/disable buttons
  const checkScroll = () => {
    const el = scrollContainerRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 20);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 20);
  };

  useEffect(() => {
    checkScroll();
    const el = scrollContainerRef.current;
    if (el) {
      el.addEventListener("scroll", checkScroll, { passive: true });
      window.addEventListener("resize", checkScroll);
      return () => {
        el.removeEventListener("scroll", checkScroll);
        window.removeEventListener("resize", checkScroll);
      };
    }
  }, [displayVideos]);

  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const scrollAmount = direction === "left" ? -550 : 550;
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  // Modal navigation
  const handleOpenVideo = (index: number) => {
    setSelectedVideoIndex(index);
  };

  const handleNextVideo = () => {
    if (selectedVideoIndex === null) return;
    setSelectedVideoIndex((selectedVideoIndex + 1) % displayVideos.length);
  };

  const handlePrevVideo = () => {
    if (selectedVideoIndex === null) return;
    setSelectedVideoIndex(
      (selectedVideoIndex - 1 + displayVideos.length) % displayVideos.length
    );
  };

  return (
    <div className="w-full my-8 pb-4 relative">
      {/* ── Sub-Section Header ── */}
      <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <ScrollReveal direction="up" delay={0.08}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              

              <h3 className="font-display text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white leading-tight">
                MOTION <span className="text-[#C8FF00]">TIMELINE.</span>
              </h3>

              <p className="font-mono-tech text-xs sm:text-sm text-neutral-400 mt-2 max-w-2xl leading-relaxed">
                Alternating strip of high-impact <span className="text-white font-bold">9:16 Social Reels</span> and widescreen <span className="text-white font-bold">16:9 YouTube 4K</span> commercial cuts.
              </p>
            </div>

            {/* Filter and Scroll Navigation Controls */}
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              {/* Filter Tabs */}
              <div className="flex items-center bg-[#24242C] p-1 rounded-full border border-white/15 font-mono-tech text-xs">
                <button
                  onClick={() => setActiveFilter("all")}
                  className={`px-3 py-1.5 rounded-full transition-all duration-200 ${
                    activeFilter === "all"
                      ? "bg-[#C8FF00] text-black font-extrabold shadow-sm"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  ALTERNATING LINE ({VIDEOS.length})
                </button>
                <button
                  onClick={() => setActiveFilter("reel")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all duration-200 ${
                    activeFilter === "reel"
                      ? "bg-white text-black font-extrabold shadow-sm"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  <Smartphone className="w-3 h-3" />
                  <span>9:16 REELS</span>
                </button>
                <button
                  onClick={() => setActiveFilter("youtube")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all duration-200 ${
                    activeFilter === "youtube"
                      ? "bg-red-600 text-white font-extrabold shadow-sm"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  <Tv className="w-3 h-3" />
                  <span>16:9 YOUTUBE</span>
                </button>
              </div>

              {/* Prev / Next Track Buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => scroll("left")}
                  disabled={!canScrollLeft}
                  className={`p-2.5 rounded-full border border-white/15 bg-[#282832] transition-all duration-200 ${
                    canScrollLeft
                      ? "text-white hover:bg-white hover:text-black cursor-pointer shadow-lg"
                      : "text-neutral-600 opacity-40 cursor-not-allowed"
                  }`}
                  aria-label="Scroll videos left"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => scroll("right")}
                  disabled={!canScrollRight}
                  className={`p-2.5 rounded-full border border-white/15 bg-[#282832] transition-all duration-200 ${
                    canScrollRight
                      ? "text-white hover:bg-[#C8FF00] hover:text-black cursor-pointer shadow-lg"
                      : "text-neutral-600 opacity-40 cursor-not-allowed"
                  }`}
                  aria-label="Scroll videos right"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* ── The Alternating Horizontal Line of Videos ── */}
      <div className="relative w-full">
        {/* Subtle Side Fade Gradients */}
        <div className="absolute left-0 inset-y-0 w-8 sm:w-16 bg-gradient-to-r from-[#1E1E22] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 inset-y-0 w-8 sm:w-16 bg-gradient-to-l from-[#1E1E22] to-transparent z-10 pointer-events-none" />

        {/* Scrollable Container Track */}
        <div
          ref={scrollContainerRef}
          className="flex flex-nowrap items-center gap-4 sm:gap-6 overflow-x-auto px-4 sm:px-8 py-4 no-scrollbar scroll-smooth h-[420px] sm:h-[480px] md:h-[500px]"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {displayVideos.map((video, index) => {
            const isReel = video.type === "reel";
            return (
              <div
                key={video.id}
                className={`shrink-0 flex items-center justify-center ${
                  isReel
                    ? "h-full aspect-[9/16]"
                    : "h-[250px] sm:h-[290px] md:h-[320px] max-w-[88vw] aspect-[16/9]"
                }`}
                style={{ scrollSnapAlign: "start" }}
              >
                <VideoCard
                  video={video}
                  index={index}
                  isPlaying={playingVideoId === video.id}
                  onPlay={() => setPlayingVideoId(video.id)}
                  onStop={() => setPlayingVideoId(null)}
                  onExpand={() => setSelectedVideoIndex(index)}
                />
              </div>
            );
          })}
        </div>

        {/* Drag / Scroll Indicator */}
        <div className="max-w-[1680px] mx-auto px-4 sm:px-8 mt-3 flex items-center justify-between text-[11px] font-mono-tech text-neutral-500">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#C8FF00] animate-ping" />
            <span className="text-neutral-400">
              DRAG OR SCROLL HORIZONTALLY TO BROWSE REELS & 16:9 MASTERS
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-3">
            <span className="text-[#C8FF00] font-bold">CLICK CARD TO PLAY IN HD / 4K</span>
          </div>
        </div>
      </div>

      {/* Fullscreen Video Modal */}
      <VideoModal
        video={selectedVideoIndex !== null ? displayVideos[selectedVideoIndex] : null}
        onClose={() => setSelectedVideoIndex(null)}
        onNext={handleNextVideo}
        onPrev={handlePrevVideo}
      />
    </div>
  );
}
