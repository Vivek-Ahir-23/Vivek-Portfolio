"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Layout,
  Server,
  Database,
  Wrench,
  Sparkles,
} from "lucide-react";
import { SKILL_CATEGORIES_DATA } from "@/constants/skills";

const ICON_MAP: Record<string, React.FC<{ className?: string }>> = {
  programming: Code2,
  frontend: Layout,
  backend: Server,
  database: Database,
  tools: Wrench,
};

interface SkillsSidebarProps {
  activeTopic: string;
  onSelectTopic: (id: string) => void;
}

export const SkillsSidebar: React.FC<SkillsSidebarProps> = ({
  activeTopic,
  onSelectTopic,
}) => {
  const sidebarContainerRef = useRef<HTMLDivElement>(null);
  const activeItemRef = useRef<HTMLButtonElement | null>(null);

  // Auto-scroll the sidebar container internally when active topic changes (never moves browser window)
  useEffect(() => {
    const container = sidebarContainerRef.current;
    const item = activeItemRef.current;

    if (container && item) {
      const itemTop = item.offsetTop - container.offsetTop;
      container.scrollTo({
        top: itemTop >= 0 ? itemTop : 0,
        behavior: "smooth",
      });
    }
  }, [activeTopic]);

  return (
    <div className="sticky top-24 lg:top-28 w-full lg:w-72 shrink-0 z-30">
      <div className="p-4 rounded-2xl bg-[#0d0b18]/95 border border-white/10 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] space-y-3">
        {/* Sidebar Header Title */}
        <div className="flex items-center justify-between px-2 pb-2 border-b border-white/10 text-xs font-mono font-bold uppercase tracking-widest text-purple-300">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-purple-400 animate-pulse" />
            <span>Skill Categories</span>
          </div>
          <span className="text-[10px] px-2 py-0.5 rounded-md bg-purple-500/20 text-purple-300 border border-purple-400/30">
            {SKILL_CATEGORIES_DATA.length} Topics
          </span>
        </div>

        {/* Topics List with Index Numbers, Active Dot & Internal Sidebar Scroll */}
        <div
          ref={sidebarContainerRef}
          className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-y-auto max-h-[70vh] pb-2 lg:pb-0 scrollbar-none"
        >
          {SKILL_CATEGORIES_DATA.map((group, index) => {
            const TopicIcon = ICON_MAP[group.id] || Code2;
            const isActive = activeTopic === group.id;
            const indexFormatted = `0${index + 1}`;

            return (
              <button
                key={group.id}
                ref={isActive ? activeItemRef : null}
                onClick={() => onSelectTopic(group.id)}
                className={`relative flex items-center justify-between gap-3 px-3.5 py-3 rounded-xl font-medium text-sm transition-all duration-300 select-none whitespace-nowrap shrink-0 w-auto lg:w-full text-left group ${
                  isActive
                    ? "text-white font-bold"
                    : "text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.04]"
                }`}
              >
                {/* Active Indicator Background Pill */}
                {isActive && (
                  <motion.div
                    layoutId="sidebarActivePill"
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-violet-600/50 via-purple-600/40 to-indigo-600/50 border border-violet-400/70 shadow-[0_0_25px_rgba(139,92,246,0.5)]"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}

                <div className="relative z-10 flex items-center gap-3">
                  {/* Number Prefix & Active Glowing Indicator Dot */}
                  <div className="flex items-center gap-1.5">
                    <span className="text-[11px] font-mono font-semibold text-zinc-500 group-hover:text-purple-400 transition-colors">
                      {indexFormatted}
                    </span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_8px_#fbbf24] animate-pulse" />
                    )}
                  </div>

                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center transition-colors duration-300 ${
                      isActive
                        ? "bg-violet-500 text-white shadow-md"
                        : "bg-white/[0.05] text-violet-400 group-hover:bg-white/10"
                    }`}
                  >
                    <TopicIcon className="w-3.5 h-3.5" />
                  </div>
                  <span className="truncate">{group.title}</span>
                </div>

                {/* Skill Count Badge */}
                <span
                  className={`relative z-10 px-2 py-0.5 rounded-full text-[11px] font-mono transition-colors duration-300 ${
                    isActive
                      ? "bg-violet-500/40 text-violet-200 border border-violet-400/50"
                      : "bg-white/[0.04] text-zinc-500 group-hover:text-zinc-300"
                  }`}
                >
                  {group.skills.length}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
