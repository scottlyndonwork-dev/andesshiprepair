import { Metadata } from "next";
import { VesselSelector } from "@/components/vessels/VesselSelector";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Vessel Types We Support",
  description:
    "Andes Ship Repair Services supports LCTs, LCUs, tugboats, barges, workboats, utility vessels, cargo vessels, tankers, passenger vessels, and other commercial and service vessels.",
  path: "/vessels",
});

export default function VesselsPage() {
  return (
    <div className="pt-16 sm:pt-20">
      <VesselSelector />
    </div>
  );
}
