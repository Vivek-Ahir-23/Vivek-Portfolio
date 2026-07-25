"use client";

import React, { useState } from "react";
import { Layers, ZoomIn } from "lucide-react";
import { PhoneMockup } from "@/components/ui/PhoneMockup";
import { ImageLightboxModal } from "@/components/ui/ImageLightboxModal";

interface ProjectScreenshotsGridProps {
  images: string[];
  projectTitle: string;
  isMobileApp: boolean;
}

export const ProjectScreenshotsGrid: React.FC<ProjectScreenshotsGridProps> = ({
  images,
  projectTitle,
  isMobileApp,
}) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleOpenLightbox = (index: number) => {
    setSelectedIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="mb-14 space-y-6">
      {/* Header Bar */}
      <div className="flex items-center justify-between gap-4 pb-2 border-b border-white/10 text-sm font-mono font-bold uppercase tracking-widest text-purple-300">
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-purple-400" />
          <span>Project Screenshots Showcase ({images.length})</span>
        </div>
        <span className="text-xs text-zinc-400 font-normal hidden sm:inline-block">
          Click any image to view in fullscreen
        </span>
      </div>

      {/* 3 Images Per Row Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch justify-center pt-4">
        {images.map((img, idx) => (
          <div
            key={idx}
            onClick={() => handleOpenLightbox(idx)}
            className="group relative cursor-pointer flex justify-center w-full"
          >
            {/* Click to Zoom Hover Overlay Indicator */}
            <div className="absolute top-4 right-4 z-30 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-600/90 border border-purple-300/50 text-white text-xs font-mono font-bold shadow-[0_0_20px_rgba(139,92,246,0.6)] backdrop-blur-md">
                <ZoomIn className="w-3.5 h-3.5" />
                <span>Zoom</span>
              </span>
            </div>

            <PhoneMockup
              imageSrc={img}
              alt={`${projectTitle} Interface ${idx + 1}`}
              aspectRatio={isMobileApp ? "phone" : "desktop"}
            />
          </div>
        ))}
      </div>

      {/* Fullscreen Interactive Lightbox Viewer */}
      <ImageLightboxModal
        isOpen={lightboxOpen}
        images={images}
        currentIndex={selectedIndex}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(newIdx) => setSelectedIndex(newIdx)}
        projectTitle={projectTitle}
      />
    </div>
  );
};
