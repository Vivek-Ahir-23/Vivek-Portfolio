import {
  Mail,
  Phone,
  MapPin,
  LucideIcon,
} from "lucide-react";

export interface ContactInfoItem {
  id: string;
  title: string;
  value: string;
  href?: string;
  iconType: "email" | "phone" | "location" | "linkedin" | "github";
  badge: string;
  gradient: string;
}

export const CONTACT_INFO_DATA: ContactInfoItem[] = [
  {
    id: "email",
    title: "Email Address",
    value: "shyaravivek2307@gmail.com",
    href: "mailto:shyaravivek2307@gmail.com",
    iconType: "email",
    badge: "Direct Mail",
    gradient: "from-sky-500 via-blue-500 to-indigo-500",
  },
  {
    id: "phone",
    title: "Phone Number",
    value: "+91 8140618829",
    href: "tel:+918140618829",
    iconType: "phone",
    badge: "Call / WhatsApp",
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
  },
  {
    id: "location",
    title: "Location",
    value: "Surat, Gujarat, India",
    iconType: "location",
    badge: "Location",
    gradient: "from-purple-500 via-violet-500 to-indigo-500",
  },
  {
    id: "linkedin",
    title: "LinkedIn Profile",
    value: "shyara-vivek",
    href: "https://www.linkedin.com/in/shyara-vivek-029771283/",
    iconType: "linkedin",
    badge: "LinkedIn",
    gradient: "from-blue-600 via-sky-500 to-cyan-400",
  },
  {
    id: "github",
    title: "GitHub Repository",
    value: "@Vivek-Ahir-23",
    href: "https://github.com/Vivek-Ahir-23",
    iconType: "github",
    badge: "GitHub",
    gradient: "from-purple-600 via-violet-500 to-pink-500",
  },
];
