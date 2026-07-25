"use client";

import React from "react";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { SKILL_RADAR_DATA } from "@/constants/skills";

export const SkillsChart: React.FC = () => {
  return (
    <div className="w-full h-[280px] sm:h-[320px] relative flex items-center justify-center">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="72%" data={SKILL_RADAR_DATA}>
          <PolarGrid stroke="rgba(255, 255, 255, 0.15)" strokeDasharray="3 3" />
          <PolarAngleAxis
            dataKey="subject"
            tick={{ fill: "#c084fc", fontSize: 12, fontWeight: 600 }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "rgba(11, 9, 20, 0.95)",
              borderColor: "rgba(139, 92, 246, 0.4)",
              borderRadius: "0.75rem",
              color: "#fff",
            }}
          />
          <Radar
            name="Skill Score"
            dataKey="A"
            stroke="#a855f7"
            fill="#8b5cf6"
            fillOpacity={0.4}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};
