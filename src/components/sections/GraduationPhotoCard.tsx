"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { GraduationCap, Award, Sparkles, Building2, CheckCircle2 } from "lucide-react";

interface GraduationPhotoCardProps {
  imageSrc: string;
  degree: string;
  university: string;
  cgpa?: string;
  year: string;
}

export const GraduationPhotoCard: React.FC<GraduationPhotoCardProps> = ({
  imageSrc,
  degree,
  university,
  cgpa,
  year,
}) => {
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

    const rY = (mouseX / (rect.width / 2)) * 8;
    const rX = -(mouseY / (rect.height / 2)) * 8;

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
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, scale: 0.92, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      animate={{
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
        scale: isHovered ? 1.03 : 1,
      }}
      className="group relative w-full h-full min-h-[380px] sm:min-h-[440px] rounded-3xl bg-[#0d0b18]/85 border border-white/10 backdrop-blur-2xl p-4 sm:p-5 flex flex-col justify-between shadow-[0_20px_60px_rgba(0,0,0,0.7)] hover:shadow-[0_25px_70px_rgba(56,189,248,0.3)] hover:border-sky-500/60 transition-all duration-300 overflow-hidden select-none"
    >
      {/* Top Gradient Glow Accent Bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 z-30" />

      {/* Floating 3D Ambient Particles & Glow Halos */}
      <div className="absolute top-1/4 -right-10 w-40 h-40 bg-sky-500/20 rounded-full blur-[50px] pointer-events-none group-hover:scale-125 transition-transform duration-500 z-0" />
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-500/20 rounded-full blur-[50px] pointer-events-none group-hover:scale-125 transition-transform duration-500 z-0" />

      {/* Image Container with Glassmorphism 3D Frame */}
      <div
        style={{ transform: "translateZ(20px)" }}
        className="relative w-full aspect-[3/4] sm:aspect-[4/5] rounded-2xl overflow-hidden bg-black/60 border border-white/15 shadow-2xl z-10"
      >
        <Image
          src={imageSrc}
          alt={`${degree} Graduation Photo`}
          fill
          sizes="(max-width: 768px) 100vw, 400px"
          unoptimized
          priority
          className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
        />

        {/* Gradient Overlay for Readable Badges */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent z-10" />

        {/* Top Right Floating Badge */}
        <div className="absolute top-3 right-3 z-20">
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-sky-500/90 border border-sky-300/50 text-white text-xs font-mono font-bold shadow-[0_0_20px_rgba(56,189,248,0.6)] backdrop-blur-md">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Graduation 2024</span>
          </span>
        </div>

        {/* Bottom Floating Details Box on Image */}
        <div className="absolute bottom-3 left-3 right-3 z-20 space-y-1.5 p-3 rounded-xl bg-[#0b0914]/80 border border-white/10 backdrop-blur-md">
          <div className="flex items-center justify-between gap-2">
            <span className="text-xs font-mono font-bold text-sky-300">
              {degree}
            </span>
            {cgpa && (
              <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-extrabold bg-amber-500/20 border border-amber-400/30 text-amber-300 flex items-center gap-1">
                <Award className="w-3 h-3" />
                <span>CGPA {cgpa}</span>
              </span>
            )}
          </div>
          <div className="flex items-center gap-1.5 text-[11px] text-zinc-300 font-medium truncate">
            <Building2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
            <span className="truncate">{university}</span>
          </div>
        </div>
      </div>

      {/* Card Footer Info */}
      <div
        style={{ transform: "translateZ(15px)" }}
        className="relative z-10 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono"
      >
        <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
          <CheckCircle2 className="w-3.5 h-3.5" />
          <span>Official Degree Graduate</span>
        </div>
        <span className="text-sky-400 font-extrabold">
          {year}
        </span>
      </div>
    </motion.div>
  );
};
