import {
  Smartphone,
  Layout,
  Database,
  Globe,
  LucideIcon,
} from "lucide-react";

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  iconName: "Smartphone" | "Layout" | "Database" | "Globe";
  badge: string;
  gradient: string;
  glowColor: string;
}

export const ICON_MAP: Record<string, LucideIcon> = {
  Smartphone,
  Layout,
  Database,
  Globe,
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "flutter-app-development",
    number: "01",
    title: "Flutter App Development",
    description:
      "Build high-performance cross-platform mobile applications using Flutter with clean architecture, responsive UI, and excellent user experience.",
    iconName: "Smartphone",
    badge: "Mobile",
    gradient: "from-sky-500 via-blue-500 to-indigo-500",
    glowColor: "rgba(56, 189, 248, 0.35)",
  },
  {
    id: "responsive-ui-design",
    number: "02",
    title: "Responsive UI Design",
    description:
      "Design beautiful, responsive, and user-friendly interfaces that work seamlessly across desktop, tablet, and mobile devices.",
    iconName: "Layout",
    badge: "UI / UX",
    gradient: "from-violet-500 via-purple-500 to-pink-500",
    glowColor: "rgba(168, 85, 247, 0.35)",
  },
  {
    id: "firebase-integration",
    number: "03",
    title: "Firebase Integration",
    description:
      "Integrate Firebase Authentication, Firestore, Storage, Push Notifications, and Cloud Services for scalable applications.",
    iconName: "Database",
    badge: "Backend",
    gradient: "from-amber-500 via-orange-500 to-yellow-500",
    glowColor: "rgba(245, 158, 11, 0.35)",
  },
  {
    id: "rest-api-integration",
    number: "04",
    title: "REST API Integration",
    description:
      "Connect applications with secure REST APIs, manage network requests, JSON parsing, and state management efficiently.",
    iconName: "Globe",
    badge: "API & Data",
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    glowColor: "rgba(16, 185, 129, 0.35)",
  },
];
