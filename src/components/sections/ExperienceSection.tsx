"use client";

import React from "react";
import { Calendar, CheckCircle2 } from "lucide-react";
import { PROFILE_DATA } from "@/data/profile";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

export function ExperienceSection() {
  return (
    <section id="experience" className="relative w-full bg-[#0E0E11] text-[#F5F5F0] py-28 px-4 sm:px-6 lg:px-8 border-t border-white/10 overflow-hidden">
      
      {/* Background Yellow Line Grid */}
      <div className="absolute inset-0 bg-grid-yellow pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Centered Section Header */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white leading-tight mb-4">
              EXPERIENCE <span className="text-[#C8FF00]">IN MOTION.</span>
            </h2>

            <p className="font-mono-tech text-xs sm:text-sm text-neutral-400 max-w-xl mx-auto uppercase tracking-wider font-semibold">
              Verified production track record in high-end video editing, visual storytelling, and digital graphic design.
            </p>
          </div>
        </ScrollReveal>

        {/* Editorial Timeline Track */}
        <div className="relative border-l-2 border-[#C8FF00]/40 ml-4 sm:ml-8 pl-6 sm:pl-12 space-y-12">
          
          {PROFILE_DATA.experiences.map((exp, idx) => (
            <ScrollReveal
              key={exp.id}
              direction="left"
              delay={idx * 0.16}
              distance={35}
              className="relative group"
            >
              {/* Glowing Timeline Marker Pin with White Contrast Body */}
              <div className="absolute -left-6 sm:-left-12 -translate-x-1/2 top-7 w-5 h-5 rounded-full bg-white border-2 border-black flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.7)] z-10 transition-transform duration-300 group-hover:scale-125">
                <div className="w-2.5 h-2.5 rounded-full bg-[#C8FF00] border border-black" />
              </div>

              {/* Experience Card */}
              <div className="p-6 sm:p-8 rounded-3xl bg-[#17171C] border border-white/10 hover:border-[#C8FF00]/50 transition-all duration-300 ease-out hover:shadow-2xl hover:-translate-y-1 shadow-xl relative overflow-hidden glossy-shine glossy-rim group">
                
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-white/10">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-mono-tech text-xs text-[#FF6A00] font-bold uppercase tracking-wider">
                        {exp.company}
                      </span>
                      {exp.isCurrent && (
                        <span className="font-mono-tech text-[9px] bg-[#C8FF00] text-black font-extrabold px-2 py-0.5 rounded-full">
                          CURRENT
                        </span>
                      )}
                    </div>
                    <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-tight text-white group-hover:text-[#C8FF00] transition-colors duration-200">
                      {exp.role}
                    </h3>
                  </div>

                  {/* Standout Pure White Period Badge */}
                  <div className="flex items-center gap-2 font-mono-tech text-xs bg-white text-black px-4 py-1.5 rounded-full border border-white/30 shadow-lg self-start sm:self-auto font-black relative overflow-hidden glossy-shine-light glossy-rim-light">
                    <Calendar className="w-3.5 h-3.5 text-black" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Scope & Verified Responsibilities */}
                <div className="mt-5 space-y-3">
                  <p className="font-mono-tech text-xs uppercase tracking-wider text-neutral-400">
                    Core Scope & Focus:
                  </p>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li
                        key={rIdx}
                        className="flex items-start gap-3 text-xs sm:text-sm text-neutral-300 font-sans-editorial"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#C8FF00] shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tools Applied */}
                <div className="mt-6 pt-5 border-t border-white/5 flex flex-wrap items-center gap-2">
                  <span className="font-mono-tech text-[10px] text-neutral-400 mr-2 uppercase">
                    TOOLKIT:
                  </span>
                  {exp.tools.map((tool) => (
                    <span
                      key={tool}
                      className="font-mono-tech text-xs bg-white/10 text-neutral-200 px-3 py-1 rounded-lg border border-white/10 transition-colors duration-200 hover:bg-white hover:text-black font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

              </div>
            </ScrollReveal>
          ))}

        </div>

      </div>
    </section>
  );
}
