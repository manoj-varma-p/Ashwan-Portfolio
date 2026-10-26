"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Copy, Check, ArrowUpRight, Send } from "lucide-react";
import { InstagramIcon } from "@/components/ui/Icons";
import { PROFILE_DATA } from "@/data/profile";
import { copyToClipboard } from "@/lib/utils";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

export function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Video Editing",
    message: "",
  });
  const [isSent, setIsSent] = useState(false);

  const handleCopyEmail = () => {
    copyToClipboard(PROFILE_DATA.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleCopyPhone = () => {
    copyToClipboard(PROFILE_DATA.contact.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2200);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project Inquiry: ${formData.projectType} from ${formData.name}`);
    const body = encodeURIComponent(
      `Hello Ashwan,\n\nMy name is ${formData.name} (${formData.email}).\n\nProject Category: ${formData.projectType}\n\nProject Details:\n${formData.message}\n\nLooking forward to collaborating!`
    );
    window.location.href = `mailto:${PROFILE_DATA.contact.email}?subject=${subject}&body=${body}`;
    setIsSent(true);
  };

  return (
    <section id="contact" className="relative w-full bg-[#050505] text-[#F5F5F0] py-28 px-4 sm:px-6 lg:px-8 border-t border-white/10 overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C8FF00]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Centered Section Header */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-[#C8FF00]" />
              <span className="font-mono-tech text-xs uppercase tracking-widest text-[#C8FF00] font-bold">
                06 — COLLABORATION & INQUIRIES
              </span>
              <div className="w-8 h-[2px] bg-[#C8FF00]" />
            </div>

            <h2 className="font-display text-5xl sm:text-7xl md:text-8xl font-black uppercase tracking-tight text-white leading-[0.88] mb-4">
              GOT A STORY <span className="text-[#C8FF00]">TO TELL?</span>
            </h2>

            <p className="mt-4 text-base sm:text-xl text-neutral-300 font-sans-editorial max-w-2xl mx-auto leading-relaxed">
              &ldquo;Have a project, a visual idea, or a story that deserves the right treatment? Let’s make something worth watching.&rdquo;
            </p>
          </div>
        </ScrollReveal>

        {/* Contact Grid: Direct Channels vs Quick Project Brief */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Action Tiles */}
          <div className="lg:col-span-5">
            <ScrollReveal direction="up" delay={0.2} className="space-y-4">
            
            {/* Email Card — Standout Pure White Contrast Card */}
            <div className="p-6 rounded-3xl bg-white border border-white/20 text-black shadow-2xl hover:scale-[1.02] transition-all duration-300 group relative overflow-hidden glossy-shine-light glossy-rim-light">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono-tech text-xs text-neutral-600 uppercase tracking-wider flex items-center gap-2 font-bold">
                  <Mail className="w-4 h-4 text-black" />
                  DIRECT INBOX
                </span>
                <span className="font-mono-tech text-[10px] bg-black text-[#C8FF00] font-black px-2 py-0.5 rounded shadow-sm">
                  24H RESPONSE
                </span>
              </div>

              <div className="flex items-center justify-between gap-3">
                <a
                  href={`mailto:${PROFILE_DATA.contact.email}`}
                  className="font-mono-tech text-sm sm:text-base font-black text-black group-hover:underline transition-colors duration-200 break-all"
                >
                  {PROFILE_DATA.contact.email}
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="p-2.5 rounded-full bg-neutral-100 hover:bg-black hover:text-[#C8FF00] text-black transition-all duration-200 hover:scale-105 active:scale-95 shrink-0 shadow-sm"
                  title="Copy email address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-600 stroke-[3]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Phone & WhatsApp Card */}
            <div className="p-6 rounded-3xl bg-[#101010] border border-white/10 hover:border-[#C8FF00]/40 transition-all duration-300 ease-out hover:shadow-2xl hover:-translate-y-1 group shadow-xl relative overflow-hidden glossy-shine glossy-rim">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono-tech text-xs text-neutral-400 uppercase tracking-wider flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#C8FF00]" />
                  PHONE / WHATSAPP
                </span>
                <span className="font-mono-tech text-[10px] text-neutral-400">
                  IST (UTC+5:30)
                </span>
              </div>

              <div className="flex items-center justify-between gap-3">
                <a
                  href={`tel:${PROFILE_DATA.contact.phone.replace(/\s+/g, "")}`}
                  className="font-mono-tech text-lg sm:text-xl font-bold text-white group-hover:text-[#C8FF00] transition-colors duration-200"
                >
                  {PROFILE_DATA.contact.phoneDisplay}
                </a>
                <button
                  onClick={handleCopyPhone}
                  className="p-2.5 rounded-full bg-white/10 hover:bg-[#C8FF00] hover:text-black text-white transition-all duration-200 hover:scale-105 active:scale-95 shrink-0"
                  title="Copy phone number"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-[#C8FF00]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Instagram Social Tile */}
            <div className="p-6 rounded-3xl bg-[#101010] border border-white/10 hover:border-[#C8FF00]/40 transition-all duration-300 ease-out hover:shadow-2xl hover:-translate-y-1 group shadow-xl relative overflow-hidden glossy-shine glossy-rim">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono-tech text-xs text-neutral-400 uppercase tracking-wider flex items-center gap-2">
                  <InstagramIcon className="w-4 h-4 text-[#FF6A00]" />
                  INSTAGRAM
                </span>
                <span className="font-mono-tech text-[10px] text-[#FF6A00] font-bold">
                  REELS & EDITS
                </span>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <span className="font-display text-2xl font-black text-white group-hover:text-[#C8FF00] transition-colors duration-200">
                    {PROFILE_DATA.contact.instagramHandle}
                  </span>
                  <p className="font-mono-tech text-xs text-neutral-400 mt-0.5">
                    Behind-the-scenes cuts & visual experiments
                  </p>
                </div>
                <a
                  href={PROFILE_DATA.contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-white/10 hover:bg-[#C8FF00] hover:text-black text-white transition-all duration-200 hover:scale-105 active:scale-95"
                  aria-label="Visit Instagram"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Location Tile */}
            <div className="p-6 rounded-3xl bg-[#101010] border border-white/10 hover:border-white/20 transition-all duration-300 flex items-center gap-4 shadow-xl relative overflow-hidden glossy-shine glossy-rim group">
              <div className="w-10 h-10 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center text-[#C8FF00]">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="font-mono-tech text-[10px] uppercase tracking-wider text-neutral-400 block">
                  PHYSICAL LOCATION
                </span>
                <p className="font-sans-editorial text-sm font-semibold text-white">
                  {PROFILE_DATA.location.city}, {PROFILE_DATA.location.state}, {PROFILE_DATA.location.country}
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

          {/* Right Column: Interactive Direct Email Composer */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="up" delay={0.26}>
              <div className="p-8 sm:p-10 rounded-3xl bg-[#0F0F0F] border border-white/10 shadow-2xl relative overflow-hidden glossy-shine glossy-rim group">
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10">
                <span className="font-display text-2xl uppercase tracking-tight text-white">
                  Start a Commission
                </span>
                {/* Standout Pure White Badge */}
                <span className="font-mono-tech text-xs bg-white text-black font-extrabold px-3 py-1 rounded-full shadow-md">
                  ACTIVE FOR 2026
                </span>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono-tech text-xs text-neutral-300 uppercase tracking-wider mb-2 font-medium">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe / Studio"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#181818] border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#C8FF00] focus:ring-1 focus:ring-[#C8FF00]/30 transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="block font-mono-tech text-xs text-neutral-300 uppercase tracking-wider mb-2 font-medium">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. client@brand.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#181818] border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#C8FF00] focus:ring-1 focus:ring-[#C8FF00]/30 transition-all duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-mono-tech text-xs text-neutral-300 uppercase tracking-wider mb-2 font-medium">
                    Project Discipline
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full bg-[#181818] border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C8FF00] focus:ring-1 focus:ring-[#C8FF00]/30 transition-all duration-200"
                  >
                    <option value="Wedding Teaser / Film">Wedding Teaser / Film Cut</option>
                    <option value="Short-Form Reels & Shorts">Viral Reels & Shorts (9:16)</option>
                    <option value="Commercial Product Advertising">Commercial Product Advertising</option>
                    <option value="YouTube Long-Form / Documentary">YouTube Long-Form / Documentary</option>
                    <option value="Color Grading & Finishing">Color Grading & Finishing</option>
                    <option value="Graphic Design & Identity">Graphic Design & Key Visuals</option>
                  </select>
                </div>

                <div>
                  <label className="block font-mono-tech text-xs text-neutral-300 uppercase tracking-wider mb-2 font-medium">
                    Project Vision / Timeline
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell Ashwan about your footage, deadline, music references, and goals..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#181818] border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#C8FF00] focus:ring-1 focus:ring-[#C8FF00]/30 transition-all duration-200"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#C8FF00] hover:bg-[#DFFF18] text-black font-display text-lg py-4 rounded-xl font-black uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-200 ease-out hover:shadow-[0_0_25px_rgba(200,255,0,0.5)] hover:scale-[1.01] active:scale-[0.99]"
                >
                  <span>LAUNCH INQUIRY VIA EMAIL</span>
                  <Send className="w-4 h-4" />
                </button>

                {isSent && (
                  <p className="font-mono-tech text-xs text-center text-[#C8FF00] font-bold mt-2">
                    ✓ Opening your email client with your pre-filled inquiry...
                  </p>
                )}
              </form>
            </div>
          </ScrollReveal>
        </div>

        </div>

      </div>
    </section>
  );
}
