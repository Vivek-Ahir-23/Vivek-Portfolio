import {
  Award,
  ShieldCheck,
  FileCode,
  Medal,
  LucideIcon,
} from "lucide-react";

export interface SubCertificateDetails {
  title: string;
  image: string;
}

export interface CertificateItem {
  id: string;
  number: string;
  title: string;
  organization?: string;
  year: string;
  description: string;
  iconName: "Award" | "ShieldCheck" | "FileCode" | "Medal";
  badge: string;
  gradient: string;
  glowColor: string;
  certificatesList: SubCertificateDetails[];
  subCertificatesCount?: number;
}

export const CERTIFICATE_ICON_MAP: Record<string, LucideIcon> = {
  Award,
  ShieldCheck,
  FileCode,
  Medal,
};

export const CERTIFICATES_DATA: CertificateItem[] = [
  {
    id: "sap-certifications",
    number: "01",
    title: "SAP Professional Certifications",
    organization: "SAP",
    year: "2025",
    description:
      "Completed SAP Professional certification specialization programs authorized by SAP and offered through Coursera, covering enterprise technology consulting, solution design, systems environment, and implementation.",
    iconName: "ShieldCheck",
    badge: "8 SAP Certificates",
    subCertificatesCount: 8,
    gradient: "from-sky-500 via-blue-500 to-indigo-500",
    glowColor: "rgba(56, 189, 248, 0.35)",
    certificatesList: [
      {
        title: "SAP Technology Consultant",
        image: "/certificates/sap/sap-1.png",
      },
      {
        title: "Designing an SAP Solution",
        image: "/certificates/sap/sap-2.png",
      },
      {
        title: "SAP Customer Engagement and Discovery",
        image: "/certificates/sap/sap-3.png",
      },
      {
        title: "SAP Technology Consultant Hands-on Project",
        image: "/certificates/sap/sap-4.png",
      },
      {
        title: "Implementing an SAP Solution",
        image: "/certificates/sap/sap-5.png",
      },
      {
        title: "SAP Professional Fundamentals",
        image: "/certificates/sap/sap-6.png",
      },
      {
        title: "Understanding the Enterprise Systems Environment",
        image: "/certificates/sap/sap-7.png",
      },
      {
        title: "Becoming an SAP Professional",
        image: "/certificates/sap/sap-8.png",
      },
    ],
  },
  {
    id: "flutter-course-completion",
    number: "02",
    title: "Certificate of Course Completion",
    organization: "Logispire IT Solutions",
    year: "2022–2023",
    description:
      "Successfully completed professional training in Flutter application development at Logispire IT Solutions (Grade A) and gained practical experience through real-world production projects.",
    iconName: "Award",
    badge: "Flutter Dev",
    subCertificatesCount: 1,
    gradient: "from-violet-500 via-purple-500 to-pink-500",
    glowColor: "rgba(168, 85, 247, 0.35)",
    certificatesList: [
      {
        title: "Certificate of Course Completion - Flutter Development",
        image: "/certificates/logispire-flutter.png",
      },
    ],
  },
  {
    id: "software-development-engineering",
    number: "03",
    title: "Software Development & Engineering",
    organization: "IBM",
    year: "2025",
    description:
      "Successfully completed professional certifications authorized by IBM and offered through Coursera, covering software engineering principles, programming, databases, Agile development, Scrum, and Git/GitHub version control.",
    iconName: "FileCode",
    badge: "4 IBM Certificates",
    subCertificatesCount: 4,
    gradient: "from-amber-500 via-orange-500 to-yellow-500",
    glowColor: "rgba(245, 158, 11, 0.35)",
    certificatesList: [
      {
        title: "Introduction to Software Engineering",
        image: "/certificates/ibm/ibm-1.png",
      },
      {
        title: "Introduction to Software, Programming, and Databases",
        image: "/certificates/ibm/ibm-2.png",
      },
      {
        title: "Introduction to Agile Development and Scrum",
        image: "/certificates/ibm/ibm-3.png",
      },
      {
        title: "Getting Started with Git and GitHub",
        image: "/certificates/ibm/ibm-4.png",
      },
    ],
  },
  {
    id: "professional-soft-skills",
    number: "04",
    title: "Professional & Soft Skills",
    organization: "UC Davis",
    year: "2025",
    description:
      "Successfully completed professional development certifications authorized by University of California, Davis and offered through Coursera, covering workplace professional skills, emotional intelligence, critical thinking, and growth mindset.",
    iconName: "Medal",
    badge: "4 UC Davis Certificates",
    subCertificatesCount: 4,
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    glowColor: "rgba(16, 185, 129, 0.35)",
    certificatesList: [
      {
        title: "Professional Skills for the Workplace",
        image: "/certificates/ucdavis/ucdavis-1.png",
      },
      {
        title: "Emotional and Social Intelligence",
        image: "/certificates/ucdavis/ucdavis-2.png",
      },
      {
        title: "Critical Thinking Skills for the Professional",
        image: "/certificates/ucdavis/ucdavis-3.png",
      },
      {
        title: "The Growth Mindset",
        image: "/certificates/ucdavis/ucdavis-4.png",
      },
    ],
  },
];

export function getCertificateById(id: string): CertificateItem | undefined {
  return CERTIFICATES_DATA.find((c) => c.id === id);
}
