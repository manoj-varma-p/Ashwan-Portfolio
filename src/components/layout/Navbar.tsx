"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";
import { PROFILE_DATA } from "@/data/profile";
import { useSmoothScroll } from "@/components/motion/SmoothScroll";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("about");
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const { scrollTo } = useSmoothScroll();

  useEffect(() => {
    const handleScroll = () => {
      // Switch when scrolled past initial hero header area
      if (window.scrollY > 90) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section scroll spy
  useEffect(() => {
    const sectionIds = ["about", "work", "services", "tools", "experience", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.2) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.2 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { name: "ABOUT", href: "#about", id: "about" },
    { name: "WORK", href: "#work", id: "work" },
    { name: "SERVICES", href: "#services", id: "services" },
    { name: "TOOLS", href: "#tools", id: "tools" },
    { name: "EXPERIENCE", href: "#experience", id: "experience" },
    { name: "CONTACT", href: "#contact", id: "contact" },
  ];

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    scrollTo(href, { offset: -80, duration: 1.2 });
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-40 pointer-events-none transition-all duration-300">
        <div
          className={`w-full transition-all duration-500 ease-out ${
            isScrolled
              ? "pt-3 sm:pt-4 px-3 sm:px-6 lg:px-8"
              : "pt-4 sm:pt-6 px-4 sm:px-8 lg:px-12"
          }`}
        >
          <motion.div
            layout
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
            className={`pointer-events-auto mx-auto transition-all duration-500 ease-out flex items-center justify-between ${
              isScrolled
                ? "max-w-5xl bg-[#1E1E22]/90 backdrop-blur-2xl border border-white/20 px-4 sm:px-6 py-2 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.85)]"
                : "max-w-7xl bg-transparent border-transparent px-0 py-0 shadow-none"
            }`}
          >
            {/* ── Brand Logo ── */}
            <Link
              href="#"
              onClick={(e) => {
                e.preventDefault();
                scrollTo(0, { duration: 1.2 });
              }}
              className="group flex items-center gap-3 cursor-pointer select-none"
            >
              <div
                className={`relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center transition-all duration-300 ease-out overflow-hidden ${
                  isScrolled
                    ? "bg-black border border-white/20 group-hover:border-[#C8FF00] group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(200,255,0,0.4)]"
                    : "bg-black border-2 border-black text-[#C8FF00] shadow-md group-hover:scale-105"
                }`}
              >
                <span className="text-[#C8FF00] font-display font-black text-xl sm:text-2xl transition-transform duration-300 group-hover:scale-110">
                  A
                </span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span
                    className={`font-display text-lg sm:text-xl font-black tracking-tight uppercase leading-none transition-colors ${
                      isScrolled
                        ? "text-white group-hover:text-[#C8FF00]"
                        : "text-[#0A0A0A] group-hover:text-black"
                    }`}
                  >
                    ASHWAN
                  </span>
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      isScrolled
                        ? "bg-[#C8FF00] shadow-[0_0_8px_#C8FF00] animate-pulse"
                        : "bg-black"
                    }`}
                  />
                </div>
                <span
                  className={`font-mono-tech text-[8px] sm:text-[9px] tracking-widest uppercase leading-tight font-black ${
                    isScrolled ? "text-neutral-400" : "text-black/75"
                  }`}
                >
                  VIDEO & GRAPHICS
                </span>
              </div>
            </Link>

            {/* ── Desktop Navigation ── */}
            <nav
              className={`hidden md:flex items-center gap-1 transition-all duration-500 ${
                isScrolled
                  ? "bg-black/60 border border-white/10 px-2 py-1 rounded-full backdrop-blur-xl shadow-inner"
                  : "bg-transparent border-transparent px-0 py-0"
              }`}
            >
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                const isHovered = hoveredNav === link.id;

                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onMouseEnter={() => setHoveredNav(link.id)}
                    onMouseLeave={() => setHoveredNav(null)}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="relative px-3.5 py-1.5 text-[11px] font-mono-tech uppercase tracking-wider rounded-full transition-colors duration-200 cursor-pointer select-none"
                  >
                    {/* Active Sliding Pill Indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="active-nav-pill"
                        transition={{ type: "spring", stiffness: 400, damping: 32 }}
                        className={`absolute inset-0 rounded-full shadow-md ${
                          isScrolled
                            ? "bg-[#C8FF00] shadow-[0_0_15px_rgba(200,255,0,0.55)]"
                            : "bg-black shadow-[0_4px_12px_rgba(0,0,0,0.25)]"
                        }`}
                      />
                    )}

                    {/* Hover Pill Background if Not Active */}
                    {!isActive && isHovered && (
                      <motion.div
                        layoutId="hover-nav-pill"
                        transition={{ type: "spring", stiffness: 450, damping: 28 }}
                        className={`absolute inset-0 rounded-full ${
                          isScrolled
                            ? "bg-white/12 border border-white/15"
                            : "bg-black/10 border border-black/15"
                        }`}
                      />
                    )}

                    <span
                      className={`relative z-10 transition-colors duration-200 ${
                        isActive
                          ? isScrolled
                            ? "text-black font-black"
                            : "text-[#C8FF00] font-black"
                          : isScrolled
                          ? isHovered
                            ? "text-white font-bold"
                            : "text-neutral-300 font-semibold"
                          : isHovered
                          ? "text-black font-black"
                          : "text-black/85 font-black"
                      }`}
                    >
                      {link.name}
                    </span>
                  </a>
                );
              })}
            </nav>

            {/* ── Right Action Controls ── */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              {/* Live Availability Pill */}
              <div
                className={`hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full font-mono-tech text-[10px] tracking-wider uppercase font-black transition-colors ${
                  isScrolled
                    ? "bg-black/50 border border-white/10 text-neutral-300"
                    : "bg-black/10 border border-black/15 text-black"
                }`}
              >
                <span className="relative flex h-2 w-2">
                  <span
                    className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                      isScrolled ? "bg-[#C8FF00]" : "bg-black"
                    }`}
                  />
                  <span
                    className={`relative inline-flex rounded-full h-2 w-2 ${
                      isScrolled ? "bg-[#C8FF00]" : "bg-black"
                    }`}
                  />
                </span>
                <span>OPEN FOR 2026</span>
              </div>

              {/* "LET'S TALK" CTA */}
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className={`group relative hidden sm:inline-flex items-center gap-2 font-display font-black text-xs uppercase px-4 sm:px-5 py-2 sm:py-2.5 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer overflow-hidden select-none ${
                  isScrolled
                    ? "bg-[#C8FF00] hover:bg-[#DFFF18] text-black shadow-[0_0_20px_rgba(200,255,0,0.35)] hover:shadow-[0_0_30px_rgba(200,255,0,0.6)]"
                    : "bg-black hover:bg-neutral-900 text-[#C8FF00] shadow-[0_4px_16px_rgba(0,0,0,0.25)] border-2 border-black"
                }`}
              >
                <span className="relative z-10 tracking-wider">LET&apos;S TALK</span>
                <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              {/* Mobile Drawer Trigger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`md:hidden p-2 rounded-xl transition-colors duration-200 active:scale-95 cursor-pointer shadow-md ${
                  isScrolled
                    ? "bg-black/80 border border-white/20 text-white hover:text-[#C8FF00] hover:border-[#C8FF00]"
                    : "bg-black text-[#C8FF00] border-2 border-black hover:bg-neutral-900"
                }`}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 text-[#C8FF00]" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </motion.div>
        </div>
      </header>

      {/* ── Interactive Animated Mobile Drawer ── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[#1E1E22]/98 backdrop-blur-2xl md:hidden pt-24 px-6 pb-8 flex flex-col justify-between overflow-y-auto"
          >
            {/* Top Meta Details */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex items-center justify-between pb-4 border-b border-white/10"
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#C8FF00] animate-pulse" />
                <span className="font-mono-tech text-xs text-neutral-400 uppercase tracking-widest font-bold">
                  {PROFILE_DATA.location.full}
                </span>
              </div>
              <span className="font-mono-tech text-[10px] bg-[#C8FF00] text-black px-2.5 py-0.5 rounded-full font-black uppercase tracking-wider">
                PORTFOLIO 2026
              </span>
            </motion.div>

            {/* Staggered Navigation Links */}
            <div className="flex flex-col gap-2 py-6">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  initial={{ opacity: 0, x: -25 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  className={`group py-3.5 border-b border-white/10 flex items-center justify-between cursor-pointer transition-colors ${
                    activeSection === link.id
                      ? "text-[#C8FF00]"
                      : "text-white hover:text-[#C8FF00]"
                  }`}
                >
                  <span className="font-display text-3xl font-black uppercase tracking-tight">
                    {link.name}
                  </span>
                  <div className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center transition-all group-hover:border-[#C8FF00] group-hover:bg-[#C8FF00] group-hover:text-black">
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Bottom Contact CTA Drawer Footer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="pt-6 border-t border-white/10 flex flex-col gap-3"
            >
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="w-full text-center bg-[#C8FF00] text-black font-display text-lg py-4 rounded-xl font-black uppercase tracking-wider hover:bg-white transition-all shadow-[0_0_25px_rgba(200,255,0,0.5)] flex items-center justify-center gap-2"
              >
                <span>LET&apos;S TALK</span>
                <Sparkles className="w-4 h-4" />
              </a>

              <p className="text-center font-mono-tech text-[10px] text-neutral-500 uppercase tracking-widest mt-2">
                ASHWAN JAKKINAPALLY // TELANGANA, INDIA
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
