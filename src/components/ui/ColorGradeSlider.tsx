"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { Sliders, Sparkles, Film, Eye, Wand2, Layers, CheckCircle2 } from "lucide-react";

interface GradeScene {
  id: string;
  tag: string;
  title: string;
  category: string;
  src: string;
  lut: string;
  colorSpace: string;
  camera: string;
  iso: string;
  notes: string;
}

const SCENES: GradeScene[] = [
  {
    id: "narrative",
    tag: "SCENE 01",
    title: "Cinematic 35mm Narrative",
    category: "FILM EMULATION",
    src: "/images/color-grade/scene-narrative.jpg",
    lut: "Kodak Vision3 500T 2383 Print",
    colorSpace: "ACEScc -> Rec.709 Cinema (2.4)",
    camera: "ARRI Alexa Mini LF // Cooke Anamorphic",
    iso: "ISO 800 • T2.0 • 24 FPS • 5600K",
    notes: "Shadow lift, warm skin isolation, halation bloom, and roll-off contrast curve.",
  },
  {
    id: "commercial",
    tag: "SCENE 02",
    title: "Commercial Urban Neo-Night",
    category: "COMMERCIAL COLOR",
    src: "/images/color-grade/scene-commercial.jpg",
    lut: "Custom Teal & Amber High Contrast",
    colorSpace: "Sony S-Log3 -> Rec.709 Wide Gamut",
    camera: "Sony FX6 // 35mm G-Master Cinema",
    iso: "ISO 12800 • f/1.8 • 1/48s • 4300K",
    notes: "Asphalt reflection separation, neon highlight compression, and deep obsidian blacks.",
  },
];

export function ColorGradeSlider() {
  const [activeSceneIndex, setActiveSceneIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const scene = SCENES[activeSceneIndex];

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderPosition(percentage);
    },
    []
  );

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (!isDragging) return;
      handleMove(e.touches[0].clientX);
    },
    [isDragging, handleMove]
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    },
    [isDragging, handleMove]
  );

  const handleInteractionEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleInteractionEnd);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleInteractionEnd);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleInteractionEnd);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleInteractionEnd);
    };
  }, [isDragging, handleMouseMove, handleTouchMove, handleInteractionEnd]);

  const onContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    handleMove(e.clientX);
  };

  return (
    <div className="w-full max-w-[1400px] mx-auto my-14">
      {/* ── Header Title & Telemetry ── */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 pb-4 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 font-mono-tech text-xs text-[#C8FF00] font-black uppercase tracking-widest mb-1.5">
            <Sliders className="w-3.5 h-3.5" />
            <span>DAVINCI RESOLVE COLOR FINISH LAB</span>
          </div>
          <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-white">
            RAW CAMERA LOG <span className="text-[#C8FF00]">VS.</span> FINAL MASTER
          </h3>
          <p className="font-sans-editorial text-xs sm:text-sm text-neutral-400 mt-1 max-w-xl">
            Drag the interactive slider back and forth to inspect flat sensor log dynamic range transformed into punchy, calibrated cinema masters.
          </p>
        </div>

        {/* Scene Selector Buttons */}
        <div className="flex items-center gap-2 bg-[#141418] p-1.5 rounded-full border border-white/15 self-start md:self-auto shadow-xl">
          {SCENES.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => {
                setActiveSceneIndex(idx);
                setSliderPosition(50);
              }}
              className={`px-3.5 sm:px-4 py-2 rounded-full font-mono-tech text-xs uppercase font-extrabold transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                activeSceneIndex === idx
                  ? "bg-[#C8FF00] text-black shadow-md scale-[1.02]"
                  : "text-neutral-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <Film className="w-3 h-3" />
              <span>{s.tag}</span>
            </button>
          ))}
        </div>
      </div>

      {/* ── Main Comparison Frame ── */}
      <div
        ref={containerRef}
        onClick={onContainerClick}
        onMouseDown={(e) => {
          setIsDragging(true);
          handleMove(e.clientX);
        }}
        onTouchStart={(e) => {
          setIsDragging(true);
          handleMove(e.touches[0].clientX);
        }}
        className="relative w-full aspect-video sm:aspect-[16/9] rounded-2xl sm:rounded-3xl overflow-hidden cursor-ew-resize select-none border-2 border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.8)] bg-black group"
      >
        {/* ── LAYER 1: RAW LOG IMAGE (Underneath, full width) ── */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          <Image
            src={scene.src}
            alt="Raw Camera Log View"
            fill
            sizes="(max-width: 1400px) 100vw, 1400px"
            priority
            className="object-cover"
            style={{
              // Authentic S-Log3 / LogC flat profile: lifted blacks, muted contrast, desaturated chroma
              filter: "saturate(0.32) contrast(0.66) brightness(1.22) sepia(0.06)",
            }}
          />

          {/* Raw Log On-Screen Display HUD */}
          <div className="absolute inset-0 p-3 sm:p-6 flex flex-col justify-between pointer-events-none text-white/90 font-mono-tech text-[10px] sm:text-xs">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10 font-bold">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                RAW LOG // BYPASS
              </span>
              <span className="bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10 text-neutral-300">
                GAMMA: S-LOG3
              </span>
            </div>

            <div className="flex items-center justify-between text-neutral-400">
              <span className="bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10">
                {scene.camera}
              </span>
              <span className="hidden sm:inline-block bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10">
                {scene.iso}
              </span>
            </div>
          </div>
        </div>

        {/* ── LAYER 2: REC.709 FINAL COLOR GRADE (Clipped by sliderPosition) ── */}
        <div
          className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden"
          style={{
            clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
          }}
        >
          <Image
            src={scene.src}
            alt="Rec.709 Master Cinema Grade"
            fill
            sizes="(max-width: 1400px) 100vw, 1400px"
            priority
            className="object-cover"
          />

          {/* Master Grade On-Screen Display HUD */}
          <div className="absolute inset-0 p-3 sm:p-6 flex flex-col justify-between pointer-events-none text-white font-mono-tech text-[10px] sm:text-xs">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5 bg-[#C8FF00] text-black px-2.5 py-1 rounded-md font-black shadow-lg">
                <Sparkles className="w-3 h-3" />
                FINAL CINEMA MASTER
              </span>
              <span className="bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/15 text-[#C8FF00] font-bold">
                REC.709 MASTER
              </span>
            </div>

            <div className="flex items-center justify-between text-neutral-200">
              <span className="bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/15 font-bold">
                LUT: {scene.lut}
              </span>
              <span className="hidden sm:inline-block bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/15 text-[#C8FF00]">
                4K PRORES 422 HQ
              </span>
            </div>
          </div>
        </div>

        {/* ── LAYER 3: INTERACTIVE DIVIDER LINE & DRAGGER HANDLE ── */}
        <div
          className="absolute top-0 bottom-0 pointer-events-none z-30"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Vertical Split Line with Glow */}
          <div className="absolute top-0 bottom-0 -left-[1px] w-[2px] bg-white shadow-[0_0_15px_rgba(200,255,0,0.8),0_0_2px_#fff]" />

          {/* Central Handle Button */}
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 pointer-events-auto cursor-ew-resize">
            <div
              className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/90 text-[#C8FF00] border-2 border-[#C8FF00] flex items-center justify-center shadow-[0_0_25px_rgba(200,255,0,0.6)] backdrop-blur-md transition-transform duration-150 ${
                isDragging ? "scale-110 ring-4 ring-[#C8FF00]/30" : "group-hover:scale-105"
              }`}
            >
              <div className="flex items-center gap-1 text-[11px] font-mono-tech font-black tracking-tighter select-none">
                <span>◀</span>
                <span>▶</span>
              </div>
            </div>

            {/* Floating Split Badge */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-black/85 backdrop-blur-md text-[9px] font-mono-tech text-white px-2 py-0.5 rounded-full border border-white/20 whitespace-nowrap pointer-events-none">
              {Math.round(sliderPosition)}% GRADE
            </div>
          </div>
        </div>
      </div>

      {/* ── Quick Snaps & Telemetry Bar Below Frame ── */}
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 font-mono-tech text-xs text-neutral-400">
        {/* Preset Percentage Snaps */}
        <div className="flex items-center gap-2">
          <span className="text-[10px] uppercase text-neutral-500 font-bold hidden sm:inline">QUICK SNAP:</span>
          <button
            onClick={() => setSliderPosition(0)}
            className={`px-2.5 py-1 rounded-md text-[11px] border border-white/10 hover:border-white/30 transition-colors cursor-pointer ${
              sliderPosition === 0 ? "bg-white text-black font-black" : "bg-[#141418] text-neutral-300"
            }`}
          >
            100% RAW LOG
          </button>
          <button
            onClick={() => setSliderPosition(50)}
            className={`px-2.5 py-1 rounded-md text-[11px] border border-white/10 hover:border-white/30 transition-colors cursor-pointer ${
              sliderPosition === 50 ? "bg-[#C8FF00] text-black font-black" : "bg-[#141418] text-neutral-300"
            }`}
          >
            50 / 50 SPLIT
          </button>
          <button
            onClick={() => setSliderPosition(100)}
            className={`px-2.5 py-1 rounded-md text-[11px] border border-white/10 hover:border-white/30 transition-colors cursor-pointer ${
              sliderPosition === 100 ? "bg-white text-black font-black" : "bg-[#141418] text-neutral-300"
            }`}
          >
            100% MASTER
          </button>
        </div>

        {/* Technical Color Specs */}
        <div className="flex flex-wrap items-center gap-3 text-[11px]">
          <span className="flex items-center gap-1.5 text-neutral-300">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#C8FF00]" />
            ACES 1.3 COLOR MANAGED
          </span>
          <span className="text-white/20">•</span>
          <span className="text-neutral-400">{scene.colorSpace}</span>
        </div>
      </div>

      {/* Colorist Notes Card */}
      <div className="mt-3.5 p-3.5 rounded-xl bg-[#141418] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono-tech">
        <div className="flex items-center gap-2 text-neutral-300">
          <Layers className="w-4 h-4 text-[#C8FF00] shrink-0" />
          <span className="text-white font-bold">{scene.title}:</span>
          <span className="text-neutral-400 font-sans-editorial">{scene.notes}</span>
        </div>
        <span className="text-[10px] text-[#C8FF00] font-black uppercase tracking-wider shrink-0">
          3-WAY WHEELS + CURVES + HALATION
        </span>
      </div>
    </div>
  );
}
