"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { X, ArrowUpRight, Clock, Calendar, Film, Layers, CheckCircle2 } from "lucide-react";
import { ProjectItem } from "@/data/projects";
import { PROFILE_DATA } from "@/data/profile";

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
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-8 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-5xl bg-[#0D0D0D] border border-white/15 rounded-3xl overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.85)] z-10 max-h-[92vh] flex flex-col my-auto text-[#F5F5F0]"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#141414]">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#C8FF00] shadow-[0_0_8px_#C8FF00]" />
              <span className="font-mono-tech text-xs uppercase tracking-wider text-neutral-400 font-semibold">
                CASE STUDY // {project.category}
              </span>
              {project.isConcept && (
                <span className="font-mono-tech text-[10px] bg-[#FF6A00]/20 text-[#FF6A00] border border-[#FF6A00]/40 px-2 py-0.5 rounded font-bold">
                  CONCEPT ARTWORK SPEC
                </span>
              )}
            </div>

            <button
              onClick={handleClose}
              className="p-2 rounded-full bg-white/10 hover:bg-white hover:text-black text-white transition-all duration-200 hover:scale-105 active:scale-95 flex items-center justify-center cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Scrollable Body */}
          <div className="overflow-y-auto p-6 sm:p-8 md:p-10 space-y-10">
            
            {/* Title & Meta Row */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-white/10">
              <div>
                <span className="font-mono-tech text-xs text-[#C8FF00] tracking-widest uppercase font-bold">
                  {project.clientOrConcept}
                </span>
                <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black text-white uppercase tracking-tight mt-1">
                  {project.title}
                </h2>
                <p className="text-lg text-neutral-400 font-medium mt-2 font-sans-editorial">
                  {project.subtitle}
                </p>
              </div>

              {/* Meta Chips - High Contrast White Elements */}
              <div className="flex flex-wrap gap-3 font-mono-tech text-xs">
                <div className="bg-white text-black px-3.5 py-2 rounded-xl shadow-lg border border-black/10">
                  <span className="text-neutral-500 block text-[9px] uppercase font-bold">YEAR</span>
                  <span className="font-black text-black">{project.year}</span>
                </div>
                <div className="bg-white text-black px-3.5 py-2 rounded-xl shadow-lg border border-black/10">
                  <span className="text-neutral-500 block text-[9px] uppercase font-bold">ROLE</span>
                  <span className="font-black text-black">{project.role}</span>
                </div>
                {project.duration && (
                  <div className="bg-white text-black px-3.5 py-2 rounded-xl shadow-lg border border-black/10">
                    <span className="text-neutral-500 block text-[9px] uppercase font-bold">RUNTIME / FORMAT</span>
                    <span className="font-black text-black">{project.duration}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Main Visual Feature */}
            <div className="relative w-full aspect-video sm:aspect-[21/9] rounded-2xl overflow-hidden border border-white/15 bg-neutral-900 shadow-2xl">
              <Image
                src={project.coverImage}
                alt={project.title}
                fill
                priority
                unoptimized={project.coverImage.startsWith("http")}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 flex items-center gap-3">
                <span className="font-mono-tech text-xs bg-black/90 text-[#C8FF00] border border-white/20 px-3.5 py-1.5 rounded-full backdrop-blur-md font-extrabold shadow-lg">
                  EDITORIAL MASTER STILL
                </span>
              </div>
            </div>

            {/* Deep Breakdown Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
              
              {/* Creative Approach */}
              <div className="space-y-4">
                <h3 className="font-display text-2xl text-white uppercase tracking-tight flex items-center gap-2">
                  <Film className="w-5 h-5 text-[#C8FF00]" />
                  Creative Vision & Pacing
                </h3>
                <p className="text-neutral-300 leading-relaxed text-sm sm:text-base font-sans-editorial">
                  {project.summary}
                </p>
                <p className="text-neutral-400 leading-relaxed text-sm font-sans-editorial pt-2">
                  {project.approach}
                </p>
              </div>

              {/* Editing & Design Techniques */}
              <div className="space-y-4">
                <h3 className="font-display text-2xl text-white uppercase tracking-tight flex items-center gap-2">
                  <Layers className="w-5 h-5 text-[#FF6A00]" />
                  Techniques & Pipeline
                </h3>

                <ul className="space-y-2.5">
                  {project.techniques.map((tech, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-xs sm:text-sm text-neutral-200 bg-[#161616] p-3 rounded-xl border border-white/10 font-medium"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#C8FF00] shrink-0 mt-0.5" />
                      <span>{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Software Applied & Gallery Stills */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono-tech text-xs text-neutral-400 mr-2 font-semibold">
                  SUITE USED:
                </span>
                {project.software.map((sw) => (
                  <span
                    key={sw}
                    className="font-mono-tech text-xs bg-white text-black px-3 py-1 rounded-lg font-black shadow-md"
                  >
                    {sw}
                  </span>
                ))}
              </div>

              <a
                href={`mailto:${PROFILE_DATA.contact.email}?subject=Inquiry regarding ${encodeURIComponent(project.title)}`}
                className="inline-flex items-center gap-2 bg-[#C8FF00] text-black font-display text-sm uppercase px-5 py-2.5 rounded-full font-black hover:bg-white transition-all duration-200 hover:scale-105 active:scale-95 shadow-xl"
              >
                <span>REQUEST SIMILAR WORK</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
