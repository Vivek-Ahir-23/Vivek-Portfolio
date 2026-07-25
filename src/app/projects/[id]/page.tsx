import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { getProjectById, PROJECTS_DATA } from "@/constants/projects";
import { Container } from "@/components/layout/Container";
import { Navbar } from "@/components/layout/Navbar";
import { TechBadge } from "@/components/ui/TechBadge";
import { ProjectFeaturesShowcase } from "@/components/ui/ProjectFeaturesShowcase";
import { ProjectScreenshotsGrid } from "@/components/sections/ProjectScreenshotsGrid";

interface ProjectDetailPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return PROJECTS_DATA.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    notFound();
  }

  const isMobileApp = project.category.toLowerCase().includes("mobile");

  return (
    <div className="min-h-screen bg-[#0b0914] text-white selection:bg-purple-500/30 selection:text-white pb-24">
      {/* Sticky Header Navbar */}
      <Navbar />

      {/* Ambient Background Glows */}
      <div className="absolute top-1/4 left-1/3 w-[40rem] h-[40rem] bg-purple-600/10 rounded-full blur-[180px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[35rem] h-[35rem] bg-blue-600/10 rounded-full blur-[180px] pointer-events-none -z-10" />

      <Container className="pt-28 lg:pt-36">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-purple-300 hover:text-white px-4 py-2 rounded-xl bg-white/[0.04] border border-white/10 hover:bg-purple-600/20 hover:border-purple-400/40 transition-all duration-200 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
            <span>Back to Featured Projects</span>
          </Link>
        </div>

        {/* Project Header Banner */}
        <div className="relative rounded-3xl bg-[#0d0b18]/90 border border-white/10 backdrop-blur-2xl p-6 sm:p-10 mb-10 overflow-hidden shadow-2xl">
          <div
            className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient}`}
          />

          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <span className="text-xl font-mono font-extrabold text-purple-400">
                {project.number}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-purple-500/15 border border-purple-400/30 text-purple-300">
                {project.category}
              </span>
            </div>

            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-emerald-500/15 border border-emerald-400/30 text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              <span>{project.status}</span>
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            {project.title}
          </h1>

          <p className="text-sm sm:text-base text-zinc-300 font-normal leading-relaxed max-w-4xl mb-6">
            {project.description}
          </p>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-300 self-center mr-2">
              Technologies Used:
            </span>
            {project.technologies.map((tech) => (
              <TechBadge key={tech} label={tech} className="py-1.5 px-3 text-xs" />
            ))}
          </div>
        </div>

        {/* Interactive Screenshots Showcase with Fullscreen Lightbox Modal */}
        <ProjectScreenshotsGrid
          images={project.images}
          projectTitle={project.title}
          isMobileApp={isMobileApp}
        />

        {/* Premium Animated Key Features Section */}
        <ProjectFeaturesShowcase features={project.features} />
      </Container>
    </div>
  );
}
