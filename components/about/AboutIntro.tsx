import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { PlaceholderVisual } from "@/components/ui/PlaceholderVisual";
import { company } from "@/data/company";

export function AboutIntro() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <PlaceholderVisual
            icon="Ship"
            tone="navy"
            className="aspect-[4/3] rounded-md"
            label="Ship Repair"
          />
          <div>
            <SectionHeader
              eyebrow="About Andes"
              title="Your Reliable Partner in Ship Repair & Marine Engineering"
            />
            <p className="mt-6 text-base leading-relaxed text-steel">{company.overview}</p>
            <p className="mt-4 text-base leading-relaxed text-steel">{company.overviewSecondary}</p>
            <div className="mt-8">
              <Button href="/about" variant="outline" showArrow>
                Learn More About Andes
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
