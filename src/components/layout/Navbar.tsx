"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { PROFILE_DATA } from "@/data/profile";
import { useSmoothScroll } from "@/components/motion/SmoothScroll";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const { scrollTo } = useSmoothScroll();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
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
          if (entry.isIntersecting && entry.intersectionRatio >= 0.25) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.25 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { name: "About", href: "#about", id: "about" },
    { name: "Work", href: "#work", id: "work" },
    { name: "Services", href: "#services", id: "services" },
    { name: "Tools", href: "#tools", id: "tools" },
    { name: "Experience", href: "#experience", id: "experience" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    scrollTo(href, { offset: -72, duration: 1.35 });
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#0A0A0A]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.8)]"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Wordmark */}
          <Link
            href="#"
            onClick={(e) => {
              e.preventDefault();
              scrollTo(0, { duration: 1.35 });
            }}
            className="group flex items-center gap-3 font-display tracking-tight cursor-pointer"
          >
            <div className="w-9 h-9 bg-black rounded-lg border border-white/20 flex items-center justify-center transition-transform group-hover:scale-105 shadow-sm">
              <span className="text-[#C8FF00] font-black text-xl">A</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-[#C8FF00] transition-colors leading-none">
                ASHWAN
              </span>
              <span className="font-mono-tech text-[9px] tracking-widest text-neutral-400 uppercase leading-tight font-semibold">
                VIDEO & GRAPHICS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[#141414]/90 border border-white/15 px-3 py-1.5 rounded-full backdrop-blur-md shadow-lg">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3.5 py-1 text-xs font-mono-tech uppercase tracking-wider rounded-full transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-white text-black font-black shadow-md scale-105"
                      : "text-neutral-300 hover:text-white hover:bg-white/10 font-semibold"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Bar */}
          <div className="flex items-center gap-3">
            {/* Quick Contact CTA */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="hidden sm:inline-flex items-center gap-1.5 bg-[#C8FF00] hover:bg-[#DFFF18] text-black border border-black/20 font-mono-tech font-bold text-xs uppercase px-4 py-2 rounded-full transition-all duration-200 hover:scale-105 shadow-sm active:scale-95 cursor-pointer"
            >
              <span>LET&apos;S TALK</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-[#141414] border border-white/15 text-white hover:bg-white hover:text-black transition-colors duration-200 active:scale-95 cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[60px] z-30 bg-[#0F0F0F]/98 border-b border-white/10 backdrop-blur-xl p-6 md:hidden shadow-2xl text-white"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="font-mono-tech text-xs text-neutral-400">
                  {PROFILE_DATA.location.full}
                </span>
                <span className="font-mono-tech text-[10px] bg-white text-black px-2 py-0.5 rounded font-black">
                  2026 EDITION
                </span>
              </div>

              <div className="flex flex-col gap-2 pt-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`font-display text-2xl transition-colors py-2 border-b border-white/5 flex items-center justify-between cursor-pointer ${
                      activeSection === link.id
                        ? "text-[#C8FF00] font-black"
                        : "text-white hover:text-[#C8FF00]"
                    }`}
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-40" />
                  </a>
                ))}
              </div>

              <div className="pt-4 flex flex-col gap-3">
                <a
                  href={`mailto:${PROFILE_DATA.contact.email}`}
                  className="w-full text-center bg-[#C8FF00] text-black font-display text-lg py-3 rounded-lg font-black tracking-wider hover:bg-white transition-colors"
                >
                  START A PROJECT
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
