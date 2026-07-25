"use client";

import React, { useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

interface ImageLightboxModalProps {
  isOpen: boolean;
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
  projectTitle: string;
}

export const ImageLightboxModal: React.FC<ImageLightboxModalProps> = ({
  isOpen,
  images,
  currentIndex,
  onClose,
  onNavigate,
  projectTitle,
}) => {
  const currentSrc = images[currentIndex] || "";
  const totalCount = images.length;

  const handlePrev = useCallback(
    (e?: React.MouseEvent) => {
      e?.stopPropagation();
      const prevIndex = (currentIndex - 1 + totalCount) % totalCount;
      onNavigate(prevIndex);
    },
    [currentIndex, totalCount, onNavigate]
  );

  const handleNext = useCallback(
    (e?: React.MouseEvent) => {
      e?.stopPropagation();
      const nextIndex = (currentIndex + 1) % totalCount;
      onNavigate(nextIndex);
    },
    [currentIndex, totalCount, onNavigate]
  );

  // Keyboard navigation shortcuts (Esc, Left, Right arrow keys)
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    // Lock body scroll when modal is open
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose, handlePrev, handleNext]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-2xl select-none"
        >
          {/* Top Bar with Project Title, Counter, and Close Button */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="absolute top-4 left-4 right-4 z-50 flex items-center justify-between px-4 py-3 rounded-2xl bg-[#120e26]/80 border border-white/10 backdrop-blur-xl shadow-2xl"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-purple-500/20 border border-purple-400/40 flex items-center justify-center text-purple-300">
                <Maximize2 className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-bold text-white tracking-tight truncate max-w-[200px] sm:max-w-md">
                  {projectTitle}
                </h3>
                <span className="text-[11px] font-mono text-purple-300">
                  Full Image Preview
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-white/10 border border-white/15 text-purple-200">
                {currentIndex + 1} / {totalCount}
              </span>
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-rose-500/80 border border-white/20 hover:border-rose-400 text-zinc-300 hover:text-white flex items-center justify-center transition-all duration-200 shadow-md group"
                aria-label="Close Fullscreen View"
              >
                <X className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" />
              </button>
            </div>
          </div>

          {/* Left Previous Button */}
          {totalCount > 1 && (
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-50 w-11 h-11 sm:w-13 sm:h-13 rounded-2xl bg-[#120e26]/90 border border-white/20 hover:border-purple-400 text-white hover:bg-purple-600 flex items-center justify-center transition-all duration-200 shadow-2xl group focus:outline-none"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-6 h-6 transition-transform duration-200 group-hover:-translate-x-0.5" />
            </button>
          )}

          {/* Right Next Button */}
          {totalCount > 1 && (
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-50 w-11 h-11 sm:w-13 sm:h-13 rounded-2xl bg-[#120e26]/90 border border-white/20 hover:border-purple-400 text-white hover:bg-purple-600 flex items-center justify-center transition-all duration-200 shadow-2xl group focus:outline-none"
              aria-label="Next Image"
            >
              <ChevronRight className="w-6 h-6 transition-transform duration-200 group-hover:translate-x-0.5" />
            </button>
          )}

          {/* Center Lightbox Image Display */}
          <motion.div
            key={currentIndex}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", stiffness: 350, damping: 28 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-[92vw] max-h-[82vh] w-full h-full flex items-center justify-center my-auto rounded-3xl overflow-hidden shadow-[0_30px_90px_rgba(0,0,0,0.9)] border border-white/10 bg-[#0d0b18]/60 p-2 sm:p-4"
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={currentSrc}
                alt={`${projectTitle} Full Image ${currentIndex + 1}`}
                fill
                sizes="95vw"
                unoptimized
                priority
                className="object-contain object-center rounded-2xl drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
