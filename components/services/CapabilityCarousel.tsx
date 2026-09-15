import { Service } from "@/lib/types";
import { ServiceCard } from "@/components/services/ServiceCard";

export function CapabilityCarousel({ services }: { services: Service[] }) {
  return (
    <div
      role="region"
      aria-label="Capabilities, swipe to explore"
      className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 sm:hidden"
    >
      {services.map((service) => (
        <div key={service.id} className="w-[86%] shrink-0 snap-start first:pl-0 last:mr-5">
          <ServiceCard service={service} />
        </div>
      ))}
    </div>
  );
}
