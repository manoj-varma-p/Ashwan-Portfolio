import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ashwanjakkinapally.com"),
  title: "Ashwan Jakkinapally — Creative Video Editor & Graphic Designer",
  description: "Portfolio of Ashwan Jakkinapally — passionate video editor and graphic designer specializing in visual storytelling, documentary editing, motion graphics, and poster key art.",
  keywords: [
    "Ashwan Jakkinapally",
    "Video Editor",
    "Graphic Designer",
    "Premiere Pro",
    "After Effects",
    "DaVinci Resolve",
    "Photoshop",
    "Illustrator",
    "Movie Posters",
    "Motion Graphics",
    "Hyderabad Video Editor",
    "Telugu Video Editor"
  ],
  authors: [{ name: "Ashwan Jakkinapally" }],
  creator: "Ashwan Jakkinapally",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ashwanjakkinapally.com",
    title: "Ashwan Jakkinapally — Creative Video Editor & Graphic Designer",
    description: "Transforming footage & designs into cinematic visual storytelling experiences.",
    siteName: "Ashwan Jakkinapally Portfolio",
    images: [
      {
        url: "/images/poster-paradise-2days.webp",
        width: 1200,
        height: 630,
        alt: "Ashwan Jakkinapally Portfolio Showcase",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashwan Jakkinapally — Creative Video Editor & Graphic Designer",
    description: "Creative Video Editor & Graphic Designer portfolio featuring motion graphics, reels, and movie posters.",
    images: ["/images/poster-paradise-2days.webp"],
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.ico" },
      { url: "/images/ashwan-avatar.png", type: "image/png" },
    ],
    apple: "/images/ashwan-avatar.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#08171E",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark scroll-smooth ${plusJakartaSans.variable}`}>
      <head>
        <link rel="icon" href="/images/ashwan-avatar.png" type="image/png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${plusJakartaSans.className} min-h-screen bg-[#08171E] text-[#F0F8FF] antialiased selection:bg-[#096B90] selection:text-white relative`}>
        {children}
      </body>
    </html>
  );
}
