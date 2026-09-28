"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  ArrowRight,
  Layers,
  Download,
  Film,
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import TextReveal from "@/components/animations/TextReveal";
import ScrollReveal from "@/components/animations/ScrollReveal";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Subtle interactive 3D perspective mouse physics for the portrait
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), {
    stiffness: 200,
    damping: 25,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), {
    stiffness: 200,
    damping: 25,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const clientX = e.clientX - rect.left;
    const clientY = e.clientY - rect.top;
    const xPct = clientX / rect.width - 0.5;
    const yPct = clientY / rect.height - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-grid-pattern overflow-hidden">
      {/* Dynamic Animated Ambient Orbs using Oceanic Palette */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.25, 0.4, 0.25],
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-[#042B44]/60 rounded-full blur-[140px] pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.18, 0.32, 0.18],
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-10 right-10 w-[500px] h-[300px] bg-[#096B90]/35 rounded-full blur-[130px] pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.12, 0.25, 0.12],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-10 left-10 w-[400px] h-[300px] bg-[#71B7D5]/25 rounded-full blur-[120px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Headline & Intro */}
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
          {/* Status Badge */}
          <ScrollReveal variant="fade-down" delay={0.1}>
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass-card text-xs md:text-sm font-medium text-[#F0F8FF] border border-[#096B90]/50 shadow-[0_0_20px_rgba(9,107,144,0.3)]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#71B7D5] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#71B7D5]" />
              </span>
              <span className="tracking-wide">Creative Video Editor & Graphic Designer</span>
            </div>
          </ScrollReveal>

          {/* Main Title with TextReveal animation (Plus Jakarta Sans 800) */}
          <div className="space-y-2">
            <h1 className="font-sans text-4xl sm:text-6xl md:text-7xl font-extrabold text-[#F0F8FF] tracking-tight leading-[1.08]">
              <TextReveal text="Ashwan" delay={0.15} as="span" />{" "}
              <TextReveal text="Jakkinapally" delay={0.25} as="span" gradient />
            </h1>
            <ScrollReveal variant="fade-up" delay={0.35}>
              <p className="text-base sm:text-xl text-[#A1CCDC] font-normal max-w-2xl leading-relaxed pt-2">
                Transforming raw footage into high-retention cinematic edits and crafting poster key art that commands attention.
              </p>
            </ScrollReveal>
          </div>

          {/* Clean Tag Pills */}
          <ScrollReveal variant="fade-up" delay={0.4}>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
              {[
                "Short-Form Reels",
                "Documentary Style",
                "Movie Key Art",
                "Motion Graphics",
                "DaVinci Color Grade",
              ].map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-full bg-[#042B44]/80 border border-[#A1CCDC]/20 text-xs font-mono text-[#F0F8FF]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </ScrollReveal>

          {/* CTA Buttons (Watch video button removed as requested) */}
          <ScrollReveal variant="fade-up" delay={0.45}>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3">
              <a
                href="#posters"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#096B90] to-[#71B7D5] text-[#08171E] font-extrabold text-sm uppercase tracking-wider hover:shadow-[0_0_35px_rgba(113,183,213,0.55)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2.5 group"
              >
                <Layers className="w-4 h-4 text-[#08171E]" />
                <span>Explore 9 Posters</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto px-7 py-4 rounded-full glass-card text-[#F0F8FF] font-bold text-sm uppercase tracking-wider hover:bg-[#042B44] hover:border-[#71B7D5]/40 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Get In Touch</span>
              </a>

              <a
                href="#about"
                className="w-full sm:w-auto px-6 py-4 rounded-full border border-[#A1CCDC]/25 text-[#A1CCDC] hover:text-[#F0F8FF] hover:border-[#71B7D5]/50 text-xs font-mono uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
              >
                <Download className="w-3.5 h-3.5 text-[#71B7D5]" />
                <span>View Resume</span>
              </a>
            </div>
          </ScrollReveal>

          {/* Quick Metrics Ribbon */}
          <ScrollReveal variant="fade-up" delay={0.55}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-[#A1CCDC]/15">
              <div className="space-y-0.5">
                <div className="font-sans text-2xl font-extrabold text-[#F0F8FF] flex items-center gap-1">
                  <span>{PERSONAL_INFO.experienceYears}</span>
                  <span className="text-[#71B7D5] text-lg">Yrs</span>
                </div>
                <p className="text-xs font-mono text-[#A1CCDC]">Industry Exp.</p>
              </div>

              <div className="space-y-0.5">
                <div className="font-sans text-2xl font-extrabold text-[#F0F8FF] flex items-center gap-1">
                  <span>{PERSONAL_INFO.projectsCount}</span>
                  <span className="text-[#71B7D5] text-lg">+</span>
                </div>
                <p className="text-xs font-mono text-[#A1CCDC]">Visual Projects</p>
              </div>

              <div className="space-y-0.5">
                <div className="font-sans text-2xl font-extrabold text-[#F0F8FF] flex items-center gap-1">
                  <span>5</span>
                  <span className="text-[#71B7D5] text-lg">Pro</span>
                </div>
                <p className="text-xs font-mono text-[#A1CCDC]">Creative Suites</p>
              </div>

              <div className="space-y-0.5">
                <div className="font-sans text-2xl font-extrabold text-[#71B7D5] flex items-center gap-1">
                  <span>100%</span>
                </div>
                <p className="text-xs font-mono text-[#A1CCDC]">Client Dedication</p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Right Column: Hero Portrait Presentation (NO box around image, presented directly with rich details) */}
        <ScrollReveal variant="zoom-in" delay={0.25} className="lg:col-span-5 flex justify-center">
          <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative w-full max-w-[480px] lg:max-w-[520px] flex items-center justify-center select-none"
          >
            {/* Cinematic Halo & Radial Backdrops behind the subject */}
            <div className="absolute w-[360px] sm:w-[440px] h-[360px] sm:h-[440px] rounded-full bg-gradient-to-tr from-[#042B44] via-[#096B90]/40 to-[#71B7D5]/30 blur-[75px] pointer-events-none -z-10" />
            
            {/* Subtle Concentric Orbital Ring behind subject for visual depth */}
            <div className="absolute w-[380px] sm:w-[460px] h-[380px] sm:h-[460px] rounded-full border border-[#71B7D5]/15 pointer-events-none -z-10 animate-[spin_60s_linear_infinite]" />
            <div className="absolute w-[300px] sm:w-[380px] h-[300px] sm:h-[380px] rounded-full border border-[#096B90]/25 border-dashed pointer-events-none -z-10" />

            {/* Interactive 3D Tilt Wrapper for Portrait */}
            <motion.div
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
              className="relative w-full flex flex-col items-center"
            >
              {/* Floating Status Chip (Top Right) */}
              <motion.div
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="absolute -top-3 right-2 sm:right-6 z-20 px-3.5 py-1.5 rounded-full bg-[#042B44]/90 backdrop-blur-md border border-[#71B7D5]/30 shadow-[0_10px_25px_rgba(0,0,0,0.6)] flex items-center gap-2"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#71B7D5] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#71B7D5]" />
                </span>
                <span className="text-[11px] font-mono text-[#F0F8FF] font-semibold tracking-wide">
                  Available for Projects
                </span>
              </motion.div>

              {/* The Subject Image — Standalone cutout without box or card border */}
              <div className="relative w-full aspect-square max-w-[460px]">
                <Image
                  src="/images/ashwan-portrait.png"
                  alt="Ashwan Jakkinapally — Creative Video Editor & Graphic Designer"
                  width={500}
                  height={500}
                  priority
                  loading="eager"
                  className="w-full h-full object-contain filter drop-shadow-[0_20px_50px_rgba(4,43,68,0.95)]"
                />

                {/* Subtle natural bottom blend into the page */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#08171E] via-[#08171E]/60 to-transparent pointer-events-none" />
              </div>

              {/* Floating Specialty Chip (Bottom Left) */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.75, duration: 0.5 }}
                className="absolute bottom-2 left-2 sm:left-4 z-20 px-4 py-2 rounded-2xl bg-[#042B44]/90 backdrop-blur-md border border-[#096B90]/50 shadow-[0_12px_30px_rgba(0,0,0,0.7)] flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-xl bg-[#096B90]/30 border border-[#71B7D5]/40 flex items-center justify-center text-[#71B7D5]">
                  <Film className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-[#71B7D5] uppercase font-bold tracking-wider">
                    Full Workspace Rig
                  </p>
                  <p className="text-xs font-bold text-[#F0F8FF]">
                    Premiere • DaVinci • Photoshop
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
