"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/utils/cn";

export interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  children: React.ReactNode;
  variant?: "primary" | "outline" | "ghost" | "glass";
  size?: "sm" | "md" | "lg";
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  className,
  icon,
  iconPosition = "right",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none";

  const variants = {
    primary:
      "bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 text-white shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:shadow-[0_0_28px_rgba(139,92,246,0.6)] border border-violet-400/30",
    outline:
      "bg-white/[0.04] backdrop-blur-md border border-white/15 text-white hover:bg-white/[0.1] hover:border-purple-400/50 hover:shadow-[0_0_15px_rgba(168,85,247,0.25)]",
    glass:
      "bg-white/[0.05] backdrop-blur-xl border border-white/10 text-zinc-200 hover:text-white hover:bg-white/[0.12] hover:border-white/20",
    ghost:
      "bg-transparent text-zinc-300 hover:text-white hover:bg-white/[0.08]",
  };

  const sizes = {
    sm: "text-xs px-3.5 py-1.5 rounded-full gap-1.5",
    md: "text-sm px-5 py-2.5 rounded-full gap-2",
    lg: "text-base px-6 py-3 rounded-full gap-2.5",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {icon && iconPosition === "left" && (
        <span className="inline-flex shrink-0">{icon}</span>
      )}
      <span>{children}</span>
      {icon && iconPosition === "right" && (
        <span className="inline-flex shrink-0 transition-transform duration-300 group-hover:translate-x-0.5">
          {icon}
        </span>
      )}
    </motion.button>
  );
};
