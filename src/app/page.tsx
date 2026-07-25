import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSkillsSection } from "@/components/sections/AboutSkillsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { CertificatesSection } from "@/components/sections/CertificatesSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/animations/SmoothScroll";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="min-h-screen bg-[#0b0914] text-white selection:bg-purple-500/30 selection:text-white">
        {/* Sticky Navbar */}
        <Navbar />

        {/* Hero Section */}
        <HeroSection />

        {/* About Section */}
        <AboutSkillsSection />

        {/* Skills Section */}
        <SkillsSection />

        {/* Services Section */}
        <ServicesSection />

        {/* Experience Section */}
        <ExperienceSection />

        {/* Projects Section */}
        <ProjectsSection />

        {/* Certificates Section */}
        <CertificatesSection />

        {/* Education Section */}
        <EducationSection />

        {/* Contact Section */}
        <ContactSection />

        {/* Footer Section */}
        <Footer />
      </main>
    </SmoothScroll>
  );
}
