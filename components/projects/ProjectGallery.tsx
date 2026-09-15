import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { PlaceholderVisual, PlaceholderIcon } from "@/components/ui/PlaceholderVisual";
import { projects } from "@/data/projects";
import { services } from "@/data/services";

const galleryIcons: PlaceholderIcon[] = [
  "Anchor",
  "Cog",
  "Gauge",
  "Waves",
  "Flame",
  "Wrench",
  "Zap",
  "ShieldCheck",
  "Ship",
];

export function ProjectGallery({ preview = false }: { preview?: boolean }) {
  if (projects.length > 0) {
    // Real project case studies exist — render them once supplied.
    return null;
  }

  const items = preview ? services.slice(0, 6) : services;

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="Capabilities & Work Gallery"
          title="Marine Repair Work, By Discipline."
          description="Verified project case studies are being compiled. In the meantime, this gallery illustrates the scope of work Andes performs across each discipline."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((service, i) => (
            <div
              key={service.id}
              className="overflow-hidden rounded-md border border-navy/10 bg-white"
            >
              <PlaceholderVisual
                icon={galleryIcons[i % galleryIcons.length]}
                tone="navy"
                className="aspect-[16/10]"
                label={service.category}
              />
              <div className="p-5">
                <h3 className="text-base font-bold tracking-tight text-text-dark">
                  {service.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-steel">
                  {service.shortDescription}
                </p>
              </div>
            </div>
          ))}
        </div>

        {preview && (
          <div className="mt-10 text-center">
            <Button href="/projects" variant="outline" showArrow>
              View Full Gallery
            </Button>
          </div>
        )}
      </Container>
    </section>
  );
}
