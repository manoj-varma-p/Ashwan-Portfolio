import type { Metadata, Viewport } from "next";
import { Syne, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { GrainOverlay } from "@/components/ui/GrainOverlay";
import { CustomCursor } from "@/components/ui/CustomCursor";

const syne = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ASHWAN — Creative Video Editor & Graphic Designer | Portfolio 2026",
  description:
    "Official creative portfolio of Ashwan Jakkinapally. Video editing, motion graphics, visual storytelling, and color grading for cinematic wedding films, high-impact commercial campaigns, and viral digital shorts.",
  keywords: [
    "Ashwan Jakkinapally",
    "Ashwan Video Editor",
    "Graphic Designer Telangana",
    "Cinematic Wedding Film Editor",
    "Motion Graphics Designer",
    "Premiere Pro Specialist",
    "After Effects",
    "DaVinci Resolve Colorist",
    "The Art Code TAC",
  ],
  authors: [{ name: "Ashwan Jakkinapally" }],
  creator: "Ashwan Jakkinapally",
  openGraph: {
    title: "ASHWAN — Visual Stories. Edited to Feel.",
    description: "Creative Video Editor & Graphic Designer Portfolio 2026.",
    type: "website",
    locale: "en_US",
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${plusJakarta.variable} ${jetbrainsMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full bg-[#050505] text-[#F5F5F0] font-sans selection:bg-[#C8FF00] selection:text-[#050505] relative">
        <SmoothScroll>
          <GrainOverlay />
          <CustomCursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
