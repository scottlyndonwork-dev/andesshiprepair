import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Service } from "@/lib/types";
import { PlaceholderVisual, PlaceholderIcon } from "@/components/ui/PlaceholderVisual";

const iconMap: Record<string, PlaceholderIcon> = {
  "hull-structural": "Anchor",
  machinery: "Cog",
  "shafting-propulsion": "Gauge",
  "piping-valve": "Waves",
  "welding-fabrication": "Flame",
  machining: "Wrench",
  "marine-electrical": "Zap",
  preservation: "ShieldCheck",
  "inspection-testing": "Ship",
};

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="focus-ring group flex flex-col overflow-hidden rounded-md border border-navy/10 bg-white transition-shadow hover:shadow-xl hover:shadow-navy/10"
    >
      <div className="relative overflow-hidden">
        <PlaceholderVisual
          icon={iconMap[service.id] ?? "Ship"}
          tone="navy"
          className="aspect-[16/10] transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 text-3xl font-bold text-white/80">
          {service.number}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-bold tracking-tight text-text-dark">{service.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-steel">{service.shortDescription}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-blue">
          View Capability
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
