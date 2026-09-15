import { MetadataRoute } from "next";
import { services } from "@/data/services";
import { projects } from "@/data/projects";

const base = "https://www.andesshiprepair.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/vessels",
    "/projects",
    "/quality-hse",
    "/emergency-repair",
    "/contact",
    "/request-a-quote",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));

  const serviceRoutes = services.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified: new Date(),
  }));

  const projectRoutes = projects.map((p) => ({
    url: `${base}/projects/${p.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...serviceRoutes, ...projectRoutes];
}
