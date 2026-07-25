"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { EXPERIENCE_DATA } from "@/constants/experience";
import { ExperienceCard } from "@/components/sections/ExperienceCard";

export const ExperienceSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineLineRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  // GSAP Entrance & Timeline Animation
  useEffect(() => {
    if (!cardsContainerRef.current) return;

    const ctx = gsap.context(() => {
      // Timeline vertical line grow animation
      if (timelineLineRef.current) {
        gsap.fromTo(
          timelineLineRef.current,
          { scaleY: 0, transformOrigin: "top center" },
          {
            scaleY: 1,
            duration: 1.2,
            ease: "power2.out",
          }
        );
      }

      // Experience cards entrance stagger animation
      gsap.fromTo(
        cardsContainerRef.current?.children ? Array.from(cardsContainerRef.current.children) : [],
        {
          opacity: 0,
          y: 45,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
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
      id="experience"
      className="relative w-full py-12 lg:py-16 bg-[#0b0914] overflow-hidden"
    >
      {/* Background Ambient Glow Halos */}
      <div className="absolute top-1/4 right-1/3 w-[35rem] h-[35rem] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-1/4 w-[30rem] h-[30rem] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      <Container>
        {/* Section Header */}
        <SectionHeader
          badgeText="EXPERIENCE"
          title="My professional"
          highlightText="journey"
          subtitle="My professional journey in mobile application development and software engineering."
        />

        {/* Timeline Layout */}
        <div className="relative mt-10 max-w-4xl mx-auto">
          {/* Vertical Timeline Drawing Line (Desktop / Tablet) */}
          <div
            ref={timelineLineRef}
            className="hidden md:block absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-violet-500 via-purple-500 to-indigo-500/20 shadow-[0_0_12px_rgba(139,92,246,0.6)] z-0"
          />

          {/* Experience Cards Stack */}
          <div ref={cardsContainerRef} className="space-y-8 relative z-10">
            {EXPERIENCE_DATA.map((experience, index) => (
              <ExperienceCard
                key={experience.id}
                experience={experience}
                index={index}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ExperienceSection;
