import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Accordion, AccordionItem } from "@/components/ui/Accordion";
import { qualityItems, qualityStatement } from "@/data/quality";

function ItemList() {
  return (
    <div className="grid grid-cols-1 gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
  );
}

export function QualitySection() {
  return (
    <section className="py-14 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="Quality"
          title="Quality Is Engineered Into the Work."
          description={qualityStatement}
        />

        {/* Mobile: collapsible module */}
        <div className="mt-6 rounded-md border border-navy/10 bg-white px-4 sm:hidden">
          <Accordion type="single" collapsible defaultValue="quality">
            <AccordionItem
              value="quality"
              trigger={
                <span className="text-sm font-semibold tracking-wide text-navy uppercase">
                  Quality Control Checklist
                </span>
              }
              triggerClassName="text-navy"
            >
              <div className="pb-4">
                <ItemList />
              </div>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Tablet/desktop: always-visible grid */}
        <div className="mt-12 hidden sm:block">
          <ItemList />
        </div>
      </Container>
    </section>
  );
}
