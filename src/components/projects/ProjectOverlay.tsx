"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { ProjectItem } from "@/data/projects";

interface ProjectOverlayProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export function ProjectOverlay({ project, onClose }: ProjectOverlayProps) {
  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (project) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [project, onClose]);

  const handleClose = () => {
    onClose();
  };

  if (!project) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 select-none"
        onClick={handleClose}
      >
        {/* Dark Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-[#08080A]/95 backdrop-blur-md"
        />

        {/* Minimalist Top Close Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          onClick={handleClose}
          className="fixed top-4 right-4 sm:top-6 sm:right-6 z-20 p-2.5 sm:p-3 rounded-none bg-[#141418]/90 hover:bg-[#C8FF00] hover:text-black text-white/90 border border-white/20 hover:border-[#C8FF00] transition-all duration-200 hover:scale-105 active:scale-95 flex items-center justify-center cursor-pointer shadow-2xl"
          aria-label="Close image preview"
        >
          <X className="w-5 h-5" />
        </motion.button>

        {/* Pure Image Container (Sharp Edges, No Data) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.94 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
          className={`relative z-10 w-full ${
            project.aspect === "landscape"
              ? "max-w-[92vw] sm:max-w-3xl md:max-w-4xl lg:max-w-5xl aspect-[16/9]"
              : "max-w-[85vw] sm:max-w-xl md:max-w-2xl lg:max-w-3xl aspect-[3/4]"
          } max-h-[90vh] rounded-none overflow-hidden bg-[#121216] border border-white/20 shadow-[0_25px_90px_rgba(0,0,0,0.85)]`}
        >
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            priority
            unoptimized={project.coverImage.startsWith("http")}
            sizes="(max-width: 768px) 90vw, (max-width: 1200px) 75vw, 1000px"
            className="object-contain"
          />
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
