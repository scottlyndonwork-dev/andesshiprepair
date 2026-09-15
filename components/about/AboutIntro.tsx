import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { company } from "@/data/company";
import { LOGO_SRC } from "@/lib/assets";

export function AboutIntro() {
  return (
    <section className="py-14 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="relative flex aspect-4/3 items-center justify-center overflow-hidden rounded-md bg-navy">
            <div className="technical-grid absolute inset-0" />
            <Image
              src={LOGO_SRC}
              alt="Andes Ship Repair Services"
              width={320}
              height={320}
              className="relative h-52 w-52 sm:h-72 sm:w-72"
            />
          </div>
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
