"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export const Footer: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Scroll to top button handler
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative w-full bg-[#0b0914] text-white overflow-hidden select-none">
      {/* Website Theme Ambient Background Glow Halos */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45rem] h-[25rem] bg-purple-600/15 rounded-full blur-[180px] pointer-events-none -z-10 animate-pulse" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      {/* Main Giant Display Typography Section (Only VIVEK) */}
      <div className="relative w-full py-14 px-4 flex flex-col items-center justify-center overflow-hidden">
        
        {/* Giant Display Name using Website Purple Gradient Stroke */}
        <h2 className="text-[14vw] sm:text-[15vw] lg:text-[16vw] font-black uppercase tracking-[0.1em] leading-none text-transparent select-none transition-all duration-500 hover:tracking-[0.12em] text-center drop-shadow-[0_0_40px_rgba(139,92,246,0.3)] [-webkit-text-stroke:1.5px_rgba(168,85,247,0.55)] hover:[-webkit-text-stroke:1.5px_rgba(216,180,254,0.9)]">
          VIVEK
        </h2>
      </div>

      {/* Bottom Sub-Footer Single-Line Information Bar */}
      <div className="w-full border-t border-white/[0.08] py-6 px-6 sm:px-12 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] sm:text-xs font-mono tracking-[0.2em] text-zinc-400 uppercase">
        {/* Left: Copyright Name */}
        <div className="flex items-center gap-1.5">
          <span>© 2026</span>
          <span className="text-zinc-200 font-bold">VIVEK</span>
        </div>

        {/* Center: City & Mobile Number */}
        <div className="flex items-center gap-2 text-zinc-200">
          <span>GUJARAT, INDIA</span>
          <span className="text-purple-400 font-bold">•</span>
          <a
            href="tel:+918140618829"
            className="hover:text-purple-300 transition-colors duration-200"
          >
            +91 8140618829
          </a>
        </div>

        {/* Right: Flutter • AI-Powered • SAP Certified */}
        <div className="flex items-center gap-2 text-zinc-400">
          <span>FLUTTER</span>
          <span className="text-purple-400 font-bold">•</span>
          <span>AI-POWERED</span>
          <span className="text-purple-400 font-bold">•</span>
          <span>SAP CERTIFIED</span>
        </div>
      </div>

      {/* Floating Scroll-To-Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-2xl bg-purple-600/90 border border-purple-400/50 text-white backdrop-blur-xl flex items-center justify-center shadow-[0_0_25px_rgba(139,92,246,0.6)] hover:bg-purple-500 transition-colors duration-300"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;
