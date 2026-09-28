import Preloader from "@/components/Preloader";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import PostersShowcase from "@/components/PostersShowcase";
import VideoShowcase from "@/components/VideoShowcase";
import SkillsSection from "@/components/SkillsSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/animations/SectionDivider";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#08171E] text-[#F0F8FF] relative selection:bg-[#71B7D5] selection:text-[#08171E]">
      {/* Luxury Loading Preloader */}
      <Preloader />

      {/* Physics-based Custom Cursor */}
      <CustomCursor />

      {/* Top Scroll Indicator */}
      <ScrollProgress />

      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* Hero Section with 3D Card Physics & Staggered Reveal */}
      <Hero />

      {/* Animated Glowing Section Divider */}
      <SectionDivider />

      {/* About & Career Timeline with Text Highlight on Scroll */}
      <AboutSection />

      {/* Animated Glowing Section Divider */}
      <SectionDivider />

      {/* 9 Posters Showcase with Filter Tabs & Lightbox Modal */}
      <PostersShowcase />

      {/* Animated Glowing Section Divider */}
      <SectionDivider />

      {/* Video Editing Portfolio with Playable Embed Player */}
      <VideoShowcase />

      {/* Animated Glowing Section Divider */}
      <SectionDivider />

      {/* Technical Arsenal & Proficiency Bars */}
      <SkillsSection />

      {/* Animated Glowing Section Divider */}
      <SectionDivider />

      {/* Capabilities & Deliverables */}
      <ServicesSection />

      {/* Animated Glowing Section Divider */}
      <SectionDivider />

      {/* Contact Section with Instant WhatsApp & Confetti Form */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
