"use client";

import React, { useState } from "react";
import {
  Smartphone,
  Tv,
  Play,
  Film,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { VIDEOS, VideoItem } from "@/data/videos";
import { VideoCard } from "@/components/video/VideoCard";
import { VideoModal } from "@/components/video/VideoModal";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

type VideoFilter = "all" | "reel" | "youtube";

export function VideoWorkLine() {
  const [activeFilter, setActiveFilter] = useState<VideoFilter>("all");
  const [selectedVideoIndex, setSelectedVideoIndex] = useState<number | null>(null);
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);

  const reelVideos = VIDEOS.filter((v) => v.type === "reel");
  const youtubeVideos = VIDEOS.filter((v) => v.type === "youtube");

  const displayVideos =
    activeFilter === "all"
      ? VIDEOS
      : activeFilter === "reel"
      ? reelVideos
      : youtubeVideos;

  const handleOpenVideo = (video: VideoItem) => {
    const idx = displayVideos.findIndex((v) => v.id === video.id);
    setSelectedVideoIndex(idx >= 0 ? idx : 0);
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
    <div className="w-full my-6 pb-8 relative">
      {/* ── Sub-Section Header ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <ScrollReveal direction="up" delay={0.08}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-5">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-2 h-2 rounded-full bg-[#C8FF00] animate-pulse" />
                <span className="font-mono-tech text-[11px] uppercase tracking-widest text-neutral-400 font-bold">
                  DIRECTOR CUTS & VERTICAL MOTION
                </span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-white leading-tight">
                VIDEO & MOTION <span className="text-[#C8FF00]">GALLERY.</span>
              </h3>

              <p className="font-mono-tech text-xs text-neutral-400 mt-1.5 max-w-xl leading-relaxed">
                Stream commercial masters and vertical social reels. Compact preview blocks with click-to-play.
              </p>
            </div>

            {/* Filter Tabs (Compact) */}
            <div className="flex items-center bg-[#141418] p-1 rounded-full border border-white/15 font-mono-tech text-[11px] shrink-0 shadow-lg">
              <button
                onClick={() => setActiveFilter("all")}
                className={`px-3.5 py-1.5 rounded-full transition-all duration-200 font-bold ${
                  activeFilter === "all"
                    ? "bg-[#C8FF00] text-black shadow-md font-black"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                ALL ({VIDEOS.length})
              </button>
              <button
                onClick={() => setActiveFilter("reel")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all duration-200 font-bold ${
                  activeFilter === "reel"
                    ? "bg-white text-black shadow-md font-black"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                <Smartphone className="w-3 h-3" />
                <span>9:16 REELS ({reelVideos.length})</span>
              </button>
              <button
                onClick={() => setActiveFilter("youtube")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all duration-200 font-bold ${
                  activeFilter === "youtube"
                    ? "bg-red-600 text-white shadow-md font-black"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                <Tv className="w-3 h-3" />
                <span>16:9 MASTERS ({youtubeVideos.length})</span>
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* ── Downward Flowing Videos Showcase (Compact Proportions) ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

        {/* 16:9 Widescreen Section (Shown in 'all' or 'youtube' mode) */}
        {(activeFilter === "all" || activeFilter === "youtube") && (
          <div>
            {activeFilter === "all" && (
              <div className="flex items-center justify-between pb-3 mb-5 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Tv className="w-3.5 h-3.5 text-red-500" />
                  <h4 className="font-display text-sm sm:text-base font-bold uppercase tracking-tight text-white">
                    16:9 CINEMATIC & COMMERCIAL MASTERS
                  </h4>
                </div>
                <span className="font-mono-tech text-[10px] bg-white/10 text-neutral-300 px-2.5 py-0.5 rounded-full font-bold">
                  {youtubeVideos.length} MASTERS
                </span>
              </div>
            )}

            {/* Compact 3-column grid for 16:9 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {youtubeVideos.map((video) => (
                <ScrollReveal key={video.id} direction="up" delay={0.08}>
                  <div className="flex flex-col group bg-[#141418] rounded-xl border border-white/10 hover:border-white/30 transition-all duration-300 p-2.5 sm:p-3 shadow-lg hover:-translate-y-1 hover:shadow-2xl">
                    <div className="w-full aspect-video relative overflow-hidden rounded-lg bg-black">
                      <VideoCard
                        video={video}
                        index={displayVideos.findIndex((v) => v.id === video.id)}
                        isPlaying={playingVideoId === video.id}
                        onPlay={() => setPlayingVideoId(video.id)}
                        onStop={() => setPlayingVideoId(null)}
                        onExpand={() => handleOpenVideo(video)}
                      />
                    </div>

                    <div className="mt-3 flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5 mb-1 flex-wrap">
                          <span className="font-mono-tech text-[9px] bg-[#C8FF00]/15 text-[#C8FF00] border border-[#C8FF00]/30 px-1.5 py-0.2 rounded font-black uppercase tracking-wider">
                            {video.category}
                          </span>
                          <span className="text-neutral-600 text-[10px]">•</span>
                          <span className="font-mono-tech text-[9px] text-neutral-400 font-bold">
                            {video.duration}
                          </span>
                          <span className="text-neutral-600 text-[10px]">•</span>
                          <span className="font-mono-tech text-[9px] text-neutral-400 truncate max-w-[100px]">
                            {video.client}
                          </span>
                        </div>

                        <h5 className="font-display text-xs sm:text-sm font-bold text-white uppercase tracking-tight group-hover:text-[#C8FF00] transition-colors truncate">
                          {video.title}
                        </h5>

                        <p className="font-sans-editorial text-[11px] text-neutral-400 mt-0.5 line-clamp-1">
                          {video.subtitle}
                        </p>
                      </div>

                      <button
                        onClick={() => handleOpenVideo(video)}
                        className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-neutral-300 hover:text-white transition-all shrink-0 mt-0.5 cursor-pointer border border-white/10"
                        title="Open in Full Theater Mode"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        )}

        {/* 9:16 Vertical Reels Section (Shown in 'all' or 'reel' mode) */}
        {(activeFilter === "all" || activeFilter === "reel") && (
          <div>
            {activeFilter === "all" && (
              <div className="flex items-center justify-between pb-3 mb-5 border-t border-white/10 pt-8">
                <div className="flex items-center gap-2">
                  <Smartphone className="w-3.5 h-3.5 text-[#C8FF00]" />
                  <h4 className="font-display text-sm sm:text-base font-bold uppercase tracking-tight text-white">
                    9:16 VERTICAL SOCIAL REELS &amp; SHORTS
                  </h4>
                </div>
                <span className="font-mono-tech text-[10px] bg-[#C8FF00]/15 text-[#C8FF00] border border-[#C8FF00]/30 px-2.5 py-0.5 rounded-full font-black">
                  {reelVideos.length} REELS
                </span>
              </div>
            )}

            {/* Compact 6-column grid for 9:16 on desktop, 3 on tablet, 2 on mobile */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-3.5">
              {reelVideos.map((video) => (
                <ScrollReveal key={video.id} direction="up" delay={0.08}>
                  <div className="flex flex-col group bg-[#141418] rounded-xl border border-white/10 hover:border-[#C8FF00]/50 transition-all duration-300 p-2 sm:p-2.5 shadow-md hover:-translate-y-1 hover:shadow-xl">
                    <div className="w-full aspect-[9/15] relative overflow-hidden rounded-lg bg-black">
                      <VideoCard
                        video={video}
                        index={displayVideos.findIndex((v) => v.id === video.id)}
                        isPlaying={playingVideoId === video.id}
                        onPlay={() => setPlayingVideoId(video.id)}
                        onStop={() => setPlayingVideoId(null)}
                        onExpand={() => handleOpenVideo(video)}
                      />
                    </div>

                    <div className="mt-2.5 flex items-start justify-between gap-1.5">
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-1 mb-1">
                          <span className="font-mono-tech text-[8px] bg-[#FF6A00]/15 text-[#FF6A00] border border-[#FF6A00]/30 px-1 py-0.2 rounded font-black uppercase">
                            9:16
                          </span>
                          <span className="font-mono-tech text-[9px] text-neutral-400 font-bold">
                            {video.duration}
                          </span>
                        </div>

                        <h5 className="font-display text-[11px] sm:text-xs font-bold text-white uppercase tracking-tight truncate group-hover:text-[#C8FF00] transition-colors leading-snug">
                          {video.title}
                        </h5>

                        <p className="font-sans-editorial text-[10px] text-neutral-400 mt-0.5 truncate">
                          {video.subtitle}
                        </p>
                      </div>

                      <button
                        onClick={() => handleOpenVideo(video)}
                        className="p-1 rounded bg-white/5 hover:bg-[#C8FF00] hover:text-black text-neutral-400 transition-all shrink-0 mt-0.5 cursor-pointer border border-white/10"
                        title="Open in Full Theater Mode"
                      >
                        <ExternalLink className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Fullscreen Video Modal for Theater Mode */}
      <VideoModal
        video={selectedVideoIndex !== null ? displayVideos[selectedVideoIndex] : null}
        onClose={() => setSelectedVideoIndex(null)}
        onNext={handleNextVideo}
        onPrev={handlePrevVideo}
      />
    </div>
  );
}
