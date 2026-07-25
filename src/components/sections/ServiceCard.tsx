"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ServiceItem, ICON_MAP } from "@/constants/services";

interface ServiceCardProps {
  service: ServiceItem;
  index: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const IconComponent = ICON_MAP[service.iconName] || ICON_MAP["Smartphone"];

  // 3D Parallax Tilt Effect on Mouse Movement
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
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
      style={{
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      animate={{
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
        scale: isHovered ? 1.025 : 1,
      }}
      className="group relative rounded-2xl bg-[#0d0b18]/85 border border-white/[0.09] backdrop-blur-xl p-6 sm:p-7 flex flex-col justify-between h-full transition-all duration-300 hover:border-violet-500/50 hover:bg-[#120e26] shadow-[0_10px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_20px_40px_rgba(139,92,246,0.25)] select-none"
    >
      {/* Animated Gradient Top Glow Bar */}
      <div
        className={`absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full`}
      />

      {/* Card Header: Icon + Number Index */}
      <div className="flex items-start justify-between gap-4 mb-5">
        {/* Animated Glow Icon Box */}
        <div
          style={{ transform: "translateZ(20px)" }}
          className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} p-0.5 shadow-[0_0_20px_rgba(139,92,246,0.3)] group-hover:shadow-[0_0_25px_rgba(139,92,246,0.6)] group-hover:scale-110 transition-all duration-300`}
        >
          <div className="w-full h-full rounded-[10px] bg-[#0b0914] flex items-center justify-center text-purple-300 group-hover:text-white transition-colors duration-300">
            <IconComponent className="w-6 h-6 transition-transform duration-300 group-hover:rotate-6" />
          </div>
        </div>

        {/* Number Badge */}
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-white/[0.04] border border-white/10 text-purple-300 group-hover:border-purple-400/40 transition-colors duration-300">
            {service.badge}
          </span>
          <span className="text-xs font-mono font-bold text-zinc-500 group-hover:text-purple-400 transition-colors duration-300">
            {service.number}
          </span>
        </div>
      </div>

      {/* Card Body: Title & Description */}
      <div style={{ transform: "translateZ(15px)" }} className="space-y-2 flex-1">
        <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-purple-200 transition-colors duration-200">
          {service.title}
        </h3>
        <p className="text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed group-hover:text-zinc-300 transition-colors duration-200">
          {service.description}
        </p>
      </div>
    </motion.div>
  );
};
