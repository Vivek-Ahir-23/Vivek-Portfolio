"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Award, ZoomIn } from "lucide-react";
import { SubCertificateDetails } from "@/constants/certificates";
import { ImageLightboxModal } from "@/components/ui/ImageLightboxModal";

interface CertificateGridShowcaseProps {
  certificates: SubCertificateDetails[];
  certificateTitle: string;
}

export const CertificateGridShowcase: React.FC<CertificateGridShowcaseProps> = ({
  certificates,
  certificateTitle,
}) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleOpenLightbox = (index: number) => {
    setSelectedIndex(index);
    setLightboxOpen(true);
  };

  const imagesList = certificates.map((c) => c.image);

  return (
    <div className="space-y-8">
      {/* Header Row */}
      <div className="flex items-center justify-between gap-4 pb-3 border-b border-white/10 text-sm font-mono font-bold uppercase tracking-widest text-purple-300">
        <div className="flex items-center gap-2">
          <Award className="w-4 h-4 text-purple-400" />
          <span>Official Credentials ({certificates.length})</span>
        </div>
        <span className="text-xs text-zinc-400 font-normal hidden sm:inline-block">
          Tap any certificate to view in fullscreen
        </span>
      </div>

      {/* 3 Certificates Per Row Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {certificates.map((cert, idx) => (
          <div
            key={idx}
            onClick={() => handleOpenLightbox(idx)}
            className="group relative cursor-pointer rounded-3xl bg-[#0d0b18]/85 border border-white/10 backdrop-blur-xl p-4 sm:p-5 flex flex-col justify-between space-y-4 shadow-2xl hover:border-purple-500/60 hover:shadow-[0_20px_50px_rgba(139,92,246,0.3)] transition-all duration-300 hover:scale-[1.02] select-none"
          >
            {/* Click to Zoom Hover Overlay Badge */}
            <div className="absolute top-7 right-7 z-30 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-105">
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-600/90 border border-purple-300/50 text-white text-xs font-mono font-bold shadow-[0_0_20px_rgba(139,92,246,0.6)] backdrop-blur-md">
                <ZoomIn className="w-3.5 h-3.5" />
                <span>Tap to Expand</span>
              </span>
            </div>

            {/* Certificate Image Frame */}
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-black flex items-center justify-center border border-white/10">
              <Image
                src={cert.image}
                alt={cert.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                unoptimized
                priority={idx < 3}
                className="object-contain object-center group-hover:scale-[1.03] transition-transform duration-500 ease-out"
              />
            </div>

            {/* Bottom Row displaying Actual Certificate Name (No Generic Certificate 1 Labels & No Download Option) */}
            <div className="pt-2 border-t border-white/10 flex items-center justify-between gap-2">
              <h4 className="text-xs sm:text-sm font-bold text-white tracking-tight group-hover:text-purple-300 transition-colors duration-200 line-clamp-1">
                {cert.title}
              </h4>
              <span className="text-[10px] font-mono text-emerald-400 font-semibold shrink-0 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-400/20">
                Verified
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Interactive Lightbox Modal Viewer with Specific Title */}
      <ImageLightboxModal
        isOpen={lightboxOpen}
        images={imagesList}
        currentIndex={selectedIndex}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(newIdx) => setSelectedIndex(newIdx)}
        projectTitle={certificates[selectedIndex]?.title || certificateTitle}
      />
    </div>
  );
};
