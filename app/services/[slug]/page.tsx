import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { PlaceholderVisual } from "@/components/ui/PlaceholderVisual";
import { services, getServiceBySlug } from "@/data/services";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return pageMetadata({
    title: service.title,
    description: service.overview,
    path: `/services/${service.slug}`,
  });
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <div className="pb-20 sm:pb-28">
      <div className="relative overflow-hidden bg-navy-deep pt-32 pb-16">
        <div className="technical-grid absolute inset-0" />
        <Container className="relative">
          <nav aria-label="Breadcrumb" className="mb-5 text-xs text-white/50">
            <Link href="/services" className="focus-ring hover:text-cyan">
              Capabilities
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white/80">{service.title}</span>
          </nav>
          <Badge tone="cyan" className="mb-4">
            {service.category}
          </Badge>
          <h1 className="max-w-3xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            {service.title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70">
            {service.overview}
          </p>
        </Container>
      </div>

      <Container className="mt-14">
        <div className="grid gap-12 lg:grid-cols-[1fr_360px]">
          <div>
            <h2 className="text-xl font-bold tracking-tight text-text-dark">Technical Scope</h2>
            <ul className="mt-6 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
              {service.capabilities.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-steel">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue" />
                  {item}
                </li>
              ))}
            </ul>

            {service.typicalApplications && (
              <div className="mt-12">
                <h2 className="text-xl font-bold tracking-tight text-text-dark">
                  Typical Applications
                </h2>
                <ul className="mt-4 space-y-2">
                  {service.typicalApplications.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-steel">
                      <span className="h-1 w-1 rounded-full bg-blue" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {service.relevantVesselTypes && (
              <div className="mt-12">
                <h2 className="text-xl font-bold tracking-tight text-text-dark">
                  Relevant Vessel Types
                </h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {service.relevantVesselTypes.map((v) => (
                    <Badge key={v} tone="steel">
                      {v}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="space-y-6">
            <PlaceholderVisual
              icon="Wrench"
              tone="navy"
              className="aspect-[4/3] rounded-md"
              label={service.title}
            />
            <div className="rounded-md border border-navy/10 bg-bg-light p-6">
              <h3 className="text-base font-bold tracking-tight text-text-dark">
                Discuss Your Requirement
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-steel">
                Contact Andes to review the scope, schedule, and technical requirements for your
                vessel.
              </p>
              <Button href="/request-a-quote" className="mt-5 w-full" showArrow>
                Request a Quote
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
