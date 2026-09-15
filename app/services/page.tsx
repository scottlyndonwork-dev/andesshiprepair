import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ServiceDirectory } from "@/components/services/ServiceDirectory";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Ship Repair & Marine Engineering Capabilities",
  description:
    "Explore Andes Ship Repair Services' full technical capability directory: hull and structural repair, machinery, propulsion, piping, fabrication, machining, electrical, preservation, and inspection & testing.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <div className="pt-28 pb-20 sm:pt-32 sm:pb-28">
      <Container>
        <SectionHeader
          eyebrow="Capabilities"
          title="Complete Marine Repair Capability"
          description="A multi-discipline scope covering hull, machinery, propulsion, piping, fabrication, electrical, preservation, and inspection."
          className="mb-12"
        />
        <ServiceDirectory />
      </Container>
    </div>
  );
}
