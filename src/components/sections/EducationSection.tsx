"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { EDUCATION_DATA } from "@/constants/education";
import { EducationCard } from "@/components/sections/EducationCard";
import { EducationSideBadge } from "@/components/sections/EducationSideBadge";

export const EducationSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  // GSAP Entrance Scroll Stagger Animation
  useEffect(() => {
    if (!timelineRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        timelineRef.current?.children ? Array.from(timelineRef.current.children) : [],
        {
          opacity: 0,
          y: 45,
          scale: 0.96,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.75,
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
      id="education"
      className="relative w-full py-12 lg:py-16 bg-[#0b0914] overflow-hidden"
    >
      {/* Background Ambient Glow Halos */}
      <div className="absolute top-1/3 left-1/4 w-[35rem] h-[35rem] bg-purple-600/10 rounded-full blur-[170px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/3 right-1/4 w-[32rem] h-[32rem] bg-indigo-600/10 rounded-full blur-[170px] pointer-events-none -z-10" />

      <Container>
        {/* Section Header */}
        <SectionHeader
          badgeText="EDUCATION"
          title="Academic Journey &"
          highlightText="Qualifications"
          subtitle="My academic journey and continuous pursuit of knowledge in software development."
        />

        {/* Elegant Vertical Timeline Container with 3D Canvas Animations */}
        <div className="relative mt-14 max-w-6xl mx-auto">
          {/* Vertical Timeline Central Glowing Guide Line (Desktop Only) */}
          <div className="absolute left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 bg-gradient-to-b from-purple-500/50 via-indigo-500/35 to-purple-500/50 hidden lg:block pointer-events-none" />

          <div ref={timelineRef} className="space-y-12 sm:space-y-16">
            {EDUCATION_DATA.map((education, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={education.id}
                  className="relative flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12"
                >
                  {/* Timeline Central Node Marker Dot (Desktop Only) */}
                  <div className="absolute left-1/2 top-10 -translate-x-1/2 z-20 w-9 h-9 rounded-full bg-[#0b0914] border-2 border-purple-500/70 shadow-[0_0_20px_rgba(168,85,247,0.6)] flex items-center justify-center hidden lg:flex">
                    <span className="w-3 h-3 rounded-full bg-purple-400 animate-pulse" />
                  </div>

                  {/* Left Column (Card on even, 3D Badge on odd) */}
                  <div className="w-full lg:w-[calc(50%-2.5rem)] order-1">
                    {isEven ? (
                      <EducationCard education={education} index={index} />
                    ) : (
                      <EducationSideBadge education={education} index={index} />
                    )}
                  </div>

                  {/* Right Column (3D Badge on even, Card on odd) */}
                  <div className="w-full lg:w-[calc(50%-2.5rem)] order-2">
                    {isEven ? (
                      <EducationSideBadge education={education} index={index} />
                    ) : (
                      <EducationCard education={education} index={index} />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default EducationSection;
