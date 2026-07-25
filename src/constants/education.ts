import { GraduationCap, BookOpen, LucideIcon } from "lucide-react";

export interface EducationItem {
  id: string;
  number: string;
  degree: string;
  college: string;
  university: string;
  duration: string;
  cgpa?: string;
  status: string;
  description: string;
  iconName: "GraduationCap" | "BookOpen";
  badge: string;
  gradient: string;
  glowColor: string;
  highlights: string[];
}

export const EDUCATION_ICON_MAP: Record<string, LucideIcon> = {
  GraduationCap,
  BookOpen,
};

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: "bca-bhagwan-mahavir",
    number: "01",
    degree: "Bachelor of Computer Applications (BCA)",
    college: "Bhagwan Mahavir College of Computer Application",
    university: "Bhagwan Mahavir University",
    duration: "2021 – 2024",
    cgpa: "8.14 / 10",
    status: "Completed",
    description:
      "Completed Bachelor of Computer Applications with a strong academic foundation in programming, software engineering, database management, networking, and mobile application development.",
    iconName: "GraduationCap",
    badge: "Bachelor's Degree",
    gradient: "from-sky-500 via-blue-500 to-indigo-500",
    glowColor: "rgba(56, 189, 248, 0.35)",
    highlights: [
      "Graduated with High CGPA: 8.14 / 10",
      "Software Engineering Principles",
      "Database Systems & Data Structures",
      "Mobile Application Development (Flutter)",
    ],
  },
  {
    id: "mca-swarrnim",
    number: "02",
    degree: "Master of Computer Applications (MCA)",
    college: "Swarrnim School of Computing & IT",
    university: "Swarrnim Startup & Innovation University",
    duration: "2025 – 2027",
    status: "Currently Pursuing",
    description:
      "Currently pursuing a Master of Computer Applications to strengthen advanced knowledge in software engineering, cloud computing, AI technologies, full-stack development, and scalable application architecture.",
    iconName: "BookOpen",
    badge: "Master's Degree",
    gradient: "from-purple-500 via-violet-500 to-indigo-500",
    glowColor: "rgba(168, 85, 247, 0.35)",
    highlights: [
      "Advanced Software Engineering",
      "Cloud Computing & Distributed Systems",
      "Full-Stack Web & Mobile Architecture",
      "AI Technologies & Scalable Systems",
    ],
  },
];
