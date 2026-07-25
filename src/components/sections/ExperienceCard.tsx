"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, Building2, Calendar, Clock, CheckCircle2 } from "lucide-react";
import { ExperienceItem } from "@/constants/experience";

interface ExperienceCardProps {
  experience: ExperienceItem;
  index: number;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  experience,
  index,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // 3D Parallax Tilt Effect
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

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
      style={{
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      animate={{
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
        scale: isHovered ? 1.015 : 1,
      }}
      className="group relative rounded-2xl bg-[#0d0b18]/90 border border-white/[0.1] backdrop-blur-xl p-6 sm:p-8 transition-all duration-300 hover:border-violet-500/50 hover:bg-[#120e26] shadow-[0_15px_40px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_50px_rgba(139,92,246,0.25)] select-none"
    >
      {/* Animated Gradient Top Glow Bar */}
      <div className="absolute top-0 left-8 right-8 h-0.5 bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />

      {/* Header Row: Icon + Company + Role + Badges */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-white/10">
        <div className="flex items-start gap-4">
          {/* Briefcase Icon Box */}
          <div
            style={{ transform: "translateZ(20px)" }}
            className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-600 p-0.5 shadow-[0_0_20px_rgba(139,92,246,0.4)] group-hover:scale-110 transition-transform duration-300 shrink-0"
          >
            <div className="w-full h-full rounded-[10px] bg-[#0b0914] flex items-center justify-center text-purple-300 group-hover:text-white transition-colors duration-300">
              <Briefcase className="w-6 h-6" />
            </div>
          </div>

          <div style={{ transform: "translateZ(15px)" }}>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight group-hover:text-purple-300 transition-colors duration-200">
              {experience.role}
            </h3>
            <div className="flex items-center gap-2 mt-1 text-sm font-semibold text-purple-300">
              <Building2 className="w-4 h-4 text-purple-400" />
              <span>{experience.company}</span>
            </div>
          </div>
        </div>

        {/* Duration & Period Badges */}
        <div style={{ transform: "translateZ(15px)" }} className="flex flex-wrap items-center gap-2.5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-xs font-mono text-zinc-300">
            <Calendar className="w-3.5 h-3.5 text-purple-400" />
            <span>{experience.duration}</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-400/30 text-xs font-mono font-bold text-purple-300 shadow-[0_0_12px_rgba(168,85,247,0.2)]">
            <Clock className="w-3.5 h-3.5" />
            <span>{experience.period}</span>
          </div>
        </div>
      </div>

      {/* Description Paragraph */}
      <div style={{ transform: "translateZ(10px)" }} className="mb-6">
        <p className="text-sm sm:text-base text-zinc-300 font-normal leading-relaxed">
          {experience.description}
        </p>
      </div>

      {/* Key Responsibilities & Accomplishments */}
      <div style={{ transform: "translateZ(10px)" }} className="space-y-2.5 mb-6">
        <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-purple-300">
          Key Responsibilities & Impact
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
          {experience.highlights.map((item, i) => (
            <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-400">
              <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Stack Pills */}
      <div style={{ transform: "translateZ(10px)" }} className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-2">
        <span className="text-xs font-mono font-medium text-zinc-500 mr-1">Tech Stack:</span>
        {experience.techStack.map((tech) => (
          <span
            key={tech}
            className="px-2.5 py-1 rounded-lg text-xs font-mono font-semibold bg-white/[0.04] border border-white/10 text-purple-300 group-hover:border-purple-400/30 transition-colors duration-200"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
};
