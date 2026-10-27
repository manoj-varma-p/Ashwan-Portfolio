"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { PROFILE_DATA } from "@/data/profile";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

export function ToolsSection() {
  const [activePipelineStep, setActivePipelineStep] = useState(2);

  return (
    <section id="tools" className="relative w-full bg-[#1E1E22] text-[#F5F5F0] py-28 px-4 sm:px-6 lg:px-8 border-t border-white/10 overflow-hidden">

      {/* Background Yellow Line Grid */}
      <div className="absolute inset-0 bg-grid-yellow pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Centered Section Header */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-[#C8FF00]" />
              <span className="font-mono-tech text-xs uppercase tracking-widest text-[#C8FF00] font-bold">
                04 — TECHNICAL ARSENAL
              </span>
              <div className="w-8 h-[2px] bg-[#C8FF00]" />
            </div>

            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white leading-tight mb-4">
              TOOLS OF <span className="text-[#C8FF00]">THE TRADE.</span>
            </h2>

            <p className="font-mono-tech text-xs sm:text-sm text-neutral-400 max-w-xl mx-auto uppercase tracking-wider font-semibold">
              Industry standard non-linear editors, motion compositing engines, and generative AI accelerators.
            </p>
          </div>
        </ScrollReveal>

        {/* Software Suite Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 items-stretch">
          {PROFILE_DATA.tools.map((tool, idx) => (
            <ScrollReveal
              key={tool.name}
              direction="up"
              delay={0.06 * idx}
              distance={28}
              className="h-full"
            >
              <div className="h-full p-6 rounded-3xl bg-[#282832] border border-white/10 hover:border-white/30 transition-all duration-300 ease-out hover:shadow-2xl hover:-translate-y-1.5 group flex flex-col justify-between shadow-xl relative overflow-hidden glossy-shine glossy-rim">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    {/* Stylized Adobe / Tool Monogram Icon */}
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center font-display font-black text-2xl border border-white/15 shadow-md transition-all duration-300 ease-out group-hover:scale-110"
                      style={{
                        backgroundColor: "#202026",
                        color: tool.accent,
                      }}
                    >
                      {tool.shortName}
                    </div>

                    {/* Standout Pure White Badge */}
                    <span className="font-mono-tech text-[10px] text-black bg-white px-2.5 py-1 rounded-full font-extrabold shadow-sm">
                      {tool.category}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-bold uppercase text-white group-hover:text-[#C8FF00] transition-colors duration-200">
                    {tool.name}
                  </h3>
                  <p className="text-xs text-neutral-400 mt-2 leading-relaxed font-sans-editorial">
                    {tool.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between font-mono-tech text-[10px] text-neutral-500 font-semibold">
                  <span>SUITE READY</span>
                  <span className="text-white font-bold">PROFESSIONAL</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Creative Workflow Pipeline Timeline */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="p-8 sm:p-12 rounded-3xl bg-[#282832] border border-white/10 shadow-2xl relative overflow-hidden glossy-shine glossy-rim group">

            <div className="text-center max-w-2xl mx-auto mb-10 pb-6 border-b border-white/10">
              <span className="font-mono-tech text-xs text-[#FF6A00] tracking-widest uppercase font-bold block mb-1">
                POST-PRODUCTION BLUEPRINT
              </span>
              <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-black text-white uppercase tracking-tight">
                FROM RAW REEL TO FINAL MASTER
              </h3>
              <div className="flex items-center justify-center gap-2 font-mono-tech text-xs text-neutral-400 font-semibold mt-3">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span>INTERACTIVE TIMELINE PIPELINE</span>
              </div>
            </div>

            {/* Sequential Step Cards with Standout White Active Step */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 items-stretch">
              {PROFILE_DATA.workflowPipeline.map((step, index) => {
                const isCurrent = index === activePipelineStep;

                return (
                  <button
                    key={step.step}
                    onClick={() => setActivePipelineStep(index)}
                    className={`p-4 rounded-2xl text-left transition-all duration-300 ease-out border flex flex-col justify-between min-h-[175px] cursor-pointer relative overflow-hidden group ${isCurrent
                        ? "z-10 bg-white text-black border-2 border-white shadow-[0_15px_30px_rgba(255,255,255,0.2)] scale-[1.04] glossy-shine-light glossy-rim-light"
                        : "bg-[#22222A] text-neutral-300 border-white/10 hover:border-white/30 hover:-translate-y-0.5 glossy-shine glossy-rim"
                      }`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className={`font-mono-tech text-xs font-black transition-colors duration-200 ${isCurrent ? "text-black" : "text-[#C8FF00]"
                          }`}
                      >
                        {step.step}
                      </span>
                      <span
                        className={`font-mono-tech text-[9px] uppercase px-1.5 py-0.5 rounded transition-colors duration-200 font-extrabold ${isCurrent ? "bg-black text-[#C8FF00]" : "bg-white/10 text-neutral-300"
                          }`}
                      >
                        PHASE
                      </span>
                    </div>

                    <div>
                      <h4
                        className={`font-display text-xl sm:text-2xl font-black uppercase tracking-tight transition-colors duration-200 ${isCurrent ? "text-black" : "text-white"
                          }`}
                      >
                        {step.label}
                      </h4>
                      <p
                        className={`text-[11px] font-sans-editorial mt-1 leading-tight transition-colors duration-200 ${isCurrent ? "text-neutral-700 font-medium" : "text-neutral-400"
                          }`}
                      >
                        {step.detail}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Editing Timeline Decoration Track */}
            <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 font-mono-tech text-xs text-neutral-400">
              <div className="flex items-center gap-3">
                <span className="text-white font-bold">TIMECODE:</span>
                <span className="text-[#C8FF00] font-mono-tech font-bold">01:00:24:12</span>
                <span>•</span>
                <span>24 FPS CINEMA MASTER</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="h-2 w-16 bg-white rounded-full" />
                <span className="h-2 w-8 bg-[#FF6A00] rounded-full" />
                <span className="h-2 w-12 bg-[#C8FF00] rounded-full" />
                <span className="text-[10px] text-neutral-400 font-semibold">AUDIO / VIDEO / VFX TRACKS</span>
              </div>
            </div>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
