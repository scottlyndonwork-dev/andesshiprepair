import { Metadata } from "next";
import { QualitySection } from "@/components/quality/QualitySection";
import { HSESection } from "@/components/quality/HSESection";
import { WorkLocations } from "@/components/quality/WorkLocations";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Quality & HSE",
  description:
    "How Andes Ship Repair Services approaches quality control and health, safety, and environmental management on every repair and fabrication project.",
  path: "/quality-hse",
});

export default function QualityHSEPage() {
  return (
    <div className="pt-16 sm:pt-20">
      <QualitySection />
      <HSESection />
      <WorkLocations />
    </div>
  );
}
