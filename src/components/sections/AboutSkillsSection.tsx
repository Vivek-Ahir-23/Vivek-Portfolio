"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Award, BookOpen, Layers } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AboutMeCard } from "@/components/sections/AboutMeCard";
import { GlassCard } from "@/components/ui/GlassCard";

export const AboutSkillsSection: React.FC = () => {
  const stats = [
    {
      icon: BookOpen,
      imageSrc: null,
      value: "8.14",
      label: "CGPA Score",
      description: "Graduation Academic Score (BCA)",
      color: "from-violet-500 to-indigo-500",
    },
    {
      icon: Award,
      imageSrc: null,
      value: "15+",
      label: "Certificates",
      description: "Completed Professional Courses & SAP",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: Layers,
      imageSrc: null,
      value: "4+",
      label: "Projects Completed",
      description: "Full-featured Mobile Applications",
      color: "from-purple-500 to-violet-500",
    },
    {
      icon: null,
      imageSrc: "/tech/flutter.png",
      value: "Flutter",
      label: "Specialization",
      description: "Cross-Platform iOS & Android Dev",
      color: "from-sky-500 via-blue-600 to-cyan-400",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="about"
      className="relative w-full py-12 lg:py-16 bg-[#0b0914] overflow-hidden"
    >
      {/* Background Ambient Halos */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-violet-600/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <Container>
        {/* Section Header */}
        <SectionHeader
          badgeText="ABOUT ME"
          title="Passionate about creating"
          highlightText="digital experiences"
          subtitle="The person behind the code — building modern mobile applications with clean architecture."
        />

        {/* 2-Column Responsive Layout */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {/* Left Column: About Me Detailed Bio Card */}
          <motion.div variants={itemVariants} className="lg:col-span-7">
            <AboutMeCard />
          </motion.div>

          {/* Right Column: Key Metrics & Statistics Grid */}
          <motion.div variants={itemVariants} className="lg:col-span-5 flex flex-col gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {stats.map((stat, idx) => {
                const IconComp = stat.icon;
                return (
                  <GlassCard
                    key={idx}
                    className="p-5 flex items-center gap-4 group"
                    glowColor="rgba(168, 85, 247, 0.25)"
                  >
                    {/* Icon Badge */}
                    <div
                      className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${stat.color} flex items-center justify-center text-white shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300 p-2.5`}
                    >
                      {stat.imageSrc ? (
                        <Image
                          src={stat.imageSrc}
                          alt="Flutter Logo"
                          width={32}
                          height={32}
                          className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                        />
                      ) : (
                        IconComp && <IconComp className="w-6 h-6 text-white" />
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex flex-col">
                      <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-2">
                        {stat.value}
                        {stat.imageSrc && (
                          <span className="text-xs px-2 py-0.5 rounded-md bg-sky-500/20 border border-sky-400/40 text-sky-300 font-semibold uppercase tracking-wider">
                            SDK
                          </span>
                        )}
                      </span>
                      <span className="text-xs font-semibold text-purple-300">
                        {stat.label}
                      </span>
                      <span className="text-[11px] text-zinc-400 mt-0.5">
                        {stat.description}
                      </span>
                    </div>
                  </GlassCard>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};
