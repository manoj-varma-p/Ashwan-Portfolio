"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Scissors,
  Clapperboard,
  BookOpen,
  Palette,
  Smartphone,
  Music,
  Cpu,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { SKILLS_DATA } from "@/data/portfolioData";
import TextReveal from "@/components/animations/TextReveal";
import ScrollReveal from "@/components/animations/ScrollReveal";

const SPECIALTIES = [
  {
    name: "Short-Form Video Editing",
    desc: "Reels & YouTube Shorts with fast-paced cuts, beat drops, and hook retention.",
    icon: Scissors,
    color: "#096B90",
  },
  {
    name: "Documentary-Style Narrative",
    desc: "Long-form pacing, archival b-roll montage, subtle sound beds, and emotional arc.",
    icon: Clapperboard,
    color: "#71B7D5",
  },
  {
    name: "Visual Storytelling",
    desc: "Crafting structured narrative arcs from unscripted footage and event captures.",
    icon: BookOpen,
    color: "#A1CCDC",
  },
  {
    name: "DaVinci Color Grading",
    desc: "Skin tone balancing, node trees, LUT customization, and cinematic film curve grade.",
    icon: Palette,
    color: "#096B90",
  },
  {
    name: "Reels & Viral Hooks",
    desc: "Sound effects, dynamic zooms, captions, sound bites, and visual engagement triggers.",
    icon: Smartphone,
    color: "#71B7D5",
  },
  {
    name: "Sound Design & Music Sync",
    desc: "Multi-layered whooshes, risers, dialogue denoising, and rhythm beat synchronization.",
    icon: Music,
    color: "#A1CCDC",
  },
];

export default function SkillsSection() {
  const [activeSpecialtyIndex, setActiveSpecialtyIndex] = useState(0);
  const specialtyTrackRef = useRef<HTMLDivElement>(null);

  const handleSpecialtyScroll = () => {
    if (!specialtyTrackRef.current) return;
    const { scrollLeft, clientWidth } = specialtyTrackRef.current;
    if (clientWidth === 0) return;
    const newIdx = Math.round(scrollLeft / (clientWidth * 0.78));
    setActiveSpecialtyIndex(Math.min(Math.max(newIdx, 0), SPECIALTIES.length - 1));
  };

  const scrollToSpecialty = (index: number) => {
    if (!specialtyTrackRef.current) return;
    const cardWidth = specialtyTrackRef.current.clientWidth * 0.78 + 14;
    specialtyTrackRef.current.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });
    setActiveSpecialtyIndex(index);
  };

  return (
    <section id="skills" className="py-14 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      {/* Section Header */}
      <div className="text-center space-y-4 mb-10 sm:mb-16">
        <ScrollReveal variant="fade-down" delay={0.1}>
          <span className="text-[#A1CCDC] font-mono text-xs uppercase tracking-widest">
            Arsenal & Specializations
          </span>
        </ScrollReveal>

        <h2 className="font-sans text-3xl sm:text-5xl font-extrabold text-[#F0F8FF]">
          <TextReveal text="Tools & Technical" as="span" />{" "}
          <TextReveal text="Mastery" as="span" gradient delay={0.2} />
        </h2>

        <ScrollReveal variant="fade-up" delay={0.3}>
          <p className="text-[#A1CCDC] max-w-2xl mx-auto text-xs sm:text-base font-normal leading-relaxed">
            High proficiency across industry-standard nonlinear video editing suites, motion design platforms, and graphic design software.
          </p>
        </ScrollReveal>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Creative Specialties */}
        <div className="lg:col-span-6 space-y-4">
          <div className="flex items-center justify-between">
            <ScrollReveal variant="fade-right" delay={0.15}>
              <h3 className="font-sans font-extrabold text-lg sm:text-xl text-[#F0F8FF] flex items-center gap-2">
                <span>Core Creative Specializations</span>
              </h3>
            </ScrollReveal>

            {/* Mobile swipe indicator */}
            <span className="sm:hidden text-[10px] font-mono text-[#71B7D5] bg-[#042B44]/80 px-2 py-0.5 rounded-full border border-[#71B7D5]/30">
              ↔ Side Scroll
            </span>
          </div>

          {/* MOBILE ONLY: Horizontal Side Scroll snap carousel */}
          <div className="sm:hidden space-y-3">
            <div
              ref={specialtyTrackRef}
              onScroll={handleSpecialtyScroll}
              className="flex gap-3 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-2 pt-1 -mx-4 px-4"
            >
              {SPECIALTIES.map((spec, idx) => {
                const Icon = spec.icon;
                return (
                  <div
                    key={idx}
                    className="w-[78vw] max-w-[280px] shrink-0 snap-center p-5 rounded-2xl bg-[#042B44]/85 backdrop-blur-md border border-[#71B7D5]/30 shadow-[0_10px_25px_rgba(4,43,68,0.6)] space-y-2.5 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
                          style={{ backgroundColor: `${spec.color}25`, color: "#F0F8FF" }}
                        >
                          <Icon className="w-5 h-5 text-[#71B7D5]" />
                        </div>
                        <span className="text-[10px] font-mono text-[#A1CCDC] bg-[#08171E] px-2 py-0.5 rounded-md">
                          0{idx + 1}/0{SPECIALTIES.length}
                        </span>
                      </div>

                      <h4 className="font-sans font-extrabold text-sm text-[#F0F8FF]">
                        {spec.name}
                      </h4>
                      <p className="text-xs text-[#A1CCDC] leading-relaxed font-normal pt-1">
                        {spec.desc}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-[#A1CCDC]/10 text-[10px] font-mono text-[#71B7D5]">
                      Visual Specialist Feature
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Mobile Dots */}
            <div className="flex items-center justify-center gap-1.5 pt-1">
              {SPECIALTIES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToSpecialty(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    activeSpecialtyIndex === idx
                      ? "w-5 bg-[#71B7D5]"
                      : "w-1.5 bg-[#042B44] border border-[#71B7D5]/30"
                  }`}
                  aria-label={`Go to specialty ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* TABLET & DESKTOP: Grid layout */}
          <div className="hidden sm:grid sm:grid-cols-2 gap-4">
            {SPECIALTIES.map((spec, idx) => {
              const Icon = spec.icon;
              return (
                <ScrollReveal
                  key={idx}
                  variant="fade-up"
                  delay={0.1 + (idx % 2) * 0.1}
                >
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                    className="p-5 rounded-2xl glass-card border border-[#A1CCDC]/15 hover:border-[#71B7D5]/40 transition-all space-y-2 group"
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-lg mb-2"
                      style={{ backgroundColor: `${spec.color}25`, color: "#F0F8FF" }}
                    >
                      <Icon className="w-5 h-5 text-[#71B7D5]" />
                    </div>
                    <h4 className="font-sans font-extrabold text-sm text-[#F0F8FF] group-hover:text-[#71B7D5] transition-colors">
                      {spec.name}
                    </h4>
                    <p className="text-xs text-[#A1CCDC] leading-relaxed font-normal">
                      {spec.desc}
                    </p>
                  </motion.div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

        {/* Right Column: Software Proficiency Level Bars */}
        <div className="lg:col-span-6 space-y-5">
          <ScrollReveal variant="fade-left" delay={0.15}>
            <h3 className="font-sans font-extrabold text-lg sm:text-xl text-[#F0F8FF] mb-4 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-[#71B7D5]" />
              <span>Software Suites & Proficiency</span>
            </h3>
          </ScrollReveal>

          <div className="space-y-3.5 sm:space-y-4">
            {SKILLS_DATA.map((skill, idx) => (
              <ScrollReveal
                key={idx}
                variant="fade-up"
                delay={0.1 + idx * 0.08}
              >
                <div className="p-4 sm:p-5 rounded-2xl glass-card border border-[#A1CCDC]/15 hover:border-[#71B7D5]/40 transition-all space-y-2.5 sm:space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-[#F0F8FF] text-sm sm:text-base">
                        {skill.name}
                      </h4>
                      <p className="text-[11px] sm:text-xs font-mono text-[#A1CCDC]">
                        {skill.levelLabel}
                      </p>
                    </div>
                    <span
                      className="font-mono text-xs sm:text-sm font-extrabold px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-lg bg-[#042B44] border border-[#096B90]/40 text-[#71B7D5]"
                    >
                      {skill.level}%
                    </span>
                  </div>

                  {/* Progress Track */}
                  <div className="w-full h-2 bg-[#042B44] rounded-full overflow-hidden border border-[#A1CCDC]/10">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: idx * 0.1, ease: "easeOut" }}
                      className="h-full rounded-full"
                      style={{
                        background: `linear-gradient(90deg, #096B90, #71B7D5, #A1CCDC)`,
                        boxShadow: `0 0 12px rgba(113, 183, 213, 0.5)`,
                      }}
                    />
                  </div>

                  <p className="text-[11px] text-[#A1CCDC] leading-relaxed font-normal">
                    {skill.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
