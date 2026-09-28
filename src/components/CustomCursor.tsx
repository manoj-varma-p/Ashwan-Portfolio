"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const followerX = useSpring(cursorX, springConfig);
  const followerY = useSpring(cursorY, springConfig);

  useEffect(() => {
    setMounted(true);

    const checkTouch = () => {
      if (typeof window !== "undefined") {
        setIsTouchDevice(
          window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window
        );
      }
    };
    checkTouch();

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.closest("button") ||
          target.closest("a") ||
          target.closest("input") ||
          target.closest("textarea") ||
          target.closest("[role='button']") ||
          target.closest(".portfolio-card"))
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  if (!mounted || isTouchDevice) return null;

  return (
    <>
      {/* Central Precision Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99999] rounded-full bg-[#71B7D5]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isClicking ? 6 : isHovered ? 12 : 8,
          height: isClicking ? 6 : isHovered ? 12 : 8,
          opacity: 1,
        }}
        transition={{ duration: 0.15, ease: "easeOut" }}
      />

      {/* Trailing Spring Ring Aura */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99998] rounded-full border border-[#096B90]/70"
        style={{
          x: followerX,
          y: followerY,
          translateX: "-50%",
          translateY: "-50%",
          boxShadow: isHovered
            ? "0 0 24px rgba(113, 183, 213, 0.5), inset 0 0 12px rgba(9, 107, 144, 0.3)"
            : "0 0 14px rgba(9, 107, 144, 0.25)",
        }}
        animate={{
          width: isClicking ? 32 : isHovered ? 52 : 36,
          height: isClicking ? 32 : isHovered ? 52 : 36,
          borderColor: isHovered ? "#71B7D5" : "rgba(161, 204, 220, 0.6)",
          backgroundColor: isHovered ? "rgba(9, 107, 144, 0.2)" : "rgba(9, 107, 144, 0)",
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      />
    </>
  );
}
