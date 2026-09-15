import { Hero } from "@/components/hero/Hero";
import { HeroCapabilityStrip } from "@/components/hero/HeroCapabilityStrip";
import { AboutIntro } from "@/components/about/AboutIntro";
import { CapabilityFinder } from "@/components/services/CapabilityFinder";
import { ServiceGrid } from "@/components/services/ServiceGrid";
import { TechnicalCapabilitySection } from "@/components/services/TechnicalCapabilitySection";
import { VesselSelector } from "@/components/vessels/VesselSelector";
import { ProcessTimeline } from "@/components/process/ProcessTimeline";
import { QualitySection } from "@/components/quality/QualitySection";
import { HSESection } from "@/components/quality/HSESection";
import { WorkLocations } from "@/components/quality/WorkLocations";
import { ProjectGallery } from "@/components/projects/ProjectGallery";
import { EmergencyCTA } from "@/components/contact/EmergencyCTA";
import { WhyAndes } from "@/components/about/WhyAndes";

export default function Home() {
  return (
    <>
      <Hero />
      <HeroCapabilityStrip />
      <AboutIntro />
      <CapabilityFinder />
      <ServiceGrid showAll={false} />
      <TechnicalCapabilitySection />
      <VesselSelector />
      <ProcessTimeline />
      <QualitySection />
      <HSESection />
      <WorkLocations />
      <ProjectGallery preview />
      <EmergencyCTA />
      <WhyAndes />
    </>
  );
}
