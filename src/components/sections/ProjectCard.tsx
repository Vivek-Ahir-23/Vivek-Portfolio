"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ProjectItem } from "@/constants/projects";
import { TechBadge } from "@/components/ui/TechBadge";
import { useVivekLoader } from "@/context/VivekLoaderContext";

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const router = useRouter();
  const { triggerRedirect } = useVivekLoader();

  // Prefetch route on mount so 1st click is instant
  useEffect(() => {
    router.prefetch(`/projects/${project.id}`);
  }, [router, project.id]);
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // 3D Parallax Tilt Effect on Mouse Move
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    const rY = (mouseX / (rect.width / 2)) * 6;
    const rX = -(mouseY / (rect.height / 2)) * 6;

    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  const handleRedirect = (e: React.MouseEvent) => {
    e.preventDefault();
    triggerRedirect(`/projects/${project.id}`);
  };

  const coverImage = project.images[0] || "/projects/we-chat-1.png";

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      style={{
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      animate={{
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
        scale: isHovered ? 1.02 : 1,
      }}
      className="group relative rounded-2xl bg-[#0d0b18]/85 border border-white/[0.09] backdrop-blur-xl p-5 sm:p-6 flex flex-col justify-between h-full transition-all duration-300 hover:border-violet-500/50 hover:bg-[#120e26] shadow-[0_10px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_20px_40px_rgba(139,92,246,0.25)] select-none"
    >
      {/* Animated Gradient Top Glow Accent Bar */}
      <div
        className={`absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full`}
      />

      <div>
        {/* Top Header Row: Project Number + Category + Status Badge */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-2">
            <span className="text-sm font-mono font-extrabold text-purple-400">
              {project.number}
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold uppercase tracking-wider bg-purple-500/15 border border-purple-400/30 text-purple-300">
              {project.category}
            </span>
          </div>

          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-emerald-500/15 border border-emerald-400/30 text-emerald-400">
            {project.status}
          </span>
        </div>

        {/* Single Cover Photo Preview */}
        <div style={{ transform: "translateZ(15px)" }} className="relative w-full h-48 sm:h-52 rounded-xl overflow-hidden bg-[#0a0814] border border-white/10 mb-4 group/img">
          <Image
            src={coverImage}
            alt={`${project.title} Preview`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
            unoptimized={coverImage.startsWith("http")}
            className="object-cover object-center group-hover/img:scale-105 transition-transform duration-500 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0b18] via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Project Title */}
        <h3
          style={{ transform: "translateZ(12px)" }}
          className="text-lg sm:text-xl font-extrabold text-white tracking-tight mb-2 group-hover:text-purple-300 transition-colors duration-200 line-clamp-1"
        >
          {project.title}
        </h3>

        {/* Project Short Description */}
        <p
          style={{ transform: "translateZ(8px)" }}
          className="text-xs sm:text-sm text-zinc-300 font-normal leading-relaxed mb-4 line-clamp-3"
        >
          {project.description}
        </p>

        {/* Technology Badges */}
        <div
          style={{ transform: "translateZ(8px)" }}
          className="flex flex-wrap gap-1.5 mb-6"
        >
          {project.technologies.slice(0, 4).map((tech) => (
            <TechBadge key={tech} label={tech} />
          ))}
          {project.technologies.length > 4 && (
            <span className="text-xs font-mono text-zinc-500 self-center">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>
      </div>

      {/* Redirect Button to Project Details Page */}
      <div style={{ transform: "translateZ(10px)" }} className="pt-4 border-t border-white/10">
        <button
          onClick={handleRedirect}
          className="w-full py-2.5 px-4 rounded-xl bg-purple-600/20 hover:bg-purple-600 border border-purple-500/40 text-purple-300 hover:text-white text-xs font-semibold flex items-center justify-center gap-2 transition-all duration-300 group/btn shadow-md cursor-pointer"
        >
          <span>View Project Details</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
        </button>
      </div>
    </motion.div>
  );
};
