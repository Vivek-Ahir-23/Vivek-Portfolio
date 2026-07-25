"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, CheckCircle2, Zap } from "lucide-react";

interface ProjectFeaturesShowcaseProps {
  features: string[];
}

export const ProjectFeaturesShowcase: React.FC<ProjectFeaturesShowcaseProps> = ({
  features,
}) => {
  return (
    <div className="rounded-3xl bg-[#0d0b18]/90 border border-white/10 backdrop-blur-2xl p-6 sm:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.6)] relative overflow-hidden">
      {/* Background Accent Ambient Glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-purple-500/20 border border-purple-400/40 flex items-center justify-center text-purple-300 shadow-[0_0_15px_rgba(139,92,246,0.3)]">
            <Sparkles className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-extrabold text-white tracking-tight">
              Key Architectural & App Features
            </h2>
            <p className="text-xs text-zinc-400">
              High-performance capabilities implemented in this production project
            </p>
          </div>
        </div>

        <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-purple-500/15 border border-purple-400/30 text-purple-300">
          {features.length} Features Included
        </span>
      </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.04,
            },
          },
        }}
      >
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.02, y: -2 }}
            transition={{ duration: 0.2 }}
            className="group relative flex items-center gap-3.5 p-4 rounded-2xl bg-gradient-to-r from-white/[0.04] via-white/[0.02] to-transparent border border-white/[0.09] hover:border-purple-400/50 hover:bg-purple-500/10 transition-all duration-300 shadow-md hover:shadow-[0_10px_25px_rgba(139,92,246,0.2)]"
          >
            <div className="w-8 h-8 rounded-xl bg-purple-500/15 border border-purple-400/30 flex items-center justify-center text-purple-300 shrink-0 group-hover:scale-110 group-hover:bg-purple-500/30 group-hover:text-white transition-all duration-300">
              <CheckCircle2 className="w-4 h-4" />
            </div>

            <span className="text-xs sm:text-sm text-zinc-200 font-semibold tracking-wide group-hover:text-purple-200 transition-colors duration-200">
              {feature}
            </span>

            <Zap className="w-3.5 h-3.5 text-purple-400/0 group-hover:text-purple-400/80 transition-all duration-300 ml-auto shrink-0" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
