export interface PosterItem {
  id: string;
  title: string;
  category: "Movie Posters" | "Brand & Concepts" | "Creative Art" | "Thumbnails";
  subtitle: string;
  description: string;
  tools: string[];
  image: string;
  featured?: boolean;
}

export interface VideoItem {
  id: string;
  title: string;
  category: string;
  description: string;
  duration: string;
  tools: string[];
  youtubeEmbedUrl?: string;
  posterImage: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  highlights: string[];
}

export interface SkillItem {
  name: string;
  category: "editing" | "design" | "tools";
  level: number;
  levelLabel: string;
  color: string;
  description: string;
}

export const PERSONAL_INFO = {
  name: "Ashwan Jakkinapally",
  role: "Creative Video Editor & Graphic Designer",
  phone: "+91 834 117 0665",
  phoneFormatted: "+91 834 117 0665",
  whatsappUrl: "https://wa.me/918341170665",
  email: "ashwanraojakkinapally@gmail.com",
  instagram: "HUKUM@3133",
  instagramUrl: "https://instagram.com",
  location: "Beeramguda Kistareddypet, Telangana, India",
  experienceYears: "3+",
  projectsCount: "50+",
  tagline: "Focused on story-driven video editing, motion graphics, and high-impact poster artwork that captivates audiences.",
  resumeImage: "/images/ashwan-resume-profile.jpeg"
};

export const POSTERS_DATA: PosterItem[] = [
  {
    id: "ranabaali-vijay",
    title: "Ranabaali — Vijay Deverakonda First Look",
    category: "Movie Posters",
    subtitle: "Rahul Sankrityan Film Key Art",
    description: "Official key art and first look poster design for Ranabaali starring Vijay Deverakonda, directed by Rahul Sankrityan. Produced by Mythri Movie Makers & T-Series with dramatic low-key lighting, intense character expression, and rugged title design.",
    tools: ["Adobe Photoshop", "Cinematic Lighting", "Typography", "Color Grading"],
    image: "/images/poster-ranabaali-vijay.jpeg",
    featured: true
  },
  {
    id: "ranabaali-rashmika",
    title: "Ranabaali — Rashmika Mandanna Release Poster",
    category: "Movie Posters",
    subtitle: "Oct 16 Worldwide Theatrical Key Art",
    description: "Official theatrical release date poster for Ranabaali featuring Rashmika Mandanna. Designed with warm atmospheric candlelight, traditional period textures, and metallic 3D release date typography.",
    tools: ["Adobe Photoshop", "Digital Matte Painting", "Texture Compositing", "Typography"],
    image: "/images/poster-ranabaali-rashmika.jpeg",
    featured: true
  },
  {
    id: "paradise-2days",
    title: "The Paradise Movie Teaser Poster",
    category: "Movie Posters",
    subtitle: "2 Days To Go Promotional Poster",
    description: "Official promotional key art concept for The Paradise movie featuring Nani and Srikanth Odela. Crafted in Adobe Photoshop with custom cinematic color grading and dramatic typography.",
    tools: ["Photoshop", "Typography", "Cinematic Color Grade"],
    image: "/images/poster-paradise-2days.webp",
    featured: true
  },
  {
    id: "paradise-5days",
    title: "Jadal Jamana — The Paradise Teaser",
    category: "Movie Posters",
    subtitle: "5 Days To Go Key Art Design",
    description: "Atmospheric movie poster design with intense texture compositing, rustic mood tones, and character focus for theatrical anticipation.",
    tools: ["Adobe Photoshop", "Texture Compositing", "Lighting FX"],
    image: "/images/poster-paradise-5days.webp",
    featured: true
  },
  {
    id: "kaadhal-poster",
    title: "Recreation of KAADHAL Poster",
    category: "Movie Posters",
    subtitle: "Telugu Web Series Key Art",
    description: "Creative reimagining of the KAADHAL poster where two strangers meet. Soft romantic palette, emotive focal alignment, and title treatment.",
    tools: ["Photoshop", "Illustrator", "Photo Manipulation"],
    image: "/images/poster-kaadhal.webp",
    featured: true
  },
  {
    id: "biker-poster",
    title: "Biker Lifestyle & Brand Visual",
    category: "Brand & Concepts",
    subtitle: "High-Octane Visual Poster",
    description: "Dynamic adrenaline-filled poster art designed for social media branding, highlighting high contrast, speed blur, and gritty visual style.",
    tools: ["Photoshop", "Speed Grading", "Vector Graphics"],
    image: "/images/poster-biker.webp"
  },
  {
    id: "mohanbabu-poster",
    title: "Cinematic Action Character Poster",
    category: "Movie Posters",
    subtitle: "Action Cinema Tribute Poster",
    description: "High impact movie poster tribute featuring bold hero styling, smoky ambient backlighting, and distressed metallic title styling.",
    tools: ["Photoshop", "Digital Matte Painting", "Smoke FX"],
    image: "/images/poster-mohanbabu.webp"
  },
  {
    id: "sampu-poster",
    title: "Abstract Visual Artwork & Typography",
    category: "Creative Art",
    subtitle: "Digital Design Experiment",
    description: "Modern poster composition with striking color balance, playful artistic depth, and creative character framing.",
    tools: ["Photoshop", "Graphic Design", "Color Balancing"],
    image: "/images/poster-sampu.jpeg"
  },
  {
    id: "cyberpunk-11",
    title: "Project 11 — Sci-Fi Concept Poster",
    category: "Creative Art",
    subtitle: "Futuristic Cyber Art",
    description: "Cyberpunk aesthetic with neon light streaks, chromatic aberration, glow highlights, and futuristic layout design.",
    tools: ["Photoshop", "After Effects", "Neon VFX"],
    image: "/images/poster-cyberpunk.jpeg",
    featured: true
  },
  {
    id: "thum-action",
    title: "Cinematic Action Video Thumbnail & Key Art",
    category: "Thumbnails",
    subtitle: "High CTR YouTube & Teaser Art",
    description: "High click-through thumbnail designed for maximum screen engagement with expressive eyes, edge lighting, and cinematic vignette.",
    tools: ["Photoshop", "Contrast Boost", "Edge Lighting"],
    image: "/images/poster-thum.jpg"
  },
  {
    id: "resume-poster",
    title: "Ashwan Design & Resume Poster",
    category: "Brand & Concepts",
    subtitle: "Official Visual Resume Poster",
    description: "The complete visual resume and profile document designed as a retro polaroid key art banner highlighting tools, experience, and contact channels.",
    tools: ["Illustrator", "Photoshop", "Print Layout"],
    image: "/images/ashwan-resume-profile.jpeg"
  }
];

export const VIDEOS_DATA: VideoItem[] = [
  {
    id: "cinematic-cut",
    title: "Cinematic Film & Teaser Edit",
    category: "Cinematic Editing",
    description: "Master cut featuring multi-camera sync, dramatic pacing, color grading in DaVinci Resolve, and immersive sound effects.",
    duration: "2:45 Min",
    tools: ["Premiere Pro", "DaVinci Resolve", "Sound Design"],
    youtubeEmbedUrl: "https://www.youtube.com/embed/9uIqsUvPyTE?autoplay=0&rel=0",
    posterImage: "/images/poster-thum.jpg"
  },
  {
    id: "reels-short-form",
    title: "Short-Form Reels & Hook Cuts",
    category: "Short-Form / Reels",
    description: "Fast-paced social media edits with dynamic kinetic text captions, audio SFX, zooms, and retention-maximizing hooks.",
    duration: "0:45 Sec",
    tools: ["Premiere Pro", "After Effects", "Kinetic Typography"],
    youtubeEmbedUrl: "https://www.youtube.com/embed/9uIqsUvPyTE?autoplay=0&rel=0",
    posterImage: "/images/poster-biker.webp"
  },
  {
    id: "wedding-teaser",
    title: "Wedding Teaser & Love Story Edit",
    category: "Wedding & Events",
    description: "Tender, emotional visual pacing synchronized to romantic scores, warm golden-hour grading, and seamless match cuts.",
    duration: "3:10 Min",
    tools: ["Premiere Pro", "Color Grading", "Beat Sync"],
    youtubeEmbedUrl: "https://www.youtube.com/embed/9uIqsUvPyTE?autoplay=0&rel=0",
    posterImage: "/images/poster-kaadhal.webp"
  },
  {
    id: "music-video",
    title: "Music Video Rhythm & Beat Sync",
    category: "Music Videos",
    description: "Precise beat cutoffs, speed ramps, optical glow transitions, and vibrant music video aesthetic grading.",
    duration: "3:40 Min",
    tools: ["After Effects", "Premiere Pro", "Speed Ramps"],
    youtubeEmbedUrl: "https://www.youtube.com/embed/9uIqsUvPyTE?autoplay=0&rel=0",
    posterImage: "/images/poster-paradise-2days.webp"
  },
  {
    id: "documentary-style",
    title: "Documentary-Style Narrative Cut",
    category: "Documentary",
    description: "Engaging archival photo pan & zoom (Ken Burns), sound landscape layering, subtitling, and interview cutaways.",
    duration: "4:20 Min",
    tools: ["Premiere Pro", "Audio Enhancement", "Archival Animation"],
    youtubeEmbedUrl: "https://www.youtube.com/embed/9uIqsUvPyTE?autoplay=0&rel=0",
    posterImage: "/images/poster-paradise-5days.webp"
  },
  {
    id: "social-media-promo",
    title: "Creative Commercial & Brand Promo",
    category: "Commercial / Ads",
    description: "Eye-catching commercial promos featuring 3D product popups, motion graphic title cards, and CTA end-screens.",
    duration: "1:15 Min",
    tools: ["After Effects", "Photoshop", "Motion Design"],
    youtubeEmbedUrl: "https://www.youtube.com/embed/9uIqsUvPyTE?autoplay=0&rel=0",
    posterImage: "/images/poster-mohanbabu.webp"
  }
];

export const SKILLS_DATA: SkillItem[] = [
  {
    name: "Adobe Premiere Pro",
    category: "tools",
    level: 95,
    levelLabel: "Master Timeline & Pacing",
    color: "#096B90",
    description: "Advanced multi-cam sequence editing, ripple trims, dynamic time remapping, and audio sync."
  },
  {
    name: "Adobe After Effects",
    category: "tools",
    level: 90,
    levelLabel: "Motion Graphics & VFX",
    color: "#71B7D5",
    description: "Kinetic typography, lower-thirds, tracking, glow effects, clean visual transitions, and rotoscoping."
  },
  {
    name: "Adobe Photoshop & Illustrator",
    category: "tools",
    level: 92,
    levelLabel: "Poster Design & Key Art",
    color: "#A1CCDC",
    description: "High-res photo manipulation, text layouts, lighting effects, color balance, and vector branding."
  },
  {
    name: "DaVinci Resolve",
    category: "tools",
    level: 85,
    levelLabel: "Cinematic Color Grading",
    color: "#096B90",
    description: "Color wheels, node trees, skin tone correction, custom LUT creation, and cinematic moods."
  },
  {
    name: "AI Video & Design Tools",
    category: "tools",
    level: 88,
    levelLabel: "Modern AI Workflows",
    color: "#71B7D5",
    description: "Voice isolation, audio cleanup, neural upscaling, inpainting, and smart asset generation."
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "video-editing",
    title: "Cinematic Video Editing",
    description: "High-retention editing for YouTube, short-form reels, documentary narratives, and wedding teasers with precision cuts.",
    icon: "Film",
    color: "#096B90",
    highlights: ["Short-form Reels & Shorts", "Documentary-Style Storytelling", "Wedding Song Teasers", "YouTube Video Production"]
  },
  {
    id: "graphic-poster",
    title: "Graphic & Poster Design",
    description: "Captivating movie posters, promotional key art, YouTube thumbnails, and social media branding made in Photoshop & Illustrator.",
    icon: "Image",
    color: "#71B7D5",
    highlights: ["Official Movie Teaser Posters", "Click-worthy Thumbnails", "Social Media Key Art", "Brand Identity Layouts"]
  },
  {
    id: "motion-graphics",
    title: "Motion Graphics & VFX",
    description: "Dynamic titles, kinetic typography, lower-thirds, smooth transitions, and visual accents in Adobe After Effects.",
    icon: "Wand2",
    color: "#A1CCDC",
    highlights: ["Animated Title Cards", "Kinetic Subtitles & Popups", "Logo Intros & Outros", "Seamless Visual Transitions"]
  },
  {
    id: "color-grading",
    title: "Color Correction & Grading",
    description: "Transforming raw, flat footage into rich, filmic visual tones using DaVinci Resolve and Premiere Lumetri.",
    icon: "Sliders",
    color: "#096B90",
    highlights: ["DaVinci Resolve Node Trees", "Film Tone Emulation", "Skin Tone Balancing", "Mood Atmosphere Lighting"]
  },
  {
    id: "sound-design",
    title: "Sound Design & Music Sync",
    description: "Layering ambient soundscapes, whooshes, risers, dialogue enhancement, and syncing cuts with rhythm and beats.",
    icon: "Headphones",
    color: "#71B7D5",
    highlights: ["Beat-Synchronized Cutting", "Voiceover Polish & Denoising", "Custom SFX Foley Layering", "Balanced Master Mix"]
  },
  {
    id: "ai-workflows",
    title: "AI-Powered Acceleration",
    description: "Integrating leading AI tools to speed up asset creation, background removal, voice enhancement, and content workflows.",
    icon: "Cpu",
    color: "#A1CCDC",
    highlights: ["AI Voice Isolation", "Resolution Upscaling", "Content-Aware Cleanup", "Rapid Ideation & Testing"]
  }
];

export const EXPERIENCE_DATA = [
  {
    role: "Graphic Designer & Video Editor",
    company: "TAC — THE ART CODE",
    period: "March 2026 – Present",
    type: "Current Role",
    description: "Creating premium graphic design collaterals, social media promotional videos, motion graphics, and brand poster assets."
  },
  {
    role: "Freelance Video Editor",
    company: "Independent Freelancer",
    period: "November 2025 – Present",
    type: "Freelance",
    description: "Delivering cinematic wedding teasers, song videos, promotional reels, and YouTube video cuts for diverse creative clients."
  },
  {
    role: "Bachelor's Degree (B.Sc - MSCS)",
    company: "Prathibha Degree and PG College",
    period: "Graduated 2024",
    type: "Education",
    description: "Mathematics, Statistics & Computer Science. Built analytical thinking, visual balance, and technical problem-solving capabilities."
  }
];
