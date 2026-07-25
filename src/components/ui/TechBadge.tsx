"use client";

import React from "react";
import { cn } from "@/utils/cn";

interface TechBadgeProps {
  label: string;
  className?: string;
}

export const TechBadge: React.FC<TechBadgeProps> = ({ label, className }) => {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-white/[0.04] border border-white/10 text-purple-300 hover:border-purple-400/40 hover:bg-purple-500/10 transition-colors duration-200 shadow-sm select-none",
        className
      )}
    >
      {label}
    </span>
  );
};
