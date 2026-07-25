"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CONTACT_INFO_DATA } from "@/constants/contact";
import { ContactInfoCard } from "@/components/sections/ContactInfoCard";

export const ContactSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  // GSAP Entrance Scroll Stagger Animation
  useEffect(() => {
    if (!cardsContainerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsContainerRef.current?.children
          ? Array.from(cardsContainerRef.current.children)
          : [],
        {
          opacity: 0,
          y: 35,
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
      id="contact"
      className="relative w-full py-12 lg:py-16 bg-[#0b0914] overflow-hidden"
    >
      {/* Background Ambient Glow Halos */}
      <div className="absolute top-1/4 left-1/3 w-[40rem] h-[40rem] bg-purple-600/15 rounded-full blur-[180px] pointer-events-none -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/3 w-[35rem] h-[35rem] bg-indigo-600/15 rounded-full blur-[180px] pointer-events-none -z-10" />

      <Container>
        {/* Section Header */}
        <SectionHeader
          badgeText="CONTACT"
          title="Contact"
          highlightText="Me"
          subtitle="Have an idea, freelance project, internship opportunity, or just want to say hello? Let's connect and build something amazing together."
        />

        {/* Clean Responsive Grid Layout for all 5 Contact Channels */}
        <div
          ref={cardsContainerRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto"
        >
          {CONTACT_INFO_DATA.map((info, index) => (
            <ContactInfoCard key={info.id} info={info} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;
