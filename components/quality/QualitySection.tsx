import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { qualityItems, qualityStatement } from "@/data/quality";

export function QualitySection() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="Quality"
          title="Quality Is Engineered Into the Work."
          description={qualityStatement}
        />

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {qualityItems.map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 rounded-md border border-navy/10 bg-white p-4"
            >
              <CheckCircle2 className="h-5 w-5 shrink-0 text-blue" />
              <span className="text-sm font-medium text-text-dark">{item}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
