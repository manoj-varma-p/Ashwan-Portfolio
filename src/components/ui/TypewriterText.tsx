"use client";

import React, { useState, useEffect, useRef } from "react";
import { useInView } from "motion/react";

interface TypewriterTextProps {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
  cursorColor?: string;
  showCursor?: boolean;
  onComplete?: () => void;
  as?: "span" | "p" | "h1" | "h2" | "h3" | "h4";
}

export function TypewriterText({
  text,
  delay = 0,
  speed = 22,
  className = "",
  cursorColor = "#C8FF00",
  showCursor = true,
  onComplete,
  as: Component = "span",
}: TypewriterTextProps) {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  const [displayedLength, setDisplayedLength] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (!isInView) return;

    let timeoutId: NodeJS.Timeout;
    let intervalId: NodeJS.Timeout;

    timeoutId = setTimeout(() => {
      setIsTyping(true);
      let currentLength = 0;

      intervalId = setInterval(() => {
        currentLength += 1;
        setDisplayedLength(currentLength);

        if (currentLength >= text.length) {
          clearInterval(intervalId);
          setIsTyping(false);
          setIsComplete(true);
          onComplete?.();
        }
      }, speed);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [isInView, text, speed, delay, onComplete]);

  const displayedText = text.slice(0, displayedLength);

  return (
    <Component ref={containerRef as any} className={`relative ${className}`}>
      {displayedText}
      {showCursor && (!isComplete || isTyping) && (
        <span
          className="inline-block w-1.5 h-[0.9em] ml-0.5 align-middle animate-pulse"
          style={{ backgroundColor: cursorColor }}
          aria-hidden="true"
        />
      )}
    </Component>
  );
}
