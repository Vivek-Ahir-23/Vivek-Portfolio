"use client";

import React from "react";
import { EducationItem } from "@/constants/education";
import { GraduationPhotoCard } from "@/components/sections/GraduationPhotoCard";
import { Education3DCanvas } from "@/components/3d/Education3DCanvas";
import { Calendar, Award } from "lucide-react";
import { motion } from "framer-motion";

interface EducationSideBadgeProps {
  education: EducationItem;
  index: number;
}

export const EducationSideBadge: React.FC<EducationSideBadgeProps> = ({
  education,
  index,
}) => {
  const isBCA = education.id.includes("bca");

  if (isBCA) {
    return (
      <GraduationPhotoCard
        imageSrc="/education/bca-graduation.jpg"
        degree="BCA Graduate"
        university={education.university}
        cgpa={education.cgpa}
        year={education.duration}
      />
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.15 + 0.1, ease: "easeOut" }}
      className="relative w-full h-full min-h-[360px] rounded-3xl bg-[#0d0b18]/70 border border-white/10 backdrop-blur-2xl p-6 flex flex-col items-center justify-between shadow-2xl overflow-hidden group hover:border-purple-500/50 transition-all duration-300 select-none"
    >
      {/* Top Ambient Glow Gradient */}
      <div
        className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${education.gradient}`}
      />

      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 via-transparent to-indigo-500/10 opacity-50 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* 3D WebGL Floating Interactive Canvas */}
      <div className="relative w-full h-[220px] z-10">
        <Education3DCanvas variant="mca" />
      </div>

      {/* Side Badge Overlay Details */}
      <div className="relative z-20 w-full pt-3 border-t border-white/10 flex flex-col items-center text-center space-y-2">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-purple-500/20 border border-purple-400/40 text-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.3)]">
            {education.badge}
          </span>
        </div>

        <h4 className="text-sm font-bold text-white tracking-tight group-hover:text-purple-300 transition-colors duration-200 line-clamp-1">
          {education.university}
        </h4>

        <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
          <Calendar className="w-3.5 h-3.5 text-purple-400" />
          <span>{education.duration}</span>
        </div>
      </div>
    </motion.div>
  );
};
