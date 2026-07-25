"use client";

import React, { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Global error:", error);
  }, [error]);

  return (
    <html lang="en">
      <body className="min-h-screen bg-[#0b0914] text-white flex items-center justify-center p-4 antialiased">
        <div className="max-w-md w-full text-center space-y-6 p-8 rounded-3xl bg-[#0d0b18] border border-white/10 shadow-2xl">
          <h2 className="text-2xl font-bold">Critical Application Error</h2>
          <p className="text-sm text-zinc-400">
            A critical error occurred. Please try reloading the page.
          </p>
          <button
            onClick={() => reset()}
            className="px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-semibold text-sm transition-all"
          >
            Reload Application
          </button>
        </div>
      </body>
    </html>
  );
}
