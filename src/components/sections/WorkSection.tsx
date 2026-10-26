"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import {
  Bookmark,
  ArrowUpRight,
  Grid3X3,
  LayoutGrid,
  Check,
} from "lucide-react";
import {
  PROJECTS,
  CATEGORIES,
  ProjectCategory,
  ProjectItem,
} from "@/data/projects";
import { ProjectOverlay } from "@/components/projects/ProjectOverlay";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

export function WorkSection() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("All");
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);
  const [savedIds, setSavedIds] = useState<Set<string>>(new Set());
  const [gridDensity, setGridDensity] = useState<"dense" | "curated">("dense");

  const filteredProjects =
    selectedCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  const toggleSave = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setSavedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <section
      id="work"
      className="relative w-full bg-[#080808] text-[#F5F5F0] pt-12 pb-24 border-t border-white/10 overflow-hidden"
    >
      {/* ── Top Infinite Ticker Banner in Signature Acid Yellow ── */}
      <div className="w-full mb-12 sm:mb-16 border-y-2 border-black bg-[#C8FF00] py-3 sm:py-3.5 relative overflow-hidden select-none shadow-sm text-black font-bold">
        <div className="flex w-max will-change-transform">
          {/* Track 1 */}
          <div className="flex shrink-0 items-center gap-6 sm:gap-10 animate-marquee whitespace-nowrap">
            {[1, 2, 3, 4].map((i) => (
              <React.Fragment key={`ticker-1-${i}`}>
                <span className="font-display text-sm sm:text-base font-black uppercase tracking-wider text-black">
                  SOCIAL MEDIA
                </span>
                <span className="text-black text-sm">✳</span>
                <span className="font-mono-tech text-xs sm:text-sm font-black text-black tracking-widest">
                  2026
                </span>
                <span className="text-black/40 text-sm">⬡</span>
                <span className="font-sans-editorial text-xs sm:text-sm tracking-wide text-neutral-900 italic font-semibold">
                  &ldquo;You need someone that&apos;s able to understand and execute your vision.&rdquo;
                </span>
                <span className="text-black text-sm">✳</span>
                <span className="font-mono-tech text-xs sm:text-sm font-black text-black tracking-widest">
                  2026
                </span>
                <span className="text-black text-sm">✳</span>
              </React.Fragment>
            ))}
          </div>

          {/* Track 2 (Seamless Infinite Duplicate) */}
          <div
            className="flex shrink-0 items-center gap-6 sm:gap-10 animate-marquee whitespace-nowrap"
            aria-hidden="true"
          >
            {[1, 2, 3, 4].map((i) => (
              <React.Fragment key={`ticker-2-${i}`}>
                <span className="font-display text-sm sm:text-base font-black uppercase tracking-wider text-black">
                  SOCIAL MEDIA
                </span>
                <span className="text-black text-sm">✳</span>
                <span className="font-mono-tech text-xs sm:text-sm font-black text-black tracking-widest">
                  2026
                </span>
                <span className="text-black/40 text-sm">⬡</span>
                <span className="font-sans-editorial text-xs sm:text-sm tracking-wide text-neutral-900 italic font-semibold">
                  &ldquo;You need someone that&apos;s able to understand and execute your vision.&rdquo;
                </span>
                <span className="text-black text-sm">✳</span>
                <span className="font-mono-tech text-xs sm:text-sm font-black text-black tracking-widest">
                  2026
                </span>
                <span className="text-black text-sm">✳</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-[1680px] mx-auto px-3 sm:px-6 lg:px-8">
        {/* ── Section Header (Centered) ── */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="text-center max-w-4xl mx-auto mb-10">
            <div className="inline-flex items-center justify-center gap-3 mb-3">
              <span className="w-8 h-[2px] bg-[#C8FF00]" />
              <span className="font-mono-tech text-xs uppercase tracking-widest text-[#C8FF00] font-bold">
                02 // COMMERCIAL ARCHIVE & KEY VISUALS
              </span>
              <span className="w-8 h-[2px] bg-[#C8FF00]" />
            </div>
            <h2 className="font-display text-5xl sm:text-7xl md:text-8xl font-black uppercase tracking-tight text-white leading-none mb-6">
              POSTER <span className="text-white underline decoration-[#C8FF00] decoration-8 underline-offset-4">GALLERY.</span>
            </h2>

            {/* Header Controls: Counter & Layout Toggle (Centered) */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              {/* Standout Pure White Badge Counter */}
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full font-mono-tech text-xs shadow-xl border border-white/20">
                <span className="text-neutral-500 font-bold">DISPLAYING:</span>
                <span className="text-black font-black">
                  {filteredProjects.length} ARTWORKS
                </span>
                {savedIds.size > 0 && (
                  <span className="ml-2 pl-2 border-l border-neutral-300 text-[#FF6A00] font-black">
                    {savedIds.size} SAVED
                  </span>
                )}
              </div>

              {/* Density switcher with white active indicator */}
              <div className="flex items-center bg-[#141414] p-1 rounded-full border border-white/15 font-mono-tech text-xs shadow-lg">
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
                      : "bg-[#141414] text-neutral-300 hover:text-white hover:bg-white/10 border border-white/10"
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

        {/* ── Commercial Poster Wall: Dense 6-Column Grid Matching Reference ── */}
        <motion.div
          layout
          className={
            gridDensity === "dense"
              ? "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-2.5 lg:gap-3"
              : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5"
          }
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const isSaved = savedIds.has(project.id);

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.35, delay: Math.min(index * 0.025, 0.3) }}
                  onClick={() => {
                    setActiveProject(project);
                  }}
                  data-cursor="view"
                  className="group relative aspect-[3/4] sm:aspect-[4/5] rounded-xl sm:rounded-2xl overflow-hidden bg-white border border-black/10 cursor-pointer transition-all duration-300 ease-out hover:border-black hover:shadow-[0_20px_45px_rgba(0,0,0,0.22)] hover:-translate-y-1 select-none shadow-sm glossy-shine-light glossy-rim-light"
                >
                  {/* Artwork High-Res Image */}
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    unoptimized={project.coverImage.startsWith("http")}
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  />

                  {/* Top-Down & Bottom-Up Vignette Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/60 opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                  {/* ── Top Bar: Bookmark Button + Brand Pill ── */}
                  <div className="absolute top-2 left-2 right-2 sm:top-2.5 sm:left-2.5 sm:right-2.5 flex items-center justify-between z-10 pointer-events-none">
                    {/* Interactive Bookmark Button */}
                    <button
                      onClick={(e) => toggleSave(e, project.id)}
                      className={`pointer-events-auto p-1.5 sm:p-2 rounded-lg sm:rounded-xl backdrop-blur-md transition-all duration-200 hover:scale-110 active:scale-90 flex items-center justify-center ${
                        isSaved
                          ? "bg-[#C8FF00] text-black shadow-md"
                          : "bg-black/60 text-white/90 hover:text-white hover:bg-black/80 border border-white/20"
                      }`}
                      title={isSaved ? "Saved to collection" : "Save poster"}
                      aria-label="Bookmark"
                    >
                      <Bookmark
                        className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                        fill={isSaved ? "currentColor" : "none"}
                      />
                    </button>

                    {/* Brand Pill */}
                    <span className="font-mono-tech text-[9px] sm:text-[10px] tracking-wider uppercase bg-black/60 text-white px-2 py-0.5 rounded-md border border-white/20 backdrop-blur-md font-semibold">
                      {project.brand}
                    </span>
                  </div>

                  {/* ── Hover Quick-View Action Pill (Center Pop) ── */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
                    <div className="bg-[#C8FF00] text-black px-3 py-1.5 rounded-full font-display text-xs font-bold flex items-center gap-1 shadow-[0_4px_20px_rgba(0,0,0,0.25)] scale-90 group-hover:scale-100 transition-transform duration-200">
                      <span>VIEW SPEC</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* ── Bottom Content Overlay: Brand / Title / Category ── */}
                  <div className="absolute bottom-0 inset-x-0 p-2.5 sm:p-3.5 z-10 flex flex-col justify-end">
                    <div className="flex items-center justify-between gap-1 mb-0.5">
                      <span className="font-mono-tech text-[9px] sm:text-[10px] text-[#C8FF00] font-bold tracking-widest uppercase truncate">
                        {project.brand}
                      </span>
                      <span className="font-mono-tech text-[8px] sm:text-[9px] text-neutral-300 shrink-0 font-medium">
                        {project.duration || project.year}
                      </span>
                    </div>

                    <h3 className="font-display text-xs sm:text-sm font-bold text-white uppercase tracking-tight truncate group-hover:text-[#C8FF00] transition-colors duration-200">
                      {project.title}
                    </h3>

                    <p className="font-mono-tech text-[9px] sm:text-[10px] text-neutral-300 truncate mt-0.5">
                      {project.subtitle}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

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
