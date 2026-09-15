import { MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { company } from "@/data/company";

export function WorkLocations() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="Shipboard Repair"
          title="Wherever Your Vessel Needs Us."
        />

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {company.workLocations.map((loc) => (
            <div
              key={loc}
              className="flex items-center gap-2.5 rounded-md border border-navy/10 bg-white p-4"
            >
              <MapPin className="h-4 w-4 shrink-0 text-blue" />
              <span className="text-sm font-medium text-text-dark">{loc}</span>
            </div>
          ))}
        </div>

        <p className="mt-6 text-sm text-steel">{company.workLocationsNote}</p>
      </Container>
    </section>
  );
}
