import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ServiceCard } from "@/components/services/ServiceCard";
import { CapabilityCarousel } from "@/components/services/CapabilityCarousel";
import { Button } from "@/components/ui/Button";
import { services } from "@/data/services";

export function ServiceGrid({ showAll = true }: { showAll?: boolean }) {
  return (
    <section className="py-14 sm:py-28">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeader
            eyebrow="Capabilities"
            title="Complete Marine Repair Capability"
            description="A multi-discipline scope covering hull, machinery, propulsion, piping, fabrication, electrical, preservation, and inspection."
          />
        </div>

        <div className="mt-8 sm:mt-12">
          <CapabilityCarousel services={services} />
          <div className="hidden gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>

        {!showAll && (
          <div className="mt-10 text-center">
            <Button href="/services" variant="outline" showArrow>
              View All Capabilities
            </Button>
          </div>
        )}
      </Container>
    </section>
  );
}
