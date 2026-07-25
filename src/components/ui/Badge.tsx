"use client";

import React from "react";
import { Code2 } from "lucide-react";
import { cn } from "@/utils/cn";

export interface BadgeProps {
  children?: React.ReactNode;
  roleText?: string;
  statusDot?: boolean;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  roleText = "Flutter Developer",
  statusDot = true,
  className,
}) => {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] backdrop-blur-xl border border-violet-500/30 text-xs font-mono text-violet-300 shadow-[0_0_15px_rgba(139,92,246,0.2)] select-none",
        className
      )}
    >
      <Code2 className="w-3.5 h-3.5 text-violet-400 shrink-0" />
      <span className="text-zinc-200 font-sans font-medium">{roleText}</span>
      <span className="text-zinc-500">|</span>
      {statusDot && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
        </span>
      )}
      {children}
    </div>
  );
};
