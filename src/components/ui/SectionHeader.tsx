"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/utils/cn";

export interface SectionHeaderProps {
  badgeText?: string;
  title: string;
  highlightText?: string;
  subtitle?: string;
  actionText?: string;
  actionHref?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badgeText,
  title,
  highlightText,
  subtitle,
  actionText,
  actionHref,
  centered = false,
  className,
}) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-2 mb-10 select-none",
        centered ? "items-center text-center mx-auto max-w-2xl" : "items-start text-left",
        className
      )}
    >
      {/* Top Badge */}
      {badgeText && (
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-600/15 border border-violet-500/30 text-[11px] font-mono font-semibold text-violet-300 uppercase tracking-widest shadow-[0_0_12px_rgba(139,92,246,0.2)]">
          <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
          <span>{badgeText}</span>
        </div>
      )}

      {/* Main Title & Action Row */}
      <div className="w-full flex items-end justify-between gap-4">
        <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
          {title}{" "}
          {highlightText && (
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 drop-shadow-[0_0_20px_rgba(139,92,246,0.4)]">
              {highlightText}
            </span>
          )}
        </h2>

        {actionText && actionHref && (
          <a
            href={actionHref}
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-violet-400 hover:text-white transition-colors duration-200 group whitespace-nowrap shrink-0"
          >
            <span>{actionText}</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        )}
      </div>

      {/* Subtitle */}
      {subtitle && (
        <p className="text-sm sm:text-base text-zinc-400 font-normal leading-relaxed mt-1">
          {subtitle}
        </p>
      )}
    </div>
  );
};
