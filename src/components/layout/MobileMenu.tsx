"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { NAV_ITEMS, NavItem } from "@/constants/navigation";
import { IconButton } from "@/components/ui/IconButton";
import { cn } from "@/utils/cn";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  activeSection,
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    onClose();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-xl z-40 lg:hidden"
          />

          {/* Slide-Down Menu Drawer */}
          <motion.div
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 left-0 right-0 z-50 bg-[#0d0b18]/95 border-b border-white/10 backdrop-blur-2xl px-6 py-6 shadow-2xl lg:hidden max-h-[90vh] overflow-y-auto"
          >
            {/* Header row */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <Image
                  src="/logo.png"
                  alt="Shyara Vivek Logo"
                  width={44}
                  height={44}
                  unoptimized
                  className="w-11 h-11 object-contain drop-shadow-[0_0_15px_rgba(139,92,246,0.9)]"
                />
                <span className="font-bold text-base text-white tracking-tight">
                  Shyara Vivek
                </span>
              </div>
              <IconButton
                ariaLabel="Close menu"
                size="sm"
                variant="ghost"
                onClick={onClose}
              >
                <X className="w-5 h-5 text-zinc-300" />
              </IconButton>
            </div>

            {/* Links list */}
            <nav className="flex flex-col py-4 gap-1">
              {NAV_ITEMS.map((item: NavItem) => {
                const isActive = activeSection === item.href.replace("#", "");

                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleClick(e, item.href)}
                    className={cn(
                      "flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200",
                      isActive
                        ? "bg-violet-600/25 border border-violet-500/40 text-white font-semibold shadow-[0_0_15px_rgba(139,92,246,0.3)]"
                        : "text-zinc-400 hover:text-white hover:bg-white/[0.05]"
                    )}
                  >
                    <span>{item.name}</span>
                    {isActive && (
                      <div className="w-2 h-2 rounded-full bg-violet-400 shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
                    )}
                  </a>
                );
              })}
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
