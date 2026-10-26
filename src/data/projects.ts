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
  | "Social Media"
  | "Product Advertising"
  | "3D Commercial"
  | "Video Editing"
  | "Reels & Shorts"
  | "Motion Graphics"
  | "Color Grading";

export const CATEGORIES: ProjectCategory[] = [
  "All",
  "Social Media",
  "Product Advertising",
  "3D Commercial",
  "Video Editing",
  "Reels & Shorts",
  "Motion Graphics",
  "Color Grading",
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "proj-1",
    slug: "airpods-pro-canyon",
    brand: "APPLE",
    title: "AIRPODS PRO CANYON",
    subtitle: "Organic Terrain 3D Acoustic Key Visual",
    category: "Product Advertising",
    year: "2026",
    role: "Art Director & 3D Motion Editor",
    clientOrConcept: "Commercial Campaign Spec",
    isConcept: true,
    coverImage: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=900&q=80",
    aspect: "portrait",
    tags: ["Spatial Audio", "Organic 3D", "Desert Aesthetic"],
    duration: "KEY ART",
    summary:
      "A high-contrast desert canyon setting framing the wireless acoustic pods, contrasting rugged raw sandstone erosion with immaculate white ceramic finish.",
    approach:
      "Engineered natural sun flare rim-lighting to outline the acoustic vents, creating an editorial campaign ready for global billboard and 9:16 social placements.",
    techniques: [
      "Photorealistic displacement mapping of sandstone strata",
      "Dynamic rim-lighting with specular highlight preservation",
      "Atmospheric dust particle simulation and micro-fog",
    ],
    software: ["Adobe Photoshop", "After Effects", "DaVinci Resolve"],
    accentColor: "#E0A868",
    galleryImages: [
      "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=1200&q=80",
      "/images/projects/nexus_headphones.jpg",
    ],
    stats: [
      { label: "Format", value: "Poster & 9:16 Reel" },
      { label: "Color Space", value: "ACEScg / Rec.709" },
      { label: "Year", value: "2026" },
    ],
  },
  {
    id: "proj-2",
    slug: "iphone-lunar-space",
    brand: "APPLE",
    title: "IPHONE COSMOS",
    subtitle: "Astronaut Orbit & Deep Space Launch Ad",
    category: "Social Media",
    year: "2026",
    role: "Visual Designer & Compositor",
    clientOrConcept: "Social Launch Poster",
    isConcept: true,
    coverImage: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=900&q=80",
    aspect: "portrait",
    tags: ["Space Campaign", "Titanium Grade", "Zero-G Motion"],
    duration: "00:15 SEC",
    summary:
      "Titanium smartphone chassis floating weightlessly in deep low-earth orbit against planetary curve reflections and deep cosmic velvet shadows.",
    approach:
      "Balancing crisp technological reflections on aerospace-grade titanium with the vast silence of deep space for a thumb-stopping social poster.",
    techniques: [
      "Zero-gravity floating physics & micro-wobble",
      "Anamorphic lens flare compositing across camera lens sapphire",
      "Subtle kinetic type lockup in high-contrast monochrome",
    ],
    software: ["Adobe Photoshop", "After Effects", "Premiere Pro"],
    accentColor: "#00E5FF",
    galleryImages: [
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=1200&q=80",
    ],
    stats: [
      { label: "Pacing", value: "High Retention" },
      { label: "Engagement", value: "+340% Spec CTR" },
    ],
  },
  {
    id: "proj-3",
    slug: "xbox-volcano-series",
    brand: "XBOX",
    title: "VOLCANIC TRIGGER",
    subtitle: "Custom Elite Wireless Controller Commercial",
    category: "3D Commercial",
    year: "2026",
    role: "Lead Motion Designer",
    clientOrConcept: "Hardware Reveal Spec",
    isConcept: true,
    coverImage: "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?auto=format&fit=crop&w=900&q=80",
    aspect: "portrait",
    tags: ["Tactile Haptics", "Basalt Rocks", "Cyberpunk"],
    duration: "00:30 SEC",
    summary:
      "Forged in extreme volcanic basalt ridges: an explosive product introduction showcasing textured grip surfaces, haptic feedback triggers, and glowing LED guides.",
    approach:
      "Syncing explosive bass drops with ember particle bursts and precision macro camera zooms across the thumbsticks and trigger buttons.",
    techniques: [
      "Camera macro tracking with simulated shallow depth-of-field",
      "Lava glow and subsurface light bounce on rubberized grips",
      "Dynamic sound foley of stone sliding and mechanical clicks",
    ],
    software: ["Adobe After Effects", "Photoshop", "Premiere Pro"],
    accentColor: "#107C10",
    galleryImages: [
      "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "proj-4",
    slug: "chrono-obsidian-smartwatch",
    brand: "CHRONO",
    title: "OBSIDIAN SMARTWATCH",
    subtitle: "Aerospace Titanium Smartwatch Campaign",
    category: "Product Advertising",
    year: "2026",
    role: "Art Director & Colorist",
    clientOrConcept: "Luxury Wearables Spec",
    isConcept: true,
    coverImage: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80",
    aspect: "portrait",
    tags: ["Minimalist Luxe", "OLED Display", "Precision Bezel"],
    duration: "KEY ART",
    summary:
      "Subtle caustics reflecting off ceramic dials inside a dimly lit obsidian cavern, engineered for maximum luxury brand authority and sophistication.",
    approach:
      "Highlighted the edge-to-edge sapphire crystal curve with razor-sharp razor specular highlights against pitch black gradient shadows.",
    techniques: [
      "Studio lighting simulation with double softbox strip setup",
      "Precise contrast grading in DaVinci Resolve",
      "Swiss typography branding with clean metadata badges",
    ],
    software: ["Adobe Photoshop", "DaVinci Resolve", "Illustrator"],
    accentColor: "#C8FF00",
    galleryImages: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "proj-5",
    slug: "valentino-crimson-splash",
    brand: "VALENTINO",
    title: "CRIMSON SPLASH PARFUM",
    subtitle: "Haute Couture Fragrance Splash Poster",
    category: "3D Commercial",
    year: "2026",
    role: "Retoucher & Visual Designer",
    clientOrConcept: "Fragrance Campaign Spec",
    isConcept: true,
    coverImage: "/images/projects/eclipse_perfume.jpg",
    aspect: "portrait",
    tags: ["Fluid Dynamics", "Crimson Crown", "Luxury Glass"],
    duration: "POSTER & MOTION",
    summary:
      "An octagonal crystal perfume flacon crowned by an explosive, high-speed fluid splash of ruby-red essence under theatrical spotlights.",
    approach:
      "Captured the physical weight of liquid tension and refractive glass dispersion to convey raw passion, luxury, and high-fashion editorial presence.",
    techniques: [
      "High-speed liquid splash compositing and caustic highlights",
      "Gold foil typography stamping & emboss simulation",
      "Deep jewel-tone color grading with true black floor",
    ],
    software: ["Adobe Photoshop", "Adobe After Effects"],
    accentColor: "#FF1744",
    galleryImages: [
      "/images/projects/eclipse_perfume.jpg",
    ],
  },
  {
    id: "proj-6",
    slug: "nexus-moss-acoustics",
    brand: "NEXUS",
    title: "NEXUS BIO-ACOUSTIC",
    subtitle: "Over-Ear Studio Headphones in Living Moss",
    category: "Product Advertising",
    year: "2026",
    role: "3D Motion Editor & Sound Designer",
    clientOrConcept: "Acoustic Hardware Spec",
    isConcept: true,
    coverImage: "/images/projects/nexus_headphones.jpg",
    aspect: "portrait",
    tags: ["Bio-Tech", "Nordic Forest", "Audio Fidelity"],
    duration: "00:30 SEC",
    summary:
      "Merging natural organic moss terraces with industrial matte black headphones and vivid electric-lime liquid pulses that vibrate to low sub frequencies.",
    approach:
      "Explores the tension between synthetic audio technology and natural acoustic resonance, using organic sound design with analog synth pads.",
    techniques: [
      "Liquid splash synchronization with low-frequency audio stems",
      "Camera match-moving through dense botanical moss clusters",
      "Acid-lime color isolation against deep charcoal hardware",
    ],
    software: ["Adobe Premiere Pro", "After Effects", "Audition"],
    accentColor: "#C8FF00",
    galleryImages: [
      "/images/projects/nexus_headphones.jpg",
    ],
  },
  {
    id: "proj-7",
    slug: "oreo-gravity-milk-splash",
    brand: "OREO",
    title: "OREO ZERO-G CRUNCH",
    subtitle: "Dynamic Cream & Milk Splash Commercial Cut",
    category: "Social Media",
    year: "2026",
    role: "Food & Beverage Video Editor",
    clientOrConcept: "Viral Food Campaign Spec",
    isConcept: true,
    coverImage: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=900&q=80",
    aspect: "portrait",
    tags: ["Liquid Simulation", "Food Editorial", "High Frame Rate"],
    duration: "00:15 SEC",
    summary:
      "Crisp cocoa wafer biscuits twisting apart in mid-air as creamy whole milk droplets orbit like miniature satellites in ultra-slow motion.",
    approach:
      "Designed for maximum dopamine hit in social feeds: ultra-tactile foley crunch audio paired with creamy liquid fluid dynamics.",
    techniques: [
      "240fps slow-motion speed-ramping to instant impact snap",
      "Droplet refraction enhancement & creamy milk white balancing",
      "Playful social typography with kinetic pop animations",
    ],
    software: ["Adobe Premiere Pro", "After Effects", "DaVinci Resolve"],
    accentColor: "#0066FF",
    galleryImages: [
      "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "proj-8",
    slug: "chocowafers-gold-edition",
    brand: "NESTLÉ",
    title: "GOLD WAFER VELVET",
    subtitle: "Artisanal Chocolate Confectionery Ad",
    category: "Product Advertising",
    year: "2026",
    role: "Commercial Retoucher & Colorist",
    clientOrConcept: "Confectionery Launch Spec",
    isConcept: true,
    coverImage: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=900&q=80",
    aspect: "portrait",
    tags: ["Warm Amber", "Texture Macro", "Sweet Foley"],
    duration: "POSTER",
    summary:
      "Snapping crisp golden wafer layers bathed in warm liquid caramel and 70% dark cocoa satin glaze with golden packaging accents.",
    approach:
      "Warm, appetite-inducing color palette with creamy highlights and subtle film grain to evoke luxurious craftsmanship.",
    techniques: [
      "Warm golden hour grading with rich chocolate browns",
      "Macro depth-of-field focus pull simulation",
      "Premium typography layout inspired by Swiss confectioners",
    ],
    software: ["Adobe Photoshop", "DaVinci Resolve"],
    accentColor: "#D4AF37",
    galleryImages: [
      "https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "proj-9",
    slug: "alexa-pro-cyan-vortex",
    brand: "AMAZON",
    title: "ALEXA PRO CYLINDER",
    subtitle: "Cyan Neon Rings Portal Smart Speaker Launch",
    category: "3D Commercial",
    year: "2026",
    role: "Lead 3D Motion Editor",
    clientOrConcept: "Smart Home Audio Spec",
    isConcept: true,
    coverImage: "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=900&q=80",
    aspect: "portrait",
    tags: ["Neon Vortex", "Spatial Acoustics", "Clean Minimal"],
    duration: "00:20 SEC",
    summary:
      "Acoustic fabric cylindrical smart speaker suspended in a hypnotic void of pulsating concentric cyan laser rings representing spatial audio waves.",
    approach:
      "Rhythmic pulse animation keyed to the speaker's bass drops, emphasizing AI intelligence and room-filling 360-degree sound.",
    techniques: [
      "Audio-reactive neon glow sweeps and caustic ripples",
      "Fabric texture bump mapping with illuminated LED rings",
      "Minimalist tech typography with futuristic countdown clock",
    ],
    software: ["Adobe After Effects", "Cinema 4D", "Premiere Pro"],
    accentColor: "#00F0FF",
    galleryImages: [
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "proj-10",
    slug: "bad-boy-le-parfum",
    brand: "CAROLINA HERRERA",
    title: "BAD BOY LE PARFUM",
    subtitle: "Moody Botanical Lightning Fragrance Art",
    category: "Product Advertising",
    year: "2026",
    role: "Creative Retoucher & Editor",
    clientOrConcept: "Men's Luxury Fragrance Spec",
    isConcept: true,
    coverImage: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=900&q=80",
    aspect: "portrait",
    tags: ["Lightning Silhouette", "Moody Botanical", "Noir Luxe"],
    duration: "KEY ART",
    summary:
      "The iconic lightning bolt bottle enveloped in stormy shadows, wet midnight palm foliage, and electrifying cyan-purple lightning strikes.",
    approach:
      "Created an intense, rebellious aura using low-key chiaroscuro lighting and electric sparks dancing along the golden lightning pedestal.",
    techniques: [
      "Chiaroscuro lighting compositing on matte black glass",
      "Foliage shadow gobos with wet surface reflections",
      "High-voltage electrical arc grading in After Effects",
    ],
    software: ["Adobe Photoshop", "After Effects"],
    accentColor: "#9D00FF",
    galleryImages: [
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "proj-11",
    slug: "series-x-monolith-island",
    brand: "XBOX",
    title: "SERIES X MONOLITH",
    subtitle: "Floating Island Next-Gen Gaming Reveal",
    category: "3D Commercial",
    year: "2026",
    role: "Compositor & 3D Artist",
    clientOrConcept: "Gaming Hardware Spec",
    isConcept: true,
    coverImage: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=900&q=80",
    aspect: "portrait",
    tags: ["Monolith", "Green Heat Grid", "Atmospheric Fog"],
    duration: "00:30 SEC",
    summary:
      "A towering black monolith console resting atop an impossible floating rock platform in a misty mountain twilight, exhaling emerald thermal energy.",
    approach:
      "Evoking sheer computational power and monolithic dominance through scale contrasts and volumetric green cooling vent illumination.",
    techniques: [
      "Volumetric god-rays through the top concave exhaust grille",
      "Camera sweeping upward from wide shot to micro-textured vent",
      "Ambient rumble foley with deep sub-bass cinematic tones",
    ],
    software: ["Adobe After Effects", "Premiere Pro", "Photoshop"],
    accentColor: "#107C10",
    galleryImages: [
      "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "proj-12",
    slug: "cst-offroad-tire-beast",
    brand: "CST TIRES",
    title: "CST ALL-TERRAIN BEAST",
    subtitle: "High-Performance Offroad Mud & Rock Key Visual",
    category: "Social Media",
    year: "2026",
    role: "Commercial Motion Designer",
    clientOrConcept: "Automotive Action Spec",
    isConcept: true,
    coverImage: "https://images.unsplash.com/photo-1578844251758-2f71da64c96f?auto=format&fit=crop&w=900&q=80",
    aspect: "portrait",
    tags: ["Heavy Tread", "Mud Spray", "Extreme Grip"],
    duration: "00:15 SEC",
    summary:
      "Heavy aggressive tread digging into volcanic mud and wet granite rocks, throwing up dynamic mud sprays illuminated by warm halogen headlights.",
    approach:
      "High-adrenaline camera angles close to the churning rubber tread, engineered to convey unstoppable traction and industrial durability.",
    techniques: [
      "Dynamic particle mud and rock debris spray layers",
      "Tire rubber deformation and sidewall stress highlights",
      "Aggressive typography layout with speed trail graphics",
    ],
    software: ["Adobe Premiere Pro", "After Effects", "Photoshop"],
    accentColor: "#FF6A00",
    galleryImages: [
      "https://images.unsplash.com/photo-1578844251758-2f71da64c96f?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "proj-13",
    slug: "xiaomi-e-scooter-moss",
    brand: "XIAOMI",
    title: "URBAN COMMUTE NEO",
    subtitle: "Glass Platform in Living Moss E-Mobility Poster",
    category: "Product Advertising",
    year: "2026",
    role: "Art Director & Retoucher",
    clientOrConcept: "Micro-Mobility Spec",
    isConcept: true,
    coverImage: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=900&q=80",
    aspect: "portrait",
    tags: ["Clean Energy", "Matte Magnesium", "Green Future"],
    duration: "POSTER",
    summary:
      "A futuristic matte-grey electric scooter mounted on a glowing monolithic glass cube surrounded by lush velvet moss and morning dew droplets.",
    approach:
      "Positions electric urban mobility as eco-conscious luxury, contrasting industrial magnesium alloys with pristine natural moss aesthetics.",
    techniques: [
      "Glass block refraction and interior neon underglow",
      "Precision masking around mechanical brake cables and wheels",
      "Clean tech spec overlays: range, top speed, and regenerative braking",
    ],
    software: ["Adobe Photoshop", "Illustrator"],
    accentColor: "#FF6900",
    galleryImages: [
      "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "proj-14",
    slug: "macbook-mineral-pedestal",
    brand: "APPLE",
    title: "MACBOOK NEO SLATE",
    subtitle: "Ultra-Thin Laptop on Raw Mineral Stone",
    category: "3D Commercial",
    year: "2026",
    role: "Visual Designer & Colorist",
    clientOrConcept: "Hardware Reveal Spec",
    isConcept: true,
    coverImage: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=900&q=80",
    aspect: "portrait",
    tags: ["Raw Mineral", "Liquid Retina", "CNC Aluminum"],
    duration: "00:20 SEC",
    summary:
      "Precision-milled unibody aluminum casing poised on an angular dark slate stone plinth, glowing with Liquid Retina screen reflections.",
    approach:
      "Highlighting the impossibly thin silhouette and precision CNC chamfered edges against rough raw stone textures.",
    techniques: [
      "Edge-highlight reflection sweeps across aluminum lid",
      "Screen content glow casting onto natural slate rock",
      "Subtle price and spec typography badges ($699 / M4 CHIP)",
    ],
    software: ["Adobe Photoshop", "After Effects", "Premiere Pro"],
    accentColor: "#A2AAAD",
    galleryImages: [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "proj-15",
    slug: "decants-artisanal-vials",
    brand: "DECANT'S",
    title: "DECANT'S APOTHECARY",
    subtitle: "5ml, 10ml, 15ml Minimalist Amber Glass Vials",
    category: "Social Media",
    year: "2026",
    role: "Product Retoucher & Designer",
    clientOrConcept: "Artisanal Fragrance Campaign",
    isConcept: true,
    coverImage: "https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?auto=format&fit=crop&w=900&q=80",
    aspect: "portrait",
    tags: ["Amber Glass", "Dropper Pipettes", "Serif Typography"],
    duration: "POSTER & REEL",
    summary:
      "Trio of amber glass apothecary vials arranged in harmonic elevation, backlit by warm sunset rays highlighting viscous golden perfume oils.",
    approach:
      "Warm, intimate lighting designed to communicate niche luxury and the personal ritual of bespoke fragrance decanting.",
    techniques: [
      "Amber glass light refraction and interior liquid meniscus",
      "Minimalist Swiss typography labels with volume measurements",
      "Macro dust mote particles dancing in warm sunbeam shafts",
    ],
    software: ["Adobe Photoshop", "Illustrator"],
    accentColor: "#E5A93C",
    galleryImages: [
      "https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "proj-16",
    slug: "french-macaron-pastels",
    brand: "LADURÉE",
    title: "PASTEL DUNE MACARONS",
    subtitle: "Editorial Confectionery on Velvet Dunes",
    category: "Product Advertising",
    year: "2026",
    role: "Art Director & Video Colorist",
    clientOrConcept: "Patisserie Campaign Spec",
    isConcept: true,
    coverImage: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&w=900&q=80",
    aspect: "portrait",
    tags: ["Pastel Palette", "Velvet Dunes", "French Luxury"],
    duration: "00:15 SEC",
    summary:
      "Pistachio, lavender, and raspberry French macarons floating gently above undulating dunes of powdered sugar and pastel velvet silk.",
    approach:
      "Soft, ethereal high-key lighting that emphasizes the delicate ruffled 'foot' and rich ganache filling of each artisanal macaron.",
    techniques: [
      "High-key pastel color harmony calibration",
      "Powder sugar puff dynamic particle simulation",
      "Slow organic levitation and gentle rotation choreography",
    ],
    software: ["Adobe Premiere Pro", "Photoshop", "DaVinci Resolve"],
    accentColor: "#FFB5C5",
    galleryImages: [
      "https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "proj-17",
    slug: "cyber-sneakers-neon",
    brand: "CYBERPUNK LAB",
    title: "CYBERBLADE RUNNER 26",
    subtitle: "High-Tech Technical Footwear 3D Spec",
    category: "3D Commercial",
    year: "2026",
    role: "Motion Editor & Compositor",
    clientOrConcept: "Streetwear Brand Spec",
    isConcept: true,
    coverImage: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=900&q=80",
    aspect: "portrait",
    tags: ["Techwear", "Cushion Foam", "Neon Wireframe"],
    duration: "00:30 SEC",
    summary:
      "Deconstructed technical running shoe showcasing segmented nitrogen foam sole cushioning and glow-in-the-dark Kevlar mesh upper.",
    approach:
      "High-energy commercial cut featuring exploded parts choreography reassembling seamlessly to a driving industrial techno beat.",
    techniques: [
      "Exploded view 3D assembly animation",
      "Kevlar weave texture macro tracking",
      "Electric lime and magenta split-tone color grade",
    ],
    software: ["Adobe After Effects", "Premiere Pro", "Photoshop"],
    accentColor: "#C8FF00",
    galleryImages: [
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "proj-18",
    slug: "energy-drink-condensation",
    brand: "NITRO FUEL",
    title: "SUB-ZERO NITRO BEAST",
    subtitle: "Frost & Cold Condensation Can Launch",
    category: "Social Media",
    year: "2026",
    role: "Commercial Video Editor",
    clientOrConcept: "Beverage Social Campaign Spec",
    isConcept: true,
    coverImage: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=900&q=80",
    aspect: "portrait",
    tags: ["Frost Effect", "Water Droplets", "High Impact"],
    duration: "00:15 SEC",
    summary:
      "Frosted aluminum slim can erupting through a crystalline sheet of ice with ultra-crisp condensation droplets rolling down the matte graphics.",
    approach:
      "Tailored for short-form viral feeds: sudden ice shatter sound effect, punchy color flash, and tactile can tab crack foley.",
    techniques: [
      "Physical ice fracture and shattering simulation",
      "Micro condensation droplet rolling physics",
      "Aggressive audio ducking and sub-impact sound design",
    ],
    software: ["Adobe Premiere Pro", "After Effects", "Audition"],
    accentColor: "#00E5FF",
    galleryImages: [
      "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "proj-19",
    slug: "kinetic-swiss-typography",
    brand: "BIENNIAL 26",
    title: "KINETIC 2026 SWISS",
    subtitle: "Experimental Swiss Graphic Design Exhibition",
    category: "Motion Graphics",
    year: "2026",
    role: "Visual Identity & Motion Designer",
    clientOrConcept: "Design Biennial Concept Poster",
    isConcept: true,
    coverImage: "/images/projects/kinetic_poster.jpg",
    aspect: "portrait",
    tags: ["Kinetic Typography", "Acid Swiss", "Halftone 3D"],
    duration: "POSTER & MOTION",
    summary:
      "An aggressive typographic statement merging strict Swiss grid structure with distorted 3D chrome geometry, halftone textures, and electric lime pigment.",
    approach:
      "Breaking traditional grid boundaries with fractured letterforms and metallic spheres. Halftone patterns nod to analog risograph print while maintaining digital punch.",
    techniques: [
      "Custom vector type distortion and extrusion",
      "Analog screenprint halftone simulation",
      "Multi-axis kinetic motion loops",
    ],
    software: ["Adobe Illustrator", "Adobe Photoshop", "Adobe After Effects"],
    accentColor: "#C8FF00",
    galleryImages: [
      "/images/projects/kinetic_poster.jpg",
      "/images/projects/nexus_headphones.jpg",
    ],
  },
  {
    id: "proj-20",
    slug: "trap-haus-underground-reel",
    brand: "TRAP HAUS",
    title: "TRAP HAUS 9:16",
    subtitle: "Kinetic Streetwear & Music Video Cut",
    category: "Reels & Shorts",
    year: "2026",
    role: "Video Editor & VFX Compositor",
    clientOrConcept: "Viral Social Media Concept",
    isConcept: true,
    coverImage: "/images/projects/trap_reels.jpg",
    aspect: "tall",
    tags: ["9:16 Vertical", "Speed Ramps", "Glitch Overlays"],
    duration: "00:15 SEC",
    summary:
      "A high-velocity vertical reel engineered for instant thumb-stopping retention, featuring underground rave laser aesthetics and beat-matched jump cuts.",
    approach:
      "Crafted with a 0.2-second opening hook and continuous visual acceleration. Optical glow pulses and HUD camera markers keep the eye locked in the center frame.",
    techniques: [
      "Frame-by-frame beat sync with trap hi-hats",
      "Camera viewfinder HUD overlay graphics",
      "Seamless infinite loop ending point",
    ],
    software: ["Adobe Premiere Pro", "Adobe After Effects", "Photoshop"],
    accentColor: "#C8FF00",
    galleryImages: [
      "/images/projects/trap_reels.jpg",
    ],
  },
  {
    id: "proj-21",
    slug: "royal-destiny-wedding-film",
    brand: "CINEMATIC",
    title: "ROYAL DESTINY FILM",
    subtitle: "Cinematic Palace Wedding Teaser Film",
    category: "Video Editing",
    year: "2025",
    role: "Lead Video Editor & Colorist",
    clientOrConcept: "Wedding Teaser Concept Cut",
    isConcept: true,
    coverImage: "/images/projects/wedding_film.jpg",
    aspect: "landscape",
    tags: ["Anamorphic Grade", "Story Pacing", "Audio Sync"],
    duration: "02:45 MIN",
    summary:
      "A slow-burn cinematic wedding teaser engineered with anamorphic flares, royal palace architecture, and an emotional sitar-to-orchestral music crescendo.",
    approach:
      "Structured around quiet intimate glances leading into grand festive fireworks. Used match-cutting on fabric motion and flame glows to create a seamless, poetic rhythm.",
    techniques: [
      "Speed ramping on celebratory processions",
      "Skin tone separation & warm golden-hour LUT design",
      "Dynamic audio soundscapes with authentic acoustic reverberation",
    ],
    software: ["Adobe Premiere Pro", "DaVinci Resolve", "Adobe Audition"],
    accentColor: "#FF6A00",
    galleryImages: [
      "/images/projects/wedding_film.jpg",
    ],
  },
  {
    id: "proj-22",
    slug: "inside-visual-storytelling-doc",
    brand: "STUDIO FILM",
    title: "THE FRAME CRAFT",
    subtitle: "YouTube Creator Cinematic Documentary Episode",
    category: "Color Grading",
    year: "2025",
    role: "Editor, Sound Designer & Colorist",
    clientOrConcept: "YouTube Creator Series Cut",
    isConcept: true,
    coverImage: "/images/projects/youtube_doc.jpg",
    aspect: "landscape",
    tags: ["YouTube Long-Form", "Audio Waveforms", "Story Arc"],
    duration: "14:20 MIN",
    summary:
      "A deep-dive video essay into modern filmmaking techniques, featuring dual-tone neon lighting, animated audio frequency graphics, and broadcast-grade typography.",
    approach:
      "Balanced fast-paced chapter cards with reflective talking-head pacing. Audio waveform animations visualize sound design concepts in real-time.",
    techniques: [
      "Dynamic chapter lower-thirds and callout motion graphics",
      "Dialogue decluttering and spatial audio leveling",
      "Split-tone cinematic teal/orange contrast grade",
    ],
    software: ["Adobe Premiere Pro", "Adobe Audition", "Adobe After Effects"],
    accentColor: "#FF6A00",
    galleryImages: [
      "/images/projects/youtube_doc.jpg",
    ],
  },
  {
    id: "proj-23",
    slug: "drone-mountain-summit",
    brand: "AEROMOTION",
    title: "AEROMOTION 8K GIMBAL",
    subtitle: "Extreme Peak Cinematic Gimbal Ad",
    category: "Product Advertising",
    year: "2026",
    role: "Editor & Colorist",
    clientOrConcept: "Drone Hardware Spec",
    isConcept: true,
    coverImage: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=80",
    aspect: "portrait",
    tags: ["Alpine Mist", "Optical Glass", "8K Sensor"],
    duration: "00:30 SEC",
    summary:
      "A rugged carbon-fiber camera gimbal perched on an alpine summit at dawn, peering into swirling misty valleys with golden sun rays piercing the lens element.",
    approach:
      "Engineered to showcase optical clarity, extreme temperature endurance, and buttery-smooth electronic stabilization in mountain conditions.",
    techniques: [
      "Optical flare compositing through multi-coated glass elements",
      "Mountain mist particle depth grading in DaVinci Resolve",
      "Clean industrial spec callout animations",
    ],
    software: ["Adobe Premiere Pro", "DaVinci Resolve", "After Effects"],
    accentColor: "#00E5FF",
    galleryImages: [
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "proj-24",
    slug: "cyber-sunglasses-polar",
    brand: "NEO OPTICS",
    title: "NEO POLAR SHADES",
    subtitle: "Reflective Iridescent Visor Campaign",
    category: "Social Media",
    year: "2026",
    role: "Visual Designer & Retoucher",
    clientOrConcept: "Eyewear Fashion Spec",
    isConcept: true,
    coverImage: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=80",
    aspect: "portrait",
    tags: ["Iridescent Coating", "Frameless Visor", "Neon Tokyo"],
    duration: "KEY ART",
    summary:
      "Frameless wrap-around iridescent visor reflecting neon city street lights and rainy asphalt reflections in sharp high contrast.",
    approach:
      "High-fashion cyberpunk street editorial aesthetic, emphasizing chromatic rainbow caustics across the scratch-resistant lens.",
    techniques: [
      "Multi-chromatic refraction and neon reflection matching",
      "Skin micro-texture retention and glossy wet highlights",
      "Modern editorial magazine typography lockup",
    ],
    software: ["Adobe Photoshop", "Lightroom Classic"],
    accentColor: "#FF007F",
    galleryImages: [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1200&q=80",
    ],
  },
];
