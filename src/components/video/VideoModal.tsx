"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { VideoItem } from "@/data/videos";

interface VideoModalProps {
  video: VideoItem | null;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
}

export function VideoModal({ video, onClose, onNext, onPrev }: VideoModalProps) {
  useEffect(() => {
    if (!video) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && onNext) onNext();
      if (e.key === "ArrowLeft" && onPrev) onPrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [video, onClose, onNext, onPrev]);

  if (!video) return null;

  const isReel = video.type === "reel";

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/90 backdrop-blur-xl transition-all"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className={`relative z-10 w-full flex flex-col bg-[#141418] border border-white/15 rounded-none shadow-[0_25px_80px_rgba(0,0,0,0.95)] overflow-hidden ${
            isReel ? "max-w-md" : "max-w-4xl"
          }`}
        >
          {/* Minimal Controls Bar: Prev / Next / Close - ZERO TEXT */}
          <div className="flex items-center justify-end px-4 py-2.5 border-b border-white/10 bg-[#1A1A22]/90 backdrop-blur-md shrink-0">
            <div className="flex items-center gap-2">
              {onPrev && (
                <button
                  onClick={onPrev}
                  className="p-1.5 rounded-full text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
                  title="Previous Video (Left Arrow)"
                  aria-label="Previous video"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
              )}
              {onNext && (
                <button
                  onClick={onNext}
                  className="p-1.5 rounded-full text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
                  title="Next Video (Right Arrow)"
                  aria-label="Next video"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              )}
              <div className="w-[1px] h-4 bg-white/20 mx-1" />
              <button
                onClick={onClose}
                className="p-1.5 rounded-full text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
                title="Close (ESC)"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Video Player Display (Pure Video Player - NO TEXT) */}
          <div className="p-3 sm:p-5 flex-1 flex flex-col items-center justify-center bg-black">
            <div
              className={`relative w-full rounded-none overflow-hidden bg-black border border-white/10 shadow-2xl ${
                isReel
                  ? "aspect-[9/16] max-h-[70vh]"
                  : "aspect-[16/9] max-h-[75vh]"
              }`}
            >
              <iframe
                src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
