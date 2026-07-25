"use client";

import React from "react";
import { Html, useProgress } from "@react-three/drei";

export const CanvasLoader: React.FC = () => {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="w-8 h-8 border-2 border-violet-500 border-t-transparent rounded-full animate-spin" />
        <p className="text-xs font-mono text-violet-400">{progress.toFixed(0)}% loaded</p>
      </div>
    </Html>
  );
};
