"use client";

import React from "react";
import { GraduationCap, Globe, Film } from "lucide-react";
import { PROFILE_DATA } from "@/data/profile";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

export function AboutSection() {
  return (
    <section id="about" className="relative w-full bg-[#0E0E11] text-[#F5F5F0] py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-white/10 overflow-hidden">
      
      {/* Background Yellow Line Grid */}
      <div className="absolute inset-0 bg-grid-yellow pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Top Centered Section Header */}
        <ScrollReveal direction="up" delay={0.08} distance={20}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-black tracking-tight uppercase text-white leading-tight mb-4">
              ABOUT <span className="text-[#C8FF00]">ME.</span>
            </h2>

            <p className="font-mono-tech text-xs sm:text-sm uppercase tracking-widest text-neutral-400 font-semibold max-w-xl mx-auto">
              CREATIVE DIRECTION ✳ VIDEO EDITING ✳ VISUAL STORYTELLING ✳ MOTION DESIGN
            </p>
          </div>
        </ScrollReveal>

        {/* Two-Column Balanced Content Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Left Column: Quick Metadata & Spoken Languages */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
            {/* Quick Metadata Box */}
            <ScrollReveal direction="up" delay={0.16}>
              <div className="p-6 rounded-3xl bg-[#17171C] border border-white/10 space-y-4 transition-all duration-300 hover:border-white/25 shadow-xl glossy-shine glossy-rim">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="font-mono-tech text-xs text-neutral-400 font-medium uppercase tracking-wider">DISCIPLINE</span>
                  <span className="font-mono-tech text-xs font-bold text-white">{PROFILE_DATA.title}</span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="font-mono-tech text-xs text-neutral-400 font-medium uppercase tracking-wider">BASED IN</span>
                  <span className="font-mono-tech text-xs font-bold text-[#C8FF00]">{PROFILE_DATA.location.city}, India</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-mono-tech text-xs text-neutral-400 font-medium uppercase tracking-wider">CURRENT ROLE</span>
                  <span className="font-mono-tech text-xs font-bold text-white">{PROFILE_DATA.experiences[0]?.company || "TAC — The Art Code"}</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Languages Card */}
            <ScrollReveal direction="up" delay={0.24} distance={28} className="flex-1 flex flex-col">
              <div className="flex-1 p-6 rounded-3xl bg-[#17171C] border border-white/10 text-white flex flex-col justify-between transition-all duration-300 ease-out hover:border-white/20 hover:shadow-xl glossy-shine glossy-rim">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono-tech text-xs text-neutral-400 uppercase tracking-wider font-bold">
                      SPOKEN & STORY LANGUAGES
                    </span>
                    <Globe className="w-5 h-5 text-[#C8FF00]" />
                  </div>

                  <div className="space-y-2.5 mt-3">
                    {PROFILE_DATA.languages.map((lang, idx) => (
                      <div
                        key={lang.name}
                        className={`flex items-center justify-between ${
                          idx < PROFILE_DATA.languages.length - 1 ? "pb-2 border-b border-white/5" : ""
                        }`}
                      >
                        <span className="font-bold text-sm text-white">{lang.name}</span>
                        <span
                          className={`font-mono-tech text-[10px] px-2 py-0.5 rounded ${
                            lang.native
                              ? "bg-white text-black font-extrabold shadow-sm"
                              : "text-neutral-400 font-medium"
                          }`}
                        >
                          {lang.native ? "Native" : lang.level.replace(" Proficiency", "").replace(" Working", "")}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-neutral-400 font-mono-tech text-[10px]">
                  <span>GLOBAL COMM READY</span>
                  <span className="text-[#C8FF00] font-bold">TRILINGUAL</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Statement of Craft & Education */}
          <div className="lg:col-span-7 flex flex-col gap-6 justify-between">
            
            {/* Biography Card with Orange Top Rule */}
            <ScrollReveal direction="up" delay={0.18} distance={32}>
              <div className="relative p-6 sm:p-8 rounded-3xl bg-[#17171C] border border-white/10 shadow-2xl overflow-hidden group transition-all duration-300 hover:border-white/25 glossy-shine glossy-rim">
                {/* Thin Editorial Orange Top Rule */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#FF6A00]" />

                <div className="flex items-center justify-between mb-5">
                  <span className="font-mono-tech text-xs tracking-widest text-[#FF6A00] uppercase font-bold flex items-center gap-2">
                    <Film className="w-3.5 h-3.5" />
                    STATEMENT OF CRAFT
                  </span>
                  <span className="font-mono-tech text-[10px] text-black border border-white/30 px-3 py-1 rounded-full bg-white font-extrabold shadow-sm">
                    VERIFIED BIO
                  </span>
                </div>

                {/* Verified Editorial Bio with Highlighted Key Terms */}
                <blockquote className="text-base sm:text-xl font-sans-editorial font-medium leading-relaxed text-[#F5F5F0] tracking-tight">
                  &ldquo;I&apos;m Ashwan, a passionate{" "}
                  <span className="bg-[#C8FF00] text-black px-1.5 py-0.5 rounded font-black">
                    VIDEO EDITOR
                  </span>{" "}
                  and graphic designer with hands-on experience in editing,{" "}
                  <span className="text-white underline decoration-[#C8FF00] decoration-4 underline-offset-4 font-bold">
                    MOTION GRAPHICS
                  </span>
                  , and{" "}
                  <span className="text-white underline decoration-[#C8FF00] decoration-4 underline-offset-4 font-bold">
                    VISUAL STORYTELLING
                  </span>
                  . Skilled in Premiere Pro, After Effects, and Photoshop, I focus on creating clean, compelling visuals that communicate through strong storytelling, thoughtful composition, and precise editing.&rdquo;
                </blockquote>

                <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="font-mono-tech text-xs text-neutral-400">
                      Status: Pacing Every Frame With Purpose
                    </span>
                  </div>
                  <span className="font-display text-sm tracking-wider text-white font-black">
                    ASHWAN JAKKINAPALLY
                  </span>
                </div>
              </div>
            </ScrollReveal>

            {/* Education Card — Standout Pure White Contrast Card */}
            <ScrollReveal direction="up" delay={0.26} distance={28}>
              <div className="p-6 sm:p-7 rounded-3xl bg-white text-black shadow-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all duration-300 ease-out hover:shadow-[0_20px_40px_rgba(255,255,255,0.15)] hover:-translate-y-1 border border-black/10 glossy-shine-light glossy-rim-light">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-mono-tech text-xs font-extrabold text-neutral-600 uppercase tracking-wider">
                      ACADEMIC FOUNDATION
                    </span>
                    <span className="font-mono-tech text-[10px] bg-black text-[#C8FF00] font-black px-2 py-0.5 rounded">
                      DEGREE
                    </span>
                  </div>
                  <h4 className="font-display text-2xl font-black text-black">
                    B.Sc. (MSCS) — 2024
                  </h4>
                  <p className="text-xs text-neutral-700 mt-1 font-semibold">
                    Prathibha Degree & PG College • Math, Stats & Computer Science
                  </p>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-black text-white flex items-center justify-center shrink-0 shadow-md">
                  <GraduationCap className="w-6 h-6 text-[#C8FF00]" />
                </div>
              </div>
            </ScrollReveal>

          </div>

        </div>

      </div>
    </section>
  );
}
