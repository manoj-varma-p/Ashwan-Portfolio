"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  CheckCircle2,
  Copy,
  Check,
  ArrowUpRight,
} from "lucide-react";
import InstagramIcon from "@/components/icons/InstagramIcon";
import { PERSONAL_INFO } from "@/data/portfolioData";
import TextReveal from "@/components/animations/TextReveal";
import ScrollReveal from "@/components/animations/ScrollReveal";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Poster / Graphic Design",
    timeline: "Standard (1-2 Weeks)",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate smooth processing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);

      // Trigger celebratory confetti using oceanic palette colors
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#096B90", "#71B7D5", "#A1CCDC", "#042B44", "#FFFFFF"],
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        service: "Poster / Graphic Design",
        timeline: "Standard (1-2 Weeks)",
        message: "",
      });

      // Auto-hide success toast after 6s
      setTimeout(() => {
        setIsSuccess(false);
      }, 6000);
    }, 900);
  };

  return (
    <section id="contact" className="py-14 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative scroll-mt-20">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#096B90]/15 blur-[160px] pointer-events-none rounded-full" />

      <ScrollReveal variant="zoom-in" delay={0.1}>
        <div className="relative z-10 glass-card p-5 sm:p-10 md:p-16 rounded-3xl border border-[#A1CCDC]/15 shadow-[0_25px_60px_-15px_rgba(4,43,68,0.8)] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Direct Inquiries & Socials */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <span className="text-[#A1CCDC] font-mono text-xs uppercase tracking-widest inline-flex items-center gap-2">
                <span>Let's Connect</span>
              </span>

              <h2 className="font-sans text-3xl sm:text-5xl font-extrabold text-[#F0F8FF] leading-tight">
                <TextReveal text="Have a Project in Mind?" as="span" />{" "}
                <TextReveal text="Let's Talk!" as="span" gradient delay={0.2} />
              </h2>
            </div>

            <p className="text-[#A1CCDC] text-sm sm:text-base leading-relaxed font-normal">
              Whether you need a high-retention reel sequence, a cinematic wedding cut, or a theatrical poster for your next release, I'm ready to bring your vision to life.
            </p>

            <div className="space-y-4 pt-2">
              {/* WhatsApp Direct Chat */}
              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-4 rounded-2xl bg-[#042B44]/90 hover:bg-[#042B44] border border-[#096B90]/40 hover:border-[#71B7D5] hover:shadow-[0_0_25px_rgba(9,107,144,0.35)] transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#096B90]/25 text-[#F0F8FF] flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                    <MessageSquare className="w-6 h-6 text-[#71B7D5]" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-[#A1CCDC] font-bold uppercase">
                      INSTANT WHATSAPP CHAT
                    </p>
                    <p className="text-sm font-bold text-[#F0F8FF] group-hover:text-[#71B7D5] transition-colors">
                      {PERSONAL_INFO.phoneFormatted}
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#A1CCDC] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform mr-2" />
              </a>

              {/* Direct Email */}
              <div className="flex items-center justify-between p-4 rounded-2xl bg-[#042B44]/90 hover:bg-[#042B44] border border-[#A1CCDC]/15 hover:border-[#096B90]/60 transition-all group">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-4 overflow-hidden"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#096B90]/20 text-[#F0F8FF] flex items-center justify-center text-xl group-hover:scale-110 transition-transform shrink-0">
                    <Mail className="w-6 h-6 text-[#71B7D5]" />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-[10px] font-mono text-[#A1CCDC] uppercase">
                      DIRECT EMAIL
                    </p>
                    <p className="text-xs sm:text-sm font-bold text-[#F0F8FF] group-hover:text-[#71B7D5] transition-colors truncate">
                      {PERSONAL_INFO.email}
                    </p>
                  </div>
                </a>
                <button
                  onClick={() => handleCopy(PERSONAL_INFO.email, "email-contact")}
                  className="p-2 rounded-xl bg-white/5 hover:bg-[#096B90]/30 text-[#A1CCDC] hover:text-[#F0F8FF] transition-colors shrink-0 ml-2"
                  title="Copy email"
                >
                  {copiedKey === "email-contact" ? (
                    <Check className="w-4 h-4 text-[#71B7D5]" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Direct Phone */}
              <div className="flex items-center justify-between p-4 rounded-2xl bg-[#042B44]/90 hover:bg-[#042B44] border border-[#A1CCDC]/15 hover:border-[#096B90]/60 transition-all group">
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#096B90]/20 text-[#F0F8FF] flex items-center justify-center text-xl group-hover:scale-110 transition-transform shrink-0">
                    <Phone className="w-6 h-6 text-[#71B7D5]" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-[#A1CCDC] uppercase">
                      DIRECT PHONE CALL
                    </p>
                    <p className="text-sm font-bold text-[#F0F8FF] group-hover:text-[#71B7D5] transition-colors">
                      {PERSONAL_INFO.phone}
                    </p>
                  </div>
                </a>
                <button
                  onClick={() => handleCopy(PERSONAL_INFO.phone, "phone-contact")}
                  className="p-2 rounded-xl bg-white/5 hover:bg-[#096B90]/30 text-[#A1CCDC] hover:text-[#F0F8FF] transition-colors shrink-0 ml-2"
                  title="Copy phone"
                >
                  {copiedKey === "phone-contact" ? (
                    <Check className="w-4 h-4 text-[#71B7D5]" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Instagram & Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="p-4 rounded-2xl bg-[#042B44]/60 border border-[#A1CCDC]/15 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#096B90]/20 text-[#F0F8FF] flex items-center justify-center shrink-0">
                    <InstagramIcon className="w-5 h-5 text-[#71B7D5]" />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-[10px] font-mono text-[#A1CCDC] uppercase">
                      INSTAGRAM
                    </p>
                    <p className="text-xs font-bold text-[#F0F8FF] truncate">
                      {PERSONAL_INFO.instagram}
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#042B44]/60 border border-[#A1CCDC]/15 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#096B90]/20 text-[#F0F8FF] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#71B7D5]" />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-[10px] font-mono text-[#A1CCDC] uppercase">
                      LOCATION
                    </p>
                    <p className="text-xs font-bold text-[#F0F8FF] truncate">
                      Telangana, India
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-mono text-[#A1CCDC] uppercase tracking-wider mb-2"
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full bg-[#08171E] border border-[#096B90]/40 rounded-2xl px-4 py-3.5 text-sm text-[#F0F8FF] placeholder-[#A1CCDC]/50 focus:outline-none focus:border-[#71B7D5] focus:ring-1 focus:ring-[#71B7D5] transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-mono text-[#A1CCDC] uppercase tracking-wider mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder="name@domain.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full bg-[#08171E] border border-[#096B90]/40 rounded-2xl px-4 py-3.5 text-sm text-[#F0F8FF] placeholder-[#A1CCDC]/50 focus:outline-none focus:border-[#71B7D5] focus:ring-1 focus:ring-[#71B7D5] transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="service"
                    className="block text-xs font-mono text-[#A1CCDC] uppercase tracking-wider mb-2"
                  >
                    Service Required
                  </label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                    className="w-full bg-[#08171E] border border-[#096B90]/40 rounded-2xl px-4 py-3.5 text-sm text-[#F0F8FF] focus:outline-none focus:border-[#71B7D5] focus:ring-1 focus:ring-[#71B7D5] transition-all"
                  >
                    <option value="Poster / Graphic Design">
                      Poster / Graphic Design
                    </option>
                    <option value="Short-Form Video / Reels">
                      Short-Form Video / Reels
                    </option>
                    <option value="Documentary Style Editing">
                      Documentary Style Editing
                    </option>
                    <option value="Wedding Teaser / Song Video">
                      Wedding Teaser / Song Video
                    </option>
                    <option value="Motion Graphics & Titles">
                      Motion Graphics & Titles
                    </option>
                    <option value="Other Creative Request">
                      Other Creative Request
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="timeline"
                    className="block text-xs font-mono text-[#A1CCDC] uppercase tracking-wider mb-2"
                  >
                    Expected Timeline
                  </label>
                  <select
                    id="timeline"
                    value={formData.timeline}
                    onChange={(e) =>
                      setFormData({ ...formData, timeline: e.target.value })
                    }
                    className="w-full bg-[#08171E] border border-[#096B90]/40 rounded-2xl px-4 py-3.5 text-sm text-[#F0F8FF] focus:outline-none focus:border-[#71B7D5] focus:ring-1 focus:ring-[#71B7D5] transition-all"
                  >
                    <option value="Urgent (24 - 48 Hours)">
                      Urgent (24 - 48 Hours)
                    </option>
                    <option value="Standard (1-2 Weeks)">
                      Standard (1-2 Weeks)
                    </option>
                    <option value="Flexible / Long-Term">
                      Flexible / Long-Term
                    </option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-mono text-[#A1CCDC] uppercase tracking-wider mb-2"
                >
                  Project Details & Footage Specs *
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  placeholder="Share your video concepts, reference links, poster dimensions, or editing requirements..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full bg-[#08171E] border border-[#096B90]/40 rounded-2xl px-4 py-3.5 text-sm text-[#F0F8FF] placeholder-[#A1CCDC]/50 focus:outline-none focus:border-[#71B7D5] focus:ring-1 focus:ring-[#71B7D5] transition-all"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#096B90] via-[#71B7D5] to-[#096B90] bg-[length:200%_auto] hover:bg-right text-[#08171E] font-extrabold text-sm uppercase tracking-wider hover:shadow-[0_0_35px_rgba(113,183,213,0.5)] transition-all duration-500 flex items-center justify-center gap-2.5 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-[#08171E] border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <span>Send Project Message</span>
                    <Send className="w-4 h-4 ml-1" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </ScrollReveal>

      {/* Toast Notification Banner */}
      <AnimatePresence>
        {isSuccess && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-8 right-8 z-[10001] glass-card border border-[#71B7D5]/60 px-6 py-4 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.9)] flex items-center gap-4 max-w-md bg-[#042B44]/95"
          >
            <div className="w-10 h-10 rounded-full bg-[#096B90]/30 text-[#F0F8FF] flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-6 h-6 text-[#71B7D5]" />
            </div>
            <div className="space-y-0.5">
              <h4 className="font-sans font-extrabold text-[#F0F8FF] text-sm">
                Message Sent Successfully!
              </h4>
              <p className="text-xs text-[#A1CCDC]">
                Thank you! Ashwan will review your project inquiry and reply promptly.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
