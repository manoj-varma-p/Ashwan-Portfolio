"use client";

import React, { useState, useRef } from "react";

interface GlossyCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: "dark" | "light" | "lime";
  className?: string;
  shine?: boolean;
  spotlight?: boolean;
}

export function GlossyCard({
  children,
  variant = "dark",
  className = "",
  shine = true,
  spotlight = true,
  ...props
}: GlossyCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const getSpotlightColor = () => {
    if (variant === "light") {
      return "rgba(255, 255, 255, 0.65)";
    }
    if (variant === "lime") {
      return "rgba(200, 255, 0, 0.22)";
    }
    return "rgba(255, 255, 255, 0.13)";
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className={`group relative overflow-hidden transition-all duration-300 ease-out ${
        variant === "light"
          ? "glossy-shine-light glossy-rim-light hover:shadow-[0_25px_50px_rgba(0,0,0,0.18)]"
          : "glossy-shine glossy-rim hover:shadow-[0_25px_55px_rgba(0,0,0,0.7),inset_0_1px_2px_rgba(255,255,255,0.3)]"
      } ${className}`}
      {...props}
    >
      {/* Interactive Cursor Spotlight Sheen */}
      {spotlight && (
        <div
          className="pointer-events-none absolute -inset-px rounded-[inherit] transition-opacity duration-300 z-10"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, ${getSpotlightColor()}, transparent 70%)`,
          }}
        />
      )}

      {/* Top Glass Specular Reflection Gradient */}
      <div className="absolute inset-x-0 top-0 h-[45%] bg-gradient-to-b from-white/[0.06] to-transparent pointer-events-none rounded-t-[inherit] z-10" />

      {/* Card Content */}
      <div className="relative z-20 h-full">{children}</div>
    </div>
  );
}
