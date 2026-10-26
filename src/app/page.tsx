import React from "react";
import { LoadingScreen } from "@/components/ui/LoadingScreen";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { WorkSection } from "@/components/sections/WorkSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ToolsSection } from "@/components/sections/ToolsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ThanksSection } from "@/components/sections/ThanksSection";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#050505] text-[#F5F5F0] overflow-x-hidden selection:bg-[#C8FF00] selection:text-black">
      {/* Intro transition loader */}
      <LoadingScreen />

      {/* Top scroll line + HUD Timecode Capsule */}
      <ScrollProgress />

      {/* Dynamic Header Navbar */}
      <Navbar />

      {/* 01. Neon Green Hero with Central Cutout & Floating Cards */}
      <HeroSection />

      {/* 02. Editorial About Spread with Verified Bio & Education */}
      <AboutSection />

      {/* 03. Selected Works Asymmetric Wall & Horizontal Reel */}
      <WorkSection />

      {/* 04. Capabilities Typographic Art Installation */}
      <ServicesSection />

      {/* 05. Software Showcase & 6-Phase Creative Pipeline */}
      <ToolsSection />

      {/* 06. Glowing Career Timeline */}
      <ExperienceSection />

      {/* 07. Got A Story To Tell Contact & Brief Composer */}
      <ContactSection />

      {/* 08. Cinematic "THANKS!" Outro & Appreciation Button */}
      <ThanksSection />
    </main>
  );
}
