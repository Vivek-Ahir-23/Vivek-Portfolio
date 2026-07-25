"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Menu } from "lucide-react";
import gsap from "gsap";
import { Container } from "@/components/layout/Container";
import { NavMenu } from "@/components/layout/NavMenu";
import { HeaderActions } from "@/components/layout/HeaderActions";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { IconButton } from "@/components/ui/IconButton";
import { NAV_ITEMS } from "@/constants/navigation";
import { cn } from "@/utils/cn";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navbarRef = useRef<HTMLElement>(null);

  // GSAP scroll effect for Navbar elevation & blur density
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // GSAP animation when scrolled state changes
  useEffect(() => {
    if (!navbarRef.current) return;
    if (isScrolled) {
      gsap.to(navbarRef.current, {
        py: "10px",
        backgroundColor: "rgba(11, 9, 20, 0.88)",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
        duration: 0.3,
        ease: "power2.out",
      });
    } else {
      gsap.to(navbarRef.current, {
        py: "16px",
        backgroundColor: "rgba(11, 9, 20, 0.5)",
        boxShadow: "0 0 0 rgba(0, 0, 0, 0)",
        duration: 0.3,
        ease: "power2.out",
      });
    }
  }, [isScrolled]);

  // Active section scroll spy via IntersectionObserver
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    };

    const handleIntersect: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    NAV_ITEMS.forEach((item) => {
      const sectionId = item.href.replace("#", "");
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header
        ref={navbarRef}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 backdrop-blur-xl"
        )}
      >
        <Container className="flex items-center justify-between">
          {/* Left Side: Brand Logo & Name */}
          <a
            href="#home"
            className="flex items-center gap-3 group select-none cursor-pointer"
          >
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center shrink-0">
              <Image
                src="/logo.png"
                alt="Shyara Vivek SV Logo"
                width={64}
                height={64}
                priority
                unoptimized
                className="w-14 h-14 sm:w-16 sm:h-16 object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_20px_rgba(139,92,246,0.9)]"
              />
            </div>
            <span className="font-extrabold text-lg sm:text-xl text-white tracking-tight group-hover:text-purple-300 transition-colors duration-300">
              Shyara Vivek
            </span>
          </a>

          {/* Right Side: Desktop Navigation Links & Header Actions */}
          <div className="hidden lg:flex items-center gap-6">
            <NavMenu activeSection={activeSection} />
            <HeaderActions />
          </div>

          {/* Mobile Right Side Controls */}
          <div className="flex items-center gap-3 lg:hidden">
            <HeaderActions />
            <IconButton
              ariaLabel="Open navigation menu"
              size="md"
              variant="glass"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="w-5 h-5 text-white" />
            </IconButton>
          </div>
        </Container>
      </header>

      {/* Responsive Mobile Drawer */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        activeSection={activeSection}
      />
    </>
  );
};
