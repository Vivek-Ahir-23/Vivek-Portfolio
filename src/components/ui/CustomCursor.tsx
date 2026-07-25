"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop pointer devices
    if (typeof window === "undefined" || window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === "BUTTON" ||
          target.tagName === "A" ||
          target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.tagName === "IMG" ||
          target.getAttribute("role") === "button" ||
          target.closest("a") ||
          target.closest("button") ||
          target.closest("[role='button']") ||
          target.classList.contains("group"))
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown, { passive: true });
    window.addEventListener("mouseup", handleMouseUp, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden select-none">
      {/* Center Precise Cursor Dot */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 rounded-full bg-purple-400 shadow-[0_0_15px_rgba(168,85,247,1)] pointer-events-none z-[99999] border border-purple-200/80"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          scale: isClicked ? 0.6 : isHovered ? 1.6 : 1,
          backgroundColor: isHovered ? "#ec4899" : "#c084fc",
        }}
        transition={{
          type: "spring",
          stiffness: 900,
          damping: 40,
          mass: 0.05,
        }}
      />

      {/* Outer Animated Follower Circle Ring */}
      <motion.div
        className="fixed top-0 left-0 w-9 h-9 rounded-full border border-purple-400/70 bg-purple-500/15 backdrop-blur-[1px] shadow-[0_0_25px_rgba(139,92,246,0.5)] pointer-events-none z-[99998]"
        animate={{
          x: mousePosition.x - 18,
          y: mousePosition.y - 18,
          scale: isClicked ? 0.8 : isHovered ? 1.6 : 1,
          borderColor: isHovered ? "rgba(236,72,153,0.9)" : "rgba(168,85,247,0.7)",
          backgroundColor: isHovered ? "rgba(236,72,153,0.2)" : "rgba(139,92,246,0.1)",
        }}
        transition={{
          type: "spring",
          stiffness: 280,
          damping: 26,
          mass: 0.25,
        }}
      />
    </div>
  );
};
