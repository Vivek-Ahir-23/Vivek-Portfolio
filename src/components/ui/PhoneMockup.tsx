"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/utils/cn";

interface PhoneMockupProps {
  imageSrc: string;
  alt: string;
  className?: string;
  aspectRatio?: "phone" | "desktop";
}

export const PhoneMockup: React.FC<PhoneMockupProps> = ({
  imageSrc,
  alt,
  className,
  aspectRatio = "phone",
}) => {
  if (aspectRatio === "desktop") {
    return (
      <div
        className={cn(
          "relative w-full rounded-2xl bg-[#120e26] p-2 border-[4px] border-[#2a244d] shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden group transition-all duration-300 hover:border-purple-500/60 hover:shadow-[0_25px_60px_rgba(139,92,246,0.3)]",
          className
        )}
      >
        {/* Browser Top Bar */}
        <div className="w-full h-7 bg-[#1a1538] rounded-t-xl px-3 flex items-center justify-between border-b border-white/10 mb-1.5">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
          </div>
          <span className="text-[10px] font-mono text-zinc-400 truncate max-w-[240px]">
            {alt}
          </span>
          <div className="w-4" />
        </div>

        {/* Desktop Screen Display - Aspect Ratio 16:9 Full Uncropped */}
        <div className="relative w-full aspect-[16/9] rounded-b-xl overflow-hidden bg-black flex items-center justify-center">
          <Image
            src={imageSrc}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            unoptimized
            className="object-contain object-center group-hover:scale-[1.02] transition-transform duration-500 ease-out"
          />
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative mx-auto w-[230px] sm:w-[250px] h-[470px] sm:h-[510px] rounded-[36px] bg-[#120e26] p-2.5 border-[6px] border-[#2a244d] shadow-[0_25px_60px_rgba(0,0,0,0.8),0_0_30px_rgba(139,92,246,0.25)] flex flex-col items-center justify-between group overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:border-purple-500/60 hover:shadow-[0_30px_70px_rgba(139,92,246,0.4)]",
        className
      )}
    >
      {/* Phone Camera & Speaker Notch Bar */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-4 bg-[#120e26] rounded-b-xl z-20 flex items-center justify-center gap-2 border-b border-x border-white/10">
        <span className="w-2 h-2 rounded-full bg-[#1e193b] border border-white/20" />
        <span className="w-8 h-1 rounded-full bg-[#1e193b]" />
      </div>

      {/* Phone Screen Frame Display - Full Uncropped Image */}
      <div className="relative w-full h-full rounded-[26px] overflow-hidden bg-black flex items-center justify-center">
        <Image
          src={imageSrc}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 300px"
          unoptimized
          className="object-contain object-center group-hover:scale-[1.02] transition-transform duration-500 ease-out"
        />
        {/* Subtle Ambient Screen Reflection Glow */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-transparent pointer-events-none" />
      </div>

      {/* Phone Bottom Home Indicator Line */}
      <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-20 h-1 rounded-full bg-white/30 z-20" />
    </div>
  );
};
