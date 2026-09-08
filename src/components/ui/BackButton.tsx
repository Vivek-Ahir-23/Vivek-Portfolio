"use client";

import React from "react";
import { ArrowLeft } from "lucide-react";
import { useVivekLoader } from "@/context/VivekLoaderContext";

interface BackButtonProps {
  href: string;
  label: string;
}

export const BackButton: React.FC<BackButtonProps> = ({ href, label }) => {
  const { triggerRedirect } = useVivekLoader();

  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault();
    triggerRedirect(href);
  };

  return (
    <button
      onClick={handleBack}
      className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-purple-300 hover:text-white px-4 py-2 rounded-xl bg-white/[0.04] border border-white/10 hover:bg-purple-600/20 hover:border-purple-400/40 transition-all duration-200 group cursor-pointer"
    >
      <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
      <span>{label}</span>
    </button>
  );
};
