"use client";

import React from "react";
import Image from "next/image";
import { MapPin, GraduationCap, Heart, ArrowUpRight, Quote } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";

export const AboutMeCard: React.FC = () => {
  const details = [
    { icon: MapPin, text: "Surat, Gujarat, India", isFlutter: false },
    { icon: GraduationCap, text: "BCA & SAP Certified", isFlutter: false },
    { icon: null, text: "Flutter Developer", isFlutter: true },
    { icon: Heart, text: "Love to build & solve problems", isFlutter: false },
  ];

  return (
    <GlassCard className="flex flex-col gap-6 p-6 sm:p-8">
      {/* Quote Block */}
      <div className="relative p-4 rounded-xl bg-violet-600/10 border border-violet-500/30 flex items-start gap-3">
        <Quote className="w-6 h-6 text-violet-400 shrink-0 rotate-180" />
        <p className="text-xs sm:text-sm font-medium italic text-purple-200 leading-relaxed">
          "I believe great mobile apps are built by combining creativity, performance, and user-focused experiences."
        </p>
      </div>

      {/* Main Paragraphs */}
      <div className="space-y-3 text-xs sm:text-sm text-zinc-300 leading-relaxed">
        <p>
          I'm <strong className="text-white font-semibold">Vivek Shyara</strong>, a passionate Flutter Developer dedicated to building high-quality cross-platform mobile applications. I completed my Bachelor of Computer Applications (BCA) and earned a SAP Certification, strengthening my foundation in software development and modern technologies.
        </p>
        <p>
          I specialize in Flutter, Dart, Firebase, and mobile application development, creating scalable, responsive, and user-friendly applications that deliver seamless experiences across Android and iOS.
        </p>
        <p className="hidden sm:block">
          Beyond coding, I enjoy exploring new technologies, improving my development skills, and building innovative projects that solve real-world problems. I'm always eager to learn, grow, and contribute to impactful digital solutions.
        </p>
      </div>

      {/* Quick Details Badges Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
        {details.map((item, idx) => {
          const IconComp = item.icon;
          return (
            <div
              key={idx}
              className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white/[0.03] border border-white/10 text-xs font-medium text-zinc-300 hover:border-violet-500/40 transition-colors duration-300"
            >
              {item.isFlutter ? (
                <Image
                  src="/tech/flutter.png"
                  alt="Flutter Logo"
                  width={20}
                  height={20}
                  className="w-4.5 h-4.5 object-contain shrink-0 filter drop-shadow-[0_0_6px_rgba(56,189,248,0.7)]"
                />
              ) : (
                IconComp && <IconComp className="w-4 h-4 text-violet-400 shrink-0" />
              )}
              <span className="truncate">{item.text}</span>
            </div>
          );
        })}
      </div>

      {/* IDE Code Window Visual Graphic */}
      <div className="relative mt-2 rounded-xl bg-[#080612] border border-white/10 overflow-hidden font-mono text-[11px] text-zinc-400 p-4 shadow-inner">
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
            <span className="text-[10px] text-zinc-500 ml-2">about_vivek.dart</span>
          </div>
          <Image
            src="/tech/flutter.png"
            alt="Flutter Logo"
            width={16}
            height={16}
            className="w-4 h-4 object-contain opacity-80"
          />
        </div>
        <div className="space-y-1 overflow-x-auto select-none">
          <p><span className="text-purple-400">class</span> <span className="text-yellow-300">Developer</span> &#123;</p>
          <p className="pl-4"><span className="text-purple-400">final</span> String name = <span className="text-emerald-400">'Vivek Shyara'</span>;</p>
          <p className="pl-4"><span className="text-purple-400">final</span> String role = <span className="text-emerald-400">'Flutter Developer'</span>;</p>
          <p className="pl-4"><span className="text-purple-400">final</span> List&lt;String&gt; passion = [<span className="text-emerald-400">'Mobile Apps'</span>, <span className="text-emerald-400">'Clean Code'</span>];</p>
          <p>&#125;</p>
        </div>
      </div>

      {/* Action Button */}
      <div className="pt-2">
        <a href="#contact">
          <Button
            variant="outline"
            size="md"
            icon={<ArrowUpRight className="w-4 h-4 text-violet-400" />}
            iconPosition="right"
            className="w-full sm:w-auto font-semibold text-xs"
          >
            More About Me
          </Button>
        </a>
      </div>
    </GlassCard>
  );
};
