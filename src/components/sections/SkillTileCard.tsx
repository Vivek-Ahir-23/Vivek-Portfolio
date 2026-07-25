"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SkillTile } from "@/constants/skills";

interface SkillTileCardProps {
  skill: SkillTile;
}

export const SkillTileCard: React.FC<SkillTileCardProps> = ({ skill }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // 3D Parallax Tilt Effect on Mouse Move
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    const rY = (mouseX / (rect.width / 2)) * 6;
    const rX = -(mouseY / (rect.height / 2)) * 6;

    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      style={{
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      animate={{
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
        scale: isHovered ? 1.03 : 1,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative p-2.5 sm:p-3 rounded-xl bg-[#0e0b1f]/90 border border-white/[0.08] backdrop-blur-xl flex flex-col items-center justify-center text-center gap-1.5 transition-all duration-300 hover:border-violet-500/60 hover:bg-[#130f2a] hover:shadow-[0_0_20px_rgba(139,92,246,0.25)] cursor-pointer select-none"
    >
      {/* 3D Ambient Top Glow Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-0.5 bg-gradient-to-r from-transparent via-violet-500/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />

      {/* Medium Compact Tech Logo Container */}
      <div
        style={{ transform: "translateZ(12px)" }}
        className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center p-2 group-hover:scale-105 group-hover:border-violet-400/50 group-hover:bg-violet-600/15 transition-all duration-300 shadow-inner relative shrink-0"
      >
        <Image
          src={skill.imageSrc}
          alt={`${skill.name} Official Logo`}
          width={24}
          height={24}
          unoptimized
          className="w-5 h-5 sm:w-6 sm:h-6 object-contain filter drop-shadow-[0_0_6px_rgba(168,85,247,0.6)] group-hover:brightness-110 transition-all duration-300"
        />
      </div>

      {/* Tech Name */}
      <span
        style={{ transform: "translateZ(8px)" }}
        className="text-xs font-semibold text-zinc-200 group-hover:text-white transition-colors duration-200 tracking-tight"
      >
        {skill.name}
      </span>

      {/* Tech Description */}
      <span
        style={{ transform: "translateZ(4px)" }}
        className="text-[10px] text-zinc-400 font-normal line-clamp-1 group-hover:text-purple-300 transition-colors duration-200"
      >
        {skill.description}
      </span>
    </motion.div>
  );
};
