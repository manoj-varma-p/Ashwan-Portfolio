"use client";

import React from "react";
import Image from "next/image";
import { ArrowUp } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[#096B90]/30 py-16 px-4 sm:px-6 lg:px-8 bg-[#08171E] relative z-10">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Tagline */}
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="relative w-9 h-9 rounded-full overflow-hidden bg-[#042B44] border-2 border-[#71B7D5]/70 shadow-[0_0_15px_rgba(113,183,213,0.4)]">
                <Image
                  src="/images/ashwan-avatar.png"
                  alt="Ashwan Jakkinapally Logo"
                  fill
                  className="object-cover object-top"
                  sizes="36px"
                />
              </div>
              <span className="font-sans font-extrabold text-[#F0F8FF] text-lg tracking-tight">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="text-xs text-[#A1CCDC] max-w-sm font-normal">
              Creative Video Editor & Graphic Designer based in Telangana. Crafting memorable cinematic stories & visual poster art.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-[#A1CCDC]">
            <a href="#about" className="hover:text-[#71B7D5] transition-colors">
              About & Bio
            </a>
            <a href="#posters" className="hover:text-[#71B7D5] transition-colors">
              9 Posters
            </a>
            <a href="#videos" className="hover:text-[#71B7D5] transition-colors">
              Video Edits
            </a>
            <a href="#skills" className="hover:text-[#71B7D5] transition-colors">
              Arsenal
            </a>
            <a href="#services" className="hover:text-[#71B7D5] transition-colors">
              Services
            </a>
            <a href="#contact" className="hover:text-[#71B7D5] transition-colors">
              Contact
            </a>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-2xl glass-card border border-[#096B90]/40 text-[#A1CCDC] hover:text-[#08171E] hover:bg-[#71B7D5] hover:border-[#71B7D5] hover:shadow-[0_0_20px_rgba(113,183,213,0.5)] flex items-center justify-center transition-all duration-300 group"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 border-t border-[#096B90]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#A1CCDC]">
          <p>© {new Date().getFullYear()} {PERSONAL_INFO.name}. All Rights Reserved.</p>
          <div className="flex items-center gap-2">
            <span>Built with Next.js, Tailwind CSS & Plus Jakarta Sans</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
