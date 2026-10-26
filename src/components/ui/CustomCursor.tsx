"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring } from "motion/react";

export function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [cursorType, setCursorType] = useState<"default" | "view" | "drag" | "hover">("default");
  const [isVisible, setIsVisible] = useState(false);

  // Springs for smooth fluid lagging cursor
  const mouseX = useSpring(0, { damping: 28, stiffness: 350 });
  const mouseY = useSpring(0, { damping: 28, stiffness: 350 });
  const dotX = useSpring(0, { damping: 40, stiffness: 600 });
  const dotY = useSpring(0, { damping: 40, stiffness: 600 });

  useEffect(() => {
    // Only enable on non-touch devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }
    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      dotX.set(e.clientX);
      dotY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorTarget = target.closest("[data-cursor]") as HTMLElement | null;
      if (cursorTarget) {
        const type = cursorTarget.getAttribute("data-cursor") as "view" | "drag" | "hover";
        setCursorType(type || "hover");
      } else if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a")
      ) {
        setCursorType("hover");
      } else {
        setCursorType("default");
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY, dotX, dotY, isVisible]);

  if (!mounted || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Outer ring */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: cursorType === "view" ? 92 : cursorType === "drag" ? 72 : cursorType === "hover" ? 48 : 28,
          height: cursorType === "view" ? 92 : cursorType === "drag" ? 72 : cursorType === "hover" ? 48 : 28,
          backgroundColor:
            cursorType === "view"
              ? "#C8FF00"
              : cursorType === "hover"
              ? "rgba(200, 255, 0, 0.35)"
              : "rgba(0, 0, 0, 0)",
          borderColor:
            cursorType === "view"
              ? "#0A0A0A"
              : cursorType === "hover"
              ? "#0A0A0A"
              : "rgba(10, 10, 10, 0.35)",
          scale: 1,
        }}
        transition={{ type: "spring", damping: 25, stiffness: 350 }}
        className="rounded-full border flex items-center justify-center text-center backdrop-blur-[1px] transition-colors"
      >
        {cursorType === "view" && (
          <span className="font-display text-[12px] font-bold tracking-tight text-black flex items-center gap-0.5 select-none">
            VIEW ↗
          </span>
        )}
        {cursorType === "drag" && (
          <span className="font-mono-tech text-[10px] font-bold text-black select-none">
            DRAG ↔
          </span>
        )}
      </motion.div>

      {/* Center pinpoint */}
      {cursorType !== "view" && (
        <motion.div
          style={{
            x: dotX,
            y: dotY,
            translateX: "-50%",
            translateY: "-50%",
          }}
          className="h-2 w-2 rounded-full bg-black border border-white"
        />
      )}
    </div>
  );
}
