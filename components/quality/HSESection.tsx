import { ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { hseItems } from "@/data/quality";

export function HSESection() {
  return (
    <section className="bg-navy py-14 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="Health, Safety & Environment"
          title="Safety Is Part of Every Job."
          dark
        />

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {hseItems.map((item) => (
            <div
              key={item}
              className="flex items-start gap-2.5 rounded-md border border-white/10 bg-white/[0.04] p-4"
            >
              <ShieldCheck className="h-5 w-5 shrink-0 text-cyan" />
              <span className="text-sm font-medium text-white/85">{item}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
