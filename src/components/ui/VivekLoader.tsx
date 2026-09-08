"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface VivekLoaderProps {
  isOpen: boolean;
}

export const VivekLoader: React.FC<VivekLoaderProps> = ({ isOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="fixed inset-0 z-[99999] bg-[#0b0914]/95 backdrop-blur-2xl flex flex-col items-center justify-center px-4 select-none overflow-hidden"
        >
          {/* Subtle Ambient Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-purple-600/25 rounded-full blur-[120px] pointer-events-none animate-pulse" />

          {/* Minimalist Central Container: Stylized VIVEK Name Only */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative z-10 flex flex-col items-center justify-center"
          >
            <h1 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-[0.35em] text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-purple-200 to-pink-300 drop-shadow-[0_0_25px_rgba(168,85,247,0.8)] animate-pulse">
              VIVEK
            </h1>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
