export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  isCurrent?: boolean;
  type: string;
  responsibilities: string[];
  tools: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  year: string;
  note?: string;
}

export interface LanguageItem {
  name: string;
  level: string;
  native?: boolean;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  badge: string;
}

export interface ToolItem {
  name: string;
  category: string;
  shortName: string;
  accent: string;
  iconType: "pr" | "ae" | "ps" | "ai" | "dv" | "ai-gen";
  description: string;
}

export const PROFILE_DATA = {
  name: "Ashwan Jakkinapally",
  brandName: "ASHWAN",
  title: "Creative Video Editor & Graphic Designer",
  status: "Available for Select Commissions & Roles",
  year: "2026",
  location: {
    city: "Beeramguda, Kistareddypet",
    state: "Telangana",
    country: "India",
    full: "Beeramguda / Telangana / India",
  },
  contact: {
    email: "ashwanraojakkinapally@gmail.com",
    phone: "+91 83411 70665",
    phoneDisplay: "+91 83411 70665",
    whatsappUrl: "https://wa.me/918341170665",
    instagramHandle: "ashwan_rao",
    instagramUrl: "https://www.instagram.com/ashwan_rao?xtok=MTZxZGZyc3l2b2piYw%3D%3D",
    location: "Beeramguda, Telangana, India",
  },
  bio: {
    short:
      "Passionate video editor and graphic designer specializing in high-impact motion, narrative rhythm, and aesthetic visual identity.",
    editorial:
      "I’m Ashwan, a passionate video editor and graphic designer with hands-on experience in editing, motion graphics, and visual storytelling. Skilled in Premiere Pro, After Effects, and Photoshop, I focus on creating clean, compelling visuals that communicate through strong storytelling, thoughtful composition, and precise editing.",
  },
  experiences: [
    {
      id: "tac-art-code",
      role: "Graphic Designer & Video Editor",
      company: "TAC — The Art Code",
      period: "March 2026 – Present",
      isCurrent: true,
      type: "Full-Time / Agency",
      responsibilities: [
        "Graphic design and high-cadence video editing for contemporary digital campaigns.",
        "Visual storytelling, creative production, and narrative framing.",
        "Crafting original visual assets, social reels, and promotional collateral for digital platforms.",
      ],
      tools: ["Premiere Pro", "After Effects", "Photoshop", "Illustrator"],
    },
    {
      id: "freelance-editor",
      role: "Freelance Video Editor",
      company: "Independent Practice",
      period: "November 2025",
      isCurrent: false,
      type: "Freelance / Commissioned",
      responsibilities: [
        "Pacing and editing cinematic wedding teaser films and celebratory narratives.",
        "Music synchronization and mood-driven rhythm for wedding song video cuts.",
        "YouTube video songs editing, sound layering, and color correction.",
      ],
      tools: ["Premiere Pro", "DaVinci Resolve", "After Effects"],
    },
  ] as ExperienceItem[],
  education: [
    {
      degree: "B.Sc. (MSCS)",
      institution: "Prathibha Degree & PG College",
      year: "2024",
      note: "Mathematics, Statistics & Computer Science foundation.",
    },
  ] as EducationItem[],
  languages: [
    { name: "Telugu", level: "Native Proficiency", native: true },
    { name: "Hindi", level: "Professional Working", native: false },
    { name: "English", level: "Professional Working", native: false },
  ] as LanguageItem[],
  services: [
    {
      id: "short-form",
      number: "01",
      title: "Short-Form Video Editing",
      tagline: "High retention, hook-driven narrative pacing.",
      description:
        "Engineered for the scroll culture. Snappy cuts, dynamic speed ramps, rhythmic kinetic subtitles, and audio sound effects that retain viewer attention from second one.",
      highlights: ["Hooks & Retention Optimization", "Kinetic Subtitles & Sound FX", "Custom Motion Graphics"],
      badge: "REEL / TIKTOK / SHORTS",
    },
    {
      id: "documentary",
      number: "02",
      title: "Documentary-Style Editing",
      tagline: "Atmospheric pacing, human emotion, and journalistic clarity.",
      description:
        "Building narratives that linger. Seamless B-roll integration, contextual archival treatment, dramatic pause management, and evocative musical score weaving.",
      highlights: ["Narrative Structure & Pacing", "Archival Texture & Scanlines", "Multi-Cam Synchronization"],
      badge: "LONG FORM / DOCS",
    },
    {
      id: "storytelling",
      number: "03",
      title: "Visual Storytelling",
      tagline: "Bridging concept to emotion through deliberate frames.",
      description:
        "Every cut has a motive. Orchestrating graphic compositions, eye-tracing paths, and tension curves that transform raw clips into unforgettable visual memoirs.",
      highlights: ["Eye-Trace Continuity", "Rhythmic Beat Matching", "Thematic Montage"],
      badge: "DIRECTOR CUT",
    },
    {
      id: "color-grading",
      number: "04",
      title: "Video Color Correction",
      tagline: "Atmospheric look development and tonal richness.",
      description:
        "Precision skin-tone preservation, film emulsion LUT crafting, split-toning, and high-contrast moody palettes tailored for wedding epics and commercial releases.",
      highlights: ["Film Grain & Halation", "Color Harmony Balancing", "DaVinci Grading"],
      badge: "GRADE & TONE",
    },
    {
      id: "reels-shorts",
      number: "05",
      title: "Reels & Shorts",
      tagline: "Viral aesthetics with clean editorial discipline.",
      description:
        "Vertical 9:16 canvases treated with cinematic respect. Bold typography, 3D asset track-ins, and high-contrast color pops engineered for maximum engagement.",
      highlights: ["9:16 Vertical Framing", "Seamless Loop Points", "Audio Trend Syncing"],
      badge: "VIRAL RETENTION",
    },
    {
      id: "sound-design",
      number: "06",
      title: "Sound Design & Music Sync",
      tagline: "Audio as the invisible half of the visual experience.",
      description:
        "Rumble risers, cinematic swooshes, subtle foley textures, and micro-timed audio cuts that make every beat hit with visceral impact.",
      highlights: ["Foley & Ambient Textures", "Downbeat Impacts & Risers", "Vocal Clarity Mastering"],
      badge: "AUDIO SPATIAL",
    },
  ] as ServiceItem[],
  tools: [
    {
      name: "Adobe Premiere Pro",
      category: "NLE Video Editing",
      shortName: "Pr",
      accent: "#9999FF",
      iconType: "pr",
      description: "Primary assembly, narrative pacing, multi-camera sync, timeline mastery.",
    },
    {
      name: "Adobe After Effects",
      category: "Motion Graphics & VFX",
      shortName: "Ae",
      accent: "#D291FF",
      iconType: "ae",
      description: "Kinetic typography, screen replacements, 2D/3D tracking, visual effects.",
    },
    {
      name: "Adobe Photoshop",
      category: "Graphic Design & Retouching",
      shortName: "Ps",
      accent: "#31A8FF",
      iconType: "ps",
      description: "Key art poster design, campaign composites, image manipulation, thumbnail crafting.",
    },
    {
      name: "Adobe Illustrator",
      category: "Vector & Identity",
      shortName: "Ai",
      accent: "#FF9A00",
      iconType: "ai",
      description: "Vector marks, experimental typography, brand glyphs, logo lockups.",
    },
    {
      name: "DaVinci Resolve",
      category: "Color Grading & Finishing",
      shortName: "Dv",
      accent: "#FF5E5E",
      iconType: "dv",
      description: "Node-based color grading, exposure balance, cinematic film emulation.",
    },
    {
      name: "AI Tools for Editing",
      category: "Generative & Automation",
      shortName: "AI",
      accent: "#C8FF00",
      iconType: "ai-gen",
      description: "Generative fill, voice isolation, smart object rotoscoping, upscaling.",
    },
  ] as ToolItem[],
  workflowPipeline: [
    { step: "01", label: "FOOTAGE", detail: "Raw ingest, logging & assembly selection" },
    { step: "02", label: "STORY", detail: "Narrative arc, emotional spine & pacing structure" },
    { step: "03", label: "EDIT", detail: "Rhythmic cut, speed ramps & match transitions" },
    { step: "04", label: "COLOR", detail: "Film emulation, skin tone balancing & mood grade" },
    { step: "05", label: "SOUND", detail: "Foley layer, music lock & punchy audio mastering" },
    { step: "06", label: "FINAL FRAME", detail: "Master render, compression & delivery ready" },
  ],
};
