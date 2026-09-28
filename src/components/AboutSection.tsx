"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Briefcase,
  GraduationCap,
  Globe,
  FileText,
  Copy,
  Check,
  X,
  Maximize2,
} from "lucide-react";
import InstagramIcon from "@/components/icons/InstagramIcon";
import { PERSONAL_INFO, EXPERIENCE_DATA } from "@/data/portfolioData";
import TextReveal from "@/components/animations/TextReveal";
import ScrollReveal from "@/components/animations/ScrollReveal";
import ScrollHighlight from "@/components/animations/ScrollHighlight";

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState<"experience" | "education" | "languages">("experience");
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [showResumeModal, setShowResumeModal] = useState(false);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  return (
    <section id="about" className="py-14 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Bio Story & Contact Cards */}
        <div className="lg:col-span-6 space-y-6">
          <ScrollReveal variant="fade-up" delay={0.1}>
            <div className="space-y-3">
              <span className="text-[#A1CCDC] font-mono text-xs uppercase tracking-widest flex items-center gap-2">
                <span className="w-6 h-[1px] bg-[#096B90]" />
                <span>Profile & Credentials</span>
              </span>

              <h2 className="font-sans text-3xl sm:text-5xl font-extrabold text-[#F0F8FF] leading-tight">
                <TextReveal text="Creative Storytelling with" as="span" />{" "}
                <TextReveal text="Visual Precision." as="span" gradient delay={0.2} />
              </h2>
            </div>
          </ScrollReveal>

          {/* Dynamic Scroll-Linked Text Illumination */}
          <ScrollReveal variant="fade-up" delay={0.25}>
            <ScrollHighlight
              text={`I am ${PERSONAL_INFO.name}, a passionate video editor and graphic designer specializing in crafting high-impact visual narratives. From fast-paced short-form reels to documentary-style stories and theatrical poster key art, I combine creative intuition with technical precision across Premiere Pro, After Effects, Photoshop, Illustrator, and DaVinci Resolve.`}
              className="text-base sm:text-lg font-normal leading-relaxed text-[#A1CCDC]"
            />
          </ScrollReveal>

          {/* Quick Contact & Info Grid with ScrollReveal Stagger (2x2 on mobile) */}
          <div className="grid grid-cols-2 gap-2.5 sm:gap-4 pt-2">
            {/* Phone */}
            <ScrollReveal variant="fade-up" delay={0.3}>
              <div className="p-3 sm:p-4 rounded-2xl glass-card border-l-2 border-l-[#71B7D5] flex items-start justify-between group hover:border-[#71B7D5]/50 transition-all">
                <div className="space-y-1 overflow-hidden">
                  <span className="text-[9px] sm:text-[10px] font-mono text-[#A1CCDC] uppercase flex items-center gap-1">
                    <Phone className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#71B7D5]" />
                    <span className="truncate">Phone</span>
                  </span>
                  <p className="text-xs sm:text-sm font-bold text-[#F0F8FF] tracking-wide truncate">
                    {PERSONAL_INFO.phone}
                  </p>
                </div>
                <button
                  onClick={() => handleCopy(PERSONAL_INFO.phone, "phone")}
                  className="p-1 sm:p-1.5 rounded-lg bg-white/5 hover:bg-[#096B90]/30 text-[#A1CCDC] hover:text-[#F0F8FF] transition-colors shrink-0 ml-1"
                  title="Copy phone"
                >
                  {copiedKey === "phone" ? <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#71B7D5]" /> : <Copy className="w-3 h-3 sm:w-3.5 sm:h-3.5" />}
                </button>
              </div>
            </ScrollReveal>

            {/* Email */}
            <ScrollReveal variant="fade-up" delay={0.35}>
              <div className="p-3 sm:p-4 rounded-2xl glass-card border-l-2 border-l-[#096B90] flex items-start justify-between group hover:border-[#096B90]/60 transition-all">
                <div className="space-y-1 overflow-hidden">
                  <span className="text-[9px] sm:text-[10px] font-mono text-[#A1CCDC] uppercase flex items-center gap-1">
                    <Mail className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#71B7D5]" />
                    <span className="truncate">Email</span>
                  </span>
                  <p className="text-[11px] sm:text-xs font-bold text-[#F0F8FF] truncate">
                    {PERSONAL_INFO.email}
                  </p>
                </div>
                <button
                  onClick={() => handleCopy(PERSONAL_INFO.email, "email")}
                  className="p-1 sm:p-1.5 rounded-lg bg-white/5 hover:bg-[#096B90]/30 text-[#A1CCDC] hover:text-[#F0F8FF] transition-colors shrink-0 ml-1"
                  title="Copy email"
                >
                  {copiedKey === "email" ? <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#71B7D5]" /> : <Copy className="w-3 h-3 sm:w-3.5 sm:h-3.5" />}
                </button>
              </div>
            </ScrollReveal>

            {/* Instagram */}
            <ScrollReveal variant="fade-up" delay={0.4}>
              <div className="p-3 sm:p-4 rounded-2xl glass-card border-l-2 border-l-[#A1CCDC] flex items-start justify-between group hover:border-[#A1CCDC]/50 transition-all">
                <div className="space-y-1 overflow-hidden">
                  <span className="text-[9px] sm:text-[10px] font-mono text-[#A1CCDC] uppercase flex items-center gap-1">
                    <InstagramIcon className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#71B7D5]" />
                    <span className="truncate">Instagram</span>
                  </span>
                  <p className="text-xs sm:text-sm font-bold text-[#F0F8FF] truncate">
                    {PERSONAL_INFO.instagram}
                  </p>
                </div>
                <button
                  onClick={() => handleCopy(PERSONAL_INFO.instagram, "instagram")}
                  className="p-1 sm:p-1.5 rounded-lg bg-white/5 hover:bg-[#096B90]/30 text-[#A1CCDC] hover:text-[#F0F8FF] transition-colors shrink-0 ml-1"
                  title="Copy handle"
                >
                  {copiedKey === "instagram" ? <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#71B7D5]" /> : <Copy className="w-3 h-3 sm:w-3.5 sm:h-3.5" />}
                </button>
              </div>
            </ScrollReveal>

            {/* Location */}
            <ScrollReveal variant="fade-up" delay={0.45}>
              <div className="p-3 sm:p-4 rounded-2xl glass-card border-l-2 border-l-[#71B7D5] flex items-start justify-between hover:border-[#71B7D5]/50 transition-all">
                <div className="space-y-1 overflow-hidden">
                  <span className="text-[9px] sm:text-[10px] font-mono text-[#A1CCDC] uppercase flex items-center gap-1">
                    <MapPin className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#71B7D5]" />
                    <span className="truncate">Location</span>
                  </span>
                  <p className="text-[11px] sm:text-xs font-bold text-[#F0F8FF] truncate">
                    Beeramguda, TG
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Visual Resume Trigger Banner with ScrollReveal */}
          <ScrollReveal variant="zoom-in" delay={0.5}>
            <div className="p-5 rounded-2xl bg-[#042B44]/90 border border-[#096B90]/40 hover:border-[#71B7D5]/50 hover:shadow-[0_0_25px_rgba(9,107,144,0.3)] transition-all flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#096B90]/30 border border-[#71B7D5]/40 flex items-center justify-center text-[#F0F8FF] shadow-[0_0_15px_rgba(113,183,213,0.3)]">
                  <FileText className="w-6 h-6 text-[#71B7D5]" />
                </div>
                <div>
                  <h4 className="font-sans font-extrabold text-[#F0F8FF] text-sm">
                    Official Visual Resume Poster
                  </h4>
                  <p className="text-xs text-[#A1CCDC]">
                    Document containing profile, verified experience & portrait
                  </p>
                </div>
              </div>

              <button
                onClick={() => setShowResumeModal(true)}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#096B90] to-[#71B7D5] text-[#08171E] font-bold text-xs uppercase tracking-wider hover:shadow-[0_0_20px_rgba(113,183,213,0.5)] hover:scale-105 active:scale-95 transition-all flex items-center gap-2 shrink-0"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>View Resume</span>
              </button>
            </div>
          </ScrollReveal>
        </div>

        {/* Right Column: Interactive Career & Education Timeline */}
        <div className="lg:col-span-6 space-y-6">
          {/* Tab Navigation */}
          <ScrollReveal variant="fade-left" delay={0.2}>
            <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-[#042B44]/90 border border-[#A1CCDC]/15">
              <button
                onClick={() => setActiveTab("experience")}
                className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                  activeTab === "experience"
                    ? "bg-[#096B90] text-[#F0F8FF] shadow-[0_0_20px_rgba(9,107,144,0.5)]"
                    : "text-[#A1CCDC] hover:text-[#F0F8FF]"
                }`}
              >
                <Briefcase className="w-3.5 h-3.5" />
                <span>Experience</span>
              </button>

              <button
                onClick={() => setActiveTab("education")}
                className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                  activeTab === "education"
                    ? "bg-[#71B7D5] text-[#08171E] shadow-[0_0_20px_rgba(113,183,213,0.5)]"
                    : "text-[#A1CCDC] hover:text-[#F0F8FF]"
                }`}
              >
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Education</span>
              </button>

              <button
                onClick={() => setActiveTab("languages")}
                className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                  activeTab === "languages"
                    ? "bg-[#A1CCDC] text-[#08171E] shadow-[0_0_20px_rgba(161,204,220,0.5)]"
                    : "text-[#A1CCDC] hover:text-[#F0F8FF]"
                }`}
              >
                <Globe className="w-3.5 h-3.5" />
                <span>Languages</span>
              </button>
            </div>
          </ScrollReveal>

          {/* Tab Content Panes */}
          <div className="min-h-[380px]">
            <AnimatePresence mode="wait">
              {activeTab === "experience" && (
                <motion.div
                  key="experience"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  {EXPERIENCE_DATA.filter((e) => e.type !== "Education").map(
                    (exp, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1, duration: 0.4 }}
                        className="p-6 rounded-2xl glass-card border border-[#A1CCDC]/15 hover:border-[#71B7D5]/50 hover:shadow-[0_10px_30px_-10px_rgba(9,107,144,0.35)] transition-all duration-300 relative group"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                          <div>
                            <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-[#096B90]/30 text-[#F0F8FF] border border-[#71B7D5]/40">
                              {exp.type}
                            </span>
                            <h3 className="font-sans font-extrabold text-lg text-[#F0F8FF] mt-1.5">
                              {exp.role}
                            </h3>
                            <p className="text-xs font-semibold text-[#71B7D5]">
                              {exp.company}
                            </p>
                          </div>
                          <span className="text-[11px] font-mono text-[#A1CCDC] bg-[#042B44] px-3 py-1 rounded-lg border border-[#096B90]/30 self-start sm:self-auto">
                            {exp.period}
                          </span>
                        </div>
                        <p className="text-xs text-[#A1CCDC] leading-relaxed mt-3 font-normal">
                          {exp.description}
                        </p>
                      </motion.div>
                    )
                  )}
                </motion.div>
              )}

              {activeTab === "education" && (
                <motion.div
                  key="education"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <div className="p-6 rounded-2xl glass-card border border-[#096B90]/40">
                    <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-[#096B90]/30 text-[#F0F8FF] border border-[#71B7D5]/40">
                      Bachelor's Degree
                    </span>
                    <h3 className="font-sans font-extrabold text-xl text-[#F0F8FF] mt-2">
                      Bachelor of Science (B.Sc - MSCS)
                    </h3>
                    <p className="text-xs font-semibold text-[#71B7D5] mt-0.5">
                      Prathibha Degree and PG College
                    </p>
                    <span className="inline-block mt-2 text-[11px] font-mono text-[#A1CCDC] bg-[#042B44] px-3 py-1 rounded-lg border border-[#096B90]/30">
                      Graduated 2024
                    </span>

                    <p className="text-xs text-[#A1CCDC] leading-relaxed mt-4 font-normal">
                      Specialized in Mathematics, Statistics & Computer Science. Developed analytical rigor, layout composition discipline, and digital workflows that power high-speed video editing.
                    </p>
                  </div>
                </motion.div>
              )}

              {activeTab === "languages" && (
                <motion.div
                  key="languages"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <div className="p-6 rounded-2xl glass-card space-y-4">
                    <h4 className="font-sans font-extrabold text-[#F0F8FF] text-base">
                      Multilingual Communication
                    </h4>
                    <p className="text-xs text-[#A1CCDC] leading-relaxed font-normal">
                      Fluent across multiple regional and international languages, enabling seamless collaboration with Telugu film teams, Hindi creators, and global brands:
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                      <div className="p-4 rounded-xl bg-[#042B44] border border-[#096B90]/40 text-center space-y-1">
                        <span className="text-xs font-mono text-[#71B7D5] uppercase">Native</span>
                        <p className="font-bold text-[#F0F8FF] text-base">Telugu</p>
                        <p className="text-[10px] text-[#A1CCDC]">Mother Tongue</p>
                      </div>

                      <div className="p-4 rounded-xl bg-[#042B44] border border-[#096B90]/40 text-center space-y-1">
                        <span className="text-xs font-mono text-[#71B7D5] uppercase">Fluent</span>
                        <p className="font-bold text-[#F0F8FF] text-base">Hindi</p>
                        <p className="text-[10px] text-[#A1CCDC]">Conversational</p>
                      </div>

                      <div className="p-4 rounded-xl bg-[#042B44] border border-[#096B90]/40 text-center space-y-1">
                        <span className="text-xs font-mono text-[#71B7D5] uppercase">Professional</span>
                        <p className="font-bold text-[#F0F8FF] text-base">English</p>
                        <p className="text-[10px] text-[#A1CCDC]">Work & Written</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Visual Resume Modal Lightbox */}
      <AnimatePresence>
        {showResumeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowResumeModal(false)}
            className="fixed inset-0 z-[10000] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full max-h-[90vh] glass-card rounded-3xl overflow-hidden border border-[#A1CCDC]/25 shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between px-6 py-4 border-b border-[#A1CCDC]/15 bg-[#042B44]">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#096B90]/30 text-[#F0F8FF] flex items-center justify-center">
                    <FileText className="w-4 h-4 text-[#71B7D5]" />
                  </div>
                  <div>
                    <h3 className="font-sans font-extrabold text-[#F0F8FF] text-sm sm:text-base">
                      Ashwan Jakkinapally — Visual Resume
                    </h3>
                    <p className="text-xs font-mono text-[#A1CCDC]">
                      Original Design Portfolio Document
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setShowResumeModal(false)}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#096B90]/40 text-[#A1CCDC] hover:text-[#F0F8FF] flex items-center justify-center transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-4 overflow-auto flex items-center justify-center bg-black/60">
                <div className="relative w-full max-w-lg aspect-[3/4.2] rounded-xl overflow-hidden border border-[#A1CCDC]/20 shadow-2xl">
                  <Image
                    src={PERSONAL_INFO.resumeImage}
                    alt="Ashwan Jakkinapally Visual Resume"
                    fill
                    className="object-contain"
                    sizes="600px"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
