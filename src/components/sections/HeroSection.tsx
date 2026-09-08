"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import dynamic from "next/dynamic";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { HeroProfileCard } from "@/components/ui/HeroProfileCard";
import { SkillsMarqueeTicker } from "@/components/ui/SkillsMarqueeTicker";

const HeroOrbitCanvas = dynamic(
  () => import("@/components/3d/HeroOrbitCanvas").then((mod) => mod.HeroOrbitCanvas),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full flex items-center justify-center pointer-events-none">
        <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-violet-600/20 blur-[90px] animate-pulse" />
      </div>
    ),
  }
);

export const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  // Framer Motion staggered entrance container variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative w-full pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20 flex flex-col justify-start overflow-hidden bg-[#0b0914] min-h-fit"
    >
      {/* Background Ambient Radial Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/15 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/3 right-1/4 w-[30rem] h-[30rem] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Content */}
          <motion.div
            className="lg:col-span-7 flex flex-col items-start text-left space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Status Pill Badge */}
            <motion.div variants={itemVariants}>
              <Badge roleText="Flutter Developer" statusDot={true} />
            </motion.div>

            {/* Headline */}
            <motion.div variants={itemVariants} className="space-y-1">
              <h2 className="text-xl sm:text-2xl font-medium text-zinc-300">
                Hi, I'm 👋
              </h2>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white">
                Shyara{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 drop-shadow-[0_0_25px_rgba(139,92,246,0.4)]">
                  Vivek
                </span>
              </h1>
            </motion.div>

            {/* Tagline & Main Introduction */}
            <motion.div variants={itemVariants} className="space-y-3 max-w-2xl">
              <p className="text-lg sm:text-xl font-medium text-zinc-200 leading-relaxed">
                I build beautiful mobile applications with{" "}
                <span className="text-purple-400 font-semibold underline decoration-purple-500/50 underline-offset-4">
                  modern UI, clean architecture
                </span>{" "}
                and scalable solutions.
              </p>
              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                I'm a Software Developer specializing in Flutter and Firebase, with experience in HTML, CSS, and JavaScript. I love developing high-quality mobile applications and responsive websites while continuously learning new technologies to build innovative and impactful digital solutions.
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <a href="#projects">
                <Button
                  variant="primary"
                  size="lg"
                  icon={<ArrowUpRight className="w-4 h-4" />}
                  iconPosition="right"
                  className="font-semibold text-sm shadow-[0_0_25px_rgba(139,92,246,0.5)]"
                >
                  View Projects
                </Button>
              </a>

              <a href="#contact">
                <Button
                  variant="outline"
                  size="lg"
                  icon={<Mail className="w-4 h-4 text-purple-400" />}
                  iconPosition="right"
                  className="font-semibold text-sm border-purple-500/40 hover:bg-purple-500/10"
                >
                  Contact Me
                </Button>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: 3D WebGL Scene + Interactive Cyber Profile Card */}
          <motion.div
            className="lg:col-span-5 relative flex items-center justify-center overflow-visible"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* 3D WebGL Orbit Canvas Scene */}
            <div className="absolute -inset-24 z-0 overflow-visible pointer-events-none">
              <HeroOrbitCanvas />
            </div>

            {/* Interactive 3D Cyber Profile Card */}
            <div className="relative z-10 w-full flex items-center justify-center">
              <HeroProfileCard />
            </div>
          </motion.div>

        </div>

        {/* Infinite Horizontal Skills Navigation Marquee Ticker (Right-to-Left, Down Side of Profile Image) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-full mt-24 sm:mt-28 lg:mt-32"
        >
          <SkillsMarqueeTicker />
        </motion.div>
      </Container>
    </section>
  );
};
