import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { company } from "@/data/company";

export function WhyAndes() {
  return (
    <section className="bg-bg-light py-14 sm:py-28">
      <Container>
        <SectionHeader eyebrow="Why Andes" title="Why Choose Andes?" align="center" className="mx-auto" />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {company.whyAndes.map((item, i) => (
            <div key={item.title} className="rounded-md border border-navy/10 bg-white p-6">
              <span className="mb-4 block text-2xl font-bold text-blue/30">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-base font-bold tracking-tight text-text-dark">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-steel">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
