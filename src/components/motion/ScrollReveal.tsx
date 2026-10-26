"use client";

import React from "react";
import { motion, Variants } from "motion/react";

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right" | "none" | "zoom";
  delay?: number;
  duration?: number;
  distance?: number;
  amount?: number | "some" | "all";
  once?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.8,
  distance = 36,
  amount = 0.15,
  once = true,
  className = "",
  style,
}: ScrollRevealProps) {
  const getInitialPosition = () => {
    switch (direction) {
      case "up":
        return { opacity: 0, y: distance, scale: 0.98 };
      case "down":
        return { opacity: 0, y: -distance, scale: 0.98 };
      case "left":
        return { opacity: 0, x: distance, scale: 0.98 };
      case "right":
        return { opacity: 0, x: -distance, scale: 0.98 };
      case "zoom":
        return { opacity: 0, scale: 0.92 };
      case "none":
      default:
        return { opacity: 0 };
    }
  };

  const getTargetPosition = () => {
    switch (direction) {
      case "up":
      case "down":
        return { opacity: 1, y: 0, scale: 1 };
      case "left":
      case "right":
        return { opacity: 1, x: 0, scale: 1 };
      case "zoom":
      case "none":
      default:
        return { opacity: 1, scale: 1 };
    }
  };

  return (
    <motion.div
      initial={getInitialPosition()}
      whileInView={getTargetPosition()}
      viewport={{ once, amount }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

interface ScrollStaggerProps {
  children: React.ReactNode;
  staggerDelay?: number;
  initialDelay?: number;
  amount?: number | "some" | "all";
  once?: boolean;
  className?: string;
}

export function ScrollStagger({
  children,
  staggerDelay = 0.08,
  initialDelay = 0,
  amount = 0.15,
  once = true,
  className = "",
}: ScrollStaggerProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: initialDelay,
        staggerChildren: staggerDelay,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export const scrollStaggerItem: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};
