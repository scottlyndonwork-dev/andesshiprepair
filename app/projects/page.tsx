import { Metadata } from "next";
import { ProjectGallery } from "@/components/projects/ProjectGallery";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Projects & Work Gallery",
  description:
    "A gallery of the ship repair and marine engineering disciplines Andes Ship Repair Services performs, from hull and structural repair to inspection and testing.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <div className="pt-28 sm:pt-32">
      <ProjectGallery />
    </div>
  );
}
