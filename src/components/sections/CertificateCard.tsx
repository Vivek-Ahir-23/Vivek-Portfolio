"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Building2, Calendar, CheckCircle2, ArrowRight } from "lucide-react";
import { CertificateItem, CERTIFICATE_ICON_MAP } from "@/constants/certificates";
import { useVivekLoader } from "@/context/VivekLoaderContext";

interface CertificateCardProps {
  certificate: CertificateItem;
  index: number;
}

export const CertificateCard: React.FC<CertificateCardProps> = ({
  certificate,
  index,
}) => {
  const router = useRouter();
  const { triggerRedirect } = useVivekLoader();

  // Prefetch route on mount so 1st click is instant
  useEffect(() => {
    router.prefetch(`/certificates/${certificate.id}`);
  }, [router, certificate.id]);
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const IconComponent =
    CERTIFICATE_ICON_MAP[certificate.iconName] || CERTIFICATE_ICON_MAP["Award"];

  // 3D Parallax Tilt Effect on Mouse Move
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    const rY = (mouseX / (rect.width / 2)) * 7;
    const rX = -(mouseY / (rect.height / 2)) * 7;

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
    triggerRedirect(`/certificates/${certificate.id}`);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
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
      className="group relative rounded-2xl bg-[#0d0b18]/85 border border-white/[0.09] backdrop-blur-xl p-6 sm:p-7 flex flex-col justify-between h-full transition-all duration-300 hover:border-purple-500/50 hover:bg-[#120e26] shadow-[0_10px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_20px_45px_rgba(139,92,246,0.25)] select-none"
    >
      {/* Animated Gradient Top Glow Bar */}
      <div
        className={`absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r ${certificate.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full`}
      />

      <div>
        {/* Card Header Row: Icon + Badges + Number */}
        <div className="flex items-start justify-between gap-4 mb-5">
          {/* Animated Glow Icon Box */}
          <div
            style={{ transform: "translateZ(20px)" }}
            className={`relative w-13 h-13 rounded-xl bg-gradient-to-br ${certificate.gradient} p-0.5 shadow-[0_0_20px_rgba(139,92,246,0.3)] group-hover:shadow-[0_0_30px_rgba(139,92,246,0.6)] group-hover:scale-110 transition-all duration-300`}
          >
            <div className="w-full h-full rounded-[10px] bg-[#0b0914] flex items-center justify-center text-purple-300 group-hover:text-white transition-colors duration-300">
              <IconComponent className="w-6 h-6 transition-transform duration-300 group-hover:rotate-6" />
            </div>
          </div>

          {/* Top Right Badges */}
          <div style={{ transform: "translateZ(15px)" }} className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-purple-500/15 border border-purple-400/30 text-purple-300 group-hover:border-purple-400/60 transition-colors duration-300">
              {certificate.badge}
            </span>
            <span className="text-xs font-mono font-extrabold text-purple-400">
              {certificate.number}
            </span>
          </div>
        </div>

        {/* Title */}
        <div style={{ transform: "translateZ(15px)" }} className="mb-3">
          <h3 className="text-lg sm:text-xl font-extrabold text-white tracking-tight group-hover:text-purple-300 transition-colors duration-200 line-clamp-2">
            {certificate.title}
          </h3>

          {/* Organization & Year Row */}
          <div className="flex flex-wrap items-center gap-3 mt-2 text-xs font-semibold">
            {certificate.organization && (
              <div className="flex items-center gap-1.5 text-purple-300">
                <Building2 className="w-3.5 h-3.5 text-purple-400" />
                <span>{certificate.organization}</span>
              </div>
            )}
            <div className="flex items-center gap-1.5 text-zinc-400 bg-white/[0.04] px-2.5 py-0.5 rounded-full border border-white/10">
              <Calendar className="w-3 h-3 text-purple-400" />
              <span>{certificate.year}</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p
          style={{ transform: "translateZ(10px)" }}
          className="text-xs sm:text-sm text-zinc-300 font-normal leading-relaxed mb-4 group-hover:text-zinc-200 transition-colors duration-200"
        >
          {certificate.description}
        </p>
      </div>

      {/* Verified Status Footer & View Details Redirect */}
      <div style={{ transform: "translateZ(10px)" }} className="pt-4 border-t border-white/10 space-y-3">
        <div className="flex items-center justify-between text-xs text-zinc-400">
          <div className="flex items-center gap-1.5 text-emerald-400 font-mono text-[11px] font-semibold">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Verified Certification</span>
          </div>
          <span className="text-[10px] font-mono text-purple-300 font-bold uppercase tracking-widest">
            {certificate.subCertificatesCount || 1} Document{(certificate.subCertificatesCount || 1) > 1 ? "s" : ""}
          </span>
        </div>

        {/* Dynamic Route Redirect Button with Vivek Loading Transition */}
        <button
          onClick={handleRedirect}
          className="w-full py-2.5 px-4 rounded-xl bg-purple-600/20 hover:bg-purple-600 border border-purple-500/40 text-purple-300 hover:text-white text-xs font-semibold flex items-center justify-center gap-2 transition-all duration-300 group/btn shadow-md cursor-pointer"
        >
          <span>View Certificates Showcase</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
        </button>
      </div>
    </motion.div>
  );
};
