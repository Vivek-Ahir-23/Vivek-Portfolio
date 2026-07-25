"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/utils/cn";

export interface GlassCardProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  glowColor?: string;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className,
  hoverEffect = true,
  glowColor = "rgba(139, 92, 246, 0.2)",
  ...props
}) => {
  return (
    <motion.div
      whileHover={
        hoverEffect
          ? {
              y: -4,
              scale: 1.01,
              borderColor: "rgba(139, 92, 246, 0.4)",
              boxShadow: `0 20px 40px -15px ${glowColor}, 0 0 20px -5px ${glowColor}`,
            }
          : undefined
      }
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={cn(
        "relative rounded-2xl bg-[#0d0b18]/80 backdrop-blur-xl border border-white/10 p-6 shadow-2xl overflow-hidden transition-all duration-300",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};
