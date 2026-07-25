import React from "react";
import Link from "next/link";
import { ArrowLeft, FileQuestion } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0b0914] text-white flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center space-y-6 p-8 rounded-3xl bg-[#0d0b18]/80 border border-white/10 backdrop-blur-xl shadow-2xl">
        <div className="w-16 h-16 mx-auto rounded-2xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-400">
          <FileQuestion className="w-8 h-8" />
        </div>
        
        <div className="space-y-2">
          <h1 className="text-4xl font-extrabold tracking-tight">404</h1>
          <h2 className="text-xl font-semibold text-zinc-200">Page Not Found</h2>
          <p className="text-sm text-zinc-400">
            The page you are looking for doesn't exist or has been moved.
          </p>
        </div>

        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-semibold text-sm transition-all duration-300 shadow-[0_0_20px_rgba(139,92,246,0.4)]"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return Home</span>
        </Link>
      </div>
    </div>
  );
}
