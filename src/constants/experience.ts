export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  duration: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  techStack: string[];
  iconName: string;
}

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: "logispire-flutter-intern",
    company: "Logispire IT Solutions",
    role: "Flutter Developer Intern",
    duration: "November 2022 – July 2023",
    period: "08 Months",
    location: "India",
    description:
      "Worked as a Flutter Developer Intern, where I developed cross-platform mobile applications using Flutter and Dart. Integrated Firebase services and REST APIs to build scalable and user-friendly features while collaborating with senior developers in an Agile environment. Gained hands-on experience in debugging, testing, performance optimization, and delivering high-quality mobile applications from development to deployment.",
    highlights: [
      "Developed cross-platform mobile apps using Flutter & Dart",
      "Integrated Firebase Authentication, Firestore, and Push Notifications",
      "Connected applications with REST APIs & managed complex application state",
      "Optimized mobile app performance, UI responsiveness, and memory usage",
      "Collaborated with senior developers in an Agile development environment",
    ],
    techStack: ["Flutter", "Dart", "Firebase", "REST API", "Git", "State Management"],
    iconName: "Briefcase",
  },
];
