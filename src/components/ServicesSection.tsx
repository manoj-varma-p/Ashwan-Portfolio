"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Film,
  Image as ImageIcon,
  Wand2,
  Sliders,
  Headphones,
  Cpu,
  ArrowRight,
  CheckCircle2,
  Layers,
  SlidersHorizontal,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { SERVICES_DATA } from "@/data/portfolioData";
import TextReveal from "@/components/animations/TextReveal";
import ScrollReveal from "@/components/animations/ScrollReveal";

const ICON_MAP: Record<string, React.ElementType> = {
  Film: Film,
  Image: ImageIcon,
  Wand2: Wand2,
  Sliders: Sliders,
  Headphones: Headphones,
  Cpu: Cpu,
};

export default function ServicesSection() {
  const [mobileView, setMobileView] = useState<"stack" | "sidescroll">("stack");
  const [activeSideScrollIndex, setActiveSideScrollIndex] = useState(0);
  const scrollTrackRef = useRef<HTMLDivElement>(null);

  // Sync scroll indicator on horizontal swipe
  const handleScroll = () => {
    if (!scrollTrackRef.current) return;
    const { scrollLeft, clientWidth } = scrollTrackRef.current;
    if (clientWidth === 0) return;
    const newIdx = Math.round(scrollLeft / (clientWidth * 0.84));
    setActiveSideScrollIndex(Math.min(Math.max(newIdx, 0), SERVICES_DATA.length - 1));
  };

  const scrollToCard = (index: number) => {
    if (!scrollTrackRef.current) return;
    const cardWidth = scrollTrackRef.current.clientWidth * 0.84 + 16;
    scrollTrackRef.current.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });
    setActiveSideScrollIndex(index);
  };

  const handlePrev = () => {
    scrollToCard(Math.max(activeSideScrollIndex - 1, 0));
  };

  const handleNext = () => {
    scrollToCard(Math.min(activeSideScrollIndex + 1, SERVICES_DATA.length - 1));
  };

  return (
    <section id="services" className="py-14 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20 border-t border-[#096B90]/20">
      {/* Section Header */}
      <div className="text-center space-y-4 mb-8 sm:mb-14">
        <ScrollReveal variant="fade-down" delay={0.1}>
          <span className="text-[#A1CCDC] font-mono text-xs uppercase tracking-widest inline-flex items-center gap-2">
            <span>Full-Spectrum Capabilities</span>
          </span>
        </ScrollReveal>

        <h2 className="font-sans text-3xl sm:text-5xl font-extrabold text-[#F0F8FF]">
          <TextReveal text="What I Can" as="span" />{" "}
          <TextReveal text="Do For You" as="span" gradient delay={0.2} />
        </h2>

        <ScrollReveal variant="fade-up" delay={0.3}>
          <p className="text-[#A1CCDC] max-w-2xl mx-auto text-xs sm:text-base font-normal leading-relaxed">
            From first rough cut to master cinematic grading and promotional poster suites, end-to-end creative deliverables for creators, filmmakers, and brands.
          </p>
        </ScrollReveal>

        {/* Mobile View Toggle Options (Scroll Stack vs Side Scroll) */}
        <div className="md:hidden pt-4 flex flex-col items-center gap-2">
          <span className="text-[10px] font-mono text-[#A1CCDC]/80 uppercase tracking-widest">
            Mobile Layout View
          </span>
          <div className="inline-flex p-1 rounded-full bg-[#042B44]/90 border border-[#71B7D5]/35 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
            <button
              onClick={() => setMobileView("stack")}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-bold flex items-center gap-1.5 transition-all duration-300 ${
                mobileView === "stack"
                  ? "bg-[#096B90] text-[#F0F8FF] shadow-[0_0_15px_rgba(9,107,144,0.6)]"
                  : "text-[#A1CCDC] hover:text-[#F0F8FF]"
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Scroll Stack</span>
            </button>
            <button
              onClick={() => setMobileView("sidescroll")}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-bold flex items-center gap-1.5 transition-all duration-300 ${
                mobileView === "sidescroll"
                  ? "bg-[#71B7D5] text-[#08171E] shadow-[0_0_15px_rgba(113,183,213,0.6)]"
                  : "text-[#A1CCDC] hover:text-[#F0F8FF]"
              }`}
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Side Scroll</span>
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE DISPLAY (Visible on < md) */}
      <div className="md:hidden">
        {mobileView === "stack" ? (
          /* SCROLL STACK MODE */
          <div className="relative space-y-5 pb-8 pt-2">
            <div className="text-center pb-2">
              <span className="text-[11px] font-mono text-[#71B7D5] bg-[#042B44]/80 px-3 py-1 rounded-full border border-[#71B7D5]/30">
                ↓ Scroll to stack cards
              </span>
            </div>

            {SERVICES_DATA.map((service, idx) => {
              const IconComponent = ICON_MAP[service.icon] || Wand2;
              return (
                <div
                  key={service.id}
                  style={{
                    top: `${76 + idx * 10}px`,
                    zIndex: 10 + idx,
                  }}
                  className="sticky rounded-2xl p-5 bg-[#061C27] border border-[#71B7D5]/40 shadow-[0_-8px_30px_rgba(0,0,0,0.9)] transition-all"
                >
                  {/* Stack Card Top Status Bar */}
                  <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-[#A1CCDC]/15">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-md bg-[#096B90]/40 border border-[#71B7D5]/40 flex items-center justify-center text-[10px] font-mono font-black text-[#71B7D5]">
                        0{idx + 1}
                      </span>
                      <span className="text-[10px] font-mono text-[#A1CCDC] uppercase tracking-wider font-semibold">
                        Service 0{idx + 1} / 0{SERVICES_DATA.length}
                      </span>
                    </div>

                    <div className="w-7 h-7 rounded-lg bg-[#096B90]/30 border border-[#71B7D5]/40 flex items-center justify-center text-[#71B7D5]">
                      <IconComponent className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  <h3 className="font-sans font-extrabold text-base text-[#F0F8FF] mb-1.5">
                    {service.title}
                  </h3>

                  <p className="text-xs text-[#A1CCDC] leading-relaxed mb-3 font-normal line-clamp-2">
                    {service.description}
                  </p>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-2 gap-1.5 pt-2 border-t border-[#A1CCDC]/10 mb-4">
                    {service.highlights.map((item, hIdx) => (
                      <div
                        key={hIdx}
                        className="flex items-center gap-1.5 text-[11px] text-[#A1CCDC] font-mono truncate"
                      >
                        <CheckCircle2 className="w-3 h-3 shrink-0 text-[#71B7D5]" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Quick Action Button */}
                  <a
                    href="#contact"
                    className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#096B90] to-[#71B7D5] text-[#08171E] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(9,107,144,0.4)] active:scale-98 transition-transform"
                  >
                    <span>Inquire for Project</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              );
            })}
          </div>
        ) : (
          /* SIDE SCROLL MODE */
          <div className="space-y-4 pt-1 pb-4">
            {/* Side Scroll Header with Slide Counter and Prev/Next */}
            <div className="flex items-center justify-between px-1">
              <span className="text-xs font-mono text-[#A1CCDC] flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#71B7D5] animate-pulse" />
                <span>Swipe left / right ({activeSideScrollIndex + 1} of {SERVICES_DATA.length})</span>
              </span>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  disabled={activeSideScrollIndex === 0}
                  className="w-8 h-8 rounded-full bg-[#042B44] border border-[#71B7D5]/30 text-white disabled:opacity-30 flex items-center justify-center transition-colors"
                  aria-label="Previous service"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  disabled={activeSideScrollIndex === SERVICES_DATA.length - 1}
                  className="w-8 h-8 rounded-full bg-[#042B44] border border-[#71B7D5]/30 text-white disabled:opacity-30 flex items-center justify-center transition-colors"
                  aria-label="Next service"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Horizontal Swipeable Track with Snap Scrolling */}
            <div
              ref={scrollTrackRef}
              onScroll={handleScroll}
              className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4 pt-1 px-1 -mx-4 px-4"
            >
              {SERVICES_DATA.map((service, idx) => {
                const IconComponent = ICON_MAP[service.icon] || Wand2;
                return (
                  <div
                    key={service.id}
                    className="w-[84vw] max-w-[340px] shrink-0 snap-center p-6 rounded-3xl bg-[#042B44]/80 backdrop-blur-xl border border-[#71B7D5]/35 shadow-[0_15px_35px_-10px_rgba(4,43,68,0.7)] flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      {/* Service Icon Box & Number */}
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-[#096B90]/25 text-[#F0F8FF] border border-[#71B7D5]/30 shadow-[0_0_15px_rgba(9,107,144,0.3)]">
                          <IconComponent className="w-6 h-6 text-[#71B7D5]" />
                        </div>
                        <span className="text-xs font-mono font-bold text-[#71B7D5] bg-[#08171E]/80 px-2.5 py-1 rounded-full border border-[#71B7D5]/30">
                          0{idx + 1}
                        </span>
                      </div>

                      <div className="space-y-1.5">
                        <h3 className="font-sans font-extrabold text-lg text-[#F0F8FF]">
                          {service.title}
                        </h3>
                        <p className="text-xs text-[#A1CCDC] leading-relaxed font-normal">
                          {service.description}
                        </p>
                      </div>

                      {/* Highlights */}
                      <div className="space-y-1.5 pt-2 border-t border-[#A1CCDC]/10">
                        {service.highlights.map((item, hIdx) => (
                          <div
                            key={hIdx}
                            className="flex items-center gap-2 text-xs text-[#A1CCDC] font-mono"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-[#71B7D5]" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="pt-5 mt-4 border-t border-[#A1CCDC]/10">
                      <a
                        href="#contact"
                        className="inline-flex items-center justify-between w-full py-2.5 px-4 rounded-xl bg-[#096B90]/30 hover:bg-[#71B7D5] hover:text-[#08171E] text-xs font-mono font-bold uppercase tracking-wider text-[#F0F8FF] border border-[#71B7D5]/40 transition-colors"
                      >
                        <span>Inquire for Project</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#71B7D5]" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Pagination Dots Indicator */}
            <div className="flex items-center justify-center gap-2 pt-2">
              {SERVICES_DATA.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToCard(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeSideScrollIndex === idx
                      ? "w-7 bg-[#71B7D5] shadow-[0_0_10px_rgba(113,183,213,0.8)]"
                      : "w-2 bg-[#042B44] border border-[#71B7D5]/30 hover:bg-[#71B7D5]/50"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* DESKTOP DISPLAY (Hidden on mobile, 3-column grid on >= md) */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES_DATA.map((service, idx) => {
          const IconComponent = ICON_MAP[service.icon] || Wand2;

          return (
            <ScrollReveal
              key={service.id}
              variant="fade-up"
              delay={(idx % 3) * 0.12}
              className="h-full"
            >
              <div className="h-full p-8 rounded-3xl glass-card border border-[#A1CCDC]/15 hover:border-[#71B7D5]/50 hover:shadow-[0_20px_40px_-15px_rgba(9,107,144,0.35)] transition-all duration-300 flex flex-col justify-between group">
                <div className="space-y-5">
                  {/* Service Icon Box */}
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl transition-transform group-hover:scale-110 duration-300 bg-[#096B90]/25 text-[#F0F8FF] border border-[#71B7D5]/30 shadow-[0_0_20px_rgba(9,107,144,0.3)]"
                  >
                    <IconComponent className="w-7 h-7 text-[#71B7D5] group-hover:text-[#F0F8FF] transition-colors" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-sans font-extrabold text-xl text-[#F0F8FF] group-hover:text-[#71B7D5] transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-xs text-[#A1CCDC] leading-relaxed font-normal">
                      {service.description}
                    </p>
                  </div>

                  {/* Highlights List */}
                  <div className="space-y-2 pt-2 border-t border-[#A1CCDC]/10">
                    {service.highlights.map((item, hIdx) => (
                      <div
                        key={hIdx}
                        className="flex items-center gap-2 text-xs text-[#A1CCDC] font-mono"
                      >
                        <CheckCircle2
                          className="w-3.5 h-3.5 shrink-0 text-[#71B7D5]"
                        />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Service Action Button */}
                <div className="pt-6 mt-6 border-t border-[#A1CCDC]/10">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#A1CCDC] group-hover:text-[#71B7D5] transition-colors"
                  >
                    <span>Inquire for Project</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#71B7D5] group-hover:translate-x-1.5 transition-transform" />
                  </a>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
