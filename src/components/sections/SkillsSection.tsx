"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, Variants } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SkillsSidebar } from "@/components/sections/SkillsSidebar";
import { SkillTileCard } from "@/components/sections/SkillTileCard";
import { GlassCard } from "@/components/ui/GlassCard";
import { SKILL_CATEGORIES_DATA } from "@/constants/skills";

export const SkillsSection: React.FC = () => {
  const [activeTopic, setActiveTopic] = useState<string>("programming");
  const isManualScrolling = useRef<boolean>(false);

  // Scroll Spy IntersectionObserver tracking window scrolling across category sections
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -50% 0px",
      threshold: 0.1,
    };

    const handleIntersect: IntersectionObserverCallback = (entries) => {
      if (isManualScrolling.current) return;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const categoryId = entry.target.id.replace("skill-cat-", "");
          setActiveTopic(categoryId);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    SKILL_CATEGORIES_DATA.forEach((group) => {
      const el = document.getElementById(`skill-cat-${group.id}`);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Smooth Window Scroll handler when clicking sidebar topics
  const handleSelectCategory = (id: string) => {
    setActiveTopic(id);
    isManualScrolling.current = true;

    const element = document.getElementById(`skill-cat-${id}`);
    if (element) {
      const yOffset = -110;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }

    setTimeout(() => {
      isManualScrolling.current = false;
    }, 850);
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.05,
      },
    },
  };

  return (
    <section
      id="skills"
      className="relative w-full py-12 lg:py-16 bg-[#0b0914] overflow-hidden"
    >
      {/* Background Ambient Glow Halos */}
      <div className="absolute top-1/4 left-1/3 w-[30rem] h-[30rem] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[28rem] h-[28rem] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <Container>
        {/* Section Title & Subtitle */}
        <SectionHeader
          badgeText="SKILLS & TECHNOLOGIES"
          title="Technologies I use to build"
          highlightText="scalable applications"
          subtitle="Modern frameworks, programming languages, databases, and DevOps tools used in production."
        />

        {/* Master Layout: Sticky Sidebar + Compact Medium Skill Category Cards */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start relative">
          
          {/* Sticky Sidebar */}
          <SkillsSidebar
            activeTopic={activeTopic}
            onSelectTopic={handleSelectCategory}
          />

          {/* Compact Medium Skills Category Cards */}
          <div className="flex-1 w-full space-y-6 relative">
            {SKILL_CATEGORIES_DATA.map((group, index) => {
              const formattedNum = `0${index + 1}`;

              return (
                <div
                  key={group.id}
                  id={`skill-cat-${group.id}`}
                  className="scroll-mt-28 relative"
                >
                  <GlassCard
                    className="p-4 sm:p-5 relative overflow-hidden group"
                    glowColor="rgba(139, 92, 246, 0.18)"
                  >
                    {/* Category Header */}
                    <div className="flex items-center justify-between gap-3 pb-3.5 mb-3.5 border-b border-white/10">
                      <div>
                        <div className="flex items-center gap-2.5">
                          <span className="text-xs font-mono font-bold text-purple-400/80">
                            {formattedNum}
                          </span>
                          <h3 className="text-base sm:text-lg font-bold text-white tracking-tight group-hover:text-purple-300 transition-colors duration-300">
                            {group.title}
                          </h3>
                          <span className="px-2 py-0.5 rounded-full text-[9px] font-mono font-semibold uppercase tracking-wider bg-purple-500/15 border border-purple-400/30 text-purple-300">
                            {group.badge}
                          </span>
                        </div>
                        <p className="text-xs text-zinc-400 mt-0.5">
                          {group.description}
                        </p>
                      </div>

                      <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-lg bg-white/[0.04] border border-white/10 text-[11px] font-mono font-medium text-purple-300 shrink-0">
                        {group.skills.length} Tech Items
                      </span>
                    </div>

                    {/* Compact Medium Skill Tile Grid */}
                    <motion.div
                      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-2.5 sm:gap-3"
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.1 }}
                    >
                      {group.skills.map((skill) => (
                        <SkillTileCard key={skill.id} skill={skill} />
                      ))}
                    </motion.div>
                  </GlassCard>
                </div>
              );
            })}
          </div>

        </div>
      </Container>
    </section>
  );
};
