"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SERVICES_DATA } from "@/constants/services";
import { ServiceCard } from "@/components/sections/ServiceCard";

export const ServicesSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  // GSAP Entrance Scroll Animation
  useEffect(() => {
    if (!gridRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        gridRef.current?.children ? Array.from(gridRef.current.children) : [],
        {
          opacity: 0,
          y: 40,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.08,
          ease: "power3.out",
          clearProps: "all",
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative w-full py-12 lg:py-16 bg-[#0b0914] overflow-hidden"
    >
      {/* Background Ambient Glow Halos */}
      <div className="absolute top-1/3 left-1/4 w-[32rem] h-[32rem] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/3 right-1/4 w-[30rem] h-[30rem] bg-violet-600/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      <Container>
        {/* Section Header */}
        <SectionHeader
          badgeText="SERVICES"
          title="Services I provide to build"
          highlightText="scalable applications"
          subtitle="Services I provide to build modern, scalable, responsive, and high-performance applications."
        />

        {/* 4 x 2 Desktop / 2 x 4 Tablet / 1 Column Mobile Grid Layout */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10 mt-8"
        >
          {SERVICES_DATA.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ServicesSection;
