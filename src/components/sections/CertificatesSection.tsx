"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CERTIFICATES_DATA } from "@/constants/certificates";
import { CertificateCard } from "@/components/sections/CertificateCard";

export const CertificatesSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  // GSAP Scroll Entrance Stagger Animation
  useEffect(() => {
    if (!gridRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        gridRef.current?.children ? Array.from(gridRef.current.children) : [],
        {
          opacity: 0,
          y: 40,
          scale: 0.96,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.1,
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
      id="certificates"
      className="relative w-full py-12 lg:py-16 bg-[#0b0914] overflow-hidden"
    >
      {/* Background Ambient Glow Halos */}
      <div className="absolute top-1/4 right-1/3 w-[32rem] h-[32rem] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-1/3 w-[30rem] h-[30rem] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      <Container>
        {/* Section Title & Subtitle Header */}
        <SectionHeader
          badgeText="CERTIFICATIONS"
          title="Certificates"
          highlightText=""
          subtitle="Professional certifications that demonstrate my continuous learning and technical growth."
        />

        {/* 2 x 2 Premium Grid (Desktop: 2 Columns / Tablet: 2 Columns / Mobile: 1 Column) */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 relative z-10 mt-8"
        >
          {CERTIFICATES_DATA.map((certificate, index) => (
            <CertificateCard
              key={certificate.id}
              certificate={certificate}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CertificatesSection;
