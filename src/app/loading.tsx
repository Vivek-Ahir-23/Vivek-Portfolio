import React from "react";

export default function Loading() {
  return (
    <div className="min-h-screen bg-[#0b0914] text-white flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 rounded-full border-2 border-purple-500/20" />
          <div className="absolute inset-0 rounded-full border-2 border-purple-500 border-t-transparent animate-spin" />
        </div>
        <span className="text-xs font-medium text-zinc-400 tracking-wider uppercase">
          Loading...
        </span>
      </div>
    </div>
  );
}
