import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { Analytics } from "@/components/analytics/Analytics";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://shyara-vivek.vercel.app"),
  title: {
    default: "Shyara Vivek - Flutter & Software Developer Portfolio",
    template: "%s | Shyara Vivek",
  },
  description:
    "Passionate Flutter Developer & Software Engineer building beautiful, high-performance mobile applications and modern web solutions with clean architecture.",
  keywords: [
    "Shyara Vivek",
    "Flutter Developer",
    "Software Developer",
    "Mobile Application Engineer",
    "Dart",
    "Firebase",
    "Next.js",
    "React",
    "Portfolio",
  ],
  authors: [{ name: "Shyara Vivek" }],
  creator: "Shyara Vivek",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Shyara Vivek - Flutter & Software Developer Portfolio",
    description:
      "Passionate Flutter Developer building high-performance mobile applications and modern web solutions with clean architecture.",
    siteName: "Shyara Vivek Portfolio",
    images: [
      {
        url: "/hero-profile.png",
        width: 800,
        height: 800,
        alt: "Shyara Vivek - Flutter Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shyara Vivek - Flutter & Software Developer",
    description:
      "Passionate Flutter Developer building high-performance mobile applications and modern web solutions.",
    images: ["/hero-profile.png"],
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Shyara Vivek",
  jobTitle: "Flutter Developer & Software Engineer",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://shyara-vivek.vercel.app",
  image: "/hero-profile.png",
  sameAs: [
    "https://github.com/vivekshycoder",
    "https://linkedin.com/in/shyara-vivek",
  ],
  knowsAbout: [
    "Flutter",
    "Dart",
    "Firebase",
    "Software Engineering",
    "Mobile App Development",
    "React",
    "Next.js",
    "JavaScript",
    "HTML/CSS",
  ],
};

import { VivekLoaderProvider } from "@/context/VivekLoaderContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning className="min-h-full flex flex-col bg-[#0b0914] text-white">
        <VivekLoaderProvider>
          <CustomCursor />
          {children}
          <Analytics />
        </VivekLoaderProvider>
      </body>
    </html>
  );
}
