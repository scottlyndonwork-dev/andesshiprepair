import { Metadata } from "next";
import { EmergencyCTA } from "@/components/contact/EmergencyCTA";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Emergency Repair Support",
  description:
    "Andes Ship Repair Services can provide support for urgent marine repair requirements, subject to manpower, equipment, location, and project availability.",
  path: "/emergency-repair",
});

export default function EmergencyRepairPage() {
  return (
    <div className="pt-16 sm:pt-20">
      <EmergencyCTA />
    </div>
  );
}
