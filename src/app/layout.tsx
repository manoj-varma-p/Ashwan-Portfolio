import type { Metadata, Viewport } from "next";
import { Anton, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { GrainOverlay } from "@/components/ui/GrainOverlay";
import { CustomCursor } from "@/components/ui/CustomCursor";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
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
      className={`${anton.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full bg-[#050505] text-[#F5F5F0] font-sans-editorial selection:bg-[#C8FF00] selection:text-[#050505] relative">
        <SmoothScroll>
          <GrainOverlay />
          <CustomCursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
