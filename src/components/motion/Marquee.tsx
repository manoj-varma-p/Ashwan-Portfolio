"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  items?: string[];
  customContent?: React.ReactNode;
  reverse?: boolean;
  speed?: "slow" | "normal" | "fast";
  className?: string;
  itemClassName?: string;
  theme?: "lime" | "dark" | "orange";
  pauseOnHover?: boolean;
}

export function Marquee({
  items,
  customContent,
  reverse = false,
  speed = "normal",
  className,
  itemClassName,
  theme = "lime",
  pauseOnHover = true,
}: MarqueeProps) {
  const speedDurations = {
    slow: "45s",
    normal: "28s",
    fast: "16s",
  };

  const themeClasses = {
    lime: "bg-[#C8FF00] text-[#050505] border-y border-black/30",
    dark: "bg-[#0A0A0A] text-[#F5F5F0] border-y border-white/10",
    orange: "bg-[#FF6A00] text-black border-y border-black/30",
  };

  const defaultItems = [
    "VIDEO EDITING",
    "GRAPHIC DESIGN",
    "VISUAL STORIES",
    "MOTION GRAPHICS",
    "COLOR GRADING",
    "REELS & SHORTS",
    "2026 PORTFOLIO",
  ];

  const contentItems = items || defaultItems;

  const renderContent = () => (
    customContent ? (
      <>{customContent}</>
    ) : (
      <>
        {contentItems.map((item, idx) => (
          <span
            key={`item-${idx}`}
            className={cn(
              "inline-flex items-center gap-6 text-lg sm:text-2xl font-bold uppercase transition-colors duration-200",
              itemClassName
            )}
          >
            <span>{item}</span>
            <span className="text-sm opacity-60">✳</span>
          </span>
        ))}
      </>
    )
  );

  return (
    <div
      className={cn(
        "group relative w-full overflow-hidden py-3 font-display select-none tracking-wider flex",
        themeClasses[theme],
        className
      )}
    >
      {/* Track 1 */}
      <div
        className={cn(
          "flex shrink-0 items-center justify-around gap-6 min-w-full",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
        style={{
          animation: `marquee-scroll ${speedDurations[speed]} linear infinite ${
            reverse ? "reverse" : "normal"
          }`,
          willChange: "transform",
        }}
      >
        {renderContent()}
      </div>

      {/* Track 2 (Clone for infinite gapless seamless looping) */}
      <div
        aria-hidden="true"
        className={cn(
          "flex shrink-0 items-center justify-around gap-6 min-w-full",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
        style={{
          animation: `marquee-scroll ${speedDurations[speed]} linear infinite ${
            reverse ? "reverse" : "normal"
          }`,
          willChange: "transform",
        }}
      >
        {renderContent()}
      </div>

      <style jsx>{`
        @keyframes marquee-scroll {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-100%, 0, 0);
          }
        }
      `}</style>
    </div>
  );
}

