import { Metadata } from "next";
import { CheckCircle2, Target, Eye } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PlaceholderVisual } from "@/components/ui/PlaceholderVisual";
import { Button } from "@/components/ui/Button";
import { LeadershipGrid } from "@/components/about/LeadershipGrid";
import { company } from "@/data/company";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About Andes Ship Repair Services",
  description:
    "Learn about Andes Ship Repair Services' company overview, vision, mission, core capabilities, workforce, and leadership team based in Placer, Surigao del Norte, Philippines.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="pb-20 sm:pb-28">
      <div className="relative overflow-hidden bg-navy-deep pt-32 pb-16">
        <div className="technical-grid absolute inset-0" />
        <Container className="relative">
          <p className="mb-4 text-xs font-semibold tracking-[0.25em] text-cyan uppercase">
            About Andes
          </p>
          <h1 className="max-w-3xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Your Reliable Partner in Ship Repair & Marine Engineering
          </h1>
        </Container>
      </div>

      <Container className="mt-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <PlaceholderVisual icon="Ship" tone="navy" className="aspect-[4/3] rounded-md" label="Company Overview" />
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-text-dark">Company Overview</h2>
            <p className="mt-4 text-base leading-relaxed text-steel">{company.overview}</p>
            <p className="mt-4 text-base leading-relaxed text-steel">{company.overviewSecondary}</p>
            <p className="mt-4 text-base leading-relaxed text-steel">{company.objective}</p>
          </div>
        </div>
      </Container>

      <Container className="mt-20">
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-md border border-navy/10 bg-bg-light p-8">
            <Eye className="h-6 w-6 text-blue" />
            <h2 className="mt-4 text-xl font-bold tracking-tight text-text-dark">Vision</h2>
            <p className="mt-3 text-sm leading-relaxed text-steel">{company.vision}</p>
          </div>
          <div className="rounded-md border border-navy/10 bg-bg-light p-8">
            <Target className="h-6 w-6 text-blue" />
            <h2 className="mt-4 text-xl font-bold tracking-tight text-text-dark">Mission</h2>
            <ul className="mt-3 space-y-2.5">
              {company.mission.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-steel">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>

      <Container className="mt-20">
        <SectionHeader
          eyebrow="Core Capabilities"
          title="A Multi-Discipline Marine Repair Provider"
          description="Andes covers ship repair, marine engineering, fabrication, and maintenance as a single, coordinated technical partner."
        />
        <div className="mt-8 flex flex-wrap gap-2.5">
          {company.coreIdentity.map((item) => (
            <span
              key={item}
              className="rounded-sm bg-navy px-4 py-2 text-sm font-semibold text-white"
            >
              {item}
            </span>
          ))}
        </div>
      </Container>

      <Container className="mt-20">
        <SectionHeader
          eyebrow="Workforce"
          title="Skilled, Multi-Disciplinary Personnel"
          description="Depending on project requirements, our workforce may include:"
        />
        <div className="mt-8 flex flex-wrap gap-2.5">
          {company.workforce.map((role) => (
            <span
              key={role}
              className="rounded-sm border border-navy/10 bg-bg-light px-4 py-2 text-sm font-medium text-text-dark"
            >
              {role}
            </span>
          ))}
        </div>
        <p className="mt-5 text-sm leading-relaxed text-steel">{company.workforceNote}</p>
      </Container>

      <Container className="mt-20">
        <SectionHeader eyebrow="Leadership" title="Leadership Team" />
        <div className="mt-10">
          <LeadershipGrid />
        </div>
      </Container>

      <Container className="mt-20">
        <div className="rounded-md bg-navy p-10 sm:p-14">
          <h2 className="text-center text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Our Commitment
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {company.commitment.map((item) => (
              <div key={item.title}>
                <h3 className="text-sm font-semibold tracking-widest text-cyan uppercase">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/75">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button href="/request-a-quote" variant="secondary" showArrow>
              Request a Quote
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
