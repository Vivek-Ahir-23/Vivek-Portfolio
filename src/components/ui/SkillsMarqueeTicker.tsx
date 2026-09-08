"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Code2, Database, Flame, Layers, Layout, ShieldCheck, Terminal, Smartphone } from "lucide-react";

interface SkillBadgeItem {
  name: string;
  category: string;
  icon: React.ReactNode;
  color: string;
}

const SKILLS_LIST: SkillBadgeItem[] = [
  { name: "Flutter", category: "Mobile", icon: <Smartphone className="w-4 h-4 text-sky-400" />, color: "border-sky-500/40 bg-sky-500/10 text-sky-300" },
  { name: "Dart", category: "Language", icon: <Code2 className="w-4 h-4 text-blue-400" />, color: "border-blue-500/40 bg-blue-500/10 text-blue-300" },
  { name: "Firebase", category: "Backend", icon: <Flame className="w-4 h-4 text-amber-400" />, color: "border-amber-500/40 bg-amber-500/10 text-amber-300" },
  { name: "SAP Certified", category: "Enterprise", icon: <ShieldCheck className="w-4 h-4 text-purple-400" />, color: "border-purple-500/40 bg-purple-500/10 text-purple-300" },
  { name: "JavaScript & TS", category: "Language", icon: <Terminal className="w-4 h-4 text-yellow-400" />, color: "border-yellow-500/40 bg-yellow-500/10 text-yellow-300" },
  { name: "HTML5 & CSS3", category: "Web", icon: <Layout className="w-4 h-4 text-orange-400" />, color: "border-orange-500/40 bg-orange-500/10 text-orange-300" },
  { name: "Git & GitHub", category: "DevOps", icon: <Layers className="w-4 h-4 text-pink-400" />, color: "border-pink-500/40 bg-pink-500/10 text-pink-300" },
  { name: "REST APIs", category: "Architecture", icon: <Database className="w-4 h-4 text-indigo-400" />, color: "border-indigo-500/40 bg-indigo-500/10 text-indigo-300" },
  { name: "Clean Architecture", category: "Engineering", icon: <Sparkles className="w-4 h-4 text-purple-400" />, color: "border-purple-500/40 bg-purple-500/10 text-purple-300" },
];

export const SkillsMarqueeTicker: React.FC = () => {
  // Duplicate array 3 times for seamless 100% smooth infinite marquee scroll
  const duplicatedSkills = [...SKILLS_LIST, ...SKILLS_LIST, ...SKILLS_LIST];

  return (
    <div className="relative w-full py-2 overflow-hidden select-none [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      {/* Ticker Row moving Right to Left */}
      <motion.div
        className="flex items-center gap-3 w-max"
        animate={{ x: ["0%", "-33.33%"] }}
        transition={{
          repeat: Infinity,
          duration: 32,
          ease: "linear",
        }}
        whileHover={{ animationPlayState: "paused" }}
      >
        {duplicatedSkills.map((skill, idx) => (
          <div
            key={idx}
            className={`flex items-center gap-2.5 px-4 py-2 rounded-2xl border backdrop-blur-md shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer shrink-0 ${skill.color}`}
          >
            {skill.icon}
            <span className="text-xs font-mono font-bold tracking-wide whitespace-nowrap">
              {skill.name}
            </span>
            <span className="text-[10px] font-mono opacity-60 uppercase tracking-widest px-1.5 py-0.5 rounded bg-white/10">
              {skill.category}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
