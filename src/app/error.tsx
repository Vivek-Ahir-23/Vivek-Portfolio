"use client";

import React, { useEffect } from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("App error:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#0b0914] text-white flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center space-y-6 p-8 rounded-3xl bg-[#0d0b18]/80 border border-red-500/20 backdrop-blur-xl shadow-2xl">
        <div className="w-16 h-16 mx-auto rounded-2xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400">
          <AlertTriangle className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-bold text-white">Something went wrong</h2>
          <p className="text-sm text-zinc-400">
            An unexpected error occurred while loading this page.
          </p>
        </div>

        <button
          onClick={() => reset()}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-semibold text-sm transition-all duration-300 shadow-[0_0_20px_rgba(139,92,246,0.4)]"
        >
          <RefreshCw className="w-4 h-4" />
          <span>Try again</span>
        </button>
      </div>
    </div>
  );
}
