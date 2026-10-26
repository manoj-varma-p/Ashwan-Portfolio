"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, ArrowUpRight } from "lucide-react";
import { PROFILE_DATA } from "@/data/profile";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

export function ServicesSection() {
  const [activeServiceId, setActiveServiceId] = useState<string>(
    PROFILE_DATA.services[0].id
  );

  const activeService =
    PROFILE_DATA.services.find((s) => s.id === activeServiceId) ||
    PROFILE_DATA.services[0];

  return (
    <section id="services" className="relative w-full bg-[#060606] text-[#F5F5F0] py-28 px-4 sm:px-6 lg:px-8 border-t border-white/10 overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-grid-tech opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Centered Section Header */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-[#C8FF00]" />
              <span className="font-mono-tech text-xs uppercase tracking-widest text-[#C8FF00] font-bold">
                03 — CAPABILITIES & CRAFT
              </span>
              <div className="w-8 h-[2px] bg-[#C8FF00]" />
            </div>

            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white leading-tight mb-4">
              WHAT I BRING <span className="text-[#C8FF00]">TO THE FRAME.</span>
            </h2>

            <p className="text-base sm:text-lg text-neutral-300 font-sans-editorial max-w-2xl mx-auto font-medium leading-relaxed">
              A deliberate synthesis of pacing, color harmony, and sonic impact. Every service is calibrated to elevate your footage into an unforgettable visual experience.
            </p>
          </div>
        </ScrollReveal>

        {/* Split Screen Typographic Art Installation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Interactive Typographic List (Accessible Buttons) */}
          <div className="lg:col-span-7 flex flex-col gap-3 justify-center">
            <ScrollReveal direction="up" delay={0.2}>
              <div className="flex flex-col gap-3">
                {PROFILE_DATA.services.map((service) => {
                  const isActive = service.id === activeServiceId;
                  return (
                    <button
                      key={service.id}
                      onClick={() => setActiveServiceId(service.id)}
                      onFocus={() => setActiveServiceId(service.id)}
                      className={`group w-full text-left p-4 sm:p-5 rounded-2xl transition-all duration-300 ease-out relative border flex items-center justify-between active:scale-[0.99] glossy-shine glossy-rim ${
                        isActive
                          ? "bg-[#141414] border-white/30 shadow-2xl translate-x-1"
                          : "bg-transparent border-transparent hover:border-white/15 hover:bg-white/[0.04] hover:translate-x-1"
                      }`}
                    >
                      <div className="flex items-center gap-4 sm:gap-6">
                        <span
                          className={`font-mono-tech text-xs sm:text-sm font-bold transition-colors duration-200 ${
                            isActive
                              ? "text-[#C8FF00]"
                              : "text-neutral-500 group-hover:text-neutral-400"
                          }`}
                        >
                          {service.number}
                        </span>

                        <div>
                          <h3
                            className={`font-display text-2xl sm:text-3xl md:text-4xl uppercase tracking-tight transition-colors duration-200 ${
                              isActive
                                ? "text-white font-black"
                                : "text-neutral-500 group-hover:text-white"
                            }`}
                          >
                            {service.title}
                          </h3>
                          <p className="text-xs font-mono-tech text-neutral-400 mt-1 uppercase tracking-wider">
                            {service.tagline}
                          </p>
                        </div>
                      </div>

                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 ${
                          isActive
                            ? "bg-[#C8FF00] text-black rotate-45 scale-110 shadow-lg"
                            : "bg-white/5 text-neutral-400 group-hover:text-white group-hover:bg-white/10"
                        }`}
                      >
                        <ArrowUpRight className="w-5 h-5" />
                      </div>
                    </button>
                  );
                })}
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Kinetic Graphic Visualizer Card */}
          <div className="lg:col-span-5 flex">
            <ScrollReveal direction="up" delay={0.26} className="w-full h-full flex flex-col">
              <div className="w-full h-full rounded-3xl bg-[#111111] border border-white/10 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden shadow-2xl min-h-[440px] glossy-shine glossy-rim group">
                {/* Visualizer Top Bar */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4 relative z-10">
                  <span className="font-mono-tech text-xs uppercase tracking-wider text-neutral-400 font-bold">
                    ACTIVE DISCIPLINE
                  </span>
                  <span className="font-mono-tech text-[10px] bg-white text-black font-extrabold px-2.5 py-0.5 rounded shadow-sm">
                    LIVE PREVIEW
                  </span>
                </div>

                {/* Kinetic Graphic Visualization based on Selected Service */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeService.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="my-auto py-8 relative z-10 flex flex-col items-center justify-center text-center"
                  >
                    {/* Audio Waveform Graphic Simulation */}
                    <div className="flex items-center justify-center gap-1.5 h-20 mb-6">
                      {[24, 60, 35, 80, 45, 75, 65, 30, 80, 40, 70, 75, 50, 30, 75, 45, 80, 60, 35, 75].map((h, i) => (
                        <motion.div
                          key={i}
                          animate={{
                            height: [h, Math.max(16, (h * 1.35) % 80 + 16), h],
                          }}
                          transition={{
                            repeat: Infinity,
                            duration: 1.1 + (i % 6) * 0.18,
                            ease: "easeInOut",
                          }}
                          className="w-1.5 rounded-full"
                          style={{
                            backgroundColor: i % 2 === 0 ? "#FFFFFF" : "#C8FF00",
                            opacity: 0.9,
                          }}
                        />
                      ))}
                    </div>

                    <div className="max-w-md">
                      <h4 className="font-display text-3xl font-black text-white uppercase tracking-tight mb-2">
                        {activeService.title}
                      </h4>
                      <p className="font-sans-editorial text-sm text-neutral-300 leading-relaxed font-medium">
                        {activeService.description}
                      </p>
                    </div>

                    {/* Capability Bullet Highlights: Standout Pure White Pills */}
                    <div className="mt-6 flex flex-col gap-2 w-full max-w-sm text-left">
                      {activeService.highlights.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2.5 text-xs text-black bg-white px-4 py-2.5 rounded-xl font-bold shadow-xl border border-white/30 transition-all duration-200 hover:scale-[1.02] glossy-shine-light glossy-rim-light relative overflow-hidden"
                        >
                          <Check className="w-4 h-4 text-emerald-600 shrink-0 stroke-[3]" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Stage Footer */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono-tech text-neutral-400 relative z-10 font-semibold">
                  <span>INPUT: RAW LOG / 4K</span>
                  <span>OUTPUT: BROADCAST MASTER</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
}
