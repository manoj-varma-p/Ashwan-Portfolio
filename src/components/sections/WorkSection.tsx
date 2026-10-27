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

export function WorkSection() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("All");
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);
  const [gridDensity, setGridDensity] = useState<"dense" | "curated">("dense");

  const filteredProjects =
    selectedCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section
      id="work"
      className="relative w-full bg-[#1E1E22] text-[#F5F5F0] pt-12 pb-24 border-t border-white/10 overflow-hidden"
    >
      {/* Background Yellow Line Grid */}
      <div className="absolute inset-0 bg-grid-yellow pointer-events-none" />
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
              <div className="flex items-center bg-[#24242C] p-1 rounded-full border border-white/15 font-mono-tech text-xs shadow-lg">
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
                      : "bg-[#282832] text-neutral-300 hover:text-white hover:bg-white/10 border border-white/10"
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
              ? "grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3.5 sm:gap-4 lg:gap-5"
              : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8"
          }
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
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
                  className="group relative aspect-[3/4] rounded-none overflow-hidden bg-[#282832] border border-white/15 hover:border-[#C8FF00] hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:-translate-y-1.5 transition-all duration-300 ease-out select-none cursor-pointer"
                >
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    unoptimized={project.coverImage.startsWith("http")}
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
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
