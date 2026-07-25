"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PROJECTS_DATA } from "@/constants/projects";
import { ProjectCard } from "@/components/sections/ProjectCard";

export const ProjectsSection: React.FC = () => {
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
          y: 45,
          scale: 0.96,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.12,
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
      id="projects"
      className="relative w-full py-12 lg:py-16 bg-[#0b0914] overflow-hidden"
    >
      {/* Background Ambient Glow Halos */}
      <div className="absolute top-1/4 left-1/4 w-[35rem] h-[35rem] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[32rem] h-[32rem] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      <Container>
        {/* Section Header */}
        <SectionHeader
          badgeText="FEATURED PROJECTS"
          title="Featured"
          highlightText="Projects"
          subtitle="A collection of real-world applications that demonstrate my expertise in Flutter, Firebase, modern web development, and scalable software architecture."
        />

        {/* 3 Cards Desktop / 2 Cards Tablet / 1 Column Mobile Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 relative z-10 mt-8"
        >
          {PROJECTS_DATA.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ProjectsSection;
