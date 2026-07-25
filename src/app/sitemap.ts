import { MetadataRoute } from "next";
import { PROJECTS_DATA } from "@/constants/projects";
import { CERTIFICATES_DATA } from "@/constants/certificates";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://shyara-vivek.vercel.app";

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];

  const projectRoutes: MetadataRoute.Sitemap = PROJECTS_DATA.map((project) => ({
    url: `${baseUrl}/projects/${project.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const certificateRoutes: MetadataRoute.Sitemap = CERTIFICATES_DATA.map((cert) => ({
    url: `${baseUrl}/certificates/${cert.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...projectRoutes, ...certificateRoutes];
}
