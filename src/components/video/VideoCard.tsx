"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play, X, Maximize2 } from "lucide-react";
import { VideoItem } from "@/data/videos";

interface VideoCardProps {
  video: VideoItem;
  index: number;
  isPlaying?: boolean;
  onPlay?: () => void;
  onStop?: () => void;
  onExpand?: () => void;
}

export function VideoCard({
  video,
  index,
  isPlaying: controlledIsPlaying,
  onPlay,
  onStop,
  onExpand,
}: VideoCardProps) {
  const [localPlaying, setLocalPlaying] = useState(false);
  const [imgError, setImgError] = useState(false);
  const isReel = video.type === "reel";

  const isPlaying = controlledIsPlaying !== undefined ? controlledIsPlaying : localPlaying;

  const handleStartPlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onPlay) {
      onPlay();
    } else {
      setLocalPlaying(true);
    }
  };

  const handleStopPlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onStop) {
      onStop();
    } else {
      setLocalPlaying(false);
    }
  };

  const handleExpand = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onExpand) onExpand();
  };

  const thumbUrl =
    video.thumbnailUrl ||
    (imgError
      ? `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`
      : `https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`);

  return (
    <div
      data-cursor={isPlaying ? "default" : "play"}
      onClick={!isPlaying ? handleStartPlay : undefined}
      className={`group relative w-full h-full select-none overflow-hidden rounded-none border border-white/15 transition-all duration-500 ease-out ${
        isPlaying
          ? isReel
            ? "border-[#C8FF00] shadow-[0_20px_50px_rgba(200,255,0,0.25)]"
            : "border-white shadow-[0_20px_50px_rgba(255,255,255,0.2)]"
          : `cursor-pointer hover:-translate-y-1.5 hover:shadow-[0_25px_60px_rgba(0,0,0,0.85)] ${
              isReel
                ? "hover:border-[#C8FF00] hover:shadow-[0_20px_50px_rgba(200,255,0,0.2)]"
                : "hover:border-white hover:shadow-[0_20px_50px_rgba(255,255,255,0.15)]"
            }`
      }`}
    >
      {isPlaying ? (
        /* Video Playing Directly in Block - ZERO TEXT */
        <div className="relative w-full h-full bg-black">
          <iframe
            src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full border-0"
          />

          {/* Controls: Expand and Close */}
          <div className="absolute top-3 right-3 flex items-center gap-1.5 z-30 opacity-80 hover:opacity-100 transition-opacity">
            {onExpand && (
              <button
                onClick={handleExpand}
                className="p-2 rounded-full bg-black/70 hover:bg-black text-white transition-all backdrop-blur-md border border-white/20 shadow-lg"
                title="Fullscreen Modal"
                aria-label="Expand video"
              >
                <Maximize2 className="w-3.5 h-3.5" />
              </button>
            )}
            <button
              onClick={handleStopPlay}
              className="p-2 rounded-full bg-black/70 hover:bg-black text-white transition-all backdrop-blur-md border border-white/20 shadow-lg"
              title="Close Video"
              aria-label="Close video"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      ) : (
        /* Clean Video Thumbnail - ZERO TEXT */
        <>
          <Image
            src={thumbUrl}
            alt={video.title}
            fill
            unoptimized
            onError={() => setImgError(true)}
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />

          {/* Subtle phone speaker pill for 9:16 Reel (decorative) */}
          {isReel && (
            <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-16 h-0.5 bg-white/25 rounded-none z-20 pointer-events-none" />
          )}

          {/* Anamorphic Lens Flare Shimmer on Hover */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
            <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/15 to-transparent -rotate-45 translate-x-[-150%] group-hover:translate-x-[250%] transition-transform duration-1000 ease-in-out" />
            <div className="absolute top-1/2 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#C8FF00]/50 to-transparent blur-[0.5px] -translate-y-1/2 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
          </div>

          {/* Center Glowing Play Button */}
          <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
            <div className="relative">
              {/* Pulsing ring on hover */}
              <div className="absolute -inset-3 rounded-full bg-[#C8FF00]/25 blur-md scale-75 opacity-0 group-hover:scale-125 group-hover:opacity-100 transition-all duration-500 ease-out" />

              {/* Button circle */}
              <div
                className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 ease-out group-hover:scale-110 ${
                  isReel
                    ? "bg-[#C8FF00] text-black group-hover:bg-white"
                    : "bg-white text-black group-hover:bg-[#C8FF00]"
                }`}
              >
                <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-current translate-x-0.5" />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
