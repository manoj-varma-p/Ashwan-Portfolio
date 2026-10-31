"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "motion/react";
import {
  Camera,
  Compass,
  Layers,
  PenTool,
  Sun,
  MapPin,
  Phone,
  PhoneOff,
} from "lucide-react";
import { PROFILE_DATA } from "@/data/profile";
import { copyToClipboard } from "@/lib/utils";
import { useSmoothScroll } from "@/components/motion/SmoothScroll";

export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollTo } = useSmoothScroll();
  const [whoIsThisOpen, setWhoIsThisOpen] = useState(false);
  const [, setCallActive] = useState(false);
  const [callDismissed, setCallDismissed] = useState(false);
  const [dockTooltip, setDockTooltip] = useState(true);
  const [, setCopiedPhone] = useState(false);

  // Pointer tracking for interactive 3D parallax on floating elements
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 180 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // Parallax offsets for floating layers
  const cardTopLeftX = useTransform(smoothMouseX, [-600, 600], [-14, 14]);
  const cardTopLeftY = useTransform(smoothMouseY, [-600, 600], [-10, 10]);

  const cardBottomLeftX = useTransform(smoothMouseX, [-600, 600], [-16, 16]);
  const cardBottomLeftY = useTransform(smoothMouseY, [-600, 600], [10, -10]);

  const cardTopRightX = useTransform(smoothMouseX, [-600, 600], [14, -14]);
  const cardTopRightY = useTransform(smoothMouseY, [-600, 600], [-10, 10]);

  const cardBottomRightX = useTransform(smoothMouseX, [-600, 600], [16, -16]);
  const cardBottomRightY = useTransform(smoothMouseY, [-600, 600], [10, -10]);

  const portraitX = useTransform(smoothMouseX, [-600, 600], [-8, 8]);
  const portraitY = useTransform(smoothMouseY, [-600, 600], [-6, 6]);

  const floatingBadgesX = useTransform(smoothMouseX, [-600, 600], [-18, 18]);
  const floatingBadgesY = useTransform(smoothMouseY, [-600, 600], [-14, 14]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleCallAccept = () => {
    setCallActive(true);
    copyToClipboard(PROFILE_DATA.contact.phone);
    setCopiedPhone(true);
    setTimeout(() => {
      window.open(PROFILE_DATA.contact.whatsappUrl, "_blank");
    }, 300);
  };

  // Dock items definition for clean staggered wave reveal
  const dockItems = [
    { id: "ae", type: "ae", title: "Adobe After Effects" },
    { id: "ps", type: "ps", title: "Adobe Photoshop" },
    { id: "ai", type: "ai", title: "Adobe Illustrator" },
    { id: "warn", type: "warn", title: "Creative Caution / Experimental" },
    { id: "divider", type: "divider", title: "Separator" },
    { id: "photos", type: "photos", title: "Apple Photos / Media Archive" },
    { id: "curve", type: "curve", title: "Rhythm Speed Curve" },
    { id: "instagram", type: "instagram", title: `Instagram @${PROFILE_DATA.contact.instagramHandle}` },
    { id: "shorts", type: "shorts", title: "Viral Reels & Shorts" },
    { id: "behance", type: "behance", title: "Behance Case Studies" },
    { id: "psd1", type: "psd", title: "Master Composition.psd" },
    { id: "psd2", type: "psd", title: "Poster Art.psd" },
  ];

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full bg-[#B8F500] text-[#0A0A0A] overflow-hidden select-none border-b-2 border-black"
    >
      {/* Dynamic Radial Lighting on Neon Canvas matching Reference */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 38%, #E2FF24 0%, #C4FF00 45%, #A8F000 85%, #92DC00 100%)",
        }}
      />

      {/* Subtle Halftone & Grid Background Texture */}
      <div className="absolute inset-0 bg-halftone opacity-35 pointer-events-none" />
      <div className="absolute inset-0 bg-grid-tech opacity-10 pointer-events-none" />

      {/* Main Canvas Container */}
      <div className="relative max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-8 sm:pb-12 min-h-screen flex flex-col justify-between">
        
        {/* Top & Middle Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center lg:items-stretch py-4 my-auto">
          
          {/* ======================================================== */}
          {/* LEFT COLUMN: Floating About Me Card & Education Card     */}
          {/* ======================================================== */}
          <div className="lg:col-span-3 flex flex-col sm:grid sm:grid-cols-2 lg:flex lg:flex-col justify-between gap-6 z-20 order-2 lg:order-1">
            
            {/* CARD 1: "about me" Card with clean reveal entrance */}
            <motion.div
              style={{ x: cardTopLeftX, y: cardTopLeftY }}
              initial={{ opacity: 0, x: -60, scale: 0.92 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.85, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="w-full"
            >
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, -0.4, 0],
                }}
                transition={{
                  duration: 5.4,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
                className="relative w-full bg-white/95 backdrop-blur-xl text-[#0A0A0A] rounded-2xl p-5 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.08),0_1px_3px_rgba(0,0,0,0.04)] border border-black/10 overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:border-black/30 hover:shadow-[0_28px_65px_rgba(0,0,0,0.16)] glossy-shine-light glossy-rim-light"
              >
                {/* Top Glass Highlight Reflection */}
                <div className="absolute inset-x-0 top-0 h-[40%] bg-gradient-to-b from-black/[0.02] to-transparent pointer-events-none" />

                {/* Solid Orange Top Accent Stripe */}
                <div className="absolute top-0 inset-x-0 h-2 bg-[#FF6A00] shadow-[0_2px_10px_rgba(255,106,0,0.3)]" />

                <div className="pt-2 relative z-10">
                  {/* Uppercase Chunky Headline */}
                  <h2 className="font-display text-2xl sm:text-3xl font-black uppercase tracking-tight leading-none text-[#0A0A0A] mb-3">
                    ABOUT<br />
                    <span className="text-[#0A0A0A] text-3xl sm:text-4xl font-black">ME</span>
                  </h2>

                  {/* Editorial Bio Paragraph */}
                  <p className="text-xs sm:text-[13px] text-[#52525B] leading-relaxed font-sans-editorial">
                    For over 2 years, I&apos;ve been working in the creative industry, exploring and developing my skills in Video Editing, Motion Graphics, Visual Storytelling, Graphic Design, and Color Grading. I enjoy creating visuals that not only look good, but also carry meaning and intention behind every detail.
                  </p>
                </div>

                {/* Bottom 4 Icon Toolbar matching Reference */}
                <div className="mt-6 pt-4 border-t border-black/10 flex items-center justify-around text-neutral-500 relative z-10">
                  <button
                    type="button"
                    title="Video & Cinematography"
                    className="p-1.5 hover:text-black hover:scale-115 transition-all"
                  >
                    <Camera className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    title="Creative Direction"
                    className="p-1.5 hover:text-black hover:scale-115 transition-all"
                  >
                    <Compass className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    title="Motion & Compositing Layers"
                    className="p-1.5 hover:text-black hover:scale-115 transition-all"
                  >
                    <Layers className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    title="Graphic Design & Retouching"
                    className="p-1.5 hover:text-black hover:scale-115 transition-all"
                  >
                    <PenTool className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            </motion.div>

            {/* CARD 2: "education" Card with clean reveal entrance */}
            <motion.div
              style={{ x: cardBottomLeftX, y: cardBottomLeftY }}
              initial={{ opacity: 0, x: -60, y: 30, scale: 0.92 }}
              animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
              transition={{ duration: 0.85, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="w-full"
            >
              <motion.div
                animate={{
                  y: [0, 9, 0],
                  rotate: [0, 0.4, 0],
                }}
                transition={{
                  duration: 6.2,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
                className="relative w-full bg-white/95 backdrop-blur-xl text-black rounded-2xl p-6 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.08),0_1px_3px_rgba(0,0,0,0.04)] border border-black/10 overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:shadow-[0_28px_65px_rgba(0,0,0,0.16)] hover:border-black/30 glossy-shine-light glossy-rim-light"
              >
                {/* Subtle tech grid background on white card */}
                <div className="absolute inset-0 bg-grid-tech opacity-6 pointer-events-none" />

                <div className="relative z-10 text-center flex flex-col items-center">
                  <span className="font-sans-editorial text-sm font-bold tracking-tight text-neutral-500">
                    2021 – 2024
                  </span>
                  <h3 className="font-sans-editorial text-base sm:text-lg font-black text-black mt-1 leading-snug">
                    Prathibha Degree & PG College
                  </h3>
                  <p className="font-sans-editorial text-xs font-semibold text-neutral-700 mt-1 italic">
                    B.Sc. (MSCS)
                  </p>
                  <p className="font-mono-tech text-[10px] text-neutral-500 mt-0.5">
                    Math, Statistics & Computer Science
                  </p>
                </div>

                {/* Distinctive Uppercase Blue "EDUCATION" Signature */}
                <div className="relative z-10 mt-6 pt-3 border-t border-black/10 text-center">
                  <span className="font-display text-xl sm:text-2xl font-black text-[#0066FF] tracking-tight uppercase">
                    EDUCATION
                  </span>
                </div>
              </motion.div>
            </motion.div>

          </div>

          {/* ======================================================== */}
          {/* CENTER COLUMN: Central Portrait & Floating Annotations   */}
          {/* ======================================================== */}
          <div className="lg:col-span-6 relative flex flex-col items-center justify-center min-h-[560px] sm:min-h-[640px] lg:min-h-[700px] z-10 order-1 lg:order-2">
            {/* Soft Ambient Radial Behind Subject */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.4 }}
              className="absolute w-[400px] sm:w-[540px] h-[400px] sm:h-[540px] bg-neutral-300/40 rounded-full blur-[90px] pointer-events-none transform -translate-y-6"
            />

            {/* Stage wrapper for Portrait and all attached floating HUD elements: guarantees identical relative positions on all screen sizes */}
            <div className="relative w-full max-w-[370px] sm:max-w-[460px] md:max-w-[510px] lg:max-w-[530px] h-[550px] sm:h-[630px] md:h-[670px] lg:h-[690px] flex items-center justify-center">

              {/* Central Profile Portrait — zero gap between image and dock bar */}
              <motion.div
                style={{ x: portraitX, y: portraitY }}
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.95, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-x-0 top-0 bottom-2 sm:bottom-3 md:bottom-4 flex items-center justify-center pointer-events-none z-10"
              >
                <Image
                  src="/images/portrait/ashwan-headphones.png"
                  alt="Ashwan Jakkinapally — Creative Video Editor & Graphic Designer"
                  fill
                  priority
                  sizes="(max-width: 768px) 380px, (max-width: 1200px) 500px, 560px"
                  className="object-contain object-bottom drop-shadow-[0_20px_35px_rgba(0,0,0,0.18)]"
                />
              </motion.div>

            {/* =================================================== */}
            {/* FLOATING HUD OVERLAYS WITH CLEAN REVEAL TRANSITIONS */}
            {/* =================================================== */}

            {/* 1. iOS Contextual Popup Menu (Above Cap) */}
            <motion.div
              style={{ x: floatingBadgesX, y: floatingBadgesY }}
              initial={{ opacity: 0, y: -25, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.85, ease: [0.34, 1.56, 0.64, 1] }}
              className="absolute top-[1%] sm:top-[0.5%] left-1/2 -translate-x-1/2 z-30 pointer-events-auto whitespace-nowrap"
            >
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.8, ease: "easeInOut", repeat: Infinity }}
                className="flex flex-col items-center"
              >
                <div className="relative flex items-center bg-white/95 backdrop-blur-xl text-black text-[11px] font-sans-editorial font-medium rounded-lg px-1 py-1 shadow-[0_12px_30px_rgba(0,0,0,0.12),inset_0_1px_1px_rgba(255,255,255,0.9)] border border-black/15 divide-x divide-black/10 overflow-hidden">
                  <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-black/[0.03] to-transparent pointer-events-none" />
                  <span className="px-2.5 py-1 hover:text-neutral-500 cursor-pointer transition-colors relative z-10">
                    Select
                  </span>
                  <span className="px-2.5 py-1 hover:text-neutral-500 cursor-pointer transition-colors relative z-10">
                    Select All
                  </span>
                  <span className="px-2.5 py-1 hover:text-neutral-500 cursor-pointer transition-colors relative z-10">
                    Paste
                  </span>
                  <span className="px-2 py-1 text-[10px] text-neutral-400 relative z-10">
                    ▶
                  </span>
                </div>
                {/* Caret pointer pointing to cap */}
                <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-white" />
              </motion.div>
            </motion.div>

            {/* 2. Languages Pill Capsule (Left of Head) */}
            <motion.div
              style={{ x: floatingBadgesX, y: floatingBadgesY }}
              initial={{ opacity: 0, x: -30, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.9, ease: [0.34, 1.56, 0.64, 1] }}
              className="absolute top-[15%] sm:top-[14%] -left-1 sm:-left-3 md:-left-5 z-30 pointer-events-auto whitespace-nowrap"
            >
              <motion.div
                animate={{ y: [0, -7, 0], x: [0, 3, 0] }}
                transition={{ duration: 4.4, ease: "easeInOut", repeat: Infinity }}
              >
                <div className="relative flex items-center bg-white/95 backdrop-blur-xl text-black text-[11px] font-mono-tech font-bold rounded-lg px-1 py-1 shadow-[0_12px_28px_rgba(0,0,0,0.1)] border border-black/15 divide-x divide-black/10 overflow-hidden">
                  <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-black/[0.03] to-transparent pointer-events-none" />
                  <span className="px-2 py-0.5 text-emerald-600 relative z-10">
                    Telugu
                  </span>
                  <span className="px-2 py-0.5 text-neutral-700 relative z-10">
                    Hindi
                  </span>
                  <span className="px-2 py-0.5 text-neutral-700 relative z-10">
                    English
                  </span>
                </div>
              </motion.div>
            </motion.div>

            {/* 3. Camera Autofocus Viewfinder Box (Subject Face Focus - Moved Upward on Eyes) */}
            <motion.div
              style={{ x: portraitX, y: portraitY }}
              initial={{ opacity: 0, scale: 0.4 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.0, ease: [0.34, 1.56, 0.64, 1] }}
              className="absolute top-[11%] sm:top-[10%] md:top-[11%] left-[34%] sm:left-[36%] z-20 pointer-events-none"
            >
              <motion.div
                animate={{ y: [0, -5, 0], x: [0, 2, 0] }}
                transition={{ duration: 4.0, ease: "easeInOut", repeat: Infinity }}
              >
                <div
                  title="Autofocus view"
                  className="relative w-20 sm:w-24 h-14 sm:h-16 border-2 border-amber-500/90 rounded-xl bg-amber-500/10 shadow-[0_0_20px_rgba(245,158,11,0.25)] backdrop-blur-[1px] pointer-events-auto cursor-pointer hover:bg-amber-500/20 active:scale-95 transition-all"
                >
                  {/* Yellow sun slider control on the right edge */}
                  <div className="absolute -right-3 top-1/2 -translate-y-1/2 flex flex-col items-center gap-1">
                    <Sun className="w-3.5 h-3.5 text-amber-500 fill-amber-500 animate-pulse" />
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* 4. Name Tag & "Who's this?" (Right of Face / Neck) */}
            <motion.div
              style={{ x: floatingBadgesX, y: floatingBadgesY }}
              initial={{ opacity: 0, x: 30, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.95, ease: [0.34, 1.56, 0.64, 1] }}
              className="absolute top-[24%] sm:top-[23%] md:top-[24%] -right-1 sm:-right-3 md:-right-5 z-30 pointer-events-auto whitespace-nowrap"
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4.8, ease: "easeInOut", repeat: Infinity }}
                className="flex flex-col items-end gap-1.5"
              >
                {/* Primary Name Capsule with Gloss */}
                <div className="relative bg-white/95 backdrop-blur-xl text-black font-display font-black text-xs sm:text-sm px-3.5 py-1.5 rounded-xl shadow-[0_12px_28px_rgba(0,0,0,0.1)] border border-black/15 overflow-hidden uppercase tracking-wider">
                  <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-black/[0.03] to-transparent pointer-events-none" />
                  <span className="relative z-10">ASHWAN JAKKINAPALLY</span>
                </div>

                {/* "Who's this?" Interactive Pill */}
                <button
                  type="button"
                  onClick={() => {
                    setWhoIsThisOpen(!whoIsThisOpen);
                  }}
                  className="relative flex items-center gap-1.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-[10px] font-mono-tech px-2.5 py-1 rounded-lg border border-black/10 shadow-sm transition-all hover:scale-105 cursor-pointer overflow-hidden font-bold"
                >
                  <span className="relative z-10">Who&apos;s this?</span>
                  <span className="w-3.5 h-3.5 rounded-full bg-black/10 flex items-center justify-center text-[9px] relative z-10">
                    {whoIsThisOpen ? "✕" : "i"}
                  </span>
                </button>

                {/* Bio Tooltip Popover */}
                <AnimatePresence>
                  {whoIsThisOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="w-56 p-3.5 bg-white/98 backdrop-blur-2xl text-black text-[11px] rounded-xl border border-black/15 shadow-[0_20px_45px_rgba(0,0,0,0.15)] mt-1 text-left"
                    >
                      <p className="font-bold text-black mb-1">
                        Creative Video Editor
                      </p>
                      <p className="text-neutral-600 leading-snug">
                        Editor & graphic designer at TAC. Specializing in rhythm cutting, commercial motion, and cinematic wedding storytelling.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>

            {/* 5. Floating Location Capsule (Lower Right of Subject) */}
            <motion.div
              style={{ x: floatingBadgesX, y: floatingBadgesY }}
              initial={{ opacity: 0, y: 25, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.05, ease: [0.34, 1.56, 0.64, 1] }}
              className="absolute bottom-[23%] sm:bottom-[21%] -right-1 sm:right-1 md:right-2 z-30 pointer-events-auto whitespace-nowrap"
            >
              <motion.div
                animate={{ y: [0, 8, 0], x: [0, -3, 0] }}
                transition={{ duration: 5.0, ease: "easeInOut", repeat: Infinity }}
              >
                <div className="relative flex items-center gap-2.5 bg-white/95 backdrop-blur-xl text-black px-4 py-2 rounded-full shadow-[0_12px_28px_rgba(0,0,0,0.1)] border border-black/15 transition-transform hover:scale-105 overflow-hidden">
                  <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-black/[0.03] to-transparent pointer-events-none" />
                  <MapPin className="w-4 h-4 text-black fill-black shrink-0 relative z-10" />
                  <div className="flex flex-col text-left relative z-10">
                    <span className="font-mono-tech text-[9px] uppercase tracking-wider text-neutral-500 font-bold leading-none">
                      Location
                    </span>
                    <span className="font-sans-editorial font-bold text-xs text-neutral-900 leading-tight">
                      Beeramguda, Telangana
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* 6. Floating Mobile Number / Call Capsule (Lower Center, Above Dock) */}
            {!callDismissed && (
              <motion.div
                initial={{ opacity: 0, y: 35, scale: 0.85 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.65, delay: 1.1, ease: [0.34, 1.56, 0.64, 1] }}
                className="absolute bottom-[13%] sm:bottom-[12%] left-1/2 -translate-x-1/2 z-30 pointer-events-auto whitespace-nowrap"
              >
                <motion.div
                  animate={{
                    y: [0, -8, 0],
                    scale: [1, 1.015, 1],
                  }}
                  transition={{
                    duration: 3.6,
                    ease: "easeInOut",
                    repeat: Infinity,
                  }}
                >
                  <div className="relative flex items-center gap-3 bg-white/95 backdrop-blur-2xl text-black px-4 py-2 rounded-full shadow-[0_15px_35px_rgba(0,0,0,0.12)] border border-black/15 transition-all hover:border-black/30 overflow-hidden">
                    {/* Gloss highlight reflection */}
                    <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-black/[0.03] to-transparent pointer-events-none" />

                    {/* Avatar Thumbnail */}
                    <div className="relative w-7 h-7 rounded-full overflow-hidden bg-neutral-100 border border-black/15 shrink-0 shadow-inner z-10">
                      <Image
                        src="/images/portrait/ashwan-headphones.png"
                        alt="Ashwan"
                        fill
                        className="object-cover object-top"
                      />
                    </div>

                    {/* Phone Number / WhatsApp Direct */}
                    <a
                      href={PROFILE_DATA.contact.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Chat directly on WhatsApp"
                      className="font-mono-tech text-xs sm:text-sm font-bold tracking-tight text-black hover:text-emerald-700 transition-colors relative z-10"
                    >
                      {PROFILE_DATA.contact.phoneDisplay}
                    </a>

                    {/* Red Decline Button */}
                    <button
                      type="button"
                      onClick={() => {
                        setCallDismissed(true);
                      }}
                      title="Dismiss dialer"
                      className="w-6 h-6 rounded-full bg-red-600 hover:bg-red-700 flex items-center justify-center text-white transition-transform hover:scale-115 active:scale-90 shadow-sm relative z-10"
                    >
                      <PhoneOff className="w-3 h-3" />
                    </button>

                    {/* Green Call Button */}
                    <button
                      type="button"
                      onClick={handleCallAccept}
                      title="Call Ashwan"
                      className="w-6 h-6 rounded-full bg-emerald-500 hover:bg-emerald-600 flex items-center justify-center text-white transition-transform hover:scale-115 active:scale-90 shadow-[0_0_15px_rgba(16,185,129,0.5)] relative z-10 animate-pulse"
                    >
                      <Phone className="w-3 h-3 fill-white" />
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            )}

            {/* ======================================================== */}
            {/* 7. GLOSSY DOCK WITH STAGGERED REVEAL ON ALL CONTENTS    */}
            {/* ======================================================== */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.95, ease: [0.16, 1, 0.3, 1] }}
              className="absolute bottom-0 left-1/2 -translate-x-1/2 z-30 pointer-events-auto w-auto max-w-[98%]"
            >
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 5.0, ease: "easeInOut", repeat: Infinity }}
                className="flex flex-col items-center"
              >
                {/* Tooltip Badge above Dock with reveal */}
                {dockTooltip && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.4, delay: 1.8 }}
                    className="mb-1.5 flex items-center gap-1.5 bg-black text-[#C8FF00] font-mono-tech text-[10px] px-2.5 py-0.5 rounded-md border border-black shadow-md font-bold"
                  >
                    <span
                      onClick={() => scrollTo("#work")}
                      className="cursor-pointer hover:underline"
                    >
                      Portfolio
                    </span>
                    <button
                      type="button"
                      onClick={() => setDockTooltip(false)}
                      className="text-white hover:text-[#FF6A00] ml-1 cursor-pointer"
                    >
                      ✕
                    </button>
                  </motion.div>
                )}

                {/* Ultra-Glossy Glass Dock Container */}
                <div className="relative flex items-center gap-2 bg-white/85 backdrop-blur-2xl px-3 py-2.5 sm:px-4 sm:py-3 rounded-2xl sm:rounded-3xl border border-black/10 shadow-[0_20px_50px_rgba(0,0,0,0.12),inset_0_1px_1px_rgba(255,255,255,0.9)] overflow-hidden">
                  
                  {/* Top Glass Highlight Specular Reflection */}
                  <div className="absolute inset-x-0 top-0 h-[45%] bg-gradient-to-b from-black/[0.02] to-transparent pointer-events-none rounded-t-2xl sm:rounded-t-3xl" />

                  {/* Dock Contents Sequenced Pop-in Reveal */}
                  <div className="flex items-center gap-1.5 sm:gap-2 relative z-10">
                    {dockItems.map((item, idx) => {
                      const itemDelay = 1.15 + idx * 0.045;

                      if (item.type === "divider") {
                        return (
                          <motion.div
                            key={item.id}
                            initial={{ opacity: 0, scaleY: 0 }}
                            animate={{ opacity: 1, scaleY: 1 }}
                            transition={{ duration: 0.35, delay: itemDelay }}
                            className="w-[1.5px] h-8 bg-gradient-to-b from-transparent via-black/20 to-transparent mx-1 origin-center"
                          />
                        );
                      }

                      const handleItemClick = () => {
                        if (item.type === "ae" || item.type === "ps" || item.type === "ai") {
                          scrollTo("#tools");
                        } else if (item.type === "warn") {
                          scrollTo("#contact");
                        } else if (
                          item.type === "shorts" ||
                          item.type === "photos" ||
                          item.type === "psd" ||
                          item.type === "curve" ||
                          item.type === "behance"
                        ) {
                          scrollTo("#work");
                        }
                      };

                      return (
                        <motion.div
                          key={item.id}
                          initial={{ opacity: 0, y: 16, scale: 0.55 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          transition={{
                            duration: 0.45,
                            delay: itemDelay,
                            ease: [0.34, 1.56, 0.64, 1],
                          }}
                          onClick={handleItemClick}
                        >
                          {item.type === "ae" && (
                            <div
                              title={item.title}
                              className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#00005B] border border-[#9999FF]/40 shadow-[0_4px_14px_rgba(153,153,255,0.35),inset_0_1px_1px_rgba(255,255,255,0.3)] flex items-center justify-center transition-all hover:scale-120 hover:-translate-y-1 cursor-pointer active:scale-95 overflow-hidden"
                            >
                              <svg viewBox="0 0 36 36" className="w-full h-full p-1" fill="none">
                                <rect width="36" height="36" rx="8" fill="#00005B" />
                                <path
                                  d="M14.5 24H11.8L10.9 21.2H7.1L6.2 24H3.6L7.8 12.5H10.3L14.5 24ZM7.9 18.8H10.1L9 15.2L7.9 18.8ZM23.4 19.8C23.4 19.3 23.2 18.4 22 18.4C20.5 18.4 19.7 19.3 19.6 19.8H23.4ZM23.4 21.8H19.6C19.7 23.1 20.8 24.1 22.3 24.1C23.2 24.1 23.9 23.7 24.3 23.2L25.8 24.2C25 25.3 23.7 26.1 22.1 26.1C19.5 26.1 17.5 24.3 17.5 21.4C17.5 18.6 19.5 16.8 22.1 16.8C24.9 16.8 25.9 19 25.9 21.4C25.9 21.6 25.9 21.7 25.9 21.8H23.4Z"
                                  fill="#9999FF"
                                />
                              </svg>
                            </div>
                          )}

                          {item.type === "ps" && (
                            <div
                              title={item.title}
                              className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#001E36] border border-[#31A8FF]/50 shadow-[0_4px_14px_rgba(49,168,255,0.35),inset_0_1px_1px_rgba(255,255,255,0.3)] flex items-center justify-center transition-all hover:scale-120 hover:-translate-y-1 cursor-pointer active:scale-95 overflow-hidden"
                            >
                              <svg viewBox="0 0 36 36" className="w-full h-full p-1" fill="none">
                                <rect width="36" height="36" rx="8" fill="#001E36" />
                                <path
                                  d="M7.5 24V12.5H12.8C15.5 12.5 17 13.9 17 16C17 18.1 15.5 19.5 12.8 19.5H9.8V24H7.5ZM9.8 17.3H12.5C13.9 17.3 14.6 16.8 14.6 16C14.6 15.2 13.9 14.7 12.5 14.7H9.8V17.3ZM24.8 18.1C24.8 16.7 23.5 16 21.8 16C19.9 16 18.7 16.8 18.4 17.9L20.4 18.7C20.6 18.1 21.1 17.8 21.8 17.8C22.5 17.8 23 18 23 18.5C23 18.8 22.7 19 22 19.3L20.6 19.8C19.1 20.3 18.4 21.1 18.4 22.3C18.4 23.7 19.7 24.6 21.5 24.6C23 24.6 24.1 23.9 24.6 22.8V24.3H26.6V20.4C26.6 18.9 25.9 18.1 24.8 18.1Z"
                                  fill="#31A8FF"
                                />
                              </svg>
                            </div>
                          )}

                          {item.type === "ai" && (
                            <div
                              title={item.title}
                              className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#331600] border border-[#FF9A00]/50 shadow-[0_4px_14px_rgba(255,154,0,0.35),inset_0_1px_1px_rgba(255,255,255,0.3)] flex items-center justify-center transition-all hover:scale-120 hover:-translate-y-1 cursor-pointer active:scale-95 overflow-hidden"
                            >
                              <svg viewBox="0 0 36 36" className="w-full h-full p-1" fill="none">
                                <rect width="36" height="36" rx="8" fill="#331600" />
                                <path
                                  d="M14.5 24H12L11.1 21.2H7.5L6.6 24H4.2L8.2 12.5H10.5L14.5 24ZM8.2 19H10.4L9.3 15.4L8.2 19ZM19.6 14.6C18.8 14.6 18.2 14 18.2 13.2C18.2 12.4 18.8 11.8 19.6 11.8C20.4 11.8 21 12.4 21 13.2C21 14 20.4 14.6 19.6 14.6ZM18.5 24V16.2H20.7V24H18.5Z"
                                  fill="#FF9A00"
                                />
                              </svg>
                            </div>
                          )}

                          {item.type === "warn" && (
                            <div
                              title={item.title}
                              className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-neutral-100 border border-amber-400/50 shadow-sm flex items-center justify-center text-amber-500 transition-all hover:scale-120 hover:-translate-y-1 cursor-pointer active:scale-95"
                            >
                              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
                                <path d="M12 2.5L22 20H2L12 2.5Z" fill="#F59E0B" fillOpacity="0.2" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M12 8.5V13.5" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
                                <circle cx="12" cy="17" r="1.2" fill="#F59E0B" />
                              </svg>
                            </div>
                          )}

                          {item.type === "photos" && (
                            <div
                              title={item.title}
                              className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-white shadow-[0_4px_14px_rgba(0,0,0,0.15),inset_0_1px_1px_rgba(255,255,255,0.9)] flex items-center justify-center transition-all hover:scale-120 hover:-translate-y-1 cursor-pointer overflow-hidden active:scale-95 border border-black/10"
                            >
                              <svg viewBox="0 0 36 36" className="w-6 h-6" fill="none">
                                <g transform="translate(18, 18)">
                                  <ellipse cx="0" cy="-8" rx="2.8" ry="6.6" fill="#FFCC00" fillOpacity="0.9" />
                                  <ellipse cx="0" cy="-8" rx="2.8" ry="6.6" fill="#FF9500" fillOpacity="0.9" transform="rotate(45)" />
                                  <ellipse cx="0" cy="-8" rx="2.8" ry="6.6" fill="#FF2D55" fillOpacity="0.9" transform="rotate(90)" />
                                  <ellipse cx="0" cy="-8" rx="2.8" ry="6.6" fill="#AF52DE" fillOpacity="0.9" transform="rotate(135)" />
                                  <ellipse cx="0" cy="-8" rx="2.8" ry="6.6" fill="#5856D6" fillOpacity="0.9" transform="rotate(180)" />
                                  <ellipse cx="0" cy="-8" rx="2.8" ry="6.6" fill="#007AFF" fillOpacity="0.9" transform="rotate(225)" />
                                  <ellipse cx="0" cy="-8" rx="2.8" ry="6.6" fill="#5AC8FA" fillOpacity="0.9" transform="rotate(270)" />
                                  <ellipse cx="0" cy="-8" rx="2.8" ry="6.6" fill="#34C759" fillOpacity="0.9" transform="rotate(315)" />
                                  <circle cx="0" cy="0" r="3" fill="#FFFFFF" />
                                </g>
                              </svg>
                            </div>
                          )}

                          {item.type === "curve" && (
                            <div
                              title={item.title}
                              className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#10B981] shadow-[0_4px_14px_rgba(16,185,129,0.3),inset_0_1px_1px_rgba(255,255,255,0.45)] flex items-center justify-center transition-all hover:scale-120 hover:-translate-y-1 cursor-pointer active:scale-95 border border-[#34D399]/40 overflow-hidden"
                            >
                              <svg viewBox="0 0 32 32" className="w-5 h-5 sm:w-6 sm:h-6" fill="none">
                                <path
                                  d="M7 16.5C10 12.5 12.5 12.5 15.5 16C18.5 19.5 21 19.5 25 15.5"
                                  stroke="#000000"
                                  strokeWidth="3.2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </div>
                          )}

                          {item.type === "instagram" && (
                            <a
                              href={PROFILE_DATA.contact.instagramUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              title={item.title}
                              className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl shadow-[0_4px_14px_rgba(225,48,108,0.35),inset_0_1px_1px_rgba(255,255,255,0.4)] flex items-center justify-center text-white transition-all hover:scale-120 hover:-translate-y-1 active:scale-95 block overflow-hidden"
                              style={{
                                background:
                                  "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
                              }}
                            >
                              <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-5.5 sm:h-5.5" fill="none">
                                <rect x="3" y="3" width="18" height="18" rx="5" stroke="#FFFFFF" strokeWidth="2" />
                                <circle cx="12" cy="12" r="4.2" stroke="#FFFFFF" strokeWidth="2" />
                                <circle cx="17.2" cy="6.8" r="1.1" fill="#FFFFFF" />
                              </svg>
                            </a>
                          )}

                          {item.type === "shorts" && (
                            <div
                              title={item.title}
                              className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-neutral-900 border border-black shadow-sm flex items-center justify-center transition-all hover:scale-120 hover:-translate-y-1 cursor-pointer active:scale-95 overflow-hidden"
                            >
                              <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-4.5 sm:h-4.5" fill="none">
                                <path d="M8 6.5L18 12L8 17.5V6.5Z" fill="#C8FF00" />
                              </svg>
                            </div>
                          )}

                          {item.type === "behance" && (
                            <div
                              title={item.title}
                              className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#0057FF] shadow-[0_4px_14px_rgba(0,87,255,0.35),inset_0_1px_1px_rgba(255,255,255,0.4)] flex items-center justify-center transition-all hover:scale-120 hover:-translate-y-1 cursor-pointer active:scale-95 overflow-hidden"
                            >
                              <svg viewBox="0 0 32 32" className="w-5 h-5 sm:w-6 sm:h-6" fill="none">
                                <path
                                  d="M12.8 14.2C13.5 13.7 13.9 12.9 13.9 12C13.9 10.3 12.6 9.4 10.5 9.4H6.5V22H10.8C12.9 22 14.4 20.9 14.4 19.1C14.4 17.8 13.7 16.9 12.8 16.4ZM8.8 11.2H10.3C11.4 11.2 12 11.7 12 12.6C12 13.5 11.4 14 10.3 14H8.8V11.2ZM10.5 20.2H8.8V15.7H10.5C11.8 15.7 12.5 16.4 12.5 17.9C12.5 19.4 11.8 20.2 10.5 20.2ZM20.8 11.8H24.2V10.2H20.8V11.8ZM24.4 16.8C24.4 14.3 22.8 12.8 20.3 12.8C17.8 12.8 16.2 14.5 16.2 17.5C16.2 20.4 17.8 22.2 20.5 22.2C22.6 22.2 23.9 21.1 24.3 19.7H22.3C22 20.3 21.3 20.7 20.4 20.7C19.1 20.7 18.3 19.8 18.3 18.2H24.4V16.8ZM18.3 16.7C18.4 15.3 19.2 14.4 20.3 14.4C21.4 14.4 22.2 15.3 22.3 16.7H18.3Z"
                                  fill="#FFFFFF"
                                />
                              </svg>
                            </div>
                          )}

                          {item.type === "psd" && (
                            <div
                              title={item.title}
                              className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#0F223D] border border-blue-400/50 shadow-[0_4px_12px_rgba(30,144,255,0.25),inset_0_1px_1px_rgba(255,255,255,0.25)] flex items-center justify-center transition-all hover:scale-120 hover:-translate-y-1 cursor-pointer active:scale-95 overflow-hidden p-1"
                            >
                              <svg viewBox="0 0 28 32" className="w-5 h-6" fill="none">
                                <path d="M4 2C2.9 2 2 2.9 2 4V28C2 29.1 2.9 30 4 30H24C25.1 30 26 29.1 26 28V10L18 2H4Z" fill="#0A1828" stroke="#31A8FF" strokeWidth="1.5" />
                                <path d="M18 2V10H26" fill="#153350" stroke="#31A8FF" strokeWidth="1.5" />
                                <rect x="6" y="14" width="16" height="11" rx="2" fill="#001E36" />
                                <text x="8.5" y="22.5" fill="#31A8FF" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="8" letterSpacing="-0.5">Ps</text>
                              </svg>
                            </div>
                          )}
                        </motion.div>
                      );
                    })}
                  </div>

                </div>
              </motion.div>
            </motion.div>

            </div>

          </div>

          {/* ======================================================== */}
          {/* RIGHT COLUMN: Floating Work Experience & Approach Cards  */}
          {/* ======================================================== */}
          <div className="lg:col-span-3 flex flex-col sm:grid sm:grid-cols-2 lg:flex lg:flex-col justify-between gap-6 z-20 order-3">
            
            {/* CARD 3: "Work Experience" Card with clean reveal entrance */}
            <motion.div
              style={{ x: cardTopRightX, y: cardTopRightY }}
              initial={{ opacity: 0, x: 60, scale: 0.92 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.85, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="w-full"
            >
              <motion.div
                animate={{
                  y: [0, -9, 0],
                  rotate: [0, 0.4, 0],
                }}
                transition={{
                  duration: 5.8,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
                className="relative w-full bg-white/95 backdrop-blur-xl text-[#0A0A0A] rounded-2xl p-5 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.08),0_1px_3px_rgba(0,0,0,0.04)] border border-black/10 overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:border-black/30 hover:shadow-[0_28px_65px_rgba(0,0,0,0.16)] glossy-shine-light glossy-rim-light"
              >
                {/* Top Glass Highlight Reflection */}
                <div className="absolute inset-x-0 top-0 h-[40%] bg-gradient-to-b from-black/[0.02] to-transparent pointer-events-none" />

                {/* Solid Orange Top Accent Stripe */}
                <div className="absolute top-0 inset-x-0 h-2 bg-[#FF6A00] shadow-[0_2px_10px_rgba(255,106,0,0.3)]" />

                <div className="pt-2 relative z-10">
                  <h2 className="font-display text-xl sm:text-2xl font-black text-[#0A0A0A] tracking-tight leading-tight mb-3 uppercase">
                    WORK<br />EXPERIENCE
                  </h2>

                  <div className="space-y-3">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="font-sans-editorial text-xs font-bold text-black">
                          TAC — The Art Code
                        </span>
                        <span className="font-mono-tech text-[10px] bg-neutral-100 text-black border border-black/10 px-1.5 py-0.5 rounded font-bold">
                          2026 – now
                        </span>
                      </div>
                      <ul className="mt-2 space-y-1.5 text-[11px] text-[#52525B] font-sans-editorial list-disc list-inside leading-relaxed">
                        <li>Visual content development for high-retention digital marketing campaigns.</li>
                        <li>Creative video editing, rhythmic pacing, and motion graphics.</li>
                        <li>Art direction for cinematic wedding films and brand stories.</li>
                        <li>Color correction, mood grading, and broadcast deliverables.</li>
                      </ul>
                    </div>

                    <div className="pt-2 border-t border-black/10">
                      <div className="flex items-center justify-between">
                        <span className="font-sans-editorial text-xs font-bold text-neutral-800">
                          Freelance Video Editor
                        </span>
                        <span className="font-mono-tech text-[10px] text-neutral-500 font-bold">
                          2025
                        </span>
                      </div>
                      <p className="text-[11px] text-[#52525B] leading-snug mt-1">
                        Wedding teaser cuts, music songs sync, and viral YouTube edits.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* CARD 4: "Approach" Card with clean reveal entrance */}
            <motion.div
              style={{ x: cardBottomRightX, y: cardBottomRightY }}
              initial={{ opacity: 0, x: 60, y: 30, scale: 0.92 }}
              animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
              transition={{ duration: 0.85, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="w-full"
            >
              <motion.div
                animate={{
                  y: [0, 9, 0],
                  rotate: [0, -0.4, 0],
                }}
                transition={{
                  duration: 6.5,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
                className="relative w-full bg-white/95 backdrop-blur-xl text-[#0A0A0A] rounded-2xl p-5 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.08),0_1px_3px_rgba(0,0,0,0.04)] border border-black/10 overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:border-black/30 hover:shadow-[0_28px_65px_rgba(0,0,0,0.16)] glossy-shine-light glossy-rim-light"
              >
                {/* Top Glass Highlight Reflection */}
                <div className="absolute inset-x-0 top-0 h-[40%] bg-gradient-to-b from-black/[0.02] to-transparent pointer-events-none" />

                {/* Solid Orange Top Accent Stripe */}
                <div className="absolute top-0 inset-x-0 h-2 bg-[#FF6A00] shadow-[0_2px_10px_rgba(255,106,0,0.3)]" />

                <div className="pt-2 text-center flex flex-col items-center relative z-10">
                  <h2 className="font-display text-xl sm:text-2xl font-black text-[#0A0A0A] tracking-tight leading-tight mb-3 uppercase">
                    APPROACH
                  </h2>

                  {/* Stacked Clean Approach Disciplines matching Reference */}
                  <div className="space-y-1.5 text-xs sm:text-sm font-sans-editorial font-bold text-neutral-700 uppercase tracking-wide">
                    <p className="hover:text-black transition-colors cursor-default">CREATIVE DIRECTION</p>
                    <p className="hover:text-black transition-colors cursor-default">SOCIAL MEDIA & REELS</p>
                    <p className="hover:text-black transition-colors cursor-default">VISUAL STORYTELLING</p>
                    <p className="hover:text-black transition-colors cursor-default">MOTION GRAPHICS</p>
                    <p className="hover:text-black transition-colors cursor-default">COLOR FINISHING</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

          </div>

        </div>

      </div>

      {/* ======================================================== */}
      {/* SIGNATURE ACID-LIME MARQUEE TICKER ATTACHED AT BASE      */}
      {/* Infinite Seamless Looping Marquee                        */}
      {/* ======================================================== */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="group relative w-full overflow-hidden bg-[#C8FF00] py-3.5 border-t-2 border-b-2 border-black font-sans-editorial font-black select-none text-black flex"
      >
        {/* Track 1 */}
        <div
          className="flex shrink-0 items-center gap-8 min-w-full group-hover:[animation-play-state:paused]"
          style={{
            animation: "ticker-infinite 28s linear infinite",
            willChange: "transform",
          }}
        >
          {[1, 2, 3].map((idx) => (
            <div key={`t1-${idx}`} className="flex items-center gap-8 text-xl sm:text-2xl uppercase tracking-wider shrink-0 pr-8">
              <span className="font-black text-2xl sm:text-3xl">ABOUT ME</span>
              <span className="text-xl">✳</span>
              <span className="font-black">2026</span>
              <span className="text-xl font-normal">⬡</span>
              <span className="text-xs sm:text-sm font-bold font-mono-tech normal-case tracking-normal max-w-xs text-neutral-900 leading-tight">
                &ldquo;You need someone that&apos;s able to understand and execute your vision.&rdquo;
              </span>
              <span className="text-xl">✳</span>
              <span className="font-black">2026</span>
              <span className="text-xl">✳</span>
            </div>
          ))}
        </div>

        {/* Track 2 (Clone for infinite gapless seamless looping) */}
        <div
          aria-hidden="true"
          className="flex shrink-0 items-center gap-8 min-w-full group-hover:[animation-play-state:paused]"
          style={{
            animation: "ticker-infinite 28s linear infinite",
            willChange: "transform",
          }}
        >
          {[1, 2, 3].map((idx) => (
            <div key={`t2-${idx}`} className="flex items-center gap-8 text-xl sm:text-2xl uppercase tracking-wider shrink-0 pr-8">
              <span className="font-black text-2xl sm:text-3xl">ABOUT ME</span>
              <span className="text-xl">✳</span>
              <span className="font-black">2026</span>
              <span className="text-xl font-normal">⬡</span>
              <span className="text-xs sm:text-sm font-bold font-mono-tech normal-case tracking-normal max-w-xs text-neutral-900 leading-tight">
                &ldquo;You need someone that&apos;s able to understand and execute your vision.&rdquo;
              </span>
              <span className="text-xl">✳</span>
              <span className="font-black">2026</span>
              <span className="text-xl">✳</span>
            </div>
          ))}
        </div>

        <style jsx>{`
          @keyframes ticker-infinite {
            0% {
              transform: translate3d(0, 0, 0);
            }
            100% {
              transform: translate3d(-100%, 0, 0);
            }
          }
        `}</style>
      </motion.div>

    </section>
  );
}
