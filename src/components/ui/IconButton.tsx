"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/utils/cn";

export interface IconButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  children: React.ReactNode;
  ariaLabel: string;
  size?: "sm" | "md" | "lg";
  variant?: "glass" | "outline" | "ghost";
  className?: string;
}

export const IconButton: React.FC<IconButtonProps> = ({
  children,
  ariaLabel,
  size = "md",
  variant = "glass",
  className,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-full transition-all duration-300 focus:outline-none cursor-pointer select-none";

  const variants = {
    glass:
      "bg-white/[0.05] backdrop-blur-md border border-white/10 text-zinc-300 hover:text-white hover:bg-white/[0.12] hover:border-purple-500/40 hover:shadow-[0_0_15px_rgba(139,92,246,0.3)]",
    outline:
      "border border-white/15 text-zinc-300 hover:text-white hover:bg-white/[0.08] hover:border-white/30",
    ghost:
      "bg-transparent text-zinc-400 hover:text-white hover:bg-white/[0.08]",
  };

  const sizes = {
    sm: "w-8 h-8 text-xs",
    md: "w-10 h-10 text-sm",
    lg: "w-12 h-12 text-base",
  };

  return (
    <motion.button
      aria-label={ariaLabel}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </motion.button>
  );
};
