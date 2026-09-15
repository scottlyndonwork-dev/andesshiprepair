import { Project } from "@/lib/types";

// No verified Andes project case studies have been supplied yet.
// This array intentionally ships empty; the Projects page renders a
// "Capabilities & Work Gallery" fallback instead of inventing projects.
// Real entries can be added here later without changing the page code.
export const projects: Project[] = [];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
