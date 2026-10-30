"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowUpRight,
  Grid3X3,
  LayoutGrid,
} from "lucide-react";
import {
  PROJECTS,
  CATEGORIES,
  ProjectCategory,
  ProjectItem,
} from "@/data/projects";
import { ProjectOverlay } from "@/components/projects/ProjectOverlay";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { VideoWorkLine } from "@/components/sections/VideoWorkLine";
import { ColorGradeSlider } from "@/components/ui/ColorGradeSlider";
import { VIDEOS } from "@/data/videos";
import { Film, Image as ImageIcon, Sparkles } from "lucide-react";

export function WorkSection() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("All");
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);
  const [gridDensity, setGridDensity] = useState<"dense" | "curated">("dense");
  const [mediaType, setMediaType] = useState<"all" | "videos" | "images">("all");

  const filteredProjects =
    selectedCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section
      id="work"
      className="relative w-full bg-[#0E0E11] text-[#F5F5F0] pt-12 pb-24 border-t border-white/10 overflow-hidden"
    >
      {/* Background Yellow Line Grid - softened */}
      <div className="absolute inset-0 bg-grid-yellow opacity-40 pointer-events-none" />
      {/* ── Top Infinite Ticker Banner in Signature Acid Yellow (Continuously Scrolling) ── */}
      <div className="w-full mb-12 sm:mb-16 border-y-2 border-black bg-[#C8FF00] py-3.5 relative overflow-hidden select-none shadow-sm text-black font-bold">
        <div className="animate-marquee-infinite">
          {/* Track 1 */}
          <div className="flex shrink-0 items-center gap-6 sm:gap-10 whitespace-nowrap pr-6 sm:pr-10">
            {[1, 2, 3, 4].map((i) => (
              <React.Fragment key={`ticker-1-${i}`}>
                <span className="font-display text-sm sm:text-base font-black uppercase tracking-wider text-black">
                  SOCIAL MEDIA
                </span>
                <span className="text-black text-sm">✱</span>
                <span className="font-mono-tech text-xs sm:text-sm font-black text-black tracking-widest">
                  2026
                </span>
                <span className="text-black/40 text-sm">○</span>
                <span className="font-sans-editorial text-xs sm:text-sm tracking-wide text-neutral-900 font-bold uppercase">
                  &ldquo;YOU NEED SOMEONE THAT&apos;S ABLE TO UNDERSTAND AND EXECUTE YOUR VISION.&rdquo;
                </span>
                <span className="text-black text-sm">✱</span>
                <span className="font-mono-tech text-xs sm:text-sm font-black text-black tracking-widest">
                  2026
                </span>
                <span className="text-black text-sm">✱</span>
              </React.Fragment>
            ))}
          </div>

          {/* Track 2 (Seamless Infinite Duplicate) */}
          <div
            className="flex shrink-0 items-center gap-6 sm:gap-10 whitespace-nowrap pr-6 sm:pr-10"
            aria-hidden="true"
          >
            {[1, 2, 3, 4].map((i) => (
              <React.Fragment key={`ticker-2-${i}`}>
                <span className="font-display text-sm sm:text-base font-black uppercase tracking-wider text-black">
                  SOCIAL MEDIA
                </span>
                <span className="text-black text-sm">✱</span>
                <span className="font-mono-tech text-xs sm:text-sm font-black text-black tracking-widest">
                  2026
                </span>
                <span className="text-black/40 text-sm">○</span>
                <span className="font-sans-editorial text-xs sm:text-sm tracking-wide text-neutral-900 font-bold uppercase">
                  &ldquo;YOU NEED SOMEONE THAT&apos;S ABLE TO UNDERSTAND AND EXECUTE YOUR VISION.&rdquo;
                </span>
                <span className="text-black text-sm">✱</span>
                <span className="font-mono-tech text-xs sm:text-sm font-black text-black tracking-widest">
                  2026
                </span>
                <span className="text-black text-sm">✱</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      
      {/* ── 03. Master Work Section Header ── */}
      <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <ScrollReveal direction="up" delay={0.05}>
          

          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white leading-tight mb-4">
            SELECTED <span className="text-[#C8FF00]">WORK.</span>
          </h2>

          <p className="font-mono-tech text-xs sm:text-sm text-neutral-400 max-w-2xl mx-auto leading-relaxed mb-8">
            Complete archive of commercial video edits, motion reels, and key art posters in one unified showcase.
          </p>

          {/* Master Media View Switcher */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-full bg-[#141418] border border-white/15 font-mono-tech text-xs shadow-xl">
            <button
              onClick={() => setMediaType("all")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full transition-all duration-200 cursor-pointer ${
                mediaType === "all"
                  ? "bg-[#C8FF00] text-black font-black shadow-md scale-105"
                  : "text-neutral-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>ALL WORK ({VIDEOS.length + PROJECTS.length})</span>
            </button>

            <button
              onClick={() => setMediaType("videos")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full transition-all duration-200 cursor-pointer ${
                mediaType === "videos"
                  ? "bg-white text-black font-black shadow-md scale-105"
                  : "text-neutral-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <Film className="w-3.5 h-3.5" />
              <span>VIDEOS & REELS ({VIDEOS.length})</span>
            </button>

            <button
              onClick={() => setMediaType("images")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full transition-all duration-200 cursor-pointer ${
                mediaType === "images"
                  ? "bg-white text-black font-black shadow-md scale-105"
                  : "text-neutral-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <ImageIcon className="w-3.5 h-3.5" />
              <span>POSTERS & IMAGES ({PROJECTS.length})</span>
            </button>
          </div>
        </ScrollReveal>
      </div>

      {/* ── 03.1 Video Showcase & Color Grading Lab ── */}
      {(mediaType === "all" || mediaType === "videos") && (
        <>
          <VideoWorkLine />

          {/* Interactive Before / After Color Grade Showcase */}
          <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 mt-14 pt-10 border-t border-white/10">
            <ScrollReveal direction="up" delay={0.1}>
              <ColorGradeSlider />
            </ScrollReveal>
          </div>
        </>
      )}

      {(mediaType === "all" || mediaType === "images") && (
      <div className="max-w-[1680px] mx-auto px-3 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-white/10">
        {/* ── Section Header: Poster Gallery (Centered) ── */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="text-center max-w-4xl mx-auto mb-10">
            
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white leading-tight mb-6">
              POSTER <span className="text-white underline decoration-[#C8FF00] decoration-4 sm:decoration-6 underline-offset-4 sm:underline-offset-6">GALLERY.</span>
            </h2>

            {/* Header Controls: Counter & Layout Toggle (Centered) */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              {/* Standout Pure White Badge Counter */}
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full font-mono-tech text-xs shadow-xl border border-white/20">
                <span className="text-neutral-500 font-bold">DISPLAYING:</span>
                <span className="text-black font-black">
                  {filteredProjects.length} ARTWORKS
                </span>
              </div>

              {/* Density switcher with white active indicator */}
              <div className="flex items-center bg-[#141418] p-1 rounded-full border border-white/15 font-mono-tech text-xs shadow-lg">
                <button
                  onClick={() => {
                    setGridDensity("dense");
                  }}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full transition-all duration-200 ${
                    gridDensity === "dense"
                      ? "bg-white text-black font-extrabold shadow-sm"
                      : "text-neutral-400 hover:text-white"
                  }`}
                  title="Dense Poster Wall (6 Columns)"
                >
                  <Grid3X3 className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">POSTER WALL</span>
                </button>
                <button
                  onClick={() => {
                    setGridDensity("curated");
                  }}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full transition-all duration-200 ${
                    gridDensity === "curated"
                      ? "bg-white text-black font-extrabold shadow-sm"
                      : "text-neutral-400 hover:text-white"
                  }`}
                  title="Curated Spanning Grid"
                >
                  <LayoutGrid className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">EXPANDED</span>
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* ── Category Filters Ribbon (Centered) ── */}
        <ScrollReveal direction="up" delay={0.16}>
          <div className="flex items-center justify-center flex-wrap gap-2 pb-4 mb-10">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              const count =
                cat === "All"
                  ? PROJECTS.length
                  : PROJECTS.filter((p) => p.category === cat).length;

              return (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                  }}
                  className={`px-4 py-2 rounded-full font-mono-tech text-xs whitespace-nowrap uppercase tracking-wider transition-all duration-200 flex items-center gap-2 hover:scale-105 active:scale-95 ${
                    isActive
                      ? "bg-[#C8FF00] text-black font-black shadow-lg"
                      : "bg-[#17171C] text-neutral-300 hover:text-white hover:bg-white/10 border border-white/10"
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                      isActive ? "bg-black text-[#C8FF00]" : "bg-white/10 text-neutral-300"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* ── Commercial Poster Wall: Pure Images Gallery View (No Titles) ── */}
        <motion.div
          layout
          className={
            gridDensity === "dense"
              ? "grid grid-flow-dense items-start grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3.5 sm:gap-4 lg:gap-5"
              : "grid grid-flow-dense items-start grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8"
          }
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const isLandscape = project.aspect === "landscape";
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.35, delay: Math.min(index * 0.02, 0.25) }}
                  onClick={() => {
                    setActiveProject(project);
                  }}
                  data-cursor="view"
                  className={`group relative rounded-none overflow-hidden bg-[#17171C] border border-white/10 hover:border-[#C8FF00] hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)] hover:-translate-y-1.5 transition-all duration-300 ease-out select-none cursor-pointer w-full ${
                    isLandscape
                      ? "col-span-2 sm:col-span-2 md:col-span-2 lg:col-span-2 xl:col-span-2 aspect-[16/9]"
                      : "aspect-[3/4]"
                  }`}
                >
                  {/* Poster Image */}
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    unoptimized={project.coverImage.startsWith("http")}
                    sizes={
                      isLandscape
                        ? "(max-width: 640px) 100vw, (max-width: 1024px) 66vw, 40vw"
                        : "(max-width: 640px) 50vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    }
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* 1. Anamorphic Lens Flare Shimmer Beam on Hover */}
                  <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                    <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/20 to-transparent -rotate-45 translate-x-[-150%] group-hover:translate-x-[250%] transition-transform duration-1000 ease-in-out" />
                    {/* Subtle Horizontal Anamorphic Streak */}
                    <div className="absolute top-1/2 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#C8FF00]/40 to-transparent blur-[0.5px] -translate-y-1/2 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
                  </div>

                  {/* 2. Soft Edge Vignette on Hover */}
                  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[inset_0_0_35px_rgba(0,0,0,0.7)] z-10" />

                  {/* 3. Camera Viewfinder Reticle Corners */}
                  <div className="absolute inset-2.5 pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                    <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-[#C8FF00]" />
                    <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t border-r border-[#C8FF00]" />
                    <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b border-l border-[#C8FF00]" />
                    <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-[#C8FF00]" />
                  </div>

                  {/* 4. Film HUD Header: Recording Dot + Timecode Counter */}
                  <div className="absolute top-0 inset-x-0 p-3 flex items-center justify-between text-[10px] font-mono-tech tracking-wider text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-b from-black/75 to-transparent z-20 pointer-events-none">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                      <span className="font-extrabold text-[#C8FF00] tracking-widest text-[9px]">REC</span>
                    </div>
                    <span className="text-white/95 font-mono-tech text-[10px] font-bold tabular-nums">
                      00:0{((index * 3 + 1) % 7) + 1}:{String((index * 13 + 7) % 60).padStart(2, "0")}:{String((index * 19 + 11) % 24).padStart(2, "0")}
                    </span>
                  </div>

                  {/* 5. Minimalist Viewfinder Bottom Bar: Scope Tag & Resolution */}
                  <div className="absolute bottom-0 inset-x-0 p-2.5 flex items-center justify-between text-[9px] font-mono-tech uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/85 via-black/40 to-transparent z-20 pointer-events-none text-neutral-300">
                    <span className="text-[#C8FF00] font-bold">24 FPS // 4K RAW</span>
                    <span className="text-white font-black flex items-center gap-1">
                      VIEW ↗
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
      )}

      <div className="max-w-[1680px] mx-auto px-3 sm:px-6 lg:px-8">
        {/* ── Bottom Footer Quote & Collaboration Prompt ── */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="mt-16 pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <p className="font-display text-lg text-white font-bold uppercase tracking-tight">
                HAVE A SPECIFIC PRODUCT OR CAMPAIGN IN MIND?
              </p>
              <p className="font-mono-tech text-xs text-neutral-400 mt-0.5">
                Full 3D motion advertising, social media reels, and high-velocity commercial cuts.
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-white hover:bg-[#C8FF00] text-black font-display text-xs sm:text-sm uppercase font-black px-7 py-3.5 rounded-full transition-all duration-200 hover:scale-105 active:scale-95 shadow-2xl"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </ScrollReveal>
      </div>

      {/* Case Study Fullscreen Overlay Modal */}
      <ProjectOverlay
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
}
