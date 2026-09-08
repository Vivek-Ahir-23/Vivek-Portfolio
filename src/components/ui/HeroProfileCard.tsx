"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Code2, ShieldCheck, Flame } from "lucide-react";

export const HeroProfileCard: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Smooth 3D Parallax Tilt Calculation on Mouse Move
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const mouseX = e.clientX - (rect.left + centerX);
    const mouseY = e.clientY - (rect.top + centerY);

    const rY = (mouseX / centerX) * 10;
    const rX = -(mouseY / centerY) * 10;

    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative flex items-center justify-center select-none py-4 cursor-pointer"
      style={{ perspective: 1000 }}
    >
      {/* Outer 3D Float Wrapper */}
      <motion.div
        animate={{
          y: isHovered ? 0 : [-6, 6, -6],
          rotateX: isHovered ? rotateX : 0,
          rotateY: isHovered ? rotateY : 0,
          scale: isHovered ? 1.04 : 1,
        }}
        transition={{
          y: { repeat: Infinity, duration: 4.5, ease: "easeInOut" },
          rotateX: { type: "spring", stiffness: 280, damping: 25 },
          rotateY: { type: "spring", stiffness: 280, damping: 25 },
          scale: { type: "spring", stiffness: 300, damping: 22 },
        }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative flex items-center justify-center"
      >
        {/* Layer 1: Ambient Pulsing Circular Radial Glow Halo */}
        <div className="absolute -inset-6 rounded-full bg-gradient-to-tr from-violet-600/30 via-purple-500/25 to-pink-500/30 blur-2xl pointer-events-none animate-pulse" />

        {/* Layer 2: Rotating Outer Neon Circle Ring Orbit */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="absolute -inset-3.5 rounded-full border-2 border-dashed border-purple-400/40 shadow-[0_0_30px_rgba(168,85,247,0.3)] pointer-events-none"
        />

        {/* Layer 3: Inner Glowing Neon Gradient Circle Border */}
        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 opacity-80 blur-sm pointer-events-none" />

        {/* Floating Glass Tech Badge 1 (Top Right) */}
        <motion.div
          animate={{ y: [-5, 5, -5] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          style={{ transform: "translateZ(40px)" }}
          className="absolute -top-4 -right-4 sm:-right-6 z-30 px-3.5 py-1.5 rounded-full bg-[#0d0b18]/90 border border-purple-400/40 backdrop-blur-xl shadow-[0_10px_25px_rgba(139,92,246,0.35)] flex items-center gap-2"
        >
          <Sparkles className="w-4 h-4 text-purple-300" />
          <span className="text-xs font-mono font-bold text-purple-200">Flutter Developer</span>
        </motion.div>

        {/* Floating Glass Tech Badge 2 (Bottom Left) */}
        <motion.div
          animate={{ y: [5, -5, 5] }}
          transition={{ repeat: Infinity, duration: 4.4, ease: "easeInOut" }}
          style={{ transform: "translateZ(35px)" }}
          className="absolute -bottom-4 -left-4 sm:-left-6 z-30 px-3.5 py-1.5 rounded-full bg-[#0d0b18]/90 border border-pink-400/40 backdrop-blur-xl shadow-[0_10px_25px_rgba(236,72,153,0.35)] flex items-center gap-2"
        >
          <Flame className="w-4 h-4 text-amber-400" />
          <span className="text-xs font-mono font-bold text-pink-200">Firebase & Mobile</span>
        </motion.div>

        {/* Floating Glass Tech Badge 3 (Bottom Right) */}
        <motion.div
          animate={{ y: [-4, 4, -4] }}
          transition={{ repeat: Infinity, duration: 3.6, ease: "easeInOut" }}
          style={{ transform: "translateZ(30px)" }}
          className="absolute -bottom-2 -right-2 z-30 px-3 py-1.5 rounded-full bg-[#0d0b18]/90 border border-emerald-400/40 backdrop-blur-xl shadow-[0_10px_20px_rgba(16,185,129,0.3)] flex items-center gap-1.5"
        >
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span className="text-[11px] font-mono font-bold text-emerald-300">SAP Certified</span>
        </motion.div>

        {/* Main Perfect Circular Portrait Container */}
        <div
          style={{ transform: "translateZ(10px)" }}
          className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full p-1 bg-gradient-to-b from-purple-500/60 via-violet-500/40 to-pink-500/50 shadow-[0_20px_50px_rgba(0,0,0,0.85)] overflow-hidden group"
        >
          {/* Inner Circular Photo Wrapper */}
          <div className="relative w-full h-full rounded-full overflow-hidden bg-[#0e0b1f]">
            {/* Developer Portrait Image */}
            <Image
              src="/hero-profile.png"
              alt="Shyara Vivek - Flutter Developer"
              fill
              priority
              unoptimized
              sizes="(max-width: 768px) 256px, 320px"
              className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-108"
            />

            {/* Ambient Vignette Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0914]/80 via-transparent to-transparent pointer-events-none" />

            {/* Light Reflection Sweep Effect */}
            <motion.div
              animate={{
                x: ["-100%", "200%"],
              }}
              transition={{
                repeat: Infinity,
                repeatDelay: 4,
                duration: 1.8,
                ease: "easeInOut",
              }}
              className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/12 to-transparent skew-x-12 pointer-events-none"
            />

            {/* Bottom Overlay Name Tag */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0d0b18]/85 border border-white/15 backdrop-blur-md shrink-0 shadow-lg">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <Code2 className="w-3.5 h-3.5 text-purple-300" />
              <span className="text-xs font-mono font-bold text-white tracking-wider uppercase whitespace-nowrap">
                Shyara Vivek
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
