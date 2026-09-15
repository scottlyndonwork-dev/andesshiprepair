"use client";

import Link from "next/link";
import { Ship, Cog, Flame, Wrench, Waves, Zap, ShieldCheck, Settings, LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Marquee } from "@/components/ui/Marquee";
import { company } from "@/data/company";
import { capabilityFinderCategories, getServiceBySlug } from "@/data/services";

const icons: Record<string, LucideIcon> = {
  "Ship Repair": Ship,
  "Marine Engineering": Cog,
  "Hull & Steel Fabrication": Flame,
  Machining: Wrench,
  Piping: Waves,
  Mechanical: Settings,
  Electrical: Zap,
  "Marine Maintenance": ShieldCheck,
};

const linkSource: Record<string, string> = {
  "Ship Repair": "hull-structural-repair",
  "Marine Engineering": "shafting-bearing-propulsion",
  "Hull & Steel Fabrication": "welding-fabrication",
  Machining: "machining",
  Piping: "piping-valve-works",
  Mechanical: "machinery-repair-maintenance",
  Electrical: "marine-electrical",
  "Marine Maintenance": "blasting-painting-preservation",
};

const captionSource: Record<string, string> = {
  "Ship Repair": "hull-structural",
  "Marine Engineering": "propulsion",
  "Hull & Steel Fabrication": "welding-fabrication",
  Machining: "machining",
  Piping: "piping",
  Mechanical: "machinery",
  Electrical: "electrical",
  "Marine Maintenance": "preservation",
};

function caption(item: string) {
  const id = captionSource[item];
  return capabilityFinderCategories.find((c) => c.id === id)?.items.slice(0, 3).join(" · ") ?? "";
}

function href(item: string) {
  const slug = linkSource[item];
  return getServiceBySlug(slug) ? `/services/${slug}` : "/services";
}

export function HeroCapabilityStrip() {
  return (
    <div className="relative z-10 border-b border-navy/10 bg-navy py-5">
      <Container>
        {/* Mobile: continuous auto-scrolling ticker of tappable chips */}
        <div className="-mx-5 sm:hidden">
          <Marquee durationSeconds={22} gap="gap-2">
            {company.capabilityStrip.map((item) => {
              const Icon = icons[item] ?? Ship;
              return (
                <Link
                  key={item}
                  href={href(item)}
                  className="focus-ring flex shrink-0 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-xs font-semibold whitespace-nowrap text-white/85 uppercase transition-colors active:bg-white/15"
                >
                  <Icon className="h-3.5 w-3.5 shrink-0 text-cyan" strokeWidth={1.5} />
                  {item}
                </Link>
              );
            })}
          </Marquee>
        </div>

        {/* Desktop/tablet: wrapped row with hover caption */}
        <div className="hidden flex-wrap items-center justify-center gap-x-8 gap-y-4 sm:flex sm:justify-between">
          {company.capabilityStrip.map((item) => {
            const Icon = icons[item] ?? Ship;
            return (
              <Link key={item} href={href(item)} className="group relative">
                <span className="flex items-center gap-2.5 text-sm font-semibold tracking-[0.15em] text-white/80 uppercase transition-colors group-hover:text-cyan">
                  <Icon className="h-4 w-4 shrink-0 text-cyan" strokeWidth={1.5} />
                  {item}
                </span>
                <div
                  role="tooltip"
                  className="pointer-events-none absolute bottom-full left-1/2 mb-3 w-56 -translate-x-1/2 rounded-sm border border-white/10 bg-navy-deep p-3 text-center text-xs leading-relaxed text-white/70 opacity-0 shadow-xl transition-opacity duration-150 group-hover:opacity-100 group-focus-within:opacity-100"
                >
                  {caption(item)}
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
