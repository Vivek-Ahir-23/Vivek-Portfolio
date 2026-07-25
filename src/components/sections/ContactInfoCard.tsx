"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ContactInfoItem } from "@/constants/contact";
import { Mail, Phone, MapPin, ArrowUpRight, Copy, Check } from "lucide-react";

interface ContactInfoCardProps {
  info: ContactInfoItem;
  index: number;
}

export const ContactInfoCard: React.FC<ContactInfoCardProps> = ({
  info,
  index,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  // 3D Parallax Tilt Effect on Mouse Move
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    const rY = (mouseX / (rect.width / 2)) * 7;
    const rX = -(mouseY / (rect.height / 2)) * 7;

    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  const handleCopy = (e: React.MouseEvent) => {
    if (!info.href) {
      e.preventDefault();
      navigator.clipboard.writeText(info.value);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  const renderIcon = () => {
    switch (info.iconType) {
      case "email":
        return <Mail className="w-5 h-5" />;
      case "phone":
        return <Phone className="w-5 h-5" />;
      case "location":
        return <MapPin className="w-5 h-5" />;
      case "linkedin":
        return (
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        );
      case "github":
        return (
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
        );
      default:
        return <Mail className="w-5 h-5" />;
    }
  };

  const CardContent = (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleCopy}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
      style={{
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      animate={{
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
        scale: isHovered ? 1.03 : 1,
      }}
      className="group relative rounded-3xl bg-[#0d0b18]/90 border border-white/10 backdrop-blur-2xl p-6 flex flex-col justify-between h-full min-h-[185px] transition-all duration-300 hover:border-purple-500/60 hover:bg-[#120e26] shadow-[0_15px_40px_rgba(0,0,0,0.6)] hover:shadow-[0_20px_50px_rgba(168,85,247,0.3)] select-none overflow-hidden"
    >
      {/* Top Animated Accent Line */}
      <div
        className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${info.gradient} opacity-80 group-hover:opacity-100 transition-opacity duration-300`}
      />

      {/* Top Header Row: Icon & Badge */}
      <div className="flex items-center justify-between gap-3 mb-4" style={{ transform: "translateZ(20px)" }}>
        <div
          className={`relative w-12 h-12 rounded-2xl bg-gradient-to-br ${info.gradient} p-0.5 shadow-[0_0_20px_rgba(139,92,246,0.35)] group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(139,92,246,0.6)] transition-all duration-300 shrink-0`}
        >
          <div className="w-full h-full rounded-[14px] bg-[#0b0914] flex items-center justify-center text-purple-300 group-hover:text-white transition-colors duration-300">
            {renderIcon()}
          </div>
        </div>

        <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-purple-500/15 border border-purple-400/30 text-purple-300 group-hover:border-purple-400/60 group-hover:bg-purple-500/25 transition-all duration-300">
          {info.badge}
        </span>
      </div>

      {/* Info Details */}
      <div style={{ transform: "translateZ(15px)" }} className="space-y-1.5 mt-auto">
        <span className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-wider block">
          {info.title}
        </span>
        <div className="flex items-center justify-between gap-2">
          <p className="text-base font-extrabold text-white tracking-tight truncate group-hover:text-purple-200 transition-colors duration-200">
            {info.value}
          </p>

          {info.href ? (
            <div className="w-8 h-8 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-purple-300 group-hover:border-purple-400/40 group-hover:bg-purple-500/20 transition-all duration-200 shrink-0">
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </div>
          ) : (
            <div className="w-8 h-8 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-purple-300 group-hover:border-purple-400/40 group-hover:bg-purple-500/20 transition-all duration-200 shrink-0">
              {isCopied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );

  if (info.href) {
    return (
      <a href={info.href} target="_blank" rel="noopener noreferrer" className="block h-full">
        {CardContent}
      </a>
    );
  }

  return CardContent;
};
