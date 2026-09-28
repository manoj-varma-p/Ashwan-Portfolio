"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, MessageSquare } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Posters", href: "#posters" },
  { name: "Videos", href: "#videos" },
  { name: "Skills", href: "#skills" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Detect active section
      const sections = NAV_LINKS.map((link) => link.href.substring(1));
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#08171E]/90 backdrop-blur-xl border-b border-[#096B90]/30 py-3 shadow-[0_10px_30px_-10px_rgba(4,43,68,0.7)]"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-full overflow-hidden bg-[#042B44] border-2 border-[#71B7D5]/70 shadow-[0_0_15px_rgba(113,183,213,0.5)] group-hover:border-[#71B7D5] group-hover:scale-105 transition-all">
              <Image
                src="/images/ashwan-avatar.png"
                alt="Ashwan Jakkinapally Logo"
                fill
                priority
                className="object-cover object-top"
                sizes="40px"
              />
            </div>

            <div className="flex flex-col">
              <span className="font-sans font-extrabold text-base tracking-tight text-[#F0F8FF] group-hover:text-[#71B7D5] transition-colors flex items-center gap-1.5">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[10px] font-mono tracking-widest text-[#A1CCDC] uppercase">
                Video Editor & Designer
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[#042B44]/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#096B90]/30">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-2 text-xs font-bold tracking-wide transition-colors rounded-full ${
                    isActive ? "text-[#F0F8FF]" : "text-[#A1CCDC] hover:text-[#F0F8FF]"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-[#096B90] rounded-full border border-[#71B7D5]/40 shadow-[0_0_15px_rgba(113,183,213,0.4)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full bg-[#042B44] border border-[#096B90]/40 text-[#A1CCDC] hover:text-[#F0F8FF] hover:border-[#71B7D5] hover:shadow-[0_0_15px_rgba(113,183,213,0.3)] transition-all"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-4 h-4 text-[#71B7D5]" />
            </a>

            <a
              href="#contact"
              className="relative group overflow-hidden rounded-full p-[1px] focus:outline-none"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#096B90] via-[#71B7D5] to-[#A1CCDC] rounded-full opacity-80 group-hover:opacity-100 transition-opacity blur-[1px]" />
              <span className="relative px-5 py-2.5 rounded-full bg-[#042B44] text-[#F0F8FF] font-bold text-xs tracking-wider uppercase transition-all duration-300 group-hover:bg-[#096B90] flex items-center gap-2">
                <span>Let's Talk</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#71B7D5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-[#042B44] border border-[#096B90]/40 text-[#F0F8FF] hover:text-[#71B7D5] transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-20 bg-[#08171E]/98 backdrop-blur-2xl z-40 md:hidden flex flex-col justify-between p-6 border-t border-[#096B90]/30"
          >
            <nav className="flex flex-col space-y-4 pt-4">
              {NAV_LINKS.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="font-sans text-2xl font-extrabold text-[#F0F8FF] hover:text-[#71B7D5] transition-colors flex items-center justify-between py-2 border-b border-[#096B90]/20"
                >
                  <span>{link.name}</span>
                  <span className="font-mono text-xs text-[#A1CCDC]">0{idx + 1}</span>
                </motion.a>
              ))}
            </nav>

            <div className="pt-6 border-t border-[#096B90]/30 flex flex-col gap-3">
              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3.5 rounded-xl bg-[#042B44] border border-[#096B90]/40 text-[#F0F8FF] font-bold text-center text-sm uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-[#71B7D5]" />
                <span>WhatsApp: {PERSONAL_INFO.phoneFormatted}</span>
              </a>

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#096B90] to-[#71B7D5] text-[#08171E] font-extrabold text-center text-sm uppercase tracking-wider shadow-[0_0_25px_rgba(113,183,213,0.5)]"
              >
                Get In Touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
