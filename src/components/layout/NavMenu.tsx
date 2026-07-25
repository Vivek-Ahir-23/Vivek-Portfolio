"use client";

import React from "react";
import { motion } from "framer-motion";
import { NAV_ITEMS, NavItem } from "@/constants/navigation";
import { cn } from "@/utils/cn";

interface NavMenuProps {
  activeSection: string;
  onSelectNavItem?: (href: string) => void;
  className?: string;
}

export const NavMenu: React.FC<NavMenuProps> = ({
  activeSection,
  onSelectNavItem,
  className,
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (onSelectNavItem) {
      onSelectNavItem(href);
    }
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={cn("hidden lg:flex items-center gap-1", className)}>
      {NAV_ITEMS.map((item: NavItem) => {
        const isActive = activeSection === item.href.replace("#", "");

        return (
          <a
            key={item.name}
            href={item.href}
            onClick={(e) => handleClick(e, item.href)}
            className={cn(
              "relative px-3.5 py-1.5 text-xs font-medium transition-colors duration-300 rounded-full select-none",
              isActive
                ? "text-white font-semibold"
                : "text-zinc-400 hover:text-zinc-100"
            )}
          >
            {isActive && (
              <motion.div
                layoutId="activeNavIndicator"
                className="absolute inset-0 bg-violet-600/30 border border-violet-500/50 rounded-full shadow-[0_0_12px_rgba(139,92,246,0.35)] -z-10"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <span className="relative z-10">{item.name}</span>
          </a>
        );
      })}
    </nav>
  );
};
