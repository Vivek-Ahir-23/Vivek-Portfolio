import React from "react";
import { notFound } from "next/navigation";
import { ShieldCheck } from "lucide-react";
import { getCertificateById, CERTIFICATES_DATA } from "@/constants/certificates";
import { Container } from "@/components/layout/Container";
import { Navbar } from "@/components/layout/Navbar";
import { CertificateGridShowcase } from "@/components/sections/CertificateGridShowcase";
import { BackButton } from "@/components/ui/BackButton";

interface CertificateDetailPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return CERTIFICATES_DATA.map((cert) => ({
    id: cert.id,
  }));
}

export default async function CertificateDetailPage({ params }: CertificateDetailPageProps) {
  const { id } = await params;
  const certificate = getCertificateById(id);

  if (!certificate) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#0b0914] text-white selection:bg-purple-500/30 selection:text-white pb-24">
      {/* Sticky Header Navbar */}
      <Navbar />

      {/* Ambient Background Glow Halos */}
      <div className="absolute top-1/4 left-1/3 w-[40rem] h-[40rem] bg-purple-600/10 rounded-full blur-[180px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[35rem] h-[35rem] bg-blue-600/10 rounded-full blur-[180px] pointer-events-none -z-10" />

      <Container className="pt-28 lg:pt-36">
        {/* Back Link */}
        <div className="mb-8">
          <BackButton href="/#certificates" label="Back to Certificates Section" />
        </div>

        {/* Certificate Header Banner */}
        <div className="relative rounded-3xl bg-[#0d0b18]/90 border border-white/10 backdrop-blur-2xl p-6 sm:p-10 mb-12 overflow-hidden shadow-2xl">
          <div
            className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${certificate.gradient}`}
          />

          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <span className="text-xl font-mono font-extrabold text-purple-400">
                {certificate.number}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-purple-500/15 border border-purple-400/30 text-purple-300">
                {certificate.badge}
              </span>
            </div>

            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-emerald-500/15 border border-emerald-400/30 text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              <span>Verified Specialization</span>
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            {certificate.title}
          </h1>

          <p className="text-sm sm:text-base text-zinc-300 font-normal leading-relaxed max-w-4xl mb-6">
            {certificate.description}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10 text-xs font-mono">
            {certificate.organization && (
              <span className="text-purple-300">
                Issued By: <strong className="text-white font-bold">{certificate.organization}</strong>
              </span>
            )}
            <span className="text-zinc-400">
              Issued Year: <strong className="text-white font-bold">{certificate.year}</strong>
            </span>
          </div>
        </div>

        {/* 3 Certificates Per Row Grid Showcase with Actual Certificate Titles */}
        <CertificateGridShowcase
          certificates={certificate.certificatesList}
          certificateTitle={certificate.title}
        />
      </Container>
    </div>
  );
}
