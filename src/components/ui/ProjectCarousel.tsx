"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Layers } from "lucide-react";

interface ProjectCarouselProps {
  images: string[];
  title: string;
}

export const ProjectCarousel: React.FC<ProjectCarouselProps> = ({
  images,
  title,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const currentImage = images[currentIndex] || images[0];

  return (
    <div className="relative w-full h-48 sm:h-52 rounded-xl overflow-hidden bg-[#0a0814] border border-white/10 group/carousel">
      {/* Background Image with Next.js Image optimization & Zoom Effect */}
      <Image
        src={currentImage}
        alt={`${title} Preview Slide ${currentIndex + 1}`}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        loading="lazy"
        unoptimized={currentImage.startsWith("http")}
        className="object-cover object-center group-hover/carousel:scale-105 transition-transform duration-500 ease-out"
      />

      {/* Ambient Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0d0b18] via-transparent to-black/20 pointer-events-none" />

      {/* Prev / Next Controls (Only if multiple images) */}
      {images.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            aria-label="Previous Slide"
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 border border-white/20 text-white flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-200 hover:bg-purple-600 shadow-md"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next Slide"
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 border border-white/20 text-white flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-200 hover:bg-purple-600 shadow-md"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(idx);
                }}
                aria-label={`Go to slide ${idx + 1}`}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === idx
                    ? "w-5 bg-purple-400"
                    : "bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};
