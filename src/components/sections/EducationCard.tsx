"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Building2,
  Calendar,
  Award,
  Clock,
  CheckCircle2,
  School,
} from "lucide-react";
import { EducationItem, EDUCATION_ICON_MAP } from "@/constants/education";

interface EducationCardProps {
  education: EducationItem;
  index: number;
}

export const EducationCard: React.FC<EducationCardProps> = ({
  education,
  index,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const IconComponent =
    EDUCATION_ICON_MAP[education.iconName] || EDUCATION_ICON_MAP["GraduationCap"];

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

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  const isPursuing = education.status.toLowerCase().includes("pursuing");

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay: index * 0.12, ease: "easeOut" }}
      style={{
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      animate={{
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
        scale: isHovered ? 1.02 : 1,
      }}
      className="group relative rounded-3xl bg-[#0d0b18]/90 border border-white/[0.1] backdrop-blur-2xl p-6 sm:p-8 flex flex-col justify-between h-full transition-all duration-300 hover:border-purple-500/50 hover:bg-[#120e26] shadow-[0_15px_40px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_50px_rgba(139,92,246,0.25)] select-none"
    >
      {/* Animated Gradient Top Glow Accent Bar */}
      <div
        className={`absolute top-0 left-8 right-8 h-0.5 bg-gradient-to-r ${education.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full`}
      />

      <div>
        {/* Header Row: Icon + Degree + Status Badges */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-white/10">
          <div className="flex items-start gap-4">
            {/* Animated Glow Icon Box */}
            <div
              style={{ transform: "translateZ(20px)" }}
              className={`relative w-13 h-13 rounded-2xl bg-gradient-to-br ${education.gradient} p-0.5 shadow-[0_0_20px_rgba(139,92,246,0.35)] group-hover:shadow-[0_0_30px_rgba(139,92,246,0.6)] group-hover:scale-110 transition-all duration-300 shrink-0`}
            >
              <div className="w-full h-full rounded-[14px] bg-[#0b0914] flex items-center justify-center text-purple-300 group-hover:text-white transition-colors duration-300">
                <IconComponent className="w-6 h-6 transition-transform duration-300 group-hover:rotate-6" />
              </div>
            </div>

            <div style={{ transform: "translateZ(15px)" }}>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-purple-500/15 border border-purple-400/30 text-purple-300">
                  {education.badge}
                </span>
                <span className="text-xs font-mono font-extrabold text-purple-400">
                  {education.number}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight group-hover:text-purple-300 transition-colors duration-200">
                {education.degree}
              </h3>
            </div>
          </div>

          {/* Status & CGPA Badges */}
          <div style={{ transform: "translateZ(15px)" }} className="flex flex-wrap items-center gap-2">
            {education.cgpa && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-300 text-xs font-mono font-bold">
                <Award className="w-3.5 h-3.5" />
                <span>CGPA: {education.cgpa}</span>
              </span>
            )}
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold ${
                isPursuing
                  ? "bg-purple-500/20 border border-purple-400/40 text-purple-300 shadow-[0_0_12px_rgba(168,85,247,0.3)]"
                  : "bg-emerald-500/20 border border-emerald-400/40 text-emerald-400"
              }`}
            >
              <Clock className="w-3.5 h-3.5" />
              <span>{education.status}</span>
            </span>
          </div>
        </div>

        {/* Institution Information */}
        <div style={{ transform: "translateZ(15px)" }} className="space-y-2 mb-5">
          <div className="flex items-center gap-2 text-sm font-semibold text-purple-200">
            <School className="w-4 h-4 text-purple-400 shrink-0" />
            <span>{education.college}</span>
          </div>
          <div className="flex items-center justify-between flex-wrap gap-2 text-xs font-medium text-zinc-400">
            <div className="flex items-center gap-2">
              <Building2 className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
              <span>{education.university}</span>
            </div>
            <div className="flex items-center gap-1.5 text-zinc-400 bg-white/[0.04] px-3 py-1 rounded-full border border-white/10 font-mono">
              <Calendar className="w-3.5 h-3.5 text-purple-400" />
              <span>{education.duration}</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p
          style={{ transform: "translateZ(10px)" }}
          className="text-xs sm:text-sm text-zinc-300 font-normal leading-relaxed mb-6 group-hover:text-zinc-200 transition-colors duration-200"
        >
          {education.description}
        </p>

        {/* Key Academic Focus Points */}
        <div style={{ transform: "translateZ(10px)" }} className="space-y-2 mb-2">
          <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-purple-300">
            Core Academic Focus & Areas:
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {education.highlights.map((item, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-zinc-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Verified Bar */}
      <div
        style={{ transform: "translateZ(10px)" }}
        className="pt-4 mt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono"
      >
        <span className="text-zinc-500 uppercase tracking-wider">
          {education.university}
        </span>
        <span className="text-purple-300 font-bold">
          {education.duration}
        </span>
      </div>
    </motion.div>
  );
};
