export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  brand: string;
  subtitle: string;
  category: ProjectCategory;
  year: string;
  role: string;
  clientOrConcept: string;
  isConcept: boolean;
  coverImage: string;
  aspect: "portrait" | "landscape" | "square" | "tall";
  tags: string[];
  duration?: string;
  summary: string;
  approach: string;
  techniques: string[];
  software: string[];
  accentColor: string;
  galleryImages: string[];
  stats?: { label: string; value: string }[];
}

export type ProjectCategory =
  | "All"
  | "The Paradise Series"
  | "Movie Posters"
  | "Web Series"
  | "TAC Campaigns";

export const CATEGORIES: ProjectCategory[] = [
  "All",
  "The Paradise Series",
  "Movie Posters",
  "Web Series",
  "TAC Campaigns",
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "proj-paradise-1",
    slug: "the-paradise-1-day-to-go",
    brand: "SLV CINEMAS",
    title: "THE PARADISE — 1 DAY TO GO",
    subtitle: "Natural Star Nani Bloody Blade Key Art",
    category: "The Paradise Series",
    year: "2026",
    role: "Poster Designer",
    clientOrConcept: "Srikanth Odela Cinema",
    isConcept: false,
    coverImage: "/images/projects/the-paradise-1-day-to-go.webp",
    aspect: "portrait",
    tags: ["Natural Star Nani", "Srikanth Odela", "SLV Cinemas", "Poster Design"],
    duration: "OFFICIAL RELEASE",
    summary: "High-intensity countdown poster artwork designed for Natural Star Nani's mega feature film 'The Paradise', directed by Srikanth Odela and produced by SLV Cinemas.",
    approach: "Dramatic fiery red backdrop compositing with bloodied machete blade, gritty particle embers, and dynamic typography treatment.",
    techniques: ["Advanced Photo Manipulation", "Lighting & Fire FX", "Cinematic Color Grading", "Custom Title Typography"],
    software: ["Adobe Photoshop", "Lightroom", "Camera Raw"],
    accentColor: "#FF2A2A",
    galleryImages: ["/images/projects/the-paradise-1-day-to-go.webp"],
    stats: [
      { label: "Film", value: "The Paradise" },
      { label: "Starring", value: "Nani" },
      { label: "Director", value: "Srikanth Odela" }
    ]
  },
  {
    id: "proj-paradise-2",
    slug: "the-paradise-2-days-to-go",
    brand: "SLV CINEMAS",
    title: "THE PARADISE — 2 DAYS TO GO",
    subtitle: "Rifles Pointed Standoff Key Visual",
    category: "The Paradise Series",
    year: "2026",
    role: "Poster Designer",
    clientOrConcept: "Srikanth Odela Cinema",
    isConcept: false,
    coverImage: "/images/projects/the-paradise-2-days-to-go.webp",
    aspect: "portrait",
    tags: ["Natural Star Nani", "SLV Cinemas", "Key Art", "Cinematic"],
    duration: "COUNTDOWN ART",
    summary: "Cinematic circular standoff composition depicting Natural Star Nani surrounded by rifles in a high-tension period mob confrontation.",
    approach: "Multi-layered depth of field staging with foreground gun silhouettes directing gaze straight into Nani's fearless gaze.",
    techniques: ["Depth Grading", "Atmospheric Haze", "Visual Hierarchy", "Perspective Balancing"],
    software: ["Adobe Photoshop", "Camera Raw"],
    accentColor: "#FF4500",
    galleryImages: ["/images/projects/the-paradise-2-days-to-go.webp"],
    stats: [
      { label: "Release", value: "24.09.2026" },
      { label: "Music", value: "Anirudh" }
    ]
  },
  {
    id: "proj-paradise-3",
    slug: "the-paradise-3-days-to-go",
    brand: "SLV CINEMAS",
    title: "THE PARADISE — 3 DAYS TO GO",
    subtitle: "Shikanja Maalik Character Reveal Poster",
    category: "The Paradise Series",
    year: "2026",
    role: "Poster Designer",
    clientOrConcept: "Srikanth Odela Cinema",
    isConcept: false,
    coverImage: "/images/projects/the-paradise-3-days-to-go.webp",
    aspect: "portrait",
    tags: ["Shikanja Maalik", "SLV Cinemas", "Character Art"],
    duration: "CHARACTER ART",
    summary: "Character introduction poster for 'Shikanja Maalik' leaning on an antique muscle vehicle with cigar smoke in atmospheric golden hour grit.",
    approach: "Vintage textured grading with dramatic rim lighting and rustic typography styling.",
    techniques: ["Skin Retouching", "Smoke Simulation", "Color Timing", "Typography Integration"],
    software: ["Adobe Photoshop", "Photoshop Camera Raw"],
    accentColor: "#E67E22",
    galleryImages: ["/images/projects/the-paradise-3-days-to-go.webp"]
  },
  {
    id: "proj-paradise-4",
    slug: "the-paradise-4-days-to-go",
    brand: "SLV CINEMAS",
    title: "THE PARADISE — 4 DAYS TO GO",
    subtitle: "Axe & Broken Glass Overhead Perspective",
    category: "The Paradise Series",
    year: "2026",
    role: "Poster Designer",
    clientOrConcept: "Srikanth Odela Cinema",
    isConcept: false,
    coverImage: "/images/projects/the-paradise-4-days-to-go.webp",
    aspect: "portrait",
    tags: ["SLV Cinemas", "Overhead Perspective", "Atmospheric"],
    duration: "COUNTDOWN ART",
    summary: "Striking high-angle overhead key visual featuring axe weapon, broken glass fragments, and moody emerald-shadow atmospheric lighting.",
    approach: "High-angle perspective alignment with realistic shadow dispersion and textured debris detailing.",
    techniques: ["High-Angle Compositing", "Shattered Glass Detail", "Cinematic Teal-Shadow Grading"],
    software: ["Adobe Photoshop", "Illustrator"],
    accentColor: "#27AE60",
    galleryImages: ["/images/projects/the-paradise-4-days-to-go.webp"]
  },
  {
    id: "proj-paradise-5",
    slug: "the-paradise-5-days-to-go",
    brand: "SLV CINEMAS",
    title: "THE PARADISE — 5 DAYS TO GO",
    subtitle: "Bloody Warrior Golden Temple Visual",
    category: "The Paradise Series",
    year: "2026",
    role: "Poster Designer",
    clientOrConcept: "Srikanth Odela Cinema",
    isConcept: false,
    coverImage: "/images/projects/the-paradise-5-days-to-go.webp",
    aspect: "portrait",
    tags: ["Natural Star Nani", "SLV Cinemas", "Palace Temple"],
    duration: "COUNTDOWN ART",
    summary: "Fierce countdown visual showing Nani in battle-scarred warrior stance alongside vintage scooter in torch-lit grand palace hall.",
    approach: "Symmetrical golden star backplate balanced with torch flame lighting and hyper-detailed blood splatters.",
    techniques: ["Composite Lighting", "Torch Glow Balancing", "Muscle Definition Enhancements"],
    software: ["Adobe Photoshop", "Lightroom"],
    accentColor: "#F39C12",
    galleryImages: ["/images/projects/the-paradise-5-days-to-go.webp"]
  },
  {
    id: "proj-ranabaali",
    slug: "ranabaali-movie-poster",
    brand: "MYTHRI MOVIE MAKERS",
    title: "RANABAALI",
    subtitle: "Vijay Deverakonda & Rashmika Mandanna",
    category: "Movie Posters",
    year: "2026",
    role: "Poster Art & Title Designer",
    clientOrConcept: "Rahul Sankrityan Film",
    isConcept: false,
    coverImage: "/images/projects/ranabaali-movie-poster.webp",
    aspect: "portrait",
    tags: ["Vijay Deverakonda", "Rashmika Mandanna", "Mythri Movie Makers", "T-Series"],
    duration: "IN CINEMAS 16.10.26",
    summary: "Official first look key visual for 'Ranabaali — The Legend of The Cursed Land 1878', directed by Rahul Sankrityan, starring Vijay Deverakonda and Rashmika Mandanna.",
    approach: "Chiaroscuro shadow lighting capturing raw grit, intense ocular focus, and custom rustic parchment title typography.",
    techniques: ["Chiaroscuro Lighting", "Texture Compositing", "Period Typography Design"],
    software: ["Adobe Photoshop", "Adobe Illustrator"],
    accentColor: "#E59866",
    galleryImages: ["/images/projects/ranabaali-movie-poster.webp"],
    stats: [
      { label: "Banners", value: "Mythri & T-Series" },
      { label: "Music", value: "Ajay Atul" }
    ]
  },
  {
    id: "proj-jana-nayagan",
    slug: "jana-nayagan-vijay-poster",
    brand: "KVN PRODUCTIONS",
    title: "JANA NAYAGAN",
    subtitle: "Thalapathy Vijay High-Velocity Action Poster",
    category: "Movie Posters",
    year: "2026",
    role: "Poster Designer",
    clientOrConcept: "H. Vinoth / KVN Productions / T-Series",
    isConcept: false,
    coverImage: "/images/projects/jana-nayagan-vijay-poster.webp",
    aspect: "portrait",
    tags: ["Thalapathy Vijay", "H. Vinoth", "Anirudh", "KVN Productions"],
    duration: "JULY 23, 2026",
    summary: "Intense industrial action poster featuring Thalapathy Vijay in mid-combat machete strike, directed by H. Vinoth with music by Anirudh.",
    approach: "Dynamic motion blur diagonal slash lines, flying dust particle atmospheric effects, and monumental crowd silhouette lettering.",
    techniques: ["Action Compositing", "Particle & Smoke FX", "Title Silhouette Integration"],
    software: ["Adobe Photoshop", "Lightroom"],
    accentColor: "#D35400",
    galleryImages: ["/images/projects/jana-nayagan-vijay-poster.webp"]
  },
  {
    id: "proj-biker",
    slug: "biker-movie-poster",
    brand: "UV CREATIONS",
    title: "BIKER",
    subtitle: "Off-Road Dirt Terrain Kinetic Release Key Art",
    category: "Movie Posters",
    year: "2026",
    role: "Key Art Designer",
    clientOrConcept: "Vikram Reddy Presents / Dir. Abhilash Reddy",
    isConcept: false,
    coverImage: "/images/projects/biker-movie-poster.webp",
    aspect: "portrait",
    tags: ["UV Creations", "Vikram Reddy", "Ghibran", "Dirt Bike"],
    duration: "APRIL 3RD RELEASE",
    summary: "High-octane off-road racing movie poster for 'BIKER', presented by Vikram Reddy / UV Creations and directed by Abhilash Reddy with music by Ghibran.",
    approach: "High-speed dirt spray dynamic action composition frozen in sunlight with stencil-style block grunge typography.",
    techniques: ["Dirt & Sand Scattering FX", "Speed Shutter Simulation", "Distressed Font Treatment"],
    software: ["Adobe Photoshop", "Illustrator"],
    accentColor: "#F4D03F",
    galleryImages: ["/images/projects/biker-movie-poster.webp"]
  },
  {
    id: "proj-pallichattambi",
    slug: "pallichattambi-movie-poster",
    brand: "WORLD WIDE FILMS",
    title: "PALLICHATTAMBI",
    subtitle: "Sony Music Release Feature Film Poster",
    category: "Movie Posters",
    year: "2026",
    role: "Poster Art Designer",
    clientOrConcept: "Dijo Jose Antony Cinema / Sony Music",
    isConcept: false,
    coverImage: "/images/projects/pallichattambi-movie-poster.webp",
    aspect: "portrait",
    tags: ["Dijo Jose Antony", "Sony Music", "Jakes Bejoy", "Malayalam/Telugu"],
    duration: "THEATRICAL RELEASE",
    summary: "Heartfelt cinematic film poster featuring leading protagonist waving from vintage riverboat, directed by Dijo Jose Antony with music by Jakes Bejoy.",
    approach: "Natural warm organic film grain, rich mahogany boat wood tones, and ornate engraved regional title lettering.",
    techniques: ["Film Emulation Grain", "Color Balancing", "Engraved Title Texture"],
    software: ["Adobe Photoshop", "Lightroom"],
    accentColor: "#C0392B",
    galleryImages: ["/images/projects/pallichattambi-movie-poster.webp"]
  },
  {
    id: "proj-kaadhal",
    slug: "kaadhal-webseries-poster",
    brand: "INFINITUM",
    title: "KAADHAL",
    subtitle: "Varsha D'souza & Rishi Narayan Telugu Web Series",
    category: "Web Series",
    year: "2026",
    role: "Visual Designer & Title Artist",
    clientOrConcept: "Infinitum Network Solutions",
    isConcept: false,
    coverImage: "/images/projects/kaadhal-webseries-poster.webp",
    aspect: "portrait",
    tags: ["Infinitum", "Varsha Dsouza", "Rishi Narayan", "Web Series"],
    duration: "YOUTUBE ORIGINAL",
    summary: "Recreation poster for hit Telugu romantic web series 'KAADHAL', starring Varsha D'souza and Rishi Narayan, where two strangers fall in love.",
    approach: "Vibrant sunny park lawn palette with playful hand-drawn yellow title font and rainbow sky atmospheric compositing.",
    techniques: ["Outdoor Color Grading", "Hand-Lettered Title Treatment", "Sky Replacement & Rainbow FX"],
    software: ["Adobe Photoshop", "Illustrator"],
    accentColor: "#F1C40F",
    galleryImages: ["/images/projects/kaadhal-webseries-poster.webp"]
  },
  {
    id: "proj-tac-next-batch",
    slug: "tac-next-batch",
    brand: "TAC — THE ART CODE",
    title: "TAC — SLOTS OPEN FOR NEXT BATCH",
    subtitle: "Visual Creative Masterclass Promotional Poster",
    category: "TAC Campaigns",
    year: "2026",
    role: "Lead Creative Designer",
    clientOrConcept: "The Art Code Academy",
    isConcept: false,
    coverImage: "/images/projects/tac-next-batch.jpg",
    aspect: "portrait",
    tags: ["The Art Code", "TAC", "Premiere Pro", "After Effects", "Photoshop"],
    duration: "ACADEMY ENROLLMENT",
    summary: "Official key campaign visual for TAC (The Art Code) announcing enrollment for the upcoming professional batch in video editing and motion graphics.",
    approach: "Monochrome industrial studio portraiture with bold heavy-duty sans typography and official software suite icons badge bar.",
    techniques: ["Studio Lighting Calibration", "Editorial Layout Staging", "Software Badging & Contact Hierarchy"],
    software: ["Adobe Photoshop", "Illustrator", "Premiere Pro", "After Effects"],
    accentColor: "#C8FF00",
    galleryImages: ["/images/projects/tac-next-batch.jpg"]
  }
];
